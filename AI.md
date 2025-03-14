---
name: ww-fullcalendar
description: A feature-rich calendar component based on FullCalendar library with multiple view types, event management, and extensive customization options
keywords: calendar, events, scheduling, fullcalendar, date picker, time slots, appointments
---

#### FullCalendar Component

Properties:
- `darkMode`: `boolean` - Enables dark mode styling. Default: `false`
- `fontFamily`: `string` - Sets the font family for the calendar. Default: `null`
- `fontSize`: `number` - Sets the font size in pixels. Default: `14`
- `fontWeight`: `number` - Sets the font weight (100-900). Default: `400`

Style Properties:
- `headerBackgroundColor`: `string` - Background color for the calendar header. Default: `null`
- `headerTextColor`: `string` - Text color for the calendar header. Default: `null`
- `dayHeaderBackgroundColor`: `string` - Background color for day headers. Default: `null`
- `dayHeaderTextColor`: `string` - Text color for day headers. Default: `null`
- `dayHeaderFontSize`: `number` - Sets the font size for day headers in pixels. Default: `14`
- `dayHeaderFontWeight`: `number` - Sets the font weight for day headers (100-900). Default: `400`
- `todayBackgroundColor`: `string` - Background color for today's cell. Default: `rgba(255, 220, 40, 0.15)`
- `cellBackgroundColor`: `string` - Background color for all calendar cells. Default: `null`
- `cellTextColor`: `string` - Text color for calendar cells. Default: `null`
- `weekendTextColor`: `string` - Text color for weekend hours in week/day view. Default: `null`
- `otherMonthBackgroundColor`: `string` - Background color for days from other months. Default: `null`
- `otherMonthTextColor`: `string` - Text color for days from other months. Default: `null`
- `buttonBackgroundColor`: `string` - Background color for calendar buttons. Default: `#2C3E50`
- `buttonTextColor`: `string` - Text color for calendar buttons. Default: `#FFFFFF`
- `buttonHoverBackgroundColor`: `string` - Background color for buttons when hovered. Default: `#1e2b37`
- `buttonHoverTextColor`: `string` - Text color for buttons when hovered. Default: `#FFFFFF`
- `buttonHoverBorderColor`: `string` - Border color for buttons when hovered. Default: `#1a252f`
- `buttonActiveBackgroundColor`: `string` - Background color for buttons when active. Default: `#1a252f`
- `buttonActiveTextColor`: `string` - Text color for buttons when active. Default: `#FFFFFF`
- `buttonActiveBorderColor`: `string` - Border color for buttons when active. Default: `#151e27`
- `buttonBorderColor`: `string` - Border color for calendar buttons. Default: `#2C3E50`
- `buttonBorderRadius`: `string` - Border radius for calendar buttons. Default: `4px`
- `modernButtons`: `boolean` - Enables modern styling for navigation and today buttons. Default: `false`
- `borderColor`: `string` - Color for all calendar borders. Default: `#ddd`
- `borderWidth`: `number` - Width for all calendar borders in pixels. Default: `1`
- `defaultEventBackgroundColor`: `string` - Default background color for events. Default: `#3788d8`
- `defaultEventBorderColor`: `string` - Default border color for events. Default: `#3788d8`
- `defaultEventTextColor`: `string` - Default text color for events. Default: `#ffffff`
- `cellMinHeight`: `string` - Minimum height for calendar cells. Default: `80px`
- `headerHeight`: `string` - Height for the calendar header. Default: `null`
- `dayHeaderHeight`: `string` - Height for the day headers. Default: `null`
- `nowIndicatorColor`: `string` - Color for the current time indicator line. Default: `red`

View Settings:
- `locale`: `string` - Sets the language locale. Default: `'auto'`
- `yearView`: `boolean` - Enables year view. Default: `true`
- `monthView`: `boolean` - Enables month view. Default: `true`
- `weekView`: `boolean` - Enables week view. Default: `true`
- `dayView`: `boolean` - Enables day view. Default: `true`
- `listView`: `boolean` - Enables list view. Default: `true`
- `defaultView`: `'multiMonthYear' | 'dayGridMonth' | 'timeGridWeek' | 'timeGridDay' | 'listWeek'` - Sets the initial view. Default: `'dayGridMonth'`
- `timeless`: `boolean` - Hides time slots and shows only all-day events. Default: `false`
- `timeStart`: `string` - Sets the start time for the calendar time grid (format: "HH:MM:SS"). Default: `'00:00:00'`
- `timeEnd`: `string` - Sets the end time for the calendar time grid (format: "HH:MM:SS"). Default: `'24:00:00'`
- `hideWeekends`: `boolean` - Hides Saturday and Sunday. Default: `false`
- `startWeekOnSunday`: `boolean` - Starts the week on Sunday instead of Monday. Default: `false`
- `use12hFormat`: `boolean` - Uses 12-hour time format (AM/PM) instead of 24-hour format. Default: `false`
- `hideDaysOfWeek`: `number[]` - Array of day numbers to hide (0=Sunday, 1=Monday, etc.). Default: `[]`
- `hideDaysOfMonth`: `number[]` - Array of month days to hide (1-31). Default: `[]`

Event Data:
- `events`: `array` - Array of event objects with properties:
  - `id`: `string` - Unique identifier for the event
  - `title`: `string` - Event title
  - `content`: `string` - Event description
  - `start`: `string` - Start date/time in ISO format
  - `end`: `string` - End date/time in ISO format
  - `allDay`: `boolean` - Whether the event is all-day
  - `backgroundColor`: `string` - Event background color
  - `borderColor`: `string` - Event border color
  - `textColor`: `string` - Event text color
  - `url`: `string` - URL associated with the event
  - `data`: `string` - Additional JSON data for the event
  - `category`: `string` - Category ID for the event

Event Property Mapping:
- `eventsIdPath`: `string` - Field to use as event ID. Default: `'id'`
- `eventsTitlePath`: `string` - Field to use as event title. Default: `'title'`
- `eventsStartPath`: `string` - Field to use as event start date. Default: `'start'`
- `eventsEndPath`: `string` - Field to use as event end date. Default: `'end'`
- `eventsAllDayPath`: `string` - Field to use as event all-day flag. Default: `'allDay'`
- `eventsBackgroundColorPath`: `string` - Field to use as event background color. Default: `'backgroundColor'`
- `eventsBorderColorPath`: `string` - Field to use as event border color. Default: `'borderColor'`
- `eventsTextColorPath`: `string` - Field to use as event text color. Default: `'textColor'`
- `eventsUrlPath`: `string` - Field to use as event URL. Default: `'url'`
- `eventsContentPath`: `string` - Field to use as event content/description. Default: `'content'`
- `eventsDataPath`: `string` - Field to use as event additional data. Default: `'data'`
- `eventsCategoryPath`: `string` - Field to use as event category. Default: `'category'`

Categories:
- `categories`: `array` - Array of category objects with properties:
  - `id`: `string` - Unique identifier for the category
  - `name`: `string` - Category name
  - `backgroundColor`: `string` - Default background color for events in this category
  - `borderColor`: `string` - Default border color for events in this category
  - `textColor`: `string` - Default text color for events in this category

Category Property Mapping:
- `categoriesIdPath`: `string` - Field to use as category ID. Default: `'id'`
- `categoriesNamePath`: `string` - Field to use as category name. Default: `'name'`
- `categoriesBackgroundColorPath`: `string` - Field to use as category background color. Default: `'backgroundColor'`
- `categoriesBorderColorPath`: `string` - Field to use as category border color. Default: `'borderColor'`
- `categoriesTextColorPath`: `string` - Field to use as category text color. Default: `'textColor'`

Slots:
- `noEventsContent` - Slot for customizing the empty list message when there are no events to display

Events:
- `eventClick`: {value: eventData} - Triggered when an event is clicked
- `viewChange`: {value: viewData} - Triggered when the calendar view changes
- `eventCreated`: {value: eventData} - Triggered when an event is created
- `eventUpdated`: {value: eventData} - Triggered when an event is updated
- `eventDeleted`: {value: eventData} - Triggered when an event is deleted
- `eventDragStart`: {value: eventData} - Triggered when event dragging starts
- `eventDragEnd`: {value: eventData} - Triggered when event dragging ends
- `eventDrop`: {value: eventData} - Triggered when an event is dropped in a new position
- `eventResizeStart`: {value: eventData} - Triggered when event resizing starts
- `eventResize`: {value: eventData} - Triggered when an event is resized

Actions:
- `changeView`: Changes the current calendar view. Args: viewName (string)
- `goToDate`: Navigates to a specific date. Args: date (string in YYYY-MM-DD format)
- `next`: Moves to the next time period (day, week, month, etc.)
- `prev`: Moves to the previous time period (day, week, month, etc.)
- `today`: Moves to the current date
- `addEvent`: Adds a new event to the calendar. Args: eventData (object)
- `updateEvent`: Updates an existing event. Args: eventId (string), eventData (object)
- `removeEvent`: Removes an event from the calendar. Args: eventId (string)

Variables:
- `currentView`: string - The currently active view type
- `selectedEvent`: object - The most recently clicked event data

Special features:
- Responsive design that adapts to container size
- Dark mode support with custom styling
- Multiple view types (year, month, week, day, list)
- Event drag-and-drop for rescheduling
- Event resizing to adjust duration
- Category-based event styling
- Customizable time ranges and day display
- Internationalization support with multiple locales
- Extensive style customization for all calendar elements
- Configurable cell dimensions and spacing
- Custom empty list message via slot
- Weekend hours text color customization
- Modern button styling option with transparent navigation buttons
- Configurable border radius for buttons and calendar
- Dynamic property mapping for events and categories when binding external data

Important Build guidelines
- Always put a fixed height on the calendar element
- Never use flex or min-height directly on the calendar element
- When creating fake events put them in 2025