"use client"
import React, { useState } from "react";

const DashboardSubscription = () => {
  // Dummy state representing the user's subscription details.
  // Initially, the user is on the Free plan.
  const [subscription, setSubscription] = useState({
    plan: "Free",
    paymentStatus: "N/A",
  });

  // Simulate upgrading the subscription to Premium.
  const handleUpgrade = () => {
    setSubscription({
      plan: "Premium",
      paymentStatus: "Active",
    });
  };

  // Simulate canceling the Premium subscription.
  const handleCancel = () => {
    setSubscription({
      plan: "Free",
      paymentStatus: "N/A",
    });
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800">My Subscription</h1>
        <p className="mt-4 text-gray-600">
          Manage your subscription plan and view your payment status.
        </p>
        <div className="mt-8 p-6 border rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800">
            Current Plan: {subscription.plan}
          </h2>
          <p className="mt-2 text-gray-600">
            Payment Status: {subscription.paymentStatus}
          </p>
          {subscription.plan === "Free" ? (
            <div className="mt-4">
              <p className="text-gray-600">
                Upgrade to Premium for full access to advanced shipping quotes and additional features.
              </p>
              <button
                onClick={handleUpgrade}
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
              >
                Upgrade to Premium
              </button>
            </div>
          ) : (
            <div className="mt-4">
              <p className="text-gray-600">
                You are currently subscribed to the Premium plan.
              </p>
              <button
                onClick={handleCancel}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500"
              >
                Cancel Subscription
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardSubscription;
