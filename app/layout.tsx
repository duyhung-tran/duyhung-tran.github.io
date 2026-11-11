import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/footer";
import { MrForkProvider } from "@/components/mr-fork/provider";
import { ProjectModalHost } from "@/components/project-modal-host";
import { HeyStalker } from "@/components/hey-stalker";

const interSans = Inter({
  subsets: ["latin"],
  variable: "--font-inter-sans",
  weight: ["600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  fallback: ["Inter", "sans-serif"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  fallback: ["monospace"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  variable: "--font-ibm-plex-serif",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Hung",
  openGraph: {
    images: [""],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${interSans.variable} ${ibmPlexSerif.variable} antialiased`}
      >
        <HeyStalker />
        <MrForkProvider>
          <ProjectModalHost>
            {children}
            <Footer />
          </ProjectModalHost>
        </MrForkProvider>
      </body>
    </html>
  );
}