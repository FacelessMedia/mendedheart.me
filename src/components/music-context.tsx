"use client";

import { createContext, useContext, useState, useRef, useEffect, useCallback } from "react";

export interface Song {
  title: string;
  artist: string;
  src: string;
  image: string;
}

interface MusicContextType {
  currentSong: Song | null;
  isPlaying: boolean;
  progress: number;
  duration: number;
  play: (song: Song) => void;
  toggle: () => void;
  seek: (pct: number) => void;
}

const MusicContext = createContext<MusicContextType>({
  currentSong: null,
  isPlaying: false,
  progress: 0,
  duration: 0,
  play: () => {},
  toggle: () => {},
  seek: () => {},
});

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;

    audio.addEventListener("timeupdate", () => {
      setProgress(audio.currentTime);
    });
    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration);
    });
    audio.addEventListener("ended", () => {
      setIsPlaying(false);
      setProgress(0);
    });

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const play = useCallback((song: Song) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (currentSong?.src === song.src) {
      if (audio.paused) {
        audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
      return;
    }

    audio.src = song.src;
    audio.play();
    setCurrentSong(song);
    setIsPlaying(true);
    setProgress(0);
  }, [currentSong]);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !currentSong) return;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }, [currentSong]);

  const seek = useCallback((pct: number) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    audio.currentTime = pct * duration;
    setProgress(audio.currentTime);
  }, [duration]);

  return (
    <MusicContext.Provider value={{ currentSong, isPlaying, progress, duration, play, toggle, seek }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  return useContext(MusicContext);
}
