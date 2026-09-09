/* =====================================================================
   DATA LIST-PH  —  untuk halaman Cari Lokasi Rak E/C
   =====================================================================
   Berkas ini SENGAJA masih kosong. Selama masih kosong, halaman akan
   meminta pemakainya memuat berkas .xlsm sendiri.

   CARA MENGISINYA (tidak perlu menyalin ribuan baris dengan tangan):
     1. Buka rak_ec/index.html
     2. Klik "Pilih berkas Excel" -> pilih list poshheader.xlsm
     3. Setelah datanya terbaca, klik tombol "Ekspor data.js"
     4. Berkas data.js akan terunduh -> timpakan ke berkas ini
     5. Commit & push

   CARA MEMPERBARUI kalau data di Excel berubah: ulangi langkah yang sama,
   klik "Perbarui data" lebih dulu untuk memilih berkas .xlsm yang baru.

   ---------------------------------------------------------------------
   PERHATIAN SEBELUM MENGISI
   Repo iot_project ini PUBLIK. Begitu berkas ini terisi lalu di-push,
   seluruh daftar part number, maker, qty, dan lokasi rak bisa dibaca
   siapa saja di internet — dan tetap terbaca lewat riwayat commit
   walaupun nanti dihapus. Riwayat git tidak bisa ditarik kembali.

   Kalau itu tidak diinginkan, JANGAN isi berkas ini. Halaman tetap
   berfungsi penuh lewat mode "muat berkas sendiri", dan datanya tidak
   pernah meninggalkan perangkat yang memakainya.
   ---------------------------------------------------------------------

   Urutan kolom tiap baris (sama seperti sheet List-PH, kolom B..I):
     [ NO, PART NUMBER E/C, KLASIFIKASI, PART NUMBER CONNECTOR HARNESS,
       MAKER, LOKASI RAK, QTY, KETERANGAN ]
   ===================================================================== */

window.DATA_RAK_WAKTU = null;
window.DATA_RAK = [];
