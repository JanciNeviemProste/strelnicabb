import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, User, MessageSquare } from 'lucide-react';
import { openingHours, isOpenNow } from '../../data/openingHours';

export default function Contact() {
  const isOpen = isOpenNow();

  return (
    <section id="contact" className="py-20 bg-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
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
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kontaktujte{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              Nás
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Máte otázky? Radi vám pomôžeme a poskytneme všetky potrebné informácie
          </p>
        </motion.div>

        {/* Status Badge - Centered */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/50 backdrop-blur-sm border border-white/10 rounded-full">
            <div className={`w-3 h-3 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
            <span className="text-sm font-medium text-white">
              {isOpen ? 'Práve otvorené' : 'Momentálne zatvorené'}
            </span>
          </div>
        </motion.div>

        {/* Contact Cards Grid - 2x2 Symmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {/* Address */}
          <motion.a
            href="https://maps.google.com/?q=Pod+Bánošom+80,+Banská+Bystrica"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group block bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 rounded-xl p-6 hover:border-secondary/50 transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/30 transition-colors">
                <MapPin className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Adresa</h4>
                <p className="text-gray-400">
                  Pod Bánošom 80<br />
                  Banská Bystrica
                </p>
              </div>
            </div>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+421911853009"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group block bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 rounded-xl p-6 hover:border-secondary/50 transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/30 transition-colors">
                <Phone className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Telefón</h4>
                <p className="text-gray-400">0911 853 009</p>
              </div>
            </div>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:strelnica@strelnicabb.sk"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group block bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 rounded-xl p-6 hover:border-secondary/50 transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/30 transition-colors">
                <Mail className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                <p className="text-gray-400">strelnica@strelnicabb.sk</p>
              </div>
            </div>
          </motion.a>

          {/* Manager */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 rounded-xl p-6"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Správca</h4>
                <p className="text-gray-400">Ján Barát</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Opening Hours - Full Width Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 rounded-xl p-8">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <h4 className="text-2xl font-semibold text-white">Otváracie hodiny</h4>
            </div>
            <div className="space-y-3">
              {openingHours.map((day) => (
                <div
                  key={day.dayEn}
                  className="flex justify-between items-center py-2 border-b border-white/5 last:border-0"
                >
                  <span className={`font-medium ${day.isOpen ? 'text-white' : 'text-gray-500'}`}>
                    {day.day}
                  </span>
                  <span className={`${day.isOpen ? 'text-secondary font-semibold' : 'text-gray-500'}`}>
                    {day.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quick Contact CTA - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-br from-secondary/10 via-accent/10 to-secondary/10 border border-white/10 rounded-xl p-8 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <MessageSquare className="w-6 h-6 text-secondary" />
              <h4 className="text-xl font-semibold text-white">Rýchla správa</h4>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Pre rezerváciu alebo informácie nás kontaktujte telefonicky alebo emailom.
              Odpovieme vám čo najskôr!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+421911853009"
                className="px-8 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/90 transition-colors text-center"
              >
                Zavolať
              </a>
              <a
                href="mailto:strelnica@strelnicabb.sk"
                className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors text-center"
              >
                Email
              </a>
            </div>
          </div>
        </motion.div>

        {/* Important Notice - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <div className="inline-block bg-primary/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 max-w-2xl">
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Dôležité:</strong> Pred prvou návštevou je potrebné
              telefonicky alebo emailom dohodnúť termín. Prinesie si platnú zbrojenú licenciu.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
