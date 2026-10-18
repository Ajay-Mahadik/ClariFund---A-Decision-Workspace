import React, { useState } from 'react';
import { useLoan } from '../../context/LoanContext.jsx';
import { Icons } from '../ui/Icons.jsx';

export default function DecisionExecution() {
  const {
    loanData,
    isKfsAcknowledged,
    decisionOutcome,
    declineReason,
    eSignProgress,
    executeLoanAcceptance,
    executeLoanDecline,
    prevStep,
    navigateToScreen
  } = useLoan();

  const safeESign = eSignProgress || {
    transactionHash: "0x89f2c1b489d901a09e3a7c6b91",
    rohanSigned: true,
    arjunSigned: false,
    boardResolutionAttached: true
  };

  const [selectedDeclineReason, setSelectedDeclineReason] = useState("");
  const [declineNotes, setDeclineNotes] = useState("");
  const [showDeclineModal, setShowDeclineModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [downloadToast, setDownloadToast] = useState("");
  const [otpValue, setOtpValue] = useState("");
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [otpStep, setOtpStep] = useState(false); // whether OTP dialog is open

  const handleSendOtp = () => {
    setOtpStep(true);
  };

  const handleVerifyOtp = () => {
    setIsVerifyingOtp(true);
    setTimeout(() => {
      setIsVerifyingOtp(false);
      setOtpStep(false);
      executeLoanAcceptance();
      setShowSuccessModal(true); // Open celebratory acceptance popup modal
    }, 800);
  };

  const handleConfirmDecline = () => {
    if (!selectedDeclineReason) return;
    executeLoanDecline(selectedDeclineReason, declineNotes);
    setShowDeclineModal(false);
  };

  const handleDownloadDoc = (docTitle) => {
    setDownloadToast(`Preparing ${docTitle}... NeSL cryptographically stamped package.`);
    setTimeout(() => {
      setDownloadToast(`Downloaded: ${docTitle} (SHA-256 Verified)`);
    }, 800);
    setTimeout(() => {
      setDownloadToast("");
    }, 3800);
  };

  return (
    <div className="screen-content">
      <div className="card-title-group">
        <h2 style={{ fontSize: '1.4rem' }}>Final Loan Decision & Execution</h2>
        <p>Confirm your deliberate accept or decline decision with multi-party governance orchestration.</p>
      </div>

      {/* Prerequisite Check Alert */}
      {!isKfsAcknowledged && (
        <div style={{
          background: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid var(--danger-border)',
          borderRadius: 'var(--radius-md)',
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Icons.AlertTriangle size={20} color="var(--danger)" />
            <span style={{ fontSize: '0.85rem', color: 'var(--danger)', fontWeight: 500 }}>
              Statutory Requirement Incomplete: You must digitally acknowledge the KFS before executing the loan agreement.
            </span>
          </div>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigateToScreen('kfs_ack')}
            style={{ padding: '6px 14px', fontSize: '0.8rem' }}
          >
            Complete KFS Sign-off &rarr;
          </button>
        </div>
      )}

      {/* Decision Success State: ACCEPTED Full Dashboard */}
      {decisionOutcome === 'accepted' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Main Success Hero Card */}
          <div className="clarifund-card" style={{ border: '1px solid var(--success-border)', background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.05) 0%, rgba(240, 253, 244, 0.95) 100%)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
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
                }}>
                  <Icons.CheckCircle2 size={30} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                      Loan Facility Executed Successfully!
                    </h3>
                    <span className="badge-pill" style={{ background: 'var(--success-bg)', color: 'var(--success)', border: '1px solid var(--success-border)' }}>
                      FACILITY ACTIVE
                    </span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                    NeSL Digital Document Execution Reference: <strong style={{ color: 'var(--text-primary)' }}>STF-400192</strong> · Transaction: <span className="hash-code">{safeESign.transactionHash}</span>
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-secondary"
                style={{ padding: '8px 16px', fontSize: '0.82rem' }}
                onClick={() => setShowSuccessModal(true)}
              >
                <Icons.FileText size={15} color="var(--primary)" />
                View Transaction Receipt
              </button>
            </div>

            {/* Quick Metrics Strip */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', marginBottom: '20px' }}>
              <div style={{ background: '#FFFFFF', padding: '14px 18px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Approved Sanction</span>
                <p style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', margin: '4px 0 0 0' }}>₹40,00,000</p>
              </div>
              <div style={{ background: '#FFFFFF', padding: '14px 18px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Net Disbursable Cash</span>
                <p style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--success)', margin: '4px 0 0 0' }}>₹39,20,000</p>
              </div>
              <div style={{ background: '#FFFFFF', padding: '14px 18px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Disbursal Account</span>
                <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', margin: '4px 0 0 0' }}>HDFC Bank ····4910</p>
              </div>
              <div style={{ background: '#FFFFFF', padding: '14px 18px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Disbursal ETA</span>
                <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--primary)', margin: '4px 0 0 0' }}>Within 24 Hours</p>
              </div>
            </div>

            {/* Disbursal Pipeline Timeline */}
            <div style={{ background: '#FFFFFF', padding: '18px 20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', marginBottom: '20px' }}>
              <h4 style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '14px' }}>
                Disbursal & Mandate Pipeline
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'var(--success-bg)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <Icons.Check size={13} />
                  </div>
                  <div>
                    <strong style={{ fontSize: '0.82rem', color: 'var(--text-primary)' }}>1. eSign Executed</strong>
                    <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', margin: '2px 0 0 0' }}>Aadhaar eSign & SHA-256 stamped</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'var(--success-bg)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <Icons.Check size={13} />
                  </div>
                  <div>
                    <strong style={{ fontSize: '0.82rem', color: 'var(--text-primary)' }}>2. Bank Penny-Drop</strong>
                    <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', margin: '2px 0 0 0' }}>Account details verified</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(2, 132, 199, 0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <Icons.Clock size={13} />
                  </div>
                  <div>
                    <strong style={{ fontSize: '0.82rem', color: 'var(--primary)' }}>3. RTGS Transfer</strong>
                    <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', margin: '2px 0 0 0' }}>₹39,20,000 release queued</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'var(--bg-elevated)', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <Icons.Calendar size={13} />
                  </div>
                  <div>
                    <strong style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>4. First EMI</strong>
                    <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', margin: '2px 0 0 0' }}>Due 30 Oct 2026 (eNACH)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Multi-Party Signatory Tracker */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '16px 20px',
              textAlign: 'left',
              marginBottom: '20px'
            }}>
              <h4 style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '12px' }}>
                Multi-Party Execution Sign-offs
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Icons.CheckCircle2 size={16} color="var(--success)" />
                    <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Rohan Kulkarni (Founder & MD)</span>
                  </div>
                  <span className="badge-pill" style={{ background: 'var(--success-bg)', color: 'var(--success)' }}>
                    eSigned via Aadhaar OTP
                  </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Icons.Clock size={16} color="var(--warning)" />
                    <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Arjun Kulkarni (Director & Co-Guarantor)</span>
                  </div>
                  <span className="badge-pill" style={{ background: 'var(--warning-bg)', color: 'var(--warning)' }}>
                    Signing Invite Dispatched via SMS/Email
                  </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Icons.ShieldCheck size={16} color="var(--primary)" />
                    <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Board Resolution & Entity Consent</span>
                  </div>
                  <span className="badge-pill" style={{ background: 'rgba(2, 132, 199, 0.08)', color: 'var(--primary)' }}>
                    Passed & Certified
                  </span>
                </div>
              </div>

              <div style={{ marginTop: '14px', paddingTop: '10px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                <span>Transaction Ref: {safeESign.transactionHash}</span>
                <span>Statutory 3-Day Cooling-Off Window Active</span>
              </div>
            </div>

            {/* Document Download Actions */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleDownloadDoc("ClariFund_Executed_Agreement_STF400192.pdf")}
              >
                <Icons.Download size={15} />
                Download Executed Loan Agreement (PDF)
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => handleDownloadDoc("ClariFund_Harmonized_KFS_STF400192.pdf")}
              >
                <Icons.FileText size={15} />
                Download Cryptographic KFS Package (PDF)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Decision Success State: DECLINED */}
      {decisionOutcome === 'declined' && (
        <div className="clarifund-card" style={{ border: '1px solid var(--border-medium)', background: 'var(--bg-card-inner)' }}>
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'var(--danger-bg)',
              color: 'var(--danger)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '14px'
            }}>
              <Icons.X size={32} />
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Offer Deliberately Declined
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', maxWidth: '550px', margin: '8px auto 16px auto' }}>
              Your formal decline has been recorded to prevent passive expiry. No credit impact or penalties incurred.
            </p>
            <div style={{
              maxWidth: '450px',
              margin: '0 auto',
              padding: '12px',
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)'
            }}>
              <strong style={{ color: 'var(--text-primary)' }}>Recorded Reason:</strong> "{declineReason?.reason}"
            </div>
          </div>
        </div>
      )}

      {/* Pre-Decision Execution Panel (Only if not decided yet) */}
      {!decisionOutcome && (
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '24px' }}>
          {/* Deliberate Accept Card */}
          <div className="clarifund-card" style={{ borderColor: 'rgba(2, 132, 199, 0.35)' }}>
            <div className="card-header-row">
              <div className="card-title-group">
                <h3>Pathway 1: Execute Loan Agreement</h3>
                <p>Digital signing via NeSL Digital Document Execution / Aadhaar eSign</p>
              </div>
              <span className="badge-pill" style={{ background: 'rgba(2, 132, 199, 0.1)', color: 'var(--primary)' }}>
                Instant Disbursal
              </span>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '18px', lineHeight: 1.6 }}>
              By executing this agreement, you authorize the sanction of <strong>₹40,00,000</strong> at <strong>12.50% p.a.</strong> (APR 14.80%) and accept the terms of the harmonized KFS.
            </p>

            <div style={{
              background: 'var(--bg-card-inner)',
              padding: '14px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-subtle)',
              marginBottom: '20px',
              fontSize: '0.78rem',
              color: 'var(--text-secondary)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '4px' }}>
                <Icons.ShieldCheck size={16} color="var(--success)" />
                Borrower Rights Protection Guarantee:
              </div>
              Even after digital execution, you retain the statutory 3-day cooling-off window post-disbursal to cancel without prepayment charges.
            </div>

            {!otpStep ? (
              <div>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '12px', fontSize: '0.95rem' }}
                  disabled={!isKfsAcknowledged}
                  onClick={handleSendOtp}
                >
                  <Icons.UserCheck size={18} />
                  eSign Agreement
                </button>
                <p style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '8px' }}>
                  Aadhaar OTP will be sent to registered mobile ending in ···410
                </p>
              </div>
            ) : (
              <div style={{ background: 'var(--bg-card-inner)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--primary)' }}>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
                  Enter 6-digit Aadhaar OTP sent to registered mobile number:
                </p>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="e.g. 748291"
                    value={otpValue}
                    onChange={(e) => setOtpValue(e.target.value)}
                    style={{
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
                    }}
                  />
                  <button
                    type="button"
                    className="btn btn-primary"
                    disabled={otpValue.length < 4 || isVerifyingOtp}
                    onClick={handleVerifyOtp}
                  >
                    {isVerifyingOtp ? "Verifying with UIDAI..." : "Verify & Sign"}
                  </button>
                </div>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  Demo simulation: Enter any 4-6 digits to verify.
                </span>
              </div>
            )}
          </div>

          {/* Deliberate Decline Card (PRD Slide 9 & 10) */}
          <div className="clarifund-card">
            <div className="card-header-row">
              <div className="card-title-group">
                <h3>Pathway 2: Deliberate Decline</h3>
                <p>Close offer with structured feedback</p>
              </div>
            </div>

            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.5 }}>
              Not the right fit? In ClariFund, declining is treated as an informed, respected business choice, not a failure.
            </p>

            <button
              type="button"
              className="btn btn-danger-outline"
              style={{ width: '100%', padding: '10px' }}
              onClick={() => setShowDeclineModal(true)}
            >
              <Icons.X size={16} />
              Decline Offer
            </button>
          </div>
        </div>
      )}

      {/* Structured Decline Modal */}
      {showDeclineModal && (
        <div className="clariguide-overlay">
          <div style={{
            width: '480px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px',
            margin: 'auto',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>Deliberate Decline Reason</h3>
              <button
                type="button"
                style={{ background: 'transparent', border: 'none', color: '#64748B', cursor: 'pointer' }}
                onClick={() => setShowDeclineModal(false)}
              >
                <Icons.X size={20} />
              </button>
            </div>

            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              Please select the primary reason for declining. This helps our credit team structure better terms in the future:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
              {[
                "Found more competitive interest rate elsewhere",
                "Financial covenant (DSCR ≥ 1.25x) is too restrictive",
                "Director personal guarantee cannot be executed",
                "Upfront fees (₹80k) higher than anticipated",
                "Expansion project / machinery procurement postponed"
              ].map((r, i) => (
                <label
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-sm)',
                    background: selectedDeclineReason === r ? 'var(--danger-bg)' : 'var(--bg-card-inner)',
                    border: `1px solid ${selectedDeclineReason === r ? 'var(--danger-border)' : 'var(--border-subtle)'}`,
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    color: 'var(--text-primary)'
                  }}
                >
                  <input
                    type="radio"
                    name="declineReason"
                    checked={selectedDeclineReason === r}
                    onChange={() => setSelectedDeclineReason(r)}
                  />
                  {r}
                </label>
              ))}
            </div>

            <textarea
              placeholder="Additional feedback (optional)..."
              value={declineNotes}
              onChange={(e) => setDeclineNotes(e.target.value)}
              style={{
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
              }}
            />

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowDeclineModal(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger-outline"
                disabled={!selectedDeclineReason}
                onClick={handleConfirmDecline}
              >
                Confirm Decline
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Acceptance / Transaction Completion Popup Modal */}
      {showSuccessModal && (
        <div className="modal-overlay-center" onClick={() => setShowSuccessModal(false)}>
          <div className="acceptance-modal-card" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.08) 0%, rgba(240, 253, 244, 0.95) 100%)',
              borderBottom: '1px solid var(--success-border)',
              padding: '24px 28px',
              textAlign: 'center',
              position: 'relative'
            }}>
              <button
                type="button"
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: '4px'
                }}
                onClick={() => setShowSuccessModal(false)}
                title="Close"
              >
                <Icons.X size={18} />
              </button>

              <div style={{
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
              }}>
                <Icons.CheckCircle2 size={34} />
              </div>

              <span className="badge-pill" style={{ background: 'var(--success-bg)', color: 'var(--success)', border: '1px solid var(--success-border)', marginBottom: '8px' }}>
                LEGAL EXECUTION RECORDED
              </span>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', margin: '6px 0 4px 0' }}>
                Loan Facility Executed Successfully!
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>
                NeSL Digital Document Execution Reference # STF-400192
              </p>
            </div>

            {/* Body Receipt */}
            <div style={{ padding: '24px 28px' }}>
              <div style={{
                background: 'var(--bg-card-inner)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '16px',
                marginBottom: '18px'
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', fontSize: '0.8rem' }}>
                  <div>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.72rem', display: 'block' }}>Approved Sanction</span>
                    <strong style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>₹40,00,000</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.72rem', display: 'block' }}>Net Cash to Disburse</span>
                    <strong style={{ fontSize: '1.05rem', color: 'var(--success)' }}>₹39,20,000</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.72rem', display: 'block' }}>Authenticated Signatory</span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Rohan Kulkarni (Aadhaar eSign)</span>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.72rem', display: 'block' }}>Disbursal Bank A/C</span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>HDFC Bank ····4910</span>
                  </div>
                </div>

                <div style={{ marginTop: '14px', paddingTop: '10px', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.72rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Cryptographic Transaction Hash:</span>
                  <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--primary)', fontWeight: 600 }}>{safeESign.transactionHash}</span>
                </div>
              </div>

              {/* Statutory Notice */}
              <div style={{
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
              }}>
                <Icons.ShieldCheck size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>
                  <strong>Statutory 3-Day Cooling-Off Notice:</strong> In accordance with RBI Fair Practices Code, your 3 business-day look-up period begins upon bank account credit. You may exit without prepayment penalty.
                </span>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '12px', justifyContent: 'center' }}
                  onClick={() => handleDownloadDoc("ClariFund_Executed_Agreement_STF400192.pdf")}
                >
                  <Icons.Download size={16} />
                  Download Signed Agreement & KFS Package
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  style={{ width: '100%', padding: '10px', justifyContent: 'center' }}
                  onClick={() => setShowSuccessModal(false)}
                >
                  View Disbursal Tracking Dashboard &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Download Toast */}
      {downloadToast && (
        <div className="floating-toast">
          <Icons.CheckCircle2 size={18} color="var(--success)" />
          <span>{downloadToast}</span>
        </div>
      )}

      {/* Navigation */}
      <div className="progressive-nav-bar">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={prevStep}
        >
          <Icons.ArrowLeft size={16} />
          Back
        </button>
        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          Step 7 of 7: Decision stage reached
        </span>
      </div>
    </div>
  );
}
