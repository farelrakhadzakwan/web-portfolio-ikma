# 🌸 Ikmalunisa Annora — Personal Portfolio Website

> **"A professional portfolio presented as a beautifully organized personal binder & scrapbook."**

A modern, responsive, and highly personalized portfolio website for **Ikmalunisa Annora**, an Information Technology Education graduate from Brawijaya University. The website seamlessly blends technical capability in IT, Data Analysis, and Project Coordination with a unique, feminine pink study notebook aesthetic.

![Tech Stack](https://img.shields.io/badge/React-18-pink?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3-38bdf8?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-4.4-646cff?logo=vite)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16-f50e7b)

---

## 📖 Concept & Visual Identity

The design balances **65% Professional Credibility** with **35% Personal & Feminine Identity**:
* **The Metallic Binder**: 3D metallic binder rings on a soft spine anchor the portfolio experience.
* **Scrapbook Elements**: Paper sheet textures, sticky note callouts, polaroid photo frames, washi tape clips, and handwritten annotations (`Caveat` font).
* **Curated Palette**: Soft Pink (`#F8D7E3`), Blush (`#F3B6CB`), Cream (`#FFF8FB`), Deep Rose (`#A94F73`), and Dark Charcoal (`#4A3A40`) ensure readable editorial contrast without visual fatigue.

---

## 🗃️ Single Source of Truth (SSOT) Architecture

This portfolio strictly enforces a **Content vs. Presentation separation**:

```text
MasterContent.yml  ──(Raw Import & js-yaml Parser)──>  src/data/portfolioData.ts  ──>  React Components
```

### Key Architectural Highlights:
* **`MasterContent.yml`**: The central content database containing personal profile, work experience, projects, metrics, skills, and certifications.
* **Zero Factual Hardcoding**: Components dynamically iterate over structured data. Changing `MasterContent.yml` updates the portfolio content immediately across the application without editing UI component logic.
* **Safe Missing Data Handling**: Unspecified fields (in `source_gaps`) are gracefully omitted from rendering without displaying empty placeholders.

---

## 🌟 Key Sections & Features

1. **Hero Section**: Editorial serif presentation, interactive CTAs, polaroid card, and sticky note callouts.
2. **About Section**: Highlighting the intersection of Information Technology, HR, and Data Analysis.
3. **Experience Section**: Chronological binder cards with organization tabs (`HR`, `CLASS MANAGER`).
4. **Projects Section**: Case-study cards emphasizing verified quantitative metrics (**10,000 reviews processed**, **78% accuracy**, **Naive Bayes ML**).
5. **Organizations Section**: Metric achievement stickers highlighting leadership (**20+ organizations**, **8 staff coordinated**, **120+ excursion participants**, **30+ international participants**).
6. **Skills & Binder Index**: Interactive 6-category binder index (`01 Technology`, `02 Data & Analytics`, `03 HR`, `04 Management`, `05 Communication`, `06 Tools & Soft Skills`).
7. **Education & Certifications**: Brawijaya University GPA (**3.83 / 4.00**) styled with a Summa Cum Laude stamp and Trust Training Partners document sleeve.
8. **Contact Section**: Accessible buttons for Email (`ikmalunisaa11@gmail.com`), LinkedIn, and Phone.

---

## 🚀 Getting Started

### Prerequisites
* Node.js `^18.0.0` or later
* npm `^9.0.0` or later

### Installation & Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/farelrakhadzakwan/web-portfolio-ikma.git
   cd web-portfolio-ikma
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```text
web-portfolio-ikma/
├── MasterContent.yml         # Single Source of Truth (SSOT) content database
├── index.html                # Main HTML entry with Google Fonts
├── package.json              # Project dependencies & scripts
├── tailwind.config.js        # Theme colors, fonts, paper shadow extensions
├── vite.config.ts            # Vite configuration
└── src/
    ├── App.tsx               # Main binder layout container & smooth scroll observer
    ├── index.css             # Tailwind directives & paper texture utility styles
    ├── main.tsx              # React DOM render entry point
    ├── vite-env.d.ts         # Module declaration for YAML raw imports
    ├── components/           # Reusable scrapbook UI components
    │   ├── BinderNavigation.tsx
    │   ├── HeroSection.tsx
    │   ├── AboutSection.tsx
    │   ├── ExperienceSection.tsx
    │   ├── ProjectsSection.tsx
    │   ├── OrganizationsSection.tsx
    │   ├── SkillsSection.tsx
    │   ├── EducationSection.tsx
    │   ├── CertificationsSection.tsx
    │   └── ContactSection.tsx
    └── data/
        └── portfolioData.ts  # Typed accessor layer parsing MasterContent.yml
```

---

## ✏️ How to Update Content

To update any text, job role, project detail, or metric:
1. Open `MasterContent.yml`.
2. Edit the corresponding YAML fields.
3. Save the file. The changes will instantly reflect on the website!

---

## 📄 License

This project is licensed under the MIT License.
