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
  icons: {
    icon: [
      { url: '/favicon-v2.ico', sizes: 'any' },
      { url: '/favicon-v2.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon-v2-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon-v2.png', sizes: '180x180', type: 'image/png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var storedTheme = localStorage.getItem('theme');
                  var theme = storedTheme || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (error) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
