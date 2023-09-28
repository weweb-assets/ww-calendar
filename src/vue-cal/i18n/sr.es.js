/**
  * vue-cal v4.8.1
  * (c) 2023 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */
const a = ["Ponedeljak", "Utorak", "Sreda", "\u010Cetvrtak", "Petak", "Subota", "Nedelja"], e = ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"], t = "Godine", r = "Godina", s = "Mesec", d = "Sedmica", i = "Dan", n = "Danas", o = "Nema doga\u0111aja", l = "Celi dan", m = "Obri\u0161i", y = "Kreiraj doga\u0111aj", k = "dddd D MMMM YYYY", v = { weekDays: a, months: e, years: t, year: r, month: s, week: d, day: "Dan", today: n, noEvent: o, allDay: l, deleteEvent: m, createEvent: y, dateFormat: k };
export {
  l as allDay,
  y as createEvent,
  k as dateFormat,
  i as day,
  v as default,
  m as deleteEvent,
  s as month,
  e as months,
  o as noEvent,
  n as today,
  d as week,
  a as weekDays,
  r as year,
  t as years
};
