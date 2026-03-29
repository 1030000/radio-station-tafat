import React from 'react';
import { Play, Pause, Volume2, VolumeX, Loader2 } from 'lucide-react';
import { useRadioPlayer } from '@/hooks/useRadioPlayer';

export const HeroSection: React.FC = () => {
  const { 
    isPlaying, 
    volume, 
    isMuted, 
    isLoading, 
    error,
    togglePlay, 
    setVolume, 
    toggleMute 
  } = useRadioPlayer();

  return (
    <section className="min-h-screen bg-sky-50 flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/logo.png" 
            alt="Radio Culturelle Tafat" 
            className="w-28 h-28 md:w-36 md:h-36 mx-auto object-contain"
          />
        </div>

        {/* Live Badge */}
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
          <span className="w-2.5 h-2.5 bg-orange rounded-full live-dot" />
          <span className="text-sm font-semibold text-navy uppercase tracking-wider">
            En direct
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-3">
          Radio Culturelle Tafat
        </h1>
        
        <p className="text-lg md:text-xl text-navy-light mb-10 max-w-lg mx-auto">
          الإذاعة الثقافية تافات
        </p>

        <p className="text-navy-light mb-12 max-w-md mx-auto">
          La radio qui donne la parole à tout un territoire.
        </p>

        {/* Main Player */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg max-w-md mx-auto">
          {/* Play Button */}
          <button
            onClick={togglePlay}
            disabled={isLoading}
            className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-navy text-white flex items-center justify-center mx-auto mb-6 hover:bg-navy-dark transition-all hover:scale-105 disabled:opacity-50 shadow-lg shadow-navy/30"
          >
            {isLoading ? (
              <Loader2 className="w-8 h-8 md:w-10 md:h-10 animate-spin" />
            ) : isPlaying ? (
              <Pause className="w-8 h-8 md:w-10 md:h-10" />
            ) : (
              <Play className="w-8 h-8 md:w-10 md:h-10 ml-1" />
            )}
          </button>

          {/* Status */}
          <p className="text-navy font-semibold text-lg mb-1">
            {isPlaying ? 'Streaming en cours...' : 'Cliquez pour écouter'}
          </p>
          <p className="text-navy-light text-sm mb-6">
            Radio Culturelle Tafat - Direct
          </p>

          {/* Visualizer */}
          {isPlaying && !isLoading && (
            <div className="flex items-end justify-center gap-1 h-8 mb-6">
              <div className="w-1.5 bg-orange rounded-full sound-bar" />
              <div className="w-1.5 bg-orange rounded-full sound-bar" />
              <div className="w-1.5 bg-orange rounded-full sound-bar" />
              <div className="w-1.5 bg-orange rounded-full sound-bar" />
              <div className="w-1.5 bg-orange rounded-full sound-bar" />
            </div>
          )}

          {/* Volume Control */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleMute}
              className="p-2 hover:bg-sky-100 rounded-full transition-colors"
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-5 h-5 text-navy" />
              ) : (
                <Volume2 className="w-5 h-5 text-navy" />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="flex-1 h-1 bg-sky-200 rounded-full"
            />
          </div>

          {error && (
            <p className="mt-4 text-sm text-red-500 bg-red-50 px-4 py-2 rounded-lg">
              {error}
            </p>
          )}
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <svg className="w-6 h-6 text-navy-light mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
