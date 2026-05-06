import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Biz Genies — Marketing Systems for Local Businesses",
  description:
    "We build done-for-you marketing systems for local service businesses. Websites, automation, reviews, and SEO — without the agency BS.",
  authors: [{ name: "Biz Genies" }],
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Biz Genies — Websites & Marketing Systems",
    description:
      "Biz Genies builds done-for-you marketing systems for local service businesses. Websites, automation, reviews, and SEO.",
    type: "website",
    images: [
      "https://vibe.filesafe.space/1776148884210495199/assets/2226bf3a-5e60-46a6-b2d2-7c86c751b56a.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@BizGenies",
    images: [
      "https://vibe.filesafe.space/1776148884210495199/assets/2226bf3a-5e60-46a6-b2d2-7c86c751b56a.png",
    ],
  },
  icons: {
    icon: `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="%236C47FF"/><text x="50" y="68" font-family="Arial" font-size="42" font-weight="bold" fill="white" text-anchor="middle">BG</text></svg>`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="/site/css2(1)" rel="stylesheet" />
        <link rel="stylesheet" href="/site/index-C53Id17u.css" />
        <link rel="stylesheet" href="/site/biz-genies-overrides.css" />
      </head>
      <body>
        {children}
        <Script src="/site/index-je0mC7Us.js" type="module" strategy="afterInteractive" />
      </body>
    </html>
  );
}
