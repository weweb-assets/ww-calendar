---
name: ww-fullcalendar
description: A feature-rich calendar component based on FullCalendar library with multiple view types, event management, and extensive customization options
keywords: calendar, events, scheduling, fullcalendar, date picker, time slots, appointments
---

#### FullCalendar Component

Properties:
- `fontFamily`: `string` - Sets the font family for the calendar. Default: `null`
- `fontSize`: `string` - Sets the font size with unit (e.g., "14px"). Default: `'14px'`
- `fontWeight`: `string` - Sets the font weight as a string value. Default: `'400'`
- `showHeader`: `boolean` - Controls the visibility of the calendar header/toolbar. Default: `true`
- `disableInteractions`: `boolean` - Disables interactions like event creation and dragging. Default: `false`

Style Properties:
- `headerBackgroundColor`: `string` - Background color for the calendar header. Default: `null`
- `headerTextColor`: `string` - Text color for the calendar header. Default: `null`
- `dayHeaderBackgroundColor`: `string` - Background color for day headers. Default: `null`
- `dayHeaderTextColor`: `string` - Text color for day headers. Default: `null`
- `dayHeaderFontSize`: `string` - Sets the font size for day headers with unit (e.g., "14px"). Default: `'14px'`
- `dayHeaderFontWeight`: `string` - Sets the font weight for day headers as a string value. Default: `'400'`
- `weekendTextColor`: `string` - Text color for weekend days in headers and cells. Default: `null`
- `todayBackgroundColor`: `string` - Background color for today's cell in all views. Default: `'rgba(255, 220, 40, 0.15)'`
- `cellBackgroundColor`: `string` - Background color for calendar cells in month and year views. Default: `null`
- `cellTextColor`: `string` - Text color for calendar cells. Default: `null`
- `timeGridBackgroundColor`: `string` - Background color for time grid in week and day views. Default: `null`
- `otherMonthBackgroundColor`: `string` - Background color for days from other months. Default: `null`
- `otherMonthTextColor`: `string` - Text color for days from other months. Default: `null`
- `buttonBackgroundColor`: `string` - Background color for calendar buttons. Default: `'#2C3E50'`
- `buttonTextColor`: `string` - Text color for calendar buttons. Default: `'#FFFFFF'`
- `buttonHoverBackgroundColor`: `string` - Background color for buttons when hovered. Default: `'#1e2b37'`
- `buttonHoverTextColor`: `string` - Text color for buttons when hovered. Default: `'#FFFFFF'`
- `buttonActiveBackgroundColor`: `string` - Background color for buttons when active. Default: `'#1a252f'`
- `buttonActiveTextColor`: `string` - Text color for buttons when active. Default: `'#FFFFFF'`
- `buttonBorderRadius`: `string` - Border radius for calendar buttons. Default: `'4px'`
- `todayButtonBackgroundColor`: `string` - Background color for the Today button. Default: `null`
- `todayButtonTextColor`: `string` - Text color for the Today button. Default: `null`
- `todayButtonHoverBackgroundColor`: `string` - Background color for the Today button when hovered. Default: `null`
- `todayButtonHoverTextColor`: `string` - Text color for the Today button when hovered. Default: `null`
- `borderColor`: `string` - Color for all calendar borders. Default: `'#ddd'`
- `defaultEventBackgroundColor`: `string` - Default background color for events. Default: `'#3788d8'`
- `defaultEventBorderColor`: `string` - Default border color for events. Default: `'#3788d8'`
- `defaultEventTextColor`: `string` - Default text color for events. Default: `'#ffffff'`
- `headerHeight`: `string` - Height for the calendar header. Default: `null`
- `dayHeaderHeight`: `string` - Height for the day headers. Default: `null`
- `nowIndicatorColor`: `string` - Color for the current time indicator line. Default: `'red'`

View Settings:
- `locale`: `string` - Sets the language locale. Default: `'auto'`
- `timezone`: `string` - Timezone used to display dates and times. Can be 'local' (browser time), 'UTC', or any valid IANA timezone ID. Default: `'local'`
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
- `allDaySlot`: `boolean` - Show or hide the all-day events. Default: `true`
- `hideDaysOfWeek`: `number[]` - Array of day numbers to hide (0=Sunday, 1=Monday, etc.). Default: `[]`
- `buttonTextToday`: `string` - Custom text for the "Today" button. Default: `''` (uses locale default)
- `buttonTextYear`: `string` - Custom text for the "Year" button. Default: `''` (uses locale default)
- `buttonTextMonth`: `string` - Custom text for the "Month" button. Default: `''` (uses locale default)
- `buttonTextWeek`: `string` - Custom text for the "Week" button. Default: `''` (uses locale default)
- `buttonTextDay`: `string` - Custom text for the "Day" button. Default: `''` (uses locale default)
- `buttonTextList`: `string` - Custom text for the "List" button. Default: `''` (uses locale default)
- `noEventsText`: `string` - Custom text when there is no events to display in the list view. Default: `''` 

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
  - `groupId`: `string` - Group identifier for related events
  - `data`: `object` - Additional data for the event

Event Property Mapping:
- `eventsIdFormula`: `Formula` - Formula to extract the ID from each event object. Default: `"context.mapping?.['id']"`
- `eventsTitleFormula`: `Formula` - Formula to extract the title from each event object. Default: `"context.mapping?.['title']"`
- `eventsStartFormula`: `Formula` - Formula to extract the start date from each event object. Default: `"context.mapping?.['start']"`
- `eventsEndFormula`: `Formula` - Formula to extract the end date from each event object. Default: `"context.mapping?.['end']"`
- `eventsAllDayFormula`: `Formula` - Formula to extract the all-day flag from each event object. Default: `"context.mapping?.['allDay']"`
- `eventsBackgroundColorFormula`: `Formula` - Formula to extract the background color from each event object. Default: `"context.mapping?.['backgroundColor']"`
- `eventsBorderColorFormula`: `Formula` - Formula to extract the border color from each event object. Default: `"context.mapping?.['borderColor']"`
- `eventsTextColorFormula`: `Formula` - Formula to extract the text color from each event object. Default: `"context.mapping?.['textColor']"`
- `eventsContentFormula`: `Formula` - Formula to extract the content/description from each event object. Default: `"context.mapping?.['content']"`
- `eventsDataFormula`: `Formula` - Formula to extract additional data from each event object. Default: `"context.mapping?.['data']"`
- `eventsGroupIdFormula`: `Formula` - Formula to extract the group ID from each event object. Default: `"context.mapping?.['groupId']"`

Events:
- `eventClick`: {value: eventData} - Triggered when an event is clicked
- `viewChange`: {value: viewData} - Triggered when the calendar view changes
- `eventCreated`: {value: eventData} - Triggered when an event is created by selecting a time slot
- `eventUpdated`: {value: eventData} - Triggered when an event is updated
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

Variables:
- `currentView`: string - The currently active view type
- `selectedEvent`: object - The most recently clicked event data

Special features:
- Responsive design that adapts to container size
- Multiple view types (year, month, week, day, list)
- Event drag-and-drop for rescheduling
- Event resizing to adjust duration
- Grouped events that move together
- Customizable time ranges and day display
- Internationalization support with multiple locales
- Extensive style customization for all calendar elements
- Configurable cell dimensions and spacing
- Dynamic property mapping for events when binding external data

Important Build guidelines:
- Always put a fixed height on the calendar element
- Never use flex or min-height directly on the calendar element
- When creating fake events put them in current year/month/week