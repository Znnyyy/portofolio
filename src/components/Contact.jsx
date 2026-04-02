import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-24 flex items-center justify-center bg-navy-light/30">
      <div className="max-w-6xl w-full mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-lighter">
            Get In <span className="text-green">Touch</span>
          </h2>
          <p className="text-slate max-w-2xl mx-auto">
            Whether you have a question, a proposal, or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="bg-navy p-4 rounded-xl text-green border border-navy-lighter">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium text-lg mb-1">Email</h4>
                <p className="text-slate hover:text-green transition-colors cursor-pointer">z4nny5@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-navy p-4 rounded-xl text-green border border-navy-lighter">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium text-lg mb-1">Phone</h4>
                <p className="text-slate hover:text-green transition-colors cursor-pointer">+62 838 7925 8467</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-navy p-4 rounded-xl text-green border border-navy-lighter">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium text-lg mb-1">Location</h4>
                <p className="text-slate">Kab Sukabumi, Indonesia (Remote Available)</p>
              </div>
            </div>
            
            <div className="pt-8 border-t border-navy-lighter">
              <p className="text-slate font-mono text-sm">
                I am currently open for new opportunities. Let's build something awesome together.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <form className="bg-navy-light/50 p-8 rounded-2xl border border-navy-lighter flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-slate-lighter text-sm font-medium mb-2" htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-navy border border-navy-lighter rounded-lg px-4 py-3 text-slate-lighter focus:outline-none focus:border-green focus:ring-1 focus:ring-green transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-slate-lighter text-sm font-medium mb-2" htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-navy border border-navy-lighter rounded-lg px-4 py-3 text-slate-lighter focus:outline-none focus:border-green focus:ring-1 focus:ring-green transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-slate-lighter text-sm font-medium mb-2" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows="5"
                  className="w-full bg-navy border border-navy-lighter rounded-lg px-4 py-3 text-slate-lighter focus:outline-none focus:border-green focus:ring-1 focus:ring-green transition-colors resize-none"
                  placeholder="I'd like to discuss a project..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-green text-navy font-semibold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-green/90 transition-colors mt-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
