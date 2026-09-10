# AR Real Estate Broker List Platform

A broker listing web system built with Next.js, Tailwind CSS, and Supabase,
designed to help real estate brokers showcase properties and projects,
manage listings, and track client inquiries through an integrated
dashboard.

🌐 Live site: [ar-realestate-redsea.com](https://ar-realestate-redsea.com)

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com)
- [Supabase](https://supabase.com) — Postgres database, file storage, and
  Auth (for the admin dashboard login)
- [Google reCAPTCHA v3](https://developers.google.com/recaptcha) on the
  public contact/enquiry forms

> **Note for AI coding agents:** this project pins a Next.js version with
> real breaking changes vs. older training data (e.g. `middleware.ts` was
> renamed to `proxy.ts`). See [AGENTS.md](AGENTS.md) and
> [CLAUDE.md](CLAUDE.md) before making changes.

## System overview

The system is divided into two main parts:

### 🔹 Client side (public website)

A complete front-facing website for the broker, including:

- Home page
- About us
- Destinations — all destinations, and a detail page per destination
- Projects — all projects, and a detail page per project
- Properties — browsable/filterable listing, and a detail page per unit
- Contact us
- Privacy policy

**Features:**

- Browse properties by destination and project, with search/filter (price,
  type, listing type)
- Send booking/viewing requests via a contact form, protected by reCAPTCHA
- Direct call/WhatsApp contact integration
- Mobile responsive
- SEO optimized — dynamic sitemap, robots.txt, and JSON-LD structured data
- Rebrandable in minutes via [siteConfig.js](siteConfig.js) — branding,
  contact info, and the full catalogue of destinations/projects live there

### 🔸 Admin side (`/dashboard`)

A private dashboard for the broker to manage listings and leads:

- Overview — stats on units and requests
- Units — add, edit, and delete property listings (stored in Supabase)
- Requests — view, mark read, delete, and export (Excel) incoming enquiries

Access is protected by a real **Supabase Auth** user — there's no
hardcoded username/password. To create the admin's login, add a user in
your Supabase project under **Authentication → Users**, then sign in at
`/dashboard` with that email and password.

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy the example file and fill in real values:

```bash
cp .env.local.example .env.local
```

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon/public key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service-role key — **server-only, never expose this to the client** |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Google reCAPTCHA v3 site key |
| `RECAPTCHA_SECRET_KEY` | Google reCAPTCHA v3 secret key |

Your Supabase project needs a `units` table and a `unit_form_requests`
table, plus a `property-images` storage bucket — see
[lib/mapUnit.ts](lib/mapUnit.ts) and [types/unit.ts](types/unit.ts) for the
`units` shape the app expects.

reCAPTCHA verification is skipped automatically in local development
(`NODE_ENV=development`), so the two env vars above are only required in
production.

### 3. Run the dev server

```bash
npm run dev
```

The site runs at [http://localhost:3000](http://localhost:3000), the
dashboard at [http://localhost:3000/dashboard](http://localhost:3000/dashboard).

## Available scripts

```bash
npm run dev      # start the dev server
npm run build    # production build
npm run start    # run a production build locally
npm run lint      # run ESLint
```

## Project structure

```
app/
  (site)/        # public website pages (route group — no "/site" in the URL)
  dashboard/      # admin dashboard pages
  api/           # API route handlers (contact, enquiry, upload, dashboard CRUD, auth)
components/
  dashboard/     # dashboard-only UI (forms, tables, inputs)
  layout/        # navbar, footer
  sections/      # marketing page sections
  ui/            # shared UI (cards, sliders, animations, phone input)
lib/             # Supabase clients and small server-side helpers
types/           # shared TypeScript types
siteConfig.js    # branding, contact info, destinations & projects catalogue
proxy.ts         # edge-layer auth check for the dashboard (Next's renamed middleware)
```
