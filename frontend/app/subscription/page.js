import React from "react";

const Subscription = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center">Subscription Plans</h1>
        <p className="mt-4 text-center text-gray-600">
          Choose the plan that best fits your shipping needs.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Free Plan */}
          <div className="border border-gray-300 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">Free Plan</h2>
            <p className="mt-2 text-gray-600">
              Basic quote comparison, limited features, and essential shipping information.
            </p>
            <div className="mt-4">
              <span className="text-4xl font-bold text-gray-800">$0</span>
              <span className="text-gray-600 text-sm">/month</span>
            </div>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-600">Access to basic shipping quotes</li>
              <li className="text-gray-600">Limited shipment tracking</li>
              <li className="text-gray-600">Standard support</li>
            </ul>
            <button className="mt-6 w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500">
              Choose Free Plan
            </button>
          </div>

          {/* Premium Plan */}
          <div className="border border-gray-300 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">Premium Plan</h2>
            <p className="mt-2 text-gray-600">
              Full access to premium shipping quotes, advanced tracking, and exclusive offers.
            </p>
            <div className="mt-4">
              <span className="text-4xl font-bold text-gray-800">$49</span>
              <span className="text-gray-600 text-sm">/month</span>
            </div>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-600">Unlimited shipping quote comparisons</li>
              <li className="text-gray-600">Real-time shipment tracking</li>
              <li className="text-gray-600">Priority customer support</li>
              <li className="text-gray-600">Exclusive discounts and offers</li>
            </ul>
            <button className="mt-6 w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500">
              Choose Premium Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
