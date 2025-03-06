"use client";
import React, { useState } from "react";
import Link from "next/link";
import routes from "./routes";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useAuth } from "./context/AuthContext";
import { useRouter } from "next/navigation";

const Header = () => {
  const {user,logout} = useAuth();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleLogout = ()=>{
    let confirm = window.confirm("Are you sure you want to logout?");
    if(confirm){logout();
    router.push(routes.home)}
  }
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href={routes.home} className="-m-1.5 p-1.5">
            <img alt="UroodX logo" src="/og-image.png" className="h-8 w-auto" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href={routes.quotes}
            className="text-sm/6 font-semibold text-gray-900"
          >
            Get Quote
          </Link>

          <Link
            href={routes.tracking}
            className="text-sm/6 font-semibold text-gray-900"
          >
            Track Order
          </Link>
          <Link
            href={routes.contact}
            className="text-sm/6 font-semibold text-gray-900"
          >
            Contact
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {user ? (
            <>
              <button
                onClick={handleLogout}
                className="text-sm/6 font-semibold text-gray-900"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href={routes.login}
              className="text-sm/6 font-semibold text-gray-900"
            >
              Log in
            </Link>
          )}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href={routes.home} className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="UroodX logo"
                src="og-image.png"
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href={routes.quotes}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Get Quote
                </Link>

                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href={routes.tracking}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Track Order
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href={routes.contact}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </Link>
              </div>
              <div className="py-6">
                {user ? (
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={handleLogout}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link
                    href={routes.login}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
