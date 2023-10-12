/**
  * vue-cal v4.8.1
  * (c) 2023 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */
const a = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"], e = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"], n = "Jaren", t = "Jaar", r = "Maand", s = "Week", k = "Dag", d = "Vandaag", o = "Geen afspraken", g = "Hele dag", y = "Verwijderen", i = "Nieuwe afspraak aanmaken", D = "dddd D MMMM YYYY", l = { weekDays: a, months: e, years: n, year: t, month: r, week: s, day: "Dag", today: d, noEvent: o, allDay: g, deleteEvent: y, createEvent: i, dateFormat: D };
export {
  g as allDay,
  i as createEvent,
  D as dateFormat,
  k as day,
  l as default,
  y as deleteEvent,
  r as month,
  e as months,
  o as noEvent,
  d as today,
  s as week,
  a as weekDays,
  t as year,
  n as years
};
