/**
 * ClariFund - RBI April 2024 Harmonized Key Fact Statement (KFS) Payload
 * Strictly adheres to RBI Master Direction on Harmonized KFS for MSME/Retail Term Loans
 * Regulatory reference: RBI/2024-25/18 DOR.STR.REC.13/21.04.048/2024-25
 */

export const KFS_PAYLOAD = {
  metadata: {
    kfsReferenceId: "KFS-2026-STF-400192",
    applicationId: "APP-MSME-99421",
    offerDate: "2026-10-12T10:00:00Z",
    validityDays: 16,
    validityExpiryDate: "2026-10-28T23:59:59Z",
    statutoryMinimumDays: 3,
    lenderName: "Apex Commercial Bank Ltd (Regulated Entity)",
    lenderType: "Scheduled Commercial Bank (RBI Regulated)",
    digitalLendingPartner: "ClariFund B2B Decision Layer",
    slaProtectionActive: false,
    kfsSha256Hash: "7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069"
  },

  borrowerProfile: {
    primaryBorrower: "Rohan Kulkarni",
    designation: "Founder & Managing Director",
    entityName: "ShreeTech Fabricators Pvt Ltd",
    entityCin: "U28112PN2018PTC178921",
    udyamRegistration: "UDYAM-MH-26-0049210",
    entityAddress: "Plot 42, Sector 10, MIDC Bhosari, Pune, Maharashtra 411026",
    coDirector: "Arjun Kulkarni",
    coDirectorDesignation: "Director & COO",
    annualRevenue: "₹6.15 Cr (FY 2025-26)",
    employeeCount: 65,
    industry: "Precision Metal Fabrication & CNC Machining",
    facilityPurpose: "Machinery Expansion (High-Precision CNC Milling) & Working Capital"
  },

  // Part 1: Key Quantitative Information
  part1_quantitative: {
    loanType: "MSME Commercial Term Loan",
    sanctionedAmount: 4000000,
    sanctionedAmountFormatted: "₹40,00,000",
    sanctionedAmountWords: "Rupees Forty Lakhs Only",
    
    netDisbursalAmount: 3920000,
    netDisbursalAmountFormatted: "₹39,20,000",
    netDisbursalWords: "Rupees Thirty-Nine Lakhs Twenty Thousand Only",

    tenureMonths: 36,
    tenureYears: 3,
    repaymentFrequency: "Monthly",
    repaymentMode: "NACH / Direct Debit / e-Mandate",
    firstRepaymentDate: "2026-10-30",
    finalRepaymentDate: "2029-09-30",

    interestRateType: "Fixed Rate",
    nominalInterestRateAnnual: 12.5,
    nominalInterestRateFormatted: "12.50% p.a.",
    interestCalculationMethod: "Monthly Reducing Balance",

    annualPercentageRate: 14.8,
    annualPercentageRateFormatted: "14.80%",
    aprMethodology: "RBI Harmonized Internal Rate of Return (IRR) including all upfront mandatory fees & charges",

    estimatedEMI: 134000,
    estimatedEMIFormatted: "₹1,34,000",
    exactEMI: 133815,
    exactEMIFormatted: "₹1,33,815",

    totalInterestPayable: 824000,
    totalInterestPayableFormatted: "₹8,24,000",
    exactTotalInterest: 817322,
    exactTotalInterestFormatted: "₹8,17,322",

    totalRepaymentAmount: 4824000,
    totalRepaymentAmountFormatted: "₹48,24,000",
    exactTotalRepayment: 4817322,
    exactTotalRepaymentFormatted: "₹48,17,322",

    feeBreakdown: [
      {
        id: "fee-proc",
        name: "Processing Fee",
        rate: "1.50% of sanctioned amount",
        amount: 60000,
        amountFormatted: "₹60,000",
        payableTo: "Regulated Entity (Lender)",
        timing: "Deducted upfront from gross loan sanction",
        taxInclusive: true,
        gstDetails: "18% GST (₹9,152.54) included",
        refundable: false
      },
      {
        id: "fee-doc",
        name: "Documentation & Legal Charges",
        rate: "Fixed regulatory rate",
        amount: 10000,
        amountFormatted: "₹10,000",
        payableTo: "Regulated Entity / Legal Counsel",
        timing: "Deducted upfront before disbursal",
        taxInclusive: true,
        gstDetails: "18% GST included",
        refundable: false
      },
      {
        id: "fee-mand",
        name: "Other Mandatory Charges (CERSAI & Stamp Duty Filing)",
        rate: "Actuals & statutory filing fee",
        amount: 10000,
        amountFormatted: "₹10,000",
        payableTo: "Statutory Bodies / Registry (CERSAI)",
        timing: "Deducted upfront before disbursal",
        taxInclusive: true,
        gstDetails: "Statutory fees exempt/inclusive",
        refundable: false
      }
    ],
    totalFeesPayable: 80000,
    totalFeesPayableFormatted: "₹80,000",
    feesPercentOfSanction: 2.0
  },

  // Part 2: Key Contractual Clauses
  part2_contractualClauses: {
    obligations: [
      {
        clauseRef: "Clause 8.2",
        scheduleRef: "Schedule 2",
        title: "Personal Guarantee by Directors",
        category: "Guarantee",
        severity: "Critical",
        summaryPlainEnglish: "The directors of the company (Rohan Kulkarni and Arjun Kulkarni) provide a personal guarantee for full repayment. If the business fails to pay, the lender can legally claim outstanding dues from the directors' personal assets.",
        keyTakeaways: [
          "Directors are personally, jointly, and severally liable.",
          "Covers full facility amount of ₹40,00,000 plus accrued interest and costs.",
          "Continues unconditionally until entire facility is fully repaid and closed."
        ],
        legalTextRaw: "8.2 Personal Guarantee: The Borrower shall procure from the directors of the Borrower, whose names are set out in Schedule 2, an unconditional and continuing guarantee in favour of the Lender, for the due and punctual repayment of all amounts payable by the Borrower under this Agreement. The obligations of the guarantors shall continue until the Facility Amount and all accrued amounts are fully and finally paid, or as otherwise provided in this Agreement.",
        governingLaw: "Indian Contract Act, 1872 & Insolvency and Bankruptcy Code (IBC) provisions"
      },
      {
        clauseRef: "Clause 10.3",
        scheduleRef: "Financial Covenants",
        title: "Financial Covenant: DSCR ≥ 1.25x",
        category: "Covenant",
        severity: "High",
        summaryPlainEnglish: "ShreeTech Fabricators must maintain a Debt Service Coverage Ratio (DSCR) of at least 1.25x at all times, verified through annual audited financial statements submitted within 180 days of financial year end.",
        keyTakeaways: [
          "Net operating income must cover debt obligations by at least 1.25 times.",
          "Audited balance sheet & P&L to be submitted annually by September 30.",
          "Breach of DSCR gives the lender the right to declare an Event of Default after a 30-day cure period."
        ],
        legalTextRaw: "10.3 Financial Covenants: The Borrower covenants and undertakes that it shall at all times during the subsistence of this Facility maintain a minimum Debt Service Coverage Ratio (DSCR) of not less than 1.25:1 (One point Two Five to One), calculated on the basis of its audited financial statements at the end of each Financial Year. The Borrower shall furnish CA-certified DSCR compliance certificates within 180 (one hundred eighty) days from the end of each Financial Year.",
        governingLaw: "Prudential Norms for Commercial Advances"
      },
      {
        clauseRef: "Clause 6.3",
        scheduleRef: "Schedule 4",
        title: "Prepayment & Foreclosure Terms",
        category: "Repayment",
        severity: "Moderate",
        summaryPlainEnglish: "The borrower may prepay or foreclose the term loan after an initial 6-month lock-in period, subject to a 2.0% prepayment fee on the outstanding principal balance plus applicable GST.",
        keyTakeaways: [
          "No prepayment allowed during the first 6 months from disbursal.",
          "Prepayment penalty: 2.0% of outstanding principal amount + GST.",
          "Prepayment notice of minimum 15 business days required in writing."
        ],
        legalTextRaw: "6.3 Prepayment & Foreclosure: The Borrower may prepay the Facility in part or in full at any time after the expiry of 6 (six) months from the Disbursal Date, upon giving not less than 15 (fifteen) business days' prior written notice to the Lender. Prepayment shall be subject to a prepayment fee of 2.00% (two percent) on the principal amount prepaid, together with applicable Goods and Services Tax (GST).",
        governingLaw: "RBI Fair Practices Code for MSME Advances"
      },
      {
        clauseRef: "Clause 11.4",
        scheduleRef: "Negative Covenants",
        title: "Business Restrictions & Asset Charge",
        category: "Restriction",
        severity: "Moderate",
        summaryPlainEnglish: "ShreeTech Fabricators cannot sell or pledge plant machinery, alter shareholding by more than 26%, or take additional debt exceeding ₹20,00,000 without prior written No-Objection Certificate (NOC) from the lender.",
        keyTakeaways: [
          "Lender maintains a first exclusive charge on all newly acquired CNC machinery.",
          "Prior NOC required for new credit lines or substantial asset disposal.",
          "Management ownership control must remain with current promoters."
        ],
        legalTextRaw: "11.4 Negative Covenants: The Borrower shall not, without the prior written consent of the Lender: (a) create or permit to subsist any mortgage, pledge, charge or encumbrance on the hypothecated plant and machinery; (b) effect any substantial change in its management control or promoter shareholding exceeding 26%; (c) incur further external indebtedness exceeding ₹20,00,000 (Twenty Lakhs) in the aggregate.",
        governingLaw: "Companies Act, 2013 & SARFAESI Act"
      }
    ],

    contingentCharges: [
      {
        clauseRef: "Clause 9.1",
        title: "Late Payment Penal Charges (Non-Compounding)",
        category: "Penal Charges",
        severity: "High",
        summaryPlainEnglish: "Late payments will attract penal charges at 2.0% per month on the overdue amount only. Per RBI April 2024 directives, these charges are strictly NON-COMPOUNDING and will not be capitalized into the principal or compounded as interest.",
        keyTakeaways: [
          "Penal charge rate: 2.0% per month on defaulted installment.",
          "Strictly non-compounding: penal charges do not accrue interest on interest.",
          "Grace period of 3 business days before penal charges commence."
        ],
        legalTextRaw: "9.1 Penal Charges: In the event of default in payment of any Instalment or other monies due on the relevant Due Date, the Borrower shall pay to the Lender penal charges at the rate of 2.00% (two percent) per month on the overdue amount for the period of delay. In compliance with Reserve Bank of India Master Directions on Penal Charges in Loan Accounts, penal charges shall not be compounded, nor shall interest be computed on such penal charges.",
        governingLaw: "RBI Master Direction on Fair Lending Practices - Penal Charges (April 2024)"
      },
      {
        clauseRef: "Clause 9.3",
        title: "Dishonour / Mandate Representation Fee",
        category: "Operational Fee",
        severity: "Low",
        summaryPlainEnglish: "If an EMI auto-debit NACH / e-Mandate is dishonoured due to insufficient funds, a representation charge of ₹500 + GST will be levied.",
        keyTakeaways: [
          "Fee: ₹500 flat per bounce instance + GST.",
          "Non-negotiable third-party banking transit recovery charge."
        ],
        legalTextRaw: "9.3 Mandate Dishonour: In case of dishonour of any NACH mandate, cheque, or electronic direct debit instruction, the Borrower shall pay an administrative bounce fee of ₹500 (Five Hundred) plus applicable taxes for each instance of dishonour.",
        governingLaw: "Negotiable Instruments Act, 1881"
      }
    ],

    validityAndCoolingOff: {
      kfsValidityDays: 16,
      statutoryMinimumDays: 3,
      offerDate: "2026-10-12",
      expiryDate: "2026-10-28",
      summary: "This KFS is valid for 16 calendar days from issuance. The borrower has full liberty to evaluate, compare, and seek advice during this window without unilateral rate changes.",
      statutoryCoolingOffPeriod: "Minimum 3 business days post-disbursal",
      coolingOffRules: "The borrower has a statutory right to exit the loan within 3 business days after disbursal by repaying the principal received along with proportionate interest at 12.5% p.a., with zero prepayment penalty."
    }
  },

  // Part 3: Grievance Redressal & Consent Rules
  part3_grievanceAndConsent: {
    nodalOfficer: {
      name: "Smt. Ananya Deshmukh",
      designation: "Principal Nodal Grievance Redressal Officer (MSME Division)",
      entity: "Apex Commercial Bank Ltd",
      phone: "+91 1800 123 4567",
      alternatePhone: "+91 22 6123 8900",
      email: "grievance.msme@clarifund-partnerbank.in",
      officeAddress: "Apex Financial Towers, 4th Floor, C-54 G Block, Bandra Kurla Complex (BKC), Mumbai 400051",
      turnaroundTime: "14 business days",
      ombudsmanEscalation: "If grievance is unresolved within 30 days, borrower may escalate to the RBI Banking Ombudsman at https://cms.rbi.org.in or via Toll-free 14448."
    },

    executionRule: {
      ruleStatement: "Explicit, verifiable borrower acknowledgment of the KFS must be recorded prior to final loan agreement execution.",
      regulatoryRequirement: "Under RBI Digital Lending & April 2024 KFS Directives, no loan agreement can be digitally signed or stamped until the borrower verifies and digitally signs the KFS hash.",
      digitalVerificationMethod: "SHA-256 Checksum validation + OTP Aadhaar / NeSL DDE eSign timestamp"
    }
  },

  // Full 36-Month Amortization Schedule (Sanction ₹40,00,000, 12.5% p.a., 36M)
  amortizationSchedule: [
    { month: 1, dueDate: "30 Oct 2026", openingBalance: 4000000, principal: 92333, interest: 41667, emi: 134000, closingBalance: 3907667 },
    { month: 2, dueDate: "30 Nov 2026", openingBalance: 3907667, principal: 93295, interest: 40705, emi: 134000, closingBalance: 3814372 },
    { month: 3, dueDate: "30 Dec 2026", openingBalance: 3814372, principal: 94267, interest: 39733, emi: 134000, closingBalance: 3720105 },
    { month: 4, dueDate: "30 Jan 2027", openingBalance: 3720105, principal: 95249, interest: 38751, emi: 134000, closingBalance: 3624856 },
    { month: 5, dueDate: "28 Feb 2027", openingBalance: 3624856, principal: 96241, interest: 37759, emi: 134000, closingBalance: 3528615 },
    { month: 6, dueDate: "30 Mar 2027", openingBalance: 3528615, principal: 97244, interest: 36756, emi: 134000, closingBalance: 3431371 },
    { month: 7, dueDate: "30 Apr 2027", openingBalance: 3431371, principal: 98257, interest: 35743, emi: 134000, closingBalance: 3333114 },
    { month: 8, dueDate: "30 May 2027", openingBalance: 3333114, principal: 99280, interest: 34720, emi: 134000, closingBalance: 3233834 },
    { month: 9, dueDate: "30 Jun 2027", openingBalance: 3233834, principal: 100314, interest: 33686, emi: 134000, closingBalance: 3133520 },
    { month: 10, dueDate: "30 Jul 2027", openingBalance: 3133520, principal: 101359, interest: 32641, emi: 134000, closingBalance: 3032161 },
    { month: 11, dueDate: "30 Aug 2027", openingBalance: 3032161, principal: 102415, interest: 31585, emi: 134000, closingBalance: 2929746 },
    { month: 12, dueDate: "30 Sep 2027", openingBalance: 2929746, principal: 103482, interest: 30518, emi: 134000, closingBalance: 2826264 },
    { month: 13, dueDate: "30 Oct 2027", openingBalance: 2826264, principal: 104560, interest: 29440, emi: 134000, closingBalance: 2721704 },
    { month: 14, dueDate: "30 Nov 2027", openingBalance: 2721704, principal: 105649, interest: 28351, emi: 134000, closingBalance: 2616055 },
    { month: 15, dueDate: "30 Dec 2027", openingBalance: 2616055, principal: 106750, interest: 27250, emi: 134000, closingBalance: 2509305 },
    { month: 16, dueDate: "30 Jan 2028", openingBalance: 2509305, principal: 107862, interest: 26138, emi: 134000, closingBalance: 2401443 },
    { month: 17, dueDate: "29 Feb 2028", openingBalance: 2401443, principal: 108986, interest: 25014, emi: 134000, closingBalance: 2292457 },
    { month: 18, dueDate: "30 Mar 2028", openingBalance: 2292457, principal: 110121, interest: 23879, emi: 134000, closingBalance: 2182336 },
    { month: 19, dueDate: "30 Apr 2028", openingBalance: 2182336, principal: 111268, interest: 22732, emi: 134000, closingBalance: 2071068 },
    { month: 20, dueDate: "30 May 2028", openingBalance: 2071068, principal: 112427, interest: 21573, emi: 134000, closingBalance: 1958641 },
    { month: 21, dueDate: "30 Jun 2028", openingBalance: 1958641, principal: 113598, interest: 20402, emi: 134000, closingBalance: 1845043 },
    { month: 22, dueDate: "30 Jul 2028", openingBalance: 1845043, principal: 114781, interest: 19219, emi: 134000, closingBalance: 1730262 },
    { month: 23, dueDate: "30 Aug 2028", openingBalance: 1730262, principal: 115977, interest: 18023, emi: 134000, closingBalance: 1614285 },
    { month: 24, dueDate: "30 Sep 2028", openingBalance: 1614285, principal: 117185, interest: 16815, emi: 134000, closingBalance: 1497100 },
    { month: 25, dueDate: "30 Oct 2028", openingBalance: 1497100, principal: 118406, interest: 15594, emi: 134000, closingBalance: 1378694 },
    { month: 26, dueDate: "30 Nov 2028", openingBalance: 1378694, principal: 119639, interest: 14361, emi: 134000, closingBalance: 1259055 },
    { month: 27, dueDate: "30 Dec 2028", openingBalance: 1259055, principal: 120885, interest: 13115, emi: 134000, closingBalance: 1138170 },
    { month: 28, dueDate: "30 Jan 2029", openingBalance: 1138170, principal: 122144, interest: 11856, emi: 134000, closingBalance: 1016026 },
    { month: 29, dueDate: "28 Feb 2029", openingBalance: 1016026, principal: 123417, interest: 10583, emi: 134000, closingBalance: 892609 },
    { month: 30, dueDate: "30 Mar 2029", openingBalance: 892609, principal: 124702, interest: 9298, emi: 134000, closingBalance: 767907 },
    { month: 31, dueDate: "30 Apr 2029", openingBalance: 767907, principal: 126001, interest: 7999, emi: 134000, closingBalance: 641906 },
    { month: 32, dueDate: "30 May 2029", openingBalance: 641906, principal: 127314, interest: 6686, emi: 134000, closingBalance: 514592 },
    { month: 33, dueDate: "30 Jun 2029", openingBalance: 514592, principal: 128640, interest: 5360, emi: 134000, closingBalance: 385952 },
    { month: 34, dueDate: "30 Jul 2029", openingBalance: 385952, principal: 129980, interest: 4020, emi: 134000, closingBalance: 255972 },
    { month: 35, dueDate: "30 Aug 2029", openingBalance: 255972, principal: 131334, interest: 2666, emi: 134000, closingBalance: 124638 },
    { month: 36, dueDate: "30 Sep 2029", openingBalance: 124638, principal: 124638, interest: 1299, emi: 125937, closingBalance: 0 }
  ]
};
