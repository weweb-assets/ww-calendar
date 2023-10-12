/**
  * vue-cal v4.8.1
  * (c) 2023 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */
const a = ["\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F", "\u65E5"], e = ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"], n = "\u5E74", o = "\u4ECA\u5E74", y = "\u6708", r = "\u9031", l = "\u65E5", m = "\u4ECA\u65E5", t = "\u30A4\u30D9\u30F3\u30C8\u306A\u3057", v = "\u7D42\u65E5", E = "\u524A\u9664", s = "\u30A4\u30D9\u30F3\u30C8\u4F5C\u6210", d = "YYYY\u5E74 MMMM D\u65E5 (dddd)", D = { weekDays: a, months: e, years: "\u5E74", year: "\u4ECA\u5E74", month: "\u6708", week: "\u9031", day: "\u65E5", today: "\u4ECA\u65E5", noEvent: t, allDay: "\u7D42\u65E5", deleteEvent: "\u524A\u9664", createEvent: s, dateFormat: d };
export {
  v as allDay,
  s as createEvent,
  d as dateFormat,
  l as day,
  D as default,
  E as deleteEvent,
  y as month,
  e as months,
  t as noEvent,
  m as today,
  r as week,
  a as weekDays,
  o as year,
  n as years
};
