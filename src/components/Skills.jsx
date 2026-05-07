import { motion } from 'framer-motion';
import { Database, Code, PenTool, Smartphone } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

export default function Skills() {
  return (
    <section className="py-24 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-4 tracking-tighter uppercase">
          CORE EXPERTISE
        </h2>
        <p className="text-lg text-text-secondary max-w-xl font-sans">
          A rigid foundation of technical precision and robust architecture.
        </p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[240px]"
      >

        <motion.div variants={item} className="box-structured rounded-lg p-8 md:col-span-2 md:row-span-2 flex flex-col justify-between group hover:border-text-secondary transition-colors duration-500">
          <div>
            <Code className="text-text-secondary mb-6 group-hover:text-text-primary transition-colors duration-500" size={32} />
            <h3 className="text-2xl font-display font-bold text-text-primary mb-2 tracking-tight">FRONTEND ENGINEERING</h3>
            <p className="text-text-secondary font-sans text-sm md:text-base leading-relaxed">Building robust, scalable, and highly interactive user interfaces using modern web technologies.</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-8">
            {['React.js', 'Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Redux'].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-bg-base border border-border rounded-sm text-xs font-bold font-display tracking-widest text-text-secondary">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div variants={item} className="box-structured rounded-lg p-8 md:col-span-2 flex flex-col justify-center relative overflow-hidden group hover:border-text-secondary transition-colors duration-500">
          <div className="relative z-10">
            <PenTool className="text-text-secondary mb-4 group-hover:text-text-primary transition-colors duration-500" size={28} />
            <h3 className="text-xl font-display font-bold text-text-primary mb-2 tracking-tight">UI / UX DESIGN</h3>
            <p className="text-text-secondary font-sans text-sm leading-relaxed">Translating complex requirements into intuitive, industrial-grade digital experiences.</p>
          </div>
        </motion.div>

        <motion.div variants={item} className="box-structured rounded-lg p-8 flex flex-col justify-between group hover:border-text-secondary transition-colors duration-500">
          <Database className="text-text-secondary group-hover:text-text-primary transition-colors duration-500" size={28} />
          <div>
            <h3 className="text-lg font-display font-bold text-text-primary tracking-tight">BACKEND & APIs</h3>
            <p className="text-text-secondary font-sans text-xs mt-1">PostgreSQL, MySQL, Django, Laravel</p>
          </div>
        </motion.div>

        <motion.div variants={item} className="box-structured rounded-lg p-8 flex flex-col justify-between group hover:border-text-secondary transition-colors duration-500">
          <Smartphone className="text-text-secondary group-hover:text-text-primary transition-colors duration-500" size={28} />
          <div>
            <h3 className="text-lg font-display font-bold text-text-primary tracking-tight">RESPONSIVE</h3>
            <p className="text-text-secondary font-sans text-xs mt-1">Mobile-first architecture</p>
          </div>
        </motion.div>
        
      </motion.div>
    </section>
  );
}
