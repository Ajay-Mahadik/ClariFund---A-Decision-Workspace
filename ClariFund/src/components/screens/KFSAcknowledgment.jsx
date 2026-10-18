import React from 'react';
import { useLoan } from '../../context/LoanContext.jsx';
import { Icons } from '../ui/Icons.jsx';

export default function KFSAcknowledgment() {
  const {
    loanData,
    kfsChecklist,
    toggleKfsChecklistItem,
    isKfsAcknowledged,
    kfsAuditRecord,
    acknowledgeKFS,
    allKfsItemsChecked,
    nextStep,
    prevStep
  } = useLoan();

  const q = loanData.part1_quantitative;
  const bp = loanData.borrowerProfile;
  const nodal = loanData.part3_grievanceAndConsent.nodalOfficer;

  return (
    <div className="screen-content">
      <div className="card-title-group">
        <h2 style={{ fontSize: '1.4rem' }}>Auditable Key Fact Statement (KFS) Acknowledgment</h2>
        <p>Statutory borrower consent under Reserve Bank of India Master Direction (April 2024 Harmonized Format).</p>
      </div>

      {/* Statutory Mandate Notice */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.08) 0%, rgba(245, 243, 255, 0.95) 100%)',
        border: '1px solid rgba(79, 70, 229, 0.3)',
        borderRadius: 'var(--radius-md)',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Icons.ShieldCheck size={24} color="var(--indigo-accent)" />
          <div>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--indigo-accent)', fontWeight: 600 }}>
              Pre-Execution Statutory Prerequisite
            </h4>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
              RBI Circular RBI/2024-25/18: "Explicit, verifiable borrower acknowledgment of the KFS must be recorded prior to final loan agreement execution."
            </p>
          </div>
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--primary)', background: 'rgba(2, 132, 199, 0.1)', padding: '4px 10px', borderRadius: '4px', border: '1px solid rgba(2, 132, 199, 0.2)' }}>
          Ref: {loanData.metadata.kfsReferenceId}
        </span>
      </div>

      {/* KFS Quantitative Summary Table */}
      <div className="clarifund-card">
        <div className="card-header-row">
          <div className="card-title-group">
            <h3>Harmonized KFS Summary (Part 1 & 2)</h3>
            <p>Mandatory financial disclosures for MSME Term Loan</p>
          </div>
          <span className="badge-pill" style={{ background: 'var(--success-bg)', color: 'var(--success)', border: '1px solid var(--success-border)' }}>
            Lender Verified
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '20px' }}>
          <div style={{ background: 'var(--bg-card-inner)', padding: '14px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', minHeight: '76px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.6px', fontWeight: 600, color: 'var(--text-muted)' }}>Sanction Amount</span>
            <p style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', margin: '4px 0 0 0' }}>{q.sanctionedAmountFormatted}</p>
          </div>
          <div style={{ background: 'var(--bg-card-inner)', padding: '14px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', minHeight: '76px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.6px', fontWeight: 600, color: 'var(--text-muted)' }}>Net Disbursal</span>
            <p style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--success)', margin: '4px 0 0 0' }}>{q.netDisbursalAmountFormatted}</p>
          </div>
          <div style={{ background: 'var(--bg-card-inner)', padding: '14px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', minHeight: '76px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.6px', fontWeight: 600, color: 'var(--text-muted)' }}>Effective APR</span>
            <p style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--warning)', margin: '4px 0 0 0' }}>{q.annualPercentageRateFormatted}</p>
          </div>
          <div style={{ background: 'var(--bg-card-inner)', padding: '14px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', minHeight: '76px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.6px', fontWeight: 600, color: 'var(--text-muted)' }}>Nominal Interest</span>
            <p style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', margin: '4px 0 0 0' }}>{q.nominalInterestRateFormatted} (Fixed)</p>
          </div>
          <div style={{ background: 'var(--bg-card-inner)', padding: '14px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', minHeight: '76px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.6px', fontWeight: 600, color: 'var(--text-muted)' }}>Tenure & EMI</span>
            <p style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', margin: '4px 0 0 0' }}>{q.tenureMonths}M @ {q.estimatedEMIFormatted}</p>
          </div>
          <div style={{ background: 'var(--bg-card-inner)', padding: '14px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', minHeight: '76px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.6px', fontWeight: 600, color: 'var(--text-muted)' }}>KFS Review Validity</span>
            <p style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary)', margin: '4px 0 0 0' }}>16 Days Window</p>
          </div>
        </div>

        {/* Part 3: Grievance Redressal Info Card */}
        <div style={{
          background: 'var(--bg-card-inner)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          padding: '16px',
          marginBottom: '24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Icons.Building size={16} color="var(--primary)" />
              <h4 style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                Part 3: Grievance Redressal Officer (Lender RE)
              </h4>
            </div>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
              TAT: {nodal.turnaroundTime}
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem' }}>Principal Nodal Officer</span>
              <strong style={{ color: 'var(--text-primary)' }}>{nodal.name}</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem' }}>Helpline Contact</span>
              <span style={{ color: 'var(--text-primary)' }}>{nodal.phone}</span>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem' }}>Email Redressal</span>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--primary)' }}>{nodal.email}</span>
            </div>
          </div>
        </div>

        {/* Borrower Verification Checklist */}
        <div className="card-title-group" style={{ marginBottom: '14px' }}>
          <h3>Borrower Verification Checklist</h3>
          <p>Please review and explicitly confirm each core term below to generate the cryptographic KFS record:</p>
        </div>

        <div className="checklist-container">
          <div
            className={`check-item ${kfsChecklist.sanctionAndDisbursal ? 'checked' : ''}`}
            onClick={() => toggleKfsChecklistItem('sanctionAndDisbursal')}
          >
            <div className="checkbox-custom">
              {kfsChecklist.sanctionAndDisbursal && <Icons.Check size={14} />}
            </div>
            <div>
              <p className="check-text-title">1. Sanction & Net Disbursal Reconciliation</p>
              <p className="check-text-desc">
                I understand that ₹40,00,000 has been sanctioned, from which ₹80,000 in upfront fees is deducted, resulting in a net credit of ₹39,20,000 into ShreeTech's account.
              </p>
            </div>
          </div>

          <div
            className={`check-item ${kfsChecklist.aprHarmonized ? 'checked' : ''}`}
            onClick={() => toggleKfsChecklistItem('aprHarmonized')}
          >
            <div className="checkbox-custom">
              {kfsChecklist.aprHarmonized && <Icons.Check size={14} />}
            </div>
            <div>
              <p className="check-text-title">2. Interest Rate & Annual Percentage Rate (APR)</p>
              <p className="check-text-desc">
                I understand the nominal interest rate is 12.50% p.a. fixed, culminating in an effective APR of 14.80% factoring all upfront non-interest costs.
              </p>
            </div>
          </div>

          <div
            className={`check-item ${kfsChecklist.upfrontFees ? 'checked' : ''}`}
            onClick={() => toggleKfsChecklistItem('upfrontFees')}
          >
            <div className="checkbox-custom">
              {kfsChecklist.upfrontFees && <Icons.Check size={14} />}
            </div>
            <div>
              <p className="check-text-title">3. Itemized Upfront Fees Payable to RE</p>
              <p className="check-text-desc">
                I confirm the ₹80,000 fee comprises Processing Fee ₹60,000, Documentation ₹10,000, and CERSAI/Stamp Duty ₹10,000. No further unlisted fees can be levied.
              </p>
            </div>
          </div>

          <div
            className={`check-item ${kfsChecklist.financialCovenantDSCR ? 'checked' : ''}`}
            onClick={() => toggleKfsChecklistItem('financialCovenantDSCR')}
          >
            <div className="checkbox-custom">
              {kfsChecklist.financialCovenantDSCR && <Icons.Check size={14} />}
            </div>
            <div>
              <p className="check-text-title">4. Personal Guarantee & Financial Covenant (DSCR ≥ 1.25x)</p>
              <p className="check-text-desc">
                I understand the directors (Rohan Kulkarni and Arjun Kulkarni) provide an unconditional personal guarantee, and ShreeTech must maintain a minimum DSCR of 1.25x annually.
              </p>
            </div>
          </div>

          <div
            className={`check-item ${kfsChecklist.nonCompoundingPenal ? 'checked' : ''}`}
            onClick={() => toggleKfsChecklistItem('nonCompoundingPenal')}
          >
            <div className="checkbox-custom">
              {kfsChecklist.nonCompoundingPenal && <Icons.Check size={14} />}
            </div>
            <div>
              <p className="check-text-title">5. Late Payment Non-Compounding Penal Charges</p>
              <p className="check-text-desc">
                I acknowledge late payments attract a 2.0% per month penal charge on overdue amounts, strictly non-compounding per RBI guidelines.
              </p>
            </div>
          </div>

          <div
            className={`check-item ${kfsChecklist.coolingOffPeriod ? 'checked' : ''}`}
            onClick={() => toggleKfsChecklistItem('coolingOffPeriod')}
          >
            <div className="checkbox-custom">
              {kfsChecklist.coolingOffPeriod && <Icons.Check size={14} />}
            </div>
            <div>
              <p className="check-text-title">6. Statutory Cooling-Off Look-up Period</p>
              <p className="check-text-desc">
                I am aware of my statutory right to exit the loan within 3 business days post-disbursal without prepayment penalty by returning principal and proportionate interest.
              </p>
            </div>
          </div>
        </div>

        {/* SHA-256 Audit Trail Stamp Box */}
        {isKfsAcknowledged && kfsAuditRecord ? (
          <div className="audit-stamp-box" style={{ marginTop: '24px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <Icons.CheckCircle2 size={18} color="var(--success)" />
                <strong style={{ color: 'var(--success)', fontSize: '0.9rem' }}>
                  Cryptographic KFS Acknowledgment Recorded
                </strong>
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                Acknowledged by <strong style={{ color: 'var(--text-primary)' }}>{kfsAuditRecord.acknowledgedBy}</strong> for {kfsAuditRecord.entityName} on {kfsAuditRecord.displayTimestamp}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>SHA-256 Checksum:</span>
                <span className="hash-code">{kfsAuditRecord.sha256Hash}</span>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span className="badge-pill" style={{ background: 'var(--success-bg)', color: 'var(--success)', border: '1px solid var(--success-border)' }}>
                TAMPER-EVIDENT AUDIT HASH
              </span>
            </div>
          </div>
        ) : (
          <div style={{ marginTop: '24px', textAlign: 'center' }}>
            <button
              type="button"
              className="btn btn-primary"
              disabled={!allKfsItemsChecked}
              onClick={acknowledgeKFS}
              style={{ padding: '12px 28px', fontSize: '0.95rem' }}
            >
              <Icons.ShieldCheck size={18} />
              Digitally Acknowledge KFS
            </button>
            {!allKfsItemsChecked ? (
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '8px' }}>
                Check all 6 statutory boxes above to enable digital acknowledgment
              </p>
            ) : (
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '8px' }}>
                Generates tamper-evident SHA-256 cryptographic audit record
              </p>
            )}
          </div>
        )}
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
          disabled={!isKfsAcknowledged}
          onClick={nextStep}
        >
          Continue
          <Icons.ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
