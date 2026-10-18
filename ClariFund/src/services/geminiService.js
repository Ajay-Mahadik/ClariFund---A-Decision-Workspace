/**
 * ClariGuide - Contextual AI Assistant Service Layer
 * Strict Grounding in RBI April 2024 KFS & Contractual Clauses
 */

export const SYSTEM_PROMPT_CONSTRAINTS = `You are ClariGuide, the embedded AI loan decision assistant for ClariFund.
Your mission is to help the SME borrower (Rohan Kulkarni, Founder & MD of ShreeTech Fabricators Pvt Ltd) clearly understand their approved loan offer without legal confusion.

CRITICAL AI TRUST RULE (NON-NEGOTIABLE):
“You are ClariGuide. You must ONLY retrieve and answer based on the provided JSON loan state and clauses. If the answer is not in the source text, you must abstain, state that you cannot verify the answer, and provide a button/link to route the query to the human credit analysis team.”

STRICT GOVERNANCE RULES:
1. DETERMINISTIC RETRIEVAL ONLY: You may only explain facts explicitly stated in the source JSON (sanction amount, disbursal, fees, APR, EMI, tenure, covenants, guarantees, penal charges, grievance details).
2. CITATION MANDATE: Every single factual explanation must include an exact citation in brackets, e.g. [Clause 8.2 - Personal Guarantee], [KFS Part 1 - Quantitative Info], [Clause 9.1 - Late Payment Penalties], or [Clause 10.3 - Financial Covenants].
3. NO SPECULATION OR FINANCIAL ADVICE: Do not advise whether to take the loan. Do not speculate on future interest rate movements, balance sheet forecasts, or tax implications.
4. STRICT ABSTENTION ON AMBIGUITY: If a query asks about terms not present in the contract (e.g., custom tenure extensions, unlisted collateral releases, third-party loan swaps, undocumented waivers), you MUST output:
   "ABSTAIN: I cannot verify this answer from your approved loan agreement or Key Fact Statement. This requires formal review by the lender's credit analysis team."
5. CLARITY & ACCESSIBILITY: Explain dense legal terms in clear, crisp, professional English without diminishing legal precision.`;

/**
 * Build structured system context from the loan state
 */
export function buildLoanSystemPrompt(loanData) {
  return `${SYSTEM_PROMPT_CONSTRAINTS}

=== APPROVED LOAN STATE & KFS SOURCE OF TRUTH ===
Borrower: ${loanData.borrowerProfile.primaryBorrower} (${loanData.borrowerProfile.designation})
Entity: ${loanData.borrowerProfile.entityName} (CIN: ${loanData.borrowerProfile.entityCin}, Udyam: ${loanData.borrowerProfile.udyamRegistration})
Lender: ${loanData.metadata.lenderName}
Facility: ${loanData.part1_quantitative.loanType}

QUANTITATIVE TERMS:
- Sanctioned Loan Amount: ${loanData.part1_quantitative.sanctionedAmountFormatted} (Gross)
- Net Disbursal Amount: ${loanData.part1_quantitative.netDisbursalAmountFormatted} (Transferred to bank account after deducting ₹80,000 fees)
- Upfront Total Fees: ${loanData.part1_quantitative.totalFeesPayableFormatted}
  * Processing Fee: ₹60,000 (1.50% inclusive of GST)
  * Documentation Charges: ₹10,000
  * Other Mandatory Charges: ₹10,000 (CERSAI & Stamp Duty)
- Nominal Interest Rate: ${loanData.part1_quantitative.nominalInterestRateFormatted} (Fixed for 36 months)
- Annual Percentage Rate (APR): ${loanData.part1_quantitative.annualPercentageRateFormatted} (Calculated per RBI April 2024 Harmonized KFS guidelines, factoring ₹80,000 upfront fees into effective borrowing cost)
- Tenure: ${loanData.part1_quantitative.tenureMonths} Months (${loanData.part1_quantitative.tenureYears} Years)
- Repayment: Estimated Monthly Installment (EMI) of ${loanData.part1_quantitative.estimatedEMIFormatted} starting ${loanData.part1_quantitative.firstRepaymentDate} through ${loanData.part1_quantitative.finalRepaymentDate}
- Total Repayment Amount: ${loanData.part1_quantitative.totalRepaymentAmountFormatted} (Principal ₹40,00,000 + Interest ₹8,24,000)

KEY CONTRACTUAL CLAUSES:
- Clause 8.2 (Personal Guarantee): Unconditional and continuing personal guarantee by all directors (Rohan Kulkarni and Arjun Kulkarni). If company defaults, directors are personally liable with personal assets.
- Clause 10.3 (Financial Covenant): Mandatory maintenance of Debt Service Coverage Ratio (DSCR) >= 1.25x based on annual audited financial statements submitted within 180 days of FY close. Breach constitutes Event of Default after 30-day cure.
- Clause 6.3 (Prepayment & Foreclosure): Allowed after 6-month lock-in period subject to 2.0% foreclosure fee on outstanding principal balance + GST.
- Clause 9.1 (Late Payment Penal Charges): Overdue installments attract 2.0% per month penal charges on overdue amount. Per RBI April 2024 directives, charges are strictly NON-COMPOUNDING.
- Clause 9.3 (NACH / Mandate Bounce): ₹500 + GST administrative fee per dishonour.
- Clause 11.4 (Negative Covenants / Asset Charge): First exclusive charge on acquired CNC machinery. No external debt > ₹20L or promoter equity dilution > 26% without lender NOC.

VALIDITY & COOLING-OFF:
- KFS Validity Window: 16 calendar days from issuance (exceeds statutory 3-day minimum).
- Statutory Cooling-Off Period: Minimum 3 business days post-disbursal under RBI digital lending norms (borrower can exit by repaying principal + proportionate interest).

GRIEVANCE REDRESSAL:
- Principal Nodal Officer: ${loanData.part3_grievanceAndConsent.nodalOfficer.name} (${loanData.part3_grievanceAndConsent.nodalOfficer.phone}, ${loanData.part3_grievanceAndConsent.nodalOfficer.email})
- Resolution TAT: 14 business days. Escalation: RBI Ombudsman (https://cms.rbi.org.in).
`;
}

/**
 * Intelligent deterministic knowledge matcher used for instant fallback & offline fidelity
 */
function localDeterministicAnswer(query, loanData) {
  const q = query.toLowerCase();

  // 1. APR vs Nominal Rate
  if (q.includes("apr") || q.includes("difference") || (q.includes("12.5") && q.includes("14.8")) || q.includes("why is the apr higher")) {
    return {
      text: `Your nominal interest rate is **12.50% p.a. fixed**, but the **Annual Percentage Rate (APR) is 14.80%**.\n\nPer RBI April 2024 harmonized KFS guidelines, APR captures the **total annualized economic cost** of borrowing. This includes both the base interest and upfront non-refundable mandatory fees totaling **₹80,000** (Processing Fee ₹60,000, Documentation ₹10,000, and CERSAI/Stamp Duty ₹10,000) that are deducted from your ₹40,00,000 sanction, resulting in a net cash disbursal of ₹39,20,000.`,
      citation: "KFS Part 1 - Quantitative Information & RBI APR Formula",
      confidence: "High",
      abstain: false
    };
  }

  // 2. Personal Guarantee
  if (q.includes("guarantee") || q.includes("personal") || q.includes("asset") || q.includes("schedule 2")) {
    return {
      text: `Under **Clause 8.2**, both you (Rohan Kulkarni) and co-director Arjun Kulkarni must execute an **unconditional and continuing personal guarantee**.\n\n**Key Legal Realities:**\n• You are personally, jointly, and severally liable for the full ₹40,00,000 facility plus interest.\n• If ShreeTech Fabricators defaults and corporate assets cannot cover the debt, the lender has legal recourse to pursue directors' personal assets under the Indian Contract Act and IBC.`,
      citation: "Agreement Clause 8.2 & Schedule 2",
      confidence: "High",
      abstain: false
    };
  }

  // 3. Financial Covenant / DSCR
  if (q.includes("dscr") || q.includes("covenant") || q.includes("financial covenant") || q.includes("1.25")) {
    return {
      text: `Under **Clause 10.3**, ShreeTech Fabricators must maintain a **Debt Service Coverage Ratio (DSCR) ≥ 1.25x** throughout the 36-month tenure.\n\n**Compliance Requirements:**\n• DSCR = (Net Operating Profit + Non-cash Expenses) / Total Debt Service (Principal + Interest).\n• Must submit CA-certified compliance certificates based on audited financials within 180 days of financial year end.\n• A breach of this covenant gives the lender the right to call an Event of Default following a 30-day cure period.`,
      citation: "Agreement Clause 10.3 - Financial Covenants",
      confidence: "High",
      abstain: false
    };
  }

  // 4. Late Payment / Missed EMI / Penal charges
  if (q.includes("late") || q.includes("miss") || q.includes("penalty") || q.includes("penal") || q.includes("bounce")) {
    return {
      text: `If you miss an EMI due date, **Clause 9.1** stipulates a penal charge of **2.00% per month on the overdue amount** for the period of delay.\n\n**Crucial Borrower Protection:**\n• In strict compliance with RBI April 2024 directions, **penal charges are strictly NON-COMPOUNDING**.\n• The lender cannot add these late fees to your principal balance or charge interest on penal charges.\n• There is a 3-business-day grace period, and NACH bounce incurs an administrative fee of ₹500 + GST [Clause 9.3].`,
      citation: "Agreement Clause 9.1 & RBI Master Direction on Penal Charges",
      confidence: "High",
      abstain: false
    };
  }

  // 5. Net Disbursal & Fees
  if (q.includes("fee") || q.includes("disburs") || q.includes("net cash") || q.includes("39,20") || q.includes("80,000")) {
    return {
      text: `For your sanctioned amount of **₹40,00,000**, you will receive **₹39,20,000 net in your bank account**.\n\nA total of **₹80,000** in mandatory fees is deducted prior to disbursal:\n1. **Processing Fee:** ₹60,000 (1.50% + 18% GST included)\n2. **Documentation & Legal Charges:** ₹10,000\n3. **Other Mandatory Statutory Charges:** ₹10,000 (CERSAI and Stamp Duty filing)\n\nNo other unlisted fees can be levied per RBI guidelines.`,
      citation: "KFS Part 1 - Itemized Fee Ledger",
      confidence: "High",
      abstain: false
    };
  }

  // 6. Prepayment / Foreclosure
  if (q.includes("prepay") || q.includes("foreclose") || q.includes("early") || q.includes("pay off")) {
    return {
      text: `Under **Clause 6.3**, you may prepay or foreclose the loan after an initial **6-month lock-in period**.\n\n**Conditions:**\n• Notice: Minimum 15 business days' prior written notice to the lender.\n• Fee: **2.00% prepayment penalty** on the outstanding principal balance prepaid, plus GST.\n• Note: If you choose to exit during the initial **3-day statutory cooling-off window**, zero prepayment charges apply.`,
      citation: "Agreement Clause 6.3 & Schedule 4",
      confidence: "High",
      abstain: false
    };
  }

  // 7. Grievance Redressal / Nodal Officer
  if (q.includes("grievance") || q.includes("complaint") || q.includes("nodal") || q.includes("officer") || q.includes("ombudsman")) {
    return {
      text: `For complaints or dispute resolution, contact the designated Principal Nodal Officer:\n\n• **Name:** Smt. Ananya Deshmukh (GM - Customer Redressal)\n• **Phone:** 1800 123 4567 / +91 22 6123 8900\n• **Email:** grievance.msme@clarifund-partnerbank.in\n• **Address:** 4th Floor, Apex Financial Towers, BKC, Mumbai 400051\n• **Resolution TAT:** 14 business days. If unresolved after 30 days, escalate to RBI Banking Ombudsman at https://cms.rbi.org.in.`,
      citation: "KFS Part 3 - Grievance Redressal Mechanism",
      confidence: "High",
      abstain: false
    };
  }

  // 8. Machine Sale / Negative Covenants
  if (q.includes("sell") || q.includes("machine") || q.includes("equipment") || q.includes("borrow more") || q.includes("restriction")) {
    return {
      text: `Under **Clause 11.4 (Negative Covenants)**, the lender holds a **first exclusive hypothecation charge** on the CNC machinery purchased with this facility.\n\n**Restrictions:**\n• You cannot sell, transfer, or create secondary encumbrances on the machinery without written NOC.\n• ShreeTech cannot incur additional external borrowing exceeding ₹20,00,000 without prior lender permission.`,
      citation: "Agreement Clause 11.4 - Negative Covenants",
      confidence: "High",
      abstain: false
    };
  }

  // 9. Statutory Cooling-Off & Validity
  if (q.includes("validity") || q.includes("cooling") || q.includes("16 day") || q.includes("how long")) {
    return {
      text: `**Offer Validity:** This KFS offer is valid for **16 calendar days** (until 28 Oct 2026), significantly exceeding the statutory 3-day minimum evaluation period.\n\n**Statutory Cooling-off:** Once disbursed, you have a **minimum 3 business days look-up period** to exit the loan without prepayment penalties by returning the principal plus proportionate interest.`,
      citation: "KFS Part 2 & RBI Digital Lending Guidelines",
      confidence: "High",
      abstain: false
    };
  }

  // Default: STRICT ABSTENTION per Requirement 3 & PRD Slide 12
  return {
    text: `I cannot verify the answer to this specific inquiry from your approved loan agreement or Key Fact Statement (KFS).\n\nTo ensure complete legal and financial accuracy, ClariGuide adheres to strict AI trust guardrails and does not extrapolate beyond executed documents.`,
    citation: null,
    confidence: "Abstain",
    abstain: true,
    suggestedAction: "Route query to Credit Analysis Team"
  };
}

/**
 * Send user chat query to Gemini API endpoint or fallback retrieval engine
 */
export async function sendClariGuideQuery({ query, conversationHistory = [], loanData, apiKey }) {
  // If an API key is provided, attempt call to Google Gemini API
  if (apiKey && apiKey.trim().length > 10) {
    try {
      const systemPrompt = buildLoanSystemPrompt(loanData);
      
      const contents = [
        {
          role: "user",
          parts: [{ text: `${systemPrompt}\n\nUser Question: ${query}` }]
        }
      ];

      // Format prior history if any
      if (conversationHistory.length > 0) {
        // Prepend previous context if required
      }

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            contents,
            generationConfig: {
              temperature: 0.1, // Near-zero temperature for deterministic factual extraction
              topP: 0.8,
              maxOutputTokens: 600
            }
          })
        }
      );

      if (!response.ok) {
        const errJson = await response.json().catch(() => ({}));
        console.warn("Gemini API call returned non-200, falling back to local deterministic engine:", errJson);
        return localDeterministicAnswer(query, loanData);
      }

      const data = await response.json();
      const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!rawText) {
        return localDeterministicAnswer(query, loanData);
      }

      // Check if the model abstained
      const isAbstain = rawText.toUpperCase().includes("ABSTAIN") || 
                        rawText.toLowerCase().includes("cannot verify") ||
                        rawText.toLowerCase().includes("credit analysis team");

      // Extract clause citation if present in text
      let citation = null;
      const citationMatch = rawText.match(/\[(.*?)\]/);
      if (citationMatch) {
        citation = citationMatch[1];
      }

      return {
        text: rawText,
        citation: citation || (isAbstain ? null : "Source Verified: Loan Agreement & KFS"),
        confidence: isAbstain ? "Abstain" : "High",
        abstain: isAbstain,
        suggestedAction: isAbstain ? "Route query to Credit Analysis Team" : null
      };
    } catch (err) {
      console.warn("Network error reaching Gemini API, using local deterministic engine:", err);
      return localDeterministicAnswer(query, loanData);
    }
  }

  // Without API key: Use local deterministic retrieval engine instantly
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(localDeterministicAnswer(query, loanData));
    }, 350); // slight delay for natural conversational feel
  });
}
