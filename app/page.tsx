import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900">
          Content Platform
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A production-grade content platform with posts, threaded comments,
          tags, JWT authentication, and role-based access control.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/register"
            className="rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700"
          >
            Get Started
          </Link>
          <Link
            href="/login"
            className="rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Log In
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">Secure Auth</h3>
            <p className="mt-1 text-sm text-gray-600">
              JWT access + refresh tokens, bcrypt hashing, role-based
              permissions.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">Threaded Comments</h3>
            <p className="mt-1 text-sm text-gray-600">
              Nested discussion threads on every post, with full CRUD.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">Tagging System</h3>
            <p className="mt-1 text-sm text-gray-600">
              Many-to-many tag relationships for content organization.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
