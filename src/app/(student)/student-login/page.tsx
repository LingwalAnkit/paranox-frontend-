// components/StudentLogin.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { FormField } from "../../../component/auth/login/FormField";
import { StatusAlert } from "../../../component/auth/login/StatusAlert";
import { useAuthLogin } from "../../../hooks/useAuthLogin";
import bgImage from "../../../../public/assets/authImages/student.jpg"; // your login background

export default function StudentLogin() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    formErrors,
    loading,
    error,
    success,
    handleLogin,
  } = useAuthLogin({
    loginEndpoint: "/api/login",
    profileEndpoint: "/api/student-profile",
    redirectPath: "/student-home",
  });

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src={bgImage}
        alt="Login background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Login Card with frosted effect */}
      <div className="relative w-full max-w-md p-8 rounded-2xl bg-white/20 backdrop-blur-lg shadow-xl border border-white/30">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-2">
            Welcome Back Student
          </h2>
          <p className="text-gray-200">Please sign in to your account</p>
        </div>

        {error && <StatusAlert message={error} type="error" />}
        {success && <StatusAlert message={success} type="success" />}

        <form className="space-y-6 mt-6" onSubmit={handleLogin}>
          <div className="flex flex-col gap-4">
            <FormField
              id="email"
              type="email"
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={formErrors.email}
              autoComplete="email"
              required
            />

            <FormField
              id="password"
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={formErrors.password}
              autoComplete="current-password"
              required
            />
          </div>

          <div className="space-y-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold transition-all duration-200 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>

            <Link href="/student-signup" className="w-full block">
              <button
                type="button"
                className="w-full py-3 rounded-lg bg-gray-100/80 text-gray-900 font-semibold transition-all duration-200 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
              >
                Create New Account
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
