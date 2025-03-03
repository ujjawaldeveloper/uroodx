"use client"
import React, { useState } from "react";
import Link from "next/link";
import routes from "../app/routes";

const Header = () => {
  // Temporary authentication state; set to true to simulate a logged-in user.
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left side: Logo and navigation links */}
          <div className="flex items-center">
            <Link href={routes.home}>
              <img
                className="h-8 w-auto"
                src="og-image.png"
                alt="UroodX Logo"
              />
            </Link>
            <div className="hidden md:flex ml-10 space-x-4">
              {authenticated ? (
                <>
                  <Link
                    href={routes.dashboard}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href={routes.shipment}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Book Shipment
                  </Link>
                  <Link
                    href={routes.tracking}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Tracking
                  </Link>
                  <Link
                    href={routes.payment}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Payment
                  </Link>
                  <Link
                    href={routes.quotes}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Quotes
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href={routes.home}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Home
                  </Link>
                  <Link
                    href={routes.features}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Features
                  </Link>
                  <Link
                    href={routes.subscription}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Subscription
                  </Link>
                  <Link
                    href={routes.contact}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Contact
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Right side: Auth buttons or profile dropdown */}
          <div className="flex items-center">
            {authenticated ? (
              <div className="flex items-center space-x-4">
                <Link
                  href={routes.profile}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Profile
                </Link>
                <button
                  onClick={() => setAuthenticated(false)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  href={routes.auth}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Login
                </Link>
                <Link
                  href={routes.auth}
                  className="ml-4 px-3 py-2 rounded-md text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-500"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
