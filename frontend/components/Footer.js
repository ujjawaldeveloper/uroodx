import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Links */}
          <div className="mb-4 flex space-x-4">
            <Link className="text-gray-400 hover:text-white" href="/contact">
              Contact
            </Link>
            <span className="text-gray-500">|</span>
            <Link className="text-gray-400 hover:text-white" href="/privacy">
              Privacy Policy
            </Link>
            <span className="text-gray-500">|</span>
            <Link className="text-gray-400 hover:text-white" href="/terms">
              Terms of service
            </Link>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              {/* Replace with actual icons or images */}
              FB
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              TW
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">LinkedIn</span>
              LI
            </a>
          </div>
          {/* Chatbot / Talk to Me Button */}
          <div>
            <a
              href="#"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
            >
              Talk to Me
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
