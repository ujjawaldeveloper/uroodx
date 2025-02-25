// app/layout.js
import React from 'react';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'UroodX - Aggregate. Quote. Ship.',
  description: 'Get discounted shipping quotes instantly.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
