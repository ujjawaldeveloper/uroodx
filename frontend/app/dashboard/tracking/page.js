"use client"
import React, { useState } from "react";

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [currentStatus, setCurrentStatus] = useState(null);

  // Define the shipment status steps
  const steps = ["Pending", "Shipped", "In Transit", "Delivered"];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy logic: if a tracking number is provided, set status to "In Transit"
    if (trackingNumber) {
      setCurrentStatus("In Transit");
    }
  };

  // Determine current step index
  const currentStepIndex = currentStatus ? steps.indexOf(currentStatus) : -1;

  return (
    <div className="py-12 bg-white">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center">Track Shipment</h1>
        <p className="mt-4 text-center text-gray-600">
          Enter your tracking number to see your shipment's status.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="trackingNumber" className="block text-sm font-medium text-gray-700">
              Tracking Number
            </label>
            <input
              type="text"
              name="trackingNumber"
              id="trackingNumber"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <button type="submit" className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500">
              Track Shipment
            </button>
          </div>
        </form>

        {currentStatus && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-800 text-center">
              Shipment Status: {currentStatus}
            </h2>
            <div className="mt-6">
              <ul className="flex justify-between items-center">
                {steps.map((step, index) => (
                  <li key={index} className="relative flex-1 text-center">
                    <div
                      className={`w-8 h-8 mx-auto rounded-full ${
                        index <= currentStepIndex ? "bg-indigo-600" : "bg-gray-300"
                      }`}
                    ></div>
                    <span className="block mt-2 text-sm">{step}</span>
                    {index < steps.length - 1 && (
                      <div
                        className={`absolute top-4 right-0 h-1 w-full ${
                          index < currentStepIndex ? "bg-indigo-600" : "bg-gray-300"
                        }`}
                        style={{ marginRight: "-50%" }}
                      ></div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tracking;
