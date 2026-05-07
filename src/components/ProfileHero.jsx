import { motion } from 'framer-motion';
import { ArrowRight, Code, Briefcase, Mail } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import AnimatedPage from './AnimatedPage';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function ProfileHero() {
  return (
    <AnimatedPage className="min-h-[85vh] flex flex-col justify-center relative">
      <motion.div 
        variants={container} 
        initial="hidden" 
        animate="show" 
        className="w-full max-w-5xl"
      >
        <motion.p variants={item} className="text-text-secondary font-display font-bold tracking-[0.2em] uppercase text-sm mb-6 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-text-primary"></span>
          Frontend Developer & Designer
        </motion.p>
        
        <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-text-primary leading-[1.1] mb-8 uppercase tracking-tighter">
          CRAFTING DIGITAL <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-text-secondary">EXPERIENCES.</span>
        </motion.h1>
        
        <motion.p variants={item} className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed font-sans mb-12">
          Hi, I'm Daffa Adzani. I am a frontend & full stack developer, UI/UX design.
        </motion.p>
        
        <motion.div variants={item} className="flex flex-wrap items-center gap-6">
          <NavLink 
            to="/projects" 
            className="group flex items-center gap-4 bg-text-primary text-bg-base px-8 py-4 font-display font-bold uppercase tracking-widest transition-all hover:bg-text-secondary"
          >
            VIEW PROJECTS
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </NavLink>
          
          <div className="flex items-center gap-4">
            <a href="https://github.com/Znnyyy" target="_blank" rel="noreferrer" className="box-structured p-4 text-text-secondary hover:text-text-primary hover:border-text-primary transition-colors">
              <Code size={20} />
            </a>
            <a href="https://www.linkedin.com/in/daffa-adzani-24ba913a4/" target="_blank" rel="noreferrer" className="box-structured p-4 text-text-secondary hover:text-text-primary hover:border-text-primary transition-colors">
              <Briefcase size={20} />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=z4nny5@gmail.com" target="_blank" rel="noreferrer" className="box-structured p-4 text-text-secondary hover:text-text-primary hover:border-text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatedPage>
  );
}
