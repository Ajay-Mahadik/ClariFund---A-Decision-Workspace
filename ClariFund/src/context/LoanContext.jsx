import React, { createContext, useContext, useState } from 'react';
import { KFS_PAYLOAD } from '../data/kfsPayload.js';

const LoanContext = createContext(null);

export const SCREENS = {
  OFFER_OVERVIEW: 'offer-overview',
  COST_BREAKDOWN: 'cost-breakdown',
  REPAYMENT_SCHEDULE: 'repayment-schedule',
  KEY_OBLIGATIONS: 'key-obligations',
  AGREEMENT_VIEWER: 'agreement-viewer',
  KFS_ACK: 'kfs-ack',
  DECISION_EXECUTION: 'decision-execution',
  REQUEST_CLARIFICATION: 'request-clarification'
};

export const SCREEN_STEPS = [
  { id: SCREENS.OFFER_OVERVIEW, stepNumber: 1, label: 'Offer Overview', subtitle: 'Amount, Tenure & APR' },
  { id: SCREENS.COST_BREAKDOWN, stepNumber: 2, label: 'Cost Breakdown', subtitle: 'Itemized Fees & Net Cash' },
  { id: SCREENS.REPAYMENT_SCHEDULE, stepNumber: 3, label: 'Repayment Schedule', subtitle: '36-Month Amortization' },
  { id: SCREENS.KEY_OBLIGATIONS, stepNumber: 4, label: 'Key Obligations', subtitle: 'Guarantees & Covenants' },
  { id: SCREENS.AGREEMENT_VIEWER, stepNumber: 5, label: 'Agreement Viewer', subtitle: 'Plain vs Legal Clauses' },
  { id: SCREENS.KFS_ACK, stepNumber: 6, label: 'KFS Acknowledgment', subtitle: 'Auditable Digital Sign-off' },
  { id: SCREENS.DECISION_EXECUTION, stepNumber: 7, label: 'Decision & Execution', subtitle: 'Accept / Deliberate Decline' }
];

export function LoanProvider({ children }) {
  const [loanData] = useState(KFS_PAYLOAD);
  const [activeScreen, setActiveScreen] = useState(SCREENS.OFFER_OVERVIEW);
  const [completedScreens, setCompletedScreens] = useState([]);
  
  // Policy-Aware Validity Protection SLA State (Slides 10 & 11)
  const [slaReviewPending, setSlaReviewPending] = useState(false);
  const [validityDaysRemaining, setValidityDaysRemaining] = useState(16);
  
  // KFS Acknowledgment Checklist & Audit Trail (Slides 12 & 14)
  const [kfsChecklist, setKfsChecklist] = useState({
    sanctionAndDisbursal: false,
    aprHarmonized: false,
    upfrontFees: false,
    financialCovenantDSCR: false,
    nonCompoundingPenal: false,
    coolingOffPeriod: false
  });
  const [isKfsAcknowledged, setIsKfsAcknowledged] = useState(false);
  const [kfsAuditRecord, setKfsAuditRecord] = useState(null);

  // Execution & Deliberate Decline State (Slides 9 & 10)
  const [decisionOutcome, setDecisionOutcome] = useState(null); // 'accepted' | 'declined' | null
  const [declineReason, setDeclineReason] = useState(null);
  const [eSignProgress, setESignProgress] = useState({
    rohanSigned: false,
    arjunSigned: false,
    boardResolutionAttached: false,
    transactionHash: null
  });

  // Clarification Tickets & Escalation Loop
  const [clarificationTickets, setClarificationTickets] = useState([
    {
      id: "TICK-0891",
      topic: "Financial Covenants",
      question: "Can you clarify the quarterly reporting compliance for the 1.25x DSCR covenant?",
      status: "sla_review_pending",
      submittedAt: "16 Oct 2026, 11:30 AM",
      expectedResponse: "Within 24-48 hours",
      assignedRM: "Vikram Malhotra (Relationship Manager, Mid-Corporate)",
      validityFrozen: true
    }
  ]);

  // ClariGuide Global Assistant Modal/Drawer State
  const [isClariGuideOpen, setIsClariGuideOpen] = useState(false);
  const [clariGuideActiveClause, setClariGuideActiveClause] = useState(null);
  const [geminiApiKey, setGeminiApiKey] = useState(
    () => (typeof window !== 'undefined' && window.__GEMINI_API_KEY__) || ''
  );

  // Mobile Navigation Drawer State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Reset entire demo state for public testing/showcase
  const resetDemoState = () => {
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
    setClarificationTickets([
      {
        id: "TICK-0891",
        topic: "Financial Covenants",
        question: "Can you clarify the quarterly reporting compliance for the 1.25x DSCR covenant?",
        status: "sla_review_pending",
        submittedAt: "16 Oct 2026, 11:30 AM",
        expectedResponse: "Within 24-48 hours",
        assignedRM: "Vikram Malhotra (Relationship Manager, Mid-Corporate)",
        validityFrozen: true
      }
    ]);
    setIsClariGuideOpen(false);
    setIsMobileMenuOpen(false);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Free, unrestricted navigation across review screens and decision gates
  const navigateToScreen = (screenId) => {
    setActiveScreen(screenId);
    setIsMobileMenuOpen(false); // Auto close mobile drawer on navigation
    // Scroll to top
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const nextStep = () => {
    const currentIndex = SCREEN_STEPS.findIndex(s => s.id === activeScreen);
    if (currentIndex < SCREEN_STEPS.length - 1) {
      navigateToScreen(SCREEN_STEPS[currentIndex + 1].id);
    }
  };

  const prevStep = () => {
    const currentIndex = SCREEN_STEPS.findIndex(s => s.id === activeScreen);
    if (currentIndex > 0) {
      navigateToScreen(SCREEN_STEPS[currentIndex - 1].id);
    }
  };

  // Submit formal clarification (triggers SLA freeze)
  const submitClarification = (topic, question) => {
    const newTicket = {
      id: `TICK-${Math.floor(1000 + Math.random() * 9000)}`,
      topic,
      question,
      status: "sla_review_pending",
      submittedAt: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
      expectedResponse: "Within 24 business hours (SLA Protected)",
      assignedRM: "Vikram Malhotra (Relationship Manager)",
      validityFrozen: true
    };
    setClarificationTickets(prev => [newTicket, ...prev]);
    setSlaReviewPending(true); // Freeze validity expiry per lender policy
  };

  // Toggle KFS Checklist
  const toggleKfsChecklistItem = (key) => {
    setKfsChecklist(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Acknowledge KFS with SHA-256 hash stamp
  const acknowledgeKFS = () => {
    const record = {
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
      setCompletedScreens(prev => [...prev, SCREENS.KFS_ACK]);
    }
  };

  // Deliberate Accept
  const executeLoanAcceptance = () => {
    setDecisionOutcome('accepted');
    if (!completedScreens.includes(SCREENS.DECISION_EXECUTION)) {
      setCompletedScreens(prev => [...prev, SCREENS.DECISION_EXECUTION]);
    }
    setESignProgress(prev => ({
      ...prev,
      rohanSigned: true,
      timestamp: new Date().toISOString(),
      transactionHash: "0x89f2c1b489d901a09e3a7c6b91"
    }));
  };

  // Deliberate Decline (with reason capture per PRD Slide 9 & 10)
  const executeLoanDecline = (reason, feedback = "") => {
    setDecisionOutcome('declined');
    if (!completedScreens.includes(SCREENS.DECISION_EXECUTION)) {
      setCompletedScreens(prev => [...prev, SCREENS.DECISION_EXECUTION]);
    }
    setDeclineReason({
      reason,
      feedback,
      timestamp: new Date().toISOString(),
      displayTimestamp: new Date().toLocaleString('en-IN')
    });
  };

  // Open ClariGuide with contextual clause prompt
  const openClariGuideWithClause = (clauseRef) => {
    setClariGuideActiveClause(clauseRef);
    setIsClariGuideOpen(true);
  };

  const allKfsItemsChecked = Object.values(kfsChecklist).every(Boolean);

  const value = {
    loanData,
    activeScreen,
    completedScreens,
    slaReviewPending,
    validityDaysRemaining,
    kfsChecklist,
    isKfsAcknowledged,
    kfsAuditRecord,
    allKfsItemsChecked,
    decisionOutcome,
    declineReason,
    eSignProgress,
    clarificationTickets,
    isClariGuideOpen,
    clariGuideActiveClause,
    geminiApiKey,
    isMobileMenuOpen,
    
    // Actions
    navigateToScreen,
    nextStep,
    prevStep,
    setSlaReviewPending,
    submitClarification,
    toggleKfsChecklistItem,
    acknowledgeKFS,
    executeLoanAcceptance,
    executeLoanDecline,
    setESignProgress,
    setIsClariGuideOpen,
    setClariGuideActiveClause,
    openClariGuideWithClause,
    setGeminiApiKey,
    setIsMobileMenuOpen,
    resetDemoState
  };

  return (
    <LoanContext.Provider value={value}>
      {children}
    </LoanContext.Provider>
  );
}

export function useLoan() {
  const context = useContext(LoanContext);
  if (!context) {
    throw new Error('useLoan must be used within a LoanProvider');
  }
  return context;
}
