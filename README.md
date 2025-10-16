# World Composting — Starter Site

This is a starter Next.js (App Router) project pre-wired for:
- Sanity CMS (schemas included)
- YouTube feed helper
- Contact form API route using Nodemailer
- Tailwind CSS basic setup
- Affiliate/shop page example

**How to use**
1. Unzip and push this repository to GitHub.
2. In GitHub, connect the repo to Vercel (Import Project).
3. Add the environment variables in Vercel:
   - `YOUTUBE_API_KEY`
   - `SANITY_PROJECT_ID`
   - `SANITY_DATASET=production`
   - `CONTACT_EMAIL` (Gmail address to receive form messages)
   - `CONTACT_EMAIL_PASS` (App password for Gmail)
4. Create a Sanity project separately and run the studio in its folder (see `/sanity`).
5. Deploy.

Files included: app/, src/, sanity/, package.json, README, .env.example
