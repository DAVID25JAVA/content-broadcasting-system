"use client";
import React from "react";
import { useProtectedRoute } from "@/hooks/useProtectRoute";

function page() {
  const { user, loading } = useProtectedRoute("teacher");

 
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-500"></div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800">
        Welcome, {user.name}!
      </h1>
    </div>
  );
}

export default page;
