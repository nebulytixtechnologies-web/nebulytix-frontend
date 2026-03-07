# Nebulytix Frontend

This is the frontend application for Nebulytix Technologies, built with React, Vite, and tailwindcss.

## 🚀 Technologies

* **Framework:** React 18, Vite
* **Routing:** React Router v6
* **State Management:** Redux Toolkit
* **Styling:** Tailwind CSS, Framer Motion
* **API Client:** Axios
* **Icons:** React Icons
* **Charts:** Recharts
* **Forms:** React Hook Form
* **Notifications:** React Hot Toast
* **Carousel:** Swiper

## 📦 Getting Started

### Prerequisites

* Node.js (v16 or higher)
* npm or yarn

### Installation

1.  **Clone the repository** (if applicable)

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Environment Variables**
    Create a `.env` file in the root directory based on the following variables:
    ```env
    VITE_API_URL=http://localhost:8080/api
    VITE_WHATSAPP_NUMBER=1234567890
    ```

4.  **Start the development server**
    ```bash
    npm run dev
    ```

5.  **Build for production**
    ```bash
    npm run build
    ```

## 📁 Project Structure

*   `/src/components/`: Reusable UI components (common, home, admin).
*   `/src/pages/`: Page components for application routes.
*   `/src/redux/`: Redux slices and store configuration.
*   `/src/services//:` API integration and authentication logic.
*   `/src/hooks/`: Custom React hooks (e.g., `useAuth`).
*   `/src/utils/`: Constants, helper functions.
*   `/src/router.jsx`: Application routing configuration.

## 🔒 Features

*   **Public Site:** Home, About, Services, Projects, Careers, Contact pages.
*   **Admin Dashboard:** Comprehensive dashboard for managing leads, projects, jobs, applications, and users.
*   **Authentication:** JWT-based secure authentication for Admin and Sub-Admin roles.
*   **Responsive Design:** Fully responsive UI suitable across all devices.
*   **Dynamic Forms:** Integrated forms with validation using React Hook Form.

## 📄 License
This project is proprietary and confidential.



# Nebulytix Frontend

Modern React frontend for Nebulytix Technologies - A software company website with admin dashboard.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 🔐 JWT authentication with role-based access
- 📊 Admin dashboard with analytics
- 📝 Lead management system
- 💼 Job postings and applications
- 🖼️ Project portfolio management
- 📱 Mobile-friendly interface
- ⚡ Fast performance with Vite

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Redux Toolkit
- React Router v6
- Framer Motion
- Recharts
- React Hook Form
- Axios

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install