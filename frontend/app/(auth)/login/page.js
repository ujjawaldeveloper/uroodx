"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import routes from "../../routes";  // Update the path to reflect the correct structure
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage(data.msg || "Login failed");
      } else {
        login(data);
        setMessage("Login successful!");
        router.push(routes.quotes);
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("An error occurred during login.");
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-24 lg:px-16">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {message && <div className="mb-4 text-center text-sm text-red-600">{message}</div>}
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        <form onSubmit={handleLoginSubmit} className="mt-10 space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={loginData.email}
                onChange={handleLoginChange}
                className="border border-gray-300 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Password
              </label>
              {/* <div className="text-sm">
                <button
                  type="button"
                  onClick={() => router.push(routes.forgot)}
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </button>
              </div> */}
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                value={loginData.password}
                onChange={handleLoginChange}
                className="border border-gray-300 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <button
            type="button"
            onClick={() => router.push(routes.register)}
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Register now
          </button>
        </p>
      </div>
    </div>
  );
}
