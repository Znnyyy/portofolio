import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const navLinks = [
    { name: 'INDEX', href: '/' },
    { name: 'PROJECTS', href: '/projects' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 border-b ${
        isScrolled ? 'py-4 bg-bg-base/90 backdrop-blur-md border-border' : 'py-6 bg-transparent border-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center justify-between w-full max-w-[1440px] px-6 md:px-12">
        <div className="font-display font-bold text-xl text-text-primary tracking-tighter uppercase">
          <NavLink to="/">DAFFA ADZANI.</NavLink>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.href}
              className={({ isActive }) => 
                `text-sm font-display font-bold tracking-widest transition-colors ${
                  isActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a 
            href="mailto:hello@example.com"
            className="text-sm font-display font-bold tracking-widest text-text-secondary hover:text-text-primary transition-colors"
          >
            CONTACT
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-text-secondary hover:text-text-primary focus:outline-none transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="absolute top-full left-0 w-full bg-surface border-b border-border md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.href}
                  className={({ isActive }) => 
                    `text-xl font-display font-bold tracking-widest transition-colors ${
                      isActive ? 'text-text-primary' : 'text-text-secondary'
                    }`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <a 
                href="mailto:z4nny5@gmail.com"
                className="text-xl font-display font-bold tracking-widest text-text-secondary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACT
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
