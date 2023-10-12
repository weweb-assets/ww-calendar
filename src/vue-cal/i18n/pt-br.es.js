/**
  * vue-cal v4.8.1
  * (c) 2023 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */
const e = ["Segunda-feira", "Ter\xE7a-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "S\xE1bado", "Domingo"], a = ["Janeiro", "Fevereiro", "Mar\xE7o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], o = "Anos", v = "Ano", y = "M\xEAs", t = "Semana", D = "Dia", r = "Hoje", s = "Sem eventos", n = "Dia inteiro", i = "Remover", d = "Criar um evento", m = "dddd D MMMM YYYY", u = { weekDays: e, months: a, years: o, year: "Ano", month: "M\xEAs", week: t, day: "Dia", today: r, noEvent: s, allDay: n, deleteEvent: i, createEvent: d, dateFormat: m };
export {
  n as allDay,
  d as createEvent,
  m as dateFormat,
  D as day,
  u as default,
  i as deleteEvent,
  y as month,
  a as months,
  s as noEvent,
  r as today,
  t as week,
  e as weekDays,
  v as year,
  o as years
};
