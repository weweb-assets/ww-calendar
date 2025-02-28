<template>
    <vue-cal
        ref="vueCal"
        :key="content.themeColor + '-' + content.startWeekOnSunday + '-' + content.watchRealTime"
        :disable-views="disabledViews"
        :active-view="isMobileView ? content.mobileDefaultView : currentView"
        :hide-view-selector="disabledViews.length >= 4 || (isMobileView && content.hideViewSelectorOnMobile)"
        :hide-weekends="content.hideWeekends"
        :events="events"
        :split-days="calendars"
        :showAllDayEvents="content.showAllDayEvents"
        :events-count-on-year-view="content.showCountOnYearView"
        :locale="currentLang"
        :class="[content.themeColor, { 'mobile-view': isMobileView }]"
        :style="{ ...customThemeStyle, ...calendarsStyle, ...categoriesStyle }"
        :time="!content.enableTimelessMode"
        :timeStep="content.timestep"
        :timeFrom="content.timeStart * 60"
        :timeTo="content.timeEnd * 60"
        :startWeekOnSunday="content.startWeekOnSunday"
        :hideWeekdays="content.hideWeekdays"
        :twelveHour="content.twelveHour"
        :small="content.daySize === 'small' || (isMobileView && content.daySize !== 'xsmall')"
        :xsmall="content.daySize === 'xsmall' || (isMobileView && content.daySize === 'xsmall')"
        :watchRealTime="content.watchRealTime"
        :todayButton="content.todayButton"
        v-model:selectedDate="internalSelectedDate"
        @event-click="handleEventClick"
        @cell-click="handleCellClick"
        @view-change="handleViewChange"
        @ready="handleReady"
    />
</template>

<script>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';

import * as en from 'vue-cal/dist/i18n/en.es.js';
import * as fr from 'vue-cal/dist/i18n/fr.es.js';
import * as es from 'vue-cal/dist/i18n/es.es.js';
import * as de from 'vue-cal/dist/i18n/de.es.js';
import * as nl from 'vue-cal/dist/i18n/nl.es.js';
import * as it from 'vue-cal/dist/i18n/it.es.js';
import * as pt from 'vue-cal/dist/i18n/pt-br.es.js';
import * as ar from 'vue-cal/dist/i18n/ar.es.js';

const locales = {
    ar: ar,
    en: en,
    fr: fr,
    es: es,
    de: de,
    nl: nl,
    it: it,
    'pt-br': pt,
};

const UNBOUNCED_DELAY_IN_MS = 200;

export default {
    components: { VueCal },
    props: {
        uid: { type: String, required: true },
        content: { type: Object, required: true },
        /* wwEditor:start */
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
    },
    emits: ['trigger-event', 'update:content:effect'],
    setup(props) {
        const { value: selectedDate, setValue: setSelectedDate } = wwLib.wwVariable.useComponentVariable({
            uid: props.uid,
            name: 'selectedDate',
            type: 'string',
            defaultValue: computed(() => String(props.content.selectedDate || '')),
        });
        const { value: currentViewObj, setValue: setCurrentViewObj } = wwLib.wwVariable.useComponentVariable({
            uid: props.uid,
            name: 'currentView',
            type: 'object',
            defaultValue: {},
        });

        const vueCal = ref(null);
        const elementWidth = ref(1000); // Default width
        let resizeObserver = null;

        const getElement = () => {
            if (!vueCal.value) return null;

            // Access the component's root DOM element
            const el = vueCal.value.$el;
            if (el && el.nodeType === 1) {
                return el;
            }

            return null;
        };

        // Custom resize observer handler
        const observeElement = () => {
            if (!vueCal.value || typeof ResizeObserver === 'undefined') return;

            // Clean up any existing observer
            const el = getElement();
            try {
                resizeObserver = new ResizeObserver(entries => {
                    // Use requestAnimationFrame to avoid ResizeObserver loop errors
                    window.requestAnimationFrame(() => {
                        if (!entries.length) return;

                        const entry = entries[0];
                        // Get the content rectangle width or use borderBoxSize if available
                        if (entry.contentRect) {
                            elementWidth.value = entry.contentRect.width;
                        } else if (entry.borderBoxSize && entry.borderBoxSize.length > 0) {
                            elementWidth.value = entry.borderBoxSize[0].inlineSize;
                        }
                    });
                });

                // Start observing the element
                resizeObserver.observe(el);
            } catch (error) {
                console.error('ResizeObserver error:', error, el);
                // Fallback to window width if ResizeObserver fails
                elementWidth.value = window.innerWidth;
            }
        };

        // Computed property to determine if we're in mobile view
        const isMobileView = computed(() => {
            return elementWidth.value < 768;
        });

        // Set up and tear down the observer
        onMounted(() => {
            observeElement();
        });

        onBeforeUnmount(() => {
            if (resizeObserver) {
                resizeObserver.disconnect();
                resizeObserver = null;
            }
        });

        return {
            selectedDate,
            setSelectedDate,
            currentViewObj,
            setCurrentViewObj,
            isMobileView,
            vueCal,
        };
    },
    data: () => ({
        currentView: null,
        lastSelectedDateTimestamp: null,
    }),
    computed: {
        /**
         * Check if the selected language is supported.
         * If so, use it. Otherwise, fallback to English.
         *
         * @returns {string|string}
         * @see https://github.com/antoniandre/vue-cal/blob/main/src/vue-cal/i18n/en.json Example of custom locale (as object)
         * @see https://github.com/antoniandre/vue-cal/blob/b41fcee7909b11d0ed5234684171ae792312367b/src/documentation/index.vue#LL362C1-L404C2 List of all supported locales
         */
        currentLang() {
            // allows locale override
            if (this.content.lang && typeof this.content.lang === 'object') return this.content.lang;
            const selectedLocale = locales[this.content.lang];
            return selectedLocale || locales.en;
        },
        customThemeStyle() {
            return {
                '--calendar-font-family': this.content.fontFamily || 'unset',
                '--calendar-font-weight': this.content.fontWeight || 100,
                '--calendar-theme-menu-color': this.content.themeMenuColor,
                '--calendar-theme-title-bar-color': this.content.themeTitleBarColor,
                '--calendar-theme-cell-today-color': this.content.themeTodayCellColor,
                '--calendar-theme-cell-selected-color': this.content.themeSelectedCellColor,
                '--calendar-default-event-color': this.content.defaultEventColor || 'unset',
                '--calendar-default-event-text-color': this.content.defaultEventTextColor || 'unset',
                '--calendar-default-event-title-size': this.content.defaultEventTitleSize || 'unset',
                '--calendar-default-event-time-size': this.content.defaultEventTimeSize || 'unset',
                '--calendar-default-event-content-size': this.content.defaultEventContentSize || 'unset',
            };
        },
        defaultView() {
            return this.content.defaultView;
        },
        disabledViews() {
            return [
                this.content.enableYearsView ? null : 'years',
                this.content.enableYearView ? null : 'year',
                this.content.enableMonthView ? null : 'month',
                this.content.enableWeekView ? null : 'week',
                this.content.enableDayView ? null : 'day',
            ].filter(view => !!view);
        },
        calendars() {
            const data = wwLib.wwUtils.getDataFromCollection(this.content.calendars);
            if (!Array.isArray(data)) return [];
            return data.map((cal, index) => ({
                id: wwLib.wwUtils.resolveObjectPropertyPath(cal, this.content.calendarIdPath || 'id') || '',
                label: wwLib.wwUtils.resolveObjectPropertyPath(cal, this.content.calendarLabelPath || 'label') || '',
                color: wwLib.wwUtils.resolveObjectPropertyPath(cal, this.content.calendarColorPath || 'color') || null,
                class: 'split-' + index,
            }));
        },
        calendarsStyle() {
            return this.calendars.reduce(
                (acc, next, index) => ({
                    ...acc,
                    ['--calendar-split-' + index + '-bg-color']: next.color,
                }),
                {}
            );
        },
        categories() {
            const data = wwLib.wwUtils.getDataFromCollection(this.content.categories);
            if (!Array.isArray(data)) return [];
            return data.map((cat, index) => ({
                name: wwLib.wwUtils.resolveObjectPropertyPath(cat, this.content.categoryNamePath || 'name') || '',
                color: wwLib.wwUtils.resolveObjectPropertyPath(cat, this.content.categoryColorPath || 'color') || null,
                textColor:
                    wwLib.wwUtils.resolveObjectPropertyPath(cat, this.content.categoryColorTextPath || 'textColor') ||
                    null,
                class: 'cat-' + index,
            }));
        },
        categoriesStyle() {
            return this.categories.reduce(
                (acc, next, index) => ({
                    ...acc,
                    ['--calendar-category-' + index + '-bg-color']: next.color,
                    ['--calendar-category-' + index + '-text-color']: next.textColor,
                }),
                {}
            );
        },
        events() {
            const data = wwLib.wwUtils.getDataFromCollection(this.content.events);
            if (!Array.isArray(data)) return [];
            const events = data.map(event => {
                const category = this.categories.find(
                    cat =>
                        cat.name ===
                        wwLib.wwUtils.resolveObjectPropertyPath(event, this.content.eventCategoryPath || 'category')
                );
                return {
                    rawEventData: event,
                    start:
                        new Date(
                            wwLib.wwUtils.resolveObjectPropertyPath(event, this.content.eventStartPath || 'start')
                        ) || new Date(),
                    end:
                        new Date(wwLib.wwUtils.resolveObjectPropertyPath(event, this.content.eventEndPath || 'end')) ||
                        new Date(),
                    title: wwLib.wwUtils.resolveObjectPropertyPath(event, this.content.eventTitlePath || 'title') || '',
                    content:
                        wwLib.wwUtils.resolveObjectPropertyPath(event, this.content.eventContentPath || 'content') ||
                        '',
                    allDay:
                        wwLib.wwUtils.resolveObjectPropertyPath(event, this.content.eventAllDayPath || 'allDay') ||
                        false,
                    split:
                        wwLib.wwUtils.resolveObjectPropertyPath(event, this.content.eventCalendarPath || 'calendar') ||
                        null,
                    calendar:
                        wwLib.wwUtils.resolveObjectPropertyPath(event, this.content.eventCalendarPath || 'calendar') ||
                        null,
                    class: category ? category.class : 'calendar-default-event-color',
                };
            });
            return events;
        },
        internalSelectedDate: {
            get() {
                return this.selectedDate;
            },
            set(value) {
                const dateString = this.formatDate(value);
                const delayFromLastSelection = Date.now() - this.lastSelectedDateTimestamp;
                // Unbounced behavior to avoid double click event from vue-cal
                if (dateString !== this.selectedDat && delayFromLastSelection > UNBOUNCED_DELAY_IN_MS) {
                    this.setSelectedDate(dateString);
                    this.lastSelectedDateTimestamp = Date.now();
                }
            },
        },
    },
    watch: {
        /* wwEditor:start */
        'wwEditorState.boundProps.events'(isBind) {
            if (!isBind)
                this.$emit('update:content:effect', {
                    eventStartPath: null,
                    eventEndPath: null,
                    eventTitlePath: null,
                    eventContentPath: null,
                    eventAllDayPath: null,
                    eventCalendarPath: null,
                    eventCategoryPath: null,
                });
        },
        'wwEditorState.boundProps.calendars'(isBind) {
            if (!isBind)
                this.$emit('update:content:effect', {
                    calendarIdPath: null,
                    calendarLabelPath: null,
                    calendarColorPath: null,
                });
        },
        'wwEditorState.boundProps.categories'(isBind) {
            if (!isBind)
                this.$emit('update:content:effect', {
                    categoryNamePath: null,
                    categoryColorPath: null,
                    categoryColorTextPath: null,
                });
        },
        /* wwEditor:end */
        'content.defaultView': {
            immediate: true,
            handler(value) {
                this.currentView = value;
            },
        },
        'content.selectedDate'(value) {
            this.internalSelectedDate = value;
        },
    },
    methods: {
        handleEventClick(event, domEvent) {
            this.$emit('trigger-event', {
                name: 'event:click',
                event: {
                    rawEventData: event.rawEventData,
                    event: {
                        start: event.start,
                        startISO: event.start.toISOString(),
                        end: event.end,
                        endISO: event.end.toISOString(),
                        title: event.title,
                        content: event.content,
                        calendar: event.split,
                        allDay: event.allDay,
                    },
                    currentView: this.currentView,
                    domEvent,
                },
            });
        },
        handleCellClick(event) {
            const date = 'date' in event ? event.date : event;
            const calendar = 'split' in event ? event.split : null;
            this.internalSelectedDate = date;
            this.$emit('trigger-event', {
                name: 'cell:click',
                event: {
                    cell: { date, dateISO: date.toISOString(), calendar },
                    currentView: this.currentView,
                },
            });
        },
        /**
         * Triggers whenever the active view changes. (Day, Week, Month, etc.)
         *
         * TS definition:
         *     EventReadyChanged {
         *         view: string
         *         startDate: Date // View start - JS native Date object.
         *         endDate: Date, // View end - JS native Date object.
         *         firstCellDate: Date // Month view only, in case cell is out of current month - JS native Date object.
         *         lastCellDate: Date // Month view only, in case cell is out of current month - JS native Date object.
         *         outOfScopeEvents: Array<Event> // Month view only, all the events that are out of the current month.
         *         events: Array<Event> // All the events in the current view.
         *         week: number // Week number. Only returned if view is 'week'.
         *     }
         *
         * @param event
         * @see https://antoniandre.github.io/vue-cal/#ex--emitted-events
         * @see https://github.com/antoniandre/vue-cal/issues/168#issuecomment-739544326 TS types
         */
        handleViewChange(event) {
            this.currentView = event.view;
            this.setCurrentViewObj(event);
            this.$emit('trigger-event', {
                name: 'view:change',
                event: {
                    ...(event || {}),
                },
            });
        },
        handleReady(event) {
            this.setCurrentViewObj(event);
        },
        /* wwEditor:start */
        getTestEvent() {
            if (!this.events.length) throw new Error('No event found');
            return {
                rawEventData: this.events[0].rawEventData,
                event: {
                    start: this.events[0].start,
                    startISO: this.events[0].start.toISOString(),
                    end: this.events[0].end,
                    endISO: this.events[0].end.toISOString(),
                    title: this.events[0].title,
                    content: this.events[0].content,
                    calendar: this.events[0].split,
                    allDay: this.events[0].allDay,
                },
                currentView: this.currentView,
                domEvent: {},
            };
        },
        /* wwEditor:end */
        formatDate(date) {
            if (typeof date === 'string') return date;
            const _date = new Date(date);
            return (
                _date.getFullYear() +
                '-' +
                String(_date.getMonth() + 1).padStart(2, '0') +
                '-' +
                String(_date.getDate()).padStart(2, '0')
            );
        },
    },
};
</script>

<style lang="scss">
:root {
    --calendar-font-family: unset;
    --calendar-font-weight: 100;
    --calendar-theme-menu-color: #dd932c;
    --calendar-theme-title-bar-color: #fad198;
    --calendar-theme-cell-today-color: #bfbab3;
    --calendar-theme-cell-selected-color: #8f8c89;
    --calendar-default-event-color: rgba(248, 248, 248, 0.8);
    --calendar-default-event-text-color: #666;

    --calendar-split-0-bg-color: unset;
    --calendar-split-1-bg-color: unset;
    --calendar-split-2-bg-color: unset;
    --calendar-split-3-bg-color: unset;
    --calendar-split-4-bg-color: unset;
    --calendar-split-5-bg-color: unset;
    --calendar-split-6-bg-color: unset;
    --calendar-split-7-bg-color: unset;
    --calendar-split-8-bg-color: unset;
    --calendar-split-9-bg-color: unset;

    --calendar-category-0-bg-color: unset;
    --calendar-category-1-bg-color: unset;
    --calendar-category-2-bg-color: unset;
    --calendar-category-3-bg-color: unset;
    --calendar-category-4-bg-color: unset;
    --calendar-category-5-bg-color: unset;
    --calendar-category-6-bg-color: unset;
    --calendar-category-7-bg-color: unset;
    --calendar-category-8-bg-color: unset;
    --calendar-category-9-bg-color: unset;
    --calendar-category-0-text-color: unset;
    --calendar-category-1-text-color: unset;
    --calendar-category-2-text-color: unset;
    --calendar-category-3-text-color: unset;
    --calendar-category-4-text-color: unset;
    --calendar-category-5-text-color: unset;
    --calendar-category-6-text-color: unset;
    --calendar-category-7-text-color: unset;
    --calendar-category-8-text-color: unset;
    --calendar-category-9-text-color: unset;
}

.vuecal {
    flex: unset !important; // Fix for the calendar not taking the full height
    font-family: var(--calendar-font-family);
    font-weight: var(--calendar-font-weight);
}

.vuecal--custom-theme {
    .vuecal__menu,
    .vuecal__cell-events-count {
        background-color: var(--calendar-theme-menu-color);
    }
    .vuecal__title-bar {
        background-color: var(--calendar-theme-title-bar-color);
    }
    .vuecal__cell--today,
    .vuecal__cell--current {
        background-color: var(--calendar-theme-cell-today-color);
    }
    &.vuecal:not(.vuecal--day-view) {
        .vuecal__cell--selected {
            background-color: var(--calendar-theme-cell-selected-color);
        }
    }
    .vuecal__cell--selected:before {
        border-color: var(--calendar-theme-cell-selected-color);
    }
}

.calendar-default-event-color {
    background-color: var(--calendar-default-event-color);
    color: var(--calendar-default-event-text-color);
}

.vuecal__cell-date {
    padding: 4px 8px;
}

.vuecal__event {
    padding: 4px 8px;
    border-radius: 8px;

    &-title {
        font-size: var(--calendar-default-event-title-size);
    }
    &-time {
        font-size: var(--calendar-default-event-time-size);
    }
    &-content {
        font-size: var(--calendar-default-event-content-size);
    }

    &.cat-0 {
        background-color: var(--calendar-category-0-bg-color);
        color: var(--calendar-category-0-text-color);
    }
    &.cat-1 {
        background-color: var(--calendar-category-1-bg-color);
        color: var(--calendar-category-1-text-color);
    }
    &.cat-2 {
        background-color: var(--calendar-category-2-bg-color);
        color: var(--calendar-category-2-text-color);
    }
    &.cat-3 {
        background-color: var(--calendar-category-3-bg-color);
        color: var(--calendar-category-3-text-color);
    }
    &.cat-4 {
        background-color: var(--calendar-category-4-bg-color);
        color: var(--calendar-category-4-text-color);
    }
    &.cat-5 {
        background-color: var(--calendar-category-5-bg-color);
        color: var(--calendar-category-5-text-color);
    }
    &.cat-6 {
        background-color: var(--calendar-category-6-bg-color);
        color: var(--calendar-category-6-text-color);
    }
    &.cat-7 {
        background-color: var(--calendar-category-7-bg-color);
        color: var(--calendar-category-7-text-color);
    }
    &.cat-8 {
        background-color: var(--calendar-category-8-bg-color);
        color: var(--calendar-category-8-text-color);
    }
    &.cat-9 {
        background-color: var(--calendar-category-9-bg-color);
        color: var(--calendar-category-9-text-color);
    }
}

.vuecal__cell-split {
    &.split-0 {
        background-color: var(--calendar-split-0-bg-color);
    }
    &.split-1 {
        background-color: var(--calendar-split-1-bg-color);
    }
    &.split-2 {
        background-color: var(--calendar-split-2-bg-color);
    }
    &.split-3 {
        background-color: var(--calendar-split-3-bg-color);
    }
    &.split-4 {
        background-color: var(--calendar-split-4-bg-color);
    }
    &.split-5 {
        background-color: var(--calendar-split-5-bg-color);
    }
    &.split-6 {
        background-color: var(--calendar-split-6-bg-color);
    }
    &.split-7 {
        background-color: var(--calendar-split-7-bg-color);
    }
    &.split-8 {
        background-color: var(--calendar-split-8-bg-color);
    }
    &.split-9 {
        background-color: var(--calendar-split-9-bg-color);
    }
}

/* Mobile-specific styles */
.vuecal.mobile-view {
    /* Reduce general padding */
    --vuecal-cell-padding: 2px;
}

/* Calendar headings */
.vuecal.mobile-view .vuecal__heading {
    height: auto;
}

.vuecal.mobile-view .vuecal__heading-weekday {
    font-size: 0.7em;
    padding: 2px;
}

.vuecal.mobile-view .vuecal__heading .weekday-label {
    font-size: 0.65em;
}

.vuecal.mobile-view .vuecal__heading-date {
    font-size: 0.65em;
}

/* Title and navigation */
.vuecal.mobile-view .vuecal__title {
    padding: 3px 6px;
}

.vuecal.mobile-view .vuecal__title button {
    font-size: 0.75em;
    padding: 3px 6px;
}

.vuecal.mobile-view .vuecal__no-event {
    font-size: 0.65em;
}

/* Menu and view buttons */
.vuecal.mobile-view .vuecal__menu {
    padding: 4px;
}

.vuecal.mobile-view .vuecal__menu button {
    padding: 4px 6px;
    font-size: 0.75em;
}

/* Event styling - simplified for mobile by default */
.vuecal.mobile-view .vuecal__event {
    border-radius: 4px;
    margin: 1px;
    padding: 2px 4px;
}

.vuecal.mobile-view .vuecal__event-title {
    font-size: 0.75em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.vuecal.mobile-view .vuecal__event-time {
    font-size: 0.7em;
}

/* Optional: Hide event content on mobile to save space */
.vuecal.mobile-view .vuecal__event-content {
    display: none;
}

/* Time column adjustments */
.vuecal.mobile-view:not(.vuecal--month-view) .vuecal__time-column {
    width: 35px;
}

.vuecal.mobile-view:not(.vuecal--month-view) .vuecal__time-column .vuecal__time-cell {
    font-size: 0.7em;
    padding: 2px;
}

/* Improve touch targets for mobile */
.vuecal.mobile-view .vuecal__cell {
    min-height: 30px;
}

/* Time grid adjustments */
.vuecal.mobile-view .vuecal__bg-grid .vuecal__time-cell {
    font-size: 0.65em;
}

/* All day events adjustments */
.vuecal.mobile-view .vuecal__all-day-text {
    font-size: 0.7em;
}
</style>
