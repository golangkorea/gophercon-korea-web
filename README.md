# GopherCon Korea Web Monorepo

This project is a monorepo for managing GopherCon Korea websites.

## Tech Stack

- **Package Manager**: PNPM Workspaces
- **Language**: TypeScript
- **Linting/Formatting**: ESLint, Prettier

## Project Structure

- `apps/`: Contains the website applications for each year.
  - `gophercon-korea-web-23`: Next.js
  - `gophercon-korea-web-24`: Next.js
  - `gophercon-korea-web-25`: React
- `packages/`: Contains shared packages used across multiple apps.
  - `gophercon-common`: Common components and utilities

## Getting Started

### 1. Install Dependencies

Run the following command from the project root directory.

```bash
pnpm install
```

### 2. Build Shared Packages

You must build the `gophercon-common` package first so that other apps can use it.

```bash
pnpm --filter gophercon-common build
```

### 3. Run Development Server

Run the development server for a specific year's website.

```bash
# Run the 2025 website
pnpm dev:25
```

## Deployment

Each application in the apps directory can be deployed separately to Vercel.
When setting up a new Vercel project, make sure to configure it from the monorepo root.

### Build & Development Settings

Here are the recommended settings for each project on Vercel:

#### gophercon-korea-web-25 (Create React App)

- Build Command: `pnpm build:25`
- Output Directory: `apps/gophercon-korea-web-25/build`

#### gophercon-korea-web-24 (Next.js)

- Build Command: `pnpm build:24`
- Output Directory: `.next`
  (Vercel will automatically detect this when the framework is set to Next.js)

#### gophercon-korea-web-23 (Next.js)

- Build Command: `pnpm build:23`
- Output Directory: `.next`
  (Vercel will automatically detect this when the framework is set to Next.js)

The `build:*` scripts in the root package.json ensure that both the target application and its local dependencies (like gophercon-common) are built correctly.
