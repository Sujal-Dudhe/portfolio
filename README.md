# Portfolio Website

A modern, responsive, and customizable personal portfolio website built with React, TypeScript, and Tailwind CSS. This project showcases my skills, projects, education, and professional journey in a clean and aesthetic interface.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that looks great on mobile, tablet, and desktop devices.
- **Modern UI/UX**: Clean aesthetic with smooth animations (fade-ups), glassmorphism effects, and a consistent color palette.
- **SEO Optimized**: Includes meta tags and Open Graph descriptions for better search engine visibility.
- **Enhanced Navigation**:
  - Smooth scrolling to sections.
  - Active section highlighting in the navbar.
  - "Scroll to Top" button for better accessibility.
- **Dynamic Content**: Easily customizable content via a centralized constants file.
- **Dark Theme**: Built with a sleek dark-themed design system.
- **Polished 404 Page**: Custom "Page Not Found" screen matching the site's theme.
- **Contact Section**: Integrated contact section with social media links.

## 🛠️ Tech Stack

- **Frontend**: [React](https://react.dev/) (v19), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **State Management**: [TanStack Query](https://tanstack.com/query/latest)

## 📂 Project Structure

```bash
src/
├── components/         # Reusable UI components
│   ├── ui/             # Generic UI elements (Toast, Tooltip, etc.)
│   ├── About.tsx       # About Me section
│   ├── Achievements.tsx # Achievements section
│   ├── Contact.tsx     # Contact section
│   ├── Education.tsx   # Education section
│   ├── Footer.tsx      # Website footer
│   ├── Hero.tsx        # Hero/Landing section
│   ├── Navbar.tsx      # Navigation bar
│   ├── Projects.tsx    # Projects showcase
│   ├── ScrollToTop.tsx # Scroll to top button
│   └── Skills.tsx      # Skills section
├── constants/
│   └── index.ts        # Centralized configuration (Update your data here!)
├── hooks/
│   └── use-toast.ts    # Custom React hooks
├── lib/
│   └── utils.ts        # Utility functions (Tailwind merge, etc.)
├── pages/
│   ├── Index.tsx       # Main portfolio page
│   └── NotFound.tsx    # 404 Error page
├── index.css           # Global styles and Tailwind directives
├── App.tsx             # Main application component
└── main.tsx            # Entry point
```

## ⚡ Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/Sujal-Dudhe/portfolio.git
    ```
  
2.  **Navigate to the project directory:**
    ```bash
    cd portfolio
    ```
    
3.  **Install dependencies**

    ```bash
    npm install
    ```

4.  **Start the development server**
    ```bash
    npm run dev
    ```
    The app will run at `http://localhost:5173` (or the next available port).

## 📝 Customization

This portfolio is designed to be easily customizable. You don't need to dig into every component to change the text.

**1. Update Personal Info & Projects:**
Open `src/constants/index.ts`. Here you can modify:

- `PERSONAL_INFO`: Name, title, location, phone number.
- `SOCIAL_LINKS`: GitHub, LinkedIn, Twitter, Email.
- `PROJECTS`: Array of your projects (Title, Description, Tech Stack, Links).
- `RESUME_URL`: Path to your resume file.

**2. Update Resume:**
Replace the file at `public/resume.pdf` with your actual resume document.

**3. Update Logo:**
Replace `public/logo.svg` with your personal logo or favicon.

## 📦 Build for Production

To create a production-ready build:

```bash
npm run build
```

The output files will be in the `dist` directory, ready to be deployed to Vercel, Netlify, or GitHub Pages.

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or find any issues, please feel free to open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
