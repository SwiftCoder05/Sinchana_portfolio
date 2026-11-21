import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { site } from "@/content/site";
import "@fontsource/syne/600.css";
import "@fontsource/syne/700.css";
import "@fontsource/syne/800.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: `${site.name} — AI Engineer`,
  description: `${site.intro} Based in ${site.location}.`,
  openGraph: {
    title: `${site.name} — AI Engineer`,
    description: site.headline,
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="grid-bg">
        <a className="skip" href="#work">
          Skip to work
        </a>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
