import Wrapper from "@/components/Wrapper";
import React from "react";
import { User, Mail, Lock } from "lucide-react";

function page() {
  return (
    <Wrapper>
      <div></div>
      <div className="bg-white mx-auto my-8 rounded-2xl border border-gray-200 shadow-sm p-8 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-7">
          <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mx-auto mb-4">
            <User className="w-6 h-6 text-sky-500" />
          </div>
          <h1 className="text-2xl font-semibold text-gray-900">Welcome back</h1>
          <p className="text-sm text-gray-500 mt-1">
            Sign in to your account to continue
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Email address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Mail className="w-4 h-4 text-gray-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all duration-150"
              />
            </div>
            {/* Uncomment when showing validation error */}
            {/* <p className="mt-1.5 text-xs text-red-500">Email is required</p> */}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Lock className="w-4 h-4 text-gray-400" />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all duration-150"
              />
            </div>
            {/* Uncomment when showing validation error */}
            {/* <p className="mt-1.5 text-xs text-red-500">Password is required</p> */}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-sky-500 hover:bg-orange-500 text-white text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </Wrapper>
  );
}

export default page;
