# Crowncraft Events

Marketing website for [Crowncraft Events](https://www.instagram.com/crowncraftevents2.o/), an event management company in Varanasi led by Director Abhiraj Kumar Chaudhary — weddings, corporate events, social events, cultural fests and sports events.

**Live site:** https://crowncraft-events.vercel.app

## Links

| What | Where |
|---|---|
| Live site | https://crowncraft-events.vercel.app |
| GitHub repo | https://github.com/abhishek250802/crowncraft-events |
| Vercel project (deployments, logs, analytics) | https://vercel.com/abhishek-e0b0/crowncraft-events |
| Leads (Google Sheet) | https://docs.google.com/spreadsheets/d/1yXPGcqdJPctW2e2d4x30H6aTc4iIqKm6xb41zpwEi-c/edit |
| Leads webhook (Apps Script project) | https://script.google.com/home/projects/1G7EwvaxYhY2OT-5b9rsNvDS0SFSEkaR3aGWF_mk1cbCoSdBQ_NQUDfDk/edit |
| Instagram | https://www.instagram.com/crowncraftevents2.o/ |

## Stack

Plain HTML/CSS/JS — no build step, no dependencies. Deployed on Vercel, auto-deploying from the `main` branch.

## Structure

```
index.html      # home — hero, highlights, upcoming event, teasers
about.html      # company story, stats, director profile
services.html   # service categories (sports, weddings, corporate, social, cultural, more)
gallery.html    # filterable photo gallery + lightbox
contact.html    # enquiry form (WhatsApp + email) + map
css/style.css   # styles
js/script.js    # nav, scroll reveal, gallery filter, lightbox, contact form
images/         # photos (images/uploads/ is a local scratch folder, gitignored)
favicon.svg
```

## Local development

Serve the folder with any static file server, e.g.:

```bash
npx serve .
```

## Editing content

- Each page's content lives directly in its own HTML file.
- The contact form (`contact.html`) builds a WhatsApp message and a mailto link client-side (`js/script.js`) — no backend required.

## Lead capture

Every contact form submission — and partial entries (name + phone filled, form abandoned) — is sent to a Google Apps Script webhook that appends a row to the **"Crowncraft Events - Leads"** Google Sheet (under `crowncrafte@gmail.com`). See `LEADS_WEBHOOK_URL` in `js/script.js`.

## Analytics

Vercel Web Analytics (free tier) is enabled via `<script defer src="/_vercel/insights/script.js">` on every page.
