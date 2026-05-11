import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Biz Genies — Marketing Systems for Local Service Businesses',
  description: 'We build done-for-you marketing systems for local service businesses. Websites, automation, reviews, and SEO — without the agency BS.',
  openGraph: {
    title: 'Biz Genies',
    description: 'Marketing systems for local service businesses.',
    url: 'https://bizgenies.com',
    siteName: 'Biz Genies',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
