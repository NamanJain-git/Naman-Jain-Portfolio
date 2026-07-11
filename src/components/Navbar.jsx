import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { sections } from '../utils/data';

const navVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${scrolled ? 'backdrop-blur-xl bg-slate-950/70 border-b border-white/10 shadow-2xl shadow-slate-950/30' : 'bg-transparent'} `}
    >
      <div className="flex w-full items-center justify-between px-6 py-5 md:px-12 lg:px-20 xl:px-24">
        <a href="#home" className="text-3xl font-bold tracking-[-0.04em] text-transparent bg-gradient-to-r from-violet-500 via-fuchsia-400 to-sky-400 bg-clip-text">
          NJ
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {sections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`group text-base font-semibold transition ${activeSection === item.id ? 'text-white' : 'text-slate-300'} hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-violet-400 hover:to-cyan-400`}
            >
              <span>{item.label}</span>
              <span className="block h-[2px] w-0 bg-gradient-to-r from-violet-400 to-cyan-400 transition-all duration-300 group-hover:w-full ${activeSection === item.id ? 'w-full' : ''}" />
            </a>
          ))}
        </nav>

        <button aria-label="Toggle navigation" onClick={() => setOpen(!open)} className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:border-white/20 hover:bg-white/10 md:hidden">
          {open ? <HiX className="h-7 w-7" /> : <HiMenu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="border-t border-white/10 bg-slate-950/95 px-6 py-5 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {sections.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)} className={`rounded-2xl px-4 py-4 text-base font-semibold transition ${activeSection === item.id ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}>
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

export default Navbar;
