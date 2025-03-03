"use client"
import React, { useState } from "react";

export default function Auth() {
  // view can be 'login', 'signup', or 'forgot'
  const [view, setView] = useState("login");

  // State for login form
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  // State for signup form
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // State for forgot password form
  const [forgotEmail, setForgotEmail] = useState("");

  // Handlers for login
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", loginData);
    // Insert your login API logic here
  };

  // Handlers for signup
  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Signing up with:", signupData);
    // Insert your signup API logic here
  };

  // Handlers for forgot password
  const handleForgotSubmit = (e) => {
    e.preventDefault();
    console.log("Sending reset link to:", forgotEmail);
    // Insert your forgot password API logic here
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-24 lg:px-16">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {view === "login" && (
          <>
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
                  <div className="text-sm">
                    <button
                      type="button"
                      onClick={() => setView("forgot")}
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </button>
                  </div>
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
                onClick={() => setView("signup")}
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Register now
              </button>
            </p>
          </>
        )}

        {view === "signup" && (
          <>
            <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
              Create a new account
            </h2>
            <form onSubmit={handleSignupSubmit} className="mt-10 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={signupData.name}
                    onChange={handleSignupChange}
                    className="border border-gray-300 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email-signup" className="block text-sm font-medium text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email-signup"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={signupData.email}
                    onChange={handleSignupChange}
                    className="border border-gray-300 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password-signup" className="block text-sm font-medium text-gray-900">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password-signup"
                    name="password"
                    type="password"
                    required
                    autoComplete="new-password"
                    value={signupData.password}
                    onChange={handleSignupChange}
                    className="border border-gray-300 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-900">
                  Confirm Password
                </label>
                <div className="mt-2">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    autoComplete="new-password"
                    value={signupData.confirmPassword}
                    onChange={handleSignupChange}
                    className="border border-gray-300 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>
              </div>
            </form>
            <p className="mt-10 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setView("login")}
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Sign in
              </button>
            </p>
          </>
        )}

        {view === "forgot" && (
          <>
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
                    autoComplete="email"
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
                onClick={() => setView("login")}
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Sign in
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
