/**
  * vue-cal v4.8.1
  * (c) 2023 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */
const a = ["E H\xEBn\xEB", "E Mart\xEB", "E M\xEBrkur\xEB", "E Enjte", "E Premte", "E Shtun\xEB", "E Diel"], e = ["H\xEB", "Ma", "Mr", "Enj", "Pr", "Sh", "D"], t = ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "N\xEBntor", "Dhjetor"], r = "Vitet", s = "Viti", n = "Muaji", o = "Java", E = "Dita", D = "Sot", d = "Nuk ka event", h = "T\xEBr\xEB dit\xEBn", y = "Fshij\xEB", i = "Krijo nj\xEB event", k = "dddd D MMMM YYYY", M = { weekDays: a, weekDaysShort: e, months: t, years: r, year: s, month: n, week: o, day: E, today: "Sot", noEvent: d, allDay: h, deleteEvent: y, createEvent: i, dateFormat: k };
export {
  h as allDay,
  i as createEvent,
  k as dateFormat,
  E as day,
  M as default,
  y as deleteEvent,
  n as month,
  t as months,
  d as noEvent,
  D as today,
  o as week,
  a as weekDays,
  e as weekDaysShort,
  s as year,
  r as years
};
