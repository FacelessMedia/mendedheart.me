import { Metadata } from "next";
import { Calendar, MapPin, Ticket, Clock, Heart, Music, Tent, Utensils, Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Events — Mended Heart Ministry",
  description: "Upcoming Christian music events and the Mended Heart Festival 2026 in Pittston, Maine.",
};

export default function EventsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary/95 via-primary to-primary/80 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Events</h1>
            <p className="mt-3 text-lg text-white/80">
              Join us for powerful worship and fellowship
            </p>
          </div>
        </div>
      </section>

      {/* Main Festival Event */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden border-2 border-primary/20 shadow-xl">
            <div className="bg-primary/5 p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    <Star className="h-3 w-3" />
                    Featured Event
                  </span>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                    Mended Heart Festival 2026
                  </h2>
                </div>
                <a
                  href="http://www.itickets.com/events/483747.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow transition-colors hover:bg-primary/90"
                >
                  <Ticket className="h-4 w-4" />
                  Buy Tickets — $30
                </a>
              </div>
            </div>

            <CardContent className="p-6 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Left: Video + Details */}
                <div>
                  <div className="aspect-video overflow-hidden rounded-lg shadow-md">
                    <iframe
                      src="https://www.youtube.com/embed/ZDKbubRDdcg"
                      title="Adam Verdi - Honest (Official Music Video)"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-4">
                      <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <p className="text-sm font-semibold">Saturday, June 27th</p>
                        <p className="text-xs text-muted-foreground">11:00 AM – 11:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-4">
                      <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <p className="text-sm font-semibold">Gates Open at 9:00 AM</p>
                        <p className="text-xs text-muted-foreground">Full day of music & fun</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-4">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <p className="text-sm font-semibold">Pittston Fairgrounds</p>
                        <p className="text-xs text-muted-foreground">995 East Pittston Rd, ME</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-4">
                      <Ticket className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <p className="text-sm font-semibold">Just $30</p>
                        <p className="text-xs text-muted-foreground">Non-refundable</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Tabs */}
                <div>
                  <Tabs defaultValue="lineup" className="w-full">
                    <TabsList className="w-full">
                      <TabsTrigger value="lineup" className="flex-1 gap-1.5 text-xs sm:text-sm">
                        <Music className="h-3.5 w-3.5" />
                        Lineup
                      </TabsTrigger>
                      <TabsTrigger value="fun" className="flex-1 gap-1.5 text-xs sm:text-sm">
                        <Star className="h-3.5 w-3.5" />
                        Activities
                      </TabsTrigger>
                      <TabsTrigger value="tickets" className="flex-1 gap-1.5 text-xs sm:text-sm">
                        <Ticket className="h-3.5 w-3.5" />
                        Tickets
                      </TabsTrigger>
                      <TabsTrigger value="camping" className="flex-1 gap-1.5 text-xs sm:text-sm">
                        <Tent className="h-3.5 w-3.5" />
                        Camping
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="lineup" className="mt-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">2026 Artist Lineup</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {["Sean Rodriguez", "Behold The Beloved", "Devin Williams", "Hailey Chalifour", "Adam Verdi", "Galen Porter", "Matthew Jones", "Chasing The Light"].map((artist) => (
                              <li key={artist} className="flex items-center gap-2">
                                <Music className="h-4 w-4 text-primary" />
                                <span className="text-sm font-medium">{artist}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="fun" className="mt-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Fun Things to Do</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {[
                              { icon: Music, text: "Live Christian music all day" },
                              { icon: Utensils, text: "Food trucks & concessions" },
                              { icon: Star, text: "Activities for all ages" },
                              { icon: Heart, text: "Fellowship & community" },
                              { icon: Tent, text: "Camping available on-site" },
                            ].map((item) => (
                              <li key={item.text} className="flex items-center gap-2">
                                <item.icon className="h-4 w-4 text-primary" />
                                <span className="text-sm">{item.text}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="tickets" className="mt-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Ticket Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <p className="text-sm text-muted-foreground">
                            General admission tickets are <strong>$30</strong> and cover the full day of
                            music and activities on Saturday, June 27th.
                          </p>
                          <p className="text-sm font-medium text-destructive">
                            All tickets are non-refundable.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            The Sunday morning worship service on June 29th is <strong>free</strong> and
                            does not require a ticket.
                          </p>
                          <a
                            href="http://www.itickets.com/events/483747.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                          >
                            <Ticket className="h-4 w-4" />
                            Purchase on iTickets
                          </a>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="camping" className="mt-4">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Camping Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <p className="text-sm text-muted-foreground">
                            Camping is available on-site at the Pittston Fairgrounds for festival
                            attendees who want to enjoy the full weekend experience.
                          </p>
                          <ul className="space-y-2">
                            {[
                              "Tent and RV camping available",
                              "Arrive Saturday morning, depart Sunday afternoon",
                              "Restroom facilities on-site",
                              "Bring your own camping gear",
                            ].map((item) => (
                              <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <Tent className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sunday Service */}
      <section className="bg-muted/50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Heart className="mx-auto h-8 w-8 text-primary" />
          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
            Free Sunday Morning Service
          </h2>
          <p className="mt-2 text-lg font-medium text-primary">
            June 29th, 10:00 AM – 12:00 Noon
          </p>
          <p className="mt-4 text-muted-foreground">No ticket needed</p>
          <div className="mt-6 space-y-2 text-sm text-muted-foreground">
            <p>Free Worship Service</p>
            <p>Life of Christ drama performance by Life Community Church Youth</p>
            <p>Share in Communion with the body of Christ</p>
            <p>Message</p>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            <strong>Location:</strong> Mended Heart Festival at the Pittston Fairgrounds
            <br />
            995 East Pittston Rd, Pittston, ME 04345
          </p>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-center text-2xl font-bold">Festival Location</h2>
          <div className="aspect-[16/7] overflow-hidden rounded-xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2869.5!2d-69.65!3d44.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPittston+Fairgrounds!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pittston Fairgrounds Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
