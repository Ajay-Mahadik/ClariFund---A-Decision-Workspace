import React, { useState } from 'react';
import { useLoan } from '../../context/LoanContext.jsx';
import { Icons } from '../ui/Icons.jsx';

export default function CostBreakdown() {
  const { loanData, nextStep, prevStep, openClariGuideWithClause } = useLoan();
  const q = loanData.part1_quantitative;
  const [activeSegment, setActiveSegment] = useState(null);

  // Donut chart calculations:
  // Net Disbursal: 39,20,000 / 48,24,000 = 81.26% (~81.3%)
  // Total Interest: 8,24,000 / 48,24,000 = 17.08% (~17.1%)
  // Fees & Charges: 80,000 / 48,24,000 = 1.66% (~1.6%)
  // Circumference = 2 * PI * r = 2 * 3.14159 * 70 = 439.82
  const r = 70;
  const circumference = 2 * Math.PI * r;
  const netDisbursalPct = 0.8126;
  const interestPct = 0.1708;
  const feesPct = 0.0166;

  const strokeNet = circumference * netDisbursalPct;
  const strokeInterest = circumference * interestPct;
  const strokeFees = circumference * feesPct;

  const offsetNet = 0;
  const offsetInterest = -strokeNet;
  const offsetFees = -(strokeNet + strokeInterest);

  return (
    <div className="screen-content">
      <div className="card-title-group">
        <h2 style={{ fontSize: '1.4rem' }}>Total Cost Breakdown & Net Disbursal</h2>
        <p>See exactly what you will receive in hand, upfront fee deductions, and total financial cost.</p>
      </div>

      <div className="cost-breakdown-grid">
        {/* Left: Itemized Fee Ledger */}
        <div className="clarifund-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div className="card-header-row" style={{ alignItems: 'flex-start', gap: '12px' }}>
              <div className="card-title-group">
                <h3>Itemized Fee Deductions</h3>
                <p>Mandatory fees payable to Regulated Entity prior to disbursal</p>
              </div>
              <span className="badge-pill" style={{ background: 'var(--danger-bg)', color: 'var(--danger)', border: '1px solid var(--danger-border)', whiteSpace: 'nowrap', flexShrink: 0 }}>
                Total Fees: {q.totalFeesPayableFormatted}
              </span>
            </div>

            <table className="ledger-table">
              <thead>
                <tr>
                  <th>Cost Component</th>
                  <th>Rate / Regulatory Basis</th>
                  <th style={{ textAlign: 'right' }}>Amount (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Gross Sanctioned Amount</strong>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Approved Facility Limit</div>
                  </td>
                  <td style={{ color: 'var(--text-secondary)' }}>Full Loan Sanction</td>
                  <td style={{ textAlign: 'right', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>{q.sanctionedAmountFormatted}</td>
                </tr>
                {q.feeBreakdown.map((fee) => (
                  <tr key={fee.id}>
                    <td>
                      <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{fee.name}</span>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{fee.gstDetails}</div>
                    </td>
                    <td style={{ color: 'var(--text-secondary)', fontSize: '0.78rem' }}>{fee.rate}</td>
                    <td style={{ textAlign: 'right', color: 'var(--danger)', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                      - {fee.amountFormatted}
                    </td>
                  </tr>
                ))}
                <tr className="total-row">
                  <td>
                    <strong style={{ color: 'var(--success)', fontSize: '1rem' }}>Net Disbursal to Bank</strong>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      Credited to ShreeTech HDFC Current A/c
                    </div>
                  </td>
                  <td style={{ color: 'var(--success)', fontSize: '0.8rem', fontWeight: 600 }}>
                    Sanction - Total Fees
                  </td>
                  <td style={{ textAlign: 'right', color: 'var(--success)', fontSize: '1.1rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                    {q.netDisbursalAmountFormatted}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Statutory KFS Fee Protection Note */}
          <div style={{
            marginTop: '16px',
            padding: '12px 14px',
            background: 'var(--bg-card-inner)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)',
            fontSize: '0.76rem',
            color: 'var(--text-secondary)'
          }}>
            <strong style={{ color: 'var(--text-primary)' }}>RBI Transparency Mandate:</strong> No charges other than those explicitly stated above can be recovered from the borrower without prior written agreement and updated KFS.
          </div>
        </div>

        {/* Right: Reconciled Donut Chart ("Where your money goes") */}
        <div className="clarifund-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div className="card-header-row">
            <div className="card-title-group">
              <h3>Where Your Money Goes</h3>
              <p>Reconciled split of total repayment outflow</p>
            </div>
            <button
              type="button"
              className="chip-btn"
              onClick={() => openClariGuideWithClause('apr')}
            >
              Explain APR
            </button>
          </div>

          <div className="donut-chart-container">
            <svg width="180" height="180" viewBox="0 0 200 200">
              <circle
                cx="100"
                cy="100"
                r={r}
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="24"
              />
              {/* Segment 1: Net Disbursal (81.3%) */}
              <circle
                cx="100"
                cy="100"
                r={r}
                fill="none"
                stroke="#0284C7"
                strokeWidth="24"
                strokeDasharray={`${strokeNet} ${circumference}`}
                strokeDashoffset={offsetNet}
                transform="rotate(-90 100 100)"
                style={{ cursor: 'pointer', transition: 'stroke-width 0.2s' }}
                onMouseEnter={() => setActiveSegment('disbursal')}
                onMouseLeave={() => setActiveSegment(null)}
              />
              {/* Segment 2: Cumulative Interest (17.1%) */}
              <circle
                cx="100"
                cy="100"
                r={r}
                fill="none"
                stroke="#D97706"
                strokeWidth="24"
                strokeDasharray={`${strokeInterest} ${circumference}`}
                strokeDashoffset={offsetInterest}
                transform="rotate(-90 100 100)"
                style={{ cursor: 'pointer', transition: 'stroke-width 0.2s' }}
                onMouseEnter={() => setActiveSegment('interest')}
                onMouseLeave={() => setActiveSegment(null)}
              />
              {/* Segment 3: Upfront Fees (1.6%) */}
              <circle
                cx="100"
                cy="100"
                r={r}
                fill="none"
                stroke="#DC2626"
                strokeWidth="24"
                strokeDasharray={`${strokeFees} ${circumference}`}
                strokeDashoffset={offsetFees}
                transform="rotate(-90 100 100)"
                style={{ cursor: 'pointer', transition: 'stroke-width 0.2s' }}
                onMouseEnter={() => setActiveSegment('fees')}
                onMouseLeave={() => setActiveSegment(null)}
              />
              {/* Center Total Text */}
              <text x="100" y="93" textAnchor="middle" fill="#64748B" fontSize="10" fontWeight="600">
                TOTAL OUTFLOW
              </text>
              <text x="100" y="112" textAnchor="middle" fill="#0F172A" fontSize="16" fontWeight="800" fontFamily="sans-serif">
                ₹48.24L
              </text>
              <text x="100" y="126" textAnchor="middle" fill="#0284C7" fontSize="9" fontWeight="700">
                APR 14.80%
              </text>
            </svg>

            {/* Donut Chart Legend & Detailed Breakdown */}
            <div className="donut-legend">
              <div className="legend-item" style={{ borderColor: activeSegment === 'disbursal' ? '#3B82F6' : undefined }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span className="legend-color-dot" style={{ background: '#3B82F6' }}></span>
                  <div>
                    <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>Principal (Net Disbursal)</span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>Directly usable capital</span>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.88rem' }}>81.3%</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block' }}>₹39,20,000</span>
                </div>
              </div>

              <div className="legend-item" style={{ borderColor: activeSegment === 'interest' ? '#F59E0B' : undefined }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span className="legend-color-dot" style={{ background: '#F59E0B' }}></span>
                  <div>
                    <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>Interest (Total 36M)</span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>12.50% reducing p.a.</span>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.88rem' }}>17.1%</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block' }}>₹8,24,000</span>
                </div>
              </div>

              <div className="legend-item" style={{ borderColor: activeSegment === 'fees' ? '#EF4444' : undefined }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span className="legend-color-dot" style={{ background: '#EF4444' }}></span>
                  <div>
                    <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>Fees & Charges (RE)</span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>Upfront one-time</span>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.88rem' }}>1.6%</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block' }}>₹80,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
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
