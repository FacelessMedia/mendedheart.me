import { Metadata } from "next";
import Link from "next/link";
import { Heart, ExternalLink, Shield, Users, Globe, HandHeart, ArrowRight, ChevronRight } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem, GlowCard, SlideIn } from "@/components/motion";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Destiny Rescue — Partner Ministry | Mended Heart Ministry",
  description:
    "Mended Heart Ministry proudly partners with Destiny Rescue to fight human trafficking and rescue children worldwide.",
};

const stats = [
  { value: "50,000+", label: "Children Rescued", icon: Shield },
  { value: "17+", label: "Countries Active", icon: Globe },
  { value: "2,000+", label: "Rescue Agents", icon: Users },
  { value: "100%", label: "Mission Focused", icon: Heart },
];

const reasons = [
  {
    title: "Rescue",
    description:
      "Destiny Rescue sends trained operatives into the darkest places to physically rescue children from trafficking and exploitation.",
    icon: Shield,
  },
  {
    title: "Restore",
    description:
      "Rescued children receive trauma-informed care, education, safe housing, and long-term support to rebuild their lives.",
    icon: HandHeart,
  },
  {
    title: "Protect",
    description:
      "Prevention programs in vulnerable communities stop trafficking before it starts through education and economic empowerment.",
    icon: Users,
  },
];

export default function DestinyRescuePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(185,28,28,0.15),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium backdrop-blur-md">
              <HandHeart className="h-4 w-4 text-red-400" />
              Ministry Partner
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Destiny <span className="text-red-400">Rescue</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              Mended Heart Ministry proudly supports Destiny Rescue — an organization
              dedicated to rescuing children from human trafficking and sexual
              exploitation around the world.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://www.destinyrescue.org"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-red-600 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-red-600/25 transition-all hover:bg-red-500 hover:shadow-red-500/30"
              >
                Visit Destiny Rescue
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://www.destinyrescue.org/us/donate/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
              >
                <Heart className="h-4 w-4" />
                Donate to Rescue Children
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 -mt-8 pb-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <StaggerChildren className="grid grid-cols-2 gap-4 sm:grid-cols-4" staggerDelay={0.1}>
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="flex flex-col items-center rounded-2xl bg-white p-5 text-center shadow-xl shadow-black/5 ring-1 ring-black/[0.03]">
                  <stat.icon className="mb-2 h-5 w-5 text-red-600" />
                  <p className="text-2xl font-extrabold text-foreground">{stat.value}</p>
                  <p className="mt-0.5 text-xs font-medium text-muted-foreground">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-red-600">
              Why This Matters
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              The Fight Against Human Trafficking
            </h2>
            <p className="mt-4 text-muted-foreground">
              An estimated 50 million people are trapped in modern slavery worldwide.
              Millions of them are children. Destiny Rescue exists to change that — one
              rescue at a time.
            </p>
          </FadeIn>

          <StaggerChildren className="mt-12 grid gap-6 md:grid-cols-3" staggerDelay={0.12}>
            {reasons.map((reason) => (
              <StaggerItem key={reason.title}>
                <GlowCard>
                  <div className="p-8 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50">
                      <reason.icon className="h-7 w-7 text-red-600" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold">{reason.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </GlowCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Connection to Mended Heart */}
      <section className="bg-muted/30 py-16 mesh-gradient sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <SlideIn direction="left">
              <div className="rounded-2xl bg-gradient-to-br from-red-600 to-red-800 p-8 text-white shadow-2xl sm:p-10">
                <Heart className="h-10 w-10" fill="currentColor" />
                <h3 className="mt-4 text-2xl font-bold">Why Mended Heart Supports This Cause</h3>
                <p className="mt-4 leading-relaxed text-white/80">
                  At Mended Heart Ministry, we believe in meeting people where they are.
                  For millions of children around the world, &ldquo;where they are&rdquo; is in the
                  grip of trafficking and exploitation. Our faith calls us to act.
                </p>
                <p className="mt-3 leading-relaxed text-white/80">
                  James 1:27 tells us: &ldquo;Religion that God our Father accepts as pure and
                  faultless is this: to look after orphans and widows in their distress.&rdquo;
                  Supporting Destiny Rescue is one way we live out this calling.
                </p>
                <p className="mt-3 leading-relaxed text-white/80">
                  Through our festival and events, we raise awareness and funds to support
                  rescue operations that bring children out of darkness and into freedom.
                </p>
              </div>
            </SlideIn>

            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">
                  How <span className="text-gradient">You</span> Can Help
                </h2>
                {[
                  {
                    title: "Donate Directly",
                    desc: "Give to Destiny Rescue to fund rescue operations, aftercare programs, and prevention work.",
                    link: "https://www.destinyrescue.org/us/donate/",
                  },
                  {
                    title: "Attend Our Festival",
                    desc: "A portion of Mended Heart Festival proceeds supports partner ministries like Destiny Rescue.",
                    link: "/events",
                  },
                  {
                    title: "Pray",
                    desc: "Pray for rescue agents, survivors, and the millions still waiting to be found.",
                    link: null,
                  },
                  {
                    title: "Spread the Word",
                    desc: "Share Destiny Rescue's mission with your church, family, and community.",
                    link: "https://www.destinyrescue.org",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 rounded-xl p-4 transition-colors hover:bg-white">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50">
                      <ChevronRight className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                      {item.link && (
                        item.link.startsWith("http") ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-red-600 hover:underline"
                          >
                            Learn more <ExternalLink className="h-3 w-3" />
                          </a>
                        ) : (
                          <Link
                            href={item.link}
                            className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                          >
                            Learn more <ArrowRight className="h-3 w-3" />
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Scripture + CTA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <blockquote className="text-xl font-medium italic leading-relaxed text-muted-foreground sm:text-2xl">
              &ldquo;Speak up for those who cannot speak for themselves, for the rights
              of all who are destitute. Speak up and judge fairly; defend the rights
              of the poor and needy.&rdquo;
            </blockquote>
            <p className="mt-4 text-sm font-bold text-primary">— Proverbs 31:8-9</p>
          </FadeIn>

          <FadeIn delay={0.3} className="mt-10">
            <a
              href="https://www.destinyrescue.org"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-red-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-red-600/25 transition-all hover:bg-red-500 hover:shadow-red-500/30"
            >
              <Shield className="h-4 w-4" />
              Visit DestinyRescue.org
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </FadeIn>

          <FadeIn delay={0.4} className="mt-6">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to Mended Heart Ministry
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
