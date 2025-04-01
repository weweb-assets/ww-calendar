export default {
    editor: {
        label: {
            en: 'FullCalendar',
        },
        icon: 'calendar',
        customSettingsPropertiesOrder: [
            'viewSettingsTitle',
            ['locale', 'defaultView'],
            ['yearView', 'monthView', 'weekView', 'dayView', 'listView'],
            ['timeless', 'timeStart', 'timeEnd'],
            ['hideWeekends', 'startWeekOnSunday', 'use12hFormat'],
            ['hideDaysOfWeek', 'hideDaysOfMonth'],
            'eventsTitle',
            ['events',
            'eventsIdPath',
            'eventsTitlePath',
            'eventsStartPath',
            'eventsEndPath',
            'eventsAllDayPath',
            'eventsBackgroundColorPath',
            'eventsBorderColorPath',
            'eventsTextColorPath',
            'eventsUrlPath',
            'eventsContentPath',
            'eventsDataPath',
            'eventsCategoryPath'],
            'categoriesTitle',
            ['categories',
            'categoriesIdPath',
            'categoriesNamePath',
            'categoriesBackgroundColorPath',
            'categoriesBorderColorPath',
            'categoriesTextColorPath'],
            ['buttonTextToday', 'buttonTextYear', 'buttonTextMonth', 'buttonTextWeek', 'buttonTextDay', 'buttonTextList']
        ],
        customStylePropertiesOrder: [
            'generalStyleTitle',
            ['darkMode', 'fontFamily', 'fontSize', 'fontWeight'],
            'headerStyleTitle',
            ['headerBackgroundColor', 'headerTextColor', 'headerHeight'],
            'dayHeaderStyleTitle',
            [
                'dayHeaderBackgroundColor',
                'dayHeaderTextColor',
                'dayHeaderHeight',
                'dayHeaderFontSize',
                'dayHeaderFontWeight',
            ],
            'cellStyleTitle',
            ['todayBackgroundColor', 'cellBackgroundColor', 'cellTextColor', 'cellMinHeight'],
            ['otherMonthBackgroundColor', 'otherMonthTextColor', 'weekendTextColor'],
            'buttonStyleTitle',
            [
                'buttonBackgroundColor',
                'buttonTextColor',
                'buttonHoverBackgroundColor',
                'buttonHoverTextColor',
                'buttonActiveBackgroundColor',
                'buttonActiveTextColor',
                'buttonHoverBorderColor',
                'buttonActiveBorderColor',
                'buttonBorderColor',
                'buttonBorderRadius',
            ],
            'borderStyleTitle',
            ['borderColor'],
            'eventStyleTitle',
            ['defaultEventBackgroundColor', 'defaultEventBorderColor', 'defaultEventTextColor'],
            'indicatorStyleTitle',
            ['nowIndicatorColor']
        ],
    },
    properties: {
        // Title properties for Settings
        viewSettingsTitle: {
            section: 'settings',
            type: 'Title',
            label: {
                en: 'View Settings',
            },
            editorOnly: true,
        },
        eventsTitle: {
            section: 'settings',
            type: 'Title',
            label: {
                en: 'Events',
            },
            editorOnly: true,
        },
        categoriesTitle: {
            section: 'settings',
            type: 'Title',
            label: {
                en: 'Categories',
            },
            editorOnly: true,
        },

        // Title properties for Style
        generalStyleTitle: {
            section: 'style',
            type: 'Title',
            label: {
                en: 'General',
            },
            editorOnly: true,
        },
        headerStyleTitle: {
            section: 'style',
            type: 'Title',
            label: {
                en: 'Header',
            },
            editorOnly: true,
        },
        dayHeaderStyleTitle: {
            section: 'style',
            type: 'Title',
            label: {
                en: 'Day header',
            },
            editorOnly: true,
        },
        cellStyleTitle: {
            section: 'style',
            type: 'Title',
            label: {
                en: 'Cells',
            },
            editorOnly: true,
        },
        buttonStyleTitle: {
            section: 'style',
            type: 'Title',
            label: {
                en: 'Buttons',
            },
            editorOnly: true,
        },
        borderStyleTitle: {
            section: 'style',
            type: 'Title',
            label: {
                en: 'Borders',
            },
            editorOnly: true,
        },
        eventStyleTitle: {
            section: 'style',
            type: 'Title',
            label: {
                en: 'Events',
            },
            editorOnly: true,
        },
        indicatorStyleTitle: {
            section: 'style',
            type: 'Title',
            label: {
                en: 'Indicators',
            },
            editorOnly: true,
        },
        // Appearance - Style Tab
        darkMode: {
            label: { en: 'Dark mode' },
            type: 'OnOff',
            section: 'style',
            bindable: true,
            defaultValue: false,
            /* wwEditor:start */
            bindingValidation: {
                type: 'boolean',
                tooltip: 'Bind to a boolean value to toggle dark mode',
            },
            propertyHelp: {
                tooltip: 'Enable dark mode for the calendar',
            },
            /* wwEditor:end */
        },
        fontFamily: {
            label: { en: 'Font family' },
            type: 'FontFamily',
            section: 'style',
            bindable: true,
            defaultValue: null,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the font family',
            },
            propertyHelp: {
                tooltip: 'Set the font family for the calendar',
            },
            /* wwEditor:end */
        },
        fontSize: {
            label: { en: 'Font size' },
            type: 'Length',
            section: 'style',
            bindable: true,
            defaultValue: '14px',
            options: {
                unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
                noRange: true,
            },
            responsive: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the font size (e.g., "14px")',
            },
            propertyHelp: {
                tooltip: 'Set the font size for the calendar',
            },
            /* wwEditor:end */
        },
        fontWeight: {
            label: { en: 'Font weight' },
            type: 'TextSelect',
            section: 'style',
            bindable: true,
            defaultValue: '400',
            options: {
                options: [
                    { value: '100', label: '100 (Thin)' },
                    { value: '200', label: '200 (Extra Light)' },
                    { value: '300', label: '300 (Light)' },
                    { value: '400', label: '400 (Normal)' },
                    { value: '500', label: '500 (Medium)' },
                    { value: '600', label: '600 (Semi Bold)' },
                    { value: '700', label: '700 (Bold)' },
                    { value: '800', label: '800 (Extra Bold)' },
                    { value: '900', label: '900 (Black)' },
                ],
            },
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the font weight (100-900)',
            },
            propertyHelp: {
                tooltip: 'Set the font weight for the calendar (100-900)',
            },
            /* wwEditor:end */
        },

        // Calendar Colors - Style Tab
        headerBackgroundColor: {
            label: { en: 'Background' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: null,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the header background',
            },
            propertyHelp: {
                tooltip: 'Set the background color for the calendar header',
            },
            /* wwEditor:end */
        },
        headerTextColor: {
            label: { en: 'Text color' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: null,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the header text',
            },
            propertyHelp: {
                tooltip: 'Set the text color for the calendar header',
            },
            /* wwEditor:end */
        },
        dayHeaderBackgroundColor: {
            label: { en: 'Background' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: null,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the day header background',
            },
            propertyHelp: {
                tooltip: 'Set the background color for the day headers (Mon, Tue, etc.)',
            },
            /* wwEditor:end */
        },
        dayHeaderTextColor: {
            label: { en: 'Text color' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: null,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the day header text',
            },
            propertyHelp: {
                tooltip: 'Set the text color for the day headers (Mon, Tue, etc.)',
            },
            /* wwEditor:end */
        },
        dayHeaderFontSize: {
            label: { en: 'Font size' },
            type: 'Length',
            section: 'style',
            bindable: true,
            defaultValue: '14px',
            options: {
                unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
                noRange: true,
            },
            responsive: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the font size (e.g., "14px")',
            },
            propertyHelp: {
                tooltip: 'Set the font size for the day headers',
            },
            /* wwEditor:end */
        },
        dayHeaderFontWeight: {
            label: { en: 'Font weight' },
            type: 'TextSelect',
            section: 'style',
            bindable: true,
            defaultValue: '400',
            options: {
                options: [
                    { value: '100', label: '100 (Thin)' },
                    { value: '200', label: '200 (Extra Light)' },
                    { value: '300', label: '300 (Light)' },
                    { value: '400', label: '400 (Normal)' },
                    { value: '500', label: '500 (Medium)' },
                    { value: '600', label: '600 (Semi Bold)' },
                    { value: '700', label: '700 (Bold)' },
                    { value: '800', label: '800 (Extra Bold)' },
                    { value: '900', label: '900 (Black)' },
                ],
            },
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the font weight (100-900)',
            },
            propertyHelp: {
                tooltip: 'Set the font weight for the day headers',
            },
            /* wwEditor:end */
        },
        todayBackgroundColor: {
            label: { en: 'Today background' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: 'rgba(255, 220, 40, 0.15)',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: "Bind to a color value for today's cell background",
            },
            propertyHelp: {
                tooltip: "Set the background color for today's cell",
            },
            /* wwEditor:end */
        },
        cellBackgroundColor: {
            label: { en: 'Background' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: null,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the cell background',
            },
            propertyHelp: {
                tooltip: 'Set the background color for all calendar cells',
            },
            /* wwEditor:end */
        },
        cellTextColor: {
            label: { en: 'Text color' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: null,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the cell text',
            },
            propertyHelp: {
                tooltip: 'Set the text color for calendar cells',
            },
            /* wwEditor:end */
        },
        weekendTextColor: {
            label: { en: 'Weekend hours text' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: null,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the weekend hours text',
            },
            propertyHelp: {
                tooltip: 'Set the text color for weekend hours in week/day view',
            },
            /* wwEditor:end */
        },
        otherMonthBackgroundColor: {
            label: { en: 'Other month background' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: null,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: "Bind to a color value for other month's days background",
            },
            propertyHelp: {
                tooltip: 'Set the background color for days from other months',
            },
            /* wwEditor:end */
        },
        otherMonthTextColor: {
            label: { en: 'Other month text' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: null,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: "Bind to a color value for other month's days text",
            },
            propertyHelp: {
                tooltip: 'Set the text color for days from other months',
            },
            /* wwEditor:end */
        },

        // Button Styling - Style Tab
        buttonBackgroundColor: {
            label: { en: 'Background' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: '#2C3E50',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the button background',
            },
            propertyHelp: {
                tooltip: 'Set the background color for calendar buttons',
            },
            /* wwEditor:end */
        },
        buttonTextColor: {
            label: { en: 'Text color' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: '#FFFFFF',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the button text',
            },
            propertyHelp: {
                tooltip: 'Set the text color for calendar buttons',
            },
            /* wwEditor:end */
        },
        buttonHoverBackgroundColor: {
            label: { en: 'Hover background' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: '#1e2b37',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the button hover background',
            },
            propertyHelp: {
                tooltip: 'Set the background color for calendar buttons when hovered',
            },
            /* wwEditor:end */
        },
        buttonHoverTextColor: {
            label: { en: 'Hover text' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: '#FFFFFF',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the button text when hovered',
            },
            propertyHelp: {
                tooltip: 'Set the text color for calendar buttons when hovered',
            },
            /* wwEditor:end */
        },
        buttonHoverBorderColor: {
            label: { en: 'Hover border' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: '#1a252f',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the button hover border',
            },
            propertyHelp: {
                tooltip: 'Set the border color for calendar buttons when hovered',
            },
            /* wwEditor:end */
        },
        buttonActiveBackgroundColor: {
            label: { en: 'Active background' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: '#1a252f',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the button active background',
            },
            propertyHelp: {
                tooltip: 'Set the background color for calendar buttons when active',
            },
            /* wwEditor:end */
        },
        buttonActiveTextColor: {
            label: { en: 'Active text color' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: '#FFFFFF',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the button text when active',
            },
            propertyHelp: {
                tooltip: 'Set the text color for calendar buttons when active',
            },
            /* wwEditor:end */
        },
        buttonActiveBorderColor: {
            label: { en: 'Active border color' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: '#151e27',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the button active border',
            },
            propertyHelp: {
                tooltip: 'Set the border color for calendar buttons when active',
            },
            /* wwEditor:end */
        },
        buttonBorderColor: {
            label: { en: 'Border color' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: '#2C3E50',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the button border',
            },
            propertyHelp: {
                tooltip: 'Set the border color for calendar buttons',
            },
            /* wwEditor:end */
        },

        buttonBorderRadius: {
            label: { en: 'Border radius' },
            type: 'Length',
            section: 'style',
            bindable: true,
            defaultValue: '4px',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the button border radius',
            },
            propertyHelp: {
                tooltip: 'Set the border radius for calendar buttons',
            },
            /* wwEditor:end */
        },

        // Border Styling - Style Tab
        borderColor: {
            label: { en: 'Color' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: '#ddd',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the calendar borders',
            },
            propertyHelp: {
                tooltip: 'Set the color for all calendar borders',
            },
            /* wwEditor:end */
        },

        // Event Styling - Style Tab
        defaultEventBackgroundColor: {
            label: { en: 'Background' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: '#3788d8',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the default event background',
            },
            propertyHelp: {
                tooltip: 'Set the default background color for events',
            },
            /* wwEditor:end */
        },
        defaultEventBorderColor: {
            label: { en: 'Border' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: '#3788d8',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the default event border',
            },
            propertyHelp: {
                tooltip: 'Set the default border color for events',
            },
            /* wwEditor:end */
        },
        defaultEventTextColor: {
            label: { en: 'Text color' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: '#ffffff',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the default event text',
            },
            propertyHelp: {
                tooltip: 'Set the default text color for events',
            },
            /* wwEditor:end */
        },

        // Dimensions - Style Tab
        cellMinHeight: {
            label: { en: 'Cell min height' },
            type: 'Length',
            section: 'style',
            bindable: true,
            defaultValue: '80px',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the cell minimum height (e.g., "80px")',
            },
            propertyHelp: {
                tooltip: 'Set the minimum height for calendar cells',
            },
            /* wwEditor:end */
        },
        headerHeight: {
            label: { en: 'Header height' },
            type: 'Length',
            section: 'style',
            bindable: true,
            defaultValue: null,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the header height (e.g., "50px")',
            },
            propertyHelp: {
                tooltip: 'Set the height for the calendar header',
            },
            /* wwEditor:end */
        },
        dayHeaderHeight: {
            label: { en: 'Day header height' },
            type: 'Length',
            section: 'style',
            bindable: true,
            defaultValue: null,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the day header height (e.g., "30px")',
            },
            propertyHelp: {
                tooltip: 'Set the height for the day headers (Mon, Tue, etc.)',
            },
            /* wwEditor:end */
        },

        // Indicators - Style Tab
        nowIndicatorColor: {
            label: { en: 'Color' },
            type: 'Color',
            section: 'style',
            bindable: true,
            defaultValue: 'red',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a color value for the now indicator line',
            },
            propertyHelp: {
                tooltip: 'Set the color for the line indicating the current time',
            },
            /* wwEditor:end */
        },

        // View Settings - Settings Tab
        locale: {
            label: { en: 'Locale' },
            type: 'TextSelect',
            section: 'settings',
            bindable: true,
            defaultValue: 'auto',
            options: {
                options: [
                    { value: 'auto', label: 'Current Lang' },
                    { value: 'en', label: 'English' },
                    { value: 'fr', label: 'French' },
                    { value: 'es', label: 'Spanish' },
                    { value: 'de', label: 'German' },
                    { value: 'it', label: 'Italian' },
                    { value: 'pt', label: 'Portuguese' },
                    { value: 'ru', label: 'Russian' },
                    { value: 'zh-cn', label: 'Chinese (Simplified)' },
                    { value: 'ja', label: 'Japanese' },
                    { value: 'ar', label: 'Arabic' },
                ],
            },
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the locale code (e.g., "en", "fr")',
            },
            propertyHelp: {
                tooltip: 'Set the language locale for the calendar',
            },
            /* wwEditor:end */
        },
        yearView: {
            label: { en: 'Year view' },
            type: 'OnOff',
            section: 'settings',
            bindable: true,
            defaultValue: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'boolean',
                tooltip: 'Bind to a boolean value to enable/disable year view',
            },
            propertyHelp: {
                tooltip: 'Enable year view in the calendar',
            },
            /* wwEditor:end */
        },
        monthView: {
            label: { en: 'Month view' },
            type: 'OnOff',
            section: 'settings',
            bindable: true,
            defaultValue: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'boolean',
                tooltip: 'Bind to a boolean value to enable/disable month view',
            },
            propertyHelp: {
                tooltip: 'Enable month view in the calendar',
            },
            /* wwEditor:end */
        },
        weekView: {
            label: { en: 'Week view' },
            type: 'OnOff',
            section: 'settings',
            bindable: true,
            defaultValue: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'boolean',
                tooltip: 'Bind to a boolean value to enable/disable week view',
            },
            propertyHelp: {
                tooltip: 'Enable week view in the calendar',
            },
            /* wwEditor:end */
        },
        dayView: {
            label: { en: 'Day view' },
            type: 'OnOff',
            section: 'settings',
            bindable: true,
            defaultValue: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'boolean',
                tooltip: 'Bind to a boolean value to enable/disable day view',
            },
            propertyHelp: {
                tooltip: 'Enable day view in the calendar',
            },
            /* wwEditor:end */
        },
        listView: {
            label: { en: 'List view' },
            type: 'OnOff',
            section: 'settings',
            bindable: true,
            defaultValue: true,
            /* wwEditor:start */
            bindingValidation: {
                type: 'boolean',
                tooltip: 'Bind to a boolean value to enable/disable list view',
            },
            propertyHelp: {
                tooltip: 'Enable list view in the calendar',
            },
            /* wwEditor:end */
        },
        defaultView: {
            label: { en: 'Default view' },
            type: 'TextSelect',
            section: 'settings',
            bindable: true,
            defaultValue: 'dayGridMonth',
            options: {
                options: [
                    { value: 'multiMonthYear', label: 'Year' },
                    { value: 'dayGridMonth', label: 'Month' },
                    { value: 'timeGridWeek', label: 'Week' },
                    { value: 'timeGridDay', label: 'Day' },
                    { value: 'listWeek', label: 'List' },
                ],
            },
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the default view: multiMonthYear | dayGridMonth | timeGridWeek | timeGridDay | listWeek',
            },
            /* wwEditor:end */
        },
        timeless: {
            label: { en: 'Timeless' },
            type: 'OnOff',
            section: 'settings',
            bindable: true,
            defaultValue: false,
            /* wwEditor:start */
            bindingValidation: {
                type: 'boolean',
                tooltip: 'Bind to a boolean value to enable/disable time display',
            },
            propertyHelp: {
                tooltip: 'Hide time slots and show only all-day events',
            },
            /* wwEditor:end */
        },
        timeStart: {
            label: { en: 'Time start' },
            type: 'Text',
            section: 'settings',
            bindable: true,
            defaultValue: '00:00:00',
            hidden: content => content.timeless,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the start time in format "HH:MM:SS"',
            },
            propertyHelp: {
                tooltip: 'Set the start time for the calendar time grid (format: "HH:MM:SS")',
            },
            /* wwEditor:end */
        },
        timeEnd: {
            label: { en: 'Time end' },
            type: 'Text',
            section: 'settings',
            bindable: true,
            defaultValue: '24:00:00',
            hidden: content => content.timeless,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the end time in format "HH:MM:SS"',
            },
            propertyHelp: {
                tooltip: 'Set the end time for the calendar time grid (format: "HH:MM:SS")',
            },
            /* wwEditor:end */
        },
        hideWeekends: {
            label: { en: 'Hide weekends' },
            type: 'OnOff',
            section: 'settings',
            bindable: true,
            defaultValue: false,
            /* wwEditor:start */
            bindingValidation: {
                type: 'boolean',
                tooltip: 'Bind to a boolean value to hide/show weekends',
            },
            propertyHelp: {
                tooltip: 'Hide Saturday and Sunday from the calendar',
            },
            /* wwEditor:end */
        },
        startWeekOnSunday: {
            label: { en: 'Start week on Sunday' },
            type: 'OnOff',
            section: 'settings',
            bindable: true,
            defaultValue: false,
            /* wwEditor:start */
            bindingValidation: {
                type: 'boolean',
                tooltip: 'Bind to a boolean value to start week on Sunday/Monday',
            },
            propertyHelp: {
                tooltip: 'Start the week on Sunday instead of Monday',
            },
            /* wwEditor:end */
        },
        use12hFormat: {
            label: { en: 'Use 12h format' },
            type: 'OnOff',
            section: 'settings',
            bindable: true,
            defaultValue: false,
            /* wwEditor:start */
            bindingValidation: {
                type: 'boolean',
                tooltip: 'Bind to a boolean value to use 12-hour time format',
            },
            propertyHelp: {
                tooltip: 'Use 12-hour time format (AM/PM) instead of 24-hour format',
            },
            /* wwEditor:end */
        },
        hideDaysOfWeek: {
            label: { en: 'Hide days of week' },
            type: 'Array',
            section: 'settings',
            bindable: true,
            defaultValue: [],
            options: {
                expandable: true,
                getItemLabel(item) {
                    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    return days[item] || `Day ${item}`;
                },
                item: {
                    type: 'Number',
                    options: {
                        min: 0,
                        max: 6,
                        step: 1,
                    },
                },
            },
            /* wwEditor:start */
            bindingValidation: {
                type: 'array',
                tooltip: 'Bind to an array of numbers (0-6) representing days to hide (0=Sunday, 1=Monday, etc.)',
            },
            propertyHelp: {
                tooltip: 'Hide specific days of the week (0=Sunday, 1=Monday, etc.)',
            },
            /* wwEditor:end */
        },
        hideDaysOfMonth: {
            label: { en: 'Hide days of month' },
            type: 'Array',
            section: 'settings',
            bindable: true,
            defaultValue: [],
            options: {
                expandable: true,
                getItemLabel(item) {
                    return `Day ${item}`;
                },
                item: {
                    type: 'Number',
                    options: {
                        min: 1,
                        max: 31,
                        step: 1,
                    },
                },
            },
            /* wwEditor:start */
            bindingValidation: {
                type: 'array',
                tooltip: 'Bind to an array of numbers (1-31) representing days of month to hide',
            },
            propertyHelp: {
                tooltip: 'Hide specific days of the month (1-31)',
            },
            /* wwEditor:end */
        },

        // Events
        events: {
            label: { en: 'Events' },
            type: 'Array',
            section: 'settings',
            bindable: true,
            defaultValue: [
                {
                    id: 'event1',
                    title: 'Sample Event',
                    start: new Date().toISOString(),
                    end: new Date(new Date().getTime() + 3600000).toISOString(),
                    allDay: false,
                    backgroundColor: '#3788d8',
                    borderColor: '#3788d8',
                    textColor: '#ffffff',
                    content: 'This is a sample event',
                    category: 'default',
                },
            ],
            options: {
                expandable: true,
                getItemLabel(item) {
                    return item.title || 'Untitled Event';
                },
                item: {
                    type: 'Object',
                    options: {
                        item: {
                            id: {
                                label: { en: 'ID' },
                                type: 'Text',
                                options: { placeholder: 'Event ID' },
                            },
                            title: {
                                label: { en: 'Title' },
                                type: 'Text',
                                options: { placeholder: 'Event Title' },
                            },
                            content: {
                                label: { en: 'Content' },
                                type: 'Textarea',
                                options: { placeholder: 'Event Description' },
                            },
                            start: {
                                label: { en: 'Start' },
                                type: 'Text',
                                options: { placeholder: 'YYYY-MM-DDTHH:MM:SS' },
                            },
                            end: {
                                label: { en: 'End' },
                                type: 'Text',
                                options: { placeholder: 'YYYY-MM-DDTHH:MM:SS' },
                            },
                            allDay: {
                                label: { en: 'All Day' },
                                type: 'OnOff',
                            },
                            backgroundColor: {
                                label: { en: 'Background Color' },
                                type: 'Color',
                            },
                            borderColor: {
                                label: { en: 'Border Color' },
                                type: 'Color',
                            },
                            textColor: {
                                label: { en: 'Text Color' },
                                type: 'Color',
                            },
                            url: {
                                label: { en: 'URL' },
                                type: 'Text',
                                options: { placeholder: 'https://...' },
                            },
                            data: {
                                label: { en: 'Data' },
                                type: 'Text',
                                options: { placeholder: '{ "key": "value" }' },
                            },
                            category: {
                                label: { en: 'Category' },
                                type: 'Text',
                                options: { placeholder: 'Category ID' },
                            },
                        },
                    },
                },
            },
            /* wwEditor:start */
            bindingValidation: {
                type: 'array',
                tooltip: 'Bind to an array of event objects with required properties: id, title, start, end',
            },
            propertyHelp: {
                tooltip: 'Array of calendar events to display',
            },
            /* wwEditor:end */
        },
        // Event property mapping fields
        eventsIdPath: {
            label: { en: 'ID Field' },
            type: 'ObjectPropertyPath',
            section: 'settings',
            bindable: true,
            options: content => ({
                object: content.events?.[0] || {},
            }),
            defaultValue: 'id',
            hidden: (content, sidepanelContent, boundProps) =>
                !Array.isArray(content.events) || !content.events?.length || !boundProps.events,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Select which property from your data to use as the event ID',
            },
            propertyHelp: {
                tooltip: 'Map a field from your data to the event ID property',
            },
            /* wwEditor:end */
        },
        eventsTitlePath: {
            label: { en: 'Title Field' },
            type: 'ObjectPropertyPath',
            section: 'settings',
            bindable: true,
            options: content => ({
                object: content.events?.[0] || {},
            }),
            defaultValue: 'title',
            hidden: (content, sidepanelContent, boundProps) =>
                !Array.isArray(content.events) || !content.events?.length || !boundProps.events,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Select which property from your data to use as the event title',
            },
            propertyHelp: {
                tooltip: 'Map a field from your data to the event title property',
            },
            /* wwEditor:end */
        },
        eventsStartPath: {
            label: { en: 'Start Date Field' },
            type: 'ObjectPropertyPath',
            section: 'settings',
            bindable: true,
            options: content => ({
                object: content.events?.[0] || {},
            }),
            defaultValue: 'start',
            hidden: (content, sidepanelContent, boundProps) =>
                !Array.isArray(content.events) || !content.events?.length || !boundProps.events,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Select which property from your data to use as the event start date',
            },
            propertyHelp: {
                tooltip: 'Map a field from your data to the event start date property',
            },
            /* wwEditor:end */
        },
        eventsEndPath: {
            label: { en: 'End Date Field' },
            type: 'ObjectPropertyPath',
            section: 'settings',
            bindable: true,
            options: content => ({
                object: content.events?.[0] || {},
            }),
            defaultValue: 'end',
            hidden: (content, sidepanelContent, boundProps) =>
                !Array.isArray(content.events) || !content.events?.length || !boundProps.events,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Select which property from your data to use as the event end date',
            },
            propertyHelp: {
                tooltip: 'Map a field from your data to the event end date property',
            },
            /* wwEditor:end */
        },
        eventsAllDayPath: {
            label: { en: 'All Day Field' },
            type: 'ObjectPropertyPath',
            section: 'settings',
            bindable: true,
            options: content => ({
                object: content.events?.[0] || {},
            }),
            defaultValue: 'allDay',
            hidden: (content, sidepanelContent, boundProps) =>
                !Array.isArray(content.events) || !content.events?.length || !boundProps.events,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Select which property from your data to use as the all day flag',
            },
            propertyHelp: {
                tooltip: 'Map a field from your data to the event all day property',
            },
            /* wwEditor:end */
        },
        eventsBackgroundColorPath: {
            label: { en: 'Background Color Field' },
            type: 'ObjectPropertyPath',
            section: 'settings',
            bindable: true,
            options: content => ({
                object: content.events?.[0] || {},
            }),
            defaultValue: 'backgroundColor',
            hidden: (content, sidepanelContent, boundProps) =>
                !Array.isArray(content.events) || !content.events?.length || !boundProps.events,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Select which property from your data to use as the event background color',
            },
            propertyHelp: {
                tooltip: 'Map a field from your data to the event background color property',
            },
            /* wwEditor:end */
        },
        eventsBorderColorPath: {
            label: { en: 'Border Color Field' },
            type: 'ObjectPropertyPath',
            section: 'settings',
            bindable: true,
            options: content => ({
                object: content.events?.[0] || {},
            }),
            defaultValue: 'borderColor',
            hidden: (content, sidepanelContent, boundProps) =>
                !Array.isArray(content.events) || !content.events?.length || !boundProps.events,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Select which property from your data to use as the event border color',
            },
            propertyHelp: {
                tooltip: 'Map a field from your data to the event border color property',
            },
            /* wwEditor:end */
        },
        eventsTextColorPath: {
            label: { en: 'Text Color Field' },
            type: 'ObjectPropertyPath',
            section: 'settings',
            bindable: true,
            options: content => ({
                object: content.events?.[0] || {},
            }),
            defaultValue: 'textColor',
            hidden: (content, sidepanelContent, boundProps) =>
                !Array.isArray(content.events) || !content.events?.length || !boundProps.events,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Select which property from your data to use as the event text color',
            },
            propertyHelp: {
                tooltip: 'Map a field from your data to the event text color property',
            },
            /* wwEditor:end */
        },
        eventsUrlPath: {
            label: { en: 'URL Field' },
            type: 'ObjectPropertyPath',
            section: 'settings',
            bindable: true,
            options: content => ({
                object: content.events?.[0] || {},
            }),
            defaultValue: 'url',
            hidden: (content, sidepanelContent, boundProps) =>
                !Array.isArray(content.events) || !content.events?.length || !boundProps.events,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Select which property from your data to use as the event URL',
            },
            propertyHelp: {
                tooltip: 'Map a field from your data to the event URL property',
            },
            /* wwEditor:end */
        },
        eventsContentPath: {
            label: { en: 'Content Field' },
            type: 'ObjectPropertyPath',
            section: 'settings',
            bindable: true,
            options: content => ({
                object: content.events?.[0] || {},
            }),
            defaultValue: 'content',
            hidden: (content, sidepanelContent, boundProps) =>
                !Array.isArray(content.events) || !content.events?.length || !boundProps.events,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Select which property from your data to use as the event content/description',
            },
            propertyHelp: {
                tooltip: 'Map a field from your data to the event content property',
            },
            /* wwEditor:end */
        },
        eventsDataPath: {
            label: { en: 'Data Field' },
            type: 'ObjectPropertyPath',
            section: 'settings',
            bindable: true,
            options: content => ({
                object: content.events?.[0] || {},
            }),
            defaultValue: 'data',
            hidden: (content, sidepanelContent, boundProps) =>
                !Array.isArray(content.events) || !content.events?.length || !boundProps.events,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Select which property from your data to use as the event additional data',
            },
            propertyHelp: {
                tooltip: 'Map a field from your data to the event data property',
            },
            /* wwEditor:end */
        },
        eventsCategoryPath: {
            label: { en: 'Category Field' },
            type: 'ObjectPropertyPath',
            section: 'settings',
            bindable: true,
            options: content => ({
                object: content.events?.[0] || {},
            }),
            defaultValue: 'category',
            hidden: (content, sidepanelContent, boundProps) =>
                !Array.isArray(content.events) || !content.events?.length || !boundProps.events,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Select which property from your data to use as the event category',
            },
            propertyHelp: {
                tooltip: 'Map a field from your data to the event category property',
            },
            /* wwEditor:end */
        },

        categories: {
            label: { en: 'Categories' },
            type: 'Array',
            section: 'settings',
            bindable: true,
            defaultValue: [
                {
                    id: 'default',
                    name: 'Default',
                    backgroundColor: '#3788d8',
                    borderColor: '#3788d8',
                    textColor: '#3788d8',
                },
            ],
            options: {
                expandable: true,
                getItemLabel(item) {
                    return item.name || 'Unnamed Category';
                },
                item: {
                    type: 'Object',
                    options: {
                        item: {
                            id: {
                                label: { en: 'ID' },
                                type: 'Text',
                                options: { placeholder: 'Category ID' },
                            },
                            name: {
                                label: { en: 'Name' },
                                type: 'Text',
                                options: { placeholder: 'Category Name' },
                            },
                            backgroundColor: {
                                label: { en: 'Background Color' },
                                type: 'Color',
                            },
                            borderColor: {
                                label: { en: 'Border Color' },
                                type: 'Color',
                            },
                            textColor: {
                                label: { en: 'Text Color' },
                                type: 'Color',
                            },
                        },
                    },
                },
            },
            /* wwEditor:start */
            bindingValidation: {
                type: 'array',
                tooltip: 'Bind to an array of category objects with required properties: id, name, backgroundColor',
            },
            propertyHelp: {
                tooltip: 'Define event categories with custom styling',
            },
            /* wwEditor:end */
        },
        // Category property mapping fields
        categoriesIdPath: {
            label: { en: 'ID Field' },
            type: 'ObjectPropertyPath',
            section: 'settings',
            bindable: true,
            options: content => ({
                object: content.categories?.[0] || {},
            }),
            defaultValue: 'id',
            hidden: (content, sidepanelContent, boundProps) =>
                !Array.isArray(content.categories) || !content.categories?.length || !boundProps.categories,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Select which property from your data to use as the category ID',
            },
            propertyHelp: {
                tooltip: 'Map a field from your data to the category ID property',
            },
            /* wwEditor:end */
        },
        categoriesNamePath: {
            label: { en: 'Name Field' },
            type: 'ObjectPropertyPath',
            section: 'settings',
            bindable: true,
            options: content => ({
                object: content.categories?.[0] || {},
            }),
            defaultValue: 'name',
            hidden: (content, sidepanelContent, boundProps) =>
                !Array.isArray(content.categories) || !content.categories?.length || !boundProps.categories,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Select which property from your data to use as the category name',
            },
            propertyHelp: {
                tooltip: 'Map a field from your data to the category name property',
            },
            /* wwEditor:end */
        },
        categoriesBackgroundColorPath: {
            label: { en: 'Background Color Field' },
            type: 'ObjectPropertyPath',
            section: 'settings',
            bindable: true,
            options: content => ({
                object: content.categories?.[0] || {},
            }),
            defaultValue: 'backgroundColor',
            hidden: (content, sidepanelContent, boundProps) =>
                !Array.isArray(content.categories) || !content.categories?.length || !boundProps.categories,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Select which property from your data to use as the category background color',
            },
            propertyHelp: {
                tooltip: 'Map a field from your data to the category background color property',
            },
            /* wwEditor:end */
        },
        categoriesBorderColorPath: {
            label: { en: 'Border Color Field' },
            type: 'ObjectPropertyPath',
            section: 'settings',
            bindable: true,
            options: content => ({
                object: content.categories?.[0] || {},
            }),
            defaultValue: 'borderColor',
            hidden: (content, sidepanelContent, boundProps) =>
                !Array.isArray(content.categories) || !content.categories?.length || !boundProps.categories,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Select which property from your data to use as the category border color',
            },
            propertyHelp: {
                tooltip: 'Map a field from your data to the category border color property',
            },
            /* wwEditor:end */
        },
        categoriesTextColorPath: {
            label: { en: 'Text Color Field' },
            type: 'ObjectPropertyPath',
            section: 'settings',
            bindable: true,
            options: content => ({
                object: content.categories?.[0] || {},
            }),
            defaultValue: 'textColor',
            hidden: (content, sidepanelContent, boundProps) =>
                !Array.isArray(content.categories) || !content.categories?.length || !boundProps.categories,
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Select which property from your data to use as the category text color',
            },
            propertyHelp: {
                tooltip: 'Map a field from your data to the category text color property',
            },
            /* wwEditor:end */
        },
        emptyListTextEl: {
            hidden: true,
            defaultValue: { isWwObject: true, type: 'ww-text', name: 'Empty list placeholder', state: { name: 'Empty list placeholder' }, content: { '_ww-text_text': { en: 'No events to display' } } },
        },
        buttonTextToday: {
            label: { en: '"Today" button text' },
            type: 'Text',
            section: 'settings',
            multilang: true,
            bindable: true,
            defaultValue: '',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the "Today" button text',
            },
            /* wwEditor:end */
        },
        buttonTextYear: {
            label: { en: '"Year" button text' },
            type: 'Text',
            section: 'settings',
            multilang: true,
            bindable: true,
            defaultValue: '',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the "Year" button text',
            },
            /* wwEditor:end */
        },
        buttonTextMonth: {
            label: { en: '"Month" button text' },
            type: 'Text',
            section: 'settings',
            multilang: true,
            bindable: true,
            defaultValue: '',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the "Month" button text',
            },
            /* wwEditor:end */
        },
        buttonTextWeek: {
            label: { en: '"Week" button text' },
            type: 'Text',
            section: 'settings',
            multilang: true,
            bindable: true,
            defaultValue: '',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the "Week" button text',
            },
            /* wwEditor:end */
        },
        buttonTextDay: {
            label: { en: '"Day" button text' },
            type: 'Text',
            section: 'settings',
            multilang: true,
            bindable: true,
            defaultValue: '',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the "Day" button text',
            },
            /* wwEditor:end */
        },
        buttonTextList: {
            label: { en: '"List" button text' },
            type: 'Text',
            section: 'settings',
            multilang: true,
            bindable: true,
            defaultValue: '',
            /* wwEditor:start */
            bindingValidation: {
                type: 'string',
                tooltip: 'Bind to a string value for the "List" button text',
            },
            /* wwEditor:end */
        },
    },
    triggerEvents: [
        {
            name: 'eventClick',
            label: { en: 'On event click' },
            event: { value: null },
        },
        {
            name: 'viewChange',
            label: { en: 'On view change' },
            event: { value: null },
        },
        {
            name: 'eventCreated',
            label: { en: 'On event created' },
            event: { value: null },
        },
        {
            name: 'eventUpdated',
            label: { en: 'On event updated' },
            event: { value: null },
        },
        {
            name: 'eventDeleted',
            label: { en: 'On event deleted' },
            event: { value: null },
        },
        {
            name: 'eventDragStart',
            label: { en: 'On event drag start' },
            event: { value: null },
        },
        {
            name: 'eventDragEnd',
            label: { en: 'On event drag end' },
            event: { value: null },
        },
        {
            name: 'eventDrop',
            label: { en: 'On event drop' },
            event: { value: null },
        },
        {
            name: 'eventResizeStart',
            label: { en: 'On event resize start' },
            event: { value: null },
        },
        {
            name: 'eventResize',
            label: { en: 'On event resize' },
            event: {
                value: null,
            },
        },
    ],
    actions: [
        {
            action: 'changeView',
            label: { en: 'Change view' },
            args: [
                {
                    name: 'viewName',
                    type: 'string',
                    label: { en: 'View name' },
                },
            ],
        },
        {
            action: 'goToDate',
            label: { en: 'Go to date' },
            args: [
                {
                    name: 'date',
                    type: 'string',
                    label: { en: 'Date (YYYY-MM-DD)' },
                },
            ],
        },
        {
            action: 'next',
            label: { en: 'Next period' },
        },
        {
            action: 'prev',
            label: { en: 'Previous period' },
        },
        {
            action: 'today',
            label: { en: 'Go to today' },
        },
        {
            action: 'addEvent',
            label: { en: 'Add event' },
            args: [
                {
                    name: 'eventData',
                    type: 'object',
                    label: { en: 'Event data' },
                },
            ],
        },
        {
            action: 'updateEvent',
            label: { en: 'Update event' },
            args: [
                {
                    name: 'eventId',
                    type: 'string',
                    label: { en: 'Event ID' },
                },
                {
                    name: 'eventData',
                    type: 'object',
                    label: { en: 'Event data' },
                },
            ],
        },
        {
            action: 'removeEvent',
            label: { en: 'Remove event' },
            args: [
                {
                    name: 'eventId',
                    type: 'string',
                    label: { en: 'Event ID' },
                },
            ],
        },
    ],
};
