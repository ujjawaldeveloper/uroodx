"use client"
import React, { useState } from "react";

const Auth = () => {
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
    terms: false,
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
    // Replace with your login logic
    console.log("Logging in with:", loginData);
  };

  // Handlers for signup
  const handleSignupChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSignupData({
      ...signupData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Replace with your signup logic
    console.log("Signing up with:", signupData);
  };

  // Handlers for forgot password
  const handleForgotChange = (e) => {
    setForgotEmail(e.target.value);
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    // Replace with your forgot password logic
    console.log("Sending reset link to:", forgotEmail);
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        {view === "login" && (
          <div>
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Login</h1>
            <form onSubmit={handleLoginSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => setView("forgot")}
                  className="text-sm text-indigo-600 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
            </form>
            <p className="mt-4 text-center text-gray-600">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => setView("signup")}
                className="text-indigo-600 hover:underline"
              >
                Sign Up
              </button>
            </p>
          </div>
        )}

        {view === "signup" && (
          <div>
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Sign Up</h1>
            <form onSubmit={handleSignupSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={signupData.name}
                  onChange={handleSignupChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={signupData.confirmPassword}
                  onChange={handleSignupChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  checked={signupData.terms}
                  onChange={handleSignupChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                  I agree to the{" "}
                  <span className="text-indigo-600 hover:underline cursor-pointer">Terms &amp; Conditions</span>
                </label>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-4 text-center text-gray-600">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setView("login")}
                className="text-indigo-600 hover:underline"
              >
                Login
              </button>
            </p>
          </div>
        )}

        {view === "forgot" && (
          <div>
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Forgot Password</h1>
            <form onSubmit={handleForgotSubmit} className="space-y-6">
              <div>
                <label htmlFor="forgotEmail" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="forgotEmail"
                  id="forgotEmail"
                  value={forgotEmail}
                  onChange={handleForgotChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
              >
                Send Reset Link
              </button>
            </form>
            <p className="mt-4 text-center text-gray-600">
              Remember your password?{" "}
              <button
                type="button"
                onClick={() => setView("login")}
                className="text-indigo-600 hover:underline"
              >
                Login
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
