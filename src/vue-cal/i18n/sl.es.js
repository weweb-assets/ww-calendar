/**
  * vue-cal v4.8.1
  * (c) 2023 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */
const e = ["Ponedeljek", "Torek", "Sreda", "\u010Cetrtek", "Petek", "Sobota", "Nedelja"], a = ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"], t = "Leta", s = "Leto", o = "Mesec", d = "Teden", D = "Dan", r = "Danes", n = "Ni dogodkov", l = "Cel dan", k = "Odstrani", y = "Ustvari dogodek", v = "dddd MMMM D, YYYY", m = { weekDays: e, months: a, years: t, year: s, month: o, week: d, day: "Dan", today: r, noEvent: n, allDay: l, deleteEvent: k, createEvent: y, dateFormat: v };
export {
  l as allDay,
  y as createEvent,
  v as dateFormat,
  D as day,
  m as default,
  k as deleteEvent,
  o as month,
  a as months,
  n as noEvent,
  r as today,
  d as week,
  e as weekDays,
  s as year,
  t as years
};
