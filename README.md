# Full-Stack Web Application

A modern, production-ready full-stack web application. The architecture is cleanly separated into a highly responsive frontend and a powerful, serverless backend and database architecture.

## Architecture Overview

- **Frontend:** React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui.
- **Backend & Database:** Supabase (PostgreSQL Database, Authentication, Storage, Edge Functions).

## Features

- **Robust User Authentication:** Secure login, registration, and session management.
- **Interactive Dashboard:** Dedicated protected routes (`Dashboard.tsx`) for authenticated users.
- **Modern Tech Stack:** Fast build and development process via Vite.
- **Type Safety:** Built end-to-end with TypeScript for maximum reliability.
- **Beautiful UI Components:** Pre-built, customizable UI using shadcn/ui and Tailwind CSS.
- **State Management:** Efficient data fetching and caching with TanStack React Query.
- **Dark Mode Support:** Themed UI using `next-themes`.

---

## 🚀 Getting Started

Follow these steps to set up the frontend, backend, and database locally on your machine.

### Prerequisites

Ensure you have the following installed on your local machine:
- **Node.js** (v18.0 or higher recommended)
- **npm**, **yarn**, or **pnpm**
- A **Supabase** account (for Backend & Database services)

### 1. Database & Backend Setup (Supabase)

This application relies on Supabase for its database (PostgreSQL) and backend services (Auth/API).

1. Go to [Supabase](https://supabase.com/) and create a new project.
2. Once the project is created, navigate to **Project Settings -> API** to find your **Project URL** and **anon key**.
3. (Optional) Run any necessary SQL schema migrations supplied within the `supabase/` folder in your Supabase project's SQL Editor to set up the required tables.

### 2. Frontend Setup

1. Clone the repository to your local machine:
   ```sh
   git clone https://github.com/aaweshdas/FUTURE_FS_03.git
   cd FUTURE_FS_03
   ```

2. Install the necessary Node dependencies:
   ```sh
   npm install
   ```

3. Configure your Environment Variables:
   Create a `.env` file in the root directory and add your Supabase credentials obtained in the backend setup step:

   ```env
   VITE_SUPABASE_URL=your-supabase-url-here
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key-here
   ```

### 3. Running the Application

Once both the Backend/DB is configured and the Frontend dependencies are installed, you can start the application locally:

```sh
npm run dev
```

The frontend client will spin up and be accessible in your browser (typically at `http://localhost:8080` or `http://localhost:5173`). It will automatically connect to your hosted Supabase Database and Backend.

---

## Project Structure

```text
FUTURE_FS_03/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images, SVGs, etc.
│   ├── components/         # Reusable UI components (including shadcn/ui)
│   ├── contexts/           # Context providers (e.g., AuthProvider)
│   ├── hooks/              # Custom React hooks
│   ├── integrations/       # Backend integrations (Supabase setup config)
│   ├── lib/                # Utility functions
│   ├── pages/              # Route-level components (Auth, Dashboard, Index)
│   ├── App.tsx             # Main application component & routing setup
│   ├── main.tsx            # React application entry point
│   └── index.css           # Global Tailwind styles
├── supabase/               # Backend edge functions or migration scripts
├── package.json            # Project dependencies and operational scripts
├── tailwind.config.ts      # Tailwind CSS configuration
└── vite.config.ts          # Vite bundler configuration
```

## Available Scripts

In the project directory, you can also run:

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the app for production, creating a `dist` folder.
- `npm run preview`: Locally preview the production build output.
- `npm run lint`: Lints the source code using ESLint.

## Deployment

### Deploying the Frontend
The frontend can be deployed easily to CI/CD platforms like [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or AWS. Set the build command to `npm run build`, the output directory to `dist`, and ensure your `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are added to the environment variables on the hosting provider.

### Deploying the Backend
Your backend lives on Supabase. As long as the database is active and the URL/Anon key are correctly provided to the built frontend, the backend will function fully in production.
