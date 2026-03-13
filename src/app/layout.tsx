import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AnnouncementBar } from "@/components/announcement-bar";
import { ScrollToTop } from "@/components/scroll-to-top";
import { FloatingTicket } from "@/components/floating-ticket";
import { MusicProvider } from "@/components/music-context";
import { MusicPlayer } from "@/components/music-player";
import Script from "next/script";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mended Heart Ministry — Meeting People Where They Are",
  description:
    "Mended Heart Ministry shares the love of Jesus Christ through powerful Christian music events and festivals in Maine. Join us for the Mended Heart Festival 2026!",
  keywords: ["Christian music", "Maine ministry", "Mended Heart Festival", "Christian concerts", "worship"],
  openGraph: {
    title: "Mended Heart Ministry",
    description: "Sharing the love of Jesus through music in Maine",
    type: "website",
    url: "https://www.mendedheart.me",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <MusicProvider>
        <AnnouncementBar />
        <Header />
        <main className="pb-[72px]">{children}</main>
        <Footer />
        <ScrollToTop />
        <FloatingTicket />
        <MusicPlayer />
        <Script
          id="json-ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Mended Heart Ministry",
              url: "https://www.mendedheart.me",
              description: "Christian music ministry in Maine sharing the love of Jesus Christ through concerts and festivals.",
              email: "mended.heart@me.com",
              telephone: "+1-207-691-9128",
              address: {
                "@type": "PostalAddress",
                streetAddress: "98 Cushing Rd",
                addressLocality: "Cushing",
                addressRegion: "ME",
                postalCode: "04563",
                addressCountry: "US",
              },
              sameAs: ["https://facebook.com/MendedHeartMinistry"],
            }),
          }}
        />
        <Script
          id="json-ld-event"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicEvent",
              name: "Mended Heart Festival 2026",
              startDate: "2026-06-27T11:00:00-04:00",
              endDate: "2026-06-27T23:00:00-04:00",
              location: {
                "@type": "Place",
                name: "Pittston Fairgrounds",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "995 East Pittston Rd",
                  addressLocality: "Pittston",
                  addressRegion: "ME",
                  postalCode: "04345",
                },
              },
              offers: {
                "@type": "Offer",
                price: "30",
                priceCurrency: "USD",
                url: "http://www.itickets.com/events/483747.html",
                availability: "https://schema.org/InStock",
              },
              organizer: {
                "@type": "Organization",
                name: "Mended Heart Ministry",
                url: "https://www.mendedheart.me",
              },
            }),
          }}
        />
        </MusicProvider>
      </body>
    </html>
  );
}
