import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Features } from './components/Features';
import { Trust } from './components/Trust';
import { PartnerSection } from './components/PartnerSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-[rgb(233,196,237)] min-h-screen">
      <Hero />
      <Problem />
      <Features />
      <Trust />
      <PartnerSection />
      <Footer />
    </div>
  );
}
