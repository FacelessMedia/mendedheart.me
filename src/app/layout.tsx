import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
