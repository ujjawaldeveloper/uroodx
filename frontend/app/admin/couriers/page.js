"use client"
import React, { useState } from "react";

const AdminCouriers = () => {
  // Dummy data for couriers
  const [couriers, setCouriers] = useState([
    { id: 1, name: "DHL", rate: "$120", status: "Active" },
    { id: 2, name: "FedEx", rate: "$110", status: "Active" },
    { id: 3, name: "UPS", rate: "$130", status: "Active" },
  ]);

  const handleAddCourier = () => {
    // Replace with actual add logic or redirect to add courier form
    console.log("Add new courier");
  };

  const handleEdit = (id) => {
    // Replace with actual edit logic (e.g., redirect to edit page)
    console.log("Edit courier:", id);
  };

  const handleDelete = (id) => {
    // Replace with actual delete logic (e.g., API call)
    console.log("Delete courier:", id);
    setCouriers(couriers.filter((courier) => courier.id !== id));
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Manage Couriers</h1>
          <button
            onClick={handleAddCourier}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
          >
            Add Courier
          </button>
        </div>
        <p className="mt-4 text-gray-600">
          Add, update, or remove courier information.
        </p>
        <div className="mt-8 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Shipping Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {couriers.map((courier) => (
                <tr key={courier.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {courier.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {courier.rate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {courier.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium space-x-2">
                    <button
                      onClick={() => handleEdit(courier.id)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(courier.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminCouriers;
