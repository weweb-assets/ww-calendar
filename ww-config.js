function showObjectPropertyPath(basePropertyKey, { content, boundProps }) {
    return (
        boundProps[basePropertyKey] &&
        content[basePropertyKey] &&
        typeof wwLib.wwCollection.getCollectionData(content[basePropertyKey])[0] === 'object'
    );
}
function getObjectPropertyPathOptions(basePropertyKey, { content }) {
    const data = wwLib.wwCollection.getCollectionData(content[basePropertyKey]);
    if (!data.length || typeof data[0] !== 'object') {
        return null;
    }

    return { object: data[0] };
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
            'defaultEventTitleSize',
            'defaultEventTimeSize',
            'defaultEventContentSize',
            'themeColor',
            ['themeMenuColor', 'themeTitleBarColor', 'themeTodayCellColor', 'themeSelectedCellColor'],
            'defaultView',
            ['enableYearsView', 'enableYearView', 'enableMonthView', 'enableWeekView', 'enableDayView'],
            'enableTimelessMode',
            ['timestep', 'timeStart', 'timeEnd'],
            ['startWeekOnSunday', 'twelveHour'], // I18n
            ['hideWeekends', 'hideWeekdays'], // Hide days
            ['watchRealTime', 'todayButton', 'showAllDayEvents']
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
            default: true,
            getTestEvent: 'getTestEvent',
        },
        {
            name: 'cell:click',
            label: { en: 'On cell click' },
            event: {
                cell: {
                    date: new Date(),
                    calendar: null,
                },
                currentView: 'years | year | month | week | day',
            },
        },
        {
            name: 'view:change',
            label: { en: 'On view change' },
            event: {
                view: 'years | year | month | week | day',
                startDate: null,
                endDate: null,
                firstCellDate: null,
                lastCellDate: null,
                outOfScopeEvents: [],
                events: [],
                week: 1
            },
        },
    ],
    properties: {
        defaultEventColor: {
            label: {
                en: 'Default event color',
            },
            type: 'Color',
            classes: true,
            states: true,
            responsive: true,
            bindable: true,
            /* wwEditor:start */
            bindingValidation: {
                cssSupports: 'color',
                type: 'string',
                tooltip: 'A string that represents a color code: `"rebeccapurple" | "#00ff00" | "rgb(214, 122, 127)"`',
            },
            /* wwEditor:end */
        },
        defaultEventTextColor: {
            label: {
                en: 'Default event text color',
            },
            type: 'Color',
            classes: true,
            states: true,
            responsive: true,
            bindable: true,
            /* wwEditor:start */
            bindingValidation: {
                cssSupports: 'color',
                type: 'string',
                tooltip: 'A string that represents a color code: `"rebeccapurple" | "#00ff00" | "rgb(214, 122, 127)"`',
            },
            /* wwEditor:end */
        },
        defaultEventTitleSize: {
            type: 'Length',
            label: { en: 'Default event title font-size' },
            options: {
                unitChoices: [
                    { value: 'px', label: 'px', min: 10, max: 50 },
                    { value: 'em', label: 'em', min: 1, max: 50 },
                    { value: 'rem', label: 'rem', min: 1, max: 50 },
                ],
            },
            classes: true,
            states: true,
            responsive: true,
            bindable: true,
        },
        defaultEventTimeSize: {
            type: 'Length',
            label: { en: 'Default event time font-size' },
            options: {
                unitChoices: [
                    { value: 'px', label: 'px', min: 10, max: 50 },
                    { value: 'em', label: 'em', min: 1, max: 50 },
                    { value: 'rem', label: 'rem', min: 1, max: 50 },
                ],
            },
            classes: true,
            states: true,
            responsive: true,
            bindable: true,
        },
        defaultEventContentSize: {
            type: 'Length',
            label: { en: 'Default event content font-size' },
            options: {
                unitChoices: [
                    { value: 'px', label: 'px', min: 10, max: 50 },
                    { value: 'em', label: 'em', min: 1, max: 50 },
                    { value: 'rem', label: 'rem', min: 1, max: 50 },
                ],
            },
            classes: true,
            states: true,
            responsive: true,
            bindable: true,
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
            classes: true,
            states: true,
            responsive: true,
        },
        themeMenuColor: {
            hidden: content => content.themeColor !== 'vuecal--custom-theme',
            label: {
                en: 'Views menu',
            },
            type: 'Color',
            classes: true,
            states: true,
            responsive: true,
        },
        themeTitleBarColor: {
            hidden: content => content.themeColor !== 'vuecal--custom-theme',
            label: {
                en: 'Title bar',
            },
            type: 'Color',
            classes: true,
            states: true,
            responsive: true,
        },
        themeTodayCellColor: {
            hidden: content => content.themeColor !== 'vuecal--custom-theme',
            label: {
                en: 'Today cell',
            },
            type: 'Color',
            classes: true,
            states: true,
            responsive: true,
        },
        themeSelectedCellColor: {
            hidden: content => content.themeColor !== 'vuecal--custom-theme',
            label: {
                en: 'Selected cell',
            },
            type: 'Color',
            classes: true,
            states: true,
            responsive: true,
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
            bindable: true
        },
        enableYearView: {
            label: {
                en: 'Year view',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true
        },
        enableMonthView: {
            label: {
                en: 'Month view',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true
        },
        enableWeekView: {
            label: {
                en: 'Week view',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true
        },
        enableDayView: {
            label: {
                en: 'Day view',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true
        },
        hideWeekends: {
            label: {
                en: 'Hide weekends',
            },
            type: 'OnOff',
            defaultValue: false,
            bindable: true
        },
        showAllDayEvents: {
            label: {
                en: 'Show all day events',
            },
            type: 'OnOff',
            defaultValue: false,
            bindable: true
        },
        showCountOnYearView: {
            label: {
                en: 'Show count on year view',
            },
            type: 'OnOff',
            defaultValue: false,
            bindable: true
        },
        enableTimelessMode: {
            label: {
                en: 'Timeless mode',
            },
            type: 'OnOff',
            defaultValue: false,
            bindable: true
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
            bindable: true
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
            bindable: true
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
            bindable: true
        },
        startWeekOnSunday: {
            label: {
                en: 'Start week on Sunday',
            },
            type: 'OnOff',
            defaultValue: false,
            bindable: true
        },
        hideWeekdays: {
            label: {
                en: 'Hide particular days of the week',
            },
            type: 'Array',
            defaultValue: [],
            bindable: true,
            options: {
                item: {
                    type: 'TextSelect',
                    options: {
                        options: [
                            { label: 'Monday', value: 1 },
                            { label: 'Tuesday', value: 2 },
                            { label: 'Wednesday', value: 3 },
                            { label: 'Thursday', value: 4 },
                            { label: 'Friday', value: 5 },
                            { label: 'Saturday', value: 6 },
                            { label: 'Sunday', value: 7 },
                        ],
                    },
                },
            },
            /* wwEditor:start */
            bindingValidation: {
                type: 'array',
                tooltip:
                    'Numbers from 1 to 7 for the day of the week, 7 is Sunday. Ex: `[6, 7]`',
            },
            /* wwEditor:end */
            responsive: true,
        },
        twelveHour: {
            label: {
                en: 'Use 12h format',
            },
            type: 'OnOff',
            defaultValue: false,
            bindable: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'boolean',
                tooltip: 'A boolean that defines whether the option is applied: `true | false',
            },
            /* wwEditor:end */
        },
        watchRealTime: {
            label: {
                en: 'Update current time every minute',
            },
            type: 'OnOff',
            defaultValue: true,
            bindable: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'boolean',
                tooltip: 'A boolean that defines whether the option is applied: `true | false',
            },
            /* wwEditor:end */
        },
        todayButton: {
            label: {
                en: 'Add "Today" button',
            },
            type: 'OnOff',
            defaultValue: false,
            bindable: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'boolean',
                tooltip: 'A boolean that defines whether the option is applied: `true | false',
            },
            /* wwEditor:end */
        },
        daySize: {
            label: {
                en: 'Header Format',
            },
            type: 'TextSelect',
            options: {
                options: [
                    { label: 'Normal', value: null },
                    { label: 'Short', value: 'small' },
                    { label: 'Minimal', value: 'xsmall' },
                ],
            },
            defaultValue: null,
            bindable: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'A string that defines what option is applied: `null | small | xsmall`',
            },
            /* wwEditor:end */
            responsive: true,
        },
        selectedDate: {
            label: {
                en: 'Selected date',
            },
            type: 'Text',
            defaultValue: '',
            bindable: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: `A string that defines the selected date. The selected date is used as "init value". Updating it after init will update the view if needed to show this date. A correct string date format is 2023-06-15 07:05 or 2023-06-15 if you don't need the time. Only these formats will work as a string. You can also provide a native Javascript Date object.`,
            },
            /* wwEditor:end */
            responsive: true,
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
            /* wwEditor:start */
            bindingValidation: {
                type: 'array',
                tooltip: 'An array of objects: `[{}, {}, ...]`',
            },
            /* wwEditor:end */
        },
        calendarIdPath: {
            hidden: (content, sidepanelContent, boundProps) =>
                !showObjectPropertyPath('calendars', { content, boundProps }),
            label: {
                en: 'Id property',
            },
            type: 'ObjectPropertyPath',
            options: content => getObjectPropertyPathOptions('calendars', { content }),
            defaultValue: null,
            section: 'settings',
        },
        calendarLabelPath: {
            hidden: (content, sidepanelContent, boundProps) =>
                !showObjectPropertyPath('calendars', { content, boundProps }),
            label: {
                en: 'Label property',
            },
            type: 'ObjectPropertyPath',
            options: content => getObjectPropertyPathOptions('calendars', { content }),
            defaultValue: null,
            section: 'settings',
        },
        calendarColorPath: {
            hidden: (content, sidepanelContent, boundProps) =>
                !showObjectPropertyPath('calendars', { content, boundProps }),
            label: {
                en: 'Color property',
            },
            type: 'ObjectPropertyPath',
            options: content => getObjectPropertyPathOptions('calendars', { content }),
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
                    // Add 2h event today
                    start: `${new Date().toISOString().split('T')[0]} 12:00`,
                    end: `${new Date().toISOString().split('T')[0]} 14:00`,
                    title: 'My first event',
                    content: 'Content of my first event',
                    calendar: null,
                    category: 'Sport',
                },
                {
                    start: new Date(Date.now() - (1 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0],
                    end: new Date(Date.now() - (1 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0],
                    title: 'My second event',
                    content: 'Content of my second event',
                    calendar: null,
                    category: 'Health',
                    allDay: true,
                },
            ],
            /* wwEditor:start */
            bindingValidation: {
                type: 'array',
                tooltip: 'An array of objects: `[{}, {}, ...]`',
            },
            /* wwEditor:end */
        },
        eventStartPath: {
            hidden: (content, sidepanelContent, boundProps) =>
                !showObjectPropertyPath('events', { content, boundProps }),
            label: {
                en: 'Start date property',
            },
            type: 'ObjectPropertyPath',
            options: content => getObjectPropertyPathOptions('events', { content }),
            defaultValue: null,
            section: 'settings',
        },
        eventEndPath: {
            hidden: (content, sidepanelContent, boundProps) =>
                !showObjectPropertyPath('events', { content, boundProps }),
            label: {
                en: 'End date property',
            },
            type: 'ObjectPropertyPath',
            options: content => getObjectPropertyPathOptions('events', { content }),
            defaultValue: null,
            section: 'settings',
        },
        eventTitlePath: {
            hidden: (content, sidepanelContent, boundProps) =>
                !showObjectPropertyPath('events', { content, boundProps }),
            label: {
                en: 'Title property',
            },
            type: 'ObjectPropertyPath',
            options: content => getObjectPropertyPathOptions('events', { content }),
            defaultValue: null,
            section: 'settings',
        },
        eventContentPath: {
            hidden: (content, sidepanelContent, boundProps) =>
                !showObjectPropertyPath('events', { content, boundProps }),
            label: {
                en: 'Content property',
            },
            type: 'ObjectPropertyPath',
            options: content => getObjectPropertyPathOptions('events', { content }),
            defaultValue: null,
            section: 'settings',
        },
        eventAllDayPath: {
            hidden: (content, sidepanelContent, boundProps) =>
                !showObjectPropertyPath('events', { content, boundProps }),
            label: {
                en: 'All day property',
            },
            type: 'ObjectPropertyPath',
            options: content => getObjectPropertyPathOptions('events', { content }),
            defaultValue: null,
            section: 'settings',
        },
        eventCalendarPath: {
            hidden: (content, sidepanelContent, boundProps) =>
                !showObjectPropertyPath('events', { content, boundProps }),
            label: {
                en: 'Calendar ID property',
            },
            type: 'ObjectPropertyPath',
            options: content => getObjectPropertyPathOptions('events', { content }),
            defaultValue: null,
            section: 'settings',
        },
        eventCategoryPath: {
            hidden: (content, sidepanelContent, boundProps) =>
                !showObjectPropertyPath('events', { content, boundProps }),
            label: {
                en: 'Category name property',
            },
            type: 'ObjectPropertyPath',
            options: content => getObjectPropertyPathOptions('events', { content }),
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
                    defaultValue: { name: 'Sport', color: '#FFFFFF', textColor: '#000000' },
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
            defaultValue: [
                {
                    name: 'Sport',
                    color: '#FFA500',
                    textColor: '#FFFFFF',
                },
                {
                    name: 'Health',
                    color: 'green',
                    textColor: '#FFFFFF',
                },
            ],
            /* wwEditor:start */
            bindingValidation: {
                type: 'array',
                tooltip: 'An array of objects: `[{}, {}, ...]`',
            },
            /* wwEditor:end */
        },
        categoryNamePath: {
            hidden: (content, sidepanelContent, boundProps) =>
                !showObjectPropertyPath('categories', { content, boundProps }),
            label: {
                en: 'Name property',
            },
            type: 'ObjectPropertyPath',
            options: content => getObjectPropertyPathOptions('categories', { content }),
            defaultValue: null,
            section: 'settings',
        },
        categoryColorPath: {
            hidden: (content, sidepanelContent, boundProps) =>
                !showObjectPropertyPath('categories', { content, boundProps }),
            label: {
                en: 'Color property',
            },
            type: 'ObjectPropertyPath',
            options: content => getObjectPropertyPathOptions('categories', { content }),
            defaultValue: null,
            section: 'settings',
        },
        categoryColorTextPath: {
            hidden: (content, sidepanelContent, boundProps) =>
                !showObjectPropertyPath('categories', { content, boundProps }),
            label: {
                en: 'Color text property',
            },
            type: 'ObjectPropertyPath',
            options: content => getObjectPropertyPathOptions('categories', { content }),
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
                    { label: 'Portuguese Brasilian', value: 'pt-br' },
                ],
            },
            defaultValue: 'en',
            bindable: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: `Either the identifier of the language, or a JS object. Example: "en", "fr". See https://antoniandre.github.io/vue-cal/#ex--internationalization for a full list of all supported languages. See https://github.com/antoniandre/vue-cal/blob/main/src/vue-cal/i18n/en.json for providing a JS object.`,
            },
            /* wwEditor:end */
        },
    },
};
