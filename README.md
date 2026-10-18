# ClariFund — The Loan Decision Workspace
### B2B Embedded Loan Decision Workspace for SME Borrowers

ClariFund sits between loan approval and loan decision—where uncertainty can create avoidable delay, support dependency, or drop-off. The primary goal of this software is to **reduce decision uncertainty** by simplifying complex loan terms, eliminating "cost ambiguity" and "term ambiguity," and strictly grounding an embedded AI assistant (**ClariGuide**) in the borrower's actual contract.

---

## 🏛️ Architectural Foundation & RBI April 2024 Compliance

This prototype strictly implements the **Reserve Bank of India (RBI) April 2024 Harmonized Key Fact Statement (KFS) Guidelines** for MSME Term Loans (Circular `RBI/2024-25/18 DOR.STR.REC.13/21.04.048/2024-25`).

### 1. Persona & Approved Loan Facility
- **Borrower Persona**: Rohan Kulkarni, 37, Founder & Managing Director
- **Enterprise**: ShreeTech Fabricators Pvt Ltd (Pune, Maharashtra • ~₹6 Cr revenue • 65 employees)
- **Sanctioned Facility**: MSME Commercial Term Loan of **₹40,00,000**
- **Net Disbursal in Account**: **₹39,20,000** (Sanction minus ₹80,000 upfront fees)
- **Nominal Interest Rate**: **12.50% p.a. fixed**
- **Harmonized APR**: **14.80%** (captures the true economic cost including ₹80,000 one-time upfront fees)
- **Tenure**: **36 months** (3 years)
- **Monthly Installment (EMI)**: **₹1,34,000** (First payment: 30 Oct 2026, Maturity: 30 Sep 2029)
- **Itemized Upfront Fees (₹80,000 Total)**:
  - Processing Fee: ₹60,000 (1.50% inclusive of GST)
  - Documentation Charges: ₹10,000
  - Mandatory Statutory / CERSAI & Stamp Filing Charges: ₹10,000

### 2. Contractual Clauses & Governance Guardrails
- **Clause 8.2 (Personal Guarantee)**: Directors (Rohan Kulkarni and Arjun Kulkarni) provide an unconditional, joint, and several continuing personal guarantee covering the full facility.
- **Clause 10.3 (Financial Covenant)**: ShreeTech must maintain a Debt Service Coverage Ratio (**DSCR $\ge$ 1.25x**) at all times, certified annually by a Chartered Accountant within 180 days of FY end.
- **Clause 9.1 (Contingent Penal Charges)**: Late payments incur a 2.0% per month penal charge on overdue amounts only. Per RBI directives, **penal charges are strictly non-compounding** (no interest on penalties, no capitalization into principal).
- **Clause 6.3 (Prepayment & Foreclosure)**: 6-month lock-in period; 2.0% foreclosure fee on outstanding principal thereafter.
- **Statutory Cooling-Off**: Minimum 3 business days post-disbursal look-up window to exit without prepayment penalties.
- **KFS Validity Window**: 16 calendar days from issuance (exceeds the statutory 3-day minimum).
- **Grievance Redressal**: Smt. Ananya Deshmukh (Principal Nodal Officer), Phone: 1800 123 4567, Email: `grievance.msme@clarifund-partnerbank.in`, 14-day resolution TAT, escalations to RBI Ombudsman.

---

## 📂 Project Structure & Component Tree

```
ClariFund/
├── index.html                           # Single-page application entry point
├── package.json                         # Build scripts & dependencies
├── README.md                            # Comprehensive architectural documentation
└── src/
    ├── main.jsx                         # React DOM mount point
    ├── App.jsx                          # Root layout, dynamic router & workspace orchestrator
    ├── data/
    │   └── kfsPayload.js                # RBI April 2024 Harmonized KFS payload (Fake backend)
    ├── context/
    │   └── LoanContext.jsx              # Central state store (Progressive steps, SLA freeze, KFS Hash)
    ├── services/
    │   └── geminiService.js             # ClariGuide AI integration with strict "AI Trust Rule" & deterministic retrieval
    ├── components/
    │   ├── Sidebar.jsx                  # Persistent progressive disclosure navigation (Steps 1–7)
    │   ├── Header.jsx                   # Breadcrumbs, loan ID badge, ClariGuide trigger
    │   ├── ClariGuideModal.jsx          # Contextual drawer assistant with verbatim citations & abstention routing
    │   ├── ui/
    │   │   └── Icons.jsx                # Lightweight inline SVG icon library
    │   └── screens/
    │       ├── OfferOverview.jsx        # Step 1: Approved amount, net disbursal, tenure, APR
    │       ├── CostBreakdown.jsx        # Step 2: Itemized fee ledger & reconciled SVG Donut chart
    │       ├── RepaymentSchedule.jsx    # Step 3: Full 36-month amortization table with year filters & CSV export
    │       ├── KeyObligations.jsx       # Step 4: Accordions for Guarantee, DSCR >= 1.25x, Late fees, Prepayment
    │       ├── AgreementViewer.jsx      # Step 5: Split-screen raw legal clause vs plain-language summary
    │       ├── KFSAcknowledgment.jsx    # Step 6: Standardized KFS review, 6-item checklist & SHA-256 audit stamp
    │       ├── DecisionExecution.jsx    # Step 7: Deliberate Accept (Aadhaar OTP eSign) vs Deliberate Decline
    │       └── RequestClarification.jsx # RM escalation with Policy-Aware Validity Freeze & Stakeholder sharing
    └── styles/
        └── index.css                    # Vanilla CSS modern fintech design system (Dark mode, glassmorphism)
```

---

## ⚡ Key Architectural Modules

### 1. State Management (`src/context/LoanContext.jsx`)
Centralizes all loan data, execution states, role controls, and auditable records:
- `slaReviewPending`: Boolean flag simulating **Policy-Aware Validity Protection**. When a borrower asks a formal question or requests review time, the 16-day validity timer is frozen under lender policy so the offer cannot expire while awaiting RM analysis.
- `kfsChecklist` & `kfsAuditRecord`: Enforces statutory consent by requiring explicit verification of 6 core terms before generating a tamper-evident **SHA-256 digital stamp**.

### 2. ClariGuide AI Service Layer (`src/services/geminiService.js`)
Embedded assistant configured with the strict **AI Trust Rule**:
> *"You are ClariGuide. You must ONLY retrieve and answer based on the provided JSON loan state and clauses. If the answer is not in the source text, you must abstain, state that you cannot verify the answer, and provide a button/link to route the query to the human credit analysis team."*

- **Live Gemini API Support**: Wraps Google Gemini 1.5 Flash (`generateContent`) with `temperature: 0.1` for deterministic extraction when an API key is provided.
- **Deterministic Offline Verification Engine**: Includes a contract matching engine so queries about APR, Guarantees, DSCR, Fees, Penalties, Prepayment, and Nodal Officers work out-of-the-box.
- **Strict Abstention Handling**: Unverifiable queries (e.g. paying in cryptocurrency or unstated waivers) return `abstain: true`, automatically displaying a prominent button: **[Route Query to Credit Analysis Team]**.

### 3. Progressive Disclosure UI (`src/components/screens/`)
- **OfferOverview**: High-impact metrics highlighting Net Disbursal (₹39.2L) vs Sanction (₹40L) and APR (14.80%).
- **CostBreakdown**: Itemized fee table with reconciled SVG Donut chart displaying the 81.3% / 17.1% / 1.6% capital split.
- **RepaymentSchedule**: 36-month amortization table with search, year filtering (Y1, Y2, Y3), and one-click CSV export.
- **KeyObligations**: Highlights personal guarantees, DSCR $\ge$ 1.25x, and RBI-mandated non-compounding late penalties.
- **AgreementViewer**: Side-by-side comparison of verbatim legal text against bulleted plain English translations.
- **KFSAcknowledgment**: Auditable 6-point statutory checklist with cryptographic SHA-256 hash generation.
- **DecisionExecution**: Deliberate Accept with Aadhaar OTP eSign simulation, paired with a structured **Deliberate Decline** capture to avoid passive offer expirations and measure the North Star metric (**Informed Decision Rate**).

---

## 🚀 How to Run the Prototype

The prototype is served locally using Python's built-in HTTP server:

```powershell
# In the project root directory:
python -m http.server 3000
```

Then open your browser at:
`http://localhost:3000`
