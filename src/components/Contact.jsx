import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 relative z-10 w-full flex items-center justify-center min-h-[60vh] border-t border-border mt-24">
      <div className="w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-text-primary mb-4 tracking-tighter uppercase">
            GET IN TOUCH
          </h2>
          <p className="text-lg text-text-secondary max-w-xl font-sans">
            Ready to start a project? My inbox is always open. Let's build something exceptional together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.a 
            href="mailto:z4nny5@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="box-structured p-8 rounded-lg group hover:border-text-primary hover:bg-surface-hover transition-all duration-300"
          >
            <Mail className="text-text-secondary mb-6 group-hover:text-text-primary transition-colors duration-300" size={32} />
            <h3 className="text-lg font-display font-bold text-text-primary mb-1 tracking-tight">EMAIL</h3>
            <p className="text-text-secondary font-sans text-sm flex items-center gap-2 group-hover:text-text-primary transition-colors">
              z4nny5@gmail.com <ArrowUpRight size={14} />
            </p>
          </motion.a>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="box-structured p-8 rounded-lg"
          >
            <MapPin className="text-text-secondary mb-6" size={32} />
            <h3 className="text-lg font-display font-bold text-text-primary mb-1 tracking-tight">LOCATION</h3>
            <p className="text-text-secondary font-sans text-sm leading-relaxed">
              West Java, Indonesia<br/>Remote Available
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="box-structured p-8 rounded-lg"
          >
            <h3 className="text-lg font-display font-bold text-text-primary mb-4 tracking-tight">SOCIALS</h3>
            <div className="flex flex-col gap-4 mt-2">
              <a href="https://github.com/Znnyyy" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-text-primary font-sans text-sm flex items-center gap-2 transition-colors w-fit">
                GitHub <ArrowUpRight size={14} />
              </a>
              <a href="https://www.linkedin.com/in/daffa-adzani-24ba913a4/" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-text-primary font-sans text-sm flex items-center gap-2 transition-colors w-fit">
                LinkedIn <ArrowUpRight size={14} />
              </a>
              <a href="https://www.instagram.com/_zzzznyy/" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-text-primary font-sans text-sm flex items-center gap-2 transition-colors w-fit">
                Instagram <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
