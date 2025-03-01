import React from 'react'

const page = () => {
  return (
    <main className="bg-white">
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-800 text-center">Features</h1>
            <p className="mt-4 text-center text-gray-600">
              Discover what makes UroodX your ideal shipping aggregator.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800">Compare Shipping Quotes</h2>
                <p className="mt-2 text-gray-600">
                  Quickly compare real-time shipping rates from multiple international couriers.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800">Book Shipments Seamlessly</h2>
                <p className="mt-2 text-gray-600">
                  Enjoy a streamlined booking experience that simplifies your international shipping.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800">Real-Time Tracking</h2>
                <p className="mt-2 text-gray-600">
                  Stay updated with real-time shipment tracking and status notifications.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800">Flexible Subscription Plans</h2>
                <p className="mt-2 text-gray-600">
                  Choose from free and premium plans to match your shipping needs and budget.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}

export default page