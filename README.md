# R.E.I.D — Landing Page

**Repair Engine for Identification & Diagnostics**
SMS-powered vehicle record system for mechanics.

Built with **SvelteKit + Svelte 5** (runes) and **Supabase**.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up Supabase credentials
cp .env.example .env
# Edit .env with your Supabase URL and anon key

# 3. Run the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Supabase Setup

Run this SQL in your Supabase SQL Editor to create the waitlist table:

```sql
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone_number TEXT NOT NULL UNIQUE,
  shop_name TEXT,
  state TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for the landing page form)
CREATE POLICY "Allow anonymous inserts" ON waitlist
  FOR INSERT WITH CHECK (true);

-- Prevent anonymous reads (protect user data)
CREATE POLICY "Deny anonymous reads" ON waitlist
  FOR SELECT USING (false);
```

---

## Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── Topbar.svelte       # Fixed nav with CTA
│   │   ├── Hero.svelte         # Main hero with animated entrance
│   │   ├── Stats.svelte        # 100% SMS / <3s / 0 Apps
│   │   ├── PhoneDemo.svelte    # Animated SMS phone mockup
│   │   ├── Features.svelte     # 4-card feature grid
│   │   ├── HowItWorks.svelte   # Step timeline (dark section)
│   │   ├── SignupForm.svelte   # Waitlist form → Supabase
│   │   └── Footer.svelte       # Footer
│   ├── stores/
│   │   ├── scenarios.js        # Mock SMS conversation data
│   │   └── states.js           # US state abbreviations
│   ├── supabase/
│   │   └── client.js           # Supabase client init
│   └── index.js                # Barrel exports
├── routes/
│   ├── +layout.svelte          # Global styles, fonts, CSS vars
│   └── +page.svelte            # Main page composing components
└── app.html                    # SvelteKit HTML template
```

---

## Phone Demo Scenarios

The interactive phone mockup cycles through 4 real workflow scenarios from the R.E.I.D n8n automation:

1. **VIN Lookup** — Text a VIN, get decoded vehicle info + service history
2. **Add Record** — Log work with natural language, confirm with last VIN
3. **New User** — First-time profile creation via text
4. **Photo VIN** — OCR scan of a VIN plate photo

VINs and names are blurred in the demo for privacy.

---

## Color Palette

| Token        | Value       | Usage                    |
|------------- |------------ |------------------------- |
| `--off-white`| `#F5F0EB`   | Page background          |
| `--green`    | `#1B7A3D`   | Primary / CTA / Success  |
| `--red`      | `#C62828`   | Accent / Alerts          |
| `--yellow`   | `#F9A825`   | Accent / Highlights      |
| `--black`    | `#111111`   | Text / Dark sections     |

---

## Build & Deploy

```bash
npm run build
npm run preview  # test production build locally
```

Works with any SvelteKit adapter (Vercel, Netlify, Node, static).
