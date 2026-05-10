# FirstAdvisor

**AI-powered financial document literacy for people who never learned this stuff.**

FirstAdvisor helps you understand financial documents before they become expensive mistakes. Upload a pay stub, credit card agreement, lease, loan offer, or job offer — and get plain-English explanations, personalized risk flags, and actionable steps, all cross-referenced against your actual financial profile.

---

## What it does

Most people sign financial documents they don't fully understand. FirstAdvisor changes that by combining three things:

- **Document analysis** — AI reads your uploaded document and annotates it with risk highlights, plain-English explanations, and clickable glossary terms
- **Personalized blind spot detection** — cross-references your profile (income, employment type, age, goals, state) with the document to surface risks that apply specifically to *you*, not a generic user
- **Future impact visualization** — interactive calculators showing how today's financial decisions (APR, minimum payments, 401k contributions, rent burden) compound over time

---

## Pages

| File | Route | Purpose |
|---|---|---|
| `landing.html` | `/` | Marketing landing page |
| `auth.html` | `/auth` | Sign in / create account (Firebase) |
| `onboarding.html` | `/onboarding` | Profile setup — income, employment, goals, state |
| `dashboard.html` | `/dashboard` | Overview with charts: flags by doc, goals ring, risk donut, awareness bars |
| `upload.html` | `/upload` | Upload a document or pick a sample; triggers Gemini vision analysis |
| `analysis.html` | `/analysis` | Annotated document viewer, red flags sidebar, glossary popups, Blind Spot Scan panel |
| `visualizer.html` | `/visualizer` | Interactive financial calculators (debt payoff, savings growth, 401k, rent burden) |
| `glossary.html` | `/glossary` | Searchable financial term dictionary |

---

## Key features

### Document analysis
- Supports PDF, PNG, JPG, GIF, WEBP
- Gemini Vision reads uploaded images — no separate OCR needed, handwritten documents supported
- Document text is annotated with color-coded highlights: red (danger), amber (caution), green (positive)
- Every highlighted term is clickable — opens a glossary popup with a plain-English explanation and optional simple analogy

### Blind Spot Detector
The flagship feature. After document analysis, a floating **Blind Spot Scan** button appears. It cross-references your onboarding profile with the document to find risks generic AI wouldn't catch:

- 0% 401(k) contribution when employer offers a match → calculates exact dollars missed per year
- High APR card when you already have student loans → flags double-debt squeeze risk
- Rent over 30% of take-home for an hourly worker → flags income variability risk
- Gig/1099 employment → calculates estimated self-employment tax owed quarterly
- Non-compete clause → checks your state's enforcement rules

Results include a score (0–100), severity labels, impact amounts, "why this matters" explanations, and specific action steps. A second tab shows example profiles so users can see what blind spots look like before their own data is entered.

### Future impact visualizer
Four interactive calculators with live sliders:
- **Credit card payoff** — months to debt freedom and total interest at any payment amount, with minimum payment warning
- **Savings growth** — compound growth chart splitting contributions vs. interest earned
- **401(k) retirement** — employer match modeling, salary input, years to retirement
- **Financial snapshot** — overall score breakdown across debt health, savings rate, and retirement readiness

### Sample documents
Five built-in annotated documents for users without files ready:
- Visa Platinum Credit Card Agreement (29.99% APR, foreign transaction fees, penalty APR)
- Pay Stub / W-2 (0% 401k with available match — the classic missed opportunity)
- Federal Direct Student Loan (unsubsidized, interest capitalization, IDR options)
- Job Offer Letter (RSUs, non-compete, 401k match, total comp breakdown)
- Apartment Lease (rent burden, late fees, early termination penalty, rent control exemption)

---

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | Vanilla HTML, CSS, JavaScript (ES modules) |
| AI document reading | Google Gemini 2.0 Flash (vision — reads uploaded images) |
| Authentication | Firebase Auth (Google OAuth + email/password) |
| Database | Firestore (document history, user profiles) |
| Fonts | DM Sans + DM Mono (Google Fonts) |
| Icons | Tabler Icons |
| Hosting | Firebase Hosting (or Vercel/Netlify) |

No framework. No build step. No bundler. Drop the files on any static host and it works.

---

## Project structure

```
firstadvisor/
├── pages/
│   ├── dashboard.html
│   ├── upload.html
│   ├── analysis.html
│   ├── visualizer.html
│   ├── onboarding.html
│   ├── auth.html
│   └── glossary.html
├── components/
│   └── sidebar.js          # Shared sidebar rendered on every page
├── data/
│   └── sample-documents.js # 5 annotated sample docs with highlights + actions
├── styles/
│   └── global.css          # Design system: tokens, layout, components
├── images/
│   └── bear.png            # Logo / favicon
├── firebase.js             # Auth, Firestore read/write, requireAuth guard
├── env/
│   ├── .env.local          # ← your secrets (never commit)
│   └── .env.example        # ← safe to commit, no real values
└── README.md
```

---

## Local setup

**1. Clone the repo**
```bash
git clone https://github.com/your-username/firstadvisor.git
cd firstadvisor
```

**2. Create your env file**
```bash
cp env/.env.example env/.env.local
```
Fill in `env/.env.local` with your actual keys (see below).

**3. Serve locally**

Any static file server works. Simplest options:
```bash
# Python
python3 -m http.server 3000

# Node
npx serve .

# VS Code
# Install "Live Server" extension → right-click index.html → Open with Live Server
```

Open `http://localhost:3000/pages/auth.html` to start.

---

## Firebase setup

### 1. Create a project
Go to [console.firebase.google.com](https://console.firebase.google.com) → Add project → name it `firstadvisor`.

### 2. Enable Authentication
Build → Authentication → Get started → Sign-in method → enable **Google** and **Email/Password**.

### 3. Enable Firestore
Build → Firestore Database → Create database → Start in test mode (lock down rules before going to production).

### 4. Get your config
Project Settings → Your apps → Add app → Web → Register → copy the `firebaseConfig` object.

### 5. Paste config into firebase.js
Find this block in `firebase.js` and replace the placeholder values:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### 6. Add your domain to authorized domains
Authentication → Settings → Authorized domains → Add domain → add `localhost` for local dev and your production URL when deployed.

---

## Gemini API setup

FirstAdvisor uses **Gemini 2.0 Flash** to read uploaded document images.

**1. Get a key**
Go to [aistudio.google.com](https://aistudio.google.com) → Get API key → Create API key.

**2. Add it to upload.html**
Find this line near the top of the `<script>` block in `upload.html`:
```javascript
const GEMINI_API_KEY = 'YOUR_KEY_HERE';
const GEMINI_MODEL   = 'gemini-2.0-flash';
```

⚠️ **For production**: move the Gemini call to a server-side function (Firebase Functions, Vercel Edge, Cloudflare Worker) so your key is never exposed in client-side code. For a hackathon or demo, the client-side key is fine.

---

## Environment variables

```
# env/.env.local — never commit this file

GEMINI_API_KEY=AIzaSy...
FIREBASE_API_KEY=AIzaSy...
FIREBASE_AUTH_DOMAIN=firstadvisor-xxx.firebaseapp.com
FIREBASE_PROJECT_ID=firstadvisor-xxx
FIREBASE_STORAGE_BUCKET=firstadvisor-xxx.appspot.com
FIREBASE_MESSAGING_SENDER_ID=123456789
FIREBASE_APP_ID=1:123456789:web:abc123
```

Add to `.gitignore`:
```
env/.env.local
env/.env.*
!env/.env.example
```

---

## Data flow

```
User uploads document
        ↓
Gemini Vision API reads image
        ↓
Returns JSON: { name, type, rawText, highlights, actions, meaning }
        ↓
Saved to Firestore (per user) + localStorage cache
        ↓
analysis.html reads doc + user profile from localStorage
        ↓
Blind Spot Detector cross-references both
        ↓
Personalised risk insights rendered
```

User profile (from onboarding) is saved to:
- Firestore: `users/{uid}/profile`
- localStorage: `firstAdvisor:{uid}:userProfile`
- sessionStorage: `userProfile` (for same-tab access)

Document history is saved to:
- Firestore: `users/{uid}/documents`
- localStorage: `firstAdvisor:{uid}:docHistory`

---

## Deploying

**Firebase Hosting**
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Public directory: . (project root)
# Single-page app: No
# GitHub deploys: optional
firebase deploy
```

**Vercel**
```bash
npx vercel --prod
```
Or drag the project folder to [vercel.com/new](https://vercel.com/new).

**Netlify**
Drag the project folder to [app.netlify.com/drop](https://app.netlify.com/drop).

---

## Firestore security rules (production)

Replace the default test mode rules before going live:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

---

## Privacy

FirstAdvisor is designed with privacy in mind:

- Documents are processed by Gemini and the extracted text is stored in Firestore — the original image file is **never stored**
- Users are warned before upload to redact SSNs, bank account numbers, routing numbers, and credit card numbers
- All data is scoped to the authenticated user — no cross-user data access
- Firebase Auth handles all credential management — no passwords are stored by FirstAdvisor

---

## Roadmap

- [ ] PDF text extraction (skip vision for text-based PDFs)
- [ ] Push notifications for document expiry reminders (lease end dates, card fee dates)
- [ ] Side-by-side document comparison (compare two job offers, two credit cards)
- [ ] Export analysis as PDF report
- [ ] Mobile app (React Native or PWA)
- [ ] Salary benchmarking — compare your pay stub against BLS data for your role and state
- [ ] Multi-document blind spot scan (analyze all your docs together)

---

## License

MIT — do whatever you want with it, just don't use it to give people bad financial advice.

---

Built for people who were never taught how money works.
