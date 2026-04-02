import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projects';

export default function ProjectsPreview() {
  const featuredProjects = projectsData.filter(project => project.featured).slice(0, 3);

  return (
    <section id="projects" className="min-h-screen py-24 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-lighter">
              Featured <span className="text-green">Projects</span>
            </h2>
            <p className="text-slate max-w-xl">
              A curated selection of my latest work. Explore my full portfolio to see more of what I've built.
            </p>
          </div>
          
          <Link 
            to="/projects" 
            className="group flex items-center gap-2 text-green font-mono mt-6 md:mt-0 hover:text-green/80 transition-colors"
          >
            View All Projects
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-green text-green rounded-lg hover:bg-green/10 transition-colors font-medium cursor-pointer"
          >
            Explore Full Archive
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
