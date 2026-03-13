import { Metadata } from "next";
import Image from "next/image";
import { Camera } from "lucide-react";
import { FadeIn } from "@/components/motion";
import { LightboxGallery } from "@/components/lightbox";

export const metadata: Metadata = {
  title: "Past Events — Mended Heart Ministry",
  description: "Photos and memories from past Mended Heart Ministry concerts and events.",
};

const disciplePhotos = [
  "/images/gallery/disciple-1.jpg",
  "/images/gallery/disciple-2.jpg",
];

const generalGallery = [
  { src: "/images/gallery/event-1.jpg", alt: "Ministry event" },
  { src: "/images/gallery/event-2.png", alt: "Ministry outreach" },
  { src: "/images/gallery/event-3.jpg", alt: "Worship concert" },
  { src: "/images/gallery/event-4.jpg", alt: "Community gathering" },
  { src: "/images/gallery/event-5.jpg", alt: "Praise and worship" },
  { src: "/images/gallery/event-6.jpg", alt: "Music ministry" },
  { src: "/images/gallery/jonny-diaz.jpg", alt: "Jonny Diaz" },
  { src: "/images/gallery/decyfer-down.png", alt: "Decyfer Down" },
  { src: "/images/gallery/event-7.jpg", alt: "Summer event" },
  { src: "/images/gallery/event-8.jpg", alt: "Concert night" },
];

export default function PastEventsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary/95 via-primary to-primary/80 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Past Events</h1>
            <p className="mt-3 text-lg text-white/80">
              Memories and moments from our ministry events
            </p>
          </div>
        </div>
      </section>

      {/* Disciple Concert */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Camera className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Disciple in Concert
            </h2>
          </div>
          <p className="mt-2 text-muted-foreground">
            An unforgettable night of powerful worship and rock music
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {disciplePhotos.map((src, i) => (
              <div
                key={i}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-md"
              >
                <Image
                  src={src}
                  alt={`Disciple concert photo ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mark Schultz Concert */}
      <section className="bg-muted/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Camera className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Mark Schultz in Concert
            </h2>
          </div>
          <p className="mt-2 text-muted-foreground">
            A beautiful evening of worship and storytelling through song
          </p>
          <div className="mt-8 flex items-center justify-center rounded-xl bg-white/80 p-12 text-center shadow-inner">
            <div>
              <Camera className="mx-auto h-10 w-10 text-muted-foreground/40" />
              <p className="mt-3 text-sm text-muted-foreground">
                Concert photos from this amazing event — a night to remember!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* General Gallery */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-3">
              <Camera className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Pictures of Success
              </h2>
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">
                {generalGallery.length} photos
              </span>
            </div>
            <p className="mt-2 text-muted-foreground">
              Highlights from our concerts, outreach events, and community gatherings. Click any photo to view full size.
            </p>
          </FadeIn>
          <div className="mt-8">
            <LightboxGallery images={generalGallery} />
          </div>
        </div>
      </section>
    </>
  );
}
