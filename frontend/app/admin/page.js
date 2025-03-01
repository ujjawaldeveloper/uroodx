"use client"
import React, { useState } from "react";

const AdminDashboard = () => {
  // Dummy stats for demonstration
  const [stats, setStats] = useState({
    totalUsers: 120,
    totalCouriers: 5,
    totalTransactions: 300,
    activeShipments: 25,
  });

  // Dummy recent activity log
  const [recentActivities, setRecentActivities] = useState([
    { id: 1, description: "User John Doe signed up", time: "2 hours ago" },
    { id: 2, description: "Shipment #12345 booked", time: "3 hours ago" },
    { id: 3, description: "Courier UPS updated rates", time: "1 day ago" },
  ]);

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="mt-4 text-gray-600">
          Overview of key metrics and recent activities.
        </p>

        {/* Metrics Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-indigo-600 rounded-lg shadow text-white">
            <h2 className="text-xl font-semibold">Total Users</h2>
            <p className="mt-2 text-3xl font-bold">{stats.totalUsers}</p>
          </div>
          <div className="p-6 bg-green-600 rounded-lg shadow text-white">
            <h2 className="text-xl font-semibold">Total Couriers</h2>
            <p className="mt-2 text-3xl font-bold">{stats.totalCouriers}</p>
          </div>
          <div className="p-6 bg-yellow-600 rounded-lg shadow text-white">
            <h2 className="text-xl font-semibold">Transactions</h2>
            <p className="mt-2 text-3xl font-bold">{stats.totalTransactions}</p>
          </div>
          <div className="p-6 bg-red-600 rounded-lg shadow text-white">
            <h2 className="text-xl font-semibold">Active Shipments</h2>
            <p className="mt-2 text-3xl font-bold">{stats.activeShipments}</p>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800">Recent Activities</h2>
          <ul className="mt-4 divide-y divide-gray-200">
            {recentActivities.map((activity) => (
              <li key={activity.id} className="py-4">
                <p className="text-gray-700">{activity.description}</p>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
