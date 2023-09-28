/**
  * vue-cal v4.8.1
  * (c) 2023 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */
const a = ["\u0414\u0430\u0432\u0430\u0430", "\u041C\u044F\u0433\u043C\u0430\u0440", "\u041B\u0445\u0430\u0432\u0433\u0430", "\u041F\u04AF\u0440\u044D\u0432", "\u0411\u0430\u0430\u0441\u0430\u043D", "\u0411\u044F\u043C\u0431\u0430", "\u041D\u044F\u043C"], e = ["1-\u0440 \u0441\u0430\u0440", "2-\u0440 \u0441\u0430\u0440", "3-\u0440 \u0441\u0430\u0440", "4-\u0440 \u0441\u0430\u0440", "5-\u0440 \u0441\u0430\u0440", "6-\u0440 \u0441\u0430\u0440", "7-\u0440 \u0441\u0430\u0440", "8-\u0440 \u0441\u0430\u0440", "9-\u0440 \u0441\u0430\u0440", "10-\u0440 \u0441\u0430\u0440", "11-\u0440 \u0441\u0430\u0440", "12-\u0440 \u0441\u0430\u0440"], t = "\u0416\u0438\u043B\u04AF\u04AF\u0434", v = "\u0416\u0438\u043B", E = "\u0421\u0430\u0440", s = "\u0414\u043E\u043B\u043E\u043E \u0445\u043E\u043D\u043E\u0433", d = "\u04E8\u0434\u04E9\u0440", n = "\u04E8\u043D\u04E9\u04E9\u0434\u04E9\u0440", o = "\u0422\u044D\u043C\u0434\u044D\u0433\u043B\u044D\u043B\u0433\u04AF\u0439", y = "\u0411\u04AF\u0445 \u04E9\u0434\u04E9\u0440", r = "\u0423\u0441\u0442\u0433\u0430\u0445", l = "\u0428\u0438\u043D\u044D \u0442\u044D\u043C\u0434\u044D\u0433\u043B\u044D\u043B", m = "dddd D MMMM YYYY", D = { weekDays: a, months: e, years: t, year: "\u0416\u0438\u043B", month: "\u0421\u0430\u0440", week: s, day: d, today: n, noEvent: o, allDay: y, deleteEvent: r, createEvent: l, dateFormat: m };
export {
  y as allDay,
  l as createEvent,
  m as dateFormat,
  d as day,
  D as default,
  r as deleteEvent,
  E as month,
  e as months,
  o as noEvent,
  n as today,
  s as week,
  a as weekDays,
  v as year,
  t as years
};
