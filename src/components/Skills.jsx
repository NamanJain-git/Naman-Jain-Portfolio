import { motion } from 'framer-motion';
import { FaHtml5, FaReact, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { SiCss3, SiJavascript, SiTailwindcss, SiBootstrap, SiMongodb, SiOpenai } from 'react-icons/si';

const skills = [
  { title: 'HTML & CSS', description: 'Semantic markup and modern styling', icon: FaHtml5, accent: 'from-orange-400 to-rose-400' },
  { title: 'JavaScript', description: 'ES6+ and modern frameworks', icon: SiJavascript, accent: 'from-yellow-400 to-orange-500' },
  { title: 'React', description: 'Component-based architecture', icon: FaReact, accent: 'from-cyan-400 to-blue-500' },
  { title: 'Responsive Design', description: 'Mobile-first approach', icon: SiTailwindcss, accent: 'from-sky-400 to-violet-500' },
  { title: 'Git', description: 'Version control and collaboration', icon: FaGitAlt, accent: 'from-orange-400 to-red-500' },
  { title: 'Node.js', description: 'Server-side JavaScript runtime', icon: FaNodeJs, accent: 'from-lime-400 to-emerald-400' },
  { title: 'Bootstrap & Tailwind CSS', description: 'Modern CSS frameworks', icon: SiBootstrap, accent: 'from-fuchsia-500 to-violet-500' },
  { title: 'SQL & MongoDB', description: 'Relational and document databases', icon: SiMongodb, accent: 'from-emerald-400 to-teal-400' },
  { title: 'AI Tools', description: 'Lovable AI, Claude, ChatGPT', icon: SiOpenai, accent: 'from-violet-500 to-cyan-500' },
];

function Skills() {
  return (
    <section id="skills" className="w-full py-24 px-6 md:px-12 lg:px-20 xl:px-24">
      <div className="w-full text-center">
        <h2 className="text-5xl font-bold text-white sm:text-6xl">My Skills</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400">
          A curated set of technologies and tools I use to build modern web experiences.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.article key={skill.title} whileHover={{ y: -10, scale: 1.02 }} transition={{ duration: 0.35 }} className="group rounded-[24px] border border-white/10 bg-slate-950/70 p-8 shadow-soft">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-900/90 text-white shadow-glow">
                <div className={`rounded-2xl bg-gradient-to-br ${skill.accent} p-3 text-3xl text-white transition duration-500 group-hover:rotate-6`}>
                  <Icon />
                </div>
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-white">{skill.title}</h3>
              <p className="text-base leading-7 text-slate-400">{skill.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
