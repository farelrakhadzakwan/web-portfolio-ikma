# 📄 Dokumentasi Fitur CV Viewer & Pop-Up Window
**Ikmalunisa Annora Personal Portfolio**

Dokumentasi ini menjelaskan implementasi fitur tombol tab **CV** interaktif, modal pop-up pratinjau dokumen PDF, serta integrasi unduhan dokumen resmi pada portofolio personal Ikmalunisa Annora.

---

## 📌 Ringkasan Fitur (Feature Summary)

Fitur ini memberikan kemudahan bagi rekruter dan pengunjung portofolio untuk langsung melihat Curriculum Vitae (CV) Ikmalunisa Annora tanpa harus meninggalkan halaman utama atau teralihkan ke tab baru secara otomatis.

1. **Tab Navigasi Binder ("CV" dengan Ikon Mata)**:
   - Terintegrasi di bilah tab binder sisi kanan ([BinderNavigation.tsx](file:///home/noob/Projects/WebPortfolioIkma/src/components/BinderNavigation.tsx)).
   - Label minimalis: `CV` disertai ikon mata (`Eye` dari library `lucide-react`).
   - Memiliki styling konsisten dengan tab binder lainnya (background pastel blush `#F3B6CB`, teks charcoal `#4A3A40`, efek hover slide dan transisi warna ke `#E98FB3` putih).

2. **Jendela Pop-up / Modal Interaktif ([CVModal.tsx](file:///home/noob/Projects/WebPortfolioIkma/src/components/CVModal.tsx))**:
   - Animasi kemunculan lembut bertenaga **Framer Motion** (`fade-in` backdrop dan `scale-up / spring` pada kontainer modal).
   - Menampilkan dokumen PDF asli (`CV 2026 Ikmalunisa Annora.pdf`) secara langsung di dalam browser melalui elemen `<iframe>` dengan PDF viewer bawaan modern.

3. **Opsi Aksi pada Modal**:
   - **Tombol Download**: Mengunduh file `CV 2026 Ikmalunisa Annora.pdf` langsung ke perangkat pengguna.
   - **Tombol Buka di Tab Baru**: Membuka URL dokumen PDF di tab browser baru bagi pengguna yang ingin melihat dalam mode layar penuh.
   - **Tombol Tutup (X)**: Menutup modal pop-up.

4. **Pengalaman Pengguna & Aksesibilitas**:
   - **Keyboard Shortcut**: Menekan tombol `Escape (Esc)` pada keyboard akan langsung menutup modal.
   - **Backdrop Dismiss**: Mengklik area gelap/buram di luar modal akan langsung menutup jendela.
   - **Scroll Lock**: Saat modal aktif, scroll halaman di belakangnya dikunci otomatis (`document.body.style.overflow = 'hidden'`) untuk mencegah pergeseran halaman yang tidak disengaja.
   - **Dukungan Layar Ponsel (Mobile Responsive)**: Disediakan bar bantuan di bagian bawah jika viewer bawaan browser ponsel memiliki keterbatasan dalam merender iframe PDF, dengan tombol unduh langsung yang jelas.

---

## 🏗️ Struktur & Hubungan Komponen

```text
src/
├── App.tsx
│   ├── State: [isCVModalOpen, setIsCVModalOpen]
│   ├── <BinderNavigation onOpenCVModal={() => setIsCVModalOpen(true)} />
│   └── <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
│
└── components/
    ├── BinderNavigation.tsx  ──> Tombol tab 'CV' dengan icon mata memicu callback onOpenCVModal
    └── CVModal.tsx           ──> Modal pop-up dengan iframe PDF viewer dan tombol aksi download
```

---

## 📁 Lokasi File Dokumen PDF

File dokumen PDF resmi diletakkan pada:
```text
public/CV 2026 Ikmalunisa Annora.pdf
```
Karena berada di direktori `public/`, Vite akan menyajikannya secara statis di root URL:
```text
/CV%202026%20Ikmalunisa%20Annora.pdf
```
Pengunjung dapat mengaksesnya langsung baik saat pengembangan lokal maupun saat sudah ter-deploy di server hosting / custom domain.

---

## 🔄 Cara Memperbarui Dokumen CV di Masa Depan

Jika terdapat versi CV terbaru:
1. Ganti file PDF di folder `public/` dengan file CV baru (atau gunakan nama file yang sama: `CV 2026 Ikmalunisa Annora.pdf`).
2. Jika nama file diubah, sesuaikan konstanta `cvUrl` dan `cvFileName` di file [src/components/CVModal.tsx](file:///home/noob/Projects/WebPortfolioIkma/src/components/CVModal.tsx).
3. Lakukan build dan push ke GitHub:
   ```bash
   npm run build
   git add .
   git commit -m "feat: update CV document"
   git push origin main
   ```
