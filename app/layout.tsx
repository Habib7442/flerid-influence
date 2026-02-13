import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Flerid Influence — Authentic Influencer Marketing | 11x ROI",
  description:
    "Flerid Influence connects brands with human-verified creators to deliver measurable growth. Manual verification, ROI-focused campaigns, and fast launches.",
  keywords:
    "influencer marketing, authentic creators, ROI marketing, verified influencers, creator campaigns, brand partnerships",
  authors: [{ name: "Flerid Technologies" }],
  creator: "Flerid Technologies",
  publisher: "Flerid Influence",
  openGraph: {
    title: "Flerid Influence — Authentic Influencer Marketing | 11x ROI",
    description:
      "Human-verified creators and measurable influencer campaigns designed for real results.",
    url: "https://influence.flerid.com",
    siteName: "Flerid Influence",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flerid Influence — Authentic Influencer Marketing | 11x ROI",
    description:
      "Transform your brand with authentic influencer partnerships and measurable ROI.",
    creator: "@fleridtech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(() => {
  const stored = localStorage.getItem("theme");
  const theme = stored === "light" || stored === "dark" ? stored : "dark";
  document.documentElement.dataset.theme = theme;
})();`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
