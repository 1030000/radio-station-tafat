import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = [
  { title: 'Écouter', links: ['Direct', 'Grille', 'Podcasts'] },
  { title: 'Programmes', links: ['Émissions', 'Chroniques', 'Replay'] },
  { title: 'Agenda', links: ['Événements', 'Partenaires'] },
  { title: 'Contact', links: ['Studio', 'Équipe', 'Presse'] },
];

export const FooterSection: React.FC = () => {
  return (
    <footer className="bg-navy text-white py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-6">
        {/* Logo & Description */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src="/logo.png" 
              alt="Radio Culturelle Tafat" 
              className="w-12 h-12 object-contain"
            />
            <span className="font-bold text-xl">Radio Culturelle Tafat</span>
          </div>
          <p className="text-white/60 text-sm max-w-sm mx-auto">
            La radio qui donne la parole à tout un territoire.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-sm mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/60 text-sm hover:text-orange transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-white/60">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Parc culturel Tafat, Maroc</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+212 5XX-XXXXXX</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>contact@radiotafat.ma</span>
          </div>
        </div>

        {/* Social */}
        <div className="flex justify-center gap-3 mb-8">
          {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Radio Culturelle Tafat. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
