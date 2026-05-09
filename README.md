# FirstAdvisor — Setup Guide

## Project Structure
```
firstadvisor/
├── pages/
│   ├── landing.html      ← Landing / Google sign-in
│   ├── onboarding.html   ← User profile (income, state, goals)
│   ├── dashboard.html    ← Home dashboard
│   ├── upload.html       ← Upload document (with privacy warning)
│   ├── analysis.html     ← AI analysis — clickable highlights + glossary popup
│   ├── visualizer.html   ← Future impact charts
│   └── glossary.html     ← Financial terms with official sources
├── components/
│   └── sidebar.js        ← Shared sidebar (logo links to dashboard)
├── data/
│   └── sample-documents.js  ← 5 sample docs with highlights + analogies
├── styles/
│   └── global.css        ← Design system
├── firebase.js           ← Firebase Auth + Firestore
└── README.md
```

---

## Step 1 — Firebase Setup

### A) Create project
1. Go to https://console.firebase.google.com
2. Click "Add project" → name it `firstadvisor` → Create

### B) Enable Google Sign-In
1. Left sidebar → Authentication → Get started
2. Sign-in method → Google → Enable → Save

### C) Enable Firestore
1. Left sidebar → Firestore Database → Create database
2. Choose "Start in test mode" → Next → Done

### D) Get your config
1. Project Settings (gear icon) → General → scroll to "Your apps"
2. Click </> (Web) → name it "firstadvisor-web" → Register app
3. Copy the firebaseConfig object

### E) Paste config into firebase.js
```js
const firebaseConfig = {
  apiKey: "AIza...",           // ← your actual values
  authDomain: "firstadvisor-xxxxx.firebaseapp.com",
  projectId: "firstadvisor-xxxxx",
  storageBucket: "firstadvisor-xxxxx.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

### F) ⚠️ CRITICAL — Add authorized domains (fixes "nothing happens on sign-in")
1. Firebase Console → Authentication → Settings → Authorized domains
2. Click "Add domain" → add: `localhost`
3. Click "Add domain" again → add: `127.0.0.1`
4. If using a different port (like 5500), still just add the hostname above — port isn't needed

---

## Step 2 — Serve files locally

### Option A — VS Code Live Server (recommended)
1. Install "Live Server" extension
2. Right-click `pages/landing.html` → "Open with Live Server"
3. It opens at http://127.0.0.1:5500/pages/landing.html

### Option B — Python
```bash
cd firstadvisor
python3 -m http.server 8080
# Open: http://localhost:8080/pages/landing.html
```

### Option C — Node
```bash
npx serve .
```

---

## Step 3 — Testing the upload flow (minimal API usage)

The app currently uses static sample documents — **no API calls are made** during upload/analysis. This lets you test the full flow for free:

1. Go to Upload page
2. Select any sample document (credit card, pay stub, etc.)
3. Click "Analyze document" → watch progress bar
4. App routes to Analysis page with pre-loaded highlights, glossary, and sidebar
5. Click any highlighted term → glossary popup opens
6. Click "Show me a simple analogy" → analogy reveals (no API call)

When you're ready to add real AI analysis:
- Get an Anthropic API key at https://console.anthropic.com
- Add it to `analysis.html` in the `runAnalysis()` function (see comments there)
- For production: route through a backend (never expose API keys in frontend)

---

## Firebase Auth Troubleshooting

| Symptom | Fix |
|---|---|
| Clicking "Continue with Google" does nothing | Add `localhost` and `127.0.0.1` to Firebase authorized domains |
| Popup appears then immediately closes | Same as above — unauthorized domain |
| "auth/unauthorized-domain" error | Same fix |
| Error message shown in modal | Check the exact error text — it will tell you what's wrong |
| Works locally but not deployed | Add your deployed domain to authorized domains |

---

## Sample Documents Included

| Document | Key flags |
|---|---|
| Visa Platinum Credit Card | 29.99% APR, 3% foreign fee, arbitration clause, $95 annual fee |
| Pay Stub Q4 2024 | 0% 401k contribution with 5% employer match available |
| Federal Student Loan | Interest capitalization, PSLF eligibility, income-driven repayment |
| TechCo Offer Letter | Sign-on clawback, 4-year equity cliff, non-compete, total comp breakdown |
| Apartment Lease | AB 1482 exemption, $150+$15/day late fees, $4,200 lease-break penalty |
