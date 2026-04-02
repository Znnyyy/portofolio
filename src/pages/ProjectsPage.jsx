import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="pt-32 pb-24 px-6 max-w-6xl w-full mx-auto">
        <div className="mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-green font-mono hover:text-green/80 transition-colors mb-6 group"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={18} />
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-lighter">
              All <span className="text-green">Projects</span>
            </h1>
            <p className="text-slate max-w-2xl text-lg">
              A complete archive of things I've built, ranging from web applications, UI/UX designs, to experimental projects.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}
