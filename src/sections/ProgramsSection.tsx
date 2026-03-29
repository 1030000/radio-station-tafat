import React, { useState } from 'react';
import { Play, ArrowRight } from 'lucide-react';

const programs = [
  { id: 1, title: 'Matinale Tafat', category: 'Actu', description: 'Le réveil en musique et en bonne humeur' },
  { id: 2, title: 'Conversation libre', category: 'Culture', description: 'Des échanges sans filtre sur les sujets qui vous passionnent' },
  { id: 3, title: 'Musiques du monde', category: 'Musique', description: 'Un voyage musical à travers les continents' },
  { id: 4, title: 'Journal du soir', category: 'Actu', description: 'L\'actualité du jour en bref' },
];

const filters = ['Toutes', 'Actu', 'Culture', 'Musique'];

export const ProgramsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Toutes');

  const filteredPrograms = activeFilter === 'Toutes'
    ? programs
    : programs.filter(p => p.category === activeFilter);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
            Nos émissions
          </h2>
          <p className="text-navy-light">Replay, chroniques, et séries documentaires</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-colors ${
                activeFilter === filter
                  ? 'bg-navy text-white'
                  : 'bg-sky-100 text-navy hover:bg-sky-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Programs List */}
        <div className="space-y-4">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="flex items-center gap-4 p-5 bg-sky-50 rounded-xl hover:bg-sky-100 transition-colors group"
            >
              {/* Play Button */}
              <button className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center hover:bg-navy-dark transition-colors flex-shrink-0 group-hover:scale-105">
                <Play className="w-5 h-5 ml-0.5" />
              </button>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-orange uppercase tracking-wider">
                    {program.category}
                  </span>
                </div>
                <h3 className="font-bold text-navy text-lg">{program.title}</h3>
                <p className="text-navy-light text-sm truncate">{program.description}</p>
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
            Tout explorer
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
