import { motion } from 'framer-motion';
import { Target, Calendar, Package } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-gray-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent" />
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Target Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <Target className="w-20 h-20 text-secondary" strokeWidth={2} />
              <motion.div
                className="absolute inset-0 bg-secondary rounded-full blur-2xl opacity-30"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          >
            KRYTÁ STRELNICA
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              BANSKÁ BYSTRICA
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Moderná krytá strelnica s profesionálnym vybavením.
            <br />
            Skúsení inštruktori, bezpečný tréning a nezabudnuteľný zážitok.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollToSection('#packages')}
              className={cn(
                'group relative px-8 py-4 bg-secondary text-white font-semibold rounded-lg overflow-hidden',
                'hover:shadow-2xl hover:shadow-secondary/50 transition-all duration-300',
                'flex items-center space-x-3'
              )}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent to-secondary"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <Calendar className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" />
              <span className="relative z-10">Rezervovať termín</span>
            </button>

            <button
              onClick={() => scrollToSection('#packages')}
              className={cn(
                'group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg',
                'border-2 border-white/20 hover:border-secondary hover:bg-white/20',
                'transition-all duration-300 flex items-center space-x-3'
              )}
            >
              <Package className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Cenník a balíčky</span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            {[
              { number: '4', label: 'Streľby' },
              { number: '8', label: 'Balíčkov' },
              { number: '15+', label: 'Zbraní' },
              { number: '100%', label: 'Bezpečnosť' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-secondary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
