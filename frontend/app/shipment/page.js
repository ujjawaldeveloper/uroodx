"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import routes from "../routes";

const Shipment = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    // Sender Information
    senderName: "",
    senderPhone: "",
    senderAddress: "",
    senderCity: "",
    senderState: "",
    senderZip: "",
    senderCountry: "",
    // Receiver Information
    receiverName: "",
    receiverPhone: "",
    receiverAddress: "",
    receiverCity: "",
    receiverState: "",
    receiverZip: "",
    receiverCountry: "",
    // Package Details
    weight: "",
    length: "",
    width: "",
    height: "",
    contentDescription: "",
    declaredValue: "",
    packageType: "",
    // Service Options
    shippingService: "",
    pickupDate: "",
    specialInstructions: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(routes.payment);
    // Insert your shipment booking API call here
    console.log("Shipment booked", formData);
  };

  return (
    <div className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800">Book Shipment</h1>
        <p className="mt-4 text-gray-600">
          Fill in the details below to book your shipment with our trusted partners.
        </p>

        {/* Selected Courier / Quote Summary */}
        <div className="mt-8 p-4 border rounded-md">
          <h2 className="text-xl font-semibold text-gray-800">Selected Courier: DHL</h2>
          <p className="text-gray-600">Price: $120</p>
          <p className="text-gray-600">Estimated Delivery: 3-5 days</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-10">
          {/* Sender Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Sender Information</h2>
            <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="senderName" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="senderName"
                  name="senderName"
                  value={formData.senderName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label htmlFor="senderPhone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="senderPhone"
                  name="senderPhone"
                  value={formData.senderPhone}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="senderAddress" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <textarea
                  id="senderAddress"
                  name="senderAddress"
                  value={formData.senderAddress}
                  onChange={handleChange}
                  required
                  rows="2"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                ></textarea>
              </div>
              <div>
                <label htmlFor="senderCity" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  id="senderCity"
                  name="senderCity"
                  value={formData.senderCity}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label htmlFor="senderState" className="block text-sm font-medium text-gray-700">
                  State
                </label>
                <input
                  type="text"
                  id="senderState"
                  name="senderState"
                  value={formData.senderState}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label htmlFor="senderZip" className="block text-sm font-medium text-gray-700">
                  Zip Code
                </label>
                <input
                  type="text"
                  id="senderZip"
                  name="senderZip"
                  value={formData.senderZip}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="senderCountry" className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <input
                  type="text"
                  id="senderCountry"
                  name="senderCountry"
                  value={formData.senderCountry}
                  onChange={handleChange}
                  required
                  placeholder="e.g., USA"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
            </div>
          </div>

          {/* Receiver Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Receiver Information</h2>
            <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="receiverName" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="receiverName"
                  name="receiverName"
                  value={formData.receiverName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label htmlFor="receiverPhone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="receiverPhone"
                  name="receiverPhone"
                  value={formData.receiverPhone}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="receiverAddress" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <textarea
                  id="receiverAddress"
                  name="receiverAddress"
                  value={formData.receiverAddress}
                  onChange={handleChange}
                  required
                  rows="2"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                ></textarea>
              </div>
              <div>
                <label htmlFor="receiverCity" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  id="receiverCity"
                  name="receiverCity"
                  value={formData.receiverCity}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label htmlFor="receiverState" className="block text-sm font-medium text-gray-700">
                  State
                </label>
                <input
                  type="text"
                  id="receiverState"
                  name="receiverState"
                  value={formData.receiverState}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label htmlFor="receiverZip" className="block text-sm font-medium text-gray-700">
                  Zip Code
                </label>
                <input
                  type="text"
                  id="receiverZip"
                  name="receiverZip"
                  value={formData.receiverZip}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="receiverCountry" className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <input
                  type="text"
                  id="receiverCountry"
                  name="receiverCountry"
                  value={formData.receiverCountry}
                  onChange={handleChange}
                  required
                  placeholder="e.g., UK"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
            </div>
          </div>

          {/* Package Details */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Package Details</h2>
            <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div>
                <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label htmlFor="length" className="block text-sm font-medium text-gray-700">
                  Length (cm)
                </label>
                <input
                  type="number"
                  id="length"
                  name="length"
                  value={formData.length}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label htmlFor="width" className="block text-sm font-medium text-gray-700">
                  Width (cm)
                </label>
                <input
                  type="number"
                  id="width"
                  name="width"
                  value={formData.width}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label htmlFor="height" className="block text-sm font-medium text-gray-700">
                  Height (cm)
                </label>
                <input
                  type="number"
                  id="height"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="contentDescription" className="block text-sm font-medium text-gray-700">
                  Content Description
                </label>
                <textarea
                  id="contentDescription"
                  name="contentDescription"
                  value={formData.contentDescription}
                  onChange={handleChange}
                  required
                  rows="2"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                ></textarea>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="declaredValue" className="block text-sm font-medium text-gray-700">
                  Declared Value ($)
                </label>
                <input
                  type="number"
                  id="declaredValue"
                  name="declaredValue"
                  value={formData.declaredValue}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="packageType" className="block text-sm font-medium text-gray-700">
                  Package Type
                </label>
                <select
                  id="packageType"
                  name="packageType"
                  value={formData.packageType}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="">Select package type</option>
                  <option value="Document">Document</option>
                  <option value="Parcel">Parcel</option>
                  <option value="Pallet">Pallet</option>
                  <option value="Freight">Freight</option>
                </select>
              </div>
            </div>
          </div>

          {/* Service Options */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Service Options</h2>
            <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="shippingService" className="block text-sm font-medium text-gray-700">
                  Shipping Service
                </label>
                <select
                  id="shippingService"
                  name="shippingService"
                  value={formData.shippingService}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="">Select service</option>
                  <option value="Express">Express</option>
                  <option value="Standard">Standard</option>
                  <option value="Economy">Economy</option>
                </select>
              </div>
              <div>
                <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700">
                  Preferred Pickup Date
                </label>
                <input
                  type="date"
                  id="pickupDate"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="specialInstructions" className="block text-sm font-medium text-gray-700">
                  Special Instructions
                </label>
                <textarea
                  id="specialInstructions"
                  name="specialInstructions"
                  value={formData.specialInstructions}
                  onChange={handleChange}
                  rows="2"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                ></textarea>
              </div>
            </div>
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
