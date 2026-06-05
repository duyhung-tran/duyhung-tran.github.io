import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import LenisScrollProvider from "@/components/lenis-provider";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/themeprovider";
import ThemeApplier from "@/components/theme-applier";

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
    <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${interSans.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            <div className="i see you stalker"
              dangerouslySetInnerHTML={{
                __html: `<!-- hi -->`,
              }}
            />
            <ThemeApplier />
            <Analytics />
            {/* <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function() {
                    try {
                      const theme = localStorage.getItem('theme-class');
                      if (theme) {
                        document.documentElement.classList.add(theme);
                      }
                    } catch(e) {}
                  })();
                `,
              }}
            /> */}
            {/* <LenisScrollProvider> */}
              {children}
            {/* </LenisScrollProvider> */}
          </ThemeProvider>

        </body>
    </html>
  );
}


