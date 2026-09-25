"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const router = useRouter();
  const { user, logout } = useAuth();

  function handleLogout() {
    logout();
    router.push("/login");
  }

  return (
    <nav className="border-b border-gray-200 bg-white px-6 py-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link href="/" className="text-lg font-bold text-gray-900">
          Content Platform
        </Link>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Link
                href="/posts"
                className="text-sm text-gray-700 hover:text-gray-900"
              >
                Posts
              </Link>
              <span className="text-sm text-gray-500">{user.name}</span>
              <button
                onClick={handleLogout}
                className="text-sm font-medium text-red-600 hover:text-red-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm text-gray-700 hover:text-gray-900"
              >
                Log In
              </Link>
              <Link
                href="/register"
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
