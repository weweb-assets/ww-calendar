<template>
    <vue-cal
        :key="content.themeColor + '-' + content.startWeekOnSunday"
        :disable-views="disabledViews"
        :active-view="currentView"
        :hide-view-selector="disabledViews.length >= 4"
        :hide-weekends="content.hideWeekends"
        :events="events"
        :split-days="calendars"
        :showAllDayEvents="content.showAllDayEvents"
        :events-count-on-year-view="content.showCountOnYearView"
        :locale="currentLang"
        :class="content.themeColor"
        :style="{ ...customThemeStyle, ...calendarsStyle, ...categoriesStyle }"
        :time="!content.enableTimelessMode"
        :timeStep="content.timestep"
        :timeFrom="content.timeStart * 60"
        :timeTo="content.timeEnd * 60"
        :startWeekOnSunday="content.startWeekOnSunday"
        :hideWeekdays="content.hideWeekdays"
        :twelveHour="content.twelveHour"
        :small="content.daySize === 'small'"
        :xsmall="content.daySize === 'xsmall'"
        :watchRealTime="content.watchRealTime"
        :todayButton="content.todayButton"
        :selectedDate="internalSelectedDate"
        @event-click="handleEventClick"
        @cell-click="handleCellClick"
        @view-change="handleViewChange"
    />
</template>

<script>
import { computed } from 'vue';
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
import * as en from 'vue-cal/dist/i18n/en.es.js';
import * as fr from 'vue-cal/dist/i18n/fr.es.js';
import * as es from 'vue-cal/dist/i18n/es.es.js';
import * as de from 'vue-cal/dist/i18n/de.es.js';
import * as pt from 'vue-cal/dist/i18n/pt-br.es.js';

const locales = {
    'en': en,
    'fr': fr,
    'es': es,
    'de': de,
    'pt-br': pt
};

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

        return { selectedDate, setSelectedDate }
    },
    data: () => ({
        currentView: null,
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
            const selectedLocale = locales[this.content.lang]
            return selectedLocale || locales.en
        },
        customThemeStyle() {
            return {
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
            const data = wwLib.wwCollection.getCollectionData(this.content.calendars);
            if (!Array.isArray(data)) return [];
            return data.map((cal, index) => ({
                id: wwLib.resolveObjectPropertyPath(cal, this.content.calendarIdPath || 'id') || '',
                label: wwLib.resolveObjectPropertyPath(cal, this.content.calendarLabelPath || 'label') || '',
                color: wwLib.resolveObjectPropertyPath(cal, this.content.calendarColorPath || 'color') || null,
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
            const data = wwLib.wwCollection.getCollectionData(this.content.categories);
            if (!Array.isArray(data)) return [];
            return data.map((cat, index) => ({
                name: wwLib.resolveObjectPropertyPath(cat, this.content.categoryNamePath || 'name') || '',
                color: wwLib.resolveObjectPropertyPath(cat, this.content.categoryColorPath || 'color') || null,
                textColor:
                    wwLib.resolveObjectPropertyPath(cat, this.content.categoryColorTextPath || 'textColor') || null,
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
            const data = wwLib.wwCollection.getCollectionData(this.content.events);
            if (!Array.isArray(data)) return [];
            const events = data.map(event => {
                const category = this.categories.find(
                    cat =>
                        cat.name ===
                        wwLib.resolveObjectPropertyPath(event, this.content.eventCategoryPath || 'category')
                );
                return {
                    rawEventData: event,
                    start:
                        new Date(wwLib.resolveObjectPropertyPath(event, this.content.eventStartPath || 'start')) ||
                        new Date(),
                    end:
                        new Date(wwLib.resolveObjectPropertyPath(event, this.content.eventEndPath || 'end')) ||
                        new Date(),
                    title: wwLib.resolveObjectPropertyPath(event, this.content.eventTitlePath || 'title') || '',
                    content: wwLib.resolveObjectPropertyPath(event, this.content.eventContentPath || 'content') || '',
                    allDay: wwLib.resolveObjectPropertyPath(event, this.content.eventAllDayPath || 'allDay') || false,
                    split: wwLib.resolveObjectPropertyPath(event, this.content.eventCalendarPath || 'calendar') || null,
                    calendar: wwLib.resolveObjectPropertyPath(event, this.content.eventCalendarPath || 'calendar') || null,
                    class: category ? category.class : 'calendar-default-event-color',
                };
            });
            return events;
        },
        internalSelectedDate: {
            get() {
                return this.selectedDate
            },
            set(value) {
                if (value !== this.selectedDate) this.setSelectedDate(value)
            }
        }
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
            this.internalSelectedDate = value
        }
    },
    methods: {
        handleEventClick(event, domEvent) {
            this.$emit('trigger-event', {
                name: 'event:click',
                event: {
                    rawEventData: event.rawEventData,
                    event: {
                        start: event.start,
                        end: event.end,
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
            this.$emit('trigger-event', {
                name: 'cell:click',
                event: {
                    cell: { date, calendar },
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
            // Update the current active view
            this.currentView = event.view;
            this.$emit('trigger-event', {
                name: 'view:change',
                event: {
                    ...(event || {}),
                },
            });
        },
        /* wwEditor:start */
        getTestEvent() {
            if (!this.events.length) throw new Error('No event found');
            return {
                rawEventData: this.events[0].rawEventData,
                event: {
                    start: this.events[0].start,
                    end: this.events[0].end,
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
    },
};
</script>

<style lang="scss">
:root {
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
</style>
