const langTooltip = `An array of objects:
\`\`\`json
[
    { label: 'English', value: 'en' },
    { label: 'French', value: 'fr' },
    { label: 'Spanish', value: 'es' },
    { label: 'German', value: 'de' },
]
\`\`\` `;

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
            defaultValue: '15px',
            responsive: true,
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
            defaultValue: '15px',
            responsive: true,
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
            defaultValue: '15px',
            responsive: true,
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
                ],
            },
            defaultValue: 'en',
            bindable: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'array',
                tooltip: langTooltip,
            },
            /* wwEditor:end */
        },
    },
};
