import React, { useState } from 'react';
import { useLoan } from '../../context/LoanContext.jsx';
import { Icons } from '../ui/Icons.jsx';

export default function AgreementViewer() {
  const { loanData, nextStep, prevStep, openClariGuideWithClause } = useLoan();
  
  // Combine all clauses
  const allClauses = [
    ...loanData.part2_contractualClauses.obligations,
    ...loanData.part2_contractualClauses.contingentCharges
  ];

  const [selectedClauseRef, setSelectedClauseRef] = useState("Clause 8.2");

  const currentClause = allClauses.find(c => c.clauseRef === selectedClauseRef) || allClauses[0];

  return (
    <div className="screen-content">
      <div className="card-title-group">
        <h2 style={{ fontSize: '1.4rem' }}>Split-Screen Agreement Viewer</h2>
        <p>Compare raw contractual legalese directly against plain-language explanations.</p>
      </div>

      {/* Statutory Hierarchy of Truth Alert (PRD Slide 8 & 12) */}
      <div style={{
        background: 'rgba(2, 132, 199, 0.08)',
        border: '1px solid rgba(2, 132, 199, 0.3)',
        borderRadius: 'var(--radius-md)',
        padding: '12px 18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: 0 }}>
          <Icons.Scale size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
          <span style={{ fontSize: '0.8rem', color: 'var(--text-primary)' }}>
            <strong>Hierarchy of Truth:</strong> The executed loan agreement & standardized KFS govern legally. ClariFund plain explanations are non-contractual aids to guide your review.
          </span>
        </div>
        <span style={{
          fontSize: '0.72rem',
          color: 'var(--text-secondary)',
          background: '#FFFFFF',
          padding: '4px 10px',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid rgba(2, 132, 199, 0.25)',
          whiteSpace: 'nowrap',
          fontWeight: 600,
          flexShrink: 0
        }}>
          Indian Contract Act, 1872
        </span>
      </div>

      {/* Clause Selector Tabs */}
      <div className="clause-pill-selector">
        {allClauses.map((clause) => (
          <button
            key={clause.clauseRef}
            type="button"
            className="chip-btn"
            style={{
              background: selectedClauseRef === clause.clauseRef ? 'var(--primary)' : undefined,
              color: selectedClauseRef === clause.clauseRef ? '#FFFFFF' : undefined,
              borderColor: selectedClauseRef === clause.clauseRef ? 'var(--primary)' : undefined,
              fontWeight: selectedClauseRef === clause.clauseRef ? 700 : 500,
              padding: '6px 14px',
              flexShrink: 0,
              whiteSpace: 'nowrap'
            }}
            onClick={() => setSelectedClauseRef(clause.clauseRef)}
          >
            {clause.clauseRef}: {clause.title.split(':')[0]}
          </button>
        ))}
      </div>

      {/* Split Viewer Grid */}
      <div className="split-viewer-grid">
        {/* Left Pane: Plain-Language Translation */}
        <div className="split-viewer-pane">
          <div className="pane-header">
            <div className="pane-title">
              <Icons.Sparkles size={16} color="var(--primary)" />
              <span>Plain-Language Summary</span>
            </div>
            <span className="pane-badge">AI Verified Translation</span>
          </div>

          <div className="pane-content">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <h3 style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                {currentClause.title}
              </h3>
              <span className="badge-pill" style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)' }}>
                {currentClause.category}
              </span>
            </div>

            <div style={{
              background: 'rgba(2, 132, 199, 0.05)',
              border: '1px solid rgba(2, 132, 199, 0.2)',
              borderRadius: 'var(--radius-sm)',
              padding: '14px',
              marginBottom: '16px'
            }}>
              <p style={{ color: 'var(--text-primary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                {currentClause.summaryPlainEnglish}
              </p>
            </div>

            <div style={{ marginBottom: '18px' }}>
              <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.8px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                Key Borrower Takeaways:
              </h4>
              <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '6px', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                {currentClause.keyTakeaways.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
              <button
                type="button"
                className="btn btn-secondary"
                style={{ width: '100%', fontSize: '0.82rem' }}
                onClick={() => openClariGuideWithClause(currentClause.clauseRef)}
              >
                <Icons.Bot size={15} color="var(--primary)" />
                Ask ClariGuide about this clause
              </button>
            </div>
          </div>
        </div>

        {/* Right Pane: Verbatim Legal Contract Clause */}
        <div className="split-viewer-pane">
          <div className="pane-header">
            <div className="pane-title">
              <Icons.FileText size={16} color="var(--primary)" />
              <span>Original Agreement Clause</span>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              {currentClause.clauseRef}
            </span>
          </div>

          <div className="pane-content">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              <span>Document: Facility Agreement Ref # STF-400192</span>
              <span>Governing: {currentClause.governingLaw}</span>
            </div>

            <div className="legal-raw-text">
              {currentClause.legalTextRaw}
            </div>

            <div style={{
              marginTop: 'auto',
              padding: '12px',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.75rem',
              color: 'var(--text-secondary)'
            }}>
              <strong style={{ color: 'var(--text-primary)' }}>Verbatim Citation Guarantee:</strong> In accordance with ClariFund governance rules, this clause will be stamped without modification into the NeSL / Aadhaar digital agreement package.
            </div>
          </div>
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
