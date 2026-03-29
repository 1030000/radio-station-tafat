import React from 'react';
import { Users, Mic, Heart, ArrowRight } from 'lucide-react';

const stats = [
  { number: '50K+', label: 'Auditeurs' },
  { number: '24/7', label: 'En direct' },
  { number: '100+', label: 'Émissions' },
];

export const CommunitySection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-navy text-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Users className="w-7 h-7 text-orange" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Une communauté qui s'exprime
          </h2>
          <p className="text-white/70 max-w-lg mx-auto">
            Témoignages, appels, rencontres : la radio est faite par ceux qui l'écoutent.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange mb-1">
                {stat.number}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <div className="bg-white/10 rounded-xl p-6">
            <Mic className="w-6 h-6 text-orange mb-3" />
            <h3 className="font-bold text-lg mb-2">Participez</h3>
            <p className="text-white/70 text-sm">
              Appelez le studio en direct et partagez votre avis sur les sujets du jour.
            </p>
          </div>
          <div className="bg-white/10 rounded-xl p-6">
            <Heart className="w-6 h-6 text-orange mb-3" />
            <h3 className="font-bold text-lg mb-2">Soutenez-nous</h3>
            <p className="text-white/70 text-sm">
              Vos dons permettent de maintenir l'indépendance de notre radio.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-orange font-semibold hover:gap-3 transition-all"
          >
            Rejoindre la communauté
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
