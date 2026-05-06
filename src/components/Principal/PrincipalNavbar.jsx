'use client'
import React from 'react'
import { useAuth } from '@/context/AuthContext'

function PrincipalNavbar() {
  const { user, logout } = useAuth();
  return (
     <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-sky-500 flex items-center justify-between px-6 shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
          <span className="text-sky-500 font-bold text-sm">CB</span>
        </div>
        <span className="font-bold text-white text-lg">ContentBroadcast</span>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-semibold text-white">{user?.name}</p>
          <p className="text-xs text-sky-100 capitalize">{user?.role}</p>
        </div>
        <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
          <span className="text-sky-500 font-bold text-sm">
            {user?.name?.charAt(0).toUpperCase()}
          </span>
        </div>
        <button
          onClick={logout}
          className="px-4 py-2 cursor-pointer text-sm text-sky-500 bg-white rounded-lg hover:bg-sky-50 font-medium transition"
        >
          Logout
        </button>
      </div>
    </nav>
  )
}

export default  PrincipalNavbar