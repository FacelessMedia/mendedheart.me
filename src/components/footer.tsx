import Link from "next/link";
import { Heart, Facebook, Mail, Phone, MapPin, Ticket, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer>
      {/* Pre-footer CTA */}
      <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
          <div>
            <h3 className="text-lg font-bold tracking-tight">
              Ready to experience the <span className="text-gradient">Mended Heart Festival</span>?
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Join us June 27, 2026 at the Pittston Fairgrounds — tickets just $30.
            </p>
          </div>
          <a
            href="http://www.itickets.com/events/483747.html"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
          >
            <Ticket className="h-4 w-4" />
            Get Tickets
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="border-t bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2.5">
                <Heart className="h-6 w-6 text-primary" fill="currentColor" />
                <span className="text-lg font-bold tracking-tight">
                  Mended Heart <span className="text-gradient">Ministry</span>
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Meeting people where they are — sharing the love of Jesus Christ
                through powerful music and community in Maine.
              </p>
              <div className="mt-5 flex gap-2">
                <a
                  href="https://facebook.com/MendedHeartMinistry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/20"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-foreground">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-2.5">
                {[
                  { href: "/", label: "Home" },
                  { href: "/events", label: "Events" },
                  { href: "/past-events", label: "Past Events" },
                  { href: "/about", label: "About Us" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-foreground">
                Contact
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <a href="mailto:mended.heart@me.com" className="transition-colors hover:text-primary">
                    mended.heart@me.com
                  </a>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <a href="tel:+12076919128" className="transition-colors hover:text-primary">
                    (207) 691-9128
                  </a>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>98 Cushing Rd, Cushing, ME 04563</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-foreground">
                Upcoming
              </h3>
              <div className="mt-4 rounded-xl bg-white p-4 shadow-md ring-1 ring-black/[0.03]">
                <p className="text-sm font-bold">Mended Heart Festival 2026</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  June 27, 2026 &bull; Pittston Fairgrounds
                </p>
                <a
                  href="http://www.itickets.com/events/483747.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                >
                  Buy Tickets
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t pt-6 text-center text-xs text-muted-foreground/70">
            &copy; {new Date().getFullYear()} Mended Heart Ministry. All rights reserved. &bull; 501(c)(3) Non-Profit
          </div>
        </div>
      </div>
    </footer>
  );
}
