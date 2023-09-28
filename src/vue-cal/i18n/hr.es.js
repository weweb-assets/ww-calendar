/**
  * vue-cal v4.8.1
  * (c) 2023 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */
const a = ["Ponedjeljak", "Utorak", "Srijeda", "\u010Cetvrtak", "Petak", "Subota", "Nedjelja"], e = ["Sije\u010Danj", "Velja\u010Da", "O\u017Eujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"], n = "Godine", t = "Godina", d = "Mjesec", o = "Tjedan", v = "Dan", s = "Dana\u0161nji dan", j = "Nema doga\u0111aja", r = "Cijeli dan", i = "Obri\u0161i", l = "Kreiraj doga\u0111aj", y = "dddd D MMMM YYYY", k = { weekDays: a, months: e, years: n, year: t, month: d, week: o, day: "Dan", today: s, noEvent: j, allDay: r, deleteEvent: i, createEvent: l, dateFormat: y };
export {
  r as allDay,
  l as createEvent,
  y as dateFormat,
  v as day,
  k as default,
  i as deleteEvent,
  d as month,
  e as months,
  j as noEvent,
  s as today,
  o as week,
  a as weekDays,
  t as year,
  n as years
};
