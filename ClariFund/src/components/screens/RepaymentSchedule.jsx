import React, { useState } from 'react';
import { useLoan } from '../../context/LoanContext.jsx';
import { Icons } from '../ui/Icons.jsx';

export default function RepaymentSchedule() {
  const { loanData, nextStep, prevStep } = useLoan();
  const q = loanData.part1_quantitative;
  const amort = loanData.amortizationSchedule;

  const [yearFilter, setYearFilter] = useState('all'); // 'all' | 'y1' | 'y2' | 'y3'
  const [searchTerm, setSearchTerm] = useState('');

  // Filter amortization rows
  const filteredSchedule = amort.filter((row) => {
    if (yearFilter === 'y1' && (row.month < 1 || row.month > 12)) return false;
    if (yearFilter === 'y2' && (row.month < 13 || row.month > 24)) return false;
    if (yearFilter === 'y3' && (row.month < 25 || row.month > 36)) return false;

    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      const matchMonth = row.month.toString().includes(term);
      const matchDate = row.dueDate.toLowerCase().includes(term);
      return matchMonth || matchDate;
    }
    return true;
  });

  const downloadCSV = () => {
    const headers = ["Month", "Due Date", "Opening Balance", "Principal", "Interest", "EMI", "Closing Balance"];
    const rows = amort.map(r => [
      r.month,
      r.dueDate,
      r.openingBalance,
      r.principal,
      r.interest,
      r.emi,
      r.closingBalance
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `ClariFund_Amortization_${loanData.metadata.kfsReferenceId}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="screen-content">
      <div className="card-title-group">
        <h2 style={{ fontSize: '1.4rem' }}>Repayment Schedule & Amortization</h2>
        <p>Your monthly repayment obligations over the 36-month tenure (12.50% p.a. fixed rate).</p>
      </div>

      {/* Summary KPI Cards (PRD Slide 13) */}
      <div className="metrics-grid-4">
        <div className="metric-card">
          <span className="metric-label">Estimated Monthly EMI</span>
          <p className="metric-value cyan">{q.estimatedEMIFormatted}</p>
          <span className="metric-sub">Auto-debited via NACH</span>
        </div>

        <div className="metric-card">
          <span className="metric-label">Tenure Duration</span>
          <p className="metric-value">{q.tenureMonths} Months</p>
          <span className="metric-sub">3 Years reducing balance</span>
        </div>

        <div className="metric-card">
          <span className="metric-label">First Due Date</span>
          <p className="metric-value" style={{ color: 'var(--warning)' }}>30 Oct 2026</p>
          <span className="metric-sub">30th of each calendar month</span>
        </div>

        <div className="metric-card">
          <span className="metric-label">Total Repayment</span>
          <p className="metric-value">{q.totalRepaymentAmountFormatted}</p>
          <span className="metric-sub">₹40L Principal + ₹8.24L Interest</span>
        </div>
      </div>

      {/* Amortization Table Card */}
      <div className="clarifund-card">
        <div className="card-header-row">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              type="button"
              className={`chip-btn ${yearFilter === 'all' ? 'active' : ''}`}
              style={{ background: yearFilter === 'all' ? 'var(--primary)' : undefined, color: yearFilter === 'all' ? '#FFFFFF' : undefined, fontWeight: yearFilter === 'all' ? 700 : 500 }}
              onClick={() => setYearFilter('all')}
            >
              All 36 Months
            </button>
            <button
              type="button"
              className={`chip-btn ${yearFilter === 'y1' ? 'active' : ''}`}
              style={{ background: yearFilter === 'y1' ? 'var(--primary)' : undefined, color: yearFilter === 'y1' ? '#FFFFFF' : undefined, fontWeight: yearFilter === 'y1' ? 700 : 500 }}
              onClick={() => setYearFilter('y1')}
            >
              Year 1 (M1–M12)
            </button>
            <button
              type="button"
              className={`chip-btn ${yearFilter === 'y2' ? 'active' : ''}`}
              style={{ background: yearFilter === 'y2' ? 'var(--primary)' : undefined, color: yearFilter === 'y2' ? '#FFFFFF' : undefined, fontWeight: yearFilter === 'y2' ? 700 : 500 }}
              onClick={() => setYearFilter('y2')}
            >
              Year 2 (M13–M24)
            </button>
            <button
              type="button"
              className={`chip-btn ${yearFilter === 'y3' ? 'active' : ''}`}
              style={{ background: yearFilter === 'y3' ? 'var(--primary)' : undefined, color: yearFilter === 'y3' ? '#FFFFFF' : undefined, fontWeight: yearFilter === 'y3' ? 700 : 500 }}
              onClick={() => setYearFilter('y3')}
            >
              Year 3 (M25–M36)
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              type="text"
              placeholder="Search month or date..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                background: 'var(--bg-card-inner)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                padding: '0 12px',
                height: '34px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.8rem',
                outline: 'none',
                boxSizing: 'border-box',
                width: '180px'
              }}
            />
            <button
              type="button"
              className="btn btn-secondary"
              onClick={downloadCSV}
              style={{
                height: '34px',
                padding: '0 14px',
                fontSize: '0.8rem',
                boxSizing: 'border-box',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Icons.Download size={14} />
              Export CSV
            </button>
          </div>
        </div>

        {/* Scrollable Amortization Container */}
        <div className="amortization-container">
          <table className="amort-table">
            <thead>
              <tr>
                <th style={{ width: '80px' }}>Month</th>
                <th>Due Date</th>
                <th>Opening Balance</th>
                <th>Principal</th>
                <th>Interest</th>
                <th>EMI</th>
                <th>Closing Balance</th>
              </tr>
            </thead>
            <tbody>
              {filteredSchedule.map((row) => (
                <tr key={row.month}>
                  <td><strong>M-{row.month}</strong></td>
                  <td style={{ color: 'var(--text-secondary)' }}>{row.dueDate}</td>
                  <td>₹{row.openingBalance.toLocaleString('en-IN')}</td>
                  <td style={{ color: 'var(--primary)', fontWeight: 600 }}>₹{row.principal.toLocaleString('en-IN')}</td>
                  <td style={{ color: 'var(--warning)', fontWeight: 600 }}>₹{row.interest.toLocaleString('en-IN')}</td>
                  <td style={{ fontWeight: 700, color: 'var(--text-primary)' }}>₹{row.emi.toLocaleString('en-IN')}</td>
                  <td style={{ color: 'var(--text-muted)' }}>₹{row.closingBalance.toLocaleString('en-IN')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{
          marginTop: '14px',
          fontSize: '0.74rem',
          color: 'var(--text-muted)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <Icons.Clock size={13} />
          <span>
            This is an illustrative amortization schedule based on a fixed interest rate of 12.50% p.a. Actual debits may vary slightly based on bank clearing holidays.
          </span>
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
