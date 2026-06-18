import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Industries from '@/components/Industries';
import Problem from '@/components/Problem';
import Services from '@/components/Services';
import ROICalculator from '@/components/ROICalculator';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import RiskReversal from '@/components/RiskReversal';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Industries />
      <Problem />
      <Services />
      <ROICalculator />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <RiskReversal />
      <CTA />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
