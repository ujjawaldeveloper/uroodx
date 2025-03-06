import routes from "./routes";
import { CheckIcon } from "@heroicons/react/20/solid";
import Link from "next/link.js";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const tiers = [
  {
    name: "Free Plan",
    id: "tier-hobby",
    href: "#",
    priceMonthly: "$0",
    description:
      "Basic quote comparison, limited features, and essential shipping information.",
    features: [
      "Access to basic shipping qoutes",
      "Limited shipment tracking",
      "Standard analytics",
      "Standard support",
    ],
    featured: false,
  },
  {
    name: "Premium Plan",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "$29",
    description:
      "Full access to premium shipping quotes, advanced tracking, and exclusive offers.",
    features: [
      "Unlimited shipping quote comparisons",
      "Real-time shipment tracking",
      "Priority customer support",
      "Exclusive discounts and offers",
    ],
    featured: true,
  },
];
const features = [
  {
    name: "Compare Shipping Quotes",
    description:
      "Quickly compare real-time shipping rates from multiple international couriers.",
    icon: ArrowPathIcon,
  },
  {
    name: "Book Shipments Seamlessly",
    description:
      "Enjoy a streamlined booking experience that simplifies your international shipping.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Real-Time Tracking",
    description:
      "Stay updated with real-time shipment tracking and status notifications.",
    icon: FingerPrintIcon,
  },
  {
    name: "Flexible Subscription Plans",
    description:
      "Choose from free and premium plans to match your shipping needs and budget.",
    icon: LockClosedIcon,
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Main() {
  return (
    <>
      <div className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          ></div>
          <div className="mx-auto max-w-2xl py-24 sm:py-24 lg:py-24">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Get best quotes for your international shipping
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                Welcome to UroodX
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                UroodX aggregates shipping quotes from multiple couriers to help
                you save money on international shipments. Get real-time
                tracking and seamless booking.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href={routes.register}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get Started
                </Link>
                <Link
                  href="#features"
                  className="text-sm/6 font-semibold text-gray-900"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          ></div>
        </div>
      </div>
      <div id="features" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold text-indigo-600">
              Features
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Discover what makes UroodX your ideal shipping aggregator
            </p>
            <p className="mt-6 text-lg text-gray-600">
              Quickly compare quotes, book shipments seamlessly, track your
              shipments in real-time, and choose the right subscription plan for
              your business.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold text-gray-900">
                    <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-white"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div
        id="subscription"
        className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold text-indigo-600">Pricing</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right plan for you
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-600 sm:text-xl">
          Choose an affordable plan that’s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
        {/* Pricing Tiers */}
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured
                  ? "relative bg-gray-900 shadow-2xl"
                  : "bg-white/60 sm:mx-8 lg:mx-0",
                tier.featured
                  ? ""
                  : tierIdx === 0
                  ? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl"
                  : "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none",
                "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
              )}
            >
              <h3
                id={tier.id}
                className={classNames(
                  tier.featured ? "text-indigo-400" : "text-indigo-600",
                  "text-base font-semibold"
                )}
              >
                {tier.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span
                  className={classNames(
                    tier.featured ? "text-white" : "text-gray-900",
                    "text-5xl font-semibold tracking-tight"
                  )}
                >
                  {tier.priceMonthly}
                </span>
                <span
                  className={classNames(
                    tier.featured ? "text-gray-400" : "text-gray-500",
                    "text-base"
                  )}
                >
                  /month
                </span>
              </p>
              <p
                className={classNames(
                  tier.featured ? "text-gray-300" : "text-gray-600",
                  "mt-6 text-base"
                )}
              >
                {tier.description}
              </p>
              <ul
                role="list"
                className={classNames(
                  tier.featured ? "text-gray-300" : "text-gray-600",
                  "mt-8 space-y-3 text-sm"
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className={classNames(
                        tier.featured ? "text-indigo-400" : "text-indigo-600",
                        "h-6 w-5 flex-none"
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={routes.register}
                className="text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-indigo-600 mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Get Started today
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
