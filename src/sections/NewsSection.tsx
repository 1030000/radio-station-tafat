import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

const news = [
  {
    title: 'Nouveau studio : derrière le micro',
    category: 'Reportage',
    duration: '6 min',
    featured: true,
  },
  {
    title: 'Festival des voix : les coulisses',
    category: 'Événement',
    duration: '4 min',
    featured: false,
  },
  {
    title: 'Podcast : l\'histoire d\'une émission',
    category: 'Podcast',
    duration: '8 min',
    featured: false,
  },
];

export const NewsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-sky-50">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
            Actualités
          </h2>
          <p className="text-navy-light">Les dernières nouvelles de la radio</p>
        </div>

        {/* News List */}
        <div className="space-y-6">
          {news.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`block p-6 rounded-2xl transition-all hover:shadow-md ${
                item.featured
                  ? 'bg-navy text-white'
                  : 'bg-white hover:bg-white'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  {/* Category */}
                  <span className={`text-xs font-semibold uppercase tracking-wider mb-2 block ${
                    item.featured ? 'text-orange' : 'text-orange'
                  }`}>
                    {item.category}
                  </span>

                  {/* Title */}
                  <h3 className={`text-xl font-bold mb-2 ${
                    item.featured ? 'text-white' : 'text-navy'
                  }`}>
                    {item.title}
                  </h3>

                  {/* Meta */}
                  <div className={`flex items-center gap-2 text-sm ${
                    item.featured ? 'text-white/70' : 'text-navy-light'
                  }`}>
                    <Clock className="w-4 h-4" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* Arrow */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  item.featured
                    ? 'bg-white/10'
                    : 'bg-sky-100'
                }`}>
                  <ArrowRight className={`w-5 h-5 ${
                    item.featured ? 'text-white' : 'text-navy'
                  }`} />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-orange font-semibold hover:gap-3 transition-all"
          >
            Voir toutes les actualités
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
