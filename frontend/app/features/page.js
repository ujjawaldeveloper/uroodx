import React from 'react';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Compare Shipping Quotes',
    description: 'Quickly compare real-time shipping rates from multiple international couriers.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Book Shipments Seamlessly',
    description: 'Enjoy a streamlined booking experience that simplifies your international shipping.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Real-Time Tracking',
    description: 'Stay updated with real-time shipment tracking and status notifications.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Flexible Subscription Plans',
    description: 'Choose from free and premium plans to match your shipping needs and budget.',
    icon: LockClosedIcon,
  },
];

export default function FeaturesPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold text-indigo-600">Features</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Discover what makes UroodX your ideal shipping aggregator
          </p>
          <p className="mt-6 text-lg text-gray-600">
            Quickly compare quotes, book shipments seamlessly, track your shipments in real-time, and choose the right subscription plan for your business.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
