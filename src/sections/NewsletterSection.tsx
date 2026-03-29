import React, { useState } from 'react';
import { Mail, Heart, HandHeart, ArrowRight, Check } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section id="support" className="py-20 md:py-28 bg-sky-50">
      <div className="max-w-3xl mx-auto px-6">
        {/* Newsletter */}
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm mb-6">
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7 text-navy" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-2">
              Recevez la newsletter
            </h2>
            <p className="text-navy-light">
              Chaque semaine : programmation, coups de cœur et invitations
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              className="flex-1 px-5 py-3.5 bg-sky-50 border border-sky-200 rounded-full text-navy placeholder:text-navy-light/60 focus:outline-none focus:ring-2 focus:ring-navy/50"
              required
            />
            <button
              type="submit"
              disabled={isSubscribed}
              className={`px-6 py-3.5 font-semibold rounded-full transition-colors flex items-center justify-center gap-2 ${
                isSubscribed
                  ? 'bg-green-500 text-white'
                  : 'bg-navy text-white hover:bg-navy-dark'
              }`}
            >
              {isSubscribed ? (
                <>
                  <Check className="w-5 h-5" />
                  Inscrit !
                </>
              ) : (
                <>
                  S'inscrire
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Support */}
        <div className="bg-navy rounded-2xl p-6 md:p-10">
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Heart className="w-7 h-7 text-orange" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Soutenir la radio
            </h2>
            <p className="text-white/70">
              Vos dons financent l'indépendance éditoriale et les projets culturels
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-8 py-3.5 bg-orange text-white font-semibold rounded-full hover:bg-orange-hover transition-colors flex items-center justify-center gap-2">
              <Heart className="w-5 h-5" />
              Faire un don
            </button>
            <button className="px-8 py-3.5 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
              <HandHeart className="w-5 h-5" />
              Devenir bénévole
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
