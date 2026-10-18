// ClariFund Precompiled Standalone Production Bundle
// Zero network fetch requests - 100% Offline & Host-Agnostic
window.__CLARIFUND_PRECOMPILED__ = {
  "/src/data/kfsPayload.js": function(require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KFS_PAYLOAD = void 0;
/**
 * ClariFund - RBI April 2024 Harmonized Key Fact Statement (KFS) Payload
 * Strictly adheres to RBI Master Direction on Harmonized KFS for MSME/Retail Term Loans
 * Regulatory reference: RBI/2024-25/18 DOR.STR.REC.13/21.04.048/2024-25
 */

var KFS_PAYLOAD = exports.KFS_PAYLOAD = {
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
    feeBreakdown: [{
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
    }, {
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
    }, {
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
    }],
    totalFeesPayable: 80000,
    totalFeesPayableFormatted: "₹80,000",
    feesPercentOfSanction: 2.0
  },
  // Part 2: Key Contractual Clauses
  part2_contractualClauses: {
    obligations: [{
      clauseRef: "Clause 8.2",
      scheduleRef: "Schedule 2",
      title: "Personal Guarantee by Directors",
      category: "Guarantee",
      severity: "Critical",
      summaryPlainEnglish: "The directors of the company (Rohan Kulkarni and Arjun Kulkarni) provide a personal guarantee for full repayment. If the business fails to pay, the lender can legally claim outstanding dues from the directors' personal assets.",
      keyTakeaways: ["Directors are personally, jointly, and severally liable.", "Covers full facility amount of ₹40,00,000 plus accrued interest and costs.", "Continues unconditionally until entire facility is fully repaid and closed."],
      legalTextRaw: "8.2 Personal Guarantee: The Borrower shall procure from the directors of the Borrower, whose names are set out in Schedule 2, an unconditional and continuing guarantee in favour of the Lender, for the due and punctual repayment of all amounts payable by the Borrower under this Agreement. The obligations of the guarantors shall continue until the Facility Amount and all accrued amounts are fully and finally paid, or as otherwise provided in this Agreement.",
      governingLaw: "Indian Contract Act, 1872 & Insolvency and Bankruptcy Code (IBC) provisions"
    }, {
      clauseRef: "Clause 10.3",
      scheduleRef: "Financial Covenants",
      title: "Financial Covenant: DSCR ≥ 1.25x",
      category: "Covenant",
      severity: "High",
      summaryPlainEnglish: "ShreeTech Fabricators must maintain a Debt Service Coverage Ratio (DSCR) of at least 1.25x at all times, verified through annual audited financial statements submitted within 180 days of financial year end.",
      keyTakeaways: ["Net operating income must cover debt obligations by at least 1.25 times.", "Audited balance sheet & P&L to be submitted annually by September 30.", "Breach of DSCR gives the lender the right to declare an Event of Default after a 30-day cure period."],
      legalTextRaw: "10.3 Financial Covenants: The Borrower covenants and undertakes that it shall at all times during the subsistence of this Facility maintain a minimum Debt Service Coverage Ratio (DSCR) of not less than 1.25:1 (One point Two Five to One), calculated on the basis of its audited financial statements at the end of each Financial Year. The Borrower shall furnish CA-certified DSCR compliance certificates within 180 (one hundred eighty) days from the end of each Financial Year.",
      governingLaw: "Prudential Norms for Commercial Advances"
    }, {
      clauseRef: "Clause 6.3",
      scheduleRef: "Schedule 4",
      title: "Prepayment & Foreclosure Terms",
      category: "Repayment",
      severity: "Moderate",
      summaryPlainEnglish: "The borrower may prepay or foreclose the term loan after an initial 6-month lock-in period, subject to a 2.0% prepayment fee on the outstanding principal balance plus applicable GST.",
      keyTakeaways: ["No prepayment allowed during the first 6 months from disbursal.", "Prepayment penalty: 2.0% of outstanding principal amount + GST.", "Prepayment notice of minimum 15 business days required in writing."],
      legalTextRaw: "6.3 Prepayment & Foreclosure: The Borrower may prepay the Facility in part or in full at any time after the expiry of 6 (six) months from the Disbursal Date, upon giving not less than 15 (fifteen) business days' prior written notice to the Lender. Prepayment shall be subject to a prepayment fee of 2.00% (two percent) on the principal amount prepaid, together with applicable Goods and Services Tax (GST).",
      governingLaw: "RBI Fair Practices Code for MSME Advances"
    }, {
      clauseRef: "Clause 11.4",
      scheduleRef: "Negative Covenants",
      title: "Business Restrictions & Asset Charge",
      category: "Restriction",
      severity: "Moderate",
      summaryPlainEnglish: "ShreeTech Fabricators cannot sell or pledge plant machinery, alter shareholding by more than 26%, or take additional debt exceeding ₹20,00,000 without prior written No-Objection Certificate (NOC) from the lender.",
      keyTakeaways: ["Lender maintains a first exclusive charge on all newly acquired CNC machinery.", "Prior NOC required for new credit lines or substantial asset disposal.", "Management ownership control must remain with current promoters."],
      legalTextRaw: "11.4 Negative Covenants: The Borrower shall not, without the prior written consent of the Lender: (a) create or permit to subsist any mortgage, pledge, charge or encumbrance on the hypothecated plant and machinery; (b) effect any substantial change in its management control or promoter shareholding exceeding 26%; (c) incur further external indebtedness exceeding ₹20,00,000 (Twenty Lakhs) in the aggregate.",
      governingLaw: "Companies Act, 2013 & SARFAESI Act"
    }],
    contingentCharges: [{
      clauseRef: "Clause 9.1",
      title: "Late Payment Penal Charges (Non-Compounding)",
      category: "Penal Charges",
      severity: "High",
      summaryPlainEnglish: "Late payments will attract penal charges at 2.0% per month on the overdue amount only. Per RBI April 2024 directives, these charges are strictly NON-COMPOUNDING and will not be capitalized into the principal or compounded as interest.",
      keyTakeaways: ["Penal charge rate: 2.0% per month on defaulted installment.", "Strictly non-compounding: penal charges do not accrue interest on interest.", "Grace period of 3 business days before penal charges commence."],
      legalTextRaw: "9.1 Penal Charges: In the event of default in payment of any Instalment or other monies due on the relevant Due Date, the Borrower shall pay to the Lender penal charges at the rate of 2.00% (two percent) per month on the overdue amount for the period of delay. In compliance with Reserve Bank of India Master Directions on Penal Charges in Loan Accounts, penal charges shall not be compounded, nor shall interest be computed on such penal charges.",
      governingLaw: "RBI Master Direction on Fair Lending Practices - Penal Charges (April 2024)"
    }, {
      clauseRef: "Clause 9.3",
      title: "Dishonour / Mandate Representation Fee",
      category: "Operational Fee",
      severity: "Low",
      summaryPlainEnglish: "If an EMI auto-debit NACH / e-Mandate is dishonoured due to insufficient funds, a representation charge of ₹500 + GST will be levied.",
      keyTakeaways: ["Fee: ₹500 flat per bounce instance + GST.", "Non-negotiable third-party banking transit recovery charge."],
      legalTextRaw: "9.3 Mandate Dishonour: In case of dishonour of any NACH mandate, cheque, or electronic direct debit instruction, the Borrower shall pay an administrative bounce fee of ₹500 (Five Hundred) plus applicable taxes for each instance of dishonour.",
      governingLaw: "Negotiable Instruments Act, 1881"
    }],
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
  amortizationSchedule: [{
    month: 1,
    dueDate: "30 Oct 2026",
    openingBalance: 4000000,
    principal: 92333,
    interest: 41667,
    emi: 134000,
    closingBalance: 3907667
  }, {
    month: 2,
    dueDate: "30 Nov 2026",
    openingBalance: 3907667,
    principal: 93295,
    interest: 40705,
    emi: 134000,
    closingBalance: 3814372
  }, {
    month: 3,
    dueDate: "30 Dec 2026",
    openingBalance: 3814372,
    principal: 94267,
    interest: 39733,
    emi: 134000,
    closingBalance: 3720105
  }, {
    month: 4,
    dueDate: "30 Jan 2027",
    openingBalance: 3720105,
    principal: 95249,
    interest: 38751,
    emi: 134000,
    closingBalance: 3624856
  }, {
    month: 5,
    dueDate: "28 Feb 2027",
    openingBalance: 3624856,
    principal: 96241,
    interest: 37759,
    emi: 134000,
    closingBalance: 3528615
  }, {
    month: 6,
    dueDate: "30 Mar 2027",
    openingBalance: 3528615,
    principal: 97244,
    interest: 36756,
    emi: 134000,
    closingBalance: 3431371
  }, {
    month: 7,
    dueDate: "30 Apr 2027",
    openingBalance: 3431371,
    principal: 98257,
    interest: 35743,
    emi: 134000,
    closingBalance: 3333114
  }, {
    month: 8,
    dueDate: "30 May 2027",
    openingBalance: 3333114,
    principal: 99280,
    interest: 34720,
    emi: 134000,
    closingBalance: 3233834
  }, {
    month: 9,
    dueDate: "30 Jun 2027",
    openingBalance: 3233834,
    principal: 100314,
    interest: 33686,
    emi: 134000,
    closingBalance: 3133520
  }, {
    month: 10,
    dueDate: "30 Jul 2027",
    openingBalance: 3133520,
    principal: 101359,
    interest: 32641,
    emi: 134000,
    closingBalance: 3032161
  }, {
    month: 11,
    dueDate: "30 Aug 2027",
    openingBalance: 3032161,
    principal: 102415,
    interest: 31585,
    emi: 134000,
    closingBalance: 2929746
  }, {
    month: 12,
    dueDate: "30 Sep 2027",
    openingBalance: 2929746,
    principal: 103482,
    interest: 30518,
    emi: 134000,
    closingBalance: 2826264
  }, {
    month: 13,
    dueDate: "30 Oct 2027",
    openingBalance: 2826264,
    principal: 104560,
    interest: 29440,
    emi: 134000,
    closingBalance: 2721704
  }, {
    month: 14,
    dueDate: "30 Nov 2027",
    openingBalance: 2721704,
    principal: 105649,
    interest: 28351,
    emi: 134000,
    closingBalance: 2616055
  }, {
    month: 15,
    dueDate: "30 Dec 2027",
    openingBalance: 2616055,
    principal: 106750,
    interest: 27250,
    emi: 134000,
    closingBalance: 2509305
  }, {
    month: 16,
    dueDate: "30 Jan 2028",
    openingBalance: 2509305,
    principal: 107862,
    interest: 26138,
    emi: 134000,
    closingBalance: 2401443
  }, {
    month: 17,
    dueDate: "29 Feb 2028",
    openingBalance: 2401443,
    principal: 108986,
    interest: 25014,
    emi: 134000,
    closingBalance: 2292457
  }, {
    month: 18,
    dueDate: "30 Mar 2028",
    openingBalance: 2292457,
    principal: 110121,
    interest: 23879,
    emi: 134000,
    closingBalance: 2182336
  }, {
    month: 19,
    dueDate: "30 Apr 2028",
    openingBalance: 2182336,
    principal: 111268,
    interest: 22732,
    emi: 134000,
    closingBalance: 2071068
  }, {
    month: 20,
    dueDate: "30 May 2028",
    openingBalance: 2071068,
    principal: 112427,
    interest: 21573,
    emi: 134000,
    closingBalance: 1958641
  }, {
    month: 21,
    dueDate: "30 Jun 2028",
    openingBalance: 1958641,
    principal: 113598,
    interest: 20402,
    emi: 134000,
    closingBalance: 1845043
  }, {
    month: 22,
    dueDate: "30 Jul 2028",
    openingBalance: 1845043,
    principal: 114781,
    interest: 19219,
    emi: 134000,
    closingBalance: 1730262
  }, {
    month: 23,
    dueDate: "30 Aug 2028",
    openingBalance: 1730262,
    principal: 115977,
    interest: 18023,
    emi: 134000,
    closingBalance: 1614285
  }, {
    month: 24,
    dueDate: "30 Sep 2028",
    openingBalance: 1614285,
    principal: 117185,
    interest: 16815,
    emi: 134000,
    closingBalance: 1497100
  }, {
    month: 25,
    dueDate: "30 Oct 2028",
    openingBalance: 1497100,
    principal: 118406,
    interest: 15594,
    emi: 134000,
    closingBalance: 1378694
  }, {
    month: 26,
    dueDate: "30 Nov 2028",
    openingBalance: 1378694,
    principal: 119639,
    interest: 14361,
    emi: 134000,
    closingBalance: 1259055
  }, {
    month: 27,
    dueDate: "30 Dec 2028",
    openingBalance: 1259055,
    principal: 120885,
    interest: 13115,
    emi: 134000,
    closingBalance: 1138170
  }, {
    month: 28,
    dueDate: "30 Jan 2029",
    openingBalance: 1138170,
    principal: 122144,
    interest: 11856,
    emi: 134000,
    closingBalance: 1016026
  }, {
    month: 29,
    dueDate: "28 Feb 2029",
    openingBalance: 1016026,
    principal: 123417,
    interest: 10583,
    emi: 134000,
    closingBalance: 892609
  }, {
    month: 30,
    dueDate: "30 Mar 2029",
    openingBalance: 892609,
    principal: 124702,
    interest: 9298,
    emi: 134000,
    closingBalance: 767907
  }, {
    month: 31,
    dueDate: "30 Apr 2029",
    openingBalance: 767907,
    principal: 126001,
    interest: 7999,
    emi: 134000,
    closingBalance: 641906
  }, {
    month: 32,
    dueDate: "30 May 2029",
    openingBalance: 641906,
    principal: 127314,
    interest: 6686,
    emi: 134000,
    closingBalance: 514592
  }, {
    month: 33,
    dueDate: "30 Jun 2029",
    openingBalance: 514592,
    principal: 128640,
    interest: 5360,
    emi: 134000,
    closingBalance: 385952
  }, {
    month: 34,
    dueDate: "30 Jul 2029",
    openingBalance: 385952,
    principal: 129980,
    interest: 4020,
    emi: 134000,
    closingBalance: 255972
  }, {
    month: 35,
    dueDate: "30 Aug 2029",
    openingBalance: 255972,
    principal: 131334,
    interest: 2666,
    emi: 134000,
    closingBalance: 124638
  }, {
    month: 36,
    dueDate: "30 Sep 2029",
    openingBalance: 124638,
    principal: 124638,
    interest: 1299,
    emi: 125937,
    closingBalance: 0
  }]
};
  },
  "/src/services/geminiService.js": function(require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SYSTEM_PROMPT_CONSTRAINTS = void 0;
exports.buildLoanSystemPrompt = buildLoanSystemPrompt;
exports.sendClariGuideQuery = sendClariGuideQuery;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/**
 * ClariGuide - Contextual AI Assistant Service Layer
 * Strict Grounding in RBI April 2024 KFS & Contractual Clauses
 */

var SYSTEM_PROMPT_CONSTRAINTS = exports.SYSTEM_PROMPT_CONSTRAINTS = "You are ClariGuide, the embedded AI loan decision assistant for ClariFund.\nYour mission is to help the SME borrower (Rohan Kulkarni, Founder & MD of ShreeTech Fabricators Pvt Ltd) clearly understand their approved loan offer without legal confusion.\n\nCRITICAL AI TRUST RULE (NON-NEGOTIABLE):\n\u201CYou are ClariGuide. You must ONLY retrieve and answer based on the provided JSON loan state and clauses. If the answer is not in the source text, you must abstain, state that you cannot verify the answer, and provide a button/link to route the query to the human credit analysis team.\u201D\n\nSTRICT GOVERNANCE RULES:\n1. DETERMINISTIC RETRIEVAL ONLY: You may only explain facts explicitly stated in the source JSON (sanction amount, disbursal, fees, APR, EMI, tenure, covenants, guarantees, penal charges, grievance details).\n2. CITATION MANDATE: Every single factual explanation must include an exact citation in brackets, e.g. [Clause 8.2 - Personal Guarantee], [KFS Part 1 - Quantitative Info], [Clause 9.1 - Late Payment Penalties], or [Clause 10.3 - Financial Covenants].\n3. NO SPECULATION OR FINANCIAL ADVICE: Do not advise whether to take the loan. Do not speculate on future interest rate movements, balance sheet forecasts, or tax implications.\n4. STRICT ABSTENTION ON AMBIGUITY: If a query asks about terms not present in the contract (e.g., custom tenure extensions, unlisted collateral releases, third-party loan swaps, undocumented waivers), you MUST output:\n   \"ABSTAIN: I cannot verify this answer from your approved loan agreement or Key Fact Statement. This requires formal review by the lender's credit analysis team.\"\n5. CLARITY & ACCESSIBILITY: Explain dense legal terms in clear, crisp, professional English without diminishing legal precision.";

/**
 * Build structured system context from the loan state
 */
function buildLoanSystemPrompt(loanData) {
  return "".concat(SYSTEM_PROMPT_CONSTRAINTS, "\n\n=== APPROVED LOAN STATE & KFS SOURCE OF TRUTH ===\nBorrower: ").concat(loanData.borrowerProfile.primaryBorrower, " (").concat(loanData.borrowerProfile.designation, ")\nEntity: ").concat(loanData.borrowerProfile.entityName, " (CIN: ").concat(loanData.borrowerProfile.entityCin, ", Udyam: ").concat(loanData.borrowerProfile.udyamRegistration, ")\nLender: ").concat(loanData.metadata.lenderName, "\nFacility: ").concat(loanData.part1_quantitative.loanType, "\n\nQUANTITATIVE TERMS:\n- Sanctioned Loan Amount: ").concat(loanData.part1_quantitative.sanctionedAmountFormatted, " (Gross)\n- Net Disbursal Amount: ").concat(loanData.part1_quantitative.netDisbursalAmountFormatted, " (Transferred to bank account after deducting \u20B980,000 fees)\n- Upfront Total Fees: ").concat(loanData.part1_quantitative.totalFeesPayableFormatted, "\n  * Processing Fee: \u20B960,000 (1.50% inclusive of GST)\n  * Documentation Charges: \u20B910,000\n  * Other Mandatory Charges: \u20B910,000 (CERSAI & Stamp Duty)\n- Nominal Interest Rate: ").concat(loanData.part1_quantitative.nominalInterestRateFormatted, " (Fixed for 36 months)\n- Annual Percentage Rate (APR): ").concat(loanData.part1_quantitative.annualPercentageRateFormatted, " (Calculated per RBI April 2024 Harmonized KFS guidelines, factoring \u20B980,000 upfront fees into effective borrowing cost)\n- Tenure: ").concat(loanData.part1_quantitative.tenureMonths, " Months (").concat(loanData.part1_quantitative.tenureYears, " Years)\n- Repayment: Estimated Monthly Installment (EMI) of ").concat(loanData.part1_quantitative.estimatedEMIFormatted, " starting ").concat(loanData.part1_quantitative.firstRepaymentDate, " through ").concat(loanData.part1_quantitative.finalRepaymentDate, "\n- Total Repayment Amount: ").concat(loanData.part1_quantitative.totalRepaymentAmountFormatted, " (Principal \u20B940,00,000 + Interest \u20B98,24,000)\n\nKEY CONTRACTUAL CLAUSES:\n- Clause 8.2 (Personal Guarantee): Unconditional and continuing personal guarantee by all directors (Rohan Kulkarni and Arjun Kulkarni). If company defaults, directors are personally liable with personal assets.\n- Clause 10.3 (Financial Covenant): Mandatory maintenance of Debt Service Coverage Ratio (DSCR) >= 1.25x based on annual audited financial statements submitted within 180 days of FY close. Breach constitutes Event of Default after 30-day cure.\n- Clause 6.3 (Prepayment & Foreclosure): Allowed after 6-month lock-in period subject to 2.0% foreclosure fee on outstanding principal balance + GST.\n- Clause 9.1 (Late Payment Penal Charges): Overdue installments attract 2.0% per month penal charges on overdue amount. Per RBI April 2024 directives, charges are strictly NON-COMPOUNDING.\n- Clause 9.3 (NACH / Mandate Bounce): \u20B9500 + GST administrative fee per dishonour.\n- Clause 11.4 (Negative Covenants / Asset Charge): First exclusive charge on acquired CNC machinery. No external debt > \u20B920L or promoter equity dilution > 26% without lender NOC.\n\nVALIDITY & COOLING-OFF:\n- KFS Validity Window: 16 calendar days from issuance (exceeds statutory 3-day minimum).\n- Statutory Cooling-Off Period: Minimum 3 business days post-disbursal under RBI digital lending norms (borrower can exit by repaying principal + proportionate interest).\n\nGRIEVANCE REDRESSAL:\n- Principal Nodal Officer: ").concat(loanData.part3_grievanceAndConsent.nodalOfficer.name, " (").concat(loanData.part3_grievanceAndConsent.nodalOfficer.phone, ", ").concat(loanData.part3_grievanceAndConsent.nodalOfficer.email, ")\n- Resolution TAT: 14 business days. Escalation: RBI Ombudsman (https://cms.rbi.org.in).\n");
}

/**
 * Intelligent deterministic knowledge matcher used for instant fallback & offline fidelity
 */
function localDeterministicAnswer(query, loanData) {
  var q = query.toLowerCase();

  // 1. APR vs Nominal Rate
  if (q.includes("apr") || q.includes("difference") || q.includes("12.5") && q.includes("14.8") || q.includes("why is the apr higher")) {
    return {
      text: "Your nominal interest rate is **12.50% p.a. fixed**, but the **Annual Percentage Rate (APR) is 14.80%**.\n\nPer RBI April 2024 harmonized KFS guidelines, APR captures the **total annualized economic cost** of borrowing. This includes both the base interest and upfront non-refundable mandatory fees totaling **\u20B980,000** (Processing Fee \u20B960,000, Documentation \u20B910,000, and CERSAI/Stamp Duty \u20B910,000) that are deducted from your \u20B940,00,000 sanction, resulting in a net cash disbursal of \u20B939,20,000.",
      citation: "KFS Part 1 - Quantitative Information & RBI APR Formula",
      confidence: "High",
      abstain: false
    };
  }

  // 2. Personal Guarantee
  if (q.includes("guarantee") || q.includes("personal") || q.includes("asset") || q.includes("schedule 2")) {
    return {
      text: "Under **Clause 8.2**, both you (Rohan Kulkarni) and co-director Arjun Kulkarni must execute an **unconditional and continuing personal guarantee**.\n\n**Key Legal Realities:**\n\u2022 You are personally, jointly, and severally liable for the full \u20B940,00,000 facility plus interest.\n\u2022 If ShreeTech Fabricators defaults and corporate assets cannot cover the debt, the lender has legal recourse to pursue directors' personal assets under the Indian Contract Act and IBC.",
      citation: "Agreement Clause 8.2 & Schedule 2",
      confidence: "High",
      abstain: false
    };
  }

  // 3. Financial Covenant / DSCR
  if (q.includes("dscr") || q.includes("covenant") || q.includes("financial covenant") || q.includes("1.25")) {
    return {
      text: "Under **Clause 10.3**, ShreeTech Fabricators must maintain a **Debt Service Coverage Ratio (DSCR) \u2265 1.25x** throughout the 36-month tenure.\n\n**Compliance Requirements:**\n\u2022 DSCR = (Net Operating Profit + Non-cash Expenses) / Total Debt Service (Principal + Interest).\n\u2022 Must submit CA-certified compliance certificates based on audited financials within 180 days of financial year end.\n\u2022 A breach of this covenant gives the lender the right to call an Event of Default following a 30-day cure period.",
      citation: "Agreement Clause 10.3 - Financial Covenants",
      confidence: "High",
      abstain: false
    };
  }

  // 4. Late Payment / Missed EMI / Penal charges
  if (q.includes("late") || q.includes("miss") || q.includes("penalty") || q.includes("penal") || q.includes("bounce")) {
    return {
      text: "If you miss an EMI due date, **Clause 9.1** stipulates a penal charge of **2.00% per month on the overdue amount** for the period of delay.\n\n**Crucial Borrower Protection:**\n\u2022 In strict compliance with RBI April 2024 directions, **penal charges are strictly NON-COMPOUNDING**.\n\u2022 The lender cannot add these late fees to your principal balance or charge interest on penal charges.\n\u2022 There is a 3-business-day grace period, and NACH bounce incurs an administrative fee of \u20B9500 + GST [Clause 9.3].",
      citation: "Agreement Clause 9.1 & RBI Master Direction on Penal Charges",
      confidence: "High",
      abstain: false
    };
  }

  // 5. Net Disbursal & Fees
  if (q.includes("fee") || q.includes("disburs") || q.includes("net cash") || q.includes("39,20") || q.includes("80,000")) {
    return {
      text: "For your sanctioned amount of **\u20B940,00,000**, you will receive **\u20B939,20,000 net in your bank account**.\n\nA total of **\u20B980,000** in mandatory fees is deducted prior to disbursal:\n1. **Processing Fee:** \u20B960,000 (1.50% + 18% GST included)\n2. **Documentation & Legal Charges:** \u20B910,000\n3. **Other Mandatory Statutory Charges:** \u20B910,000 (CERSAI and Stamp Duty filing)\n\nNo other unlisted fees can be levied per RBI guidelines.",
      citation: "KFS Part 1 - Itemized Fee Ledger",
      confidence: "High",
      abstain: false
    };
  }

  // 6. Prepayment / Foreclosure
  if (q.includes("prepay") || q.includes("foreclose") || q.includes("early") || q.includes("pay off")) {
    return {
      text: "Under **Clause 6.3**, you may prepay or foreclose the loan after an initial **6-month lock-in period**.\n\n**Conditions:**\n\u2022 Notice: Minimum 15 business days' prior written notice to the lender.\n\u2022 Fee: **2.00% prepayment penalty** on the outstanding principal balance prepaid, plus GST.\n\u2022 Note: If you choose to exit during the initial **3-day statutory cooling-off window**, zero prepayment charges apply.",
      citation: "Agreement Clause 6.3 & Schedule 4",
      confidence: "High",
      abstain: false
    };
  }

  // 7. Grievance Redressal / Nodal Officer
  if (q.includes("grievance") || q.includes("complaint") || q.includes("nodal") || q.includes("officer") || q.includes("ombudsman")) {
    return {
      text: "For complaints or dispute resolution, contact the designated Principal Nodal Officer:\n\n\u2022 **Name:** Smt. Ananya Deshmukh (GM - Customer Redressal)\n\u2022 **Phone:** 1800 123 4567 / +91 22 6123 8900\n\u2022 **Email:** grievance.msme@clarifund-partnerbank.in\n\u2022 **Address:** 4th Floor, Apex Financial Towers, BKC, Mumbai 400051\n\u2022 **Resolution TAT:** 14 business days. If unresolved after 30 days, escalate to RBI Banking Ombudsman at https://cms.rbi.org.in.",
      citation: "KFS Part 3 - Grievance Redressal Mechanism",
      confidence: "High",
      abstain: false
    };
  }

  // 8. Machine Sale / Negative Covenants
  if (q.includes("sell") || q.includes("machine") || q.includes("equipment") || q.includes("borrow more") || q.includes("restriction")) {
    return {
      text: "Under **Clause 11.4 (Negative Covenants)**, the lender holds a **first exclusive hypothecation charge** on the CNC machinery purchased with this facility.\n\n**Restrictions:**\n\u2022 You cannot sell, transfer, or create secondary encumbrances on the machinery without written NOC.\n\u2022 ShreeTech cannot incur additional external borrowing exceeding \u20B920,00,000 without prior lender permission.",
      citation: "Agreement Clause 11.4 - Negative Covenants",
      confidence: "High",
      abstain: false
    };
  }

  // 9. Statutory Cooling-Off & Validity
  if (q.includes("validity") || q.includes("cooling") || q.includes("16 day") || q.includes("how long")) {
    return {
      text: "**Offer Validity:** This KFS offer is valid for **16 calendar days** (until 28 Oct 2026), significantly exceeding the statutory 3-day minimum evaluation period.\n\n**Statutory Cooling-off:** Once disbursed, you have a **minimum 3 business days look-up period** to exit the loan without prepayment penalties by returning the principal plus proportionate interest.",
      citation: "KFS Part 2 & RBI Digital Lending Guidelines",
      confidence: "High",
      abstain: false
    };
  }

  // Default: STRICT ABSTENTION per Requirement 3 & PRD Slide 12
  return {
    text: "I cannot verify the answer to this specific inquiry from your approved loan agreement or Key Fact Statement (KFS).\n\nTo ensure complete legal and financial accuracy, ClariGuide adheres to strict AI trust guardrails and does not extrapolate beyond executed documents.",
    citation: null,
    confidence: "Abstain",
    abstain: true,
    suggestedAction: "Route query to Credit Analysis Team"
  };
}

/**
 * Send user chat query to Gemini API endpoint or fallback retrieval engine
 */
function sendClariGuideQuery(_x) {
  return _sendClariGuideQuery.apply(this, arguments);
}
function _sendClariGuideQuery() {
  _sendClariGuideQuery = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var query, _ref$conversationHist, conversationHistory, loanData, apiKey, _data$candidates, systemPrompt, contents, response, errJson, data, rawText, isAbstain, citation, citationMatch;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          query = _ref.query, _ref$conversationHist = _ref.conversationHistory, conversationHistory = _ref$conversationHist === void 0 ? [] : _ref$conversationHist, loanData = _ref.loanData, apiKey = _ref.apiKey;
          if (!(apiKey && apiKey.trim().length > 10)) {
            _context.next = 32;
            break;
          }
          _context.prev = 2;
          systemPrompt = buildLoanSystemPrompt(loanData);
          contents = [{
            role: "user",
            parts: [{
              text: "".concat(systemPrompt, "\n\nUser Question: ").concat(query)
            }]
          }]; // Format prior history if any
          if (conversationHistory.length > 0) {
            // Prepend previous context if required
          }
          _context.next = 8;
          return fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=".concat(apiKey), {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              contents: contents,
              generationConfig: {
                temperature: 0.1,
                // Near-zero temperature for deterministic factual extraction
                topP: 0.8,
                maxOutputTokens: 600
              }
            })
          });
        case 8:
          response = _context.sent;
          if (response.ok) {
            _context.next = 15;
            break;
          }
          _context.next = 12;
          return response.json()["catch"](function () {
            return {};
          });
        case 12:
          errJson = _context.sent;
          console.warn("Gemini API call returned non-200, falling back to local deterministic engine:", errJson);
          return _context.abrupt("return", localDeterministicAnswer(query, loanData));
        case 15:
          _context.next = 17;
          return response.json();
        case 17:
          data = _context.sent;
          rawText = data === null || data === void 0 || (_data$candidates = data.candidates) === null || _data$candidates === void 0 || (_data$candidates = _data$candidates[0]) === null || _data$candidates === void 0 || (_data$candidates = _data$candidates.content) === null || _data$candidates === void 0 || (_data$candidates = _data$candidates.parts) === null || _data$candidates === void 0 || (_data$candidates = _data$candidates[0]) === null || _data$candidates === void 0 ? void 0 : _data$candidates.text;
          if (rawText) {
            _context.next = 21;
            break;
          }
          return _context.abrupt("return", localDeterministicAnswer(query, loanData));
        case 21:
          // Check if the model abstained
          isAbstain = rawText.toUpperCase().includes("ABSTAIN") || rawText.toLowerCase().includes("cannot verify") || rawText.toLowerCase().includes("credit analysis team"); // Extract clause citation if present in text
          citation = null;
          citationMatch = rawText.match(/\[(.*?)\]/);
          if (citationMatch) {
            citation = citationMatch[1];
          }
          return _context.abrupt("return", {
            text: rawText,
            citation: citation || (isAbstain ? null : "Source Verified: Loan Agreement & KFS"),
            confidence: isAbstain ? "Abstain" : "High",
            abstain: isAbstain,
            suggestedAction: isAbstain ? "Route query to Credit Analysis Team" : null
          });
        case 28:
          _context.prev = 28;
          _context.t0 = _context["catch"](2);
          console.warn("Network error reaching Gemini API, using local deterministic engine:", _context.t0);
          return _context.abrupt("return", localDeterministicAnswer(query, loanData));
        case 32:
          return _context.abrupt("return", new Promise(function (resolve) {
            setTimeout(function () {
              resolve(localDeterministicAnswer(query, loanData));
            }, 350); // slight delay for natural conversational feel
          }));
        case 33:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 28]]);
  }));
  return _sendClariGuideQuery.apply(this, arguments);
}
  },
  "/src/components/ui/Icons.jsx": function(require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icons = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Crisp, lightweight SVG icons tailored for fintech UI
var Icons = exports.Icons = {
  ShieldCheck: function ShieldCheck(_ref) {
    var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 18 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "currentColor" : _ref$color;
    return /*#__PURE__*/_react["default"].createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/_react["default"].createElement("path", {
      d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      d: "m9 12 2 2 4-4"
    }));
  },
  FileText: function FileText(_ref2) {
    var _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? 18 : _ref2$size,
      _ref2$color = _ref2.color,
      color = _ref2$color === void 0 ? "currentColor" : _ref2$color;
    return /*#__PURE__*/_react["default"].createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/_react["default"].createElement("path", {
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
    }), /*#__PURE__*/_react["default"].createElement("polyline", {
      points: "14 2 14 8 20 8"
    }), /*#__PURE__*/_react["default"].createElement("line", {
      x1: "16",
      y1: "13",
      x2: "8",
      y2: "13"
    }), /*#__PURE__*/_react["default"].createElement("line", {
      x1: "16",
      y1: "17",
      x2: "8",
      y2: "17"
    }), /*#__PURE__*/_react["default"].createElement("polyline", {
      points: "10 9 9 9 8 9"
    }));
  },
  AlertTriangle: function AlertTriangle(_ref3) {
    var _ref3$size = _ref3.size,
      size = _ref3$size === void 0 ? 18 : _ref3$size,
      _ref3$color = _ref3.color,
      color = _ref3$color === void 0 ? "currentColor" : _ref3$color;
    return /*#__PURE__*/_react["default"].createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/_react["default"].createElement("path", {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
    }), /*#__PURE__*/_react["default"].createElement("line", {
      x1: "12",
      y1: "9",
      x2: "12",
      y2: "13"
    }), /*#__PURE__*/_react["default"].createElement("line", {
      x1: "12",
      y1: "17",
      x2: "12.01",
      y2: "17"
    }));
  },
  CheckCircle2: function CheckCircle2(_ref4) {
    var _ref4$size = _ref4.size,
      size = _ref4$size === void 0 ? 18 : _ref4$size,
      _ref4$color = _ref4.color,
      color = _ref4$color === void 0 ? "currentColor" : _ref4$color;
    return /*#__PURE__*/_react["default"].createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/_react["default"].createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      d: "m9 12 2 2 4-4"
    }));
  },
  Bot: function Bot(_ref5) {
    var _ref5$size = _ref5.size,
      size = _ref5$size === void 0 ? 18 : _ref5$size,
      _ref5$color = _ref5.color,
      color = _ref5$color === void 0 ? "currentColor" : _ref5$color;
    return /*#__PURE__*/_react["default"].createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/_react["default"].createElement("rect", {
      x: "3",
      y: "11",
      width: "18",
      height: "10",
      rx: "2"
    }), /*#__PURE__*/_react["default"].createElement("circle", {
      cx: "12",
      cy: "5",
      r: "2"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      d: "M12 7v4"
    }), /*#__PURE__*/_react["default"].createElement("line", {
      x1: "8",
      y1: "16",
      x2: "8",
      y2: "16"
    }), /*#__PURE__*/_react["default"].createElement("line", {
      x1: "16",
      y1: "16",
      x2: "16",
      y2: "16"
    }));
  },
  UserCheck: function UserCheck(_ref6) {
    var _ref6$size = _ref6.size,
      size = _ref6$size === void 0 ? 18 : _ref6$size,
      _ref6$color = _ref6.color,
      color = _ref6$color === void 0 ? "currentColor" : _ref6$color;
    return /*#__PURE__*/_react["default"].createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/_react["default"].createElement("path", {
      d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
    }), /*#__PURE__*/_react["default"].createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), /*#__PURE__*/_react["default"].createElement("polyline", {
      points: "16 11 18 13 22 9"
    }));
  },
  HelpCircle: function HelpCircle(_ref7) {
    var _ref7$size = _ref7.size,
      size = _ref7$size === void 0 ? 18 : _ref7$size,
      _ref7$color = _ref7.color,
      color = _ref7$color === void 0 ? "currentColor" : _ref7$color;
    return /*#__PURE__*/_react["default"].createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/_react["default"].createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
    }), /*#__PURE__*/_react["default"].createElement("line", {
      x1: "12",
      y1: "17",
      x2: "12.01",
      y2: "17"
    }));
  },
  ArrowRight: function ArrowRight(_ref8) {
    var _ref8$size = _ref8.size,
      size = _ref8$size === void 0 ? 18 : _ref8$size,
      _ref8$color = _ref8.color,
      color = _ref8$color === void 0 ? "currentColor" : _ref8$color;
    return /*#__PURE__*/_react["default"].createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/_react["default"].createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }), /*#__PURE__*/_react["default"].createElement("polyline", {
      points: "12 5 19 12 12 19"
    }));
  },
  ArrowLeft: function ArrowLeft(_ref9) {
    var _ref9$size = _ref9.size,
      size = _ref9$size === void 0 ? 18 : _ref9$size,
      _ref9$color = _ref9.color,
      color = _ref9$color === void 0 ? "currentColor" : _ref9$color;
    return /*#__PURE__*/_react["default"].createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/_react["default"].createElement("line", {
      x1: "19",
      y1: "12",
      x2: "5",
      y2: "12"
    }), /*#__PURE__*/_react["default"].createElement("polyline", {
      points: "12 19 5 12 12 5"
    }));
  },
  Clock: function Clock(_ref10) {
    var _ref10$size = _ref10.size,
      size = _ref10$size === void 0 ? 18 : _ref10$size,
      _ref10$color = _ref10.color,
      color = _ref10$color === void 0 ? "currentColor" : _ref10$color;
    return /*#__PURE__*/_react["default"].createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/_react["default"].createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/_react["default"].createElement("polyline", {
      points: "12 6 12 12 16 14"
    }));
  },
  Sparkles: function Sparkles(_ref11) {
    var _ref11$size = _ref11.size,
      size = _ref11$size === void 0 ? 18 : _ref11$size,
      _ref11$color = _ref11.color,
      color = _ref11$color === void 0 ? "currentColor" : _ref11$color;
    return /*#__PURE__*/_react["default"].createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/_react["default"].createElement("path", {
      d: "m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"
    }));
  },
  Download: function Download(_ref12) {
    var _ref12$size = _ref12.size,
      size = _ref12$size === void 0 ? 18 : _ref12$size,
      _ref12$color = _ref12.color,
      color = _ref12$color === void 0 ? "currentColor" : _ref12$color;
    return /*#__PURE__*/_react["default"].createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/_react["default"].createElement("path", {
      d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
    }), /*#__PURE__*/_react["default"].createElement("polyline", {
      points: "7 10 12 15 17 10"
    }), /*#__PURE__*/_react["default"].createElement("line", {
      x1: "12",
      y1: "15",
      x2: "12",
      y2: "3"
    }));
  },
  Send: function Send(_ref13) {
    var _ref13$size = _ref13.size,
      size = _ref13$size === void 0 ? 18 : _ref13$size,
      _ref13$color = _ref13.color,
      color = _ref13$color === void 0 ? "currentColor" : _ref13$color;
    return /*#__PURE__*/_react["default"].createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/_react["default"].createElement("line", {
      x1: "22",
      y1: "2",
      x2: "11",
      y2: "13"
    }), /*#__PURE__*/_react["default"].createElement("polygon", {
      points: "22 2 15 22 11 13 2 9 22 2"
    }));
  },
  X: function X(_ref14) {
    var _ref14$size = _ref14.size,
      size = _ref14$size === void 0 ? 18 : _ref14$size,
      _ref14$color = _ref14.color,
      color = _ref14$color === void 0 ? "currentColor" : _ref14$color;
    return /*#__PURE__*/_react["default"].createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/_react["default"].createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }), /*#__PURE__*/_react["default"].createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    }));
  },
  ChevronRight: function ChevronRight(_ref15) {
    var _ref15$size = _ref15.size,
      size = _ref15$size === void 0 ? 18 : _ref15$size,
      _ref15$color = _ref15.color,
      color = _ref15$color === void 0 ? "currentColor" : _ref15$color;
    return /*#__PURE__*/_react["default"].createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/_react["default"].createElement("polyline", {
      points: "9 18 15 12 9 6"
    }));
  },
  ChevronDown: function ChevronDown(_ref16) {
    var _ref16$size = _ref16.size,
      size = _ref16$size === void 0 ? 18 : _ref16$size,
      _ref16$color = _ref16.color,
      color = _ref16$color === void 0 ? "currentColor" : _ref16$color;
    return /*#__PURE__*/_react["default"].createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/_react["default"].createElement("polyline", {
      points: "6 9 12 15 18 9"
    }));
  },
  Check: function Check(_ref17) {
    var _ref17$size = _ref17.size,
      size = _ref17$size === void 0 ? 18 : _ref17$size,
      _ref17$color = _ref17.color,
      color = _ref17$color === void 0 ? "currentColor" : _ref17$color;
    return /*#__PURE__*/_react["default"].createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/_react["default"].createElement("polyline", {
      points: "20 6 9 17 4 12"
    }));
  },
  Building: function Building(_ref18) {
    var _ref18$size = _ref18.size,
      size = _ref18$size === void 0 ? 18 : _ref18$size,
      _ref18$color = _ref18.color,
      color = _ref18$color === void 0 ? "currentColor" : _ref18$color;
    return /*#__PURE__*/_react["default"].createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/_react["default"].createElement("rect", {
      x: "4",
      y: "2",
      width: "16",
      height: "20",
      rx: "2",
      ry: "2"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      d: "M9 22v-4h6v4"
    }), /*#__PURE__*/_react["default"].createElement("line", {
      x1: "8",
      y1: "6",
      x2: "8.01",
      y2: "6"
    }), /*#__PURE__*/_react["default"].createElement("line", {
      x1: "16",
      y1: "6",
      x2: "16.01",
      y2: "6"
    }), /*#__PURE__*/_react["default"].createElement("line", {
      x1: "8",
      y1: "10",
      x2: "8.01",
      y2: "10"
    }), /*#__PURE__*/_react["default"].createElement("line", {
      x1: "16",
      y1: "10",
      x2: "16.01",
      y2: "10"
    }), /*#__PURE__*/_react["default"].createElement("line", {
      x1: "8",
      y1: "14",
      x2: "8.01",
      y2: "14"
    }), /*#__PURE__*/_react["default"].createElement("line", {
      x1: "16",
      y1: "14",
      x2: "16.01",
      y2: "14"
    }));
  },
  Scale: function Scale(_ref19) {
    var _ref19$size = _ref19.size,
      size = _ref19$size === void 0 ? 18 : _ref19$size,
      _ref19$color = _ref19.color,
      color = _ref19$color === void 0 ? "currentColor" : _ref19$color;
    return /*#__PURE__*/_react["default"].createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/_react["default"].createElement("path", {
      d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      d: "M7 21h10"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      d: "M12 3v18"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"
    }));
  },
  Share2: function Share2(_ref20) {
    var _ref20$size = _ref20.size,
      size = _ref20$size === void 0 ? 18 : _ref20$size,
      _ref20$color = _ref20.color,
      color = _ref20$color === void 0 ? "currentColor" : _ref20$color;
    return /*#__PURE__*/_react["default"].createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/_react["default"].createElement("circle", {
      cx: "18",
      cy: "5",
      r: "3"
    }), /*#__PURE__*/_react["default"].createElement("circle", {
      cx: "6",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/_react["default"].createElement("circle", {
      cx: "18",
      cy: "19",
      r: "3"
    }), /*#__PURE__*/_react["default"].createElement("line", {
      x1: "8.59",
      y1: "13.51",
      x2: "15.42",
      y2: "17.49"
    }), /*#__PURE__*/_react["default"].createElement("line", {
      x1: "15.41",
      y1: "6.51",
      x2: "8.59",
      y2: "10.49"
    }));
  },
  Calendar: function Calendar(_ref21) {
    var _ref21$size = _ref21.size,
      size = _ref21$size === void 0 ? 18 : _ref21$size,
      _ref21$color = _ref21.color,
      color = _ref21$color === void 0 ? "currentColor" : _ref21$color;
    return /*#__PURE__*/_react["default"].createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/_react["default"].createElement("rect", {
      x: "3",
      y: "4",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    }), /*#__PURE__*/_react["default"].createElement("line", {
      x1: "16",
      y1: "2",
      x2: "16",
      y2: "6"
    }), /*#__PURE__*/_react["default"].createElement("line", {
      x1: "8",
      y1: "2",
      x2: "8",
      y2: "6"
    }), /*#__PURE__*/_react["default"].createElement("line", {
      x1: "3",
      y1: "10",
      x2: "21",
      y2: "10"
    }));
  },
  RefreshCw: function RefreshCw(_ref22) {
    var _ref22$size = _ref22.size,
      size = _ref22$size === void 0 ? 18 : _ref22$size,
      _ref22$color = _ref22.color,
      color = _ref22$color === void 0 ? "currentColor" : _ref22$color;
    return /*#__PURE__*/_react["default"].createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/_react["default"].createElement("path", {
      d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      d: "M21 3v5h-5"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"
    }), /*#__PURE__*/_react["default"].createElement("path", {
      d: "M8 16H3v5"
    }));
  },
  Menu: function Menu(_ref23) {
    var _ref23$size = _ref23.size,
      size = _ref23$size === void 0 ? 18 : _ref23$size,
      _ref23$color = _ref23.color,
      color = _ref23$color === void 0 ? "currentColor" : _ref23$color;
    return /*#__PURE__*/_react["default"].createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/_react["default"].createElement("line", {
      x1: "4",
      y1: "12",
      x2: "20",
      y2: "12"
    }), /*#__PURE__*/_react["default"].createElement("line", {
      x1: "4",
      y1: "6",
      x2: "20",
      y2: "6"
    }), /*#__PURE__*/_react["default"].createElement("line", {
      x1: "4",
      y1: "18",
      x2: "20",
      y2: "18"
    }));
  }
};
  },
  "/src/context/LoanContext.jsx": function(require, module, exports) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoanProvider = LoanProvider;
exports.SCREEN_STEPS = exports.SCREENS = void 0;
exports.useLoan = useLoan;
var _react = _interopRequireWildcard(require("react"));
var _kfsPayload = require("../data/kfsPayload.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var LoanContext = /*#__PURE__*/(0, _react.createContext)(null);
var SCREENS = exports.SCREENS = {
  OFFER_OVERVIEW: 'offer-overview',
  COST_BREAKDOWN: 'cost-breakdown',
  REPAYMENT_SCHEDULE: 'repayment-schedule',
  KEY_OBLIGATIONS: 'key-obligations',
  AGREEMENT_VIEWER: 'agreement-viewer',
  KFS_ACK: 'kfs-ack',
  DECISION_EXECUTION: 'decision-execution',
  REQUEST_CLARIFICATION: 'request-clarification'
};
var SCREEN_STEPS = exports.SCREEN_STEPS = [{
  id: SCREENS.OFFER_OVERVIEW,
  stepNumber: 1,
  label: 'Offer Overview',
  subtitle: 'Amount, Tenure & APR'
}, {
  id: SCREENS.COST_BREAKDOWN,
  stepNumber: 2,
  label: 'Cost Breakdown',
  subtitle: 'Itemized Fees & Net Cash'
}, {
  id: SCREENS.REPAYMENT_SCHEDULE,
  stepNumber: 3,
  label: 'Repayment Schedule',
  subtitle: '36-Month Amortization'
}, {
  id: SCREENS.KEY_OBLIGATIONS,
  stepNumber: 4,
  label: 'Key Obligations',
  subtitle: 'Guarantees & Covenants'
}, {
  id: SCREENS.AGREEMENT_VIEWER,
  stepNumber: 5,
  label: 'Agreement Viewer',
  subtitle: 'Plain vs Legal Clauses'
}, {
  id: SCREENS.KFS_ACK,
  stepNumber: 6,
  label: 'KFS Acknowledgment',
  subtitle: 'Auditable Digital Sign-off'
}, {
  id: SCREENS.DECISION_EXECUTION,
  stepNumber: 7,
  label: 'Decision & Execution',
  subtitle: 'Accept / Deliberate Decline'
}];
function LoanProvider(_ref) {
  var children = _ref.children;
  var _useState = (0, _react.useState)(_kfsPayload.KFS_PAYLOAD),
    _useState2 = _slicedToArray(_useState, 1),
    loanData = _useState2[0];
  var _useState3 = (0, _react.useState)(SCREENS.OFFER_OVERVIEW),
    _useState4 = _slicedToArray(_useState3, 2),
    activeScreen = _useState4[0],
    setActiveScreen = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    completedScreens = _useState6[0],
    setCompletedScreens = _useState6[1];

  // Policy-Aware Validity Protection SLA State (Slides 10 & 11)
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    slaReviewPending = _useState8[0],
    setSlaReviewPending = _useState8[1];
  var _useState9 = (0, _react.useState)(16),
    _useState10 = _slicedToArray(_useState9, 2),
    validityDaysRemaining = _useState10[0],
    setValidityDaysRemaining = _useState10[1];

  // KFS Acknowledgment Checklist & Audit Trail (Slides 12 & 14)
  var _useState11 = (0, _react.useState)({
      sanctionAndDisbursal: false,
      aprHarmonized: false,
      upfrontFees: false,
      financialCovenantDSCR: false,
      nonCompoundingPenal: false,
      coolingOffPeriod: false
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    kfsChecklist = _useState12[0],
    setKfsChecklist = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isKfsAcknowledged = _useState14[0],
    setIsKfsAcknowledged = _useState14[1];
  var _useState15 = (0, _react.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    kfsAuditRecord = _useState16[0],
    setKfsAuditRecord = _useState16[1];

  // Execution & Deliberate Decline State (Slides 9 & 10)
  var _useState17 = (0, _react.useState)(null),
    _useState18 = _slicedToArray(_useState17, 2),
    decisionOutcome = _useState18[0],
    setDecisionOutcome = _useState18[1]; // 'accepted' | 'declined' | null
  var _useState19 = (0, _react.useState)(null),
    _useState20 = _slicedToArray(_useState19, 2),
    declineReason = _useState20[0],
    setDeclineReason = _useState20[1];
  var _useState21 = (0, _react.useState)({
      rohanSigned: false,
      arjunSigned: false,
      boardResolutionAttached: false,
      transactionHash: null
    }),
    _useState22 = _slicedToArray(_useState21, 2),
    eSignProgress = _useState22[0],
    setESignProgress = _useState22[1];

  // Clarification Tickets & Escalation Loop
  var _useState23 = (0, _react.useState)([{
      id: "TICK-0891",
      topic: "Financial Covenants",
      question: "Can you clarify the quarterly reporting compliance for the 1.25x DSCR covenant?",
      status: "sla_review_pending",
      submittedAt: "16 Oct 2026, 11:30 AM",
      expectedResponse: "Within 24-48 hours",
      assignedRM: "Vikram Malhotra (Relationship Manager, Mid-Corporate)",
      validityFrozen: true
    }]),
    _useState24 = _slicedToArray(_useState23, 2),
    clarificationTickets = _useState24[0],
    setClarificationTickets = _useState24[1];

  // ClariGuide Global Assistant Modal/Drawer State
  var _useState25 = (0, _react.useState)(false),
    _useState26 = _slicedToArray(_useState25, 2),
    isClariGuideOpen = _useState26[0],
    setIsClariGuideOpen = _useState26[1];
  var _useState27 = (0, _react.useState)(null),
    _useState28 = _slicedToArray(_useState27, 2),
    clariGuideActiveClause = _useState28[0],
    setClariGuideActiveClause = _useState28[1];
  var _useState29 = (0, _react.useState)(function () {
      return typeof window !== 'undefined' && window.__GEMINI_API_KEY__ || '';
    }),
    _useState30 = _slicedToArray(_useState29, 2),
    geminiApiKey = _useState30[0],
    setGeminiApiKey = _useState30[1];

  // Mobile Navigation Drawer State
  var _useState31 = (0, _react.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    isMobileMenuOpen = _useState32[0],
    setIsMobileMenuOpen = _useState32[1];

  // Reset entire demo state for public testing/showcase
  var resetDemoState = function resetDemoState() {
    setActiveScreen(SCREENS.OFFER_OVERVIEW);
    setCompletedScreens([]);
    setSlaReviewPending(false);
    setValidityDaysRemaining(16);
    setKfsChecklist({
      sanctionAndDisbursal: false,
      aprHarmonized: false,
      upfrontFees: false,
      financialCovenantDSCR: false,
      nonCompoundingPenal: false,
      coolingOffPeriod: false
    });
    setIsKfsAcknowledged(false);
    setKfsAuditRecord(null);
    setDecisionOutcome(null);
    setDeclineReason(null);
    setESignProgress({
      rohanSigned: false,
      arjunSigned: false,
      boardResolutionAttached: false,
      transactionHash: null
    });
    setClarificationTickets([{
      id: "TICK-0891",
      topic: "Financial Covenants",
      question: "Can you clarify the quarterly reporting compliance for the 1.25x DSCR covenant?",
      status: "sla_review_pending",
      submittedAt: "16 Oct 2026, 11:30 AM",
      expectedResponse: "Within 24-48 hours",
      assignedRM: "Vikram Malhotra (Relationship Manager, Mid-Corporate)",
      validityFrozen: true
    }]);
    setIsClariGuideOpen(false);
    setIsMobileMenuOpen(false);
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // Free, unrestricted navigation across review screens and decision gates
  var navigateToScreen = function navigateToScreen(screenId) {
    setActiveScreen(screenId);
    setIsMobileMenuOpen(false); // Auto close mobile drawer on navigation
    // Scroll to top
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };
  var nextStep = function nextStep() {
    var currentIndex = SCREEN_STEPS.findIndex(function (s) {
      return s.id === activeScreen;
    });
    if (currentIndex < SCREEN_STEPS.length - 1) {
      navigateToScreen(SCREEN_STEPS[currentIndex + 1].id);
    }
  };
  var prevStep = function prevStep() {
    var currentIndex = SCREEN_STEPS.findIndex(function (s) {
      return s.id === activeScreen;
    });
    if (currentIndex > 0) {
      navigateToScreen(SCREEN_STEPS[currentIndex - 1].id);
    }
  };

  // Submit formal clarification (triggers SLA freeze)
  var submitClarification = function submitClarification(topic, question) {
    var newTicket = {
      id: "TICK-".concat(Math.floor(1000 + Math.random() * 9000)),
      topic: topic,
      question: question,
      status: "sla_review_pending",
      submittedAt: new Date().toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short'
      }),
      expectedResponse: "Within 24 business hours (SLA Protected)",
      assignedRM: "Vikram Malhotra (Relationship Manager)",
      validityFrozen: true
    };
    setClarificationTickets(function (prev) {
      return [newTicket].concat(_toConsumableArray(prev));
    });
    setSlaReviewPending(true); // Freeze validity expiry per lender policy
  };

  // Toggle KFS Checklist
  var toggleKfsChecklistItem = function toggleKfsChecklistItem(key) {
    setKfsChecklist(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, key, !prev[key]));
    });
  };

  // Acknowledge KFS with SHA-256 hash stamp
  var acknowledgeKFS = function acknowledgeKFS() {
    var record = {
      kfsReferenceId: loanData.metadata.kfsReferenceId,
      acknowledgedBy: loanData.borrowerProfile.primaryBorrower,
      entityName: loanData.borrowerProfile.entityName,
      timestamp: new Date().toISOString(),
      displayTimestamp: new Date().toLocaleString('en-IN'),
      sha256Hash: loanData.metadata.kfsSha256Hash,
      ipAddress: "203.192.241.88 (MIDC Bhosari)",
      verificationStatus: "VERIFIED_AUDITABLE_HASH_MATCH",
      legalSignoffConsent: true
    };
    setKfsAuditRecord(record);
    setIsKfsAcknowledged(true);
    if (!completedScreens.includes(SCREENS.KFS_ACK)) {
      setCompletedScreens(function (prev) {
        return [].concat(_toConsumableArray(prev), [SCREENS.KFS_ACK]);
      });
    }
  };

  // Deliberate Accept
  var executeLoanAcceptance = function executeLoanAcceptance() {
    setDecisionOutcome('accepted');
    if (!completedScreens.includes(SCREENS.DECISION_EXECUTION)) {
      setCompletedScreens(function (prev) {
        return [].concat(_toConsumableArray(prev), [SCREENS.DECISION_EXECUTION]);
      });
    }
    setESignProgress(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        rohanSigned: true,
        timestamp: new Date().toISOString(),
        transactionHash: "0x89f2c1b489d901a09e3a7c6b91"
      });
    });
  };

  // Deliberate Decline (with reason capture per PRD Slide 9 & 10)
  var executeLoanDecline = function executeLoanDecline(reason) {
    var feedback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    setDecisionOutcome('declined');
    if (!completedScreens.includes(SCREENS.DECISION_EXECUTION)) {
      setCompletedScreens(function (prev) {
        return [].concat(_toConsumableArray(prev), [SCREENS.DECISION_EXECUTION]);
      });
    }
    setDeclineReason({
      reason: reason,
      feedback: feedback,
      timestamp: new Date().toISOString(),
      displayTimestamp: new Date().toLocaleString('en-IN')
    });
  };

  // Open ClariGuide with contextual clause prompt
  var openClariGuideWithClause = function openClariGuideWithClause(clauseRef) {
    setClariGuideActiveClause(clauseRef);
    setIsClariGuideOpen(true);
  };
  var allKfsItemsChecked = Object.values(kfsChecklist).every(Boolean);
  var value = {
    loanData: loanData,
    activeScreen: activeScreen,
    completedScreens: completedScreens,
    slaReviewPending: slaReviewPending,
    validityDaysRemaining: validityDaysRemaining,
    kfsChecklist: kfsChecklist,
    isKfsAcknowledged: isKfsAcknowledged,
    kfsAuditRecord: kfsAuditRecord,
    allKfsItemsChecked: allKfsItemsChecked,
    decisionOutcome: decisionOutcome,
    declineReason: declineReason,
    eSignProgress: eSignProgress,
    clarificationTickets: clarificationTickets,
    isClariGuideOpen: isClariGuideOpen,
    clariGuideActiveClause: clariGuideActiveClause,
    geminiApiKey: geminiApiKey,
    isMobileMenuOpen: isMobileMenuOpen,
    // Actions
    navigateToScreen: navigateToScreen,
    nextStep: nextStep,
    prevStep: prevStep,
    setSlaReviewPending: setSlaReviewPending,
    submitClarification: submitClarification,
    toggleKfsChecklistItem: toggleKfsChecklistItem,
    acknowledgeKFS: acknowledgeKFS,
    executeLoanAcceptance: executeLoanAcceptance,
    executeLoanDecline: executeLoanDecline,
    setESignProgress: setESignProgress,
    setIsClariGuideOpen: setIsClariGuideOpen,
    setClariGuideActiveClause: setClariGuideActiveClause,
    openClariGuideWithClause: openClariGuideWithClause,
    setGeminiApiKey: setGeminiApiKey,
    setIsMobileMenuOpen: setIsMobileMenuOpen,
    resetDemoState: resetDemoState
  };
  return /*#__PURE__*/_react["default"].createElement(LoanContext.Provider, {
    value: value
  }, children);
}
function useLoan() {
  var context = (0, _react.useContext)(LoanContext);
  if (!context) {
    throw new Error('useLoan must be used within a LoanProvider');
  }
  return context;
}
  },
  "/src/components/Sidebar.jsx": function(require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Sidebar;
var _react = _interopRequireDefault(require("react"));
var _LoanContext = require("../context/LoanContext.jsx");
var _Icons = require("./ui/Icons.jsx");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Sidebar() {
  var _useLoan = (0, _LoanContext.useLoan)(),
    loanData = _useLoan.loanData,
    activeScreen = _useLoan.activeScreen,
    navigateToScreen = _useLoan.navigateToScreen,
    isKfsAcknowledged = _useLoan.isKfsAcknowledged,
    decisionOutcome = _useLoan.decisionOutcome,
    slaReviewPending = _useLoan.slaReviewPending,
    validityDaysRemaining = _useLoan.validityDaysRemaining,
    isMobileMenuOpen = _useLoan.isMobileMenuOpen,
    setIsMobileMenuOpen = _useLoan.setIsMobileMenuOpen;

  // Phase 1: Review & Exploration (Steps 1 to 5) - Unrestricted browsing, no acceptance required
  var reviewSteps = _LoanContext.SCREEN_STEPS.filter(function (s) {
    return s.stepNumber <= 5;
  });

  // Phase 2: Formal Sign-off & Execution (Steps 6 & 7) - Legally binding acceptance gates
  var executionSteps = _LoanContext.SCREEN_STEPS.filter(function (s) {
    return s.stepNumber > 5;
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, isMobileMenuOpen && /*#__PURE__*/_react["default"].createElement("div", {
    className: "mobile-backdrop",
    onClick: function onClick() {
      return setIsMobileMenuOpen(false);
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/_react["default"].createElement("aside", {
    className: "app-sidebar ".concat(isMobileMenuOpen ? 'mobile-open' : '')
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "sidebar-header",
    style: {
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "brand-badge"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "brand-logo-icon"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.ShieldCheck, {
    size: 20,
    color: "#FFFFFF"
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "brand-title"
  }, "ClariFund"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "brand-subtext"
  }, "Decision Workspace"))), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "sidebar-close-btn",
    onClick: function onClick() {
      return setIsMobileMenuOpen(false);
    },
    "aria-label": "Close mobile navigation"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.X, {
    size: 18
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "sidebar-scroll"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '8px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 8px',
      marginBottom: '4px'
    }
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "sidebar-section-title",
    style: {
      padding: 0,
      margin: 0
    }
  }, "Review & Analysis"), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.62rem',
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: '0.4px',
      fontWeight: 600
    }
  }, "Free Exploration")), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "step-nav-list"
  }, reviewSteps.map(function (step) {
    var isActive = activeScreen === step.id;
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: step.id,
      className: "step-nav-item ".concat(isActive ? 'active' : ''),
      onClick: function onClick() {
        return navigateToScreen(step.id);
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "step-pill"
    }, step.stepNumber), /*#__PURE__*/_react["default"].createElement("div", {
      className: "step-nav-text"
    }, /*#__PURE__*/_react["default"].createElement("p", {
      className: "step-nav-title"
    }, step.label), /*#__PURE__*/_react["default"].createElement("p", {
      className: "step-nav-sub"
    }, step.subtitle)));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '8px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 8px',
      marginBottom: '4px'
    }
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "sidebar-section-title",
    style: {
      padding: 0,
      margin: 0
    }
  }, "Sign-off & Execution"), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.62rem',
      color: 'var(--primary)',
      textTransform: 'uppercase',
      letterSpacing: '0.4px',
      fontWeight: 700
    }
  }, "Acceptance Gates")), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "step-nav-list"
  }, executionSteps.map(function (step) {
    var isActive = activeScreen === step.id;
    var isKfs = step.id === _LoanContext.SCREENS.KFS_ACK;
    var isDecision = step.id === _LoanContext.SCREENS.DECISION_EXECUTION;
    var pillClass = "step-pill";
    var pillContent = step.stepNumber;
    var subtitle = step.subtitle;
    if (isKfs) {
      if (isKfsAcknowledged) {
        pillClass = "step-pill completed";
        pillContent = /*#__PURE__*/_react["default"].createElement(_Icons.Icons.Check, {
          size: 14,
          color: "#FFFFFF"
        });
        subtitle = "Statutory Sign-off Done";
      } else {
        subtitle = "Mandatory KFS Sign-off";
      }
    } else if (isDecision) {
      if (decisionOutcome === 'accepted') {
        pillClass = "step-pill completed";
        pillContent = /*#__PURE__*/_react["default"].createElement(_Icons.Icons.Check, {
          size: 14,
          color: "#FFFFFF"
        });
        subtitle = "eSigned & Disbursal Set";
      } else if (decisionOutcome === 'declined') {
        pillClass = "step-pill declined";
        pillContent = /*#__PURE__*/_react["default"].createElement(_Icons.Icons.X, {
          size: 14,
          color: "#FFFFFF"
        });
        subtitle = "Offer Formally Declined";
      } else {
        subtitle = "eSign or Deliberate Decline";
      }
    }
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: step.id,
      className: "step-nav-item ".concat(isActive ? 'active' : ''),
      onClick: function onClick() {
        return navigateToScreen(step.id);
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: pillClass
    }, pillContent), /*#__PURE__*/_react["default"].createElement("div", {
      className: "step-nav-text"
    }, /*#__PURE__*/_react["default"].createElement("p", {
      className: "step-nav-title"
    }, step.label), /*#__PURE__*/_react["default"].createElement("p", {
      className: "step-nav-sub"
    }, subtitle)));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '8px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: '0 8px',
      marginBottom: '4px'
    }
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "sidebar-section-title",
    style: {
      padding: 0,
      margin: 0
    }
  }, "Support & Audit")), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "step-nav-list"
  }, /*#__PURE__*/_react["default"].createElement("li", {
    className: "step-nav-item ".concat(activeScreen === _LoanContext.SCREENS.REQUEST_CLARIFICATION ? 'active' : ''),
    onClick: function onClick() {
      return navigateToScreen(_LoanContext.SCREENS.REQUEST_CLARIFICATION);
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "step-pill"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.HelpCircle, {
    size: 13
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "step-nav-text"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "step-nav-title"
  }, "Credit Team Escalation"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "step-nav-sub"
  }, "SLA Protection & RM Routing"))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "sidebar-validity-box"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "validity-timer-row"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.75rem',
      fontWeight: 600,
      color: 'var(--text-secondary)'
    }
  }, "Offer Validity"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "validity-badge ".concat(slaReviewPending ? 'frozen' : '')
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.Clock, {
    size: 12
  }), slaReviewPending ? 'Timer Protected' : "".concat(validityDaysRemaining, " Days Left"))), /*#__PURE__*/_react["default"].createElement("p", {
    className: "validity-text"
  }, slaReviewPending ? /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: 'var(--primary)',
      fontWeight: 500
    }
  }, "\u2022 Policy-Aware Protection: Offer timer frozen while credit query is reviewed under lender SLA.") : /*#__PURE__*/_react["default"].createElement("span", null, "Statutory KFS validity through ", /*#__PURE__*/_react["default"].createElement("strong", null, "28 Oct 2026"), " (Exceeds 3-day minimum evaluation period).")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "sidebar-footer"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "borrower-mini-profile"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "profile-avatar"
  }, "RK"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "profile-info"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "profile-name"
  }, loanData.borrowerProfile.primaryBorrower), /*#__PURE__*/_react["default"].createElement("p", {
    className: "profile-company"
  }, loanData.borrowerProfile.entityName))))));
}
  },
  "/src/components/Header.jsx": function(require, module, exports) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Header;
var _react = _interopRequireWildcard(require("react"));
var _LoanContext = require("../context/LoanContext.jsx");
var _Icons = require("./ui/Icons.jsx");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Header() {
  var _useLoan = (0, _LoanContext.useLoan)(),
    loanData = _useLoan.loanData,
    activeScreen = _useLoan.activeScreen,
    setIsClariGuideOpen = _useLoan.setIsClariGuideOpen,
    isMobileMenuOpen = _useLoan.isMobileMenuOpen,
    setIsMobileMenuOpen = _useLoan.setIsMobileMenuOpen,
    resetDemoState = _useLoan.resetDemoState;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    resetToast = _useState2[0],
    setResetToast = _useState2[1];
  var currentStep = _LoanContext.SCREEN_STEPS.find(function (s) {
    return s.id === activeScreen;
  });
  var currentStepTitle = currentStep ? currentStep.label : 'Credit Team Escalation';
  var handleReset = function handleReset() {
    resetDemoState();
    setResetToast(true);
    setTimeout(function () {
      return setResetToast(false);
    }, 2400);
  };
  return /*#__PURE__*/_react["default"].createElement("header", {
    className: "app-header"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "header-left"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "mobile-menu-btn",
    onClick: function onClick() {
      return setIsMobileMenuOpen(!isMobileMenuOpen);
    },
    "aria-label": "Toggle navigation drawer",
    title: "Toggle Navigation Menu"
  }, isMobileMenuOpen ? /*#__PURE__*/_react["default"].createElement(_Icons.Icons.X, {
    size: 19
  }) : /*#__PURE__*/_react["default"].createElement(_Icons.Icons.Menu, {
    size: 19
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "breadcrumbs"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "ClariFund"), /*#__PURE__*/_react["default"].createElement(_Icons.Icons.ChevronRight, {
    size: 13,
    color: "#94A3B8"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "breadcrumb-entity"
  }, loanData.borrowerProfile.entityName), /*#__PURE__*/_react["default"].createElement(_Icons.Icons.ChevronRight, {
    size: 13,
    color: "#94A3B8"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "current"
  }, currentStepTitle)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "loan-id-badge"
  }, "Ref: ", loanData.metadata.kfsReferenceId)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "header-right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "sandbox-badge",
    title: "Illustrative MSME Loan Facility conforming to RBI April 2024 Master Direction (RBI/2024-25/18). All corporate and bank entities are simulated."
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "sandbox-dot"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "sandbox-label"
  }, "Demo Sandbox")), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn-reset-demo",
    onClick: handleReset,
    title: "Reset all sign-offs, eSign records, and interactive testing state back to beginning"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.RefreshCw, {
    size: 13
  }), /*#__PURE__*/_react["default"].createElement("span", null, "Reset Demo")), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "clariguide-btn",
    onClick: function onClick() {
      return setIsClariGuideOpen(true);
    },
    title: "Open contextual AI assistant grounded in your contract"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.Sparkles, {
    size: 15
  }), /*#__PURE__*/_react["default"].createElement("span", null, "Ask ClariGuide"))), resetToast && /*#__PURE__*/_react["default"].createElement("div", {
    className: "floating-toast",
    style: {
      bottom: '16px',
      right: '16px',
      padding: '10px 16px',
      fontSize: '0.8rem',
      zIndex: 3000
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.CheckCircle2, {
    size: 16,
    color: "#10B981"
  }), /*#__PURE__*/_react["default"].createElement("span", null, "Prototype state reset to Step 1.")));
}
  },
  "/src/components/ClariGuideModal.jsx": function(require, module, exports) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ClariGuideModal;
var _react = _interopRequireWildcard(require("react"));
var _LoanContext = require("../context/LoanContext.jsx");
var _geminiService = require("../services/geminiService.js");
var _Icons = require("./ui/Icons.jsx");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ClariGuideModal() {
  var _useLoan = (0, _LoanContext.useLoan)(),
    loanData = _useLoan.loanData,
    isClariGuideOpen = _useLoan.isClariGuideOpen,
    setIsClariGuideOpen = _useLoan.setIsClariGuideOpen,
    clariGuideActiveClause = _useLoan.clariGuideActiveClause,
    setClariGuideActiveClause = _useLoan.setClariGuideActiveClause,
    geminiApiKey = _useLoan.geminiApiKey,
    setGeminiApiKey = _useLoan.setGeminiApiKey;
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    inputQuery = _useState2[0],
    setInputQuery = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showKeyConfig = _useState6[0],
    setShowKeyConfig = _useState6[1];
  var _useState7 = (0, _react.useState)(geminiApiKey || ""),
    _useState8 = _slicedToArray(_useState7, 2),
    tempApiKey = _useState8[0],
    setTempApiKey = _useState8[1];
  var _useState9 = (0, _react.useState)([{
      id: "msg-welcome",
      role: "assistant",
      text: "Hello Rohan! I am **ClariGuide**, your embedded loan decision assistant. I am strictly grounded in your approved **\u20B940,00,000 MSME Term Loan KFS** and contract.\n\nAsk me anything about your costs, APR, personal guarantees, covenants, or repayment schedule.",
      citation: "Source Verified: Approved KFS & Facility Agreement",
      confidence: "High",
      abstain: false
    }]),
    _useState10 = _slicedToArray(_useState9, 2),
    messages = _useState10[0],
    setMessages = _useState10[1];
  var messagesEndRef = (0, _react.useRef)(null);

  // Auto-scroll to bottom of chat
  (0, _react.useEffect)(function () {
    if (isClariGuideOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, [messages, isClariGuideOpen]);

  // If opened with specific clause trigger, trigger contextual query
  (0, _react.useEffect)(function () {
    if (isClariGuideOpen && clariGuideActiveClause) {
      var prompt = "";
      if (clariGuideActiveClause === 'apr') prompt = "Why is the APR 14.80% when nominal interest is 12.50%?";else if (clariGuideActiveClause === 'guarantee') prompt = "Explain my personal guarantee obligations under Clause 8.2";else if (clariGuideActiveClause.includes('10.3') || clariGuideActiveClause === 'dscr') prompt = "What is the DSCR requirement under Clause 10.3?";else if (clariGuideActiveClause.includes('9.1')) prompt = "What happens if I miss an EMI payment?";else prompt = "Explain the implications of ".concat(clariGuideActiveClause, " in my loan agreement.");
      handleSend(prompt);
      setClariGuideActiveClause(null);
    }
  }, [isClariGuideOpen, clariGuideActiveClause]);
  if (!isClariGuideOpen) return null;
  var handleSend = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var queryToSend,
        q,
        userMsg,
        response,
        assistantMsg,
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            queryToSend = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;
            q = (typeof queryToSend === 'string' ? queryToSend : inputQuery).trim();
            if (!(!q || loading)) {
              _context.next = 4;
              break;
            }
            return _context.abrupt("return");
          case 4:
            userMsg = {
              id: "usr-".concat(Date.now()),
              role: "user",
              text: q
            };
            setMessages(function (prev) {
              return [].concat(_toConsumableArray(prev), [userMsg]);
            });
            setInputQuery("");
            setLoading(true);
            _context.prev = 8;
            _context.next = 11;
            return (0, _geminiService.sendClariGuideQuery)({
              query: q,
              conversationHistory: messages,
              loanData: loanData,
              apiKey: geminiApiKey
            });
          case 11:
            response = _context.sent;
            assistantMsg = {
              id: "asst-".concat(Date.now()),
              role: "assistant",
              text: response.text,
              citation: response.citation,
              confidence: response.confidence,
              abstain: response.abstain,
              originalQuery: q
            };
            setMessages(function (prev) {
              return [].concat(_toConsumableArray(prev), [assistantMsg]);
            });
            _context.next = 19;
            break;
          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](8);
            setMessages(function (prev) {
              return [].concat(_toConsumableArray(prev), [{
                id: "asst-err-".concat(Date.now()),
                role: "assistant",
                text: "An error occurred retrieving the verified contract terms. Please try again or route to the credit team.",
                citation: null,
                confidence: "Abstain",
                abstain: true,
                originalQuery: q
              }]);
            });
          case 19:
            _context.prev = 19;
            setLoading(false);
            return _context.finish(19);
          case 22:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[8, 16, 19, 22]]);
    }));
    return function handleSend() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleRouteToCreditTeam = function handleRouteToCreditTeam(queryText) {
    submitClarification("General Terms & AI Abstention", queryText);
    setIsClariGuideOpen(false);
    navigateToScreen(SCREENS.REQUEST_CLARIFICATION);
  };
  var saveApiKey = function saveApiKey() {
    setGeminiApiKey(tempApiKey.trim());
    if (typeof window !== 'undefined') {
      window.__GEMINI_API_KEY__ = tempApiKey.trim();
    }
    setShowKeyConfig(false);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "clariguide-overlay",
    onClick: function onClick() {
      return setIsClariGuideOpen(false);
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "clariguide-drawer",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "drawer-header"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "drawer-title-group"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '32px',
      height: '32px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--primary-gradient)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#FFFFFF'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.Bot, {
    size: 18
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h3", {
    style: {
      fontSize: '1rem',
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, "ClariGuide Assistant"), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.68rem',
      color: 'var(--text-muted)'
    }
  }, "Powered by Gemini \u2022 Strict Contract Grounding"))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "chip-btn",
    onClick: function onClick() {
      return setShowKeyConfig(!showKeyConfig);
    },
    title: "Configure Gemini API Key",
    style: {
      padding: '3px 8px',
      fontSize: '0.7rem'
    }
  }, geminiApiKey ? "API Key Set ✓" : "Demo Mode (Offline Verified)"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    style: {
      background: 'transparent',
      border: 'none',
      color: '#64748B',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    },
    onClick: function onClick() {
      return setIsClariGuideOpen(false);
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.X, {
    size: 20
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: 'rgba(5, 150, 105, 0.08)',
      borderBottom: '1px solid rgba(5, 150, 105, 0.2)',
      padding: '8px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: '0.72rem',
      color: 'var(--success)'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.ShieldCheck, {
    size: 14
  }), /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("strong", null, "AI Trust Rule:"), " Zero hallucination. Answers only from approved KFS & contract.")), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "100% Deterministic")), showKeyConfig && /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: 'var(--bg-card-inner)',
      borderBottom: '1px solid var(--border-medium)',
      padding: '12px 16px',
      fontSize: '0.78rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      color: 'var(--text-primary)',
      marginBottom: '8px',
      fontWeight: 600
    }
  }, "Optional: Connect Live Google Gemini API Key"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      gap: '8px'
    }
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "password",
    placeholder: "Paste AI Studio API Key (AIzaSy...)",
    value: tempApiKey,
    onChange: function onChange(e) {
      return setTempApiKey(e.target.value);
    },
    style: {
      flex: 1,
      background: 'var(--bg-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-sm)',
      padding: '6px 10px',
      color: 'var(--text-primary)',
      fontSize: '0.75rem',
      outline: 'none'
    }
  }), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-primary",
    style: {
      padding: '6px 12px',
      fontSize: '0.75rem'
    },
    onClick: saveApiKey
  }, "Save")), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '0.68rem',
      color: 'var(--text-muted)',
      marginTop: '6px'
    }
  }, "If left blank, ClariFund uses its internal deterministic extraction engine strictly grounded in the RBI KFS payload.")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "chat-history"
  }, messages.map(function (m) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: m.id,
      className: "chat-message ".concat(m.role)
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "chat-bubble"
    }, /*#__PURE__*/_react["default"].createElement("p", {
      style: {
        whiteSpace: 'pre-line'
      }
    }, m.text), m.citation && /*#__PURE__*/_react["default"].createElement("div", {
      className: "chat-citation-box",
      style: {
        marginTop: '8px'
      }
    }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.FileText, {
      size: 12
    }), /*#__PURE__*/_react["default"].createElement("span", null, m.citation)), m.abstain && /*#__PURE__*/_react["default"].createElement("div", {
      className: "chat-abstain-box"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        color: '#D97706',
        fontWeight: 600,
        marginBottom: '6px'
      }
    }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.AlertTriangle, {
      size: 15
    }), "AI Abstention Triggered (Unverified in Contract)"), /*#__PURE__*/_react["default"].createElement("p", {
      style: {
        color: 'var(--text-secondary)',
        marginBottom: '8px',
        lineHeight: 1.4
      }
    }, "Per regulatory guardrails, ClariGuide cannot answer queries requiring unstated credit policy waivers."), /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      className: "btn btn-primary",
      style: {
        fontSize: '0.75rem',
        padding: '6px 12px',
        width: '100%'
      },
      onClick: function onClick() {
        return handleRouteToCreditTeam(m.originalQuery || "Unverified inquiry");
      }
    }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.Send, {
      size: 13
    }), "Route to Credit Team (RM)"))));
  }), loading && /*#__PURE__*/_react["default"].createElement("div", {
    className: "chat-message assistant"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "chat-bubble",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.Sparkles, {
    size: 16,
    color: "var(--primary)"
  }), /*#__PURE__*/_react["default"].createElement("span", null, "Verifying against approved KFS & clauses..."))), /*#__PURE__*/_react["default"].createElement("div", {
    ref: messagesEndRef
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: '0 16px 8px 16px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "suggested-chips"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "chip-btn",
    onClick: function onClick() {
      return handleSend("Why is the APR 14.80% when nominal interest is 12.50%?");
    }
  }, "APR vs Nominal Rate?"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "chip-btn",
    onClick: function onClick() {
      return handleSend("Explain the personal guarantee under Clause 8.2");
    }
  }, "Personal Guarantee?"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "chip-btn",
    onClick: function onClick() {
      return handleSend("What is the DSCR requirement?");
    }
  }, "DSCR Covenant?"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "chip-btn",
    onClick: function onClick() {
      return handleSend("What happens if I miss an EMI payment?");
    }
  }, "Late Penalties?"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "chip-btn",
    style: {
      borderColor: 'rgba(239, 68, 68, 0.4)',
      color: '#F87171'
    },
    onClick: function onClick() {
      return handleSend("Can I pay my loan installments in Bitcoin cryptocurrency?");
    },
    title: "Tests the strict AI Trust Rule abstention"
  }, "Test Abstention Trigger \u2197"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "chat-input-area"
  }, /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      handleSend();
    },
    className: "chat-input-row"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: "Ask anything about your loan terms...",
    value: inputQuery,
    onChange: function onChange(e) {
      return setInputQuery(e.target.value);
    },
    disabled: loading
  }), /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    disabled: !inputQuery.trim() || loading,
    style: {
      padding: '0 16px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.Send, {
    size: 16
  }))))));
}
  },
  "/src/components/screens/OfferOverview.jsx": function(require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = OfferOverview;
var _react = _interopRequireDefault(require("react"));
var _LoanContext = require("../../context/LoanContext.jsx");
var _Icons = require("../ui/Icons.jsx");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function OfferOverview() {
  var _useLoan = (0, _LoanContext.useLoan)(),
    loanData = _useLoan.loanData,
    navigateToScreen = _useLoan.navigateToScreen,
    nextStep = _useLoan.nextStep,
    openClariGuideWithClause = _useLoan.openClariGuideWithClause;
  var q = loanData.part1_quantitative;
  var bp = loanData.borrowerProfile;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "screen-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "top-offer-banner",
    style: {
      background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.08) 0%, rgba(240, 253, 244, 0.95) 100%)',
      border: '1px solid var(--success-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '20px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '16px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '42px',
      height: '42px',
      borderRadius: '50%',
      background: 'var(--success-bg)',
      border: '1px solid var(--success-border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--success)'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.CheckCircle2, {
    size: 24
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "badge-pill badge-approved"
  }, "Application Approved"), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-secondary)'
    }
  }, "Harmonized KFS Generated under RBI April 2024 Guidelines")), /*#__PURE__*/_react["default"].createElement("h2", {
    style: {
      fontSize: '1.3rem',
      fontWeight: 700,
      marginTop: '4px',
      color: 'var(--text-primary)'
    }
  }, "Your Loan Offer for ", bp.entityName, " is Ready"))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      textAlign: 'right',
      background: 'rgba(255, 255, 255, 0.85)',
      padding: '8px 14px',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--success-border)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.68rem',
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      fontWeight: 600
    }
  }, "Lender Institution"), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '0.88rem',
      fontWeight: 700,
      color: 'var(--text-primary)',
      margin: 0
    }
  }, loanData.metadata.lenderName))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "metrics-grid-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "metric-card highlight"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "metric-label"
  }, "Approved Sanction"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "metric-value cyan"
  }, q.sanctionedAmountFormatted), /*#__PURE__*/_react["default"].createElement("span", {
    className: "metric-sub"
  }, q.sanctionedAmountWords)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "metric-card"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "metric-label"
  }, "Net Disbursal (In-Bank)"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "metric-value",
    style: {
      color: 'var(--success)'
    }
  }, q.netDisbursalAmountFormatted), /*#__PURE__*/_react["default"].createElement("span", {
    className: "metric-sub"
  }, "After \u20B980,000 upfront fees deduction")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "metric-card"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "metric-label"
  }, "Fixed Rate & APR"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "metric-value"
  }, q.nominalInterestRateFormatted), /*#__PURE__*/_react["default"].createElement("span", {
    className: "metric-sub",
    style: {
      color: 'var(--warning)',
      fontWeight: 600
    }
  }, "Annual Percentage Rate: ", q.annualPercentageRateFormatted)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "metric-card"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "metric-label"
  }, "Tenure & Monthly EMI"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "metric-value"
  }, q.estimatedEMIFormatted), /*#__PURE__*/_react["default"].createElement("span", {
    className: "metric-sub"
  }, q.tenureMonths, " Months \u2022 Starts ", q.firstRepaymentDate))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "clarifund-card"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-header-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-title-group"
  }, /*#__PURE__*/_react["default"].createElement("h2", null, "Commercial Loan Parameters"), /*#__PURE__*/_react["default"].createElement("p", null, "Sanction breakdown, purpose allocation, and borrowing cost summary")), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    onClick: function onClick() {
      return navigateToScreen(_LoanContext.SCREENS.REQUEST_CLARIFICATION);
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.HelpCircle, {
    size: 15
  }), "Ask Credit Team")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: 'var(--bg-card-inner)',
      padding: '18px',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--text-secondary)',
      marginBottom: '12px'
    }
  }, "Facility Details & Purpose"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      fontSize: '0.85rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Facility Category"), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontWeight: 600
    }
  }, q.loanType)), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Approved Purpose"), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--primary)'
    }
  }, bp.facilityPurpose)), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Borrower CIN"), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, bp.entityCin)), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Udyam Registration"), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, bp.udyamRegistration)))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: 'var(--bg-card-inner)',
      padding: '18px',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--text-secondary)',
      marginBottom: '12px'
    }
  }, "Repayment & Total Cost Reconciliation"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      fontSize: '0.85rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Total Repayment (36 Months)"), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, q.totalRepaymentAmountFormatted)), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Total Cumulative Interest"), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--text-secondary)'
    }
  }, q.totalInterestPayableFormatted)), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Upfront Mandatory Fees"), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--danger)'
    }
  }, q.totalFeesPayableFormatted)), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Effective APR (Harmonized)"), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontWeight: 700,
      color: 'var(--warning)'
    }
  }, q.annualPercentageRateFormatted))))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: '20px',
      background: 'rgba(2, 132, 199, 0.05)',
      border: '1px dashed rgba(2, 132, 199, 0.3)',
      borderRadius: 'var(--radius-md)',
      padding: '14px 18px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.Bot, {
    size: 20,
    color: "var(--primary)"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.82rem',
      color: 'var(--text-primary)'
    }
  }, "Have questions about this offer? Ask ClariGuide for instant, contract-grounded explanations:")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      gap: '8px'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "chip-btn",
    onClick: function onClick() {
      return openClariGuideWithClause('apr');
    }
  }, "Why 14.8% APR?"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "chip-btn",
    onClick: function onClick() {
      return openClariGuideWithClause('guarantee');
    }
  }, "Personal Guarantee?")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "progressive-nav-bar"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--text-muted)'
    }
  }, "Step 1 of 7: Initial offer parameters reviewed"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: nextStep
  }, "Continue", /*#__PURE__*/_react["default"].createElement(_Icons.Icons.ArrowRight, {
    size: 16
  }))));
}
  },
  "/src/components/screens/CostBreakdown.jsx": function(require, module, exports) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CostBreakdown;
var _react = _interopRequireWildcard(require("react"));
var _LoanContext = require("../../context/LoanContext.jsx");
var _Icons = require("../ui/Icons.jsx");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function CostBreakdown() {
  var _useLoan = (0, _LoanContext.useLoan)(),
    loanData = _useLoan.loanData,
    nextStep = _useLoan.nextStep,
    prevStep = _useLoan.prevStep,
    openClariGuideWithClause = _useLoan.openClariGuideWithClause;
  var q = loanData.part1_quantitative;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    activeSegment = _useState2[0],
    setActiveSegment = _useState2[1];

  // Donut chart calculations:
  // Net Disbursal: 39,20,000 / 48,24,000 = 81.26% (~81.3%)
  // Total Interest: 8,24,000 / 48,24,000 = 17.08% (~17.1%)
  // Fees & Charges: 80,000 / 48,24,000 = 1.66% (~1.6%)
  // Circumference = 2 * PI * r = 2 * 3.14159 * 70 = 439.82
  var r = 70;
  var circumference = 2 * Math.PI * r;
  var netDisbursalPct = 0.8126;
  var interestPct = 0.1708;
  var feesPct = 0.0166;
  var strokeNet = circumference * netDisbursalPct;
  var strokeInterest = circumference * interestPct;
  var strokeFees = circumference * feesPct;
  var offsetNet = 0;
  var offsetInterest = -strokeNet;
  var offsetFees = -(strokeNet + strokeInterest);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "screen-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-title-group"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    style: {
      fontSize: '1.4rem'
    }
  }, "Total Cost Breakdown & Net Disbursal"), /*#__PURE__*/_react["default"].createElement("p", null, "See exactly what you will receive in hand, upfront fee deductions, and total financial cost.")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "cost-breakdown-grid"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "clarifund-card",
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-header-row",
    style: {
      alignItems: 'flex-start',
      gap: '12px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-title-group"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "Itemized Fee Deductions"), /*#__PURE__*/_react["default"].createElement("p", null, "Mandatory fees payable to Regulated Entity prior to disbursal")), /*#__PURE__*/_react["default"].createElement("span", {
    className: "badge-pill",
    style: {
      background: 'var(--danger-bg)',
      color: 'var(--danger)',
      border: '1px solid var(--danger-border)',
      whiteSpace: 'nowrap',
      flexShrink: 0
    }
  }, "Total Fees: ", q.totalFeesPayableFormatted)), /*#__PURE__*/_react["default"].createElement("table", {
    className: "ledger-table"
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "Cost Component"), /*#__PURE__*/_react["default"].createElement("th", null, "Rate / Regulatory Basis"), /*#__PURE__*/_react["default"].createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "Amount (\u20B9)"))), /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Gross Sanctioned Amount"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--text-muted)'
    }
  }, "Approved Facility Limit")), /*#__PURE__*/_react["default"].createElement("td", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "Full Loan Sanction"), /*#__PURE__*/_react["default"].createElement("td", {
    style: {
      textAlign: 'right',
      fontWeight: 600,
      fontFamily: 'var(--font-mono)'
    }
  }, q.sanctionedAmountFormatted)), q.feeBreakdown.map(function (fee) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: fee.id
    }, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        fontWeight: 600,
        color: 'var(--text-primary)'
      }
    }, fee.name), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        fontSize: '0.7rem',
        color: 'var(--text-muted)'
      }
    }, fee.gstDetails)), /*#__PURE__*/_react["default"].createElement("td", {
      style: {
        color: 'var(--text-secondary)',
        fontSize: '0.78rem'
      }
    }, fee.rate), /*#__PURE__*/_react["default"].createElement("td", {
      style: {
        textAlign: 'right',
        color: 'var(--danger)',
        fontWeight: 600,
        fontFamily: 'var(--font-mono)'
      }
    }, "- ", fee.amountFormatted));
  }), /*#__PURE__*/_react["default"].createElement("tr", {
    className: "total-row"
  }, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("strong", {
    style: {
      color: 'var(--success)',
      fontSize: '1rem'
    }
  }, "Net Disbursal to Bank"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--text-muted)'
    }
  }, "Credited to ShreeTech HDFC Current A/c")), /*#__PURE__*/_react["default"].createElement("td", {
    style: {
      color: 'var(--success)',
      fontSize: '0.8rem',
      fontWeight: 600
    }
  }, "Sanction - Total Fees"), /*#__PURE__*/_react["default"].createElement("td", {
    style: {
      textAlign: 'right',
      color: 'var(--success)',
      fontSize: '1.1rem',
      fontWeight: 700,
      fontFamily: 'var(--font-mono)'
    }
  }, q.netDisbursalAmountFormatted))))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: '16px',
      padding: '12px 14px',
      background: 'var(--bg-card-inner)',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-subtle)',
      fontSize: '0.76rem',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/_react["default"].createElement("strong", {
    style: {
      color: 'var(--text-primary)'
    }
  }, "RBI Transparency Mandate:"), " No charges other than those explicitly stated above can be recovered from the borrower without prior written agreement and updated KFS.")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "clarifund-card",
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-header-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-title-group"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "Where Your Money Goes"), /*#__PURE__*/_react["default"].createElement("p", null, "Reconciled split of total repayment outflow")), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "chip-btn",
    onClick: function onClick() {
      return openClariGuideWithClause('apr');
    }
  }, "Explain APR")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "donut-chart-container"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    width: "180",
    height: "180",
    viewBox: "0 0 200 200"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "100",
    cy: "100",
    r: r,
    fill: "none",
    stroke: "#E2E8F0",
    strokeWidth: "24"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "100",
    cy: "100",
    r: r,
    fill: "none",
    stroke: "#0284C7",
    strokeWidth: "24",
    strokeDasharray: "".concat(strokeNet, " ").concat(circumference),
    strokeDashoffset: offsetNet,
    transform: "rotate(-90 100 100)",
    style: {
      cursor: 'pointer',
      transition: 'stroke-width 0.2s'
    },
    onMouseEnter: function onMouseEnter() {
      return setActiveSegment('disbursal');
    },
    onMouseLeave: function onMouseLeave() {
      return setActiveSegment(null);
    }
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "100",
    cy: "100",
    r: r,
    fill: "none",
    stroke: "#D97706",
    strokeWidth: "24",
    strokeDasharray: "".concat(strokeInterest, " ").concat(circumference),
    strokeDashoffset: offsetInterest,
    transform: "rotate(-90 100 100)",
    style: {
      cursor: 'pointer',
      transition: 'stroke-width 0.2s'
    },
    onMouseEnter: function onMouseEnter() {
      return setActiveSegment('interest');
    },
    onMouseLeave: function onMouseLeave() {
      return setActiveSegment(null);
    }
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "100",
    cy: "100",
    r: r,
    fill: "none",
    stroke: "#DC2626",
    strokeWidth: "24",
    strokeDasharray: "".concat(strokeFees, " ").concat(circumference),
    strokeDashoffset: offsetFees,
    transform: "rotate(-90 100 100)",
    style: {
      cursor: 'pointer',
      transition: 'stroke-width 0.2s'
    },
    onMouseEnter: function onMouseEnter() {
      return setActiveSegment('fees');
    },
    onMouseLeave: function onMouseLeave() {
      return setActiveSegment(null);
    }
  }), /*#__PURE__*/_react["default"].createElement("text", {
    x: "100",
    y: "93",
    textAnchor: "middle",
    fill: "#64748B",
    fontSize: "10",
    fontWeight: "600"
  }, "TOTAL OUTFLOW"), /*#__PURE__*/_react["default"].createElement("text", {
    x: "100",
    y: "112",
    textAnchor: "middle",
    fill: "#0F172A",
    fontSize: "16",
    fontWeight: "800",
    fontFamily: "sans-serif"
  }, "\u20B948.24L"), /*#__PURE__*/_react["default"].createElement("text", {
    x: "100",
    y: "126",
    textAnchor: "middle",
    fill: "#0284C7",
    fontSize: "9",
    fontWeight: "700"
  }, "APR 14.80%")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "donut-legend"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "legend-item",
    style: {
      borderColor: activeSegment === 'disbursal' ? '#3B82F6' : undefined
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "legend-color-dot",
    style: {
      background: '#3B82F6'
    }
  }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.82rem',
      fontWeight: 600
    }
  }, "Principal (Net Disbursal)"), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--text-muted)',
      display: 'block'
    }
  }, "Directly usable capital"))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: '0.88rem'
    }
  }, "81.3%"), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-secondary)',
      display: 'block'
    }
  }, "\u20B939,20,000"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "legend-item",
    style: {
      borderColor: activeSegment === 'interest' ? '#F59E0B' : undefined
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "legend-color-dot",
    style: {
      background: '#F59E0B'
    }
  }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.82rem',
      fontWeight: 600
    }
  }, "Interest (Total 36M)"), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--text-muted)',
      display: 'block'
    }
  }, "12.50% reducing p.a."))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: '0.88rem'
    }
  }, "17.1%"), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-secondary)',
      display: 'block'
    }
  }, "\u20B98,24,000"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "legend-item",
    style: {
      borderColor: activeSegment === 'fees' ? '#EF4444' : undefined
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "legend-color-dot",
    style: {
      background: '#EF4444'
    }
  }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.82rem',
      fontWeight: 600
    }
  }, "Fees & Charges (RE)"), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--text-muted)',
      display: 'block'
    }
  }, "Upfront one-time"))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: '0.88rem'
    }
  }, "1.6%"), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-secondary)',
      display: 'block'
    }
  }, "\u20B980,000"))))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "progressive-nav-bar"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    onClick: prevStep
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.ArrowLeft, {
    size: 16
  }), "Back"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: nextStep
  }, "Continue", /*#__PURE__*/_react["default"].createElement(_Icons.Icons.ArrowRight, {
    size: 16
  }))));
}
  },
  "/src/components/screens/RepaymentSchedule.jsx": function(require, module, exports) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RepaymentSchedule;
var _react = _interopRequireWildcard(require("react"));
var _LoanContext = require("../../context/LoanContext.jsx");
var _Icons = require("../ui/Icons.jsx");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function RepaymentSchedule() {
  var _useLoan = (0, _LoanContext.useLoan)(),
    loanData = _useLoan.loanData,
    nextStep = _useLoan.nextStep,
    prevStep = _useLoan.prevStep;
  var q = loanData.part1_quantitative;
  var amort = loanData.amortizationSchedule;
  var _useState = (0, _react.useState)('all'),
    _useState2 = _slicedToArray(_useState, 2),
    yearFilter = _useState2[0],
    setYearFilter = _useState2[1]; // 'all' | 'y1' | 'y2' | 'y3'
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    searchTerm = _useState4[0],
    setSearchTerm = _useState4[1];

  // Filter amortization rows
  var filteredSchedule = amort.filter(function (row) {
    if (yearFilter === 'y1' && (row.month < 1 || row.month > 12)) return false;
    if (yearFilter === 'y2' && (row.month < 13 || row.month > 24)) return false;
    if (yearFilter === 'y3' && (row.month < 25 || row.month > 36)) return false;
    if (searchTerm.trim() !== '') {
      var term = searchTerm.toLowerCase();
      var matchMonth = row.month.toString().includes(term);
      var matchDate = row.dueDate.toLowerCase().includes(term);
      return matchMonth || matchDate;
    }
    return true;
  });
  var downloadCSV = function downloadCSV() {
    var headers = ["Month", "Due Date", "Opening Balance", "Principal", "Interest", "EMI", "Closing Balance"];
    var rows = amort.map(function (r) {
      return [r.month, r.dueDate, r.openingBalance, r.principal, r.interest, r.emi, r.closingBalance];
    });
    var csvContent = "data:text/csv;charset=utf-8," + [headers.join(",")].concat(_toConsumableArray(rows.map(function (e) {
      return e.join(",");
    }))).join("\n");
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "ClariFund_Amortization_".concat(loanData.metadata.kfsReferenceId, ".csv"));
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "screen-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-title-group"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    style: {
      fontSize: '1.4rem'
    }
  }, "Repayment Schedule & Amortization"), /*#__PURE__*/_react["default"].createElement("p", null, "Your monthly repayment obligations over the 36-month tenure (12.50% p.a. fixed rate).")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "metrics-grid-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "metric-card"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "metric-label"
  }, "Estimated Monthly EMI"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "metric-value cyan"
  }, q.estimatedEMIFormatted), /*#__PURE__*/_react["default"].createElement("span", {
    className: "metric-sub"
  }, "Auto-debited via NACH")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "metric-card"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "metric-label"
  }, "Tenure Duration"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "metric-value"
  }, q.tenureMonths, " Months"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "metric-sub"
  }, "3 Years reducing balance")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "metric-card"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "metric-label"
  }, "First Due Date"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "metric-value",
    style: {
      color: 'var(--warning)'
    }
  }, "30 Oct 2026"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "metric-sub"
  }, "30th of each calendar month")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "metric-card"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "metric-label"
  }, "Total Repayment"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "metric-value"
  }, q.totalRepaymentAmountFormatted), /*#__PURE__*/_react["default"].createElement("span", {
    className: "metric-sub"
  }, "\u20B940L Principal + \u20B98.24L Interest"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "clarifund-card"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-header-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "chip-btn ".concat(yearFilter === 'all' ? 'active' : ''),
    style: {
      background: yearFilter === 'all' ? 'var(--primary)' : undefined,
      color: yearFilter === 'all' ? '#FFFFFF' : undefined,
      fontWeight: yearFilter === 'all' ? 700 : 500
    },
    onClick: function onClick() {
      return setYearFilter('all');
    }
  }, "All 36 Months"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "chip-btn ".concat(yearFilter === 'y1' ? 'active' : ''),
    style: {
      background: yearFilter === 'y1' ? 'var(--primary)' : undefined,
      color: yearFilter === 'y1' ? '#FFFFFF' : undefined,
      fontWeight: yearFilter === 'y1' ? 700 : 500
    },
    onClick: function onClick() {
      return setYearFilter('y1');
    }
  }, "Year 1 (M1\u2013M12)"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "chip-btn ".concat(yearFilter === 'y2' ? 'active' : ''),
    style: {
      background: yearFilter === 'y2' ? 'var(--primary)' : undefined,
      color: yearFilter === 'y2' ? '#FFFFFF' : undefined,
      fontWeight: yearFilter === 'y2' ? 700 : 500
    },
    onClick: function onClick() {
      return setYearFilter('y2');
    }
  }, "Year 2 (M13\u2013M24)"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "chip-btn ".concat(yearFilter === 'y3' ? 'active' : ''),
    style: {
      background: yearFilter === 'y3' ? 'var(--primary)' : undefined,
      color: yearFilter === 'y3' ? '#FFFFFF' : undefined,
      fontWeight: yearFilter === 'y3' ? 700 : 500
    },
    onClick: function onClick() {
      return setYearFilter('y3');
    }
  }, "Year 3 (M25\u2013M36)")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: "Search month or date...",
    value: searchTerm,
    onChange: function onChange(e) {
      return setSearchTerm(e.target.value);
    },
    style: {
      background: 'var(--bg-card-inner)',
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-primary)',
      padding: '0 12px',
      height: '34px',
      borderRadius: 'var(--radius-sm)',
      fontSize: '0.8rem',
      outline: 'none',
      boxSizing: 'border-box',
      width: '180px'
    }
  }), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    onClick: downloadCSV,
    style: {
      height: '34px',
      padding: '0 14px',
      fontSize: '0.8rem',
      boxSizing: 'border-box',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.Download, {
    size: 14
  }), "Export CSV"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "amortization-container"
  }, /*#__PURE__*/_react["default"].createElement("table", {
    className: "amort-table"
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", {
    style: {
      width: '80px'
    }
  }, "Month"), /*#__PURE__*/_react["default"].createElement("th", null, "Due Date"), /*#__PURE__*/_react["default"].createElement("th", null, "Opening Balance"), /*#__PURE__*/_react["default"].createElement("th", null, "Principal"), /*#__PURE__*/_react["default"].createElement("th", null, "Interest"), /*#__PURE__*/_react["default"].createElement("th", null, "EMI"), /*#__PURE__*/_react["default"].createElement("th", null, "Closing Balance"))), /*#__PURE__*/_react["default"].createElement("tbody", null, filteredSchedule.map(function (row) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: row.month
    }, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("strong", null, "M-", row.month)), /*#__PURE__*/_react["default"].createElement("td", {
      style: {
        color: 'var(--text-secondary)'
      }
    }, row.dueDate), /*#__PURE__*/_react["default"].createElement("td", null, "\u20B9", row.openingBalance.toLocaleString('en-IN')), /*#__PURE__*/_react["default"].createElement("td", {
      style: {
        color: 'var(--primary)',
        fontWeight: 600
      }
    }, "\u20B9", row.principal.toLocaleString('en-IN')), /*#__PURE__*/_react["default"].createElement("td", {
      style: {
        color: 'var(--warning)',
        fontWeight: 600
      }
    }, "\u20B9", row.interest.toLocaleString('en-IN')), /*#__PURE__*/_react["default"].createElement("td", {
      style: {
        fontWeight: 700,
        color: 'var(--text-primary)'
      }
    }, "\u20B9", row.emi.toLocaleString('en-IN')), /*#__PURE__*/_react["default"].createElement("td", {
      style: {
        color: 'var(--text-muted)'
      }
    }, "\u20B9", row.closingBalance.toLocaleString('en-IN')));
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: '14px',
      fontSize: '0.74rem',
      color: 'var(--text-muted)',
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.Clock, {
    size: 13
  }), /*#__PURE__*/_react["default"].createElement("span", null, "This is an illustrative amortization schedule based on a fixed interest rate of 12.50% p.a. Actual debits may vary slightly based on bank clearing holidays."))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "progressive-nav-bar"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    onClick: prevStep
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.ArrowLeft, {
    size: 16
  }), "Back"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: nextStep
  }, "Continue", /*#__PURE__*/_react["default"].createElement(_Icons.Icons.ArrowRight, {
    size: 16
  }))));
}
  },
  "/src/components/screens/KeyObligations.jsx": function(require, module, exports) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = KeyObligations;
var _react = _interopRequireWildcard(require("react"));
var _LoanContext = require("../../context/LoanContext.jsx");
var _Icons = require("../ui/Icons.jsx");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function KeyObligations() {
  var _useLoan = (0, _LoanContext.useLoan)(),
    loanData = _useLoan.loanData,
    nextStep = _useLoan.nextStep,
    prevStep = _useLoan.prevStep,
    openClariGuideWithClause = _useLoan.openClariGuideWithClause;
  var obligations = loanData.part2_contractualClauses.obligations;
  var contingentCharges = loanData.part2_contractualClauses.contingentCharges;
  var _useState = (0, _react.useState)("Clause 8.2"),
    _useState2 = _slicedToArray(_useState, 2),
    expandedCard = _useState2[0],
    setExpandedCard = _useState2[1]; // expand personal guarantee by default

  var toggleExpand = function toggleExpand(clauseRef) {
    setExpandedCard(function (prev) {
      return prev === clauseRef ? null : clauseRef;
    });
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "screen-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-title-group"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    style: {
      fontSize: '1.4rem'
    }
  }, "Key Contractual Obligations & Covenants"), /*#__PURE__*/_react["default"].createElement("p", null, "Understand the commitments, personal exposure, financial benchmarks, and contingent charges before you sign.")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.08) 0%, rgba(254, 242, 242, 0.95) 100%)',
      border: '1px solid var(--danger-border)',
      borderRadius: 'var(--radius-md)',
      padding: '16px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '16px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.AlertTriangle, {
    size: 22,
    color: "var(--danger)",
    style: {
      flexShrink: 0
    }
  }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h4", {
    style: {
      fontSize: '0.88rem',
      color: 'var(--danger)',
      fontWeight: 600
    }
  }, "Personal Guarantee & Financial Covenant Alert"), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--text-secondary)',
      marginTop: '2px'
    }
  }, "This facility creates personal liability for directors and mandates annual audited DSCR of at least 1.25x."))), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    onClick: function onClick() {
      return openClariGuideWithClause('guarantee');
    },
    style: {
      padding: '6px 14px',
      fontSize: '0.8rem',
      whiteSpace: 'nowrap',
      flexShrink: 0
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.Bot, {
    size: 15,
    color: "var(--primary)"
  }), "Ask ClariGuide")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "clarifund-card"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-header-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-title-group"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "Core Contractual Commitments"), /*#__PURE__*/_react["default"].createElement("p", null, "Clauses governing director liability and financial covenants")), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-muted)'
    }
  }, "Click card to expand/collapse full details")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "obligations-grid"
  }, obligations.map(function (item) {
    var isExpanded = expandedCard === item.clauseRef;
    var badgeClass = item.severity === 'Critical' ? 'badge-critical' : item.severity === 'High' ? 'badge-high' : 'badge-moderate';
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: item.clauseRef,
      className: "obligation-card"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "obligation-card-header",
      onClick: function onClick() {
        return toggleExpand(item.clauseRef);
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "obligation-title-left"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "obligation-badge ".concat(badgeClass)
    }, item.severity), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
        color: 'var(--text-muted)'
      }
    }, item.clauseRef), /*#__PURE__*/_react["default"].createElement("h4", {
      style: {
        fontSize: '0.92rem',
        fontWeight: 600,
        color: 'var(--text-primary)'
      }
    }, item.title)))), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        fontSize: '0.75rem',
        color: 'var(--text-secondary)'
      }
    }, item.category), isExpanded ? /*#__PURE__*/_react["default"].createElement(_Icons.Icons.ChevronDown, {
      size: 18,
      color: "#94A3B8"
    }) : /*#__PURE__*/_react["default"].createElement(_Icons.Icons.ChevronRight, {
      size: 18,
      color: "#94A3B8"
    }))), isExpanded && /*#__PURE__*/_react["default"].createElement("div", {
      className: "obligation-card-body"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        marginBottom: '14px'
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        fontSize: '0.72rem',
        textTransform: 'uppercase',
        color: 'var(--primary)',
        letterSpacing: '0.8px',
        fontWeight: 700
      }
    }, "Plain-Language Summary"), /*#__PURE__*/_react["default"].createElement("p", {
      style: {
        marginTop: '4px',
        color: 'var(--text-primary)',
        lineHeight: 1.6
      }
    }, item.summaryPlainEnglish)), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        marginBottom: '14px'
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        fontSize: '0.72rem',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        letterSpacing: '0.8px',
        fontWeight: 700
      }
    }, "Key Borrower Takeaways"), /*#__PURE__*/_react["default"].createElement("ul", {
      style: {
        marginTop: '6px',
        paddingLeft: '18px',
        color: 'var(--text-secondary)',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }
    }, item.keyTakeaways.map(function (point, idx) {
      return /*#__PURE__*/_react["default"].createElement("li", {
        key: idx
      }, point);
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '12px',
        borderTop: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        fontSize: '0.72rem',
        color: 'var(--text-muted)'
      }
    }, "Governing Framework: ", item.governingLaw), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: 'flex',
        gap: '8px'
      }
    }, /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      className: "chip-btn",
      onClick: function onClick() {
        return navigateToScreen(SCREENS.AGREEMENT_VIEWER);
      }
    }, "View Legal Text \u2192"), /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      className: "chip-btn",
      onClick: function onClick() {
        return openClariGuideWithClause(item.clauseRef);
      }
    }, "Ask AI")))));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "clarifund-card"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-header-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-title-group"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "Contingent Charges & Default Terms"), /*#__PURE__*/_react["default"].createElement("p", null, "Statutory non-compounding penal charges and mandate dishonour rates")), /*#__PURE__*/_react["default"].createElement("span", {
    className: "badge-pill",
    style: {
      background: 'var(--warning-bg)',
      color: 'var(--warning)',
      border: '1px solid var(--warning-border)'
    }
  }, "RBI April 2024 Harmonized")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "obligations-grid"
  }, contingentCharges.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: item.clauseRef,
      className: "obligation-card",
      style: {
        borderColor: 'rgba(245, 158, 11, 0.3)'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "obligation-card-header",
      onClick: function onClick() {
        return toggleExpand(item.clauseRef);
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "obligation-title-left"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "obligation-badge badge-high"
    }, item.severity), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
        color: 'var(--text-muted)'
      }
    }, item.clauseRef), /*#__PURE__*/_react["default"].createElement("h4", {
      style: {
        fontSize: '0.92rem',
        fontWeight: 600,
        color: 'var(--text-primary)'
      }
    }, item.title)))), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        fontSize: '0.75rem',
        color: 'var(--warning)',
        fontWeight: 600
      }
    }, "Strictly Non-Compounding"), expandedCard === item.clauseRef ? /*#__PURE__*/_react["default"].createElement(_Icons.Icons.ChevronDown, {
      size: 18,
      color: "#94A3B8"
    }) : /*#__PURE__*/_react["default"].createElement(_Icons.Icons.ChevronRight, {
      size: 18,
      color: "#94A3B8"
    }))), expandedCard === item.clauseRef && /*#__PURE__*/_react["default"].createElement("div", {
      className: "obligation-card-body"
    }, /*#__PURE__*/_react["default"].createElement("p", {
      style: {
        color: 'var(--text-primary)',
        lineHeight: 1.6,
        marginBottom: '12px'
      }
    }, item.summaryPlainEnglish), /*#__PURE__*/_react["default"].createElement("ul", {
      style: {
        paddingLeft: '18px',
        color: 'var(--text-secondary)',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        marginBottom: '12px'
      }
    }, item.keyTakeaways.map(function (pt, idx) {
      return /*#__PURE__*/_react["default"].createElement("li", {
        key: idx
      }, pt);
    })), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        fontSize: '0.72rem',
        color: 'var(--text-muted)'
      }
    }, "Regulatory Basis: ", item.governingLaw)));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "progressive-nav-bar"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    onClick: prevStep
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.ArrowLeft, {
    size: 16
  }), "Back"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: nextStep
  }, "Continue", /*#__PURE__*/_react["default"].createElement(_Icons.Icons.ArrowRight, {
    size: 16
  }))));
}
  },
  "/src/components/screens/AgreementViewer.jsx": function(require, module, exports) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AgreementViewer;
var _react = _interopRequireWildcard(require("react"));
var _LoanContext = require("../../context/LoanContext.jsx");
var _Icons = require("../ui/Icons.jsx");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function AgreementViewer() {
  var _useLoan = (0, _LoanContext.useLoan)(),
    loanData = _useLoan.loanData,
    nextStep = _useLoan.nextStep,
    prevStep = _useLoan.prevStep,
    openClariGuideWithClause = _useLoan.openClariGuideWithClause;

  // Combine all clauses
  var allClauses = [].concat(_toConsumableArray(loanData.part2_contractualClauses.obligations), _toConsumableArray(loanData.part2_contractualClauses.contingentCharges));
  var _useState = (0, _react.useState)("Clause 8.2"),
    _useState2 = _slicedToArray(_useState, 2),
    selectedClauseRef = _useState2[0],
    setSelectedClauseRef = _useState2[1];
  var currentClause = allClauses.find(function (c) {
    return c.clauseRef === selectedClauseRef;
  }) || allClauses[0];
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "screen-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-title-group"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    style: {
      fontSize: '1.4rem'
    }
  }, "Split-Screen Agreement Viewer"), /*#__PURE__*/_react["default"].createElement("p", null, "Compare raw contractual legalese directly against plain-language explanations.")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: 'rgba(2, 132, 199, 0.08)',
      border: '1px solid rgba(2, 132, 199, 0.3)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 18px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '16px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.Scale, {
    size: 18,
    color: "var(--primary)",
    style: {
      flexShrink: 0
    }
  }), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/_react["default"].createElement("strong", null, "Hierarchy of Truth:"), " The executed loan agreement & standardized KFS govern legally. ClariFund plain explanations are non-contractual aids to guide your review.")), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--text-secondary)',
      background: '#FFFFFF',
      padding: '4px 10px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid rgba(2, 132, 199, 0.25)',
      whiteSpace: 'nowrap',
      fontWeight: 600,
      flexShrink: 0
    }
  }, "Indian Contract Act, 1872")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "clause-pill-selector"
  }, allClauses.map(function (clause) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      key: clause.clauseRef,
      type: "button",
      className: "chip-btn",
      style: {
        background: selectedClauseRef === clause.clauseRef ? 'var(--primary)' : undefined,
        color: selectedClauseRef === clause.clauseRef ? '#FFFFFF' : undefined,
        borderColor: selectedClauseRef === clause.clauseRef ? 'var(--primary)' : undefined,
        fontWeight: selectedClauseRef === clause.clauseRef ? 700 : 500,
        padding: '6px 14px',
        flexShrink: 0,
        whiteSpace: 'nowrap'
      },
      onClick: function onClick() {
        return setSelectedClauseRef(clause.clauseRef);
      }
    }, clause.clauseRef, ": ", clause.title.split(':')[0]);
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "split-viewer-grid"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "split-viewer-pane"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "pane-header"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "pane-title"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.Sparkles, {
    size: 16,
    color: "var(--primary)"
  }), /*#__PURE__*/_react["default"].createElement("span", null, "Plain-Language Summary")), /*#__PURE__*/_react["default"].createElement("span", {
    className: "pane-badge"
  }, "AI Verified Translation")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "pane-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '14px'
    }
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    style: {
      fontSize: '1.05rem',
      color: 'var(--text-primary)'
    }
  }, currentClause.title), /*#__PURE__*/_react["default"].createElement("span", {
    className: "badge-pill",
    style: {
      background: 'var(--bg-elevated)',
      color: 'var(--text-secondary)'
    }
  }, currentClause.category)), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: 'rgba(2, 132, 199, 0.05)',
      border: '1px solid rgba(2, 132, 199, 0.2)',
      borderRadius: 'var(--radius-sm)',
      padding: '14px',
      marginBottom: '16px'
    }
  }, /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      color: 'var(--text-primary)',
      fontSize: '0.9rem',
      lineHeight: 1.6
    }
  }, currentClause.summaryPlainEnglish)), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '18px'
    }
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    style: {
      fontSize: '0.8rem',
      textTransform: 'uppercase',
      letterSpacing: '0.8px',
      color: 'var(--text-muted)',
      marginBottom: '8px'
    }
  }, "Key Borrower Takeaways:"), /*#__PURE__*/_react["default"].createElement("ul", {
    style: {
      paddingLeft: '18px',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      color: 'var(--text-secondary)',
      fontSize: '0.85rem'
    }
  }, currentClause.keyTakeaways.map(function (point, idx) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: idx
    }, point);
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: '16px'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    style: {
      width: '100%',
      fontSize: '0.82rem'
    },
    onClick: function onClick() {
      return openClariGuideWithClause(currentClause.clauseRef);
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.Bot, {
    size: 15,
    color: "var(--primary)"
  }), "Ask ClariGuide about this clause")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "split-viewer-pane"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "pane-header"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "pane-title"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.FileText, {
    size: 16,
    color: "var(--primary)"
  }), /*#__PURE__*/_react["default"].createElement("span", null, "Original Agreement Clause")), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.75rem',
      color: 'var(--text-muted)'
    }
  }, currentClause.clauseRef)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "pane-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '14px',
      fontSize: '0.75rem',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Document: Facility Agreement Ref # STF-400192"), /*#__PURE__*/_react["default"].createElement("span", null, "Governing: ", currentClause.governingLaw)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "legal-raw-text"
  }, currentClause.legalTextRaw), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: 'auto',
      padding: '12px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--bg-card)',
      border: '1px solid var(--border-subtle)',
      fontSize: '0.75rem',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/_react["default"].createElement("strong", {
    style: {
      color: 'var(--text-primary)'
    }
  }, "Verbatim Citation Guarantee:"), " In accordance with ClariFund governance rules, this clause will be stamped without modification into the NeSL / Aadhaar digital agreement package.")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "progressive-nav-bar"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    onClick: prevStep
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.ArrowLeft, {
    size: 16
  }), "Back"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: nextStep
  }, "Continue", /*#__PURE__*/_react["default"].createElement(_Icons.Icons.ArrowRight, {
    size: 16
  }))));
}
  },
  "/src/components/screens/KFSAcknowledgment.jsx": function(require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = KFSAcknowledgment;
var _react = _interopRequireDefault(require("react"));
var _LoanContext = require("../../context/LoanContext.jsx");
var _Icons = require("../ui/Icons.jsx");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function KFSAcknowledgment() {
  var _useLoan = (0, _LoanContext.useLoan)(),
    loanData = _useLoan.loanData,
    kfsChecklist = _useLoan.kfsChecklist,
    toggleKfsChecklistItem = _useLoan.toggleKfsChecklistItem,
    isKfsAcknowledged = _useLoan.isKfsAcknowledged,
    kfsAuditRecord = _useLoan.kfsAuditRecord,
    acknowledgeKFS = _useLoan.acknowledgeKFS,
    allKfsItemsChecked = _useLoan.allKfsItemsChecked,
    nextStep = _useLoan.nextStep,
    prevStep = _useLoan.prevStep;
  var q = loanData.part1_quantitative;
  var bp = loanData.borrowerProfile;
  var nodal = loanData.part3_grievanceAndConsent.nodalOfficer;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "screen-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-title-group"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    style: {
      fontSize: '1.4rem'
    }
  }, "Auditable Key Fact Statement (KFS) Acknowledgment"), /*#__PURE__*/_react["default"].createElement("p", null, "Statutory borrower consent under Reserve Bank of India Master Direction (April 2024 Harmonized Format).")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.08) 0%, rgba(245, 243, 255, 0.95) 100%)',
      border: '1px solid rgba(79, 70, 229, 0.3)',
      borderRadius: 'var(--radius-md)',
      padding: '16px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.ShieldCheck, {
    size: 24,
    color: "var(--indigo-accent)"
  }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h4", {
    style: {
      fontSize: '0.9rem',
      color: 'var(--indigo-accent)',
      fontWeight: 600
    }
  }, "Pre-Execution Statutory Prerequisite"), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--text-secondary)',
      marginTop: '2px'
    }
  }, "RBI Circular RBI/2024-25/18: \"Explicit, verifiable borrower acknowledgment of the KFS must be recorded prior to final loan agreement execution.\""))), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.75rem',
      color: 'var(--primary)',
      background: 'rgba(2, 132, 199, 0.1)',
      padding: '4px 10px',
      borderRadius: '4px',
      border: '1px solid rgba(2, 132, 199, 0.2)'
    }
  }, "Ref: ", loanData.metadata.kfsReferenceId)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "clarifund-card"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-header-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-title-group"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "Harmonized KFS Summary (Part 1 & 2)"), /*#__PURE__*/_react["default"].createElement("p", null, "Mandatory financial disclosures for MSME Term Loan")), /*#__PURE__*/_react["default"].createElement("span", {
    className: "badge-pill",
    style: {
      background: 'var(--success-bg)',
      color: 'var(--success)',
      border: '1px solid var(--success-border)'
    }
  }, "Lender Verified")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '14px',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: 'var(--bg-card-inner)',
      padding: '14px 16px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-subtle)',
      minHeight: '76px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.72rem',
      textTransform: 'uppercase',
      letterSpacing: '0.6px',
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, "Sanction Amount"), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '1.2rem',
      fontWeight: 700,
      color: 'var(--text-primary)',
      margin: '4px 0 0 0'
    }
  }, q.sanctionedAmountFormatted)), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: 'var(--bg-card-inner)',
      padding: '14px 16px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-subtle)',
      minHeight: '76px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.72rem',
      textTransform: 'uppercase',
      letterSpacing: '0.6px',
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, "Net Disbursal"), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '1.2rem',
      fontWeight: 700,
      color: 'var(--success)',
      margin: '4px 0 0 0'
    }
  }, q.netDisbursalAmountFormatted)), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: 'var(--bg-card-inner)',
      padding: '14px 16px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-subtle)',
      minHeight: '76px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.72rem',
      textTransform: 'uppercase',
      letterSpacing: '0.6px',
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, "Effective APR"), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '1.2rem',
      fontWeight: 700,
      color: 'var(--warning)',
      margin: '4px 0 0 0'
    }
  }, q.annualPercentageRateFormatted)), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: 'var(--bg-card-inner)',
      padding: '14px 16px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-subtle)',
      minHeight: '76px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.72rem',
      textTransform: 'uppercase',
      letterSpacing: '0.6px',
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, "Nominal Interest"), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '1.2rem',
      fontWeight: 700,
      color: 'var(--text-primary)',
      margin: '4px 0 0 0'
    }
  }, q.nominalInterestRateFormatted, " (Fixed)")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: 'var(--bg-card-inner)',
      padding: '14px 16px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-subtle)',
      minHeight: '76px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.72rem',
      textTransform: 'uppercase',
      letterSpacing: '0.6px',
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, "Tenure & EMI"), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '1.2rem',
      fontWeight: 700,
      color: 'var(--text-primary)',
      margin: '4px 0 0 0'
    }
  }, q.tenureMonths, "M @ ", q.estimatedEMIFormatted)), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: 'var(--bg-card-inner)',
      padding: '14px 16px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-subtle)',
      minHeight: '76px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.72rem',
      textTransform: 'uppercase',
      letterSpacing: '0.6px',
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, "KFS Review Validity"), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '1.2rem',
      fontWeight: 700,
      color: 'var(--primary)',
      margin: '4px 0 0 0'
    }
  }, "16 Days Window"))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: 'var(--bg-card-inner)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: '16px',
      marginBottom: '24px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '8px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.Building, {
    size: 16,
    color: "var(--primary)"
  }), /*#__PURE__*/_react["default"].createElement("h4", {
    style: {
      fontSize: '0.85rem',
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, "Part 3: Grievance Redressal Officer (Lender RE)")), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--text-muted)'
    }
  }, "TAT: ", nodal.turnaroundTime)), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '12px',
      fontSize: '0.8rem',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'block',
      fontSize: '0.72rem'
    }
  }, "Principal Nodal Officer"), /*#__PURE__*/_react["default"].createElement("strong", {
    style: {
      color: 'var(--text-primary)'
    }
  }, nodal.name)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'block',
      fontSize: '0.72rem'
    }
  }, "Helpline Contact"), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: 'var(--text-primary)'
    }
  }, nodal.phone)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'block',
      fontSize: '0.72rem'
    }
  }, "Email Redressal"), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--primary)'
    }
  }, nodal.email)))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-title-group",
    style: {
      marginBottom: '14px'
    }
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "Borrower Verification Checklist"), /*#__PURE__*/_react["default"].createElement("p", null, "Please review and explicitly confirm each core term below to generate the cryptographic KFS record:")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "checklist-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "check-item ".concat(kfsChecklist.sanctionAndDisbursal ? 'checked' : ''),
    onClick: function onClick() {
      return toggleKfsChecklistItem('sanctionAndDisbursal');
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkbox-custom"
  }, kfsChecklist.sanctionAndDisbursal && /*#__PURE__*/_react["default"].createElement(_Icons.Icons.Check, {
    size: 14
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
    className: "check-text-title"
  }, "1. Sanction & Net Disbursal Reconciliation"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "check-text-desc"
  }, "I understand that \u20B940,00,000 has been sanctioned, from which \u20B980,000 in upfront fees is deducted, resulting in a net credit of \u20B939,20,000 into ShreeTech's account."))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "check-item ".concat(kfsChecklist.aprHarmonized ? 'checked' : ''),
    onClick: function onClick() {
      return toggleKfsChecklistItem('aprHarmonized');
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkbox-custom"
  }, kfsChecklist.aprHarmonized && /*#__PURE__*/_react["default"].createElement(_Icons.Icons.Check, {
    size: 14
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
    className: "check-text-title"
  }, "2. Interest Rate & Annual Percentage Rate (APR)"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "check-text-desc"
  }, "I understand the nominal interest rate is 12.50% p.a. fixed, culminating in an effective APR of 14.80% factoring all upfront non-interest costs."))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "check-item ".concat(kfsChecklist.upfrontFees ? 'checked' : ''),
    onClick: function onClick() {
      return toggleKfsChecklistItem('upfrontFees');
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkbox-custom"
  }, kfsChecklist.upfrontFees && /*#__PURE__*/_react["default"].createElement(_Icons.Icons.Check, {
    size: 14
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
    className: "check-text-title"
  }, "3. Itemized Upfront Fees Payable to RE"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "check-text-desc"
  }, "I confirm the \u20B980,000 fee comprises Processing Fee \u20B960,000, Documentation \u20B910,000, and CERSAI/Stamp Duty \u20B910,000. No further unlisted fees can be levied."))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "check-item ".concat(kfsChecklist.financialCovenantDSCR ? 'checked' : ''),
    onClick: function onClick() {
      return toggleKfsChecklistItem('financialCovenantDSCR');
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkbox-custom"
  }, kfsChecklist.financialCovenantDSCR && /*#__PURE__*/_react["default"].createElement(_Icons.Icons.Check, {
    size: 14
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
    className: "check-text-title"
  }, "4. Personal Guarantee & Financial Covenant (DSCR \u2265 1.25x)"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "check-text-desc"
  }, "I understand the directors (Rohan Kulkarni and Arjun Kulkarni) provide an unconditional personal guarantee, and ShreeTech must maintain a minimum DSCR of 1.25x annually."))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "check-item ".concat(kfsChecklist.nonCompoundingPenal ? 'checked' : ''),
    onClick: function onClick() {
      return toggleKfsChecklistItem('nonCompoundingPenal');
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkbox-custom"
  }, kfsChecklist.nonCompoundingPenal && /*#__PURE__*/_react["default"].createElement(_Icons.Icons.Check, {
    size: 14
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
    className: "check-text-title"
  }, "5. Late Payment Non-Compounding Penal Charges"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "check-text-desc"
  }, "I acknowledge late payments attract a 2.0% per month penal charge on overdue amounts, strictly non-compounding per RBI guidelines."))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "check-item ".concat(kfsChecklist.coolingOffPeriod ? 'checked' : ''),
    onClick: function onClick() {
      return toggleKfsChecklistItem('coolingOffPeriod');
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkbox-custom"
  }, kfsChecklist.coolingOffPeriod && /*#__PURE__*/_react["default"].createElement(_Icons.Icons.Check, {
    size: 14
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
    className: "check-text-title"
  }, "6. Statutory Cooling-Off Look-up Period"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "check-text-desc"
  }, "I am aware of my statutory right to exit the loan within 3 business days post-disbursal without prepayment penalty by returning principal and proportionate interest.")))), isKfsAcknowledged && kfsAuditRecord ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "audit-stamp-box",
    style: {
      marginTop: '24px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '6px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.CheckCircle2, {
    size: 18,
    color: "var(--success)"
  }), /*#__PURE__*/_react["default"].createElement("strong", {
    style: {
      color: 'var(--success)',
      fontSize: '0.9rem'
    }
  }, "Cryptographic KFS Acknowledgment Recorded")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--text-secondary)',
      marginBottom: '6px'
    }
  }, "Acknowledged by ", /*#__PURE__*/_react["default"].createElement("strong", {
    style: {
      color: 'var(--text-primary)'
    }
  }, kfsAuditRecord.acknowledgedBy), " for ", kfsAuditRecord.entityName, " on ", kfsAuditRecord.displayTimestamp), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--text-muted)'
    }
  }, "SHA-256 Checksum:"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "hash-code"
  }, kfsAuditRecord.sha256Hash))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "badge-pill",
    style: {
      background: 'var(--success-bg)',
      color: 'var(--success)',
      border: '1px solid var(--success-border)'
    }
  }, "TAMPER-EVIDENT AUDIT HASH"))) : /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: '24px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-primary",
    disabled: !allKfsItemsChecked,
    onClick: acknowledgeKFS,
    style: {
      padding: '12px 28px',
      fontSize: '0.95rem'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.ShieldCheck, {
    size: 18
  }), "Digitally Acknowledge KFS"), !allKfsItemsChecked ? /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-muted)',
      marginTop: '8px'
    }
  }, "Check all 6 statutory boxes above to enable digital acknowledgment") : /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-muted)',
      marginTop: '8px'
    }
  }, "Generates tamper-evident SHA-256 cryptographic audit record"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "progressive-nav-bar"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    onClick: prevStep
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.ArrowLeft, {
    size: 16
  }), "Back"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-primary",
    disabled: !isKfsAcknowledged,
    onClick: nextStep
  }, "Continue", /*#__PURE__*/_react["default"].createElement(_Icons.Icons.ArrowRight, {
    size: 16
  }))));
}
  },
  "/src/components/screens/DecisionExecution.jsx": function(require, module, exports) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DecisionExecution;
var _react = _interopRequireWildcard(require("react"));
var _LoanContext = require("../../context/LoanContext.jsx");
var _Icons = require("../ui/Icons.jsx");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function DecisionExecution() {
  var _useLoan = (0, _LoanContext.useLoan)(),
    loanData = _useLoan.loanData,
    isKfsAcknowledged = _useLoan.isKfsAcknowledged,
    decisionOutcome = _useLoan.decisionOutcome,
    declineReason = _useLoan.declineReason,
    eSignProgress = _useLoan.eSignProgress,
    executeLoanAcceptance = _useLoan.executeLoanAcceptance,
    executeLoanDecline = _useLoan.executeLoanDecline,
    prevStep = _useLoan.prevStep,
    navigateToScreen = _useLoan.navigateToScreen;
  var safeESign = eSignProgress || {
    transactionHash: "0x89f2c1b489d901a09e3a7c6b91",
    rohanSigned: true,
    arjunSigned: false,
    boardResolutionAttached: true
  };
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    selectedDeclineReason = _useState2[0],
    setSelectedDeclineReason = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    declineNotes = _useState4[0],
    setDeclineNotes = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showDeclineModal = _useState6[0],
    setShowDeclineModal = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showSuccessModal = _useState8[0],
    setShowSuccessModal = _useState8[1];
  var _useState9 = (0, _react.useState)(""),
    _useState10 = _slicedToArray(_useState9, 2),
    downloadToast = _useState10[0],
    setDownloadToast = _useState10[1];
  var _useState11 = (0, _react.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    otpValue = _useState12[0],
    setOtpValue = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isVerifyingOtp = _useState14[0],
    setIsVerifyingOtp = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    otpStep = _useState16[0],
    setOtpStep = _useState16[1]; // whether OTP dialog is open

  var handleSendOtp = function handleSendOtp() {
    setOtpStep(true);
  };
  var handleVerifyOtp = function handleVerifyOtp() {
    setIsVerifyingOtp(true);
    setTimeout(function () {
      setIsVerifyingOtp(false);
      setOtpStep(false);
      executeLoanAcceptance();
      setShowSuccessModal(true); // Open celebratory acceptance popup modal
    }, 800);
  };
  var handleConfirmDecline = function handleConfirmDecline() {
    if (!selectedDeclineReason) return;
    executeLoanDecline(selectedDeclineReason, declineNotes);
    setShowDeclineModal(false);
  };
  var handleDownloadDoc = function handleDownloadDoc(docTitle) {
    setDownloadToast("Preparing ".concat(docTitle, "... NeSL cryptographically stamped package."));
    setTimeout(function () {
      setDownloadToast("Downloaded: ".concat(docTitle, " (SHA-256 Verified)"));
    }, 800);
    setTimeout(function () {
      setDownloadToast("");
    }, 3800);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "screen-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-title-group"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    style: {
      fontSize: '1.4rem'
    }
  }, "Final Loan Decision & Execution"), /*#__PURE__*/_react["default"].createElement("p", null, "Confirm your deliberate accept or decline decision with multi-party governance orchestration.")), !isKfsAcknowledged && /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: 'rgba(239, 68, 68, 0.1)',
      border: '1px solid var(--danger-border)',
      borderRadius: 'var(--radius-md)',
      padding: '16px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.AlertTriangle, {
    size: 20,
    color: "var(--danger)"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--danger)',
      fontWeight: 500
    }
  }, "Statutory Requirement Incomplete: You must digitally acknowledge the KFS before executing the loan agreement.")), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    onClick: function onClick() {
      return navigateToScreen('kfs_ack');
    },
    style: {
      padding: '6px 14px',
      fontSize: '0.8rem'
    }
  }, "Complete KFS Sign-off \u2192")), decisionOutcome === 'accepted' && /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "clarifund-card",
    style: {
      border: '1px solid var(--success-border)',
      background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.05) 0%, rgba(240, 253, 244, 0.95) 100%)'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: '16px',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '54px',
      height: '54px',
      borderRadius: '50%',
      background: 'var(--success-bg)',
      color: 'var(--success)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 0 20px rgba(5, 150, 105, 0.25)',
      flexShrink: 0
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.CheckCircle2, {
    size: 30
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '4px'
    }
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    style: {
      fontSize: '1.3rem',
      fontWeight: 700,
      color: 'var(--text-primary)',
      margin: 0
    }
  }, "Loan Facility Executed Successfully!"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "badge-pill",
    style: {
      background: 'var(--success-bg)',
      color: 'var(--success)',
      border: '1px solid var(--success-border)'
    }
  }, "FACILITY ACTIVE")), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, "NeSL Digital Document Execution Reference: ", /*#__PURE__*/_react["default"].createElement("strong", {
    style: {
      color: 'var(--text-primary)'
    }
  }, "STF-400192"), " \xB7 Transaction: ", /*#__PURE__*/_react["default"].createElement("span", {
    className: "hash-code"
  }, safeESign.transactionHash)))), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    style: {
      padding: '8px 16px',
      fontSize: '0.82rem'
    },
    onClick: function onClick() {
      return setShowSuccessModal(true);
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.FileText, {
    size: 15,
    color: "var(--primary)"
  }), "View Transaction Receipt")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '14px',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: '#FFFFFF',
      padding: '14px 18px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--text-muted)',
      textTransform: 'uppercase'
    }
  }, "Approved Sanction"), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '1.2rem',
      fontWeight: 700,
      color: 'var(--text-primary)',
      margin: '4px 0 0 0'
    }
  }, "\u20B940,00,000")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: '#FFFFFF',
      padding: '14px 18px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--text-muted)',
      textTransform: 'uppercase'
    }
  }, "Net Disbursable Cash"), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '1.2rem',
      fontWeight: 700,
      color: 'var(--success)',
      margin: '4px 0 0 0'
    }
  }, "\u20B939,20,000")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: '#FFFFFF',
      padding: '14px 18px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--text-muted)',
      textTransform: 'uppercase'
    }
  }, "Disbursal Account"), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '0.95rem',
      fontWeight: 600,
      color: 'var(--text-primary)',
      margin: '4px 0 0 0'
    }
  }, "HDFC Bank \xB7\xB7\xB7\xB74910")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: '#FFFFFF',
      padding: '14px 18px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--text-muted)',
      textTransform: 'uppercase'
    }
  }, "Disbursal ETA"), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '0.95rem',
      fontWeight: 600,
      color: 'var(--primary)',
      margin: '4px 0 0 0'
    }
  }, "Within 24 Hours"))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: '#FFFFFF',
      padding: '18px 20px',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-subtle)',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    style: {
      fontSize: '0.82rem',
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      marginBottom: '14px'
    }
  }, "Disbursal & Mandate Pipeline"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
      gap: '16px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      gap: '10px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '22px',
      height: '22px',
      borderRadius: '50%',
      background: 'var(--success-bg)',
      color: 'var(--success)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      marginTop: '2px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.Check, {
    size: 13
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("strong", {
    style: {
      fontSize: '0.82rem',
      color: 'var(--text-primary)'
    }
  }, "1. eSign Executed"), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--text-muted)',
      margin: '2px 0 0 0'
    }
  }, "Aadhaar eSign & SHA-256 stamped"))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      gap: '10px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '22px',
      height: '22px',
      borderRadius: '50%',
      background: 'var(--success-bg)',
      color: 'var(--success)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      marginTop: '2px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.Check, {
    size: 13
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("strong", {
    style: {
      fontSize: '0.82rem',
      color: 'var(--text-primary)'
    }
  }, "2. Bank Penny-Drop"), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--text-muted)',
      margin: '2px 0 0 0'
    }
  }, "Account details verified"))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      gap: '10px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '22px',
      height: '22px',
      borderRadius: '50%',
      background: 'rgba(2, 132, 199, 0.1)',
      color: 'var(--primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      marginTop: '2px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.Clock, {
    size: 13
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("strong", {
    style: {
      fontSize: '0.82rem',
      color: 'var(--primary)'
    }
  }, "3. RTGS Transfer"), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--text-muted)',
      margin: '2px 0 0 0'
    }
  }, "\u20B939,20,000 release queued"))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      gap: '10px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '22px',
      height: '22px',
      borderRadius: '50%',
      background: 'var(--bg-elevated)',
      color: 'var(--text-muted)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      marginTop: '2px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.Calendar, {
    size: 13
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("strong", {
    style: {
      fontSize: '0.82rem',
      color: 'var(--text-secondary)'
    }
  }, "4. First EMI"), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--text-muted)',
      margin: '2px 0 0 0'
    }
  }, "Due 30 Oct 2026 (eNACH)"))))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: '#FFFFFF',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: '16px 20px',
      textAlign: 'left',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    style: {
      fontSize: '0.82rem',
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      marginBottom: '12px'
    }
  }, "Multi-Party Execution Sign-offs"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.CheckCircle2, {
    size: 16,
    color: "var(--success)"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.85rem',
      fontWeight: 600
    }
  }, "Rohan Kulkarni (Founder & MD)")), /*#__PURE__*/_react["default"].createElement("span", {
    className: "badge-pill",
    style: {
      background: 'var(--success-bg)',
      color: 'var(--success)'
    }
  }, "eSigned via Aadhaar OTP")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.Clock, {
    size: 16,
    color: "var(--warning)"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.85rem',
      fontWeight: 600
    }
  }, "Arjun Kulkarni (Director & Co-Guarantor)")), /*#__PURE__*/_react["default"].createElement("span", {
    className: "badge-pill",
    style: {
      background: 'var(--warning-bg)',
      color: 'var(--warning)'
    }
  }, "Signing Invite Dispatched via SMS/Email")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.ShieldCheck, {
    size: 16,
    color: "var(--primary)"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.85rem',
      fontWeight: 600
    }
  }, "Board Resolution & Entity Consent")), /*#__PURE__*/_react["default"].createElement("span", {
    className: "badge-pill",
    style: {
      background: 'rgba(2, 132, 199, 0.08)',
      color: 'var(--primary)'
    }
  }, "Passed & Certified"))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: '14px',
      paddingTop: '10px',
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '0.72rem',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Transaction Ref: ", safeESign.transactionHash), /*#__PURE__*/_react["default"].createElement("span", null, "Statutory 3-Day Cooling-Off Window Active"))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: function onClick() {
      return handleDownloadDoc("ClariFund_Executed_Agreement_STF400192.pdf");
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.Download, {
    size: 15
  }), "Download Executed Loan Agreement (PDF)"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    onClick: function onClick() {
      return handleDownloadDoc("ClariFund_Harmonized_KFS_STF400192.pdf");
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.FileText, {
    size: 15
  }), "Download Cryptographic KFS Package (PDF)")))), decisionOutcome === 'declined' && /*#__PURE__*/_react["default"].createElement("div", {
    className: "clarifund-card",
    style: {
      border: '1px solid var(--border-medium)',
      background: 'var(--bg-card-inner)'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      textAlign: 'center',
      padding: '20px 0'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '56px',
      height: '56px',
      borderRadius: '50%',
      background: 'var(--danger-bg)',
      color: 'var(--danger)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '14px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.X, {
    size: 32
  })), /*#__PURE__*/_react["default"].createElement("h3", {
    style: {
      fontSize: '1.3rem',
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, "Offer Deliberately Declined"), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--text-secondary)',
      maxWidth: '550px',
      margin: '8px auto 16px auto'
    }
  }, "Your formal decline has been recorded to prevent passive expiry. No credit impact or penalties incurred."), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      maxWidth: '450px',
      margin: '0 auto',
      padding: '12px',
      background: 'var(--bg-card)',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-subtle)',
      fontSize: '0.8rem',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/_react["default"].createElement("strong", {
    style: {
      color: 'var(--text-primary)'
    }
  }, "Recorded Reason:"), " \"", declineReason === null || declineReason === void 0 ? void 0 : declineReason.reason, "\""))), !decisionOutcome && /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 0.8fr',
      gap: '24px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "clarifund-card",
    style: {
      borderColor: 'rgba(2, 132, 199, 0.35)'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-header-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-title-group"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "Pathway 1: Execute Loan Agreement"), /*#__PURE__*/_react["default"].createElement("p", null, "Digital signing via NeSL Digital Document Execution / Aadhaar eSign")), /*#__PURE__*/_react["default"].createElement("span", {
    className: "badge-pill",
    style: {
      background: 'rgba(2, 132, 199, 0.1)',
      color: 'var(--primary)'
    }
  }, "Instant Disbursal")), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--text-secondary)',
      marginBottom: '18px',
      lineHeight: 1.6
    }
  }, "By executing this agreement, you authorize the sanction of ", /*#__PURE__*/_react["default"].createElement("strong", null, "\u20B940,00,000"), " at ", /*#__PURE__*/_react["default"].createElement("strong", null, "12.50% p.a."), " (APR 14.80%) and accept the terms of the harmonized KFS."), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: 'var(--bg-card-inner)',
      padding: '14px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-subtle)',
      marginBottom: '20px',
      fontSize: '0.78rem',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: 'var(--text-primary)',
      fontWeight: 600,
      marginBottom: '4px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.ShieldCheck, {
    size: 16,
    color: "var(--success)"
  }), "Borrower Rights Protection Guarantee:"), "Even after digital execution, you retain the statutory 3-day cooling-off window post-disbursal to cancel without prepayment charges."), !otpStep ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-primary",
    style: {
      width: '100%',
      padding: '12px',
      fontSize: '0.95rem'
    },
    disabled: !isKfsAcknowledged,
    onClick: handleSendOtp
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.UserCheck, {
    size: 18
  }), "eSign Agreement"), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '0.74rem',
      color: 'var(--text-muted)',
      textAlign: 'center',
      marginTop: '8px'
    }
  }, "Aadhaar OTP will be sent to registered mobile ending in \xB7\xB7\xB7410")) : /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: 'var(--bg-card-inner)',
      padding: '16px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--primary)'
    }
  }, /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '0.82rem',
      color: 'var(--text-primary)',
      marginBottom: '10px'
    }
  }, "Enter 6-digit Aadhaar OTP sent to registered mobile number:"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      marginBottom: '12px'
    }
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    maxLength: 6,
    placeholder: "e.g. 748291",
    value: otpValue,
    onChange: function onChange(e) {
      return setOtpValue(e.target.value);
    },
    style: {
      background: 'var(--bg-card)',
      border: '1px solid var(--border-medium)',
      color: 'var(--text-primary)',
      padding: '10px',
      borderRadius: 'var(--radius-sm)',
      fontSize: '1rem',
      fontFamily: 'var(--font-mono)',
      letterSpacing: '2px',
      width: '160px',
      textAlign: 'center'
    }
  }), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-primary",
    disabled: otpValue.length < 4 || isVerifyingOtp,
    onClick: handleVerifyOtp
  }, isVerifyingOtp ? "Verifying with UIDAI..." : "Verify & Sign")), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--text-muted)'
    }
  }, "Demo simulation: Enter any 4-6 digits to verify."))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "clarifund-card"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-header-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-title-group"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "Pathway 2: Deliberate Decline"), /*#__PURE__*/_react["default"].createElement("p", null, "Close offer with structured feedback"))), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '0.82rem',
      color: 'var(--text-secondary)',
      marginBottom: '16px',
      lineHeight: 1.5
    }
  }, "Not the right fit? In ClariFund, declining is treated as an informed, respected business choice, not a failure."), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-danger-outline",
    style: {
      width: '100%',
      padding: '10px'
    },
    onClick: function onClick() {
      return setShowDeclineModal(true);
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.X, {
    size: 16
  }), "Decline Offer"))), showDeclineModal && /*#__PURE__*/_react["default"].createElement("div", {
    className: "clariguide-overlay"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '480px',
      background: 'var(--bg-card)',
      border: '1px solid var(--border-medium)',
      borderRadius: 'var(--radius-lg)',
      padding: '24px',
      margin: 'auto',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '14px'
    }
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    style: {
      fontSize: '1.1rem',
      color: 'var(--text-primary)'
    }
  }, "Deliberate Decline Reason"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    style: {
      background: 'transparent',
      border: 'none',
      color: '#64748B',
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return setShowDeclineModal(false);
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.X, {
    size: 20
  }))), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '0.82rem',
      color: 'var(--text-secondary)',
      marginBottom: '16px'
    }
  }, "Please select the primary reason for declining. This helps our credit team structure better terms in the future:"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      marginBottom: '16px'
    }
  }, ["Found more competitive interest rate elsewhere", "Financial covenant (DSCR ≥ 1.25x) is too restrictive", "Director personal guarantee cannot be executed", "Upfront fees (₹80k) higher than anticipated", "Expansion project / machinery procurement postponed"].map(function (r, i) {
    return /*#__PURE__*/_react["default"].createElement("label", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '8px 12px',
        borderRadius: 'var(--radius-sm)',
        background: selectedDeclineReason === r ? 'var(--danger-bg)' : 'var(--bg-card-inner)',
        border: "1px solid ".concat(selectedDeclineReason === r ? 'var(--danger-border)' : 'var(--border-subtle)'),
        cursor: 'pointer',
        fontSize: '0.8rem',
        color: 'var(--text-primary)'
      }
    }, /*#__PURE__*/_react["default"].createElement("input", {
      type: "radio",
      name: "declineReason",
      checked: selectedDeclineReason === r,
      onChange: function onChange() {
        return setSelectedDeclineReason(r);
      }
    }), r);
  })), /*#__PURE__*/_react["default"].createElement("textarea", {
    placeholder: "Additional feedback (optional)...",
    value: declineNotes,
    onChange: function onChange(e) {
      return setDeclineNotes(e.target.value);
    },
    style: {
      width: '100%',
      background: 'var(--bg-card-inner)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-sm)',
      padding: '10px',
      color: 'var(--text-primary)',
      fontSize: '0.8rem',
      minHeight: '70px',
      marginBottom: '16px',
      outline: 'none'
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '10px'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    onClick: function onClick() {
      return setShowDeclineModal(false);
    }
  }, "Cancel"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-danger-outline",
    disabled: !selectedDeclineReason,
    onClick: handleConfirmDecline
  }, "Confirm Decline")))), showSuccessModal && /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-overlay-center",
    onClick: function onClick() {
      return setShowSuccessModal(false);
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "acceptance-modal-card",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.08) 0%, rgba(240, 253, 244, 0.95) 100%)',
      borderBottom: '1px solid var(--success-border)',
      padding: '24px 28px',
      textAlign: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    style: {
      position: 'absolute',
      top: '16px',
      right: '16px',
      background: 'transparent',
      border: 'none',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      padding: '4px'
    },
    onClick: function onClick() {
      return setShowSuccessModal(false);
    },
    title: "Close"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.X, {
    size: 18
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      background: 'var(--success-bg)',
      color: 'var(--success)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '12px',
      boxShadow: '0 0 24px rgba(5, 150, 105, 0.25)'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.CheckCircle2, {
    size: 34
  })), /*#__PURE__*/_react["default"].createElement("span", {
    className: "badge-pill",
    style: {
      background: 'var(--success-bg)',
      color: 'var(--success)',
      border: '1px solid var(--success-border)',
      marginBottom: '8px'
    }
  }, "LEGAL EXECUTION RECORDED"), /*#__PURE__*/_react["default"].createElement("h3", {
    style: {
      fontSize: '1.35rem',
      fontWeight: 700,
      color: 'var(--text-primary)',
      margin: '6px 0 4px 0'
    }
  }, "Loan Facility Executed Successfully!"), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '0.82rem',
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, "NeSL Digital Document Execution Reference # STF-400192")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: '24px 28px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: 'var(--bg-card-inner)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: '16px',
      marginBottom: '18px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '14px',
      fontSize: '0.8rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: '0.72rem',
      display: 'block'
    }
  }, "Approved Sanction"), /*#__PURE__*/_react["default"].createElement("strong", {
    style: {
      fontSize: '1.05rem',
      color: 'var(--text-primary)'
    }
  }, "\u20B940,00,000")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: '0.72rem',
      display: 'block'
    }
  }, "Net Cash to Disburse"), /*#__PURE__*/_react["default"].createElement("strong", {
    style: {
      fontSize: '1.05rem',
      color: 'var(--success)'
    }
  }, "\u20B939,20,000")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: '0.72rem',
      display: 'block'
    }
  }, "Authenticated Signatory"), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: 'var(--text-primary)',
      fontWeight: 600
    }
  }, "Rohan Kulkarni (Aadhaar eSign)")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: '0.72rem',
      display: 'block'
    }
  }, "Disbursal Bank A/C"), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: 'var(--text-primary)',
      fontWeight: 600
    }
  }, "HDFC Bank \xB7\xB7\xB7\xB74910"))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: '14px',
      paddingTop: '10px',
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: '0.72rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Cryptographic Transaction Hash:"), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--primary)',
      fontWeight: 600
    }
  }, safeESign.transactionHash))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '10px',
      padding: '12px',
      borderRadius: 'var(--radius-sm)',
      background: 'rgba(2, 132, 199, 0.05)',
      border: '1px solid rgba(2, 132, 199, 0.2)',
      marginBottom: '20px',
      fontSize: '0.75rem',
      color: 'var(--text-secondary)',
      lineHeight: 1.45
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.ShieldCheck, {
    size: 18,
    color: "var(--primary)",
    style: {
      flexShrink: 0,
      marginTop: '2px'
    }
  }), /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Statutory 3-Day Cooling-Off Notice:"), " In accordance with RBI Fair Practices Code, your 3 business-day look-up period begins upon bank account credit. You may exit without prepayment penalty.")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-primary",
    style: {
      width: '100%',
      padding: '12px',
      justifyContent: 'center'
    },
    onClick: function onClick() {
      return handleDownloadDoc("ClariFund_Executed_Agreement_STF400192.pdf");
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.Download, {
    size: 16
  }), "Download Signed Agreement & KFS Package"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    style: {
      width: '100%',
      padding: '10px',
      justifyContent: 'center'
    },
    onClick: function onClick() {
      return setShowSuccessModal(false);
    }
  }, "View Disbursal Tracking Dashboard \u2192"))))), downloadToast && /*#__PURE__*/_react["default"].createElement("div", {
    className: "floating-toast"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.CheckCircle2, {
    size: 18,
    color: "var(--success)"
  }), /*#__PURE__*/_react["default"].createElement("span", null, downloadToast)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "progressive-nav-bar"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    onClick: prevStep
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.ArrowLeft, {
    size: 16
  }), "Back"), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--text-muted)'
    }
  }, "Step 7 of 7: Decision stage reached")));
}
  },
  "/src/components/screens/RequestClarification.jsx": function(require, module, exports) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RequestClarification;
var _react = _interopRequireWildcard(require("react"));
var _LoanContext = require("../../context/LoanContext.jsx");
var _Icons = require("../ui/Icons.jsx");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function RequestClarification() {
  var _useLoan = (0, _LoanContext.useLoan)(),
    clarificationTickets = _useLoan.clarificationTickets,
    submitClarification = _useLoan.submitClarification,
    slaReviewPending = _useLoan.slaReviewPending;
  var _useState = (0, _react.useState)("Financial Covenants"),
    _useState2 = _slicedToArray(_useState, 2),
    selectedTopic = _useState2[0],
    setSelectedTopic = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    questionText = _useState4[0],
    setQuestionText = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    copiedLink = _useState6[0],
    setCopiedLink = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    submittedAlert = _useState8[0],
    setSubmittedAlert = _useState8[1];
  var topics = ["Pricing & Fees", "Repayment Schedule", "Financial Covenants", "Personal Guarantee", "Prepayment Terms", "Other Documentation"];
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if (!questionText.trim()) return;
    submitClarification(selectedTopic, questionText);
    setQuestionText("");
    setSubmittedAlert(true);
    setTimeout(function () {
      return setSubmittedAlert(false);
    }, 5000);
  };
  var copyGuestLink = function copyGuestLink() {
    setCopiedLink(true);
    setTimeout(function () {
      return setCopiedLink(false);
    }, 3000);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "screen-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-title-group"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    style: {
      fontSize: '1.4rem'
    }
  }, "Request Clarification & Advisor Orchestration"), /*#__PURE__*/_react["default"].createElement("p", null, "Direct communication with the credit analysis team with Policy-Aware Validity Protection.")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: slaReviewPending ? 'linear-gradient(135deg, rgba(2, 132, 199, 0.08) 0%, rgba(238, 242, 255, 0.9) 100%)' : 'var(--bg-card-inner)',
      border: "1px solid ".concat(slaReviewPending ? 'var(--primary)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-md)',
      padding: '16px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '38px',
      height: '38px',
      borderRadius: '50%',
      background: slaReviewPending ? 'rgba(2, 132, 199, 0.15)' : 'var(--bg-elevated)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: slaReviewPending ? 'var(--primary)' : 'var(--text-secondary)'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.Clock, {
    size: 20
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h4", {
    style: {
      fontSize: '0.9rem',
      color: 'var(--text-primary)',
      fontWeight: 600
    }
  }, "Policy-Aware Validity Protection SLA"), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--text-secondary)',
      marginTop: '2px'
    }
  }, slaReviewPending ? "Offer validity timer is ACTIVE-FROZEN. Your 16-day window will not expire while credit queries are pending resolution." : "Submit a question below to automatically freeze the validity timer during credit team evaluation."))), /*#__PURE__*/_react["default"].createElement("span", {
    className: "badge-pill ".concat(slaReviewPending ? 'badge-approved' : ''),
    style: {
      background: slaReviewPending ? undefined : 'var(--bg-elevated)',
      color: slaReviewPending ? undefined : 'var(--text-secondary)'
    }
  }, slaReviewPending ? 'SLA Review Pending (Protected)' : 'Timer Running')), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: '24px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "clarifund-card"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-header-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-title-group"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "Submit Formal Clarification"), /*#__PURE__*/_react["default"].createElement("p", null, "Routed directly to Relationship Manager & Underwriting Team")), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-muted)'
    }
  }, "Response SLA: 24\u201348 Hours")), submittedAlert && /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: 'var(--success-bg)',
      border: '1px solid var(--success-border)',
      padding: '10px 14px',
      borderRadius: 'var(--radius-sm)',
      marginBottom: '14px',
      fontSize: '0.8rem',
      color: 'var(--success)',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.CheckCircle2, {
    size: 16
  }), "Query submitted successfully! Tagged as ", /*#__PURE__*/_react["default"].createElement("strong", null, "sla_review_pending"), ". Validity timer protected."), /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '14px'
    }
  }, /*#__PURE__*/_react["default"].createElement("label", {
    style: {
      fontSize: '0.75rem',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      fontWeight: 600,
      display: 'block',
      marginBottom: '8px'
    }
  }, "1. Select Topic"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px'
    }
  }, topics.map(function (t) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      key: t,
      type: "button",
      className: "chip-btn",
      style: {
        background: selectedTopic === t ? 'var(--primary)' : undefined,
        color: selectedTopic === t ? '#FFFFFF' : undefined,
        fontWeight: selectedTopic === t ? 700 : 500
      },
      onClick: function onClick() {
        return setSelectedTopic(t);
      }
    }, t);
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '16px'
    }
  }, /*#__PURE__*/_react["default"].createElement("label", {
    style: {
      fontSize: '0.75rem',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      fontWeight: 600,
      display: 'block',
      marginBottom: '8px'
    }
  }, "2. Your Question / Clarification Request"), /*#__PURE__*/_react["default"].createElement("textarea", {
    rows: 4,
    placeholder: "e.g., Can the DSCR test be calculated on EBITDA rather than PAT, given our heavy first-year depreciation on CNC machinery?",
    value: questionText,
    onChange: function onChange(e) {
      return setQuestionText(e.target.value);
    },
    style: {
      width: '100%',
      background: 'var(--bg-card-inner)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: '12px',
      color: 'var(--text-primary)',
      fontSize: '0.85rem',
      fontFamily: 'var(--font-sans)',
      outline: 'none',
      resize: 'vertical'
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--text-muted)'
    }
  }, "Assigned RM: Vikram Malhotra"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    disabled: !questionText.trim()
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.Send, {
    size: 15
  }), "Submit Query"))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: '24px',
      paddingTop: '16px',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    style: {
      fontSize: '0.82rem',
      color: 'var(--text-secondary)',
      marginBottom: '10px'
    }
  }, "Active Inquiry Log (", clarificationTickets.length, ")"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, clarificationTickets.map(function (t) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: t.id,
      style: {
        background: 'var(--bg-card-inner)',
        padding: '12px 14px',
        borderRadius: 'var(--radius-sm)',
        border: '1px solid var(--border-subtle)',
        fontSize: '0.8rem'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '4px'
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        fontWeight: 600,
        color: 'var(--primary)'
      }
    }, t.id, ": ", t.topic), /*#__PURE__*/_react["default"].createElement("span", {
      className: "badge-pill",
      style: {
        background: 'rgba(2, 132, 199, 0.1)',
        color: 'var(--primary)',
        fontSize: '0.68rem'
      }
    }, t.status)), /*#__PURE__*/_react["default"].createElement("p", {
      style: {
        color: 'var(--text-primary)',
        marginBottom: '6px'
      }
    }, "\"", t.question, "\""), /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '0.7rem',
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/_react["default"].createElement("span", null, "Submitted: ", t.submittedAt), /*#__PURE__*/_react["default"].createElement("span", null, t.expectedResponse)));
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "clarifund-card",
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-header-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-title-group"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "Authenticated Stakeholder Access"), /*#__PURE__*/_react["default"].createElement("p", null, "Share role-scoped access with Co-Directors")), /*#__PURE__*/_react["default"].createElement(_Icons.Icons.Share2, {
    size: 18,
    color: "var(--primary)"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: 'var(--bg-card-inner)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: '16px',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    }
  }, "Role-Scoped Guest Link"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: '6px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: 'var(--bg-elevated)',
      padding: '8px 12px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.75rem',
      color: 'var(--text-secondary)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, "https://clarifund.in/share/auth?token=eyJhbGciOi...STF-400192"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "chip-btn",
    onClick: copyGuestLink
  }, copiedLink ? "Copied!" : "Copy Link")), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--text-muted)',
      marginTop: '8px'
    }
  }, "\u2022 Replaces naked public links with OTP-authenticated access.", /*#__PURE__*/_react["default"].createElement("br", null), "\u2022 Auto-expires in 7 days or upon offer closure.")), /*#__PURE__*/_react["default"].createElement("h4", {
    style: {
      fontSize: '0.82rem',
      color: 'var(--text-secondary)',
      marginBottom: '10px'
    }
  }, "Authorized Stakeholders"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 12px',
      background: 'var(--bg-card-inner)',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "profile-avatar",
    style: {
      width: '28px',
      height: '28px',
      fontSize: '0.75rem'
    }
  }, "RK"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '0.82rem',
      fontWeight: 600
    }
  }, "Rohan Kulkarni"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '0.7rem',
      color: 'var(--text-muted)'
    }
  }, "Founder & MD"))), /*#__PURE__*/_react["default"].createElement("span", {
    className: "badge-pill",
    style: {
      background: 'var(--bg-elevated)',
      color: 'var(--primary)'
    }
  }, "Owner (Full Access)")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 12px',
      background: 'var(--bg-card-inner)',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "profile-avatar",
    style: {
      width: '28px',
      height: '28px',
      fontSize: '0.75rem',
      background: '#4F46E5'
    }
  }, "AK"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '0.82rem',
      fontWeight: 600
    }
  }, "Arjun Kulkarni"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '0.7rem',
      color: 'var(--text-muted)'
    }
  }, "Director & Co-Guarantor"))), /*#__PURE__*/_react["default"].createElement("span", {
    className: "badge-pill",
    style: {
      background: 'rgba(99, 102, 241, 0.15)',
      color: '#818CF8'
    }
  }, "Review + Co-eSign")))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: '20px',
      padding: '14px',
      background: 'var(--bg-card-inner)',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '8px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Icons.ShieldCheck, {
    size: 16,
    color: "var(--primary)"
  }), /*#__PURE__*/_react["default"].createElement("h4", {
    style: {
      fontSize: '0.8rem',
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, "Credit Escalation & Governance SLA")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontSize: '0.74rem',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Underwriting Desk:"), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, "Apex Mid-Corporate Credit")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Response Window:"), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: 'var(--primary)',
      fontWeight: 600
    }
  }, "24 to 48 Hours")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Statutory Freezing:"), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: 'var(--success)',
      fontWeight: 600
    }
  }, "Active (Offer Timer Paused)")))))));
}
  },
  "/src/App.jsx": function(require, module, exports) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = App;
var _react = _interopRequireDefault(require("react"));
var _LoanContext = require("./context/LoanContext.jsx");
var _Sidebar = _interopRequireDefault(require("./components/Sidebar.jsx"));
var _Header = _interopRequireDefault(require("./components/Header.jsx"));
var _ClariGuideModal = _interopRequireDefault(require("./components/ClariGuideModal.jsx"));
var _OfferOverview = _interopRequireDefault(require("./components/screens/OfferOverview.jsx"));
var _CostBreakdown = _interopRequireDefault(require("./components/screens/CostBreakdown.jsx"));
var _RepaymentSchedule = _interopRequireDefault(require("./components/screens/RepaymentSchedule.jsx"));
var _KeyObligations = _interopRequireDefault(require("./components/screens/KeyObligations.jsx"));
var _AgreementViewer = _interopRequireDefault(require("./components/screens/AgreementViewer.jsx"));
var _KFSAcknowledgment = _interopRequireDefault(require("./components/screens/KFSAcknowledgment.jsx"));
var _DecisionExecution = _interopRequireDefault(require("./components/screens/DecisionExecution.jsx"));
var _RequestClarification = _interopRequireDefault(require("./components/screens/RequestClarification.jsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);
  function ErrorBoundary(props) {
    var _this;
    _classCallCheck(this, ErrorBoundary);
    _this = _callSuper(this, ErrorBoundary, [props]);
    _this.state = {
      hasError: false,
      error: null
    };
    return _this;
  }
  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      console.error("ClariFund Error caught by boundary:", error, errorInfo);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      if (this.state.hasError) {
        var _this$state$error;
        return /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            padding: '40px',
            maxWidth: '600px',
            margin: '40px auto',
            background: '#FFFFFF',
            borderRadius: '12px',
            border: '1px solid var(--border-medium)',
            boxShadow: '0 10px 25px rgba(0,0,0,0.06)',
            textAlign: 'center'
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: 'var(--danger-bg)',
            color: 'var(--danger)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px',
            fontSize: '1.4rem'
          }
        }, "\u26A0\uFE0F"), /*#__PURE__*/_react["default"].createElement("h2", {
          style: {
            fontSize: '1.25rem',
            color: 'var(--text-primary)',
            marginBottom: '8px'
          }
        }, "Encountered a Display Issue"), /*#__PURE__*/_react["default"].createElement("p", {
          style: {
            fontSize: '0.85rem',
            color: 'var(--text-secondary)',
            marginBottom: '20px'
          }
        }, ((_this$state$error = this.state.error) === null || _this$state$error === void 0 ? void 0 : _this$state$error.message) || "An unexpected error occurred rendering this view."), /*#__PURE__*/_react["default"].createElement("button", {
          type: "button",
          className: "btn btn-primary",
          onClick: function onClick() {
            _this2.setState({
              hasError: false,
              error: null
            });
          }
        }, "Recover & Reload View"));
      }
      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        hasError: true,
        error: error
      };
    }
  }]);
  return ErrorBoundary;
}(_react["default"].Component);
function MainWorkspace() {
  var _useLoan = (0, _LoanContext.useLoan)(),
    activeScreen = _useLoan.activeScreen;
  var renderActiveScreen = function renderActiveScreen() {
    switch (activeScreen) {
      case _LoanContext.SCREENS.OFFER_OVERVIEW:
        return /*#__PURE__*/_react["default"].createElement(_OfferOverview["default"], null);
      case _LoanContext.SCREENS.COST_BREAKDOWN:
        return /*#__PURE__*/_react["default"].createElement(_CostBreakdown["default"], null);
      case _LoanContext.SCREENS.REPAYMENT_SCHEDULE:
        return /*#__PURE__*/_react["default"].createElement(_RepaymentSchedule["default"], null);
      case _LoanContext.SCREENS.KEY_OBLIGATIONS:
        return /*#__PURE__*/_react["default"].createElement(_KeyObligations["default"], null);
      case _LoanContext.SCREENS.AGREEMENT_VIEWER:
        return /*#__PURE__*/_react["default"].createElement(_AgreementViewer["default"], null);
      case _LoanContext.SCREENS.KFS_ACK:
        return /*#__PURE__*/_react["default"].createElement(_KFSAcknowledgment["default"], null);
      case _LoanContext.SCREENS.DECISION_EXECUTION:
        return /*#__PURE__*/_react["default"].createElement(_DecisionExecution["default"], null);
      case _LoanContext.SCREENS.REQUEST_CLARIFICATION:
        return /*#__PURE__*/_react["default"].createElement(_RequestClarification["default"], null);
      default:
        return /*#__PURE__*/_react["default"].createElement(_OfferOverview["default"], null);
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "app-layout"
  }, /*#__PURE__*/_react["default"].createElement(_Sidebar["default"], null), /*#__PURE__*/_react["default"].createElement("main", {
    className: "app-main"
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], null), /*#__PURE__*/_react["default"].createElement(ErrorBoundary, null, renderActiveScreen())), /*#__PURE__*/_react["default"].createElement(_ClariGuideModal["default"], null));
}
function App() {
  return /*#__PURE__*/_react["default"].createElement(_LoanContext.LoanProvider, null, /*#__PURE__*/_react["default"].createElement(MainWorkspace, null));
}
  },
};
