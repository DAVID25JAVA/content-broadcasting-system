'use client';
import Wrapper from "@/components/Wrapper";
import React, { useState } from "react";
import { User, Mail, Lock, Loader2, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "@/context/AuthContext";
import { authService } from "@/services/auth.services";
 

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
});

function Page() {
  const { login } = useAuth();
  const [serverError, setServerError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

 
  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      setServerError("");
      const response = await authService.login(data.email, data.password);
      console.log("response--->", response);
      login(response.user, response.token);  
    } catch (error) {
      setServerError("Invalid email or password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

 
  

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

        
        {serverError && (
          <div className="mb-5 flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-lg">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{serverError}</span>
          </div>
        )}

        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          
          
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
                type="email"
                placeholder="you@example.com"
                {...register("email")}
                className={`w-full pl-9 pr-4 py-2.5 text-sm border rounded-lg outline-none focus:ring-2 transition-all duration-150 ${
                  errors.email
                    ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                    : "border-gray-300 focus:border-sky-400 focus:ring-sky-100"
                }`}
              />
            </div>
           
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.email.message}
              </p>
            )}
          </div>

          
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
                type="password"
                placeholder="Enter your password"
                {...register("password")}
                className={`w-full pl-9 pr-4 py-2.5 text-sm border rounded-lg outline-none focus:ring-2 transition-all duration-150 ${
                  errors.password
                    ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                    : "border-gray-300 focus:border-sky-400 focus:ring-sky-100"
                }`}
              />
            </div>
            
            {errors.password && (
              <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.password.message}
              </p>
            )}
          </div>

          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-xs text-gray-500 space-y-1">
            <p className="font-medium text-gray-600">Test Credentials:</p>
            <p> Principal: principal@school.com / password123</p>
            <p> Teacher: teacher@school.com / password123</p>
          </div>

          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2.5 px-4 bg-sky-500 hover:bg-orange-500 disabled:bg-sky-300 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
      </div>
    </Wrapper>
  );
}

export default Page;