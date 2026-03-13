"use client";

import Image from "next/image";
import { Play, Pause, Volume2 } from "lucide-react";
import { useMusic } from "@/components/music-context";
import { motion, AnimatePresence } from "@/components/motion";

function formatTime(s: number) {
  if (!s || isNaN(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

export function MusicPlayer() {
  const { currentSong, isPlaying, progress, duration, toggle, seek } = useMusic();

  return (
    <AnimatePresence>
      {currentSong && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/50 bg-white/95 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
        >
          {/* Progress bar - clickable */}
          <div
            className="group relative h-1 w-full cursor-pointer bg-muted transition-all hover:h-2"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const pct = (e.clientX - rect.left) / rect.width;
              seek(pct);
            }}
          >
            <div
              className="h-full bg-primary transition-all"
              style={{ width: `${duration ? (progress / duration) * 100 : 0}%` }}
            />
          </div>

          <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2.5 sm:gap-4 sm:px-6">
            {/* Album art */}
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg shadow-md sm:h-12 sm:w-12">
              <Image
                src={currentSong.image}
                alt={currentSong.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Song info */}
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold leading-tight">{currentSong.title}</p>
              <p className="truncate text-xs text-muted-foreground">{currentSong.artist}</p>
            </div>

            {/* Time */}
            <span className="hidden text-xs tabular-nums text-muted-foreground sm:block">
              {formatTime(progress)} / {formatTime(duration)}
            </span>

            {/* Play/Pause */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggle}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-md shadow-primary/25 transition-colors hover:bg-primary/90"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="h-4 w-4" fill="currentColor" /> : <Play className="h-4 w-4 ml-0.5" fill="currentColor" />}
            </motion.button>

            {/* Volume indicator */}
            <Volume2 className="hidden h-4 w-4 text-muted-foreground/50 sm:block" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
