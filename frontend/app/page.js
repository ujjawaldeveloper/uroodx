// app/page.js
import React from 'react';

export default function HomePage() {
  return (
    <main id="HomePage" className="bg-gray-100 min-h-screen">
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-yellow-500 text-white py-20">
        <h1 className="text-4xl font-bold mb-4">Aggregate. Quote. Ship.</h1>
        <p className="text-xl mb-8">Get Discounted Shipping Quotes Instantly</p>
        <div className="flex space-x-4">
          <a
            href="/auth"
            className="px-6 py-3 bg-yellow-400 text-blue-900 rounded hover:bg-yellow-300"
          >
            Get Started
          </a>
          <a
            href="/auth"
            className="px-6 py-3 border border-white rounded hover:bg-white hover:text-blue-900"
          >
            Learn More
          </a>
        </div>
      </div>
    </main>
  );
}
