/**
  * vue-cal v4.8.1
  * (c) 2023 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */
const e = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "L\xF8rdag", "S\xF8ndag"], a = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"], s = "Velg \xE5r", y = "\xC5r", t = "M\xE5ned", m = "Uke", M = "Dag", r = "Idag", d = "Ingen hendelse", n = "Hele dagen", o = "Ta bort", g = "Ny hendelse", l = "dddd, D. MMMM YYYY", u = { weekDays: e, months: a, years: s, year: "\xC5r", month: t, week: "Uke", day: "Dag", today: r, noEvent: d, allDay: n, deleteEvent: o, createEvent: g, dateFormat: l };
export {
  n as allDay,
  g as createEvent,
  l as dateFormat,
  M as day,
  u as default,
  o as deleteEvent,
  t as month,
  a as months,
  d as noEvent,
  r as today,
  m as week,
  e as weekDays,
  y as year,
  s as years
};
