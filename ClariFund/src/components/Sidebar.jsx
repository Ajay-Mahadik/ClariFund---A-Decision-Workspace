import React from 'react';
import { useLoan, SCREEN_STEPS, SCREENS } from '../context/LoanContext.jsx';
import { Icons } from './ui/Icons.jsx';

export default function Sidebar() {
  const {
    loanData,
    activeScreen,
    navigateToScreen,
    isKfsAcknowledged,
    decisionOutcome,
    slaReviewPending,
    validityDaysRemaining,
    isMobileMenuOpen,
    setIsMobileMenuOpen
  } = useLoan();

  // Phase 1: Review & Exploration (Steps 1 to 5) - Unrestricted browsing, no acceptance required
  const reviewSteps = SCREEN_STEPS.filter(s => s.stepNumber <= 5);

  // Phase 2: Formal Sign-off & Execution (Steps 6 & 7) - Legally binding acceptance gates
  const executionSteps = SCREEN_STEPS.filter(s => s.stepNumber > 5);

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isMobileMenuOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside className={`app-sidebar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        {/* Brand Header */}
        <div className="sidebar-header" style={{ justifyContent: 'space-between' }}>
          <div className="brand-badge">
            <div className="brand-logo-icon">
              <Icons.ShieldCheck size={20} color="#FFFFFF" />
            </div>
            <div>
              <h1 className="brand-title">ClariFund</h1>
              <p className="brand-subtext">Decision Workspace</p>
            </div>
          </div>

          {/* Close button for mobile drawer */}
          <button
            type="button"
            className="sidebar-close-btn"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close mobile navigation"
          >
            <Icons.X size={18} />
          </button>
        </div>

      {/* Navigation Scrollable Area */}
      <div className="sidebar-scroll">
        {/* Phase 1: Unrestricted Review & Analysis */}
        {/* Phase 1: Unrestricted Review & Analysis */}
        <div style={{ marginBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 8px', marginBottom: '4px' }}>
            <h2 className="sidebar-section-title" style={{ padding: 0, margin: 0 }}>Review & Analysis</h2>
            <span style={{ fontSize: '0.62rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.4px', fontWeight: 600 }}>
              Free Exploration
            </span>
          </div>
          <ul className="step-nav-list">
            {reviewSteps.map((step) => {
              const isActive = activeScreen === step.id;

              return (
                <li
                  key={step.id}
                  className={`step-nav-item ${isActive ? 'active' : ''}`}
                  onClick={() => navigateToScreen(step.id)}
                >
                  <div className="step-pill">
                    {step.stepNumber}
                  </div>
                  <div className="step-nav-text">
                    <p className="step-nav-title">{step.label}</p>
                    <p className="step-nav-sub">{step.subtitle}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Phase 2: Formal Sign-off & Decision Gates */}
        <div style={{ marginBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 8px', marginBottom: '4px' }}>
            <h2 className="sidebar-section-title" style={{ padding: 0, margin: 0 }}>Sign-off & Execution</h2>
            <span style={{ fontSize: '0.62rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.4px', fontWeight: 700 }}>
              Acceptance Gates
            </span>
          </div>
          <ul className="step-nav-list">
            {executionSteps.map((step) => {
              const isActive = activeScreen === step.id;
              const isKfs = step.id === SCREENS.KFS_ACK;
              const isDecision = step.id === SCREENS.DECISION_EXECUTION;

              let pillClass = "step-pill";
              let pillContent = step.stepNumber;
              let subtitle = step.subtitle;

              if (isKfs) {
                if (isKfsAcknowledged) {
                  pillClass = "step-pill completed";
                  pillContent = <Icons.Check size={14} color="#FFFFFF" />;
                  subtitle = "Statutory Sign-off Done";
                } else {
                  subtitle = "Mandatory KFS Sign-off";
                }
              } else if (isDecision) {
                if (decisionOutcome === 'accepted') {
                  pillClass = "step-pill completed";
                  pillContent = <Icons.Check size={14} color="#FFFFFF" />;
                  subtitle = "eSigned & Disbursal Set";
                } else if (decisionOutcome === 'declined') {
                  pillClass = "step-pill declined";
                  pillContent = <Icons.X size={14} color="#FFFFFF" />;
                  subtitle = "Offer Formally Declined";
                } else {
                  subtitle = "eSign or Deliberate Decline";
                }
              }

              return (
                <li
                  key={step.id}
                  className={`step-nav-item ${isActive ? 'active' : ''}`}
                  onClick={() => navigateToScreen(step.id)}
                >
                  <div className={pillClass}>
                    {pillContent}
                  </div>
                  <div className="step-nav-text">
                    <p className="step-nav-title">{step.label}</p>
                    <p className="step-nav-sub">{subtitle}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Operational & Support Section */}
        <div style={{ marginBottom: '8px' }}>
          <div style={{ padding: '0 8px', marginBottom: '4px' }}>
            <h2 className="sidebar-section-title" style={{ padding: 0, margin: 0 }}>Support & Audit</h2>
          </div>
          <ul className="step-nav-list">
            <li
              className={`step-nav-item ${activeScreen === SCREENS.REQUEST_CLARIFICATION ? 'active' : ''}`}
              onClick={() => navigateToScreen(SCREENS.REQUEST_CLARIFICATION)}
            >
              <div className="step-pill">
                <Icons.HelpCircle size={13} />
              </div>
              <div className="step-nav-text">
                <p className="step-nav-title">Credit Team Escalation</p>
                <p className="step-nav-sub">SLA Protection & RM Routing</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Validity & SLA Status Card */}
        <div className="sidebar-validity-box">
          <div className="validity-timer-row">
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
              Offer Validity
            </span>
            <span className={`validity-badge ${slaReviewPending ? 'frozen' : ''}`}>
              <Icons.Clock size={12} />
              {slaReviewPending ? 'Timer Protected' : `${validityDaysRemaining} Days Left`}
            </span>
          </div>
          <p className="validity-text">
            {slaReviewPending ? (
              <span style={{ color: 'var(--primary)', fontWeight: 500 }}>
                • Policy-Aware Protection: Offer timer frozen while credit query is reviewed under lender SLA.
              </span>
            ) : (
              <span>
                Statutory KFS validity through <strong>28 Oct 2026</strong> (Exceeds 3-day minimum evaluation period).
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Sidebar Footer: Active Profile */}
      <div className="sidebar-footer">
        <div className="borrower-mini-profile">
          <div className="profile-avatar">
            RK
          </div>
          <div className="profile-info">
            <p className="profile-name">
              {loanData.borrowerProfile.primaryBorrower}
            </p>
            <p className="profile-company">
              {loanData.borrowerProfile.entityName}
            </p>
          </div>
        </div>
      </div>
    </aside>
  </>
  );
}
