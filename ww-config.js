function showFormula(basePropertyKey, { content, boundProps }) {
    return boundProps[basePropertyKey] && content[basePropertyKey];
}
function getFormulaOptions(basePropertyKey, { content }) {
    const data = wwLib.wwCollection.getCollectionData(content[basePropertyKey]);
    return { template: data.length ? data[0] : null };
}

export default {
    editor: {
        label: {
            en: 'Calendar',
            fr: 'Calendrier',
        },
        customStylePropertiesOrder: [
            'defaultEventColor',
            'defaultEventTextColor',
            'themeColor',
            ['themeMenuColor', 'themeTitleBarColor', 'themeTodayCellColor', 'themeSelectedCellColor'],
            'defaultView',
            ['enableYearsView', 'enableYearView', 'enableMonthView', 'enableWeekView', 'enableDayView'],
            'enableTimelessMode',
            ['timestep', 'timeStart', 'timeEnd'],
        ],
        customSettingsPropertiesOrder: [
            'lang',
            'enableMultiCalendar',
            'calendars',
            ['calendarIdPath', 'calendarLabelPath', 'calendarColorPath'],
            'categories',
            ['categoryNamePath', 'categoryColorPath', 'categoryColorTextPath'],
            'events',
            [
                'eventStartPath',
                'eventEndPath',
                'eventTitlePath',
                'eventContentPath',
                'eventAllDayPath',
                'eventCalendarPath',
                'eventCategoryPath',
            ],
        ],
    },
    triggerEvents: [
        {
            name: 'event:click',
            label: { en: 'On event click' },
            event: {
                rawEventData: {},
                event: {
                    start: '',
                    end: '',
                    title: '',
                    content: '',
                    calendar: null,
                    allDay: null,
                },
                currentView: 'years | year | month | week | day',
                domEvent: {},
            },
            getTestEvent: 'getTestEvent',
        },
        {
            name: 'cell:click',
            label: { en: 'On cell click' },
            event: {
                cell: {
                    datetime: new Date(),
                    calendar: null,
                },
                currentView: 'years | year | month | week | day',
                domEvent: {},
            },
        },
    ],
    properties: {
        defaultEventColor: {
            label: {
                en: 'Default event color',
            },
            type: 'Color',
            default: '#F23636',
        },
        defaultEventTextColor: {
            label: {
                en: 'Default event text color',
            },
            type: 'Color',
            default: '#666',
        },
        themeColor: {
            label: {
                en: 'Theme color',
            },
            type: 'TextSelect',
            options: {
                options: [
                    { label: 'Gray', value: 'vuecal--gray-theme' },
                    { label: 'Green', value: 'vuecal--green-theme' },
                    { label: 'Blue', value: 'vuecal--blue-theme' },
                    { label: 'Custom', value: 'vuecal--custom-theme' },
                ],
            },
            defaultValue: 'vuecal--gray-theme',
        },
        themeMenuColor: {
            hidden: content => content.themeColor !== 'vuecal--custom-theme',
            label: {
                en: 'Views menu',
            },
            type: 'Color',
            defaultValue: '#F1B7B7',
        },
        themeTitleBarColor: {
            hidden: content => content.themeColor !== 'vuecal--custom-theme',
            label: {
                en: 'Title bar',
            },
            type: 'Color',
            defaultValue: '#F6DFDF',
        },
        themeTodayCellColor: {
            hidden: content => content.themeColor !== 'vuecal--custom-theme',
            label: {
                en: 'Today cell',
            },
            type: 'Color',
            defaultValue: '#F0EFEF',
        },
        themeSelectedCellColor: {
            hidden: content => content.themeColor !== 'vuecal--custom-theme',
            label: {
                en: 'Selected cell',
            },
            type: 'Color',
            defaultValue: '#DED4D4',
        },
        defaultView: {
            label: {
                en: 'Default view',
            },
            type: 'TextSelect',
            options: {
                options: [
                    { label: 'Years', value: 'years' },
                    { label: 'Year', value: 'year' },
                    { label: 'Month', value: 'month' },
                    { label: 'Week', value: 'week' },
                    { label: 'Day', value: 'day' },
                ],
            },
            defaultValue: 'week',
        },
        enableYearsView: {
            label: {
                en: 'Years view',
            },
            type: 'OnOff',
            defaultValue: true,
        },
        enableYearView: {
            label: {
                en: 'Year view',
            },
            type: 'OnOff',
            defaultValue: true,
        },
        enableMonthView: {
            label: {
                en: 'Month view',
            },
            type: 'OnOff',
            defaultValue: true,
        },
        enableWeekView: {
            label: {
                en: 'Week view',
            },
            type: 'OnOff',
            defaultValue: true,
        },
        enableDayView: {
            label: {
                en: 'Day view',
            },
            type: 'OnOff',
            defaultValue: true,
        },
        hideWeekends: {
            label: {
                en: 'Hide weekends',
            },
            type: 'OnOff',
            defaultValue: false,
        },
        showAllDayEvents: {
            label: {
                en: 'Show all day events',
            },
            type: 'OnOff',
            defaultValue: false,
        },
        showCountOnYearView: {
            label: {
                en: 'Show count on year view',
            },
            type: 'OnOff',
            defaultValue: false,
        },
        enableTimelessMode: {
            label: {
                en: 'Timeless mode',
            },
            type: 'OnOff',
            defaultValue: false,
        },
        timestep: {
            hidden: content => content.enableTimelessMode,
            label: {
                en: 'Timestep (minutes)',
            },
            type: 'Number',
            options: {
                min: 5,
                max: 60,
                step: 5,
            },
            defaultValue: 30,
        },
        timeStart: {
            hidden: content => content.enableTimelessMode,
            label: {
                en: 'Time start (hour)',
            },
            type: 'Number',
            options: {
                min: 0,
                max: 23,
                step: 1,
            },
            defaultValue: 8,
        },
        timeEnd: {
            hidden: content => content.enableTimelessMode,
            label: {
                en: 'Time end (hour)',
            },
            type: 'Number',
            options: {
                min: 1,
                max: 24,
                step: 1,
            },
            defaultValue: 20,
        },
        startWeekOnSunday: {
            label: {
                en: 'Start week on Sunday',
            },
            type: 'OnOff',
            defaultValue: false,
        },

        calendars: {
            section: 'settings',
            label: {
                en: 'Calendars',
            },
            type: 'Array',
            bindable: true,
            options: {
                item: {
                    type: 'Object',
                    defaultValue: { label: '', color: null, id: '' },
                    options: {
                        item: {
                            id: {
                                label: { en: 'Id' },
                                type: 'Text',
                            },
                            label: {
                                label: { en: 'Label' },
                                type: 'Text',
                                options: { placeholder: 'Label' },
                            },
                            color: {
                                label: { en: 'Background color' },
                                type: 'Color',
                            },
                        },
                    },
                },
            },
            defaultValue: [],
        },
        calendarIdPath: {
            hidden: (content, sidepanelContent, boundProps) =>
                !showFormula('calendars', { content, boundProps }),
            label: {
                en: 'Calendar ID',
            },
            type: 'Formula',
            options: content => getFormulaOptions('calendars', { content }),
            defaultValue: null,
            section: 'settings',
        },
        calendarLabelPath: {
            hidden: (content, sidepanelContent, boundProps) =>
                !showFormula('calendars', { content, boundProps }),
            label: {
                en: 'Calendar label',
            },
            type: 'Formula',
            options: content => getFormulaOptions('calendars', { content }),
            defaultValue: null,
            section: 'settings',
        },
        calendarColorPath: {
            hidden: (content, sidepanelContent, boundProps) =>
                !showFormula('calendars', { content, boundProps }),
            label: {
                en: 'Calendar color',
            },
            type: 'Formula',
            options: content => getFormulaOptions('calendars', { content }),
            defaultValue: null,
            section: 'settings',
        },
        events: {
            section: 'settings',
            label: { en: 'Events' },
            type: 'Array',
            bindable: true,
            options: {
                item: {
                    type: 'Object',
                    defaultValue: { startDate: null, endDate: null, title: null, content: null, calendar: null },
                    options: {
                        item: {
                            start: {
                                label: { en: 'Start date' },
                                placeholder: '2022-01-01 12:00',
                                type: 'Text',
                            },
                            end: {
                                label: { en: 'End date' },
                                placeholder: '2022-01-01 14:00',
                                type: 'Text',
                            },
                            title: {
                                label: { en: 'Title' },
                                type: 'Text',
                            },
                            content: {
                                label: { en: 'Content' },
                                type: 'Text',
                            },
                            allDay: {
                                label: { en: 'All day' },
                                type: 'OnOff',
                            },
                            calendar: {
                                label: { en: 'Calendar id' },
                                type: 'Text',
                            },
                            category: {
                                label: { en: 'Category name' },
                                type: 'Text',
                            },
                        },
                    },
                },
            },
            defaultValue: [
                {
                    start: '2022-01-01 12:00',
                    end: '2022-01-01 14:00',
                    title: 'My first event',
                    content: 'Content of my first event',
                    calendar: null,
                    category: null,
                },
                {
                    start: '2022-01-02',
                    end: '2022-01-02',
                    title: 'My second event',
                    content: 'Content of my second event',
                    calendar: null,
                    category: null,
                    allDay: true,
                },
            ],
        },
        eventStartPath: {
            hidden: (content, sidepanelContent, boundProps) =>
                !showFormula('events', { content, boundProps }),
            label: {
                en: 'Event start date',
            },
            type: 'Formula',
            options: content => getFormulaOptions('events', { content }),
            defaultValue: null,
            section: 'settings',
        },
        eventEndPath: {
            hidden: (content, sidepanelContent, boundProps) =>
                !showFormula('events', { content, boundProps }),
            label: {
                en: 'Event End date',
            },
            type: 'Formula',
            options: content => getFormulaOptions('events', { content }),
            defaultValue: null,
            section: 'settings',
        },
        eventTitlePath: {
            hidden: (content, sidepanelContent, boundProps) =>
                !showFormula('events', { content, boundProps }),
            label: {
                en: 'Event title',
            },
            type: 'Formula',
            options: content => getFormulaOptions('events', { content }),
            defaultValue: null,
            section: 'settings',
        },
        eventContentPath: {
            hidden: (content, sidepanelContent, boundProps) =>
                !showFormula('events', { content, boundProps }),
            label: {
                en: 'Event content',
            },
            type: 'Formula',
            options: content => getFormulaOptions('events', { content }),
            defaultValue: null,
            section: 'settings',
        },
        eventAllDayPath: {
            hidden: (content, sidepanelContent, boundProps) =>
                !showFormula('events', { content, boundProps }),
            label: {
                en: 'Event all day',
            },
            type: 'Formula',
            options: content => getFormulaOptions('events', { content }),
            defaultValue: null,
            section: 'settings',
        },
        eventCalendarPath: {
            hidden: (content, sidepanelContent, boundProps) =>
                !showFormula('events', { content, boundProps }),
            label: {
                en: 'Event calendar id',
            },
            type: 'Formula',
            options: content => getFormulaOptions('events', { content }),
            defaultValue: null,
            section: 'settings',
        },
        eventCategoryPath: {
            hidden: (content, sidepanelContent, boundProps) =>
                !showFormula('events', { content, boundProps }),
            label: {
                en: 'Event category name',
            },
            type: 'Formula',
            options: content => getFormulaOptions('events', { content }),
            defaultValue: null,
            section: 'settings',
        },

        categories: {
            section: 'settings',
            label: {
                en: 'Categories',
            },
            type: 'Array',
            bindable: true,
            options: {
                item: {
                    type: 'Object',
                    defaultValue: { name: 'Sport', color: null },
                    options: {
                        item: {
                            name: {
                                label: { en: 'Name' },
                                type: 'Text',
                            },
                            color: {
                                label: { en: 'Background color' },
                                type: 'Color',
                            },
                            textColor: {
                                label: { en: 'Text color' },
                                type: 'Color',
                            },
                        },
                    },
                },
            },
            defaultValue: [],
        },
        categoryNamePath: {
            hidden: (content, sidepanelContent, boundProps) =>
                !showFormula('categories', { content, boundProps }),
            label: {
                en: 'Category name',
            },
            type: 'Formula',
            options: content => getFormulaOptions('categories', { content }),
            defaultValue: null,
            section: 'settings',
        },
        categoryColorPath: {
            hidden: (content, sidepanelContent, boundProps) =>
                !showFormula('categories', { content, boundProps }),
            label: {
                en: 'Category color',
            },
            type: 'Formula',
            options: content => getFormulaOptions('categories', { content }),
            defaultValue: null,
            section: 'settings',
        },
        categoryColorTextPath: {
            hidden: (content, sidepanelContent, boundProps) =>
                !showFormula('categories', { content, boundProps }),
            label: {
                en: 'Category text color',
            },
            type: 'Formula',
            options: content => getFormulaOptions('categories', { content }),
            defaultValue: null,
            section: 'settings',
        },

        lang: {
            section: 'settings',
            type: 'TextSelect',
            label: {
                en: 'Language',
            },
            options: {
                options: [
                    { label: 'English', value: 'en' },
                    { label: 'French', value: 'fr' },
                    { label: 'Spanish', value: 'es' },
                    { label: 'German', value: 'de' },
                ],
            },
            defaultValue: 'en',
            bindable: true,
        },
    },
};
