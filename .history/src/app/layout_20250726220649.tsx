import type { Metadata } from 'next';
import './globals.css';
import LayoutWrapper from '@/components/layout/LayoutWrapper';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'CodeLits Studio – Your Tech Partner',
  description:
    'Innovative software, AI, and digital solutions that empower businesses worldwide.',
  metadataBase: new URL('https://beta.codelitsstudio.com'),
  openGraph: {
    title: 'CodeLits Studio – Your Tech Partner',
    description:
      'Innovative software, AI, and digital solutions that empower businesses worldwide.',
    url: 'https://beta.codelitsstudio.com',
    siteName: 'CodeLits Studio',
    images: [
      {
        url: 'https://beta.codelitsstudio.com/images/og.png',
        width: 1200,
        height: 630,
        alt: 'CodeLits Studio Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeLits Studio – Your Tech Partner',
    description:
      'Innovative software, AI, and digital solutions that empower businesses worldwide.',
    images: ['https://beta.codelitsstudio.com/images/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Code+Pro:wght@400;500;600&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H7C4V7MXP8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H7C4V7MXP8');
          `}
        </Script>
      </head>
      <body className="font-body antialiased animate-gradient">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
