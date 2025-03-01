import React from 'react';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'UroodX - Get Discounted International Shipping Quotes',
  description: 'UroodX aggregates shipping quotes from multiple couriers to help you save money on international shipments. Get real-time tracking and seamless booking.',
  openGraph: {
    title: 'UroodX - Shipping Quotes',
    description: 'Compare shipping quotes instantly. Save on your international shipments with UroodX.',
    url: 'https://uroodx.vercel.app',
    siteName: 'UroodX',
    images: [
      {
        url: 'https://uroodx.vercel.app/og-image.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UroodX - Shipping Quotes',
    description: 'Compare shipping quotes instantly and book shipments with ease.',
    images: ['https://uroodx.vercel.app/og-image.png'],
  },
  alternates: {
    canonical: 'https://uroodx.vercel.app',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'UroodX',
              url: 'https://uroodx.vercel.app',
              logo: 'https://uroodx.vercel.app/favicon.ico',
              sameAs: [
                'https://www.facebook.com/uroodx',
                'https://twitter.com/uroodx',
                'https://www.linkedin.com/company/uroodx',
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
