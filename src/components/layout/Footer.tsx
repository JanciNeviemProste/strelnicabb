import { motion } from 'framer-motion';
import { Target, MapPin, Mail, Phone, Clock, Facebook, Instagram } from 'lucide-react';
import { openingHours } from '../../data/openingHours';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <Target className="w-8 h-8 text-secondary" strokeWidth={2.5} />
              <div>
                <h3 className="text-xl font-bold text-white">STRELNICA BB</h3>
                <p className="text-xs text-gray-400">Banská Bystrica</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Moderná krytá strelnica v Banskej Bystrici. Profesionálne vybavenie,
              skúsení inštruktori a maximálna bezpečnosť.
            </p>
          </motion.div>

          {/* Kontakt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Kontakt</h4>
            <div className="space-y-3">
              <a
                href="https://maps.google.com/?q=Pod+Bánošom+80,+Banská+Bystrica"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 text-gray-400 hover:text-secondary transition-colors group"
              >
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">
                  Pod Bánošom 80<br />
                  Banská Bystrica
                </span>
              </a>
              <a
                href="mailto:strelnica@strelnicabb.sk"
                className="flex items-center space-x-3 text-gray-400 hover:text-secondary transition-colors group"
              >
                <Mail className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">strelnica@strelnicabb.sk</span>
              </a>
              <a
                href="tel:+421911853009"
                className="flex items-center space-x-3 text-gray-400 hover:text-secondary transition-colors group"
              >
                <Phone className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">0911 853 009</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-400">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold text-white">Správca:</p>
                  <p>Ján Barát</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Otváracie hodiny */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
              <Clock className="w-5 h-5 text-secondary" />
              <span>Otváracie hodiny</span>
            </h4>
            <div className="space-y-2">
              {openingHours.map((day) => (
                <div
                  key={day.dayEn}
                  className="flex justify-between text-sm"
                >
                  <span className={day.isOpen ? 'text-white font-medium' : 'text-gray-500'}>
                    {day.day}
                  </span>
                  <span className={day.isOpen ? 'text-secondary' : 'text-gray-500'}>
                    {day.hours}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Rýchle odkazy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Sledujte nás</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-secondary hover:bg-white/10 transition-all duration-200 group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-secondary hover:bg-white/10 transition-all duration-200 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <div className="mt-6 space-y-2">
              <h5 className="text-sm font-semibold text-white">Dôležité informácie</h5>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• Nutná platná zbrojná licencia</li>
                <li>• Rezervácia vopred odporúčaná</li>
                <li>• Osobné ochranné pomôcky k dispozícii</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-white/10 mt-12 pt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Strelnica BB. Všetky práva vyhradené.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
