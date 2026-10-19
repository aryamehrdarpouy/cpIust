# AGENTS.md — IUST Faculty Profile Portal (Dr. Alireza Mohammadi)

Welcome to the **Iran University of Science and Technology (IUST) Faculty Profile Portal** codebase. This document outlines project architecture, design specifications, technology stack, directory layout, guidelines, and instructions for AI agents and human developers maintaining or extending this application.

---

## 1. Project Overview

- **Subject**: Official academic profile and student interaction portal for **Dr. Alireza Mohammadi** (Full Professor, Department of Computer Engineering, Iran University of Science and Technology - IUST).
- **Primary Objectives**:
  1. Provide students, researchers, and academic peers with comprehensive faculty information (biography, contact channels, office location).
  2. Deliver an intuitive gateway for enrolled students to access active course information, lecture schedules, LMS links, and Teaching Assistant (TA) contacts.
  3. Feature active research positions at the AI & NLP Laboratory (AILab) with direct resume submission.
  4. Showcase peer-reviewed publications and conference proceedings.
  5. Provide an interactive office hours tracker and student thesis/project guidance request workflow.
- **Visual Reference**: Based on the Figma export specifications provided in `message.txt` and verified against `photo_1_2026-10-18_14-06-55.jpg`.
- **Primary Directionality & Language**: Persian (Farsi - فارسی), Strict **RTL** (`dir="rtl"`).

---

## 2. Technology Stack & Tooling

| Layer | Technology | Rationale / Specification |
| :--- | :--- | :--- |
| **Framework** | React 18 / 19 | Component-driven, reactive UI architecture. |
| **Build Tool** | Vite | Lightning-fast HMR and bundle optimization. |
| **Styling** | Tailwind CSS & Pure CSS Modules | Utility-first classes matching Figma token values, high-precision layout. |
| **Typography** | Vazirmatn (`font-family: 'Vazirmatn', sans-serif`) | Standard, modern Persian font with full numeral and glyph coverage (weights 300 to 900). |
| **Monospace Font** | Liberation Mono / JetBrains Mono | Used for course codes, email addresses, and technical publication identifiers. |
| **Icons** | Lucide React + Custom SVG paths | Academic graduation cap, books, beaker/flask, calendar, map pins, external links. |

---

## 3. Design Tokens & Visual Hierarchy

Extracted from the source Figma layout (`message.txt`):

### 3.1 Color Palette
- **Primary Brand (Deep Academic Violet / Indigo)**:
  - Base: `#1A0959` (Used for active sidebar item, primary buttons, office hours hero status)
  - Hover / Darker: `#120640`
  - Subtle Tints: `rgba(26, 9, 89, 0.04)`, `rgba(26, 9, 89, 0.08)`
- **Secondary Accent (Lilac / Soft Violet)**:
  - `#5E549F` (Used for department subtitle, secondary links, icon accents)
  - Soft Pill Background: `#E5DEFF` (`rgba(229, 222, 255, 0.3)`)
- **Status & Indicators**:
  - Notification / Live Dot: `#F73846` (Bright Coral / Crimson)
  - Online / Active Dot: `#10B981` / `#22C55E` (Emerald Green)
- **Neutrals & Surfaces**:
  - Page Canvas Background: `#F7F9FB`
  - Card Surface: `#FFFFFF`
  - Secondary Card / Header Background: `#F2F4F6`
  - Pill / Tag Background: `#E6E8EA`
  - Borders & Dividers: `#DFE0E0`, `#E0E3E5`, `#ECEEF0`
- **Text Shades**:
  - Primary Headings & Bold Text: `#191C1E`
  - Body Text & Paragraphs: `#484550`
  - Muted Subtitles & Metadata: `#616363`, `#787581`

### 3.2 Typography Standards
- Font Family: `'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- Code / Monospace: `'Liberation Mono', monospace`
- Scale:
  - Hero Faculty Name: `28px` (`font-weight: 700`, `line-height: 40px`)
  - Section Headings (H2): `18px` to `20px` (`font-weight: 700`)
  - Sub-headings & Course Titles: `15px` to `16px` (`font-weight: 600`)
  - Body & Descriptions: `13px` to `14px` (`font-weight: 400`, `line-height: 1.65`)
  - Badges & Micro-copy: `11px` to `12px` (`font-weight: 500` - `600`)

### 3.3 Elevation & Shadows
- Card Shadow: `0px 1px 2px rgba(0, 0, 0, 0.05)`
- Header Shadow: `0px 1px 8px rgba(26, 9, 89, 0.04)`
- Interactive Hover: `0 4px 12px rgba(26, 9, 89, 0.08)`

---

## 4. Layout Architecture & Responsive Breakpoints

1. **Desktop Standard (`width >= 1280px`)**:
   - Total width: `1440px` centered canvas.
   - Right Sidebar (`Aside`): Fixed or sticky `288px` on the right side.
   - Top Header (`Header`): Fixed `64px` height, spanning from the left viewport boundary to `288px` from the right.
   - Main Content (`Main`): `max-width: 1152px`, padding `24px`.
   - Grid within Main:
     - Primary Content Column (Courses, Lab, Publications): `8 cols` (~65% width).
     - Secondary Sidebar Column (Office Hours, Thesis Guidance, Map): `4 cols` (~35% width).
2. **Tablet & Mobile (`width < 1024px`)**:
   - Aside collapses into a responsive slide-over drawer / bottom navigation.
   - Top Header spans `100%` with hamburger menu toggle.
   - Main Grid stacks into a single unified column maintaining visual hierarchy.

---

## 5. Component Breakdown & Interactive Behaviors

### 5.1 Global Navigation (`Header` & `Sidebar`)
- **`Sidebar.jsx`**:
  - Displays IUST emblem and university faculty portal title.
  - Section label: `منوی ناوبری اصلی`.
  - Navigation links with active indicator for `صفحه اصلی و معرفی` (`#1A0959`), plus anchor links to `دروس ارائه شده`, `آزمایشگاه و پژوهش‌ها`, and `مقالات و انتشارات`.
  - Bottom student card: `پرتال ارتباطی دانشجویان` with status pill `کاربر عمومی / دانشجو`.
- **`Header.jsx`**:
  - Professor profile summary in header with thumbnail and academic rank.
  - Quick action buttons: System Support (`پشتیبانی سامانه‌ها`), Notification bell with unread badge (`اعلان‌ها`).
  - Search input with real-time filtering across courses, publications, and lab openings.
  - Current academic semester badge: `نیمسال اول تحصیلی ۱۴۰۴-۱۴۰۳`.

### 5.2 Faculty Hero Banner (`FacultyHero.jsx`)
- High-resolution faculty portrait with `عضو هیئت علمی رسمی` badge.
- Full name: `دکتر علیرضا محمدی` and academic title: `استاد تمام (Full Professor)`.
- Department line: `دانشکده مهندسی کامپیوتر • دانشگاه علم و صنعت ایران (IUST)`.
- Academic biography detailing AI Lab leadership, research focuses (Deep Learning, NLP, Distributed RL).
- Direct contact pills:
  - `ارسال پیام و هماهنگی`: Opens interactive contact modal.
  - `mohammadi@iust.ac.ir`: Click to copy with instant toast confirmation.
  - Location badge: `دانشکده کامپیوتر، طبقه چهارم، اتاق ۴۱۸`.
  - External link: `وب‌سایت آزمایشگاه هوش مصنوعی (AILab)`.

### 5.3 Quick Metrics (`QuickMetrics.jsx`)
Four high-impact metric cards:
1. `دروس جاری ترم` / `۳ درس فعال`
2. `مقالات ISI و کنفرانس‌ها` / `+۹۵ عنوان`
3. `دانشجویان فارغ‌التحصیل` / `۴۲ دانش‌آموخته`
4. `فرصت پژوهشی دستیار` / `۲ موقعیت باز`

### 5.4 Active Courses (`CoursesSection.jsx`)
Detailed course cards for the current semester:
1. **هوش مصنوعی و یادگیری ماشین پیشرفته** (Advanced AI & Machine Learning - Graduate)
   - Code: `۳۰۴۰۵۲۱۰` | 3 Units | Sun & Tue 10:30-12:00 | Class 101.
   - Syllabi: Gradient Optimization, CNNs, Transformers, Diffusion Models, Explainable AI.
   - TA: Eng. Pouya Naseri (`p_naseri@comp.iust.ac.ir`).
   - Active status: `پروژه پایانی فعال`.
2. **طراحی الگوریتم‌ها** (Algorithm Design - Undergraduate)
   - Code: `۳۰۴۰۳۱۰۴` | 3 Units | Sat & Mon 13:30-15:00 | Faculty Amphitheater.
   - Syllabi: Asymptotic Complexity, Divide & Conquer, Dynamic Programming, Greedy, Max Flow, NP-Complete.
   - TA: Eng. Sara Karimi (`s_karimi@comp.iust.ac.ir`).
   - Active status: `آزمون میان‌ترم: ۲۸ آبان`.
3. **سمینار و روش تحقیق در مهندسی کامپیوتر** (Seminar & Research Methodologies - Postgraduate)
   - Code: `۳۰۴۰۶۷۸۱` | 2 Units | Wed 10:00-12:00 | Faculty Conference Room.
   - Syllabi: IEEE standard paper writing, peer review, research ethics, experiment design.
   - Active status: `ارائه‌های دوره‌ای`.

### 5.5 Research Opportunities (`ResearchLabSection.jsx`)
- Banner: `پاییز و زمستان ۱۴۰۳`.
- Laboratory overview and eligibility requirements (Python, Linear Algebra, top academic records).
- Position 1: `توسعه مدل‌های زبانی فارسی (LLM)` (Fine-tuning, benchmark evaluation, open-source models).
- Position 2: `بینایی ماشین در رباتیک صنعتی` (3D point clouds, object recognition, automotive industry collaboration).
- Direct application / resume upload modal triggers.

### 5.6 Publications Highlight (`PublicationsSection.jsx`)
- Link to Google Scholar profile.
- Highlighted publication 1: *"Cross-Lingual Representation Learning for Low-Resource NLP"* (IEEE TPAMI 2024, IF: 20.8).
- Highlighted publication 2: *"Deep Multi-Agent Reinforcement Learning for Autonomous Drone Swarms"* (ACM Computing Surveys 2023, Sharif AI Conference).

### 5.7 Office Hours & Guidance Panels (`OfficeHoursCard.jsx`, `GuidanceRequestCard.jsx`, `CampusMapCard.jsx`)
- **Office Hours**:
  - Live indicator: `آماده پذیرش دانشجو` (Ready for consultation).
  - Walk-in slots: Monday 10:00-12:00, Tuesday 14:00-16:00.
  - Virtual consultation via Google Meet with prior booking.
- **Guidance Request**:
  - Form trigger for B.Sc. project, M.Sc. thesis, and industrial internships.
  - 48-hour response guarantee reminder.
- **Campus Location Map**:
  - Static campus map visual showing IUST Gate 3 (Farjam St) and Computer Engineering Building.

---

## 6. Directory Structure

```text
/home/aryan/Desktop/cpIust/
├── AGENTS.md                  # Comprehensive AI and developer project documentation
├── agents.md                  # Alias pointer / mirror of AGENTS.md
├── message.txt                # Raw source Figma CSS & layout specifications
├── photo_1_2026-10-18_14-06-55.jpg # Target visual screenshot reference
├── package.json               # Dependencies and build scripts
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind theme extension (colors, fonts, RTL)
├── postcss.config.js          # PostCSS configuration
├── index.html                 # Main HTML entry with Persian metadata and Vazirmatn font
└── src/
    ├── main.jsx               # React DOM root entry
    ├── App.jsx                # Main application layout and state coordinator
    ├── index.css              # Global styles, font definitions, and custom utilities
    ├── assets/                # Cropped images and visual assets
    │   ├── prof_photo.jpg     # Dr. Mohammadi portrait
    │   ├── campus_map.png     # Campus map visual
    │   └── iust_logo.png      # University logo
    ├── components/
    │   ├── Header.jsx         # Top persistent navigation header
    │   ├── Sidebar.jsx        # Right-side primary navigation bar
    │   ├── FacultyHero.jsx    # Hero profile overview banner
    │   ├── QuickMetrics.jsx   # 4 metric summary cards
    │   ├── CoursesSection.jsx # Active courses list with LMS links and syllabi
    │   ├── ResearchLabSection.jsx # Lab opportunities & resume triggers
    │   ├── PublicationsSection.jsx # Selected papers & Google Scholar link
    │   ├── OfficeHoursCard.jsx# Office hours and consultation schedule
    │   ├── GuidanceRequestCard.jsx # Thesis guidance request panel & form modal
    │   ├── CampusMapCard.jsx  # Campus visual map and office address card
    │   ├── ContactModal.jsx   # Interactive modal for sending messages
    │   └── GuidanceModal.jsx  # Interactive modal for guidance application
    └── data/
        └── facultyData.js     # Structured dataset for faculty info, courses, publications
```

---

## 7. Development & Build Commands

```bash
# Install dependencies
npm install

# Start local development server (with HMR)
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 8. Agent Instructions & Code Integrity

1. **RTL Exclusivity**: Always preserve `dir="rtl"` and ensure right-to-left layout conventions (padding right for starts, flex row alignments, margin flips).
2. **Persian Typography**: Ensure Persian numbers (`۰ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹`) are maintained in dates, codes, and numerical metrics where appropriate.
3. **Accessibility**: All buttons and interactive triggers must include accessible aria-labels. Form inputs must support Persian keyboard layout gracefully.
4. **Fidelity**: Adhere strictly to the color palette (`#1A0959`, `#5E549F`, `#F7F9FB`, `#191C1E`) and spacing defined in `message.txt`.
