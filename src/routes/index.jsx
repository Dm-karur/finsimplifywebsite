import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import CfoOperations from '../pages/services/CfoOperations';
import AccountingCompliance from '../pages/services/AccountingCompliance';
import PayrollManagement from '../pages/services/PayrollManagement';
import AccountsPayable from '../pages/services/AccountsPayable';
import AccountsReceivable from '../pages/services/AccountsReceivable';
import BusinessSetup from '../pages/services/BusinessSetup';
import ContactSection from '../components/layout/ContactSection';
import Footer from '../components/layout/Footer';

export default function AppRoutes() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-surface">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/cfo-operations" element={<CfoOperations />} />
            <Route path="/services/accounting-compliance" element={<AccountingCompliance />} />
            <Route path="/services/payroll-management" element={<PayrollManagement />} />
            <Route path="/services/accounts-payable" element={<AccountsPayable />} />
            <Route path="/services/accounts-receivable" element={<AccountsReceivable />} />
            <Route path="/services/business-setup" element={<BusinessSetup />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <ContactSection />
        <Footer />
      </div>
    </Router>
  );
}
