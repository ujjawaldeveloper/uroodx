"use client"
import React, { useState } from "react";

const Shipment = () => {
  const [formData, setFormData] = useState({
    senderName: "",
    senderAddress: "",
    receiverName: "",
    receiverAddress: "",
    packageWeight: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your shipment booking logic here (e.g., API call)
    console.log("Shipment booked", formData);
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800">Book Shipment</h1>
        <p className="mt-4 text-gray-600">
          Confirm your shipment details below.
        </p>

        {/* Selected Courier / Quote Summary */}
        <div className="mt-8 p-4 border rounded-md">
          <h2 className="text-xl font-semibold text-gray-800">
            Selected Courier: DHL
          </h2>
          <p className="text-gray-600">Price: $120</p>
          <p className="text-gray-600">Estimated Delivery: 3-5 days</p>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="senderName"
              className="block text-sm font-medium text-gray-700"
            >
              Sender Name
            </label>
            <input
              type="text"
              id="senderName"
              name="senderName"
              value={formData.senderName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="senderAddress"
              className="block text-sm font-medium text-gray-700"
            >
              Sender Address
            </label>
            <textarea
              id="senderAddress"
              name="senderAddress"
              value={formData.senderAddress}
              onChange={handleChange}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="receiverName"
              className="block text-sm font-medium text-gray-700"
            >
              Receiver Name
            </label>
            <input
              type="text"
              id="receiverName"
              name="receiverName"
              value={formData.receiverName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="receiverAddress"
              className="block text-sm font-medium text-gray-700"
            >
              Receiver Address
            </label>
            <textarea
              id="receiverAddress"
              name="receiverAddress"
              value={formData.receiverAddress}
              onChange={handleChange}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="packageWeight"
              className="block text-sm font-medium text-gray-700"
            >
              Package Weight (kg)
            </label>
            <input
              type="number"
              id="packageWeight"
              name="packageWeight"
              value={formData.packageWeight}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Shipment;
