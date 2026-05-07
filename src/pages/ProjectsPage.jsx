import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import { client, urlFor } from '../lib/sanity';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "project"] | order(order asc)`;
        const data = await client.fetch(query);
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-surface border-t-text-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <AnimatedPage className="min-h-screen py-12 relative z-10 w-full mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-24"
      >
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-bold text-text-primary tracking-tighter uppercase mb-6">
          SELECTED WORKS.
        </h1>
        <p className="text-xl text-text-secondary font-sans max-w-2xl">
          A curated list of projects, experiments, and creative engineering endeavors.
        </p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-24 md:gap-32"
      >
        {projects.length === 0 ? (
          <div className="text-text-secondary font-display p-8 box-structured rounded-lg">
            No projects found. Open your Sanity Studio (npm run dev in portfolio-studio) to add some!
          </div>
        ) : (
          projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={project._id} 
                variants={item}
                className={`group flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
              >
                {/* Project Image */}
                <div className="w-full md:w-[50%] aspect-[16/10] overflow-hidden rounded-lg box-structured p-2">
                  <div className="w-full h-full relative overflow-hidden rounded bg-surface-hover">
                    <div className="absolute inset-0 bg-bg-base/40 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                    {project.image && (
                      <img 
                        src={urlFor(project.image).url()} 
                        alt={project.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[0.22,1,0.36,1]"
                      />
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex-1 w-full flex flex-col justify-center">
                  <div className="text-sm font-display font-bold text-text-secondary mb-4 tracking-widest uppercase">
                    0{index + 1} &mdash; FEATURED
                  </div>
                  <a href={project.link || '#'} target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 mb-6 group/link w-fit">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary tracking-tight uppercase group-hover/link:text-text-secondary transition-colors duration-300">
                      {project.title}
                    </h2>
                    <div className="bg-surface p-2 rounded border border-border opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300">
                      <ArrowUpRight size={24} className="text-text-primary" />
                    </div>
                  </a>
                  
                  <p className="text-lg text-text-secondary font-sans max-w-xl mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech && project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-surface border border-border text-xs font-bold font-display tracking-widest text-text-secondary uppercase">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })
        )}
      </motion.div>
    </AnimatedPage>
  );
}
