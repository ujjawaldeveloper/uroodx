"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import routes from "@/app/routes";

export default function Forgot() {
  const router = useRouter();
  const [forgotEmail, setForgotEmail] = useState("");

  const handleForgotSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending reset link to:", forgotEmail);
    // Implement your reset logic here (e.g., calling an API to send the reset link)
    alert("Reset link sent!");
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-24 lg:px-16">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Reset your password
        </h2>
        <form onSubmit={handleForgotSubmit} className="mt-10 space-y-6">
          <div>
            <label htmlFor="forgotEmail" className="block text-sm font-medium text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="forgotEmail"
                name="forgotEmail"
                type="email"
                required
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                className="border border-gray-300 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send Reset Link
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Remember your password?{" "}
          <button
            type="button"
            onClick={() => router.push(routes.login)}
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}
