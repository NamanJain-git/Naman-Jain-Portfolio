import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="relative w-full py-20 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 xl:px-24">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: 'easeOut' }} className="w-full text-center">
        <h2 className="inline-flex flex-col text-5xl font-bold text-white sm:text-6xl">
          About <span className="text-transparent bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text">Me</span>
        </h2>
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75, ease: 'easeOut', delay: 0.15 }} className="mt-10 rounded-[20px] border border-white/10 bg-slate-950/70 p-6 md:p-10 lg:p-14 shadow-soft">
        <p className="mb-6 text-xl leading-9 text-slate-300">
          I&apos;m a passionate frontend developer who loves bringing ideas to life through code. My journey in web development started with a curiosity about how websites work, and it has evolved into a deep commitment to creating exceptional digital experiences.
        </p>
        <p className="mb-6 text-xl leading-9 text-slate-300">
          I believe in the power of continuous learning and staying updated with the latest technologies. Whether it&apos;s experimenting with new frameworks, optimizing performance, or crafting pixel-perfect designs, I&apos;m always excited to push the boundaries of what&apos;s possible on the web.
        </p>
        <p className="text-xl leading-9 text-slate-300">
          When I&apos;m not coding, you&apos;ll find me exploring design trends, contributing to open-source projects, or sharing knowledge with the developer community. I&apos;m driven by creativity, attention to detail, and the endless possibilities that modern web technologies offer.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
