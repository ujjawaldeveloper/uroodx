"use client"
import React, { useState } from 'react';

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement tracking logic here
    console.log('Tracking number:', trackingNumber);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Track Shipment</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label className="block mb-2">Tracking Number / Booking Ref</label>
          <input
            type="text"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter tracking number"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-500"
        >
          Track
        </button>
      </form>
    </div>
  );
}
