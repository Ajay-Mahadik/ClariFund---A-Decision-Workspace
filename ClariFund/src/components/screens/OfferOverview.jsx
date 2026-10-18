import React from 'react';
import { useLoan, SCREENS } from '../../context/LoanContext.jsx';
import { Icons } from '../ui/Icons.jsx';

export default function OfferOverview() {
  const { loanData, navigateToScreen, nextStep, openClariGuideWithClause } = useLoan();
  const q = loanData.part1_quantitative;
  const bp = loanData.borrowerProfile;

  return (
    <div className="screen-content">
      {/* Top Banner Alert */}
      <div className="top-offer-banner" style={{
        background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.08) 0%, rgba(240, 253, 244, 0.95) 100%)',
        border: '1px solid var(--success-border)',
        borderRadius: 'var(--radius-lg)',
        padding: '20px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'var(--success-bg)',
            border: '1px solid var(--success-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--success)'
          }}>
            <Icons.CheckCircle2 size={24} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="badge-pill badge-approved">Application Approved</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                Harmonized KFS Generated under RBI April 2024 Guidelines
              </span>
            </div>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginTop: '4px', color: 'var(--text-primary)' }}>
              Your Loan Offer for {bp.entityName} is Ready
            </h2>
          </div>
        </div>
        <div style={{
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
        }}>
          <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
            Lender Institution
          </span>
          <p style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
            {loanData.metadata.lenderName}
          </p>
        </div>
      </div>

      {/* Primary Key Metrics Grid (Requirement 1 & PRD Slide 13) */}
      <div className="metrics-grid-4">
        <div className="metric-card highlight">
          <span className="metric-label">Approved Sanction</span>
          <p className="metric-value cyan">{q.sanctionedAmountFormatted}</p>
          <span className="metric-sub">{q.sanctionedAmountWords}</span>
        </div>

        <div className="metric-card">
          <span className="metric-label">Net Disbursal (In-Bank)</span>
          <p className="metric-value" style={{ color: 'var(--success)' }}>{q.netDisbursalAmountFormatted}</p>
          <span className="metric-sub">After ₹80,000 upfront fees deduction</span>
        </div>

        <div className="metric-card">
          <span className="metric-label">Fixed Rate & APR</span>
          <p className="metric-value">{q.nominalInterestRateFormatted}</p>
          <span className="metric-sub" style={{ color: 'var(--warning)', fontWeight: 600 }}>
            Annual Percentage Rate: {q.annualPercentageRateFormatted}
          </span>
        </div>

        <div className="metric-card">
          <span className="metric-label">Tenure & Monthly EMI</span>
          <p className="metric-value">{q.estimatedEMIFormatted}</p>
          <span className="metric-sub">
            {q.tenureMonths} Months • Starts {q.firstRepaymentDate}
          </span>
        </div>
      </div>

      {/* Facility Purpose & Commercial Terms */}
      <div className="clarifund-card">
        <div className="card-header-row">
          <div className="card-title-group">
            <h2>Commercial Loan Parameters</h2>
            <p>Sanction breakdown, purpose allocation, and borrowing cost summary</p>
          </div>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigateToScreen(SCREENS.REQUEST_CLARIFICATION)}
          >
            <Icons.HelpCircle size={15} />
            Ask Credit Team
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div style={{ background: 'var(--bg-card-inner)', padding: '18px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <h4 style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
              Facility Details & Purpose
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Facility Category</span>
                <span style={{ fontWeight: 600 }}>{q.loanType}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Approved Purpose</span>
                <span style={{ fontWeight: 600, color: 'var(--primary)' }}>{bp.facilityPurpose}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Borrower CIN</span>
                <span style={{ fontFamily: 'var(--font-mono)' }}>{bp.entityCin}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Udyam Registration</span>
                <span style={{ fontFamily: 'var(--font-mono)' }}>{bp.udyamRegistration}</span>
              </div>
            </div>
          </div>

          <div style={{ background: 'var(--bg-card-inner)', padding: '18px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <h4 style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
              Repayment & Total Cost Reconciliation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Total Repayment (36 Months)</span>
                <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{q.totalRepaymentAmountFormatted}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Total Cumulative Interest</span>
                <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>{q.totalInterestPayableFormatted}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Upfront Mandatory Fees</span>
                <span style={{ fontWeight: 600, color: 'var(--danger)' }}>{q.totalFeesPayableFormatted}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Effective APR (Harmonized)</span>
                <span style={{ fontWeight: 700, color: 'var(--warning)' }}>{q.annualPercentageRateFormatted}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ClariGuide Contextual Prompt Prompts (PRD Slide 13) */}
        <div style={{
          marginTop: '20px',
          background: 'rgba(2, 132, 199, 0.05)',
          border: '1px dashed rgba(2, 132, 199, 0.3)',
          borderRadius: 'var(--radius-md)',
          padding: '14px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Icons.Bot size={20} color="var(--primary)" />
            <span style={{ fontSize: '0.82rem', color: 'var(--text-primary)' }}>
              Have questions about this offer? Ask ClariGuide for instant, contract-grounded explanations:
            </span>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              type="button"
              className="chip-btn"
              onClick={() => openClariGuideWithClause('apr')}
            >
              Why 14.8% APR?
            </button>
            <button
              type="button"
              className="chip-btn"
              onClick={() => openClariGuideWithClause('guarantee')}
            >
              Personal Guarantee?
            </button>
          </div>
        </div>
      </div>

      {/* Progressive Disclosure Bottom Nav */}
      <div className="progressive-nav-bar">
        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          Step 1 of 7: Initial offer parameters reviewed
        </span>
        <button
          type="button"
          className="btn btn-primary"
          onClick={nextStep}
        >
          Continue
          <Icons.ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
