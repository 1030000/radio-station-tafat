import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Grille', href: '#schedule' },
  { label: 'Podcasts', href: '#podcasts' },
  { label: 'Événements', href: '#events' },
  { label: 'Soutenir', href: '#support' },
];

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Radio Culturelle Tafat" 
                className="w-10 h-10 object-contain"
              />
              <span className="font-bold text-navy hidden sm:block">
                Radio Tafat
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-navy hover:text-orange transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 hover:bg-sky-100 rounded-full transition-colors md:hidden"
            >
              <Menu className="w-6 h-6 text-navy" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className="absolute inset-0 bg-navy/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-64 bg-white shadow-2xl transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <span className="font-bold text-navy">Menu</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-sky-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-navy" />
              </button>
            </div>

            <nav className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-navy hover:bg-sky-50 rounded-xl transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
