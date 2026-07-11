import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import { sections } from './utils/data';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [loading, setLoading] = useState(true);

  const progress = useMemo(() => {
    if (typeof window === 'undefined') return 0;
    return Math.min(100, Math.max(0, (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100));
  }, [scrollY]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1300);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sectionElements = sections.map((section) => document.getElementById(section.id));
      const current = sectionElements.find((sectionEl) => {
        if (!sectionEl) return false;
        return sectionEl.offsetTop <= scrollPosition && sectionEl.offsetTop + sectionEl.offsetHeight > scrollPosition;
      });
      setActiveSection(current?.id ?? 'home');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden text-slate-100 w-full">
      <div className="fixed left-0 top-0 z-50 h-1 w-full bg-transparent">
        <motion.div className="h-full bg-gradient-to-r from-violet-500 to-sky-400" style={{ width: `${progress}%` }} />
      </div>

      <Navbar activeSection={activeSection} />
      <main className="w-full px-6 md:px-12 lg:px-20 xl:px-24">
        <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
        <div className={loading ? 'pointer-events-none select-none opacity-0' : 'opacity-100'}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </main>
      <ScrollToTop />
    </div>
  );
}

export default App;
