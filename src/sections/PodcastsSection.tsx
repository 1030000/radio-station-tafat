import React from 'react';
import { Play, Clock, Headphones, ArrowRight } from 'lucide-react';

const podcasts = [
  {
    id: 1,
    title: 'Le portrait de la semaine',
    duration: '24 min',
    description: 'Rencontre avec des personnalités locales',
  },
  {
    id: 2,
    title: 'Chronique musique',
    duration: '12 min',
    description: 'Les découvertes musicales de nos animateurs',
  },
  {
    id: 3,
    title: 'Débat citoyen',
    duration: '18 min',
    description: 'Les sujets qui font réagir notre territoire',
  },
];

export const PodcastsSection: React.FC = () => {
  return (
    <section id="podcasts" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-14 h-14 bg-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Headphones className="w-7 h-7 text-navy" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
            Podcasts
          </h2>
          <p className="text-navy-light">Réécouter les meilleurs moments</p>
        </div>

        {/* Podcasts List */}
        <div className="space-y-4">
          {podcasts.map((podcast) => (
            <div
              key={podcast.id}
              className="flex items-center gap-4 p-5 bg-sky-50 rounded-xl hover:bg-sky-100 transition-colors group"
            >
              {/* Play Button */}
              <button className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center hover:bg-navy-dark transition-colors flex-shrink-0 group-hover:scale-105">
                <Play className="w-5 h-5 ml-0.5" />
              </button>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-navy text-lg mb-1">{podcast.title}</h3>
                <div className="flex items-center gap-2 text-navy-light text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{podcast.duration}</span>
                </div>
              </div>

              {/* Arrow */}
              <ArrowRight className="w-5 h-5 text-navy-light group-hover:text-orange group-hover:translate-x-1 transition-all flex-shrink-0" />
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-orange font-semibold hover:gap-3 transition-all"
          >
            Voir tous les podcasts
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PodcastsSection;
