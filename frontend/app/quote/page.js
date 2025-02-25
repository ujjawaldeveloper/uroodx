"use client";
import React, { useState } from 'react';

export default function QuotePage() {
  const [formData, setFormData] = useState({
    weight: '',
    shippingMode: 'air_cargo',
    origin: '',
    destination: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to fetch quotes goes here
    console.log('Fetching quote for:', formData);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Get Shipping Quote</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label className="block mb-2">Weight (kg)</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter weight"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Shipping Mode</label>
          <select
            name="shippingMode"
            value={formData.shippingMode}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="air_cargo">Air Cargo</option>
            <option value="sea_freight">Sea Freight</option>
            <option value="express">Express</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Origin</label>
          <input
            type="text"
            name="origin"
            value={formData.origin}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Origin"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Destination</label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Destination"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-500"
        >
          Get Quote
        </button>
      </form>
    </div>
  );
}
