/**
  * vue-cal v4.8.1
  * (c) 2023 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */
const e = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "L\xF8rdag", "S\xF8ndag"], a = ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"], t = "\xC5r (flertal)", y = "\xC5r", r = "M\xE5ned", m = "Uge", v = "Dag", s = "I dag", d = "Ingen begivenhed", n = "Hele dagen", g = "Slet", o = "Opret et event", l = "dddd D MMMM YYYY", M = { weekDays: e, months: a, years: t, year: "\xC5r", month: r, week: "Uge", day: "Dag", today: s, noEvent: d, allDay: n, deleteEvent: g, createEvent: o, dateFormat: l };
export {
  n as allDay,
  o as createEvent,
  l as dateFormat,
  v as day,
  M as default,
  g as deleteEvent,
  r as month,
  a as months,
  d as noEvent,
  s as today,
  m as week,
  e as weekDays,
  y as year,
  t as years
};
