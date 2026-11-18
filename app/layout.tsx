import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";
// import { Analytics } from "@vercel/analytics/next"; // not rendered at the moment
import Footer from "@/components/footer";
import { MrForkProvider } from "@/components/mr-fork/provider";
import { ProjectModalHost } from "@/components/project-modal-host";
import { HeyStalker } from "@/components/hey-stalker";
import Script from "next/script";
import { animationSettingScript } from "@/lib/animation-setting";

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
    // suppressHydrationWarning: the script below may add the no-motion class before React loads
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Animations switched off in the menu: applied before the page shows */}
        <Script id="animation-setting" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: animationSettingScript }} />
      </head>
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