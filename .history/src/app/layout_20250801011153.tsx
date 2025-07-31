import type { Metadata } from 'next';
import './globals.css';
import LayoutWrapper from '@/components/layout/LayoutWrapper';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'CodeLits Studio – Next-Gen Software AI, and Digital Innovation Firm',
  description:
    'Innovative software, AI, and digital solutions that empower businesses worldwide.',
  metadataBase: new URL('https://codelitsstudio.com'),
  openGraph: {
    title: 'CodeLits Studio – Next-Gen Software AI, and Digital Innovation Firm',
    description:
      'Innovative software, AI, and digital solutions that empower businesses worldwide.',
    url: 'https://codelitsstudio.com',
    siteName: 'CodeLits Studio',
    images: [
      {
        url: 'https://codelitsstudio.com/images/og.png',
        width: 1200,
        height: 630,
        alt: 'CodeLits Studio Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeLits Studio – Next-Gen Software AI, and Digital Innovation Firm',
    description:
      'Innovative software, AI, and digital solutions that empower businesses worldwide.',
    images: ['https://codelitsstudio.com/images/og.png'],
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
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

        {/* Structured Data for Vertical Sitelinks */}
        <Script id="structured-data" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://codelitsstudio.com",
              "name": "CodeLits Studio",
              "hasPart": [
                { "@type": "WebPage", "url": "https://codelitsstudio.com/studio", "name": "Studio" },
                { "@type": "WebPage", "url": "https://codelitsstudio.com/portfolio", "name": "Work" },
                { "@type": "WebPage", "url": "https://codelitsstudio.com/services", "name": "Services" },
                { "@type": "WebPage", "url": "https://codelitsstudio.com/process", "name": "Process" },
                { "@type": "WebPage", "url": "https://codelitsstudio.com/blog", "name": "Blog" },
            
                { "@type": "WebPage", "url": "https://codelitsstudio.com/contact", "name": "Contact" },
                { "@type": "WebPage", "url": "https://codelitsstudio.com/ai", "name": "AI Tools" }
              ]
            }
          `}
        </Script>
      </head>
      <body className="font-body antialiased animate-gradient">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
