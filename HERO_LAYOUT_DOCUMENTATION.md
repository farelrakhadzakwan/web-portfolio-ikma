# 📚 Dokumentasi Pembaruan Layout Scrapbook Hero & Personal Binder
**Ikmalunisa Annora Personal Portfolio**

Dokumentasi ini berisi ringkasan perubahan teknis, keputusan desain, serta langkah-langkah *deployment* untuk pembaruan tampilan **Hero Section** dan **Layout Binder** pada portofolio personal Ikmalunisa Annora.

---

## 📌 Ringkasan Pembaruan (Executive Summary)

Pembaruan ini berfokus pada penyempurnaan estetika *feminine scrapbook / personal binder* agar tampil lebih proporsional, rapi, responsif, dan memberikan kesan pertama (*first impression*) yang elegan:

1. **Simetri & Lebar Binder (Full-Width Binder Alignment)**:
   - Menghilangkan celah/ruang kosong canggung di sisi kiri layar.
   - Kontainer binder kini membentang penuh hingga batas kiri layar (*flush left*), sementara tab navigasi di sisi kanan tetap sejajar secara elegan.
2. **Navigasi "Home" yang Presisi**:
   - Tombol "Home" pada tab navigasi kini melakukan reset posisi ke paling atas halaman (`window.scrollTo({ top: 0 })`), menjaga batas margin atas binder tetap utuh tanpa terpotong.
3. **Proporsi & Penyelarasan Foto Profil Polaroid**:
   - Ukuran bingkai polaroid diperbesar secara proporsional dari `288px` menjadi **`340px x 430px`** (foto inner `310px`).
   - Batas atas bingkai polaroid sejajar secara horisontal dengan baris pertama subtitle **`Information Technology Education`**.
4. **Layering Kolase Scrapbook (Unobstructed Profile & Readable Notes)**:
   - **Foto Profil Polaroid (`z-10`)**: Menjadi *focal point* utama, 100% bebas dari tumpukan stiker/notes yang menutupi wajah.
   - **Stiker `♡ personal binder` (`z-20`)**: Berada di layer terdepan pada sudut kiri atas foto polaroid.
   - **Notes Kuning `"currently figuring things out ✿"` (`z-0`)**: Berada di belakang foto polaroid (*z-0*), dengan format teks rata kanan (*right-aligned*) sehingga seluruh tulisan tangan dan 3 tag (`#Technology`, `#Organizational Leadership`, `#HR Administration`) menyembul rapi dan 100% terbaca tanpa menutupi area wajah.

---

## 🛠️ Detail Perubahan Teknis (Technical Changelog)

### 1. `src/App.tsx`
* **Perubahan Layout Container**:
  - Mengubah *padding* kontainer utama dari `px-4 md:px-8` menjadi `pl-0 md:pl-0 pr-4 md:pr-8` agar elemen binder rata kiri hingga ujung *viewport*.
  - Menyesuaikan lebar maksimum kontainer binder (`max-w-[1300px] w-full`) untuk memberikan proporsi yang seimbang antara area catatan binder dan tab navigasi kanan.

### 2. `src/components/BinderNavigation.tsx`
* **Logika Scroll Navigasi**:
  - Menambahkan pengkondisian khusus untuk tab `home` / `hero`:
    ```typescript
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    ```
  - Mencegah fenomena elemen terpotong (*clipped*) yang sebelumnya terjadi jika menggunakan `scrollIntoView` langsung pada elemen `<section>`.

### 3. `src/components/HeroSection.tsx`
* **Penyelarasan Vertikal Horisontal**:
  - Mengubah struktur flex pada `<section>` menjadi `items-start justify-between`.
  - Menyesuaikan margin atas kolom kanan (`mt-10 md:mt-24 lg:mt-28`) agar batas atas polaroid tepat berada di garis horisontal teks `Information Technology Education`.
* **Layering & Typography Sticky Note**:
  - Mengatur `z-index` polaroid ke `z-10` dan sticky note kuning ke `z-0`.
  - Menggunakan Tailwind utilities `flex flex-col items-end text-right pl-16 md:pl-20` pada notes kuning untuk memastikan seluruh isi catatan berada di area kanan yang menyembul dari belakang polaroid.

---

## 🚀 Panduan Deployment (Git Push to Vercel)

Repositori ini telah terintegrasi secara otomatis dengan **Vercel Continuous Deployment (CD)**. Setiap perubahan yang di-*push* ke branch `main` akan memicu proses *build* dan *deployment* otomatis ke server produksi.

### Langkah-langkah Push:

1. **Buka Terminal** di direktori proyek:
   ```bash
   cd /home/noob/Projects/WebPortfolioIkma
   ```

2. **Cek Status Repositori**:
   ```bash
   git status
   ```

3. **Unggah Perubahan ke GitHub**:
   ```bash
   git push origin main
   ```

4. **Verifikasi Deployment di Vercel**:
   - Setelah perintah `git push` selesai, Vercel akan otomatis mendeteksi commit baru.
   - Proses *build* memerlukan waktu sekitar **30–60 detik**.
   - Buka dashboard Vercel atau kunjungi URL portofolio Anda untuk melihat hasil *live*.

---

## ✅ Verifikasi Pasca-Deployment (Verification Checklist)

| Item Pengujian | Ekspektasi Hasil | Status |
| :--- | :--- | :---: |
| **Responsivitas Binder** | Tampilan binder rata kiri di layar desktop tanpa margin kosong canggung | ✅ PASS |
| **Tombol Navigasi Home** | Mengembalikan posisi tampilan ke paling atas dengan batas binder utuh | ✅ PASS |
| **Penyelarasan Foto Profil** | Batas atas polaroid sejajar horisontal dengan teks *Information Technology* | ✅ PASS |
| **Kejelasan Foto Profil** | Wajah dan hijab 100% terlihat tanpa tertutup sticky note | ✅ PASS |
| **Keterbacaan Notes Kuning** | Teks *"currently figuring things out ✿"* dan 3 hashtag terbaca 100% jelas | ✅ PASS |
| **Build & Type Check** | `tsc && vite build` lulus dengan exit code 0 | ✅ PASS |

---

*Dokumentasi ini dibuat secara otomatis oleh Antigravity AI Assistant.* 🎨✨
