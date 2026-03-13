import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart, ArrowRight, BookOpen, Users, Music } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About Us — Mended Heart Ministry",
  description:
    "Learn about Mended Heart Ministry, founded by Michael & Laurie Poor, sharing the love of Jesus Christ through music in Maine.",
};

const milestones = [
  { year: "2015", text: "Began serving as Production Managers & Hospitality Directors with River Rock Music Festival" },
  { year: "2019", text: "God called Michael & Laurie to start Mended Heart Ministry" },
  { year: "2019", text: "Michael received ordination from Kingdom Builders Network of Time 2 Move Ministries" },
  { year: "2020", text: "Became an official 501(c)(3) non-profit organization" },
  { year: "2020", text: "Launched Mended Heart Fellowship — every 4th Saturday in Rockland, Maine" },
  { year: "2026", text: "Mended Heart Festival at Pittston Fairgrounds — our biggest event yet!" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary/95 via-primary to-primary/80 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Us</h1>
            <p className="mt-3 text-lg text-white/80">
              Redeeming the wreckage. Restoring the broken.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Our Mission
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                A Mended Heart
              </h2>
              <Separator className="my-4 w-16 bg-primary" />
              <p className="text-muted-foreground">
                Mended Heart Ministry has set out to proclaim the good news of life in
                Jesus Christ, with heartfelt testimonies and solid Biblical music to
                reach out to the people of Maine and plant the seed for a relationship
                with Jesus Christ.
              </p>
              <p className="mt-4 text-muted-foreground">
                We showcase bands that play contemporary Christian music, reaching
                people where they are. Through one of the strongest vehicles — Music —
                we meet people right where they are and share the transforming love of
                God.
              </p>
              <p className="mt-4 text-muted-foreground">
                We desire to unite local church bodies together as one body of Christ
                in our events. Many congregations, worshiping together as one.
              </p>
              <Link
                href="/events"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
              >
                View Our Events
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/images/about/ministry.jpeg"
                  alt="Mended Heart Ministry worship event"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-0 shadow-md">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Music className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">Christ-Centered Music</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Powerful music that is Christ-centered, joy-filled, and hope-driven —
                  reaching hearts through sound.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">United Community</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Bringing local church bodies together as one body of Christ — many
                  congregations worshiping as one.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">Biblical Foundation</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Grounded in scripture, sharing heartfelt testimonies and planting seeds
                  for lasting relationships with Jesus.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Michael Poor Bio */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Founder
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Michael Poor
              </h2>
              <Separator className="my-4 w-16 bg-primary" />

              <div className="space-y-4 text-muted-foreground">
                <p>
                  In September 2019, God called Michael and his wife Laurie to take a
                  step of faith and begin a Christian concert ministry — bringing
                  churches together and reaching the hurting, broken, and searching with
                  the love of Jesus through powerful music that is Christ-centered,
                  joy-filled, and hope-driven.
                </p>
                <p>
                  In a world that so deeply needs healing, music and the power of the
                  Holy Spirit can mend the broken and redeem the wreckage.
                </p>
                <p>
                  Michael and Laurie were both brought up in the Foursquare Church —
                  Michael in Illinois and Laurie in Maine. They met at L.I.F.E. Bible
                  College East in Christiansburg, VA. Married for over 30 years, they
                  have 3 adult children and 4 grandchildren.
                </p>
                <p>
                  They served as Production Managers and Hospitality Directors with River
                  Rock Music Festival since its start in 2015, building years of
                  experience in the Christian concert ministry in Maine.
                </p>
                <p>
                  Since 1992, after graduating Bible college, Laurie and Michael have
                  served in the local church as youth pastors in Terre Haute, Indiana and
                  Gardner, Maine, and worked with several worship teams. As licensed
                  ministers, they have been blessed to work advancing the Kingdom of God.
                </p>
                <p>
                  In November 2019, Michael received his ordination from the Kingdom
                  Builders Network of Time 2 Move Ministries. In April 2020, Mended
                  Heart Ministry became an official 501(c)(3) non-profit and began
                  monthly meetings as Mended Heart Fellowship.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="sticky top-24 aspect-[3/4] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/images/about/michael-poor.jpeg"
                  alt="Michael Poor, founder of Mended Heart Ministry"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted/50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Journey
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Ministry Milestones</h2>
          </div>

          <div className="relative mt-10">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20 sm:left-1/2 sm:-translate-x-px" />
            <div className="space-y-8">
              {milestones.map((item, i) => (
                <div
                  key={i}
                  className="relative flex items-start gap-4 pl-10 sm:pl-0"
                >
                  <div className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-white sm:left-1/2 sm:-translate-x-1/2" />
                  <div className={`sm:w-1/2 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:ml-auto sm:pl-12"}`}>
                    <span className="text-sm font-bold text-primary">{item.year}</span>
                    <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
