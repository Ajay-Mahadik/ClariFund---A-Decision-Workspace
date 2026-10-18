import React, { useState } from 'react';
import { useLoan, SCREEN_STEPS } from '../context/LoanContext.jsx';
import { Icons } from './ui/Icons.jsx';

export default function Header() {
  const {
    loanData,
    activeScreen,
    setIsClariGuideOpen,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    resetDemoState
  } = useLoan();

  const [resetToast, setResetToast] = useState(false);

  const currentStep = SCREEN_STEPS.find(s => s.id === activeScreen);
  const currentStepTitle = currentStep ? currentStep.label : 'Credit Team Escalation';

  const handleReset = () => {
    resetDemoState();
    setResetToast(true);
    setTimeout(() => setResetToast(false), 2400);
  };

  return (
    <header className="app-header">
      {/* Left: Mobile Toggle & Breadcrumbs */}
      <div className="header-left">
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation drawer"
          title="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <Icons.X size={19} /> : <Icons.Menu size={19} />}
        </button>

        <div className="breadcrumbs">
          <span>ClariFund</span>
          <Icons.ChevronRight size={13} color="#94A3B8" />
          <span className="breadcrumb-entity">{loanData.borrowerProfile.entityName}</span>
          <Icons.ChevronRight size={13} color="#94A3B8" />
          <span className="current">{currentStepTitle}</span>
        </div>
        <div className="loan-id-badge">
          Ref: {loanData.metadata.kfsReferenceId}
        </div>
      </div>

      {/* Right: Sandbox Badge, Reset Demo, & ClariGuide */}
      <div className="header-right">
        {/* Illustrative Sandbox Pill */}
        <div className="sandbox-badge" title="Illustrative MSME Loan Facility conforming to RBI April 2024 Master Direction (RBI/2024-25/18). All corporate and bank entities are simulated.">
          <span className="sandbox-dot"></span>
          <span className="sandbox-label">Demo Sandbox</span>
        </div>

        {/* Reset Demo Button */}
        <button
          type="button"
          className="btn-reset-demo"
          onClick={handleReset}
          title="Reset all sign-offs, eSign records, and interactive testing state back to beginning"
        >
          <Icons.RefreshCw size={13} />
          <span>Reset Demo</span>
        </button>

        {/* ClariGuide Global Launcher */}
        <button
          type="button"
          className="clariguide-btn"
          onClick={() => setIsClariGuideOpen(true)}
          title="Open contextual AI assistant grounded in your contract"
        >
          <Icons.Sparkles size={15} />
          <span>Ask ClariGuide</span>
        </button>
      </div>

      {/* Micro Reset Toast Feedback */}
      {resetToast && (
        <div className="floating-toast" style={{ bottom: '16px', right: '16px', padding: '10px 16px', fontSize: '0.8rem', zIndex: 3000 }}>
          <Icons.CheckCircle2 size={16} color="#10B981" />
          <span>Prototype state reset to Step 1.</span>
        </div>
      )}
    </header>
  );
}
