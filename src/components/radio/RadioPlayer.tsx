import React from 'react';
import { Play, Pause, Volume2, VolumeX, Loader2 } from 'lucide-react';
import { useRadioPlayer } from '@/hooks/useRadioPlayer';

interface RadioPlayerProps {
  variant?: 'hero' | 'compact' | 'mini';
  className?: string;
}

export const RadioPlayer: React.FC<RadioPlayerProps> = ({ 
  variant = 'hero',
  className = '' 
}) => {
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

  if (variant === 'mini') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <button
          onClick={togglePlay}
          disabled={isLoading}
          className="w-10 h-10 rounded-full bg-orange text-white flex items-center justify-center hover:bg-orange-hover transition-colors disabled:opacity-50"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 ml-0.5" />
          )}
        </button>
        <div className="flex items-center gap-1">
          {isPlaying && !isLoading && (
            <>
              <div className="w-1 h-3 bg-orange rounded-full sound-bar" />
              <div className="w-1 h-5 bg-orange rounded-full sound-bar" />
              <div className="w-1 h-4 bg-orange rounded-full sound-bar" />
              <div className="w-1 h-6 bg-orange rounded-full sound-bar" />
              <div className="w-1 h-3 bg-orange rounded-full sound-bar" />
            </>
          )}
        </div>
        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`bg-white rounded-2xl p-4 shadow-card ${className}`}>
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            disabled={isLoading}
            className="w-12 h-12 rounded-full bg-orange text-white flex items-center justify-center hover:bg-orange-hover transition-colors disabled:opacity-50 flex-shrink-0"
          >
            {isLoading ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6 ml-0.5" />
            )}
          </button>
          
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-navy truncate">
              {isPlaying ? 'En direct' : 'Écouter le direct'}
            </p>
            <p className="text-xs text-navy-light truncate">
              Radio Culturelle Tafat
            </p>
          </div>

          <div className="flex items-center gap-2">
            {isPlaying && !isLoading && (
              <div className="flex items-end gap-0.5 h-6">
                <div className="w-1 bg-orange rounded-full sound-bar" />
                <div className="w-1 bg-orange rounded-full sound-bar" />
                <div className="w-1 bg-orange rounded-full sound-bar" />
                <div className="w-1 bg-orange rounded-full sound-bar" />
              </div>
            )}
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
          </div>
        </div>
        
        {!isMuted && (
          <div className="mt-3 flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-navy-light" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="flex-1 h-1.5 bg-sky-200 rounded-full appearance-none cursor-pointer accent-orange"
            />
          </div>
        )}
        
        {error && (
          <p className="mt-2 text-xs text-red-500">{error}</p>
        )}
      </div>
    );
  }

  // Hero variant
  return (
    <div className={`bg-white rounded-3xl p-6 shadow-card ${className}`}>
      <div className="flex items-center gap-6">
        <button
          onClick={togglePlay}
          disabled={isLoading}
          className="w-16 h-16 rounded-full bg-orange text-white flex items-center justify-center hover:bg-orange-hover transition-all disabled:opacity-50 hover:scale-105 flex-shrink-0"
        >
          {isLoading ? (
            <Loader2 className="w-8 h-8 animate-spin" />
          ) : isPlaying ? (
            <Pause className="w-8 h-8" />
          ) : (
            <Play className="w-8 h-8 ml-1" />
          )}
        </button>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            {isPlaying && (
              <>
                <span className="w-2 h-2 bg-orange rounded-full live-dot" />
                <span className="text-xs font-semibold text-orange uppercase tracking-wider">
                  En direct
                </span>
              </>
            )}
          </div>
          <h3 className="text-xl font-bold text-navy">
            Radio Culturelle Tafat
          </h3>
          <p className="text-sm text-navy-light">
            {isPlaying ? 'Streaming en cours...' : 'Cliquez pour écouter'}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {isPlaying && !isLoading && (
            <div className="flex items-end gap-1 h-8">
              <div className="w-1.5 bg-orange rounded-full sound-bar" />
              <div className="w-1.5 bg-orange rounded-full sound-bar" />
              <div className="w-1.5 bg-orange rounded-full sound-bar" />
              <div className="w-1.5 bg-orange rounded-full sound-bar" />
              <div className="w-1.5 bg-orange rounded-full sound-bar" />
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
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
          className="flex-1 h-2 bg-sky-200 rounded-full appearance-none cursor-pointer accent-orange"
        />
      </div>

      {error && (
        <p className="mt-3 text-sm text-red-500 bg-red-50 px-3 py-2 rounded-lg">
          {error}
        </p>
      )}
    </div>
  );
};

export default RadioPlayer;
