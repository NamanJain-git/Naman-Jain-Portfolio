import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiTailwindcss, SiReact } from 'react-icons/si';
import portfolio from "../assets/portfolio.png";

const buttonVariant = {
    hover: { scale: 1.02, boxShadow: '0 18px 32px rgba(99,102,241,0.22)' },
};

function Hero() {
    return (
        <section id="home" className="relative w-full min-h-[calc(100vh-80px)] flex items-center px-6 md:px-12 lg:px-20 xl:px-24">
            <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none absolute left-[-100px] top-10 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
                <div className="pointer-events-none absolute right-[-80px] top-1/3 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
                <div className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
            </div>
            <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-start justify-center gap-16 lg:flex-row lg:items-center lg:justify-between lg:gap-32 xl:gap-40">
                <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }} className="flex-1 max-w-[620px] space-y-8">
                    <p className="inline-flex items-center rounded-full border border-sky-500/20 bg-slate-950/50 px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Hello, I&apos;m</p>
                    <div className="space-y-4">
                        <h1 className="text-[3.75rem] font-extrabold leading-[0.95] text-transparent bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text sm:text-[4.5rem] md:text-[5.25rem]">
                            Naman Jain
                        </h1>
                        <p className="text-5xl font-bold text-white sm:text-6xl">Frontend Web Developer</p>
                    </div>
                    <p className="max-w-2xl text-lg leading-8 text-slate-400">
                        I craft visually engaging and high-performance web experiences that blend creativity with functionality.
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                        <motion.a whileHover="hover" variants={buttonVariant} href="#projects" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-10 py-4 text-base font-semibold text-slate-950 shadow-glow transition-transform duration-300 hover:-translate-y-0.5">
                            View My Work
                        </motion.a>
                        <div className="flex gap-3">
                            <motion.a whileHover="hover" variants={buttonVariant} href="https://github.com/NamanJain-git" target="_blank" rel="noreferrer" className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 text-slate-200 transition hover:border-cyan-400/30 hover:bg-slate-900/90">
                                <FaGithub className="h-6 w-6" />
                            </motion.a>
                            <motion.a whileHover="hover" variants={buttonVariant} href="https://www.linkedin.com/in/namanjain25" target="_blank" rel="noreferrer" className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 text-slate-200 transition hover:border-violet-400/30 hover:bg-slate-900/90">
                                <FaLinkedin className="h-6 w-6" />
                            </motion.a>
                            <motion.a whileHover="hover" variants={buttonVariant} href="mailto:socialjainnaman@gmail.com" className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 text-slate-200 transition hover:border-sky-400/30 hover:bg-slate-900/90">
                                <FaEnvelope className="h-6 w-6" />
                            </motion.a>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }} className="relative flex w-full items-center justify-center lg:w-auto">
                    <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 blur-3xl opacity-70" />
                    <div className="relative flex h-[420px] w-[420px] items-center justify-center rounded-full border border-white/10 bg-slate-950/70 shadow-soft sm:h-[460px] sm:w-[460px]">
                        <div className="relative h-full w-full rounded-full overflow-hidden border border-white/10 bg-slate-900">
                            <img
                                src={portfolio}
                                alt="Naman Jain"
                                className="h-full w-full object-[center_20%] object-none scale-110"
                            />
                            <div className="absolute inset-x-0 bottom-10 mx-auto h-16 w-16 rounded-full bg-violet-500/30 blur-2xl" />
                        </div>
                    </div>
                    <div className="pointer-events-none absolute -z-10 left-2 top-10 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
                    <div className="pointer-events-none absolute -z-10 right-8 bottom-16 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
