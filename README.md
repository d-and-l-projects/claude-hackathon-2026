# FirstAdvisor

Most people sign financial documents they don't understand. A credit card agreement is 30 pages of legal language. A pay stub has deductions nobody explained. A lease has clauses that could cost thousands. A job offer buries real compensation behind jargon.

FirstAdvisor fixes that. It reads your financial documents the way a knowledgeable friend would — and explains what they actually mean for *you*, not a generic user.

---

## The problem

Financial literacy is treated like something you're supposed to already have. Schools don't teach it. Banks don't explain it. And by the time most people realize they signed something bad, it's too late.

The existing tools don't help much either. Generic AI assistants require you to know what to ask — which means you need the vocabulary you're trying to learn. Most financial education is passive — articles, videos, definitions. None of it is tied to the specific document sitting in front of you right now.

---

## What FirstAdvisor does

You upload a document. FirstAdvisor reads it, annotates it, and explains it — in plain English, personalized to your actual situation.

It does three things no generic tool does:

**1. Teaches while it explains**

Every risky clause, hidden fee, and important term is highlighted directly in the document. Click any highlight and you get a plain-English explanation. Click again and you get a simple everyday analogy — "think of the minimum payment like only mopping the edge of a flood." You leave understanding something you didn't before. That knowledge sticks for the next document too.

**2. Knows who you are**

FirstAdvisor isn't reading your document in a vacuum. It knows your income, your state, your employment type, whether you have student loans, what your financial goals are. That context changes everything. A 29.99% APR card means something different for someone with existing debt than for someone with no obligations. A rent price means something different for an hourly worker than a salaried one.

**3. Finds what you didn't know to look for**

The Blind Spot Detector is the core feature. After you upload a document, it cross-references your profile against the document to surface risks that are specific to your combination of circumstances — not generic warnings that apply to everyone and therefore feel relevant to no one.

> *"You contribute 0% to your 401(k), but your employer matches up to 5%. Based on your salary, you may be leaving $3,250/year — approximately $271,000 over your career — unclaimed."*

> *"Your rent is 54% of your estimated take-home pay. As an hourly worker with variable income, one slow week could leave you unable to cover it without going into debt."*

> *"You already have student loans. This credit card's 29.99% APR creates a second high-interest obligation competing for the same income. This is one of the most common financial traps for people early in their careers."*

That kind of specificity is only possible because it knows the person behind the document.

---

## Supported documents

- **Pay stubs and W-2s** — breaks down gross-to-net, flags missing 401(k) match, identifies withholding issues, surfaces the gap between what you earn and what you keep
- **Credit card agreements** — flags APR, hidden fees, cash advance traps, penalty rate triggers, grace period details
- **Student loan offers** — explains capitalization, deferment risks, income-driven repayment, PSLF eligibility, the difference between subsidized and unsubsidized
- **Job offer letters** — extracts real total compensation (base + equity + benefits + match), flags non-compete clauses, sign-on clawbacks, at-will terms
- **Apartment leases** — identifies rent burden relative to your income, late fee structures, early termination penalties, rent control exemptions

Any financial document can be uploaded. The AI reads the image directly — no formatting required, handwritten documents supported.

---

## The Blind Spot Detector

This is the feature that separates FirstAdvisor from a document summarizer.

A document summarizer tells you what a document says. The Blind Spot Detector tells you what the document means *for you* — by combining what it found in the document with what it knows about your life.

The logic works by cross-referencing fields: your income against your rent, your employment type against your tax situation, your existing debt against the new debt you're considering, your age against the retirement contributions you're not making. Each combination produces a different insight. The same lease shown to two different people generates two different analyses.

Results include a financial awareness score, severity-ranked blind spots, dollar-impact estimates, explanations of why each issue matters, and specific action steps — not generic advice, but steps calibrated to your situation.

A second tab shows example profiles (fictional people in real scenarios) so users can see what blind spots look like before their own data is ready.

---

## Future impact visualizer

Understanding a document is step one. Understanding what it costs you over time is step two.

The visualizer shows:

- **If you only pay the minimum** — how long it takes to pay off a balance, and how much extra you pay in interest. On a $3,500 balance at 29.99% APR, paying the minimum takes 42 months and costs $1,847 in interest. Paying $200/month cuts that to 21 months and $612.
- **Savings compounding** — how monthly savings grow over time, splitting contributions from interest earned
- **401(k) retirement modeling** — what different contribution rates produce at retirement, with and without employer match
- **Financial snapshot** — an overall picture of where you stand across debt, savings, and retirement

All calculators use sliders with live updates. The goal is to make the abstract — "compound interest" — concrete: here is the number, here is what changes when you move this slider.

---

## Who it's for

FirstAdvisor was built for people who are navigating adult financial life for the first time — first job, first apartment, first credit card, first loan — without a background in finance and without someone to ask.

It's for the 22-year-old who got a job offer and doesn't know what "4-year vest with 1-year cliff" means. The student who signed a loan without understanding that interest starts accruing immediately. The hourly worker who rented an apartment where rent is 60% of their take-home. The new employee who has been at their job for two years and never enrolled in their 401(k) because nobody told them the employer would match it.

These aren't unusual situations. They're the default for most people. FirstAdvisor treats that as a design problem, not a personal failing.

---

## Running the project

FirstAdvisor is a static web app — no build step, no bundler.

**Requirements**
- A Google account (for Firebase)
- A Google AI Studio account (for Gemini)
- Any static file server for local development

**1. Clone and serve locally**
```bash
git clone https://github.com/your-username/firstadvisor.git
cd firstadvisor
python3 -m http.server 3000
# or: npx serve .
```
Open `http://localhost:3000/pages/auth.html`

**2. Add your Gemini API key**

Get a key at [aistudio.google.com](https://aistudio.google.com). In `pages/upload.html`, find:
```javascript
const GEMINI_API_KEY = 'YOUR_KEY_HERE';
const GEMINI_MODEL   = 'gemini-2.0-flash';
```
Replace with your key.

**3. Set up Firebase**

Create a project at [console.firebase.google.com](https://console.firebase.google.com). Enable Authentication (Google + Email/Password) and Firestore. Copy your config object into `firebase.js`:
```javascript
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  ...
};
```
---

## License

MIT — do whatever you want with it, just don't use it to give people bad financial advice.


---

Built for people who were never taught how money works.
