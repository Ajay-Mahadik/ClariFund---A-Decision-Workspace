ClariFund — The B2B Loan Decision Workspace

## 🚀 Product Overview & Value Proposition
ClariFund is an embedded B2B loan decision workspace designed for small and medium enterprise (SME) borrowers to review, evaluate, and execute commercial loan offers with complete clarity. By transforming dense legal credit agreements into transparent, interactive breakdowns backed by a contract-grounded AI assistant, it eliminates post-approval uncertainty and prevents high-intent borrower drop-off.

## 🎯 The Problem Statement
In commercial lending, the most fragile window occurs **between loan approval and contract execution**. While lenders invest heavily in fast underwriting, approved borrowers frequently stall, ghost, or abandon agreements during final closing due to cognitive overload and cost ambiguity.

### Key Borrower Pain Points
* **Cost Ambiguity & Hidden Deductions**: Borrowers are quoted an attractive nominal interest rate (e.g., 12.50%), only to find unexpected processing fees, statutory filings, and deductions eroding their working capital on day one.
* **Intimidating Legal Jargon & Hidden Covenants**: Critical personal liability clauses (such as joint personal guarantees) and restrictive covenants (such as minimum DSCR ratios) are buried within 30-page legal contracts.
* **Fear of Compounding Penalties**: Ambiguity surrounding default terms, foreclosure lock-in periods, and penalty calculations breeds distrust.
* **Validity Clock Pressure**: Statutory offer validity windows tick down while borrowers wait days for relationship managers to clarify standard contract terms.

### 👤 Target User Persona & Baseline Scenario
* **Borrower**: Rohan Kulkarni (Age 37), Founder & Managing Director
* **Enterprise**: ShreeTech Fabricators Pvt Ltd (Pune, Maharashtra • ₹6 Cr annual turnover • 65 employees)
* **Approved Loan Facility**: MSME Commercial Term Loan of **₹40,00,000** at **12.50% p.a.** nominal rate (36-month tenure)
* **The Dilemma**: ₹80,000 in upfront fees reduces net disbursal to **₹39,20,000**, driving the true **Annual Percentage Rate (APR) to 14.80%**. Without clear visualization, Rohan hesitates to sign, fearing undisclosed liabilities and restrictive covenants.

## 💡 The Solution
ClariFund bridges the post-approval gap by implementing the **RBI April 2024 Harmonized Key Fact Statement (KFS) guidelines** inside an intuitive, step-by-step decision workspace. It replaces static PDF agreements with an actionable, transparent digital experience.

### Core Prototype Capabilities
1. **True Cost Transparency (APR & Net Disbursal)**:
   * Instantly highlights the difference between gross sanction (₹40,00,000) and actual cash received (₹39,20,000).
   * Visualizes the complete economic cost with an itemized fee ledger and reconciled capital-split donut charts.
2. **Interactive 36-Month Amortization Schedule**:
   * Complete repayment schedule showing monthly EMI (₹1,34,000), principal-interest split per installment, yearly filters, and instant CSV export.
3. **Plain-Language Legal Translation (Side-by-Side Viewer)**:
   * Compares raw legal clauses against plain-English summaries for crucial covenants, including **Clause 8.2 (Personal Guarantees)** and **Clause 10.3 (DSCR $\ge$ 1.25x)**.
   * Explicitly clarifies RBI-mandated **non-compounding penal charges** (2.0% per month on overdue sums only).
4. **Contract-Grounded AI Assistant ("ClariGuide")**:
   * Governed by a strict **AI Trust Rule**: answers questions exclusively using verified clauses from the borrower's agreement.
   * Features zero hallucination and automatic abstention: routes any unverifiable queries directly to the lender's credit analysis team.
5. **Policy-Aware SLA Validity Protection**:
   * Pauses the statutory 16-day offer expiration countdown whenever a borrower submits a formal clarification request, safeguarding their terms while awaiting support.
6. **Cryptographic Consent & Deliberate Execution**:
   * Requires explicit review of a 6-point statutory checklist before generating a tamper-evident **SHA-256 audit stamp**.
   * Supports active acceptance via simulated **Aadhaar OTP eSign** alongside a structured **Deliberate Decline** capture to measure informed decision rates.

## 🛠️ Tech Stack & Architecture

### High-Level Tech Stack
* **Frontend Framework**: [React 18](https://react.dev/) with [Vite](https://vitejs.dev/) for fast modular builds and SPA routing.
* **UI & Design System**: Modern Vanilla CSS architecture featuring custom fintech tokens, dark mode, glassmorphism, responsive data tables, and inline SVG data visualizers.
* **AI Orchestration**: [Google Gemini 1.5 Flash API](https://ai.google.dev/) configured with low temperature (`0.1`) and contract retrieval constraints, paired with a deterministic offline fallback engine.
* **State & Compliance Management**: Centralized React Context (`LoanContext`) managing progressive disclosure states, validity freeze timers, checklist verification, and cryptographic SHA-256 hash generation.
* **Design & Wireframes**: Structured based on standard B2B enterprise fintech design patterns and RBI compliance wireframes.

### 🏃 Quick Start (Run Locally)
```powershell
# Install dependencies
npm install

# Start development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to experience the workspace.
