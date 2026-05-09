# FinLens — Setup Guide

## Project Structure
```
finlens/
├── pages/
│   ├── landing.html      ← Screen 1: Landing / login
│   ├── onboarding.html   ← Screen 2: User profile setup
│   ├── dashboard.html    ← Screen 3: Home dashboard
│   ├── upload.html       ← Screen 4: Upload document
│   ├── analysis.html     ← Screen 5: AI analysis (the money screen)
│   └── visualizer.html   ← Screen 6: Future impact visualizer
├── components/
│   └── sidebar.js        ← Shared sidebar (auto-hydrates with Firebase user)
├── data/
│   └── sample-documents.js  ← All 5 sample docs with highlights + analogies
├── styles/
│   └── global.css        ← Design system (colors, typography, components)
├── firebase.js           ← Firebase Auth + Firestore helpers
└── README.md             ← This file
```

---

## Step 1 — Firebase Setup (required for auth + data saving)

1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add project** → name it `finlens` → create
3. In the left sidebar: **Authentication** → Get started → **Google** → Enable → Save
4. In the left sidebar: **Firestore Database** → Create database → **Start in test mode** → Next → Done
5. In Project settings (gear icon) → **General** → scroll to "Your apps" → click **</>** (Web)
6. Register app name `finlens-web` → **Register app**
7. Copy the `firebaseConfig` object shown
8. Open `firebase.js` and replace the placeholder config with your real values:

```js
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "finlens-xxxxx.firebaseapp.com",
  projectId: "finlens-xxxxx",
  storageBucket: "finlens-xxxxx.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

---

## Step 2 — Serve the files

These are plain HTML/JS/CSS files — no build step needed. You can serve them with any static server:

### Option A — VS Code Live Server (easiest)
1. Install the "Live Server" extension in VS Code
2. Right-click `pages/landing.html` → **Open with Live Server**

### Option B — Python (no install)
```bash
cd finlens
python3 -m http.server 8080
# Open: http://localhost:8080/pages/landing.html
```

### Option C — Node.js
```bash
cd finlens
npx serve .
# Open the URL shown
```

### Option D — Deploy to Firebase Hosting (production)
```bash
npm install -g firebase-tools
firebase login
firebase init hosting   # set public dir to "." (current folder)
firebase deploy
```

---

## Step 3 — Add Anthropic API key (when you have it)

When you get your API key, open `pages/analysis.html` and find the `runAnalysis()` function. Replace the static analysis with:

```js
const response = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'YOUR_API_KEY',  // ← add key here
    'anthropic-version': '2023-06-01'
  },
  body: JSON.stringify({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1000,
    messages: [{ role: 'user', content: YOUR_PROMPT }]
  })
});
```

**Important:** For production, never expose your API key in frontend code. Route it through a backend proxy or Firebase Cloud Function.

---

## Sample Documents Included

| Document | Type | Key flags |
|---|---|---|
| Visa Platinum Credit Card | Credit card agreement | 29.99% APR, 3% foreign fee, arbitration clause |
| Pay Stub Q4 2024 | Pay stub | 0% 401k with 5% match available |
| Federal Student Loan | Student loan | Interest capitalization, PSLF eligibility |
| TechCo Offer Letter | Job offer | Sign-on clawback, non-compete, equity vesting |
| Apartment Lease | Lease | No rent control, $150 late fee, lease-break penalty |

---

## Features Summary

- ✅ Google Sign-In via Firebase Auth
- ✅ User profile saved to Firestore
- ✅ Onboarding form (income, state, employment, goals, benefits)
- ✅ Estimated paycheck breakdown on onboarding
- ✅ 5 fully annotated sample documents
- ✅ Real file upload with drag-and-drop
- ✅ Clickable financial term highlights (danger/warn/good)
- ✅ "What this means" sidebar (personalized to user profile)
- ✅ Red flags list (clickable — links to glossary popup)
- ✅ Recommended actions sidebar
- ✅ Glossary popup with "Simple analogy" toggle
- ✅ Document / Raw text tab toggle
- ✅ Future impact visualizer with live Chart.js charts
- ✅ Credit card payoff calculator (real amortization math)
- ✅ "Minimum payments trap" visual
- ✅ Savings compound growth calculator
- ✅ 401(k) retirement calculator with employer match
- ✅ Debt timeline chart (4 scenarios)
- ✅ Sidebar persists user info across all pages
- ✅ Session storage for doc history and profile
- ✅ Demo mode (no login required)
