import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter } from 'lucide-react';
import { getPackagesByGunType } from '../../data/packages';
import { cn } from '../../lib/utils';

const filters = [
  { id: 'all', label: 'Všetky', icon: '🎯' },
  { id: 'pistol', label: 'Pištole', icon: '🔫' },
  { id: 'revolver', label: 'Revolvery', icon: '🔫' },
  { id: 'rifle', label: 'Pušky', icon: '🎯' },
  { id: 'shotgun', label: 'Brokovnice', icon: '💥' }
];

export default function GunsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const filteredPackages = getPackagesByGunType(activeFilter);

  return (
    <section id="guns" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Naše{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              Zbrane
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Široký výber moderných zbraní pre každý typ strelca
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <div className="flex items-center space-x-2 text-gray-400">
            <Filter className="w-5 h-5" />
            <span className="text-sm font-medium">Filter:</span>
          </div>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                'px-6 py-2.5 rounded-lg font-medium transition-all duration-300',
                'border-2 flex items-center space-x-2',
                activeFilter === filter.id
                  ? 'bg-secondary border-secondary text-white shadow-lg shadow-secondary/30'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:border-secondary/50 hover:text-white'
              )}
            >
              <span>{filter.icon}</span>
              <span>{filter.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Gun Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 rounded-xl overflow-hidden hover:border-secondary/50 transition-all duration-300">
                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />

                  {/* Content */}
                  <div className="relative p-6 flex flex-col h-full">
                    {/* Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="px-3 py-1 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full text-xs font-semibold text-secondary">
                        {pkg.caliber}
                      </div>
                    </div>

                    {/* Gun Icon */}
                    <div className="mb-4 mt-4">
                      <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                        {pkg.gunType === 'pistol' && '🔫'}
                        {pkg.gunType === 'revolver' && '🔫'}
                        {pkg.gunType === 'rifle' && '🎯'}
                        {pkg.gunType === 'shotgun' && '💥'}
                      </div>
                    </div>

                    {/* Info */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                      {pkg.name}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4 flex-grow leading-relaxed">
                      {pkg.description}
                    </p>

                    {/* Stats */}
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Náboje:</span>
                        <span className="text-white font-semibold">{pkg.rounds} ks</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="text-3xl font-bold text-secondary">
                        {pkg.price}€
                      </div>
                      <div className="text-xs text-gray-500 uppercase">
                        Balíček
                      </div>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-accent/10 via-secondary/10 to-accent/10 border border-white/10 rounded-xl p-6 text-center"
        >
          <p className="text-gray-300">
            <strong className="text-white">Dôležité:</strong> Pre streľbu je potrebná platná zbrojná licencia.
            Všetky zbrane sú pravidelně kontrolované a udržované v perfektnom stave.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
