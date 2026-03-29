import React from 'react';
import { Clock } from 'lucide-react';

const schedule = [
  { time: '07h00 – 10h00', title: 'Matinale Tafat', status: 'now' },
  { time: '10h00 – 12h00', title: 'Conversation libre', status: 'next' },
  { time: '14h00 – 16h00', title: 'Musiques du monde', status: 'later' },
  { time: '18h00 – 19h00', title: 'Journal du soir', status: 'evening' },
];

export const ScheduleSection: React.FC = () => {
  return (
    <section id="schedule" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
            Grille du jour
          </h2>
          <p className="text-navy-light">Mardi 27 janvier</p>
        </div>

        {/* Schedule List */}
        <div className="space-y-4">
          {schedule.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 p-4 md:p-5 rounded-xl transition-colors ${
                item.status === 'now'
                  ? 'bg-navy/10 border-2 border-navy/30'
                  : 'bg-sky-50 hover:bg-sky-100'
              }`}
            >
              {/* Status Indicator */}
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                {item.status === 'now' ? (
                  <span className="w-3 h-3 bg-orange rounded-full live-dot" />
                ) : (
                  <Clock className="w-5 h-5 text-navy-light" />
                )}
              </div>

              {/* Time */}
              <div className="w-28 md:w-32 flex-shrink-0">
                <span className={`text-sm font-semibold ${
                  item.status === 'now' ? 'text-navy' : 'text-navy-light'
                }`}>
                  {item.time}
                </span>
              </div>

              {/* Title */}
              <div className="flex-1">
                <span className={`font-semibold ${
                  item.status === 'now' ? 'text-navy text-lg' : 'text-navy'
                }`}>
                  {item.title}
                </span>
              </div>

              {/* Status Label */}
              {item.status === 'now' && (
                <span className="text-xs font-semibold text-navy uppercase tracking-wider bg-navy/20 px-3 py-1 rounded-full">
                  En ce moment
                </span>
              )}
              {item.status === 'next' && (
                <span className="text-xs font-semibold text-navy-light uppercase tracking-wider">
                  À suivre
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
