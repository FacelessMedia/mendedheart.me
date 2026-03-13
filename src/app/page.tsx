import Image from "next/image";
import Link from "next/link";
import { Heart, MapPin, Calendar, Ticket, Music, ArrowRight, Quote, Users, Mic2, Church, Tent, Utensils, Baby, Sun, Shield, ExternalLink, BookOpen } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem, FloatingHearts, CountdownTimer, GlowCard, AnimatedCounter, SlideIn } from "@/components/motion";
import { SongCards } from "@/components/song-cards";

const artists = [
  { name: "Sean Rodriguez", image: "/images/artists/festival-poster.jpg" },
  { name: "Behold The Beloved", image: "/images/artists/behold-the-beloved.jpeg" },
  { name: "Devin Williams", image: "/images/artists/devin-williams.jpeg" },
  { name: "Hailey Chalifour", image: "/images/artists/hailey-chalifour.jpg" },
  { name: "Adam Verdi", image: "/images/artists/festival-poster.jpg" },
  { name: "Galen Porter", image: "/images/artists/galen-porter.jpg" },
  { name: "Matthew Jones", image: "/images/artists/festival-poster.jpg" },
  { name: "Chasing The Light", image: "/images/artists/festival-poster.jpg" },
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

const stats = [
  { value: 6, suffix: "+", label: "Years of Ministry", icon: Heart },
  { value: 50, suffix: "+", label: "Concerts & Events", icon: Mic2 },
  { value: 20, suffix: "+", label: "Partner Churches", icon: Church },
  { value: 1000, suffix: "+", label: "Lives Touched", icon: Users },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] overflow-hidden bg-gradient-to-br from-[#7f1d1d] via-primary to-[#991b1b] text-white">
        <FloatingHearts />
        <div className="absolute inset-0 bg-[url('/images/logo.jpg')] bg-center bg-no-repeat opacity-[0.03] bg-[length:800px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
          <FadeIn direction="none" duration={0.8}>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur-md">
                <Music className="h-4 w-4" />
                Maine&apos;s Christian Music Festival
              </div>
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                Mended Heart
                <span className="mt-1 block text-white/90">Ministry</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
                Meeting people where they are — sharing the love of Jesus Christ
                through powerful music and community.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} className="mt-8">
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="http://www.itickets.com/events/483747.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-primary shadow-2xl shadow-black/20 transition-all hover:scale-105 hover:shadow-white/20"
              >
                <Ticket className="h-4 w-4 transition-transform group-hover:-rotate-12" />
                Buy Festival Tickets — $30
              </a>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/15"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.6} className="mt-14">
            <p className="mb-3 text-center text-xs font-medium uppercase tracking-widest text-white/50">
              Festival starts in
            </p>
            <CountdownTimer targetDate={new Date("2026-06-27T11:00:00")} />
          </FadeIn>
        </div>

        {/* Curved bottom edge */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
            <path d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 -mt-6 pb-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="flex flex-col items-center rounded-2xl bg-white p-5 text-center shadow-xl shadow-black/5 ring-1 ring-black/[0.03]">
                  <stat.icon className="mb-2 h-5 w-5 text-primary" />
                  <p className="text-2xl font-extrabold text-foreground sm:text-3xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-0.5 text-xs font-medium text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Music */}
      <SongCards />

      {/* Festival Spotlight */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Featured Event
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Mended Heart Festival <span className="text-gradient">2026</span>
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <SlideIn direction="left">
              <div className="aspect-video overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5">
                <iframe
                  src="https://www.youtube.com/embed/ZDKbubRDdcg"
                  title="Adam Verdi - Honest (Official Music Video)"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </SlideIn>

            <SlideIn direction="right">
              <div className="flex flex-col justify-center">
                <div className="space-y-5">
                  {[
                    { icon: Calendar, title: "Saturday, June 27th", desc: "11:00 AM – 11:00 PM \u2022 Gates open at 9:00 AM" },
                    { icon: MapPin, title: "Pittston Fairgrounds", desc: "995 East Pittston Rd, Pittston, ME 04345" },
                    { icon: Ticket, title: "Tickets — Just $30", desc: "Tickets are non-refundable" },
                    { icon: Heart, title: "Free Sunday Worship Service", desc: "June 29th, 10:00 AM – 12:00 PM \u2022 No ticket needed" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-muted/50">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href="http://www.itickets.com/events/483747.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
                  >
                    <Ticket className="h-4 w-4 transition-transform group-hover:-rotate-12" />
                    Buy Your Ticket Now
                  </a>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Why Attend */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              June 27, 2026
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Why <span className="text-gradient">Attend</span>?
            </h2>
          </FadeIn>
          <StaggerChildren className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6" staggerDelay={0.07}>
            {[
              { icon: Music, title: "Live Worship", desc: "All-day Christian music" },
              { icon: Users, title: "Community", desc: "Churches united as one" },
              { icon: Tent, title: "Camping", desc: "On-site overnight stays" },
              { icon: Utensils, title: "Great Food", desc: "Food trucks & vendors" },
              { icon: Baby, title: "Family Fun", desc: "Activities for all ages" },
              { icon: Sun, title: "Free Sunday", desc: "Worship service included" },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex flex-col items-center rounded-2xl bg-white p-5 text-center shadow-md ring-1 ring-black/[0.03] transition-shadow hover:shadow-lg">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold">{item.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Artist Lineup */}
      <section className="overflow-hidden bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Festival 2026
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              The <span className="text-gradient">Lineup</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Powerful performances from talented Christian artists
            </p>
          </FadeIn>

          <StaggerChildren className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4" staggerDelay={0.08}>
            {artists.map((artist) => (
              <StaggerItem key={artist.name}>
                <GlowCard>
                  <div className="relative aspect-square overflow-hidden rounded-2xl">
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-sm font-bold text-white drop-shadow-lg">{artist.name}</p>
                    </div>
                  </div>
                </GlowCard>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn delay={0.5} className="mt-10 text-center">
            <Link
              href="/events"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary shadow-md ring-1 ring-black/5 transition-all hover:shadow-lg"
            >
              View Full Event Details
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <SlideIn direction="left">
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5">
                  <Image
                    src="/images/about/ministry.jpeg"
                    alt="Mended Heart Ministry event"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#991b1b] shadow-xl">
                  <Heart className="h-10 w-10 text-white" fill="currentColor" />
                </div>
              </div>
            </SlideIn>

            <FadeIn delay={0.2}>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                About Us
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Welcome to <span className="text-gradient">Mended Heart</span> Ministry
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Mended Heart Ministry is about meeting people where they are —
                through one of the strongest vehicles: Music. We host special
                concerts throughout the year, all for the purpose of sharing
                about God and Christ.
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                We proclaim the good news of life in Jesus Christ with heartfelt
                testimonies and solid Biblical music, reaching out to the people
                of Maine and planting the seed for a relationship with Jesus
                Christ.
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                We desire to unite local church bodies together as one body of
                Christ in our events — many congregations, worshiping together as
                one.
              </p>
              <Link
                href="/about"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
              >
                More About Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="overflow-hidden bg-muted/30 py-20 mesh-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              What People Say
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Testimonials
            </h2>
          </FadeIn>

          <StaggerChildren className="mt-12 grid gap-6 md:grid-cols-3" staggerDelay={0.12}>
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <GlowCard>
                  <div className="p-6">
                    <Quote className="mb-3 h-8 w-8 text-primary/15" />
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mt-5 flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                        {t.name[0]}
                      </div>
                      <p className="text-sm font-bold text-foreground">{t.name}</p>
                    </div>
                  </div>
                </GlowCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Bible Verse */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <BookOpen className="mx-auto h-6 w-6 text-primary/40" />
            <blockquote className="mt-4 text-lg font-medium italic leading-relaxed text-muted-foreground sm:text-xl">
              &ldquo;He heals the brokenhearted and binds up their wounds.&rdquo;
            </blockquote>
            <p className="mt-3 text-sm font-bold text-primary">— Psalm 147:3</p>
          </FadeIn>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="border-y bg-muted/20 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
              Partners & Sponsors
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              <Link href="/partners/destiny-rescue" className="group flex flex-col items-center gap-1.5 transition-opacity hover:opacity-80">
                <Shield className="h-8 w-8 text-muted-foreground/40 transition-colors group-hover:text-red-600" />
                <span className="text-xs font-semibold text-muted-foreground/60">Destiny Rescue</span>
              </Link>
              <a href="http://www.itickets.com/events/483747.html" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-1.5 transition-opacity hover:opacity-80">
                <Ticket className="h-8 w-8 text-muted-foreground/40 transition-colors group-hover:text-primary" />
                <span className="text-xs font-semibold text-muted-foreground/60">iTickets</span>
              </a>
              <a href="https://www.paypal.com/paypalme/MichaelPoor" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-1.5 transition-opacity hover:opacity-80">
                <Heart className="h-8 w-8 text-muted-foreground/40 transition-colors group-hover:text-primary" />
                <span className="text-xs font-semibold text-muted-foreground/60">PayPal Giving</span>
              </a>
              <a href="https://facebook.com/MendedHeartMinistry" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-1.5 transition-opacity hover:opacity-80">
                <Users className="h-8 w-8 text-muted-foreground/40 transition-colors group-hover:text-blue-600" />
                <span className="text-xs font-semibold text-muted-foreground/60">Facebook</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#7f1d1d] via-primary to-[#991b1b] py-20 text-white">
        <FloatingHearts />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10" />
        <FadeIn className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Heart className="mx-auto h-12 w-12 drop-shadow-lg" fill="currentColor" />
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Support Our Ministry
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/75">
            Your generous donations help us continue sharing the love of Jesus
            Christ through music and community events across Maine.
          </p>
          <a
            href="https://www.paypal.com/paypalme/MichaelPoor"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-9 py-4 text-sm font-bold text-primary shadow-2xl shadow-black/20 transition-all hover:scale-105"
          >
            <Heart className="h-4 w-4" fill="currentColor" />
            Donate Now
          </a>
        </FadeIn>
      </section>
    </>
  );
}
