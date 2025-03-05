"use client";
import React, { useState } from "react";

const Dashboard = () => {
  const [destination, setDestination] = useState("");
  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };
  const handleFetchQuotes = () => {
    console.log("Fetching quotes for:", destination);
  };
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="mt-4 text-gray-600">Welcome, John Doe!</p>

        <div className="mt-8">
          <label
            htmlFor="destination"
            className="block text-sm font-medium text-gray-700"
          >
            Select Destination
          </label>
          <select
            id="destination"
            name="destination"
            value={destination}
            onChange={handleDestinationChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">-- Choose Destination --</option>
            <option value="usa">United States</option>
            <option value="canada">Canada</option>
            <option value="uk">United Kingdom</option>
            <option value="germany">Germany</option>
            <option value="australia">Australia</option>
          </select>
          <button
            onClick={handleFetchQuotes}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
          >
            Fetch Shipping Quotes
          </button>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Recently Viewed Couriers
            </h2>
            <ul className="mt-4 space-y-2">
              <li className="p-4 border rounded-md">DHL</li>
              <li className="p-4 border rounded-md">FedEx</li>
              <li className="p-4 border rounded-md">UPS</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Recent Shipments
            </h2>
            <ul className="mt-4 space-y-2">
              <li className="p-4 border rounded-md">Shipment #12345</li>
              <li className="p-4 border rounded-md">Shipment #67890</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
