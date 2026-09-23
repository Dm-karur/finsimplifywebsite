import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Blog from '../pages/Blog';
import BlogPost from '../pages/BlogPost';
import Contact from '../pages/Contact';

// New Submenu Pages
import TransactionalActivities from '../pages/services/TransactionalActivities';
import DecisionSupportActivities from '../pages/services/DecisionSupportActivities';
// Original generic imports (kept in case they are used elsewhere)
import CfoOperations from '../pages/services/CfoOperations';
import AccountingCompliance from '../pages/services/AccountingCompliance';
import BusinessSetup from '../pages/services/BusinessSetup';

// The 8 distinct page components
import AccountsPayable from '../pages/services/AccountsPayable';
import AccountsReceivable from '../pages/services/AccountsReceivable';
import PayrollManagement from '../pages/services/PayrollManagement';
import AccountingReporting from '../pages/services/AccountingReporting';
import ManagementReporting from '../pages/services/ManagementReporting';
import FinancialPlanning from '../pages/services/FinancialPlanning';
import Taxes from '../pages/services/Taxes';
import ConsultingCfo from '../pages/services/ConsultingCfo';

import ContactSection from '../components/layout/ContactSection';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/shared/ScrollToTop';

export default function AppRoutes() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-surface">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            
            {/* Main Submenu Routes */}
            <Route path="/services/transactional-activities" element={<TransactionalActivities />} />
            <Route path="/services/decision-support-activities" element={<DecisionSupportActivities />} />
            {/* The 8 distinct submenu routes */}
            <Route path="/services/accounts-payable" element={<AccountsPayable />} />
            <Route path="/services/accounts-receivable" element={<AccountsReceivable />} />
            <Route path="/services/payroll-management" element={<PayrollManagement />} />
            <Route path="/services/accounting-reporting" element={<AccountingReporting />} />
            <Route path="/services/management-reporting" element={<ManagementReporting />} />
            <Route path="/services/financial-planning" element={<FinancialPlanning />} />
            <Route path="/services/taxes" element={<Taxes />} />
            <Route path="/services/consulting-cfo" element={<ConsultingCfo />} />
            
            {/* Legacy/Other routes */}
            <Route path="/services/cfo-operations" element={<CfoOperations />} />
            <Route path="/services/accounting-compliance" element={<AccountingCompliance />} />
            <Route path="/services/business-setup" element={<BusinessSetup />} />
            
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <ContactSection />
        <Footer />
      </div>
    </Router>
  );
}
