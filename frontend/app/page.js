// app/page.js
import React from 'react';
import Link from "next/link";


export default function HomePage() {
  return (
    <main className="bg-white">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center h-screen"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        >
          <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white">Welcome to UroodX</h1>
              <p className="mt-4 text-xl text-gray-200">
                Hi, this is Ujjawal. If you are here for any issue, scroll to the bottom and talk to me.
              </p>
              <p className="mt-2 text-lg text-gray-200">
                Compare international shipping quotes and book shipments seamlessly.
              </p>
              <div className="mt-8 flex justify-center space-x-4">
                <Link className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-500" href="/dashboard/quotes">
                 Start Comparing Shipping Quotes
                </Link>
                <Link className="px-6 py-3 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200" href="/features">
                 Learn more about UroodX
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Additional sections can be added here as needed */}
      </main>
  );
}
