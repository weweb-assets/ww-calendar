/**
  * vue-cal v4.8.1
  * (c) 2023 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */
const e = ["H\xE9tfo", "Kedd", "Szerda", "Cs\xFCt\xF6rt\xF6k", "P\xE9ntek", "Szombat", "Vas\xE1rnap"], a = ["Janu\xE1r", "Febru\xE1r", "M\xE1rcius", "\xC1prilis", "M\xE1jus", "J\xFAnius", "J\xFAlius", "Augusztus", "Szeptember", "Okt\xF3ber", "November", "December"], s = "\xC9vek", l = "\xC9v", t = "H\xF3nap", u = "H\xE9t", p = "Nap", n = "Mai nap", r = "Nincs esem\xE9ny", d = "Eg\xE9sz nap", o = "Esem\xE9ny t\xF6rlese", y = "Esem\xE9ny l\xE9trehoz\xE1sa", m = "dddd D MMMM YYYY", v = { weekDays: e, months: a, years: s, year: "\xC9v", month: t, week: "H\xE9t", day: "Nap", today: n, noEvent: r, allDay: d, deleteEvent: o, createEvent: y, dateFormat: m };
export {
  d as allDay,
  y as createEvent,
  m as dateFormat,
  p as day,
  v as default,
  o as deleteEvent,
  t as month,
  a as months,
  r as noEvent,
  n as today,
  u as week,
  e as weekDays,
  l as year,
  s as years
};
