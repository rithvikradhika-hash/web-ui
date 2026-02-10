import { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Features } from './components/Features';
import { Trust } from './components/Trust';
import { PartnerSection } from './components/PartnerSection';
import { Footer } from './components/Footer';
import { initReveal, forceRevealAll } from './lib/reveal';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const onLoad = () => {
      setLoaded(true);
      setTimeout(() => {
        setRemoved(true);
        requestAnimationFrame(() => initReveal());
      }, 600);
    };

    if (document.readyState === 'complete') onLoad();
    else window.addEventListener('load', onLoad, { once: true });

    return () => window.removeEventListener('load', onLoad as any);
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => initReveal());
  }, []);

  return (
    <div className="bg-[rgb(233,196,237)] min-h-screen">
      {!removed && (
        <div className={`page-loader ${loaded ? 'is-hidden' : ''}`} aria-hidden={loaded}>
          <div className="spinner" aria-hidden />
        </div>
      )}

      <Hero />
      <Problem />
      <Features />
      <Trust />
      <PartnerSection />
      <Footer />

      {(import.meta as any).env?.DEV && (
        <button
          onClick={() => forceRevealAll()}
          className="fixed bottom-4 right-4 z-50 bg-purple-600 text-white px-3 py-2 rounded shadow-lg"
          title="Force reveal all .reveal elements (dev only)"
        >
          Force Reveal
        </button>
      )}
    </div>
  );
}
