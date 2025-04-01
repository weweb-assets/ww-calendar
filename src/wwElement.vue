<template>
    <div class="fullcalendar-wrapper modern-buttons" :class="{ 'dark-mode': isDarkMode }" :style="calendarStyles">
        <FullCalendar ref="fullCalendarRef" :options="calendarOptions">
            <template v-slot:noEventsContent>
                <wwElement v-bind="content.emptyListTextEl" />
            </template>
        </FullCalendar>
    </div>
</template>

<script>
import { useTemplateRef, computed, watch } from 'vue';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import multiMonthPlugin from '@fullcalendar/multimonth';

export default {
    components: {
        FullCalendar,
    },
    props: {
        content: { type: Object, required: true },
        uid: { type: String, required: true },
        /* wwEditor:start */
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
    },
    emits: ['trigger-event'],
    setup(props, { emit }) {
        const fullCalendarRef = useTemplateRef(null);

        // Editor state
        const isEditing = computed(() => {
            /* wwEditor:start */
            return props.wwEditorState?.isEditing;
            /* wwEditor:end */
            // eslint-disable-next-line no-unreachable
            return false;
        });

        // Internal variables
        const { value: currentView, setValue: setCurrentView } = wwLib.wwVariable.useComponentVariable({
            uid: props.uid,
            name: 'currentView',
            type: 'string',
            defaultValue: computed(() => props.content.defaultView || 'dayGridMonth'),
        });

        const { value: selectedEvent, setValue: setSelectedEvent } = wwLib.wwVariable.useComponentVariable({
            uid: props.uid,
            name: 'selectedEvent',
            type: 'object',
            defaultValue: null,
        });

        // Computed properties for styling
        const isDarkMode = computed(() => props.content.darkMode);

        const calendarStyles = computed(() => ({
            '--fc-font-family': props.content?.fontFamily || 'inherit',
            '--fc-font-size': props.content?.fontSize || '14px',
            '--fc-font-weight': props.content?.fontWeight || '400',
            '--fc-border-color': props.content?.borderColor || '#ddd',
            '--fc-button-text-color': props.content?.buttonTextColor || '#fff',
            '--fc-button-bg-color': props.content?.buttonBackgroundColor || '#2C3E50',
            '--fc-button-border-color': props.content?.buttonBorderColor || '#2C3E50',
            '--fc-button-hover-bg-color': props.content?.buttonHoverBackgroundColor || '#1e2b37',
            '--fc-button-hover-border-color': props.content?.buttonHoverBorderColor || '#1a252f',
            '--fc-button-hover-text-color': props.content?.buttonHoverTextColor || '#fff',
            '--fc-button-active-bg-color': props.content?.buttonActiveBackgroundColor || '#1a252f',
            '--fc-button-active-border-color': props.content?.buttonActiveBorderColor || '#151e27',
            '--fc-button-active-text-color': props.content?.buttonActiveTextColor || '#fff',
            '--fc-button-border-radius': props.content?.buttonBorderRadius || '4px',
            '--fc-event-bg-color': props.content?.defaultEventBackgroundColor || '#3788d8',
            '--fc-event-border-color': props.content?.defaultEventBorderColor || '#3788d8',
            '--fc-event-text-color': props.content?.defaultEventTextColor || '#fff',
            '--fc-today-bg-color': props.content?.todayBackgroundColor || 'rgba(255, 220, 40, 0.15)',
            '--fc-now-indicator-color': props.content?.nowIndicatorColor || 'red',
            '--fc-cell-min-height': props.content?.cellMinHeight || '80px',
            '--fc-header-height': props.content?.headerHeight || 'auto',
            '--fc-day-header-height': props.content?.dayHeaderHeight || 'auto',
            '--fc-header-bg-color': props.content?.headerBackgroundColor || null,
            '--fc-header-padding': props.content?.headerBackgroundColor ? '10px' : '0px',
            '--fc-header-text-color': props.content?.headerTextColor || null,
            '--fc-day-header-bg-color': props.content?.dayHeaderBackgroundColor || null,
            '--fc-day-header-text-color': props.content?.dayHeaderTextColor || null,
            '--fc-day-header-font-size': props.content?.dayHeaderFontSize || null,
            '--fc-day-header-font-weight': props.content?.dayHeaderFontWeight || null,
            '--fc-cell-bg-color': props.content?.cellBackgroundColor || null,
            '--fc-cell-text-color': props.content?.cellTextColor || null,
            '--fc-other-month-bg-color': props.content?.otherMonthBackgroundColor || null,
            '--fc-other-month-text-color': props.content?.otherMonthTextColor || null,
            '--fc-weekend-text-color': props.content?.weekendTextColor || null,
        }));

        // Process events data with property path mapping
        const processedEvents = computed(() => {
            const events = props.content?.events || [];
            const categories = props.content?.categories || [];

            return events.map(event => {
                // Get values using property paths if bound, otherwise use direct properties
                const id =
                    wwLib.wwUtils.resolveObjectPropertyPath(event, props.content?.eventsIdPath || 'id') ?? event.id;
                const title =
                    wwLib.wwUtils.resolveObjectPropertyPath(event, props.content?.eventsTitlePath || 'title') ??
                    event.title;
                const start =
                    wwLib.wwUtils.resolveObjectPropertyPath(event, props.content?.eventsStartPath || 'start') ??
                    event.start;
                const end =
                    wwLib.wwUtils.resolveObjectPropertyPath(event, props.content?.eventsEndPath || 'end') ?? event.end;
                const allDay =
                    wwLib.wwUtils.resolveObjectPropertyPath(event, props.content?.eventsAllDayPath || 'allDay') ??
                    event.allDay;
                const backgroundColor =
                    wwLib.wwUtils.resolveObjectPropertyPath(
                        event,
                        props.content?.eventsBackgroundColorPath || 'backgroundColor'
                    ) ?? event.backgroundColor;
                const borderColor =
                    wwLib.wwUtils.resolveObjectPropertyPath(
                        event,
                        props.content?.eventsBorderColorPath || 'borderColor'
                    ) ?? event.borderColor;
                const textColor =
                    wwLib.wwUtils.resolveObjectPropertyPath(event, props.content?.eventsTextColorPath || 'textColor') ??
                    event.textColor;
                const url =
                    wwLib.wwUtils.resolveObjectPropertyPath(event, props.content?.eventsUrlPath || 'url') ?? event.url;
                const content =
                    wwLib.wwUtils.resolveObjectPropertyPath(event, props.content?.eventsContentPath || 'content') ??
                    event.content;
                const data =
                    wwLib.wwUtils.resolveObjectPropertyPath(event, props.content?.eventsDataPath || 'data') ??
                    event.data;
                const categoryId =
                    wwLib.wwUtils.resolveObjectPropertyPath(event, props.content?.eventsCategoryPath || 'category') ??
                    event.category;

                // Find category if exists
                const category = categories.find(cat => {
                    const catId = wwLib.wwUtils.resolveObjectPropertyPath(cat, props.content?.categoriesIdPath || 'id');
                    return catId === categoryId;
                });

                // Get category properties using property paths if bound
                const categoryBackgroundColor =
                    wwLib.wwUtils.resolveObjectPropertyPath(
                        category,
                        props.content?.categoriesBackgroundColorPath || 'backgroundColor'
                    ) ?? category?.backgroundColor;
                const categoryBorderColor =
                    wwLib.wwUtils.resolveObjectPropertyPath(
                        category,
                        props.content?.categoriesBorderColorPath || 'borderColor'
                    ) ?? category?.borderColor;
                const categoryTextColor =
                    wwLib.wwUtils.resolveObjectPropertyPath(
                        category,
                        props.content?.categoriesTextColorPath || 'textColor'
                    ) ?? category?.textColor;

                return {
                    id: id || `event-${Math.random().toString(36).substr(2, 9)}`,
                    title: title || 'Untitled Event',
                    start: start,
                    end: end,
                    allDay: allDay,
                    backgroundColor:
                        backgroundColor ||
                        categoryBackgroundColor ||
                        props.content?.defaultEventBackgroundColor ||
                        '#3788d8',
                    borderColor:
                        borderColor || categoryBorderColor || props.content?.defaultEventBorderColor || '#3788d8',
                    textColor: textColor || categoryTextColor || props.content?.defaultEventTextColor || '#ffffff',
                    url: url || '',
                    extendedProps: {
                        content: content || '',
                        data: data || {},
                        category: categoryId || '',
                        originalEvent: event,
                    },
                };
            });
        });

        // Available calendar views
        const availableViews = computed(() => {
            const views = {};

            if (props.content?.yearView) {
                views.multiMonthYear = { type: 'multiMonth', duration: { year: 1 } };
            }

            if (props.content?.monthView) {
                views.dayGridMonth = { type: 'dayGrid', duration: { month: 1 } };
            }

            if (props.content?.weekView) {
                views.timeGridWeek = { type: 'timeGrid', duration: { week: 1 } };
            }

            if (props.content?.dayView) {
                views.timeGridDay = { type: 'timeGrid', duration: { day: 1 } };
            }

            if (props.content?.listView) {
                views.listWeek = { type: 'list', duration: { week: 1 } };
            }

            return views;
        });

        // Hidden days configuration
        const hiddenDays = computed(() => {
            const hidden = [];
            const hideDaysOfWeek = props.content?.hideDaysOfWeek || [];

            if (props.content?.hideWeekends) {
                hidden.push(0, 6); // Sunday and Saturday
            } else {
                // Process custom hidden days
                hideDaysOfWeek.forEach(day => {
                    if (!hidden.includes(day)) {
                        hidden.push(day);
                    }
                });
            }

            return hidden;
        });

        // Calendar options
        const calendarOptions = computed(() => {
            const firstDay = props.content?.startWeekOnSunday ? 0 : 1;
            const locale = props.content?.locale === 'auto' ? wwLib.wwLang.lang : props.content?.locale || 'en';
            const timeFormat = props.content?.use12hFormat ? 'h:mm a' : 'HH:mm';
            
            // Validate default view
            let initialView = props.content?.defaultView || 'dayGridMonth';
            const validViews = ['multiMonthYear', 'dayGridMonth', 'timeGridWeek', 'timeGridDay', 'listWeek'];
            if (!validViews.includes(initialView)) {
                initialView = 'dayGridMonth';
            }
            
            // Custom button text
            const buttonText = {};
            if (props.content?.buttonTextToday) buttonText.today = wwLib.wwLang.getText(props.content.buttonTextToday);
            if (props.content?.buttonTextYear) buttonText.year = wwLib.wwLang.getText(props.content.buttonTextYear);
            if (props.content?.buttonTextMonth) buttonText.month = wwLib.wwLang.getText(props.content.buttonTextMonth);
            if (props.content?.buttonTextWeek) buttonText.week = wwLib.wwLang.getText(props.content.buttonTextWeek);
            if (props.content?.buttonTextDay) buttonText.day = wwLib.wwLang.getText(props.content.buttonTextDay);
            if (props.content?.buttonTextList) buttonText.list = wwLib.wwLang.getText(props.content.buttonTextList);

            return {
                plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin, multiMonthPlugin],
                initialView: initialView,
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: Object.keys(availableViews.value).join(','),
                },
                views: availableViews.value,
                events: processedEvents.value,
                editable: !isEditing.value,
                selectable: !isEditing.value,
                selectMirror: true,
                dayMaxEvents: true,
                weekends: !props.content?.hideWeekends,
                firstDay: firstDay,
                locale: locale,
                hiddenDays: hiddenDays.value,
                slotMinTime: props.content?.timeStart || '00:00:00',
                slotMaxTime: props.content?.timeEnd || '24:00:00',
                timeFormat,
                eventTimeFormat: {
                    hour: props.content?.use12hFormat ? 'numeric' : '2-digit',
                    minute: '2-digit',
                    meridiem: props.content?.use12hFormat,
                },
                allDaySlot: !props.content?.timeless,
                nowIndicator: true,
                height: '100%',
                noEventsContent: '', // We'll handle empty list message with slot
                buttonText: Object.keys(buttonText).length > 0 ? buttonText : undefined,
                // Add all event handlers directly to the options object
                eventClick: info => {
                    if (isEditing.value) return;

                    const eventData = {
                        ...info.event.extendedProps.originalEvent,
                        id: info.event.id,
                        title: info.event.title,
                        start: info.event.start,
                        end: info.event.end,
                        allDay: info.event.allDay,
                    };

                    setSelectedEvent(eventData);

                    emit('trigger-event', {
                        name: 'eventClick',
                        event: { value: eventData },
                    });
                },
                datesSet: info => {
                    if (isEditing.value) return;

                    const viewData = {
                        view: info.view.type,
                        start: info.view.activeStart,
                        end: info.view.activeEnd,
                        title: info.view.title,
                    };

                    setCurrentView(info.view.type);

                    emit('trigger-event', {
                        name: 'viewChange',
                        event: { value: viewData },
                    });
                },
                eventAdd: info => {
                    if (isEditing.value) return;

                    const eventData = {
                        id: info.event.id,
                        title: info.event.title,
                        start: info.event.start,
                        end: info.event.end,
                        allDay: info.event.allDay,
                        ...info.event.extendedProps,
                    };

                    emit('trigger-event', {
                        name: 'eventCreated',
                        event: { value: eventData },
                    });
                },
                eventChange: info => {
                    if (isEditing.value) return;

                    const eventData = {
                        id: info.event.id,
                        title: info.event.title,
                        start: info.event.start,
                        end: info.event.end,
                        allDay: info.event.allDay,
                        ...info.event.extendedProps,
                    };

                    emit('trigger-event', {
                        name: 'eventUpdated',
                        event: { value: eventData },
                    });
                },
                eventRemove: info => {
                    if (isEditing.value) return;

                    const eventData = {
                        id: info.event.id,
                        title: info.event.title,
                        ...info.event.extendedProps,
                    };

                    emit('trigger-event', {
                        name: 'eventDeleted',
                        event: { value: eventData },
                    });
                },
                eventDragStart: info => {
                    if (isEditing.value) return;

                    const eventData = {
                        id: info.event.id,
                        title: info.event.title,
                        start: info.event.start,
                        end: info.event.end,
                        allDay: info.event.allDay,
                        ...info.event.extendedProps,
                    };

                    emit('trigger-event', {
                        name: 'eventDragStart',
                        event: { value: eventData },
                    });
                },
                eventDragStop: info => {
                    if (isEditing.value) return;

                    const eventData = {
                        id: info.event.id,
                        title: info.event.title,
                        start: info.event.start,
                        end: info.event.end,
                        allDay: info.event.allDay,
                        ...info.event.extendedProps,
                    };

                    emit('trigger-event', {
                        name: 'eventDragEnd',
                        event: { value: eventData },
                    });
                },
                eventDrop: info => {
                    if (isEditing.value) return;

                    const eventData = {
                        id: info.event.id,
                        title: info.event.title,
                        start: info.event.start,
                        end: info.event.end,
                        allDay: info.event.allDay,
                        delta: info.delta,
                        ...info.event.extendedProps,
                    };

                    emit('trigger-event', {
                        name: 'eventDrop',
                        event: { value: eventData },
                    });
                },
                eventResizeStart: info => {
                    if (isEditing.value) return;

                    const eventData = {
                        id: info.event.id,
                        title: info.event.title,
                        start: info.event.start,
                        end: info.event.end,
                        allDay: info.event.allDay,
                        ...info.event.extendedProps,
                    };

                    emit('trigger-event', {
                        name: 'eventResizeStart',
                        event: { value: eventData },
                    });
                },
                eventResize: info => {
                    if (isEditing.value) return;

                    const eventData = {
                        id: info.event.id,
                        title: info.event.title,
                        start: info.event.start,
                        end: info.event.end,
                        allDay: info.event.allDay,
                        startDelta: info.startDelta,
                        endDelta: info.endDelta,
                        ...info.event.extendedProps,
                    };

                    emit('trigger-event', {
                        name: 'eventResize',
                        event: { value: eventData },
                    });
                },
            };
        });

        // Watch for changes in content properties
        watch(
            () => props.content?.defaultView,
            newVal => {
                if (newVal && fullCalendarRef.value) {
                    const calendarApi = fullCalendarRef.value.getApi();
                    calendarApi.changeView(newVal);
                    setCurrentView(newVal);
                }
            }
        );

        watch(
            () => props.content?.events,
            () => {
                if (fullCalendarRef.value) {
                    const calendarApi = fullCalendarRef.value.getApi();
                    calendarApi.refetchEvents();
                }
            },
            { deep: true }
        );

        // Actions
        const changeView = viewName => {
            if (fullCalendarRef.value) {
                const calendarApi = fullCalendarRef.value.getApi();
                calendarApi.changeView(viewName);
                setCurrentView(viewName);
            }
        };

        const goToDate = date => {
            if (fullCalendarRef.value) {
                const calendarApi = fullCalendarRef.value.getApi();
                calendarApi.gotoDate(date);
            }
        };

        const next = () => {
            if (fullCalendarRef.value) {
                const calendarApi = fullCalendarRef.value.getApi();
                calendarApi.next();
            }
        };

        const prev = () => {
            if (fullCalendarRef.value) {
                const calendarApi = fullCalendarRef.value.getApi();
                calendarApi.prev();
            }
        };

        const today = () => {
            if (fullCalendarRef.value) {
                const calendarApi = fullCalendarRef.value.getApi();
                calendarApi.today();
            }
        };

        const addEvent = eventData => {
            if (fullCalendarRef.value) {
                const calendarApi = fullCalendarRef.value.getApi();
                calendarApi.addEvent(eventData);
            }
        };

        const updateEvent = (eventId, eventData) => {
            if (fullCalendarRef.value) {
                const calendarApi = fullCalendarRef.value.getApi();
                const event = calendarApi.getEventById(eventId);
                if (event) {
                    if (eventData.title) event.setProp('title', eventData.title);
                    if (eventData.start) event.setStart(eventData.start);
                    if (eventData.end) event.setEnd(eventData.end);
                    if (eventData.allDay !== undefined) event.setAllDay(eventData.allDay);
                }
            }
        };

        const removeEvent = eventId => {
            if (fullCalendarRef.value) {
                const calendarApi = fullCalendarRef.value.getApi();
                const event = calendarApi.getEventById(eventId);
                if (event) {
                    event.remove();
                }
            }
        };

        return {
            fullCalendarRef,
            calendarOptions,
            calendarStyles,
            isDarkMode,
            currentView,
            selectedEvent,
            // Actions
            changeView,
            goToDate,
            next,
            prev,
            today,
            addEvent,
            updateEvent,
            removeEvent,
        };
    },
};
</script>

<style lang="scss" scoped>
.fullcalendar-wrapper {
    width: 100%;
    height: 100%;
    --fc-border-color: #ddd;
    --fc-button-text-color: #fff;
    --fc-button-bg-color: #2c3e50;
    --fc-button-border-color: #2c3e50;
    --fc-button-hover-bg-color: #1e2b37;
    --fc-button-hover-border-color: #1a252f;
    --fc-button-active-bg-color: #1a252f;
    --fc-button-active-border-color: #151e27;
    --fc-event-bg-color: #3788d8;
    --fc-event-border-color: #3788d8;
    --fc-event-text-color: #fff;
    --fc-event-selected-overlay-color: rgba(0, 0, 0, 0.25);
    --fc-more-link-bg-color: #d0d0d0;
    --fc-more-link-text-color: inherit;
    --fc-today-bg-color: rgba(255, 220, 40, 0.15);
    --fc-now-indicator-color: red;
    --fc-cell-min-height: 80px;
    --fc-header-height: auto;
    --fc-day-header-height: auto;
    position: relative;

    &.dark-mode {
        --fc-border-color: #444;
        --fc-button-text-color: #fff;
        --fc-button-bg-color: #444;
        --fc-button-border-color: #444;
        --fc-button-hover-bg-color: #555;
        --fc-button-hover-border-color: #555;
        --fc-button-active-bg-color: #666;
        --fc-button-active-border-color: #666;
        --fc-page-bg-color: #222;
        --fc-neutral-bg-color: #333;
        --fc-neutral-text-color: #fff;
        --fc-today-bg-color: rgba(255, 220, 40, 0.1);

        :deep(.fc) {
            color: #fff;

            .fc-toolbar-title {
                color: #fff;
            }

            .fc-col-header-cell {
                background-color: var(--fc-day-header-bg-color, #333) !important;
            }

            .fc-daygrid-day {
                background-color: var(--fc-cell-bg-color, #222) !important;
            }

            .fc-day-other {
                background-color: var(--fc-other-month-bg-color, #1a1a1a) !important;
                color: var(--fc-other-month-text-color, #888) !important;
            }

            .fc-list-day-cushion {
                background-color: #333;
            }

            .fc-list-event:hover td {
                background-color: #444;
            }
        }
    }

    :deep(.fc) {
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    :deep(.fc) {
        height: 100%;
        font-family: var(--fc-font-family);
        font-size: var(--fc-font-size);
        font-weight: var(--fc-font-weight);
        overflow: hidden;

        .fc-event {
            cursor: pointer;
        }

        .fc-toolbar-title {
            font-size: var(--fc-font-size);
            font-weight: var(--fc-font-weight);
            color: var(--fc-header-text-color);
        }

        .fc-button {
            font-size: var(--fc-font-size);
            padding: 0.4em 0.65em;
            border-radius: var(--fc-button-border-radius);
        }

        .fc-header-toolbar {
            background-color: var(--fc-header-bg-color);
            padding: var(--fc-header-padding);
            height: var(--fc-header-height);
        }

        // Fix for day header vertical alignment and background
        .fc-col-header-cell {
            height: var(--fc-day-header-height);
            background-color: var(--fc-day-header-bg-color) !important;
            
            .fc-col-header-cell-cushion {
                display: flex;
                align-items: center;
                justify-content: center;
                height: var(--fc-day-header-height);
                padding: 8px;
                color: var(--fc-day-header-text-color);
                font-size: var(--fc-day-header-font-size);
                font-weight: var(--fc-day-header-font-weight);
            }
        }

        // Fix for today background in month view
        .fc-day-today {
            background-color: var(--fc-today-bg-color) !important;
        }

        // Fix for cell backgrounds and text colors
        .fc-daygrid-day {
            background-color: var(--fc-cell-bg-color) !important;
            color: var(--fc-cell-text-color) !important;
        }

        // Fix for other month cells
        .fc-day-other {
            background-color: var(--fc-other-month-bg-color) !important;
            
            .fc-daygrid-day-top,
            .fc-daygrid-day-number {
                color: var(--fc-other-month-text-color) !important;
            }
        }

        // Weekend text color
        .fc-day-sat, .fc-day-sun {
            .fc-daygrid-day-top,
            .fc-daygrid-day-number,
            .fc-col-header-cell-cushion {
                color: var(--fc-weekend-text-color) !important;
            }
        }

        // Fix for cell min height in all views
        .fc-daygrid-day-frame {
            min-height: var(--fc-cell-min-height);
        }

        .fc-timegrid-slot {
            height: calc(var(--fc-cell-min-height) / 4);
        }

        .fc-timegrid-slot-lane {
            min-height: calc(var(--fc-cell-min-height) / 4);
        }

        .fc-list-day {
            min-height: var(--fc-cell-min-height);
        }

        // Additional styles for other views
        .fc-multimonth-daygrid-table {
            .fc-daygrid-day-frame {
                min-height: calc(var(--fc-cell-min-height) / 2);
            }
        }
    }
}

.fullcalendar-wrapper.modern-buttons {
    :deep(.fc) {
        .fc-button {
            box-shadow: none;
        }

        .fc-button-group {
            background-color: var(--fc-button-bg-color);
            color: var(--fc-button-text-color);
            padding: 2px;
            border-radius: var(--fc-button-border-radius);

            .fc-button {
                color: var(--fc-button-text-color);
                border: none;
                box-shadow: none;
                text-transform: capitalize;

                &:hover {
                    background-color: var(--fc-button-hover-bg-color);
                    border-color: var(--fc-button-hover-border-color);
                    border-radius: var(--fc-button-border-radius);
                    color: var(--fc-button-hover-text-color);
                }
                &.fc-button-active {
                    background-color: var(--fc-button-active-bg-color);
                    border-color: var(--fc-button-active-border-color);
                    border-radius: var(--fc-button-border-radius);
                    color: var(--fc-button-active-text-color);
                    box-shadow: none;
                }
            }
        }

        .fc-toolbar-title {
            font-size: var(--fc-font-size);
            font-weight: var(--fc-font-weight);
            color: var(--fc-header-text-color);
        }

        .fc-toolbar {
            background-color: var(--fc-header-bg-color);
            padding: var(--fc-header-padding);
        }

        .fc-today-button {
            text-transform: capitalize;
            background: transparent;
            color: var(--fc-header-text-color);
            border: none;

            &:hover {
                background-color: var(--fc-button-hover-bg-color);
                border-color: var(--fc-button-hover-border-color);
                color: var(--fc-button-hover-text-color);
            }
        }

        .fc-prev-button,
        .fc-next-button {
            background: transparent;
            color: var(--fc-button-text-color);

            &:hover {
                background-color: var(--fc-button-hover-bg-color);
                border-color: var(--fc-button-hover-border-color);
                color: var(--fc-button-hover-text-color);
            }
        }
    }
}
</style>
