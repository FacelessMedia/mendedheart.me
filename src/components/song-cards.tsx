"use client";

import Image from "next/image";
import { Play, Pause, Music2 } from "lucide-react";
import { useMusic, Song } from "@/components/music-context";
import { motion } from "@/components/motion";

const songs: Song[] = [
  {
    title: "He Saw You",
    artist: "Servant Zero",
    src: "/music/he-saw-you.mp3",
    image: "/music/he-saw-you.png",
  },
  {
    title: "Kick In The Door",
    artist: "Servant Zero",
    src: "/music/kick-in-the-door.mp3",
    image: "/music/kick-in-the-door.png",
  },
  {
    title: "The Auction Room",
    artist: "Servant Zero",
    src: "/music/the-auction-room.mp3",
    image: "/music/the-auction-room.png",
  },
];

export function SongCards() {
  const { currentSong, isPlaying, play } = useMusic();

  return (
    <section className="bg-gradient-to-b from-white to-muted/30 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Listen Now
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Featured <span className="text-gradient">Music</span>
          </h2>
          <p className="mt-2 text-muted-foreground">
            Original songs by Servant Zero
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {songs.map((song) => {
            const active = currentSong?.src === song.src;
            const playing = active && isPlaying;

            return (
              <motion.button
                key={song.src}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => play(song)}
                className={`group relative overflow-hidden rounded-2xl text-left shadow-lg ring-1 transition-all ${
                  active
                    ? "ring-primary/40 shadow-xl shadow-primary/10"
                    : "ring-black/5 hover:shadow-xl"
                }`}
              >
                {/* Album art */}
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={song.image}
                    alt={song.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={false}
                      animate={{ scale: playing ? 1 : 0.9, opacity: playing ? 1 : 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-white shadow-xl backdrop-blur-sm"
                    >
                      {playing ? (
                        <Pause className="h-6 w-6" fill="currentColor" />
                      ) : (
                        <Play className="h-6 w-6 ml-0.5" fill="currentColor" />
                      )}
                    </motion.div>
                  </div>

                  {/* Now playing indicator */}
                  {playing && (
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white shadow-lg">
                      <Music2 className="h-3 w-3" />
                      Now Playing
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="bg-white p-4">
                  <p className="font-bold text-foreground">{song.title}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{song.artist}</p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
