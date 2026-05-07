import SiteLayout from '@/components/SiteLayout';
import HeroSection from '@/components/home/HeroSection';
import TickerBanner from '@/components/home/TickerBanner';
import ServicesSection from '@/components/home/ServicesSection';
import TradesTicker from '@/components/home/TradesTicker';
import ProcessSection from '@/components/home/ProcessSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import FaqSection from '@/components/home/FaqSection';
import CtaSection from '@/components/home/CtaSection';

export default function HomePage() {
  return (
    <SiteLayout>
      <HeroSection />
      <TickerBanner />
      <ServicesSection />
      <TradesTicker />
      <ProcessSection />
      <ReviewsSection />
      <WhyUsSection />
      <FaqSection />
      <CtaSection />
    </SiteLayout>
  );
}
