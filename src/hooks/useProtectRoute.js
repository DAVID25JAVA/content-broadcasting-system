'use client'
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/AuthContext"
import { useEffect } from "react"


export function useProtectedRoute(allowedRole) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    if (!user) {
      router.replace('/login');
      return;
    }

    if (user.role !== allowedRole) {
      if (user.role === 'teacher') {
        router.replace('/teacher/dashboard');
      } else if (user.role === 'principal') {
        router.replace('/principal/dashboard');
      }
    }
  }, [user, loading, allowedRole, router]);

  return { user, loading };
}