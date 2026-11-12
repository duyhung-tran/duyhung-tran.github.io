import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/footer";
import { MrForkProvider } from "@/components/mr-fork/provider";
import { ProjectModalHost } from "@/components/project-modal-host";
import { HeyStalker } from "@/components/hey-stalker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  fallback: ["sans-serif"],
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
        className={`${geistSans.variable} antialiased`}
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