import Image from "next/image";
import Link from "next/link";
import { Heart, MapPin, Calendar, Ticket, Music, ArrowRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const artists = [
  { name: "LVRDR", image: "/images/artists/lvrdr.jpg" },
  { name: "Hailey Chalifour", image: "/images/artists/hailey-chalifour.jpg" },
  { name: "Devin Williams", image: "/images/artists/devin-williams.jpeg" },
  { name: "Galen Porter Music", image: "/images/artists/galen-porter.jpg" },
  { name: "Chasing the Light", image: "/images/artists/chasing-the-light.jpg" },
];

const testimonials = [
  {
    name: "Meredith",
    quote:
      "We had a wonderful time, the people were amazing! The warmth and support coming from this ministry was greatly evident! Looking forward to coming back!",
  },
  {
    name: "Peter B.",
    quote:
      "Was very pleased and grateful for the opportunity to share God's love to the Mended Heart Ministry with the band Chasing North. Everyone was hospitable and loving and couldn't have asked for more. May God continue to bless this ministry!",
  },
  {
    name: "Dan",
    quote:
      "A great ministry that was a pleasure to work with. Grateful for their friendship!",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/95 via-primary to-primary/80 text-white">
        <div className="absolute inset-0 bg-[url('/images/logo.jpg')] bg-center bg-no-repeat opacity-5 bg-[length:600px]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              <Music className="h-4 w-4" />
              Maine&apos;s Christian Music Festival
            </div>
            <h1 className="font-[var(--font-serif)] text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Mended Heart Ministry
            </h1>
            <p className="mt-4 text-lg text-white/85 sm:text-xl">
              Meeting people where they are — sharing the love of Jesus Christ
              through powerful music and community.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="http://www.itickets.com/events/483747.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg transition-transform hover:scale-105"
              >
                <Ticket className="h-4 w-4" />
                Buy Festival Tickets — $30
              </a>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Festival Spotlight */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Featured Event
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Mended Heart Festival 2026
            </h2>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="aspect-video overflow-hidden rounded-xl shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/ZDKbubRDdcg"
                title="Adam Verdi - Honest (Official Music Video)"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold">Saturday, June 27th</p>
                    <p className="text-sm text-muted-foreground">
                      11:00 AM &ndash; 11:00 PM &bull; Gates open at 9:00 AM
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold">Pittston Fairgrounds</p>
                    <p className="text-sm text-muted-foreground">
                      995 East Pittston Rd, Pittston, ME 04345
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Ticket className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold">Tickets — Just $30</p>
                    <p className="text-sm text-muted-foreground">
                      Tickets are non-refundable
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold">Free Sunday Worship Service</p>
                    <p className="text-sm text-muted-foreground">
                      June 29th, 10:00 AM &ndash; 12:00 PM &bull; No ticket needed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="http://www.itickets.com/events/483747.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow transition-colors hover:bg-primary/90"
                >
                  <Ticket className="h-4 w-4" />
                  Buy Your Ticket Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Lineup */}
      <section className="bg-muted/50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Festival 2026
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              The Lineup
            </h2>
            <p className="mt-3 text-muted-foreground">
              Powerful performances from talented Christian artists
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {artists.map((artist) => (
              <Card
                key={artist.name}
                className="group overflow-hidden border-0 shadow-md transition-shadow hover:shadow-xl"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-sm font-semibold text-white">{artist.name}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              View Full Event Details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/images/about/ministry.jpeg"
                  alt="Mended Heart Ministry event"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-lg">
                <Heart className="h-8 w-8 text-white" fill="currentColor" />
              </div>
            </div>

            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                About Us
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Welcome to Mended Heart Ministry
              </h2>
              <p className="mt-4 text-muted-foreground">
                Mended Heart Ministry is about meeting people where they are —
                through one of the strongest vehicles: Music. We host special
                concerts throughout the year, all for the purpose of sharing
                about God and Christ.
              </p>
              <p className="mt-3 text-muted-foreground">
                We proclaim the good news of life in Jesus Christ with heartfelt
                testimonies and solid Biblical music, reaching out to the people
                of Maine and planting the seed for a relationship with Jesus
                Christ.
              </p>
              <p className="mt-3 text-muted-foreground">
                We desire to unite local church bodies together as one body of
                Christ in our events — many congregations, worshiping together as
                one.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                More About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              What People Say
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Testimonials
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="relative border-0 shadow-md">
                <CardContent className="pt-8">
                  <Quote className="absolute top-4 left-4 h-6 w-6 text-primary/20" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="mt-4 text-sm font-semibold text-primary">
                    &mdash; {t.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Heart className="mx-auto h-10 w-10" fill="currentColor" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight">
            Support Our Ministry
          </h2>
          <p className="mt-3 text-white/80">
            Your generous donations help us continue sharing the love of Jesus
            Christ through music and community events across Maine.
          </p>
          <a
            href="https://www.paypal.com/paypalme/MichaelPoor"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-sm font-semibold text-primary shadow-lg transition-transform hover:scale-105"
          >
            <Heart className="h-4 w-4" />
            Donate Now
          </a>
        </div>
      </section>
    </>
  );
}
