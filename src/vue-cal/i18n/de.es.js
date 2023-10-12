/**
  * vue-cal v4.8.1
  * (c) 2023 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */
const e = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"], a = ["Januar", "Februar", "M\xE4rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"], t = "Jahre", n = "Jahr", s = "Monat", r = "Woche", i = "Tag", o = "Heute", d = "Keine Events", g = "Ganzt\xE4gig", l = "L\xF6schen", y = "Event erstellen", h = "dddd D MMMM YYYY", m = { weekDays: e, months: a, years: t, year: n, month: s, week: r, day: "Tag", today: o, noEvent: d, allDay: g, deleteEvent: l, createEvent: y, dateFormat: h };
export {
  g as allDay,
  y as createEvent,
  h as dateFormat,
  i as day,
  m as default,
  l as deleteEvent,
  s as month,
  a as months,
  d as noEvent,
  o as today,
  r as week,
  e as weekDays,
  n as year,
  t as years
};
