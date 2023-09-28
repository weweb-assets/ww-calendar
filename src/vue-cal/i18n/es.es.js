/**
  * vue-cal v4.8.1
  * (c) 2023 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */
const e = ["Lunes", "Martes", "Mi\xE9rcoles", "Jueves", "Viernes", "S\xE1bado", "Domingo"], a = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], o = "A\xF1os", l = "A\xF1o", m = "Mes", s = "Semana", i = "D\xEDa", M = "Hoy", t = "No hay evento", r = "Todo el d\xEDa", n = "Borrar", d = "Crear un evento", y = "dddd D MMMM YYYY", v = { weekDays: e, months: a, years: o, year: "A\xF1o", month: "Mes", week: s, day: "D\xEDa", today: "Hoy", noEvent: t, allDay: r, deleteEvent: n, createEvent: d, dateFormat: y };
export {
  r as allDay,
  d as createEvent,
  y as dateFormat,
  i as day,
  v as default,
  n as deleteEvent,
  m as month,
  a as months,
  t as noEvent,
  M as today,
  s as week,
  e as weekDays,
  l as year,
  o as years
};
