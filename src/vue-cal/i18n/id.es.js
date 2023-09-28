/**
  * vue-cal v4.8.1
  * (c) 2023 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */
const a = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"], e = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"], t = "Tahunan", n = "Tahun", s = "Bulan", r = "Minggu", i = "Hari", u = "Hari Ini", d = "Tidak Ada Kegiatan", o = "Sepanjang Hari", m = "Hapus", l = "Tambah Kegiatan", y = "dddd, D MMMM YYYY", b = { weekDays: a, months: e, years: t, year: n, month: s, week: r, day: i, today: u, noEvent: d, allDay: o, deleteEvent: m, createEvent: l, dateFormat: y };
export {
  o as allDay,
  l as createEvent,
  y as dateFormat,
  i as day,
  b as default,
  m as deleteEvent,
  s as month,
  e as months,
  d as noEvent,
  u as today,
  r as week,
  a as weekDays,
  n as year,
  t as years
};
