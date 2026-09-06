# 🖼️ Dokumentasi Section Gallery & Activities
**Ikmalunisa Annora Personal Portfolio**

Dokumentasi ini menjelaskan implementasi section baru **Gallery & Activities** yang menyajikan 13 slide presentasi portofolio aktivitas, kepanitiaan, kepemimpinan organisasi, sertifikat, dan rekam jejak *public speaking* dari Ikmalunisa Annora.

---

## 📌 Ringkasan Implementasi

1. **Posisi Navigasi & Halaman**:
   - Di bilah tab binder kanan ([BinderNavigation.tsx](file:///home/noob/Projects/WebPortfolioIkma/src/components/BinderNavigation.tsx)), tab **`Gallery`** diselipkan tepat di antara tab **`Certifications`** dan **`Contact`**.
   - Di dalam susunan binder ([App.tsx](file:///home/noob/Projects/WebPortfolioIkma/src/App.tsx)), section `<GallerySection />` dirender di antara `<CertificationsSection />` dan `<ContactSection />`.
   - Observer *scroll position* otomatis memperbarui status aktif tab navigasi saat pengunjung menggulir ke area Gallery.

2. **Daftar 13 Slide Portfolio PPT**:
   Slide bersumber dari folder presentasi `PortfolioPPT` beresolusi 1920x1080 (16:9 widescreen) yang kini tersimpan rapi di direktori publik `public/gallery/`:
   - **Slide 1**: *Organization & Experience Overview* (Cover Slide)
   - **Slide 2**: *BEM FILKOM — Staf Muda Perhubungan* (Student Executive Board)
   - **Slide 3**: *International Conference of Asian Students* (Public Relation Staff)
   - **Slide 4**: *GEMASTIK XVI 2023 — Liaison Officer* (Puspresnas / Kemendikbudristek)
   - **Slide 5**: *BEM FILKOM — Staf Ahli Kementerian Perhubungan* (Kabinet Nawasena)
   - **Slide 6**: *LPM DISPLAY — Head of Innovation and Business* (Lembaga Penerbitan Mahasiswa)
   - **Slide 7**: *DEVGIRLS — Staff of Public Relation* (Komunitas Pemberdayaan Perempuan IT)
   - **Slide 8**: *Koleksi Sertifikat Resmi Kegiatan & Organisasi* (Studi Banding, Harmoni Lembaga, WAJAR, 4C National)
   - **Slide 9**: *Another Skills Showcase* (Section Divider)
   - **Slide 10**: *Public Speaking — Master of Ceremony & Moderator* (DevGirls x Brawijaya ASEAN Society)
   - **Slide 11**: *Public Speaking — MMD FILKOM & Workshop UI/UX* (Kuningan & DevGirls)
   - **Slide 12**: *Public Speaking — Menfest & Live Events* (Pentas Keakraban & Stage Host)
   - **Slide 13**: *Thank You* (Closing Slide)

3. **Fitur & Interaktivitas UI ([GallerySection.tsx](file:///home/noob/Projects/WebPortfolioIkma/src/components/GallerySection.tsx))**:
   - **Filter Kategori Cepat**: Tombol filter pil (*All (13)*, *Organization (5)*, *Public Speaking (3)*, *Certificates (1)*, *Overview (4)*).
   - **Featured Showcase Viewer**:
     - Menampilkan slide aktif dalam ukuran besar dengan rasio 16:9.
     - Kontrol panah Sebelumnya (*Left*) dan Selanjutnya (*Right*).
     - Indikator nomor slide (contoh: `Slide 3 of 13`) dan keterangan ringkas.
     - Animasi transisi lembut antar slide via *Framer Motion*.
   - **Album Grid / Thumbnail Strip**:
     - Kartu miniatur bernuansa scrapbook dengan aksen selotip washi tape.
     - Penanda nomor slide (`#1`, `#2`, dst.) dan judul.
     - Efek visual hover dan highlight border saat slide terpilih.
     - Klik pada thumbnail mana pun akan langsung mengaktifkan slide di viewer utama.
   - **Lightbox / Fullscreen Zoom Modal**:
     - Pengunjung dapat mengklik gambar atau tombol "Perbesar" untuk membuka tampilan resolusi penuh dengan latar belakang redup (*backdrop blur*).
     - Mendukung navigasi keyboard: panah kiri/kanan (`←` / `→`) untuk berpindah slide, dan tombol `Escape (Esc)` untuk menutup.
     - Tombol buka gambar asli di tab baru.

---

## 🏗️ Struktur Aset & Integrasi

```text
public/
└── gallery/
    ├── 1.png   (Cover Organization & Experience)
    ├── 2.png   (BEM FILKOM Staf Muda)
    ├── 3.png   (International Conference of Asian Students)
    ├── 4.png   (GEMASTIK XVI 2023 Liaison Officer)
    ├── 5.png   (BEM FILKOM Staf Ahli)
    ├── 6.png   (LPM DISPLAY Head of Innovation & Business)
    ├── 7.png   (DEVGIRLS Public Relation)
    ├── 8.png   (Certificates Collection)
    ├── 9.png   (Another Skills Divider)
    ├── 10.png  (Public Speaking MC & Moderator)
    ├── 11.png  (Public Speaking MMD & UI/UX)
    ├── 12.png  (Public Speaking Menfest)
    └── 13.png  (Closing Thank You)

src/
├── components/
│   ├── BinderNavigation.tsx  ──> Ditambahkan tab 'Gallery'
│   └── GallerySection.tsx    ──> Komponen interaktif showcase & album grid
└── App.tsx                   ──> Penempatan section Gallery di antara Certifications & Contact
```

---

## 🚀 Pengujian & Kualitas

- **Build Verifikasi**: Telah divalidasi dengan `tsc && vite build`, menghasilkan 0 error / warning TypeScript.
- **Lazy Loading**: Thumbnail dan gambar menggunakan `loading="lazy"` demi efisiensi konsumsi memori dan bandwidth browser.
- **Responsif**: Tampilan grid otomatis menyesuaikan dari 2 kolom di ponsel, 3 kolom di tablet, hingga 4 kolom di desktop.
