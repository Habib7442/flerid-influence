import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flerid Influence - Premium Influencer Marketing Platform",
  description: "The new purpose-built platform to harness authentic influence. Connect with verified influencers for guaranteed ROI and zero fake followers. Transform your brand with authentic partnerships.",
  keywords: "influencer marketing, authentic influencers, brand partnerships, ROI marketing, social media marketing, content creators, digital marketing platform",
  authors: [{ name: "Flerid Technologies" }],
  creator: "Flerid Technologies",
  publisher: "Flerid Influence",
  openGraph: {
    title: "Flerid Influence - Premium Influencer Marketing Platform",
    description: "The new purpose-built platform to harness authentic influence for real results.",
    url: "https://influence.flerid.com",
    siteName: "Flerid Influence",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flerid Influence - Premium Influencer Marketing Platform",
    description: "Transform your brand with authentic influencer partnerships. Zero fake followers guaranteed.",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
