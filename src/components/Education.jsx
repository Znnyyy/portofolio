import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function Education() {
  const educationData = [
    {
      degree: "Software Engineering",
      institution: "SMK Wikrama Bogor",
      period: "Present",
      description: "Currently studying and developing skills in frontend web development and software engineering.",
      icon: <GraduationCap size={24} />
    },
    {
      degree: "Junior High School",
      institution: "SMPN 1 Cicurug",
      period: "Graduated",
      description: "Built a strong foundation in academics and extracurricular activities.",
      icon: <Award size={24} />
    },
    {
      degree: "Elementary School",
      institution: "SDIT Al Husna",
      period: "Graduated",
      description: "Early education focusing on core academic fundamentals and character building.",
      icon: <Award size={24} />
    }
  ];

  return (
    <section id="education" className="py-24 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-lighter">
            Education & <span className="text-green">Certifications</span>
          </h2>
          <p className="text-slate max-w-2xl mx-auto">
            My academic background and professional training.
          </p>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-navy-lighter before:to-transparent">
          
          {educationData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:even:flex-row-reverse group is-active"
            >
              
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-navy bg-navy-light text-green shadow shrink-0 md:order-1 md:group-even:-translate-x-1/2 md:group-odd:translate-x-1/2 z-10 transition-colors group-hover:bg-green group-hover:text-navy">
                {item.icon}
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-navy-light/40 p-6 rounded-2xl border border-navy-lighter hover:border-green/50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="font-bold text-xl text-white">{item.degree}</h3>
                  <div className="flex items-center gap-2 text-green font-mono text-sm mt-1 sm:mt-0">
                    <Calendar size={14} />
                    <span>{item.period}</span>
                  </div>
                </div>
                <h4 className="text-slate-lighter text-lg font-medium mb-3">{item.institution}</h4>
                <p className="text-slate text-sm leading-relaxed">{item.description}</p>
              </div>
              
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
