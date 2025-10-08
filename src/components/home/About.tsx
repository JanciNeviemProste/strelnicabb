import { motion } from 'framer-motion';
import { Target, Users, Shield } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: '3 Streľby',
    description: 'Moderné streľby s najnovšou technológiou. Ideálne pre tréning a zábavu.',
    details: ['Dĺžka: 25 metrov', 'Automatické terče', 'Profesionálne osvetlenie']
  },
  {
    icon: Users,
    title: 'Skúsení inštruktori',
    description: 'Certifikovaní inštruktori s rokmi praxe. Vždy po vašom boku.',
    details: ['Individuálny prístup', 'Kurzy pre začiatočníkov', 'Pokročilý tréning']
  },
  {
    icon: Shield,
    title: 'Maximálna bezpečnosť',
    description: 'Bezpečnosť na prvom mieste. Moderné zabezpečenie a prísne pravidlá.',
    details: ['Ochranné pomôcky', 'Nepriestrelné zábrany', '24/7 monitoring']
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Prečo práve{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              Strelnica BB
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Poskytujeme profesionálne služby v modernom prostredí s dôrazom na bezpečnosť a komfort
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full bg-primary/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-secondary/50 transition-all duration-300 overflow-hidden">
                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center group-hover:bg-secondary/30 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-secondary rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                      initial={false}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3 relative">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed relative">
                    {feature.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2 relative">
                    {feature.details.map((detail, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + idx * 0.1 }}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 group-hover:scale-150 transition-transform duration-300" />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-secondary/10 via-accent/10 to-secondary/10 border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Vhodné pre všetky úrovne
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Či ste začiatočník alebo skúsený strelec, u nás nájdete všetko čo potrebujete.
              Poskytujeme preškolenie pre začiatočníkov a pokročilý tréning pre tých,
              ktorí chcú zlepšiť svoje schopnosti. Náš tím vám vždy rád poradí a pomôže.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
