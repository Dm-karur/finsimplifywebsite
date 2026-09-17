import HeroSection from '../components/home/HeroSection';
import HeroStats from '../components/home/HeroStats';
import WhoWeAre from '../components/home/WhoWeAre';
import ServicesSection from '../components/home/ServicesSection';
import ValuesSection from '../components/home/ValuesSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import TeamSection from '../components/home/TeamSection';
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
      <ValuesSection />
      <WhyChooseUs />
      <TeamSection />
      <TrustedPartner />
      <TestimonialsSection />
      <LatestBlogs />
      <FAQSection />
    </>
  );
}
