import { motion } from 'framer-motion';
import { Package, Clock, Lock, Gauge } from 'lucide-react';
import { packages } from '../../data/packages';
import { getPricingByCategory } from '../../data/pricing';

export default function Packages() {
  const rangePricing = getPricingByCategory('range');
  const storagePricing = getPricingByCategory('storage');

  return (
    <section id="packages" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Balíčky a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              Cenník
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Vyberte si balíček podľa vašich preferencií alebo vytvorte vlastný program
          </p>
        </motion.div>

        {/* Shooting Packages */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-8 flex items-center"
          >
            <Package className="w-8 h-8 text-secondary mr-3" />
            Strelecké balíčky
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative"
              >
                <div className="relative h-full bg-primary/50 backdrop-blur-sm border-2 border-white/10 rounded-xl p-6 hover:border-secondary/50 transition-all duration-300 overflow-hidden">
                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />

                  {/* Content */}
                  <div className="relative">
                    {/* Icon */}
                    <div className="text-4xl mb-3">
                      {pkg.gunType === 'pistol' && '🔫'}
                      {pkg.gunType === 'revolver' && '🔫'}
                      {pkg.gunType === 'rifle' && '🎯'}
                      {pkg.gunType === 'shotgun' && '💥'}
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                      {pkg.name}
                    </h4>

                    {/* Caliber Badge */}
                    <div className="inline-block px-3 py-1 bg-secondary/20 border border-secondary/30 rounded-full text-xs font-semibold text-secondary mb-3">
                      {pkg.caliber}
                    </div>

                    {/* Rounds */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>Počet nábojov:</span>
                      <span className="font-semibold text-white">{pkg.rounds} ks</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline justify-between pt-4 border-t border-white/10">
                      <div className="text-4xl font-bold text-secondary">
                        {pkg.price}€
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Range Pricing */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-8 flex items-center"
          >
            <Clock className="w-8 h-8 text-secondary mr-3" />
            Prenájom streliska
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rangePricing.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full bg-gradient-to-br from-primary to-gray-900 border-2 border-white/10 rounded-xl p-8 hover:border-secondary/50 transition-all duration-300">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                    initial={false}
                  />

                  <div className="relative flex items-start justify-between">
                    <div className="flex-grow">
                      <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-4xl font-bold text-secondary">
                        {item.price}€
                      </div>
                      <div className="text-sm text-gray-500">
                        /{item.unit}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Storage Pricing */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-8 flex items-center"
          >
            <Lock className="w-8 h-8 text-secondary mr-3" />
            Uskladnenie zbraní
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {storagePricing.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full bg-primary/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-secondary/50 transition-all duration-300">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                    initial={false}
                  />

                  <div className="relative flex items-start justify-between">
                    <div className="flex-grow">
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-3xl font-bold text-secondary">
                        {item.price}€
                      </div>
                      <div className="text-xs text-gray-500">
                        /{item.unit}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-secondary/10 via-accent/10 to-secondary/10 border border-white/10 rounded-xl p-6 text-center"
        >
          <Gauge className="w-8 h-8 text-secondary mx-auto mb-3" />
          <p className="text-gray-300 leading-relaxed">
            <strong className="text-white">Tip:</strong> Pri prenájme celej strelnice na 3+ hodiny dostanete{' '}
            <span className="text-secondary font-semibold">10% zľavu</span>.
            Všetky ceny sú konečné a zahŕňajú DPH.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
