"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import routes from "../routes";
import { useAuth } from "../context/AuthContext";

export default function Auth() {
  const {login} = useAuth()
  const router = useRouter();
  const [view, setView] = useState("login");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [forgotEmail, setForgotEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await fetch("http://localhost:4000/v1/admin/login", {
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
        // Save token for later use
        login(data)
        setMessage("Login successful!");
        router.push(routes.admin)
        // Optionally, redirect to dashboard
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("An error occurred during login.");
    }
  };
  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const payload = {
      name: signupData.name,
      email: signupData.email,
      password: signupData.password,
    };
    try {
      const res = await fetch("http://localhost:4000/v1/admin/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage(data.msg || "Signup failed");
      } else {
        setMessage("Registration successful! Please login.");
        setView("login");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setMessage("An error occurred during registration.");
    }
  };
  const handleForgotSubmit = (e) => {
    e.preventDefault();
    console.log("Sending reset link to:", forgotEmail);
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-24 lg:px-16">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {message && (
          <div className="mb-4 text-center text-sm text-red-600">{message}</div>
        )}
        {view === "login" && (
          <>
            <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <form onSubmit={handleLoginSubmit} className="mt-10 space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900"
                >
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
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-900"
                  >
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
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-900"
                >
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
                <label
                  htmlFor="email-signup"
                  className="block text-sm font-medium text-gray-900"
                >
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
                <label
                  htmlFor="password-signup"
                  className="block text-sm font-medium text-gray-900"
                >
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
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-900"
                >
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
                <label
                  htmlFor="forgotEmail"
                  className="block text-sm font-medium text-gray-900"
                >
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
