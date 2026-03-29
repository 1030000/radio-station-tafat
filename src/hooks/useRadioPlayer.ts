import { useState, useRef, useEffect, useCallback } from 'react';

interface UseRadioPlayerReturn {
  isPlaying: boolean;
  volume: number;
  isMuted: boolean;
  isLoading: boolean;
  error: string | null;
  togglePlay: () => void;
  setVolume: (volume: number) => void;
  toggleMute: () => void;
}

const STREAM_URL = 'https://stream.webradio.ai/RadioCulturelleTafat';

export function useRadioPlayer(): UseRadioPlayerReturn {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    const audio = new Audio();
    audio.src = STREAM_URL;
    audio.crossOrigin = 'anonymous';
    audio.preload = 'none';
    
    audioRef.current = audio;

    const handleCanPlay = () => {
      setIsLoading(false);
      setError(null);
    };

    const handleWaiting = () => {
      setIsLoading(true);
    };

    const handleError = () => {
      setIsLoading(false);
      setError('Erreur de lecture. Veuillez réessayer.');
      setIsPlaying(false);
    };

    const handlePlaying = () => {
      setIsLoading(false);
      setError(null);
    };

    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('error', handleError);
    audio.addEventListener('playing', handlePlaying);

    return () => {
      audio.pause();
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('playing', handlePlaying);
      audioRef.current = null;
    };
  }, []);

  // Update volume when changed
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = useCallback(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setIsLoading(true);
      setError(null);
      audioRef.current.play().catch((err) => {
        setIsLoading(false);
        setError('Impossible de démarrer la lecture');
        console.error('Play error:', err);
      });
      setIsPlaying(true);
    }
  }, [isPlaying]);

  const setVolume = useCallback((newVolume: number) => {
    setVolumeState(newVolume);
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
    }
  }, [isMuted]);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => !prev);
  }, []);

  return {
    isPlaying,
    volume,
    isMuted,
    isLoading,
    error,
    togglePlay,
    setVolume,
    toggleMute,
  };
}
