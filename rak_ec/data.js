/* =====================================================================
   DAFTAR E/C BOARD  —  untuk halaman Cari Lokasi Rak E/C
   =====================================================================
   Berkas ini SENGAJA masih kosong. Selama kosong, halaman akan meminta
   pemakainya memuat berkas .xlsm sendiri (dan itu tetap berfungsi penuh).

   CARA MENGISINYA (tidak perlu menyalin ribuan baris dengan tangan):
     1. Buka rak_ec/index.html
     2. Klik "Pilih berkas Excel" -> pilih "Daftar EC Board ….xlsm"
     3. Setelah datanya terbaca, klik tombol "Ekspor data.js"
     4. Berkas data.js akan terunduh -> timpakan ke berkas ini
     5. Commit & push

   CARA MEMPERBARUI kalau daftar raknya berubah: ulangi langkah yang sama,
   klik "Perbarui data" lebih dulu untuk memilih .xlsm yang baru.

   ---------------------------------------------------------------------
   PERHATIAN SEBELUM MENGISI
   Repo iot_project ini PUBLIK. Begitu berkas ini terisi lalu di-push,
   seluruh daftar model dan lokasi raknya bisa dibaca siapa saja di
   internet — dan tetap terbaca lewat riwayat commit walaupun nanti
   dihapus. Riwayat git tidak bisa ditarik kembali.

   Kalau itu tidak diinginkan, JANGAN isi berkas ini. Halaman tetap
   berfungsi penuh lewat mode "muat berkas sendiri", dan datanya tidak
   pernah meninggalkan perangkat yang memakainya.

   Catatan: berkas .xlsm-nya sendiri sudah ditahan oleh .gitignore
   (pola *.xlsm), jadi workbook aslinya tidak akan ikut ter-push.
   ---------------------------------------------------------------------

   Urutan kolom tiap baris:
     [ MODEL, NO RAK, AREA (nama sheet), KETERANGAN ]

   AREA berasal dari nama sheet di workbook — MOGAMI, TAKAZONO, GD1, GD2,
   EPSON Gedung 2, GLORY Gedung 2, LK1, dan seterusnya. Sheet HOME dilewati
   karena cuma halaman sampul.
   ===================================================================== */

window.DATA_RAK_WAKTU = null;
window.DATA_RAK = [];
