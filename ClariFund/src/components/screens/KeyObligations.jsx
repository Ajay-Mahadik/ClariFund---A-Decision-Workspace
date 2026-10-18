import React, { useState } from 'react';
import { useLoan } from '../../context/LoanContext.jsx';
import { Icons } from '../ui/Icons.jsx';

export default function KeyObligations() {
  const { loanData, nextStep, prevStep, openClariGuideWithClause } = useLoan();
  const obligations = loanData.part2_contractualClauses.obligations;
  const contingentCharges = loanData.part2_contractualClauses.contingentCharges;

  const [expandedCard, setExpandedCard] = useState("Clause 8.2"); // expand personal guarantee by default

  const toggleExpand = (clauseRef) => {
    setExpandedCard(prev => prev === clauseRef ? null : clauseRef);
  };

  return (
    <div className="screen-content">
      <div className="card-title-group">
        <h2 style={{ fontSize: '1.4rem' }}>Key Contractual Obligations & Covenants</h2>
        <p>Understand the commitments, personal exposure, financial benchmarks, and contingent charges before you sign.</p>
      </div>

      {/* Critical Alert regarding Director Guarantee & Covenants */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.08) 0%, rgba(254, 242, 242, 0.95) 100%)',
        border: '1px solid var(--danger-border)',
        borderRadius: 'var(--radius-md)',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Icons.AlertTriangle size={22} color="var(--danger)" style={{ flexShrink: 0 }} />
          <div>
            <h4 style={{ fontSize: '0.88rem', color: 'var(--danger)', fontWeight: 600 }}>
              Personal Guarantee & Financial Covenant Alert
            </h4>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
              This facility creates personal liability for directors and mandates annual audited DSCR of at least 1.25x.
            </p>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => openClariGuideWithClause('guarantee')}
          style={{ padding: '6px 14px', fontSize: '0.8rem', whiteSpace: 'nowrap', flexShrink: 0 }}
        >
          <Icons.Bot size={15} color="var(--primary)" />
          Ask ClariGuide
        </button>
      </div>

      {/* Primary Obligations Section */}
      <div className="clarifund-card">
        <div className="card-header-row">
          <div className="card-title-group">
            <h3>Core Contractual Commitments</h3>
            <p>Clauses governing director liability and financial covenants</p>
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Click card to expand/collapse full details
          </span>
        </div>

        <div className="obligations-grid">
          {obligations.map((item) => {
            const isExpanded = expandedCard === item.clauseRef;
            const badgeClass = item.severity === 'Critical' ? 'badge-critical' : item.severity === 'High' ? 'badge-high' : 'badge-moderate';

            return (
              <div key={item.clauseRef} className="obligation-card">
                <div className="obligation-card-header" onClick={() => toggleExpand(item.clauseRef)}>
                  <div className="obligation-title-left">
                    <span className={`obligation-badge ${badgeClass}`}>{item.severity}</span>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                          {item.clauseRef}
                        </span>
                        <h4 style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      {item.category}
                    </span>
                    {isExpanded ? <Icons.ChevronDown size={18} color="#94A3B8" /> : <Icons.ChevronRight size={18} color="#94A3B8" />}
                  </div>
                </div>

                {isExpanded && (
                  <div className="obligation-card-body">
                    <div style={{ marginBottom: '14px' }}>
                      <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--primary)', letterSpacing: '0.8px', fontWeight: 700 }}>
                        Plain-Language Summary
                      </span>
                      <p style={{ marginTop: '4px', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                        {item.summaryPlainEnglish}
                      </p>
                    </div>

                    <div style={{ marginBottom: '14px' }}>
                      <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.8px', fontWeight: 700 }}>
                        Key Borrower Takeaways
                      </span>
                      <ul style={{ marginTop: '6px', paddingLeft: '18px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {item.keyTakeaways.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)' }}>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        Governing Framework: {item.governingLaw}
                      </span>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button
                          type="button"
                          className="chip-btn"
                          onClick={() => navigateToScreen(SCREENS.AGREEMENT_VIEWER)}
                        >
                          View Legal Text &rarr;
                        </button>
                        <button
                          type="button"
                          className="chip-btn"
                          onClick={() => openClariGuideWithClause(item.clauseRef)}
                        >
                          Ask AI
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Contingent Charges & Late Payment Consequences (RBI April 2024 Non-Compounding) */}
      <div className="clarifund-card">
        <div className="card-header-row">
          <div className="card-title-group">
            <h3>Contingent Charges & Default Terms</h3>
            <p>Statutory non-compounding penal charges and mandate dishonour rates</p>
          </div>
          <span className="badge-pill" style={{ background: 'var(--warning-bg)', color: 'var(--warning)', border: '1px solid var(--warning-border)' }}>
            RBI April 2024 Harmonized
          </span>
        </div>

        <div className="obligations-grid">
          {contingentCharges.map((item) => (
            <div key={item.clauseRef} className="obligation-card" style={{ borderColor: 'rgba(245, 158, 11, 0.3)' }}>
              <div className="obligation-card-header" onClick={() => toggleExpand(item.clauseRef)}>
                <div className="obligation-title-left">
                  <span className="obligation-badge badge-high">{item.severity}</span>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {item.clauseRef}
                      </span>
                      <h4 style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--warning)', fontWeight: 600 }}>
                    Strictly Non-Compounding
                  </span>
                  {expandedCard === item.clauseRef ? <Icons.ChevronDown size={18} color="#94A3B8" /> : <Icons.ChevronRight size={18} color="#94A3B8" />}
                </div>
              </div>

              {expandedCard === item.clauseRef && (
                <div className="obligation-card-body">
                  <p style={{ color: 'var(--text-primary)', lineHeight: 1.6, marginBottom: '12px' }}>
                    {item.summaryPlainEnglish}
                  </p>
                  <ul style={{ paddingLeft: '18px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '12px' }}>
                    {item.keyTakeaways.map((pt, idx) => (
                      <li key={idx}>{pt}</li>
                    ))}
                  </ul>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    Regulatory Basis: {item.governingLaw}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Progressive Navigation */}
      <div className="progressive-nav-bar">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={prevStep}
        >
          <Icons.ArrowLeft size={16} />
          Back
        </button>
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
