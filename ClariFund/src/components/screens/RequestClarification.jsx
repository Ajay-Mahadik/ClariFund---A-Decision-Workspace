import React, { useState } from 'react';
import { useLoan } from '../../context/LoanContext.jsx';
import { Icons } from '../ui/Icons.jsx';

export default function RequestClarification() {
  const {
    clarificationTickets,
    submitClarification,
    slaReviewPending
  } = useLoan();

  const [selectedTopic, setSelectedTopic] = useState("Financial Covenants");
  const [questionText, setQuestionText] = useState("");
  const [copiedLink, setCopiedLink] = useState(false);
  const [submittedAlert, setSubmittedAlert] = useState(false);

  const topics = [
    "Pricing & Fees",
    "Repayment Schedule",
    "Financial Covenants",
    "Personal Guarantee",
    "Prepayment Terms",
    "Other Documentation"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!questionText.trim()) return;

    submitClarification(selectedTopic, questionText);
    setQuestionText("");
    setSubmittedAlert(true);
    setTimeout(() => setSubmittedAlert(false), 5000);
  };

  const copyGuestLink = () => {
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  return (
    <div className="screen-content">
      <div className="card-title-group">
        <h2 style={{ fontSize: '1.4rem' }}>Request Clarification & Advisor Orchestration</h2>
        <p>Direct communication with the credit analysis team with Policy-Aware Validity Protection.</p>
      </div>

      {/* SLA Validity Protection Card (PRD Slide 10 & 11) */}
      <div style={{
        background: slaReviewPending ? 'linear-gradient(135deg, rgba(2, 132, 199, 0.08) 0%, rgba(238, 242, 255, 0.9) 100%)' : 'var(--bg-card-inner)',
        border: `1px solid ${slaReviewPending ? 'var(--primary)' : 'var(--border-subtle)'}`,
        borderRadius: 'var(--radius-md)',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: slaReviewPending ? 'rgba(2, 132, 199, 0.15)' : 'var(--bg-elevated)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: slaReviewPending ? 'var(--primary)' : 'var(--text-secondary)'
          }}>
            <Icons.Clock size={20} />
          </div>
          <div>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600 }}>
              Policy-Aware Validity Protection SLA
            </h4>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
              {slaReviewPending
                ? "Offer validity timer is ACTIVE-FROZEN. Your 16-day window will not expire while credit queries are pending resolution."
                : "Submit a question below to automatically freeze the validity timer during credit team evaluation."}
            </p>
          </div>
        </div>
        <span className={`badge-pill ${slaReviewPending ? 'badge-approved' : ''}`} style={{ background: slaReviewPending ? undefined : 'var(--bg-elevated)', color: slaReviewPending ? undefined : 'var(--text-secondary)' }}>
          {slaReviewPending ? 'SLA Review Pending (Protected)' : 'Timer Running'}
        </span>
      </div>

      {/* Main Grid: Query Form & Share Access */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '24px' }}>
        {/* Left: Clarification Form */}
        <div className="clarifund-card">
          <div className="card-header-row">
            <div className="card-title-group">
              <h3>Submit Formal Clarification</h3>
              <p>Routed directly to Relationship Manager & Underwriting Team</p>
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Response SLA: 24–48 Hours
            </span>
          </div>

          {submittedAlert && (
            <div style={{
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
            }}>
              <Icons.CheckCircle2 size={16} />
              Query submitted successfully! Tagged as <strong>sla_review_pending</strong>. Validity timer protected.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '14px' }}>
              <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                1. Select Topic
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {topics.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className="chip-btn"
                    style={{
                      background: selectedTopic === t ? 'var(--primary)' : undefined,
                      color: selectedTopic === t ? '#FFFFFF' : undefined,
                      fontWeight: selectedTopic === t ? 700 : 500
                    }}
                    onClick={() => setSelectedTopic(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                2. Your Question / Clarification Request
              </label>
              <textarea
                rows={4}
                placeholder="e.g., Can the DSCR test be calculated on EBITDA rather than PAT, given our heavy first-year depreciation on CNC machinery?"
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                style={{
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
                }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                Assigned RM: Vikram Malhotra
              </span>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!questionText.trim()}
              >
                <Icons.Send size={15} />
                Submit Query
              </button>
            </div>
          </form>

          {/* Past Logged Tickets */}
          <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
            <h4 style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
              Active Inquiry Log ({clarificationTickets.length})
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {clarificationTickets.map((t) => (
                <div
                  key={t.id}
                  style={{
                    background: 'var(--bg-card-inner)',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.8rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontWeight: 600, color: 'var(--primary)' }}>{t.id}: {t.topic}</span>
                    <span className="badge-pill" style={{ background: 'rgba(2, 132, 199, 0.1)', color: 'var(--primary)', fontSize: '0.68rem' }}>
                      {t.status}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-primary)', marginBottom: '6px' }}>"{t.question}"</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                    <span>Submitted: {t.submittedAt}</span>
                    <span>{t.expectedResponse}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Authenticated Stakeholder Sharing */}
        <div className="clarifund-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div className="card-header-row">
              <div className="card-title-group">
                <h3>Authenticated Stakeholder Access</h3>
                <p>Share role-scoped access with Co-Directors</p>
              </div>
              <Icons.Share2 size={18} color="var(--primary)" />
            </div>

            <div style={{
              background: 'var(--bg-card-inner)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '16px',
              marginBottom: '20px'
            }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Role-Scoped Guest Link
              </span>
              <div style={{
                marginTop: '6px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--bg-elevated)',
                padding: '8px 12px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)'
              }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  https://clarifund.in/share/auth?token=eyJhbGciOi...STF-400192
                </span>
                <button
                  type="button"
                  className="chip-btn"
                  onClick={copyGuestLink}
                >
                  {copiedLink ? "Copied!" : "Copy Link"}
                </button>
              </div>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '8px' }}>
                • Replaces naked public links with OTP-authenticated access.<br/>
                • Auto-expires in 7 days or upon offer closure.
              </p>
            </div>

            {/* People with Access */}
            <h4 style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
              Authorized Stakeholders
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 12px',
                background: 'var(--bg-card-inner)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div className="profile-avatar" style={{ width: '28px', height: '28px', fontSize: '0.75rem' }}>RK</div>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 600 }}>Rohan Kulkarni</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Founder & MD</div>
                  </div>
                </div>
                <span className="badge-pill" style={{ background: 'var(--bg-elevated)', color: 'var(--primary)' }}>
                  Owner (Full Access)
                </span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 12px',
                background: 'var(--bg-card-inner)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div className="profile-avatar" style={{ width: '28px', height: '28px', fontSize: '0.75rem', background: '#4F46E5' }}>AK</div>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 600 }}>Arjun Kulkarni</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Director & Co-Guarantor</div>
                  </div>
                </div>
                <span className="badge-pill" style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#818CF8' }}>
                  Review + Co-eSign
                </span>
              </div>
            </div>
          </div>

          {/* Escalation SLA & Governance Card */}
          <div style={{
            marginTop: '20px',
            padding: '14px',
            background: 'var(--bg-card-inner)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Icons.ShieldCheck size={16} color="var(--primary)" />
              <h4 style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                Credit Escalation & Governance SLA
              </h4>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Underwriting Desk:</span>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Apex Mid-Corporate Credit</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Response Window:</span>
                <span style={{ color: 'var(--primary)', fontWeight: 600 }}>24 to 48 Hours</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Statutory Freezing:</span>
                <span style={{ color: 'var(--success)', fontWeight: 600 }}>Active (Offer Timer Paused)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
