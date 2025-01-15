---
name: ww-calendar
description: The ww-calendar component provides a highly customizable and feature-rich calendar interface, supporting multiple views, calendars, event categories, and themes, with extensive configuration options for appearance, time settings, and localization.
keywords:
  - calendar component
  - multiple views
  - customizable themes
  - event categories
  - multi-language localization
  - event properties
  - time configuration
  - hide weekends
  - twelve-hour format
  - real-time update
---

#### ww-calendar

Renders a calendar with various features and configurations, including support for multiple views (years, year, month, week, day), multiple calendars, event categories, and customizable themes.

Properties:
- defaultEventColor: string|null - Default color for events. Default: null
- defaultEventTextColor: string|null - Default text color for events. Default: null
- defaultEventTitleSize: string - Default font-size for event titles. Default: unset
- defaultEventTimeSize: string - Default font-size for event times. Default: unset
- defaultEventContentSize: string - Default font-size for event content. Default: unset
- themeColor: string - Theme color for the calendar. Default: vuecal--gray-theme
- themeMenuColor: string - Color for the views menu (custom theme)
- themeTitleBarColor: string - Color for the title bar (custom theme)
- themeTodayCellColor: string - Color for the today cell (custom theme)
- themeSelectedCellColor: string - Color for the selected cell (custom theme)
- fontFamily: string - Font family for the calendar
- fontWeight: null|100-900 - Font weight for the calendar. Default: null
- defaultView: string - Default view for the calendar. Default: week
- enableYearsView: boolean - Whether to enable the years view. Default: true
- enableYearView: boolean - Whether to enable the year view. Default: true
- enableMonthView: boolean - Whether to enable the month view. Default: true
- enableWeekView: boolean - Whether to enable the week view. Default: true
- enableDayView: boolean - Whether to enable the day view. Default: true
- hideWeekends: boolean - Whether to hide weekends. Default: false
- showAllDayEvents: boolean - Whether to show all-day events. Default: false
- showCountOnYearView: boolean - Whether to show event count on the year view. Default: false
- enableTimelessMode: boolean - Whether to enable timeless mode. Default: false
- timestep: number - Time step in minutes. Default: 30
- timeStart: number - Start time in hours. Default: 8
- timeEnd: number - End time in hours. Default: 20
- startWeekOnSunday: boolean - Whether to start the week on Sunday. Default: false
- hideWeekdays: number[] - Days of the week to hide (1=Monday, 7=Sunday). Default: []
- twelveHour: boolean - Whether to use 12-hour format. Default: false
- watchRealTime: boolean - Whether to update the current time every minute. Default: false
- todayButton: boolean - Whether to show the Today button. Default: false
- daySize: null|small|xsmall - Header format for the calendar. Default: null

Children:
- wwObjects: any[] - Child components to display inside the calendar

Events:
- event:click - Triggered when clicking an event
  Payload: {rawEventData: object, event: {start: Date, startISO: string, end: Date, endISO: string, title: string, content: string, calendar: any, allDay: boolean}, currentView: string, domEvent: object}
  Description: Provides event data and context when user clicks on a calendar event
- cell:click - Triggered when clicking a calendar cell
  Payload: {cell: {date: Date, dateISO: string, calendar: any}, currentView: string}
  Description: Provides cell data and context when user clicks on a calendar cell
- view:change - Triggered when calendar view changes
  Payload: {view: string, startDate: Date, endDate: Date, firstCellDate: Date, lastCellDate: Date, outOfScopeEvents: array, events: array, week: number}
  Description: Provides information about the new view when user changes calendar view

Variables:
- selectedDate: string - The currently selected date in the calendar
- currentView: object - The current view state of the calendar

Note: Always put overflow styles on the ww-calendar component. This component is very high for day/week views
