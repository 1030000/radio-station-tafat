import React from 'react';
import { Calendar, MapPin, Ticket, ArrowRight } from 'lucide-react';

export const EventsSection: React.FC = () => {
  return (
    <section id="events" className="py-20 md:py-28 bg-sky-50">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold text-orange uppercase tracking-wider bg-orange/10 px-4 py-1.5 rounded-full mb-4">
            Événement à venir
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
            Festival des voix 2026
          </h2>
          <p className="text-navy-light">
            Deux jours de rencontres, concerts et débats en plein air
          </p>
        </div>

        {/* Event Details */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-navy/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-navy" />
              </div>
              <div>
                <p className="text-xs text-navy-light uppercase tracking-wider mb-1">Date</p>
                <p className="font-semibold text-navy">12–13 juin 2026</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-navy/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-navy" />
              </div>
              <div>
                <p className="text-xs text-navy-light uppercase tracking-wider mb-1">Lieu</p>
                <p className="font-semibold text-navy">Parc culturel Tafat</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-navy/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Ticket className="w-5 h-5 text-navy" />
              </div>
              <div>
                <p className="text-xs text-navy-light uppercase tracking-wider mb-1">Accès</p>
                <p className="font-semibold text-navy">Gratuit sur inscription</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3.5 bg-navy text-white font-semibold rounded-full hover:bg-navy-dark transition-colors flex items-center justify-center gap-2">
            <Ticket className="w-5 h-5" />
            S'inscrire
          </button>
          <a
            href="#"
            className="px-8 py-3.5 bg-orange text-white font-semibold rounded-full hover:bg-orange-hover transition-colors flex items-center justify-center gap-2"
          >
            En savoir plus
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
