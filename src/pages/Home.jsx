import HeroSection from '../components/home/HeroSection';
import HeroStats from '../components/home/HeroStats';
import WhoWeAre from '../components/home/WhoWeAre';
import ServicesSection from '../components/home/ServicesSection';
import FinancialProcessesSection from '../components/home/FinancialProcessesSection';
import ValuesSection from '../components/home/ValuesSection';
import DeliveryFrameworkSection from '../components/home/DeliveryFrameworkSection';
import TrustedPartner from '../components/home/TrustedPartner';
import TestimonialsSection from '../components/home/TestimonialsSection';
import LatestBlogs from '../components/home/LatestBlogs';
import FAQSection from '../components/home/FAQSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <HeroStats />
      <WhoWeAre />
      <ServicesSection />
      <FinancialProcessesSection />
      <ValuesSection />
      <DeliveryFrameworkSection />
      <TrustedPartner />
      <TestimonialsSection />
      <LatestBlogs />
      <FAQSection />
    </>
  );
}
