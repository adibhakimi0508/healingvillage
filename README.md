# Healing Village

**Healing Village** is a high-fidelity corporate wellness and training platform website designed to showcase facilities, leadership programs, and holistic health services. Built as a modern Single Page Application (SPA), it focuses on premium user experience, touch-optimized interactions, and responsive design.

## 🚀 Introduction

Healing Village serves as the digital gateway for a wellness ecosystem that includes **KT Academy** and **Klassique Touch**. The project bridges the gap between corporate training needs and holistic well-being, offering an immersive digital experience to explore programs, view the campus map, and meet the leadership team.

## ✨ Features

* **Immersive Hero Section:** Full-screen touch-enabled slider with parallax effects and auto-play functionality.
* **Smart Navigation:** Scroll-aware navigation bar that transitions from transparent to solid, featuring a mobile-responsive drawer.
* **Leadership Showcase:** Interactive grid and bento-style layouts displaying professional profiles.
* **Dynamic Gallery:** Masonry-style photo gallery ("Moments") capturing events and facilities.
* **Virtual Map Integration:** Dedicated section linking to a 360° interactive campus tour.
* **Program Highlights:** Visual cards detailing specific training modules like Breathwork Science and ESG Integration.
* **Community Bulletin:** A dedicated section for latest news and community updates.

## 🛠 Tech Stack

* **Framework:** React 18
* **Build Tool:** Vite 6
* **Language:** TypeScript
* **Styling:** Tailwind CSS v4
* **UI Library:** Radix UI (Primitives for Dialogs, Navigation, Sheets, etc.)
* **Icons:** Lucide React
* **Animations:** Framer Motion (`motion`) & CSS Transitions

## ⚙️ Requirements

To run this project locally, ensure your environment includes:

* **Node.js** (v18 or above recommended)
* **npm** (comes with Node.js)

## 📦 Installation

Follow these steps to set up the project:

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/adibhakimi0508/healingvillage.git](https://github.com/adibhakimi0508/healingvillage.git)
    cd healingvillage
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Access the application**
    Open your browser and navigate to `http://localhost:5173` (default Vite port).

## 📖 Usage

* **Navigation:** Use the top bar to jump between sections: Leadership, Campus (Peta), Bulletin, Programs, and Gallery.
* **Mobile Experience:** Swipe left/right on the Hero section to change slides. Open the hamburger menu for mobile navigation.
* **Contact:** Use the "Hubungi Kami" button to access contact information.

## 📂 Project Structure

```text
healingvillage/
├── public/                  # Static assets (favicons, public images)
├── src/
│   ├── app/
│   │   ├── components/      # Core Feature Components
│   │   │   ├── figma/       # Design-specific utilities (ImageWithFallback)
│   │   │   ├── ui/          # Reusable UI Primitives (Radix/Shadcn)
│   │   │   │   ├── button.tsx, card.tsx, sheet.tsx, carousel.tsx
│   │   │   │   ├── dialog.tsx, navigation-menu.tsx, etc.
│   │   │   ├── HeroSection.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MomentsGallery.tsx
│   │   │   ├── LeadershipGrid.tsx
│   │   │   └── MapTeaser.tsx
│   │   └── pages/           # Full Page Layouts
│   │       ├── ContactPage.tsx
│   │       └── ProgramListPage.tsx
│   ├── assets/              # Imported Assets (Images, PDFs)
│   ├── styles/              # Global Styling
│   │   ├── fonts.css        # Custom font imports
│   │   ├── index.css        # Base styles
│   │   └── tailwind.css     # Tailwind directives
│   ├── App.tsx              # Main Application Entry
│   └── main.tsx             # React DOM Renderer
├── guidelines/              # Project documentation & guidelines
├── index.html               # Entry HTML file
├── package.json             # Dependencies & Scripts
├── tailwind.config.js       # Tailwind Configuration
├── tsconfig.json            # TypeScript Configuration
└── vite.config.ts           # Vite Configuration
```
## 🤝 Contributing

We welcome contributions to Healing Village:

1.  **Fork the repository** and create your branch.
2.  **Follow established coding standards** and write clear commit messages.
3.  **Add tests** for new features where applicable.
4.  **Submit a pull request** with a detailed description of your changes.

For larger features or design changes, please open an issue to discuss your ideas before implementation.

## 📄 License

Healing Village is licensed under the MIT License. See the `LICENSE` file for details. This allows you to use, modify, and distribute the project freely as long as the original license is included.
