"use client";

import Link from "next/link";
import { useState } from "react";

function SingUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  console.log(name);
  return (
    <body className="bg-gray-100 flex items-center justify-center h-screen w-full">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <form action="#" method="post" className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="first_name"
              required
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Smith"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="abcdef@gmail.com"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              name="password"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {password !== confirmPassword ? (
              <div className="text-sm p-1 text-red-600">
                Password didn&apos;t match
              </div>
            ) : null}
          </div>
          <button
            type="submit"
            disabled={password !== confirmPassword}
            className={`w-full py-2 rounded-md transition duration-200 ${
              password !== confirmPassword
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            Register
          </button>
        </form>
        <div className="mt-3 flex justify-center items-center">
          <span>Already have an account?</span>
          <Link
            href="/signin"
            className="text-blue-500 hover:text-blue-800 ml-1"
          >
            SignIn
          </Link>
        </div>
      </div>
    </body>
  );
}

export default SingUp;
