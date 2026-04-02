import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-navy-light rounded-2xl overflow-hidden border border-navy-lighter hover:border-green/50 transition-colors group flex flex-col h-full"
    >
      <div className="relative overflow-hidden aspect-video">
        <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors z-10"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-slate-lighter mb-3 group-hover:text-green transition-colors">
          {project.title}
        </h3>
        <p className="text-slate text-sm mb-6 flex-1">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((item, i) => (
            <span key={i} className="text-xs font-mono text-green bg-green/10 px-2 py-1 rounded">
              {item}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4 mt-auto">
          <a href={project.github} className="text-slate hover:text-green transition-colors">
            <Code size={20} />
          </a>
          <a href={project.link} className="text-slate hover:text-green transition-colors">
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
