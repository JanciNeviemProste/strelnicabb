import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Target } from 'lucide-react';
import { cn } from '../../lib/utils';

const navLinks = [
  { name: 'Domov', href: '#hero' },
  { name: 'O nás', href: '#about' },
  { name: 'Zbrane', href: '#guns' },
  { name: 'Balíčky', href: '#packages' },
  { name: 'Kontakt', href: '#contact' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('#hero')}
          >
            <div className="relative">
              <Target className="w-10 h-10 text-secondary" strokeWidth={2.5} />
              <motion.div
                className="absolute inset-0 bg-secondary rounded-full blur-xl opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">
                STRELNICA BB
              </h1>
              <p className="text-xs text-gray-400 tracking-wider">
                BANSKÁ BYSTRICA
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-300 hover:text-secondary transition-colors duration-200 font-medium text-sm tracking-wide relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-200 group-hover:w-full" />
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 py-4"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-300 hover:text-secondary transition-colors duration-200 font-medium text-left py-2 px-4 hover:bg-white/5 rounded-lg"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
