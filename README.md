# BrandGuard AI — Vercel-ready

A responsive, light-theme brand governance and content assurance web app. It includes a content auditor, approved/prohibited vocabulary, required messaging, claims checks, brand voice and editorial guidelines, approved asset register, human approval queue, review history and recurring-issue analytics.

## Run locally

Requirements: Node.js 20+ and npm.

```bash
npm install -g vercel
cd brandguard-ai
vercel dev
```

Open the local URL printed by Vercel CLI. The rules engine works without credentials. To enable contextual AI review, create `.env` (copy `.env.example`) and add your OpenRouter API key. Keep `.env` private and never commit it.

## Deploy to Vercel

1. Extract this ZIP and push the `brandguard-ai` folder to a GitHub repository.
2. In Vercel, select **Add New → Project**, import the repository, and deploy. The project is static HTML/CSS/JS with Vercel serverless functions; no build command is required.
3. Optional: in Project Settings → Environment Variables, add `OPENROUTER_API_KEY`, `OPENROUTER_MODEL`, and `OPENROUTER_SITE_URL`.
4. Redeploy after adding or changing environment variables.

## How the platform works

- Rules-based mode checks prohibited phrases, missing required phrases, risky superlatives/guarantees, numerical claims needing evidence, all-caps and repeated punctuation.
- AI-assisted mode runs the same deterministic checks, then asks the configured OpenRouter model for contextual findings. If the provider is unavailable, the rules-based findings are still returned.
- Every finding includes a category, severity, excerpt, explanation, recommended action, source and confidence.
- Users can save a draft, submit a review for approval, approve it or request changes. The final decision remains with a human reviewer.
- Guideline and review information is stored in browser localStorage in this starter edition. It is not shared across accounts/devices and is not a secure multi-user database. Do not store sensitive/confidential content in a shared browser profile.

## Supported content formats

The browser editor accepts pasted text and local `.txt`, `.md`, `.csv`, `.json`, `.html`, and `.xml` files. PDF, DOCX, images and complex design files are not parsed in this starter build; extract their text first and paste it into the editor. The asset library records approved asset metadata and usage rules; pixel-level image matching is not implemented.

## Important limitations

- This is a working hackathon MVP, not a certified legal, factual, accessibility or regulatory compliance system.
- Numeric/superiority claim findings mean "verify evidence", not "false".
- Accessibility and visual identity are included in the guideline and asset governance workflow but are not yet automatically scanned from uploaded designs.
- Local browser storage is not suitable for confidential multi-user production use. Add an authenticated database and access controls before organizational deployment.
- Reviewers should verify every recommendation and approve content before publication.
