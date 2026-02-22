# 📋 Future FS 03

A modern, production-ready full-stack web application featuring comprehensive authentication, a dedicated dashboard, and a seamless backend integration.
[Features](#-features) • [Tech Stack](#-tech-stack) • [Architecture](#%EF%B8%8F-architecture) • [Getting Started](#-getting-started) • [Deployment](#-deployment)

---

## 📖 About
Future FS 03 is a highly responsive full-stack application that cleanly separates a React 18 frontend from a powerful, serverless Supabase backend. It features a beautifully styled UI using Tailwind CSS and shadcn/ui, and is completely type-safe end-to-end using TypeScript.

💡 *The application relies on Supabase for database, authentication, and edge functions, requiring zero local database installation.*

---

*Project Live URL: [https://bit.ly/4s2T45F](https://bit.ly/4s2T45F)*

---

## 🏗️ Architecture

```text
┌──────────────────────────────────────────────────────────────┐
│                        main.tsx                              │
│               (React Entry Point & Providers)                │
├──────────────────────────────┬───────────────────────────────┤
│         Public Routes        │       Protected Routes        │
│    (Index.tsx, Auth.tsx)     │       (Dashboard.tsx)         │
├──────────────────────────────┴───────────────────────────────┤
│                        React Query                           │
│                 (State & Data Management)                    │
├──────────────────────────────────────────────────────────────┤
│                   Supabase Client Layer                      │
│            (integrations/supabase/client.ts)                 │
├──────────────────────────────┬───────────────────────────────┤
│      Supabase Auth           │     Supabase PostgreSQL       │
│  (Session Management)        │       (Data Storage)          │
└──────────────────────────────┴───────────────────────────────┘
```

### 📁 Project Structure

```text
FUTURE_FS_03/
 │
 ├── 📂 src/                    # Frontend Source Code
 │    ├── 📂 components/        # Reusable UI components (shadcn/ui)
 │    ├── 📂 contexts/          # React Context providers (AuthProvider)
 │    ├── 📂 hooks/             # Custom React hooks
 │    ├── 📂 integrations/      # Supabase client and generated types
 │    ├── 📂 pages/             # Route-level components (Auth, Dashboard, Index)
 │    ├── App.tsx               # Main application routing
 │    └── main.tsx              # Application entry point
 │
 ├── 📂 Database/               # Backend & Database Configuration
 │    └── config.toml           # Supabase local configuration and migrations
 │
 ├── 📄 index.html              # HTML template
 ├── 📄 package.json            # Node dependencies and scripts
 ├── 📄 tailwind.config.ts      # Tailwind CSS configuration
 └── 📄 vite.config.ts          # Vite bundler configuration
```

---

## ✨ Features

- **🔐 Robust User Authentication:** Secure login, registration, and session management via Supabase.
- **📊 Interactive Dashboard:** Dedicated protected routes for authenticated users.
- **⚡ Modern Tech Stack:** Blazing fast build and development process via Vite.
- **🛡️ Type Safety:** Built end-to-end with TypeScript for maximum reliability.
- **🎨 Beautiful UI:** Pre-built, customizable UI using shadcn/ui and Tailwind CSS.
- **🌙 Dark Mode:** Themed UI out-of-the-box using `next-themes`.

---

## 💻 Tech Stack

- **Frontend:** React 18, Vite, TypeScript
- **Styling:** Tailwind CSS, shadcn/ui, Radix UI, Lucide React
- **Backend & Database:** Supabase (Auth, PostgreSQL)
- **Data Fetching:** TanStack React Query
- **Routing:** React Router DOM
- **Forms:** React Hook Form, Zod

---

## 🚀 Getting Started

Follow these steps to set up the frontend and connect it to your database locally.

### 📋 Prerequisites

Ensure you have the following installed:
- **Node.js** (v18.0 or higher recommended)
- **npm**, **yarn**, or **pnpm**
- A **Supabase** account

### 1️⃣ Database & Backend Setup (Supabase)

1. Go to [Supabase](https://supabase.com/) and create a new project.
2. Navigate to **Project Settings -> API** to find your **Project URL** and **anon key**.
3. (Optional) Apply any SQL schema migrations found in the `Database/` folder via the Supabase SQL Editor.

### 2️⃣ Frontend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/aaweshdas/FUTURE_FS_03.git
   cd FUTURE_FS_03
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env` file in the root directory and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your-supabase-url-here
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key-here
   ```

### 3️⃣ Running the Application

Start the local development server:
```bash
npm run dev
```
The application will be accessible at `http://localhost:8080` (or `http://localhost:5173`).

---

## 🌐 Deployment

### 🖥️ Deploying the Frontend
The frontend can be deployed seamlessly to platforms like Vercel, Netlify, or AWS.
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Environment Variables:** Ensure `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are configured in your hosting dashboard.

### ☁️ Deploying the Backend
Your backend lives on Supabase. As long as the database is active and the URL/Anon key are correctly provided to your deployed frontend, the integration will function perfectly in production.
