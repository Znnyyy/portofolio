import { motion } from 'framer-motion';
import { Layers, Database, Code, Layout, Server, PenTool, Users, MessageSquare, Brain, Clock, Target, Lightbulb } from 'lucide-react';

export default function Skills() {
  const hardSkills = [
    { name: 'React.js', icon: <Code size={24} /> },
    { name: 'JavaScript / ES6+', icon: <Layers size={24} /> },
    { name: 'TailwindCSS', icon: <Layout size={24} /> },
    { name: 'Node.js', icon: <Server size={24} /> },
    { name: 'Database / SQL', icon: <Database size={24} /> },
    { name: 'UI / UX Design', icon: <PenTool size={24} /> },
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: <Brain size={24} /> },
    { name: 'Communication', icon: <MessageSquare size={24} /> },
    { name: 'Team Collaboration', icon: <Users size={24} /> },
    { name: 'Time Management', icon: <Clock size={24} /> },
    { name: 'Adaptability', icon: <Target size={24} /> },
    { name: 'Creative Thinking', icon: <Lightbulb size={24} /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <section id="skills" className="min-h-screen py-24 bg-navy-light/40 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-lighter">
            <span className="text-green">My</span> Skills
          </h2>
          <p className="text-slate max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life, along with the interpersonal skills that make teamwork seamless.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center justify-center md:justify-start text-white">
              <Code className="mr-3 text-green" size={28} /> Hard Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {hardSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-navy p-5 rounded-2xl border border-navy-lighter flex flex-col items-center justify-center gap-3 hover:border-green/50 transition-colors group cursor-pointer"
                >
                  <div className="text-slate-light group-hover:text-green transition-colors">
                    {skill.icon}
                  </div>
                  <span className="font-medium text-sm text-center text-slate-lighter group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center justify-center md:justify-start text-white">
              <Users className="mr-3 text-green" size={28} /> Soft Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ scale: 0.95 }}
                  className="bg-navy p-4 rounded-xl border border-navy-lighter flex items-center gap-4 hover:bg-navy-light transition-all cursor-default"
                >
                  <div className="bg-navy-light p-2 rounded-lg text-green">
                    {skill.icon}
                  </div>
                  <span className="font-medium text-slate-lighter">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
