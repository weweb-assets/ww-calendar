/**
  * vue-cal v4.8.1
  * (c) 2023 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */
const a = ["Pirmadienis", "Antradienis", "Tre\u010Diadienis", "Ketvirtadienis", "Penktadienis", "\u0160e\u0161tadienis", "Sekmadienis"], e = ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegu\u017E\u0117", "Bir\u017Eelis", "Liepa", "Rugpj\u016Btis", "Rugs\u0117jis", "Spalis", "Lapkritis", "Gruodis"], s = "Met\u0173 pasirinkimas", i = "Metai", t = "M\u0117nesis", n = "Savait\u0117", d = "Diena", r = "\u0160iandien", o = "Joki\u0173 \u012Fvyki\u0173", y = "Visa diena", k = "I\u0161trinti", v = "Sukurti \u012Fvyk\u012F", l = "dddd, D MMMM YYYY", m = { weekDays: a, months: e, years: s, year: i, month: t, week: n, day: d, today: r, noEvent: o, allDay: y, deleteEvent: k, createEvent: v, dateFormat: l };
export {
  y as allDay,
  v as createEvent,
  l as dateFormat,
  d as day,
  m as default,
  k as deleteEvent,
  t as month,
  e as months,
  o as noEvent,
  r as today,
  n as week,
  a as weekDays,
  i as year,
  s as years
};
