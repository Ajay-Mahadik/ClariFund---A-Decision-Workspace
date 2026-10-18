import React from 'react';
import { LoanProvider, useLoan, SCREENS } from './context/LoanContext.jsx';
import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import ClariGuideModal from './components/ClariGuideModal.jsx';
import OfferOverview from './components/screens/OfferOverview.jsx';
import CostBreakdown from './components/screens/CostBreakdown.jsx';
import RepaymentSchedule from './components/screens/RepaymentSchedule.jsx';
import KeyObligations from './components/screens/KeyObligations.jsx';
import AgreementViewer from './components/screens/AgreementViewer.jsx';
import KFSAcknowledgment from './components/screens/KFSAcknowledgment.jsx';
import DecisionExecution from './components/screens/DecisionExecution.jsx';
import RequestClarification from './components/screens/RequestClarification.jsx';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ClariFund Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '40px',
          maxWidth: '600px',
          margin: '40px auto',
          background: '#FFFFFF',
          borderRadius: '12px',
          border: '1px solid var(--border-medium)',
          boxShadow: '0 10px 25px rgba(0,0,0,0.06)',
          textAlign: 'center'
        }}>
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: 'var(--danger-bg)',
            color: 'var(--danger)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px',
            fontSize: '1.4rem'
          }}>
            ⚠️
          </div>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
            Encountered a Display Issue
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
            {this.state.error?.message || "An unexpected error occurred rendering this view."}
          </p>
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={() => { this.setState({ hasError: false, error: null }); }}
          >
            Recover & Reload View
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function MainWorkspace() {
  const { activeScreen } = useLoan();

  const renderActiveScreen = () => {
    switch (activeScreen) {
      case SCREENS.OFFER_OVERVIEW:
        return <OfferOverview />;
      case SCREENS.COST_BREAKDOWN:
        return <CostBreakdown />;
      case SCREENS.REPAYMENT_SCHEDULE:
        return <RepaymentSchedule />;
      case SCREENS.KEY_OBLIGATIONS:
        return <KeyObligations />;
      case SCREENS.AGREEMENT_VIEWER:
        return <AgreementViewer />;
      case SCREENS.KFS_ACK:
        return <KFSAcknowledgment />;
      case SCREENS.DECISION_EXECUTION:
        return <DecisionExecution />;
      case SCREENS.REQUEST_CLARIFICATION:
        return <RequestClarification />;
      default:
        return <OfferOverview />;
    }
  };

  return (
    <div className="app-layout">
      {/* Persistent Progressive Disclosure Sidebar */}
      <Sidebar />

      {/* Main Content View */}
      <main className="app-main">
        {/* Sticky App Header */}
        <Header />

        {/* Active Screen View protected by Error Boundary */}
        <ErrorBoundary>
          {renderActiveScreen()}
        </ErrorBoundary>
      </main>

      {/* Global ClariGuide Contextual Assistant Floating Modal */}
      <ClariGuideModal />
    </div>
  );
}

export default function App() {
  return (
    <LoanProvider>
      <MainWorkspace />
    </LoanProvider>
  );
}
