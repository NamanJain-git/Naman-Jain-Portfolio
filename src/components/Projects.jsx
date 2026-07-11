import { motion } from 'framer-motion';
import { projects } from '../utils/data';

function Projects() {
  return (
    <section id="projects" className="w-full py-24 px-6 md:px-12 lg:px-20 xl:px-24">
      <div className="w-full text-center">
        <h2 className="text-5xl font-bold text-white sm:text-6xl">Featured Projects</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400">
          A showcase of my recent work and creative experiments.
        </p>
      </div>

      <div className="mt-14 grid w-full gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article key={project.title} whileHover={{ y: -8 }} className="group w-full overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/80 shadow-soft">
            <div className="relative overflow-hidden">
              <img src={project.image} alt={project.title} className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="space-y-5 p-8">
              <div>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-400">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-slate-900/90 px-4 py-2 text-sm text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-105">
                  Live Demo
                </a>
                <a href={project.code} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900/90 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/30 hover:bg-slate-900">
                  Code
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
