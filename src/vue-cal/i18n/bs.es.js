/**
  * vue-cal v4.8.1
  * (c) 2023 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */
const a = ["Ponedjeljak", "Utorak", "Srijeda", "\u010Cetvrtak", "Petak", "Subota", "Nedjelja"], e = ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"], t = "Godine", r = "Godina", s = "Mjesec", d = "Sedmica", i = "Dan", n = "Danas", o = "Nema doga\u0111aja", l = "Cijeli dan", j = "Obri\u0161i", m = "Kreiraj doga\u0111aj", y = "dddd D MMMM YYYY", k = { weekDays: a, months: e, years: t, year: r, month: s, week: d, day: "Dan", today: n, noEvent: o, allDay: l, deleteEvent: j, createEvent: m, dateFormat: y };
export {
  l as allDay,
  m as createEvent,
  y as dateFormat,
  i as day,
  k as default,
  j as deleteEvent,
  s as month,
  e as months,
  o as noEvent,
  n as today,
  d as week,
  a as weekDays,
  r as year,
  t as years
};
