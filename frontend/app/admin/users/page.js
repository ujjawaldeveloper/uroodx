"use client"
import React, { useState } from "react";

const AdminUsers = () => {
  // Dummy user data
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Buyer", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Buyer", status: "Blocked" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
    // Add more users as needed
  ]);

  const handleView = (userId) => {
    // Replace with actual view logic (e.g., navigate to user detail page)
    console.log("View user:", userId);
  };

  const handleBlock = (userId) => {
    // Replace with actual block logic (e.g., API call to block user)
    console.log("Block user:", userId);
  };

  const handleSuspend = (userId) => {
    // Replace with actual suspend logic (e.g., API call to suspend user)
    console.log("Suspend user:", userId);
  };

  const handleDelete = (userId) => {
    // Replace with actual delete logic (e.g., API call to delete user)
    console.log("Delete user:", userId);
    // Optionally update the state to remove the deleted user
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800">Manage Users</h1>
        <p className="mt-4 text-gray-600">View, block, suspend, or delete registered users.</p>
        
        <div className="mt-8 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
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
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.role}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium space-x-2">
                    <button
                      onClick={() => handleView(user.id)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleBlock(user.id)}
                      className="text-yellow-600 hover:text-yellow-900"
                    >
                      Block
                    </button>
                    <button
                      onClick={() => handleSuspend(user.id)}
                      className="text-orange-600 hover:text-orange-900"
                    >
                      Suspend
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
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

export default AdminUsers;
