# 🖍️ highLIGHTER

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

**highLIGHTER** is a clean, responsive, frontend-only blog and task management web application. It allows users to write, categorize, and manage their thoughts and articles with seamless local storage persistence.

🚀 **Live Demo:** [https://highlighter-omega.vercel.app/](https://highlighter-omega.vercel.app/)

---

## ✨ Key Features

* **📝 Full CRUD Operations**: Create, Read, Update, and Delete articles or tasks effortlessly.
* **💾 Local Storage Persistence**: No backend required! All data is securely saved in your browser's local storage and survives page refreshes.
* **🌗 Dark / Light Mode**: Fully integrated theme toggling using modern CSS variables.
* **🏷️ Categorization & Authorship**: Tag posts with specific categories and author names.
* **⚡ Blazing Fast**: Built with React and Vite for optimal performance and instant hot-reloading.
* **🔔 Toast Notifications**: Interactive, non-intrusive feedback for user actions (powered by `react-hot-toast`).
* **📱 Responsive Design**: A beautifully polished, grid-based UI that looks great on mobile, tablet, and desktop.

---

## 🛠️ Tech Stack

* **Core:** React (Functional Components, Hooks)
* **State Management:** React Context API
* **Routing:** React Router DOM (`react-router-dom`)
* **Build Tool:** Vite
* **Styling:** Native CSS with CSS Variables & Inter Font (Google Fonts)
* **Utilities:** `uuid` (for unique post IDs), `react-hot-toast` (notifications)
* **Deployment:** Vercel

---

📁 Project Architecture
The project follows a clean, modular architecture:

src/
├── components/
│   ├── BlogCard.jsx    # Individual article card UI
│   ├── BlogForm.jsx    # Reusable form for creating/editing posts
│   ├── BlogList.jsx    # Grid layout rendering all cards
│   └── Navbar.jsx      # Navigation & Theme toggle
├── context/
│   └── BlogContext.jsx # Global state management & CRUD logic
├── pages/
│   ├── Create.jsx      # New post page wrapper
│   ├── Edit.jsx        # Edit post page wrapper
│   ├── Home.jsx        # Landing page & list display
│   ├── Login.jsx       # Mock login screen
│   └── Signup.jsx      # Mock signup screen
├── utils/
│   └── localStorage.js # Helper functions for browser storage
├── App.jsx             # Main routing hub
├── main.jsx            # Application entry point
└── index.css           # Global styles and theme variables


## Learning Outcomes
This project was built to demonstrate proficiency in:

Handling complex global state without third-party libraries using Context API.

Synchronizing React state with external browser APIs (Local Storage).

Client-side routing and URL parameter extraction (React Router).

Building accessible, themeable UI components from scratch.

