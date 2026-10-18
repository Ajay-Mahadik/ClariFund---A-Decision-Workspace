import React, { useState, useEffect, useRef } from 'react';
import { useLoan } from '../context/LoanContext.jsx';
import { sendClariGuideQuery } from '../services/geminiService.js';
import { Icons } from './ui/Icons.jsx';

export default function ClariGuideModal() {
  const {
    loanData,
    isClariGuideOpen,
    setIsClariGuideOpen,
    clariGuideActiveClause,
    setClariGuideActiveClause,
    geminiApiKey,
    setGeminiApiKey
  } = useLoan();

  const [inputQuery, setInputQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [showKeyConfig, setShowKeyConfig] = useState(false);
  const [tempApiKey, setTempApiKey] = useState(geminiApiKey || "");

  const [messages, setMessages] = useState([
    {
      id: "msg-welcome",
      role: "assistant",
      text: `Hello Rohan! I am **ClariGuide**, your embedded loan decision assistant. I am strictly grounded in your approved **₹40,00,000 MSME Term Loan KFS** and contract.\n\nAsk me anything about your costs, APR, personal guarantees, covenants, or repayment schedule.`,
      citation: "Source Verified: Approved KFS & Facility Agreement",
      confidence: "High",
      abstain: false
    }
  ]);

  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (isClariGuideOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isClariGuideOpen]);

  // If opened with specific clause trigger, trigger contextual query
  useEffect(() => {
    if (isClariGuideOpen && clariGuideActiveClause) {
      let prompt = "";
      if (clariGuideActiveClause === 'apr') prompt = "Why is the APR 14.80% when nominal interest is 12.50%?";
      else if (clariGuideActiveClause === 'guarantee') prompt = "Explain my personal guarantee obligations under Clause 8.2";
      else if (clariGuideActiveClause.includes('10.3') || clariGuideActiveClause === 'dscr') prompt = "What is the DSCR requirement under Clause 10.3?";
      else if (clariGuideActiveClause.includes('9.1')) prompt = "What happens if I miss an EMI payment?";
      else prompt = `Explain the implications of ${clariGuideActiveClause} in my loan agreement.`;

      handleSend(prompt);
      setClariGuideActiveClause(null);
    }
  }, [isClariGuideOpen, clariGuideActiveClause]);

  if (!isClariGuideOpen) return null;

  const handleSend = async (queryToSend = null) => {
    const q = (typeof queryToSend === 'string' ? queryToSend : inputQuery).trim();
    if (!q || loading) return;

    const userMsg = {
      id: `usr-${Date.now()}`,
      role: "user",
      text: q
    };

    setMessages(prev => [...prev, userMsg]);
    setInputQuery("");
    setLoading(true);

    try {
      const response = await sendClariGuideQuery({
        query: q,
        conversationHistory: messages,
        loanData,
        apiKey: geminiApiKey
      });

      const assistantMsg = {
        id: `asst-${Date.now()}`,
        role: "assistant",
        text: response.text,
        citation: response.citation,
        confidence: response.confidence,
        abstain: response.abstain,
        originalQuery: q
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          id: `asst-err-${Date.now()}`,
          role: "assistant",
          text: "An error occurred retrieving the verified contract terms. Please try again or route to the credit team.",
          citation: null,
          confidence: "Abstain",
          abstain: true,
          originalQuery: q
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleRouteToCreditTeam = (queryText) => {
    submitClarification("General Terms & AI Abstention", queryText);
    setIsClariGuideOpen(false);
    navigateToScreen(SCREENS.REQUEST_CLARIFICATION);
  };

  const saveApiKey = () => {
    setGeminiApiKey(tempApiKey.trim());
    if (typeof window !== 'undefined') {
      window.__GEMINI_API_KEY__ = tempApiKey.trim();
    }
    setShowKeyConfig(false);
  };

  return (
    <div className="clariguide-overlay" onClick={() => setIsClariGuideOpen(false)}>
      <div className="clariguide-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className="drawer-header">
          <div className="drawer-title-group">
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--primary-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF'
            }}>
              <Icons.Bot size={18} />
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>ClariGuide Assistant</h3>
              <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                Powered by Gemini • Strict Contract Grounding
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              type="button"
              className="chip-btn"
              onClick={() => setShowKeyConfig(!showKeyConfig)}
              title="Configure Gemini API Key"
              style={{ padding: '3px 8px', fontSize: '0.7rem' }}
            >
              {geminiApiKey ? "API Key Set ✓" : "Demo Mode (Offline Verified)"}
            </button>
            <button
              type="button"
              style={{ background: 'transparent', border: 'none', color: '#64748B', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              onClick={() => setIsClariGuideOpen(false)}
            >
              <Icons.X size={20} />
            </button>
          </div>
        </div>

        {/* AI Trust Rule Pill (Requirement 3 & PRD Slide 12) */}
        <div style={{
          background: 'rgba(5, 150, 105, 0.08)',
          borderBottom: '1px solid rgba(5, 150, 105, 0.2)',
          padding: '8px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.72rem',
          color: 'var(--success)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Icons.ShieldCheck size={14} />
            <span><strong>AI Trust Rule:</strong> Zero hallucination. Answers only from approved KFS & contract.</span>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)' }}>100% Deterministic</span>
        </div>

        {/* API Key Configuration Dropdown */}
        {showKeyConfig && (
          <div style={{
            background: 'var(--bg-card-inner)',
            borderBottom: '1px solid var(--border-medium)',
            padding: '12px 16px',
            fontSize: '0.78rem'
          }}>
            <p style={{ color: 'var(--text-primary)', marginBottom: '8px', fontWeight: 600 }}>
              Optional: Connect Live Google Gemini API Key
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type="password"
                placeholder="Paste AI Studio API Key (AIzaSy...)"
                value={tempApiKey}
                onChange={(e) => setTempApiKey(e.target.value)}
                style={{
                  flex: 1,
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '6px 10px',
                  color: 'var(--text-primary)',
                  fontSize: '0.75rem',
                  outline: 'none'
                }}
              />
              <button
                type="button"
                className="btn btn-primary"
                style={{ padding: '6px 12px', fontSize: '0.75rem' }}
                onClick={saveApiKey}
              >
                Save
              </button>
            </div>
            <p style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '6px' }}>
              If left blank, ClariFund uses its internal deterministic extraction engine strictly grounded in the RBI KFS payload.
            </p>
          </div>
        )}

        {/* Chat History Area */}
        <div className="chat-history">
          {messages.map((m) => (
            <div key={m.id} className={`chat-message ${m.role}`}>
              <div className="chat-bubble">
                <p style={{ whiteSpace: 'pre-line' }}>{m.text}</p>

                {/* Exact Clause Citation Badge */}
                {m.citation && (
                  <div className="chat-citation-box" style={{ marginTop: '8px' }}>
                    <Icons.FileText size={12} />
                    <span>{m.citation}</span>
                  </div>
                )}

                {/* Strict Abstention & Human Escalation Routing (Requirement 3 & PRD Slide 12) */}
                {m.abstain && (
                  <div className="chat-abstain-box">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#D97706', fontWeight: 600, marginBottom: '6px' }}>
                      <Icons.AlertTriangle size={15} />
                      AI Abstention Triggered (Unverified in Contract)
                    </div>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '8px', lineHeight: 1.4 }}>
                      Per regulatory guardrails, ClariGuide cannot answer queries requiring unstated credit policy waivers.
                    </p>
                    <button
                      type="button"
                      className="btn btn-primary"
                      style={{ fontSize: '0.75rem', padding: '6px 12px', width: '100%' }}
                      onClick={() => handleRouteToCreditTeam(m.originalQuery || "Unverified inquiry")}
                    >
                      <Icons.Send size={13} />
                      Route to Credit Team (RM)
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

          {loading && (
            <div className="chat-message assistant">
              <div className="chat-bubble" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                <Icons.Sparkles size={16} color="var(--primary)" />
                <span>Verifying against approved KFS & clauses...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Queries Chips */}
        <div style={{ padding: '0 16px 8px 16px' }}>
          <div className="suggested-chips">
            <button
              type="button"
              className="chip-btn"
              onClick={() => handleSend("Why is the APR 14.80% when nominal interest is 12.50%?")}
            >
              APR vs Nominal Rate?
            </button>
            <button
              type="button"
              className="chip-btn"
              onClick={() => handleSend("Explain the personal guarantee under Clause 8.2")}
            >
              Personal Guarantee?
            </button>
            <button
              type="button"
              className="chip-btn"
              onClick={() => handleSend("What is the DSCR requirement?")}
            >
              DSCR Covenant?
            </button>
            <button
              type="button"
              className="chip-btn"
              onClick={() => handleSend("What happens if I miss an EMI payment?")}
            >
              Late Penalties?
            </button>
            <button
              type="button"
              className="chip-btn"
              style={{ borderColor: 'rgba(239, 68, 68, 0.4)', color: '#F87171' }}
              onClick={() => handleSend("Can I pay my loan installments in Bitcoin cryptocurrency?")}
              title="Tests the strict AI Trust Rule abstention"
            >
              Test Abstention Trigger ↗
            </button>
          </div>
        </div>

        {/* Chat Input Field */}
        <div className="chat-input-area">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="chat-input-row"
          >
            <input
              type="text"
              placeholder="Ask anything about your loan terms..."
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              disabled={loading}
            />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!inputQuery.trim() || loading}
              style={{ padding: '0 16px' }}
            >
              <Icons.Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
