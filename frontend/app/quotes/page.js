"use client";
import React, { useState } from "react";
import Link from "next/link";
import { countries, mockQuotes } from "./data"; // Adjust path if necessary
import routes from "../routes";

const DashboardQuotes = () => {
  // Shipment details form state (only country and a few extra details for simplicity)
  const [formData, setFormData] = useState({
    fromCountry: "USA",
    toCountry: "UK",
    material: "",
    weight: "",
    length: "",
    width: "",
    height: "",
  });

  // State to determine if form was submitted and quotes are available.
  const [submitted, setSubmitted] = useState(false);
  const [quotes, setQuotes] = useState([]);

  // Filter states: speed, priceOrder, and searchText.
  const [filters, setFilters] = useState({
    speed: "",
    priceOrder: "",
  });
  const [searchText, setSearchText] = useState("");

  // Update form state on input/select change.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // On form submission, filter the mock data by selected countries.
  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredByCountry = mockQuotes.filter(
      (quote) =>
        quote.fromCountry === formData.fromCountry &&
        quote.toCountry === formData.toCountry
    );
    setQuotes(filteredByCountry);
    setSubmitted(true);
  };

  // Update filter state on change.
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Update search text.
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  // Apply additional filters.
  let filteredQuotes = quotes;
  if (filters.speed) {
    filteredQuotes = filteredQuotes.filter(
      (q) => q.speed.toLowerCase() === filters.speed.toLowerCase()
    );
  }
  if (filters.priceOrder === "asc") {
    filteredQuotes = filteredQuotes.slice().sort((a, b) => a.price - b.price);
  } else if (filters.priceOrder === "desc") {
    filteredQuotes = filteredQuotes.slice().sort((a, b) => b.price - a.price);
  }
  // Apply search filter by courier name.
  const finalQuotes = filteredQuotes.filter((q) =>
    q.courier.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          Get Shipping Quotes
        </h2>
        <p className="mt-4 text-gray-600">
          Enter your shipment details to receive pricing from top international
          shipping partners.
        </p>

        {/* Shipment Details Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="grid grid-cols-6 gap-6">
            {/* From Country Dropdown */}
            <div className="col-span-1">
              <label
                htmlFor="fromCountry"
                className="block text-sm font-medium text-gray-900"
              >
                From Country
              </label>
              <select
                id="fromCountry"
                name="fromCountry"
                value={formData.fromCountry}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            {/* Destination Country Dropdown */}
            <div className="col-span-1">
              <label
                htmlFor="toCountry"
                className="block text-sm font-medium text-gray-900"
              >
                Destination Country
              </label>
              <select
                id="toCountry"
                name="toCountry"
                value={formData.toCountry}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            {/* Material Type */}
            <div className="col-span-1">
              <label
                htmlFor="material"
                className="block text-sm font-medium text-gray-900"
              >
                Material Type
              </label>
              <select
                id="material"
                name="material"
                value={formData.material}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
              >
                <option value="">Select material</option>
                <option value="Solid">Solid</option>
                <option value="Liquid">Liquid</option>
                <option value="Fragile">Fragile</option>
                <option value="Perishable">Perishable</option>
                <option value="Hazardous">Hazardous</option>
              </select>
            </div>
            {/* Weight */}
            <div className="col-span-1">
              <label
                htmlFor="weight"
                className="block text-sm font-medium text-gray-900"
              >
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
            {/* Width */}
            <div className="col-span-1">
              <label
                htmlFor="width"
                className="block text-sm font-medium text-gray-900"
              >
                Width(cm) Optional
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
            {/* Height */}
            <div className="col-span-1">
              <label
                htmlFor="height"
                className="block text-sm font-medium text-gray-900"
              >
                Height (cm) Optional
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
          </div>
          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get Quotes
            </button>
          </div>
        </form>

        {/* Render Table if form is submitted */}
        {submitted && (
          <div className="mt-10">
            {/* Filter and Search Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4">
              <div className="mb-4 sm:mb-0">
                <input
                  type="text"
                  id="table-search"
                  value={searchText}
                  onChange={handleSearchChange}
                  placeholder="Search by Courier"
                  className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <div>
                  <label
                    htmlFor="speed"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Filter by Speed
                  </label>
                  <select
                    id="speed"
                    name="speed"
                    value={filters.speed}
                    onChange={handleFilterChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                  >
                    <option value="">All</option>
                    <option value="Fast">Fast</option>
                    <option value="Standard">Standard</option>
                    <option value="Economy">Economy</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="priceOrder"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Sort by Price
                  </label>
                  <select
                    id="priceOrder"
                    name="priceOrder"
                    value={filters.priceOrder}
                    onChange={handleFilterChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                  >
                    <option value="">Default</option>
                    <option value="asc">Lowest First</option>
                    <option value="desc">Highest First</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Courier
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Delivery Time
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Discount
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Insurance
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Speed
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {finalQuotes.map((quote) => (
                    <tr
                      key={quote.id}
                      className="bg-white border-b hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {quote.courier}
                      </td>
                      <td className="px-6 py-4 text-gray-500">
                        ${quote.price}
                      </td>
                      <td className="px-6 py-4 text-gray-500">
                        {quote.delivery}
                      </td>
                      <td className="px-6 py-4 text-gray-500">
                        {quote.discount}
                      </td>
                      <td className="px-6 py-4 text-gray-500">
                        {quote.insurance}
                      </td>
                      <td className="px-6 py-4 text-gray-500">{quote.speed}</td>
                      <td className="px-6 py-4 text-gray-500">
                        <Link
                          href={routes.shipment}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Book Now
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {finalQuotes.length === 0 && (
              <div className="mt-8 text-center text-gray-600">
                No shipping partners available for the selected filters.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardQuotes;
