import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formRef.current) return;

    try {
      await emailjs.sendForm('service_id', 'template_id', formRef.current, 'public_key');
      setStatus('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      setStatus('Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="w-full py-24 px-6 md:px-12 lg:px-20 xl:px-24">
      <div className="w-full text-center">
        <h2 className="text-5xl font-bold text-white sm:text-6xl">Get In Touch</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <motion.form ref={formRef} onSubmit={handleSubmit} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-[28px] border border-white/10 bg-slate-950/80 p-10 shadow-soft">
          <div className="space-y-6">
            <label className="block text-sm font-medium text-slate-300">Name</label>
            <input name="user_name" required className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-400/40 focus:ring-4 focus:ring-cyan-400/10" placeholder="Your name" />
            <label className="block text-sm font-medium text-slate-300">Email</label>
            <input type="email" name="user_email" required className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none transition focus:border-violet-400/40 focus:ring-4 focus:ring-violet-400/10" placeholder="your.email@example.com" />
            <label className="block text-sm font-medium text-slate-300">Message</label>
            <textarea name="message" required rows="6" className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-slate-100 outline-none transition focus:border-sky-400/40 focus:ring-4 focus:ring-sky-400/10" placeholder="Tell me about your project..."></textarea>
            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-8 py-4 text-base font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:shadow-glow">
              Send Message
            </button>
            {status && <p className="mt-3 text-sm text-slate-300">{status}</p>}
          </div>
        </motion.form>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.12 }} className="rounded-[28px] border border-white/10 bg-slate-950/80 p-10 shadow-soft">
          <h3 className="mb-8 text-3xl font-semibold text-white">Connect With Me</h3>
          <div className="space-y-4">
            <a href="https://github.com/NamanJain-git" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-900/80 p-5 transition hover:-translate-y-1 hover:border-violet-400/30 hover:bg-slate-900/90 hover:shadow-glow">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-300">
                <FaGithub className="h-5 w-5" />
              </div>
              <div>
                <p className="text-base font-semibold text-white">GitHub</p>
                <p className="text-sm text-slate-400">View my repositories</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/namanjain25" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-900/80 p-5 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-900/90 hover:shadow-glow">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-sky-400/10 text-sky-300">
                <FaLinkedin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-base font-semibold text-white">LinkedIn</p>
                <p className="text-sm text-slate-400">Let's connect professionally</p>
              </div>
            </a>
            <a href="mailto:socialjainnaman@gmail.com" className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-900/80 p-5 transition hover:-translate-y-1 hover:border-violet-400/30 hover:bg-slate-900/90 hover:shadow-glow">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-fuchsia-500/10 text-fuchsia-300">
                <FaEnvelope className="h-5 w-5" />
              </div>
              <div>
                <p className="text-base font-semibold text-white">Email</p>
                <p className="text-sm text-slate-400">socialjainnaman@gmail.com</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
