import AboutHero from '../components/about/AboutHero';
import TeamSection from '../components/home/TeamSection';
import ValuesSection from '../components/home/ValuesSection';
import HistorySection from '../components/about/HistorySection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import InfoCardsSection from '../components/about/InfoCardsSection';

export default function About() { 
  return (
    <>
      <AboutHero />
      <TeamSection 
        title={<>Meet <span className="text-secondary">Our Team</span></>}
        customPadding="pt-4 lg:pt-8 pb-12 lg:pb-16" 
      />
      <ValuesSection />
      <HistorySection />
      <WhyChooseUs />
      <InfoCardsSection />
    </>
  ); 
}
