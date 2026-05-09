// sample-documents.js
// Full text content for all sample documents used in the app

export const SAMPLE_DOCUMENTS = {

  credit_card: {
    id: "credit_card",
    name: "Visa Platinum — Credit Card Agreement",
    filename: "visa_platinum_agreement.pdf",
    type: "Credit Card Agreement",
    icon: "ti-credit-card",
    badge: "Popular",
    rawText: `VISA PLATINUM CREDIT CARD AGREEMENT
Capital One Financial Services, N.A.
Effective Date: January 1, 2024

INTEREST RATES AND INTEREST CHARGES
Annual Percentage Rate (APR) for Purchases: 29.99%
This APR will vary with the market based on the Prime Rate.

APR for Balance Transfers: 29.99%
APR for Cash Advances: 34.99%
Penalty APR and When It Applies: 34.99%
This APR may be applied to your account if you make a late payment.

How to Avoid Paying Interest: Your due date is at least 25 days after the close of each billing cycle. We will not charge interest on purchases if you pay your entire balance by the due date each month. We will begin charging interest on cash advances and balance transfers on the transaction date.

Minimum Interest Charge: If you are charged interest, the charge will be no less than $2.00.

FEES
Annual Fee: $95
Balance Transfer Fee: Either $5 or 3% of the amount of each transfer, whichever is greater.
Cash Advance Fee: Either $10 or 5% of the amount of each cash advance, whichever is greater.
Foreign Transaction Fee: 3% of each transaction in U.S. dollars.
Late Payment Fee: Up to $40
Over-the-Credit-Limit Fee: None
Returned Payment Fee: Up to $40

MINIMUM PAYMENT
Your minimum payment will be the greater of:
(a) $35.00, or
(b) 2% of your New Balance shown on your billing statement

WARNING: Making only the minimum payment will increase the amount of interest you pay and the time it takes to repay your balance. For example, making only the minimum payment of $35 on a balance of $3,500 at 29.99% APR will take approximately 15 years to pay off and cost approximately $4,823 in interest.

CREDIT LIMIT
Your initial credit limit: $5,000
We reserve the right to decrease your credit limit at any time.

REWARDS PROGRAM
1.5% cash back on all purchases. Rewards have no expiration date. Minimum redemption: $25.

ARBITRATION CLAUSE
This agreement includes a binding arbitration clause which affects your rights. You waive your right to participate in class action lawsuits.`,

    highlights: [
      { term: "Annual Percentage Rate (APR) for Purchases", level: "danger", explanation: "This is how much extra you pay each year for borrowing money. At 29.99%, if you carry a $1,000 balance for a year, you'll owe nearly $300 extra — just in interest.", analogy: "Think of APR like a rental fee for borrowed money. At 29.99%, borrowing $1,000 is like renting a bike for $25/month but you never get to keep the bike — you just keep paying." },
      { term: "APR for Cash Advances", level: "danger", explanation: "Cash advances charge 34.99% interest starting immediately — there's no grace period. Withdrawing $500 cash from an ATM using this card costs you money the moment you do it.", analogy: "A cash advance is like a payday loan hiding inside your credit card. It's the most expensive way to get cash." },
      { term: "Minimum Interest Charge", level: "warn", explanation: "Even if you only owe $0.50 in interest, you'll be charged at least $2. Small balances get penalized disproportionately.", analogy: "It's like a $2 minimum charge at a diner — even if you just want a glass of water." },
      { term: "Annual Fee", level: "warn", explanation: "You pay $95 every year just to have this card, regardless of whether you use it. You need to earn at least $95 in rewards to break even.", analogy: "Like a gym membership — you're paying whether you show up or not." },
      { term: "Foreign Transaction Fee", level: "danger", explanation: "Every time you swipe this card outside the US (or on foreign websites), 3% gets added automatically. On a $1,000 trip abroad, that's $30 in hidden fees.", analogy: "Like a toll booth that charges you every time you cross a border — even a digital one." },
      { term: "minimum payment", level: "danger", explanation: "Paying the minimum (2% or $35) means your debt barely shrinks. At 29.99% APR, a $3,500 balance with only minimum payments takes 15 years and costs $4,823 in interest.", analogy: "Paying the minimum is like bailing out a sinking boat with a teaspoon — you're working but barely making progress." },
      { term: "binding arbitration clause", level: "danger", explanation: "You're giving up your right to sue the company in court or join class action lawsuits. Disputes go to a private arbitrator — which statistically favors companies.", analogy: "Imagine a referee who's paid by one team. That's private arbitration." },
      { term: "grace period", level: "good", explanation: "You have 25 days after your billing cycle ends to pay your full balance — and if you do, you pay ZERO interest. This is the most important thing to use on any credit card.", analogy: "It's a free loan window. Use it every month and this card costs you nothing in interest." }
    ]
  },

  paystub: {
    id: "paystub",
    name: "Pay Stub — Q4 2024",
    filename: "paystub_q4_2024.pdf",
    type: "Pay Stub",
    icon: "ti-file-dollar",
    badge: "New",
    rawText: `ACME CORPORATION — EMPLOYEE PAY STATEMENT
Pay Period: October 1 – October 31, 2024
Employee: [Employee Name]
Employee ID: 0047291
Pay Type: Bi-weekly

EARNINGS
Regular Pay (80 hrs @ $22.00/hr): $1,760.00
Overtime Pay (4 hrs @ $33.00/hr): $132.00
Gross Pay: $1,892.00

DEDUCTIONS — TAXES
Federal Income Tax (22% bracket): $243.00
California State Income Tax (9.3%): $95.64
Social Security Tax (6.2%): $117.30
Medicare Tax (1.45%): $27.43
CA SDI (0.9%): $17.03
Total Taxes: $500.40

DEDUCTIONS — BENEFITS
Medical Insurance (Employee Share): $145.00
Dental Insurance: $18.00
Vision Insurance: $6.00
401(k) Contribution (0%): $0.00
← Note: Employee currently contributing 0%
Employer 401(k) Match Available (up to 5%): $94.60 UNCLAIMED
Life Insurance: $8.50

Total Deductions: $677.90

NET PAY: $1,214.10

YEAR-TO-DATE TOTALS
Gross YTD: $18,920.00
Taxes YTD: $5,004.00
Net YTD: $12,148.00

EMPLOYER CONTRIBUTIONS (not in your paycheck, but part of your total comp)
Employer 401(k) Match: $0 (because you contribute $0)
Employer Health Premium Share: $520.00/month
FICA Employer Match: $117.30`,

    highlights: [
      { term: "401(k) Contribution (0%)", level: "danger", explanation: "You're contributing nothing to your retirement account. Your employer will match up to 5% of your salary — meaning they'll add free money to your retirement if you contribute. At $22/hr working 40hrs/week, that's about $1,136/year in FREE employer money you're leaving on the table.", analogy: "This is like your boss offering to match every dollar you put in a piggy bank — up to $1,136 — and you're saying no. It's free money." },
      { term: "Employer 401(k) Match Available", level: "danger", explanation: "Your employer is willing to give you $94.60 this paycheck alone (matching 5% of gross) — but since you contribute $0, you receive $0. Over a year this is ~$1,136 unclaimed.", analogy: "Your employer is leaving $94.60 on the table for you every paycheck. That's a gift you keep refusing." },
      { term: "Social Security Tax", level: "warn", explanation: "6.2% of every paycheck goes to Social Security. You'll receive benefits when you retire, but you won't see this money until age 62-67. It's mandatory.", analogy: "Social Security is like forced savings for your future self — you can't touch it now, but it's yours eventually." },
      { term: "Federal Income Tax", level: "warn", explanation: "At $22/hr you're in the 22% marginal bracket — but your effective rate is lower. This deduction reflects estimated withholding; your real tax bill is calculated at year-end.", analogy: "Think of withholding like a prepayment on your annual tax bill. You might get a refund in April if too much was taken." },
      { term: "CA SDI", level: "warn", explanation: "California State Disability Insurance — this small deduction (0.9%) protects you if you're unable to work due to disability or pregnancy. It funds paid family leave.", analogy: "It's cheap insurance — you pay a little now so the state covers part of your income if you can't work." },
      { term: "Net Pay", level: "good", explanation: "This is your actual take-home pay after all deductions. $1,214.10 bi-weekly = ~$2,428/month. Planning your budget starts here, not from gross pay.", analogy: "Gross pay is what your employer promises. Net pay is what actually lands in your bank account. Budget from net." }
    ]
  },

  student_loan: {
    id: "student_loan",
    name: "Federal Student Loan Agreement",
    filename: "student_loan_agreement.pdf",
    type: "Student Loan",
    icon: "ti-school",
    badge: "Common",
    rawText: `FEDERAL DIRECT UNSUBSIDIZED LOAN MASTER PROMISSORY NOTE
U.S. Department of Education
Loan Servicer: Nelnet

LOAN DETAILS
Principal Amount: $28,500
Interest Rate: 6.54% (fixed)
Loan Type: Direct Unsubsidized
Origination Fee: 1.057% ($301.25 deducted from disbursement)
Net Disbursement: $28,198.75

REPAYMENT
Standard Repayment Plan (10 years)
Monthly Payment: $322.41
Total Amount Paid: $38,689.20
Total Interest Paid: $10,189.20

INTEREST ACCRUAL
Interest begins accruing immediately upon disbursement, including during your in-school deferment period. Unpaid interest will capitalize (be added to your principal) when you enter repayment.

If you are in school for 4 years and defer payments:
Interest accrued during school: ~$7,449.00
Capitalized principal at graduation: ~$35,949.00
(your balance GROWS even while you're in school)

DEFERMENT & FORBEARANCE
In-School Deferment: Automatic while enrolled at least half-time
Economic Hardship Deferment: Available, up to 3 years
General Forbearance: Available, up to 12 months at a time

REPAYMENT PLANS
Standard (10 yr): $322/month
Graduated: starts lower, increases every 2 years
Income-Driven Repayment (IDR): payment based on income, forgiveness after 20-25 years
SAVE Plan: most favorable IDR option currently available

FORGIVENESS PROGRAMS
Public Service Loan Forgiveness (PSLF): forgiveness after 120 qualifying payments while working for government/nonprofit
Teacher Loan Forgiveness: up to $17,500 after 5 years teaching in low-income schools

DEFAULT CONSEQUENCES
Missing 270 days of payments = default.
Consequences: wage garnishment, tax refund seizure, credit damage, loss of deferment eligibility.`,

    highlights: [
      { term: "Interest begins accruing immediately", level: "danger", explanation: "Unlike subsidized loans, this unsubsidized loan charges interest from day one — even while you're in school and not earning income. By the time you graduate in 4 years, you'll owe $7,449 more than you borrowed, and that gets added to your principal.", analogy: "It's like a taxi meter that starts running before you even get in the car. You're being charged for time you're not moving." },
      { term: "Capitalized principal", level: "danger", explanation: "Capitalization means unpaid interest gets added to your principal balance. Then you pay interest on top of interest. Your $28,500 loan becomes ~$35,949 before you make a single payment.", analogy: "Imagine rolling a snowball downhill — the interest sticks to the principal and makes the whole thing bigger, so now you're paying interest on your interest." },
      { term: "Origination Fee", level: "warn", explanation: "The government takes 1.057% off the top before you even see the money. You borrow $28,500 but only receive $28,198.75. You still owe the full $28,500.", analogy: "Like a bank charging you $300 to open a checking account with $28,500 — you start already in the hole." },
      { term: "Income-Driven Repayment", level: "good", explanation: "IDR plans cap your monthly payment at a percentage of your discretionary income. If you're earning less, you pay less. After 20-25 years of payments, the remaining balance is forgiven.", analogy: "It's a payment plan that bends when your life bends. Low income month? Lower payment." },
      { term: "Public Service Loan Forgiveness", level: "good", explanation: "Work for a government or nonprofit for 10 years while making qualifying payments, and your remaining balance is completely forgiven. This can eliminate tens of thousands in debt.", analogy: "It's a reward program — serve the public for 10 years, and the government tears up the rest of your tab." },
      { term: "wage garnishment", level: "danger", explanation: "If you default, the government can take money directly from your paycheck without going to court first — up to 15% of your disposable income. There's no warning, no judge, no appeal before it starts.", analogy: "Default is like giving the government a key to your wallet. They can reach in and take their cut before you even see your paycheck." }
    ]
  },

  job_offer: {
    id: "job_offer",
    name: "Job Offer Letter — Tech Co.",
    filename: "offer_letter_techco.pdf",
    type: "Offer Letter",
    icon: "ti-briefcase",
    badge: "Hot",
    rawText: `TECHCO INC. — OFFER OF EMPLOYMENT
Date: November 15, 2024

Dear Candidate,

We are pleased to offer you the position of Software Engineer II at TechCo Inc.

COMPENSATION
Base Salary: $95,000/year
Sign-on Bonus: $5,000 (clawback if you leave within 12 months)
Annual Bonus Target: 10% of base salary ($9,500), discretionary

EQUITY
RSU Grant: 800 shares
Vesting Schedule: 4-year cliff vest with 1-year cliff
(You receive 0 shares if you leave before 1 year; 200 shares/year after)
Current Share Price (est.): ~$12.00
Estimated Grant Value: ~$9,600 (not guaranteed)

BENEFITS
Health Insurance: Blue Cross PPO — employee premium $0, family $320/month
Dental: Included
Vision: Included
401(k): 4% employer match on first 4% contributed
HSA: $500 employer contribution annually
PTO: 15 days/year (increases to 20 after 2 years)
Remote Work: Hybrid (3 days in office)

TOTAL ESTIMATED COMPENSATION
Base Salary: $95,000
Annual Bonus (target): $9,500
RSU Value (amortized): $2,400/year
Employer 401(k) Match: $3,800/year
Employer Health Premium: $6,240/year (value)
HSA: $500/year
Total Estimated Comp: ~$117,440/year

CONTINGENCIES
Employment contingent on: background check, reference check, and completion of I-9 verification.
This offer expires in 5 business days.
Employment is at-will.

Non-compete clause: For 12 months following termination, you may not work for direct competitors (defined in Exhibit A).`,

    highlights: [
      { term: "Sign-on Bonus clawback", level: "danger", explanation: "That $5,000 sign-on bonus must be repaid in full if you leave within 12 months — even if the company lays you off or the job is terrible. Read the clawback terms carefully before accepting.", analogy: "It's a golden handcuff on arrival. That $5,000 feels like a gift, but it's really a 12-month retention contract." },
      { term: "4-year cliff vest with 1-year cliff", level: "warn", explanation: "You get ZERO equity if you leave before one year. After year 1, you get 25% of shares (200). Then you earn more each year. If the company fires you at 11 months, you leave with nothing from equity.", analogy: "It's like working at a restaurant that only pays tips at the end of each year. Leave before then and you get nothing." },
      { term: "Annual Bonus Target", level: "warn", explanation: "The 10% bonus ($9,500) is 'discretionary' — meaning the company can give you less, or none, based on company performance or manager opinion. Don't factor it fully into your budget.", analogy: "A discretionary bonus is like a tip that your boss decides whether to leave. Budget around your base salary." },
      { term: "401(k) employer match", level: "good", explanation: "TechCo matches 100% of your first 4% contribution. On $95K, that's $3,800/year in free retirement money. Always contribute at least 4% to capture this — it's the highest-return investment you'll ever make.", analogy: "It's a 100% instant return on investment. Put in $1, get $2 in retirement savings. Nothing in the stock market beats that." },
      { term: "at-will", level: "warn", explanation: "Either you or TechCo can end employment at any time, for any reason, with no notice required (though professional norms suggest 2 weeks). This is standard in the US but means you have no guaranteed job security.", analogy: "At-will is like renting month-to-month. Either party can leave anytime. Stable, until suddenly it isn't." },
      { term: "Non-compete clause", level: "danger", explanation: "For 12 months after leaving, you may be blocked from working for competitors. Depending on your state (California largely refuses to enforce these), this could limit your job options significantly.", analogy: "A non-compete is like a landlord saying 'when you move out, you can't rent anywhere nearby for a year.' California typically throws these out. Other states don't." },
      { term: "Total Estimated Compensation", level: "good", explanation: "The true value of this offer is ~$117,440 — not just the $95K salary. Benefits, match, and equity have real dollar value. When comparing offers, always calculate total comp, not just base.", analogy: "Base salary is just the sticker price. Total comp is what you actually drive off the lot with." }
    ]
  },

  apartment_lease: {
    id: "apartment_lease",
    name: "Apartment Lease Agreement",
    filename: "apartment_lease_2024.pdf",
    type: "Lease Agreement",
    icon: "ti-building",
    badge: "New",
    rawText: `RESIDENTIAL LEASE AGREEMENT
Property: 1240 Oak Street, Apt 4B, San Diego, CA 92101
Landlord: Sunrise Properties LLC
Tenant(s): [Tenant Name]
Lease Term: January 1, 2025 – December 31, 2025

RENT
Monthly Rent: $2,100
Due Date: 1st of each month
Grace Period: 5 days
Late Fee: $150 after grace period, plus $15/day thereafter
Returned Check Fee: $50

SECURITY DEPOSIT
Amount: $4,200 (2 months rent)
Returned within: 21 days of move-out in California
Deductions may be made for: unpaid rent, cleaning beyond normal wear, damages

UTILITIES
Tenant responsible for: electricity, internet, renter's insurance
Landlord covers: water, trash, gas (up to $40/month — overage billed to tenant)

RENT INCREASES
Landlord may increase rent by up to 5% + CPI (approx. 8% max) per year under CA AB 1482 (rent control for buildings 15+ years old). This building is exempt from AB 1482 (built 2018). Rent increases at landlord's discretion with 30-day notice.

RULES & RESTRICTIONS
No subletting without written approval. Lease-breaking fee: 2 months rent ($4,200).
No pets (cats allowed with $300 refundable pet deposit + $50/month pet rent).
Guests staying longer than 7 consecutive days require landlord notification.
Quiet hours: 10pm – 8am.
Smoking prohibited inside unit and within 25 feet of building.

MAINTENANCE
Tenant must report maintenance issues within 48 hours. Tenant liable for damage caused by unreported issues. Landlord must respond to habitability issues within a reasonable time (CA law: usually 30 days for non-emergency).

MOVE-OUT
30-day written notice required. Notice sent fewer than 30 days before end of lease = automatic month-to-month with 30-day notice required.`,

    highlights: [
      { term: "Late Fee: $150 after grace period, plus $15/day", level: "danger", explanation: "After the 5-day grace period, you owe $150 immediately. Then $15 for every additional day you're late. Pay 10 days late and you owe $150 + $75 = $225 extra, on top of rent.", analogy: "It's like a parking ticket that gets more expensive the longer you ignore it. Pay rent by the 6th or it snowballs." },
      { term: "exempt from AB 1482", level: "danger", explanation: "California's rent control law limits annual increases to ~8%, but this building (built 2018) is exempt. Your landlord can raise rent by any amount with just 30 days' notice. Your $2,100 could become $2,500 next year legally.", analogy: "Rent control is an umbrella. This building isn't under it — so you're exposed to any amount of rain the landlord decides to bring." },
      { term: "Gas overage billed to tenant", level: "warn", explanation: "Gas is 'covered' but only up to $40/month. In winter, gas bills often exceed this. If your bill is $85, you pay the $45 difference — but it may not be clearly itemized on your statement.", analogy: "It's an all-you-can-eat buffet with a $40 limit. Go over and you're billed, probably without warning." },
      { term: "Lease-breaking fee: 2 months rent", level: "warn", explanation: "If you need to leave before December 31, you owe $4,200 as a penalty. This is common but negotiable before signing. Life happens — job relocations, family emergencies — so understand this cost upfront.", analogy: "It's an early-termination fee, like canceling a phone contract. Except it's $4,200 instead of $200." },
      { term: "Security Deposit", level: "warn", explanation: "You pay $4,200 upfront (separate from first month's rent). California law requires return within 21 days of move-out with itemized deductions. Document everything on move-in day with photos.", analogy: "Your security deposit is like a trust fund held by someone who doesn't trust you. Take photos of every wall, floor, and fixture the day you move in." },
      { term: "renter's insurance", level: "warn", explanation: "Tenant is responsible for renter's insurance. This is actually good — it costs ~$15-20/month and covers your belongings if there's theft, fire, or water damage. Don't skip it.", analogy: "Renter's insurance costs less than one Uber Eats order per month, but it covers your laptop, TV, and clothes if your apartment floods." }
    ]
  }

};

export function getSampleList() {
  return Object.values(SAMPLE_DOCUMENTS).map(d => ({
    id: d.id, name: d.name, filename: d.filename, type: d.type, icon: d.icon, badge: d.badge
  }));
}
