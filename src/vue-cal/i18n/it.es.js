/**
  * vue-cal v4.8.1
  * (c) 2023 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */
const e = ["Luned\xEC", "Marted\xEC", "Mercoled\xEC", "Gioved\xEC", "Venerd\xEC", "Sabato", "Domenica"], a = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"], t = "Anni", o = "Anno", n = "Mese", s = "Settimana", r = "Giorno", d = "Oggi", i = "Nessun evento", l = "Tutto il giorno", m = "Cancella", y = "Crea evento", v = "dddd D MMMM YYYY", M = { weekDays: e, months: a, years: t, year: o, month: n, week: s, day: r, today: d, noEvent: i, allDay: l, deleteEvent: m, createEvent: y, dateFormat: v };
export {
  l as allDay,
  y as createEvent,
  v as dateFormat,
  r as day,
  M as default,
  m as deleteEvent,
  n as month,
  a as months,
  i as noEvent,
  d as today,
  s as week,
  e as weekDays,
  o as year,
  t as years
};
