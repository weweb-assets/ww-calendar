<template>
  <vue-cal 
    :key="content.themeColor + '-' + content.startWeekOnSunday"
    :disable-views="disabledViews" 
    :active-view="defaultView" 
    :hide-view-selector="disabledViews.length >= 4" 
    :hide-weekends="content.hideWeekends"
    :events="events"
    :split-days="calendars"
    :showAllDayEvents="content.showAllDayEvents"
    :events-count-on-year-view="content.showCountOnYearView"
    :locale="currentLang"
    :class="content.themeColor"
    :style="{...customColorTheme, ...calendarsStyle, ...categoriesStyle}"
    :time="!content.enableTimelessMode"
    :timeStep="content.timestep"
    :timeFrom="content.timeStart*60"
    :timeTo="content.timeEnd*60"
    :startWeekOnSunday="content.startWeekOnSunday"
    @event-click="handleEventClick"
  />
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
/* wwEditor:start */
import 'vue-cal/dist/i18n/fr.js'
import 'vue-cal/dist/i18n/es.js'
import 'vue-cal/dist/i18n/de.js'
/* wwEditor:end */

export default {
  components: { VueCal },
  props: {
    content: { type: Object, required: true },
    /* wwEditor:start */
    wwEditorState: { type: Object, required: true },
    /* wwEditor:end */
  },
  computed: {
    currentLang() {
      return ['fr', 'sp', 'de'].includes(this.content.lang) ? this.content.lang : 'en'
    },
    customColorTheme() {
      return {
        '--calendar-theme-menu-color': this.content.themeMenuColor,
        '--calendar-theme-title-bar-color': this.content.themeTitleBarColor,
        '--calendar-theme-cell-today-color': this.content.themeTodayCellColor,
        '--calendar-theme-cell-selected-color': this.content.themeSelectedCellColor,
        '--calendar-default-event-color': this.content.defaultEventColor || 'unset',
      }
    },
    defaultView() {
      return this.content.defaultView
    },
    disabledViews() {
      return [
        this.content.enableYearsView ? null : 'years',
        this.content.enableYearView ? null : 'year',
        this.content.enableMonthView ? null : 'month',
        this.content.enableWeekView ? null : 'week',
        this.content.enableDayView ? null : 'day'
      ].filter(view => !!view)
    },
    calendars() {
      if(!Array.isArray(this.content.calendars)) return []
      return this.content.calendars.map((cal, index) => ({
        id: wwLib.resolveObjectPropertyPath(cal, this.content.calendarIdPath || 'id') || '',
        label: wwLib.resolveObjectPropertyPath(cal, this.content.calendarLabelPath || 'label') || '',
        color: wwLib.resolveObjectPropertyPath(cal, this.content.calendarColorPath || 'color') || null,
        class: 'split-' + index
      }))
    },
    calendarsStyle() {
      return this.calendars.reduce((acc, next, index) => ({
        ...acc,
        ['--calendar-split-' + index + '-bg-color']: next.color
      }), {})
    },
    categories() {
      if(!Array.isArray(this.content.categories)) return []
      return this.content.categories.map((cat, index) => ({
        name: wwLib.resolveObjectPropertyPath(cat, this.content.categoryNamePath || 'name') || '',
        color: wwLib.resolveObjectPropertyPath(cat, this.content.categoryColorPath || 'color') || null,
        class: 'cat-' + index
      }))
    },
    categoriesStyle() {
      return this.categories.reduce((acc, next, index) => ({
        ...acc,
        ['--calendar-category-' + index + '-bg-color']: next.color
      }), {})
    },
    events() {
      if(!Array.isArray(this.content.events)) return []
      const events = this.content.events.map(event => {
        const category = this.categories.find(cat => cat.name === wwLib.resolveObjectPropertyPath(event, this.content.eventCategoryPath || 'category'))
        return {
          start: wwLib.resolveObjectPropertyPath(event, this.content.eventStartPath || 'start') || new Date(),
          end: wwLib.resolveObjectPropertyPath(event, this.content.eventEndPath || 'end') || new Date(),
          title: wwLib.resolveObjectPropertyPath(event, this.content.eventTitlePath || 'title') || '',
          content: wwLib.resolveObjectPropertyPath(event, this.content.eventContentPath || 'content') || '',
          allDay: wwLib.resolveObjectPropertyPath(event, this.content.eventAllDayPath || 'allDay') || false,
          split: wwLib.resolveObjectPropertyPath(event, this.content.eventCalendarPath || 'calendar') || null,
          class: category ? category.class : 'calendar-default-event-color',
        }
      })
      return events
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
            eventCategoryPath: null
        });
    },
    'wwEditorState.boundProps.calendars'(isBind) {
      if (!isBind)
        this.$emit('update:content:effect', {
            calendarIdPath: null,
            calendarLabelPath: null,
            calendarColorPath: null
        });
    },
    'wwEditorState.boundProps.categories'(isBind) {
      if (!isBind)
        this.$emit('update:content:effect', {
            categoryNamePath: null,
            categoryColorPath: null
        });
    },
    /* wwEditor:end */
  },
  methods: {
    handleEventClick(event, domEvent) {
      this.$emit('trigger-event', { name: 'event:click', event: { event: {
        start: event.start,
        end: event.end,
        title: event.title,
        content: event.content,
        calendar: event.split,
        allDay: event.allDay
      }, domEvent } });
    }
  },
  /* wwFront:start */
  created() {
    if (this.currentLang !== 'en') {
      import(`vue-cal/dist/i18n/${this.content.lang}.js`)
    }
  }
  /* wwFront:end */
};
</script>

<style lang="scss">
:root {
  --calendar-theme-menu-color: #dd932c;
  --calendar-theme-title-bar-color: #fad198;
  --calendar-theme-cell-today-color: #bfbab3;
  --calendar-theme-cell-selected-color: #8f8c89;
  --calendar-default-event-color: rgba(248, 248, 248, 0.8);

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
}

.vuecal--custom-theme {
  .vuecal__menu, .vuecal__cell-events-count {background-color: var(--calendar-theme-menu-color)}
  .vuecal__title-bar {background-color: var(--calendar-theme-title-bar-color)}
  .vuecal__cell--today, .vuecal__cell--current {background-color: var(--calendar-theme-cell-today-color)}
  &.vuecal:not(.vuecal--day-view) {
    .vuecal__cell--selected {background-color: var(--calendar-theme-cell-selected-color)}
  }
  .vuecal__cell--selected:before {border-color: var(--calendar-theme-cell-selected-color)}
}

.calendar-default-event-color {
  background-color: var(--calendar-default-event-color);
}

.vuecal__event.cat-0 {
  background-color: var(--calendar-category-0-bg-color);
}
.vuecal__event.cat-1 {
  background-color: var(--calendar-category-1-bg-color);
}
.vuecal__event.cat-2 {
  background-color: var(--calendar-category-2-bg-color);
}
.vuecal__event.cat-3 {
  background-color: var(--calendar-category-3-bg-color);
}
.vuecal__event.cat-4 {
  background-color: var(--calendar-category-4-bg-color);
}
.vuecal__event.cat-5 {
  background-color: var(--calendar-category-5-bg-color);
}
.vuecal__event.cat-6 {
  background-color: var(--calendar-category-6-bg-color);
}
.vuecal__event.cat-7 {
  background-color: var(--calendar-category-7-bg-color);
}
.vuecal__event.cat-8 {
  background-color: var(--calendar-category-8-bg-color);
}
.vuecal__event.cat-9 {
  background-color: var(--calendar-category-9-bg-color);
}

.vuecal__cell-split.split-0 {
  background-color: var(--calendar-split-0-bg-color);
}
.vuecal__cell-split.split-1 {
  background-color: var(--calendar-split-1-bg-color);
}
.vuecal__cell-split.split-2 {
  background-color: var(--calendar-split-2-bg-color);
}
.vuecal__cell-split.split-3 {
  background-color: var(--calendar-split-3-bg-color);
}
.vuecal__cell-split.split-4 {
  background-color: var(--calendar-split-4-bg-color);
}
.vuecal__cell-split.split-5 {
  background-color: var(--calendar-split-5-bg-color);
}
.vuecal__cell-split.split-6 {
  background-color: var(--calendar-split-6-bg-color);
}
.vuecal__cell-split.split-7 {
  background-color: var(--calendar-split-7-bg-color);
}
.vuecal__cell-split.split-8 {
  background-color: var(--calendar-split-8-bg-color);
}
.vuecal__cell-split.split-9 {
  background-color: var(--calendar-split-9-bg-color);
}

</style>
