"use client";
import React, { useState } from "react";

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Germany",
  "Australia",
  "France",
  "Japan",
  "China",
  "India",
  "Brazil",
];

const DashboardQuotes = () => {
  // Shipment details form state, including country dropdowns.
  const [formData, setFormData] = useState({
    fromAddress: "",
    toAddress: "",
    fromPin: "",
    toPin: "",
    fromCountry: "United States",
    toCountry: "United Kingdom",
    material: "",
    weight: "",
    length: "",
    width: "",
    height: "",
  });

  // State to determine if form was submitted and quotes are available.
  const [submitted, setSubmitted] = useState(false);
  const [quotes, setQuotes] = useState([]);

  // Filters state.
  const [filters, setFilters] = useState({
    speed: "",
    priceOrder: "",
  });

  // Update form state on input/select change.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Mock data for shipping quotes with additional details.
  const mockQuotes = [
    {
      id: 1,
      courier: "DHL",
      price: 120,
      delivery: "3-5 days",
      discount: "10%",
      speed: "Fast",
      insurance: "$5",
      fromCountry: "United States",
      toCountry: "United Kingdom",
    },
    {
      id: 2,
      courier: "FedEx",
      price: 110,
      delivery: "4-6 days",
      discount: "5%",
      speed: "Standard",
      insurance: "$4",
      fromCountry: "United States",
      toCountry: "United Kingdom",
    },
    {
      id: 3,
      courier: "UPS",
      price: 130,
      delivery: "3-4 days",
      discount: "15%",
      speed: "Fast",
      insurance: "$6",
      fromCountry: "United States",
      toCountry: "Germany",
    },
    {
      id: 4,
      courier: "TNT",
      price: 100,
      delivery: "5-7 days",
      discount: "8%",
      speed: "Economy",
      insurance: "$3",
      fromCountry: "Canada",
      toCountry: "United Kingdom",
    },
    {
      id: 5,
      courier: "Aramex",
      price: 140,
      delivery: "2-4 days",
      discount: "12%",
      speed: "Fast",
      insurance: "$7",
      fromCountry: "United States",
      toCountry: "United Kingdom",
    },
    {
      id: 6,
      courier: "DHL",
      price: 115,
      delivery: "4-5 days",
      discount: "10%",
      speed: "Standard",
      insurance: "$5",
      fromCountry: "United States",
      toCountry: "United Kingdom",
    },
    {
      id: 7,
      courier: "FedEx",
      price: 105,
      delivery: "5-6 days",
      discount: "5%",
      speed: "Economy",
      insurance: "$4",
      fromCountry: "United States",
      toCountry: "United Kingdom",
    },
    {
      id: 8,
      courier: "UPS",
      price: 125,
      delivery: "3-5 days",
      discount: "7%",
      speed: "Fast",
      insurance: "$6",
      fromCountry: "Canada",
      toCountry: "Germany",
    },
    {
      id: 9,
      courier: "TNT",
      price: 135,
      delivery: "4-6 days",
      discount: "9%",
      speed: "Standard",
      insurance: "$5",
      fromCountry: "Australia",
      toCountry: "United Kingdom",
    },
    {
      id: 10,
      courier: "Aramex",
      price: 95,
      delivery: "5-7 days",
      discount: "4%",
      speed: "Economy",
      insurance: "$3",
      fromCountry: "United States",
      toCountry: "United Kingdom",
    },
  ];

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

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Get Shipping Quotes
        </h1>
        <p className="mt-4 text-gray-600">
          Enter your shipment details to receive pricing from top international
          shipping partners.
        </p>

        {/* Shipment Details Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* From Country Dropdown */}
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            {/* Length */}
            <div>
              <label
                htmlFor="length"
                className="block text-sm font-medium text-gray-900"
              >
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
            {/* Width */}
            <div>
              <label
                htmlFor="width"
                className="block text-sm font-medium text-gray-900"
              >
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
            {/* Height */}
            <div>
              <label
                htmlFor="height"
                className="block text-sm font-medium text-gray-900"
              >
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

        {/* Show filters and quotes only if form is submitted */}
        {submitted && quotes.length > 0 && (
          <>
            {/* Filter Section */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-gray-800">
                Available Shipping Partners
              </h2>
              <div className="mt-4 flex gap-4">
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

            {/* Quotes Table */}
            <div className="mt-8 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Courier
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Delivery Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Discount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Insurance
                    </th>
                    <th className="px-6 py-3 relative">
                      <span className="sr-only">Book</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredQuotes.map((quote) => (
                    <tr key={quote.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {quote.courier}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${quote.price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {quote.delivery}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {quote.discount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {quote.insurance}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-indigo-600 hover:text-indigo-900">
                          Book Now
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* If no quotes found, show a message */}
        {submitted && quotes.length === 0 && (
          <div className="mt-8 text-center text-gray-600">
            No shipping partners available for the selected countries.
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardQuotes;
