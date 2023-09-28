/**
  * vue-cal v4.8.1
  * (c) 2023 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */
const a = ["\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0", "\uC77C"], e = ["1\uC6D4", "2\uC6D4", "3\uC6D4", "4\uC6D4", "5\uC6D4", "6\uC6D4", "7\uC6D4", "8\uC6D4", "9\uC6D4", "10\uC6D4", "11\uC6D4", "12\uC6D4"], o = "\uB144\uB3C4", y = "\uC5F0\uAC04", r = "\uC6D4\uAC04", l = "\uC8FC\uAC04", m = "\uC77C\uAC04", v = "\uC624\uB298", t = "\uC77C\uC815 \uC5C6\uC74C", s = "\uD558\uB8E8 \uC885\uC77C", E = "\uC0AD\uC81C", d = "\uC77C\uC815 \uCD94\uAC00", n = "YYYY\uB144 MMMM D\uC77C dddd\uC694\uC77C", D = { weekDays: a, months: e, years: "\uB144\uB3C4", year: "\uC5F0\uAC04", month: "\uC6D4\uAC04", week: "\uC8FC\uAC04", day: "\uC77C\uAC04", today: "\uC624\uB298", noEvent: t, allDay: s, deleteEvent: "\uC0AD\uC81C", createEvent: d, dateFormat: n };
export {
  s as allDay,
  d as createEvent,
  n as dateFormat,
  m as day,
  D as default,
  E as deleteEvent,
  r as month,
  e as months,
  t as noEvent,
  v as today,
  l as week,
  a as weekDays,
  y as year,
  o as years
};
