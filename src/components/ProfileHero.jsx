import { motion } from 'framer-motion';
import { ArrowDown, Code, Briefcase, MessageCircle } from 'lucide-react';

export default function ProfileHero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl w-full mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-green font-mono mb-4 text-lg">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-slate-lighter tracking-tight">
            Daffa Adzani.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate">
            I build things for the web.
          </h2>
          <p className="text-slate text-lg max-w-xl mb-10 leading-relaxed">
            I'm a frontend developer with a passion for crafting responsive and engaging web experiences. I also enjoy designing intuitive UI/UX, focusing on accessibility and human-centered products.
          </p>
          
          <div className="flex items-center gap-6 mb-12">
            <a href="#projects" className="px-8 py-4 bg-green text-navy font-bold rounded-lg hover:bg-green/90 transition-colors">
              Check out my work!
            </a>
            <div className="hidden sm:flex items-center gap-4">
              <a href="https://github.com/Znnyyy" className="p-3 text-slate hover:text-green bg-navy-light rounded-full border border-navy-lighter transition-colors">
                <Code size={20} />
              </a>
              <a href="#" className="p-3 text-slate hover:text-green bg-navy-light rounded-full border border-navy-lighter transition-colors">
                <Briefcase size={20} />
              </a>
              <a href="#" className="p-3 text-slate hover:text-green bg-navy-light rounded-full border border-navy-lighter transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-80 h-80 mx-auto">
            <div className="absolute inset-0 bg-green border-2 border-green rounded-xl translate-x-5 translate-y-5 transition-transform hover:translate-x-3 hover:translate-y-3"></div>
            <div className="absolute inset-0 bg-navy-light rounded-xl overflow-hidden z-10 border border-navy-lighter">
              <div className="w-full h-full object-cover opacity-80 mix-blend-screen bg-[url('https://dummyimage.com/400x500/0a192f/64ffda&text=Profile+Pic')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-navy/20 hover:bg-transparent transition-colors z-20"></div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
}
