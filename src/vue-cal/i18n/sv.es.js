/**
  * vue-cal v4.8.1
  * (c) 2023 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */
const a = ["M\xE5ndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "L\xF6rdag", "S\xF6ndag"], e = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"], y = "\xC5r", m = "\xC5r", s = "M\xE5nad", t = "Vecka", M = "Dag", d = "Idag", r = "Ingen h\xE4ndelse", n = "Heldag", o = "Ta bort", g = "Skapa h\xE4ndelse", l = "dddd den D MMMM YYYY", i = { weekDays: a, months: e, years: "\xC5r", year: "\xC5r", month: s, week: t, day: "Dag", today: d, noEvent: r, allDay: n, deleteEvent: o, createEvent: g, dateFormat: l };
export {
  n as allDay,
  g as createEvent,
  l as dateFormat,
  M as day,
  i as default,
  o as deleteEvent,
  s as month,
  e as months,
  r as noEvent,
  d as today,
  t as week,
  a as weekDays,
  m as year,
  y as years
};
