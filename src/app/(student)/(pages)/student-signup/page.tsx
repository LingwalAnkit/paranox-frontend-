// components/StudentSignup.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { FormInput } from "../../../component/auth/signup/FormInput";
import { ErrorAlert } from "../../../component/auth/signup/ErrorAlert";
import { useSignupForm } from "../../../hooks/useSignupForm";
import bgImage from "../../../../public/logo/studentAuthImage.jpg";

interface StudentFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: string;
  class: string;
}

const initialStudentFormData: StudentFormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  age: "",
  class: "",
};

export default function StudentSignup() {
  const { formData, errors, error, loading, handleChange, handleSubmit } =
    useSignupForm({
      initialFormData: initialStudentFormData,
      redirectPath: "/student-login",
    });

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src={bgImage}
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Form Card with backdrop blur */}
      <div className="relative w-full max-w-md p-8 rounded-2xl bg-white/20 backdrop-blur-lg shadow-xl border border-white/30">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          Create Student Account
        </h1>

        {error && <ErrorAlert message={error} />}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <FormInput
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              error={errors.firstName}
              required
            />
            <FormInput
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              error={errors.lastName}
              required
            />
          </div>

          <div className="flex gap-4">
            <FormInput
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              error={errors.age}
              required
              min="0"
            />
            <FormInput
              type="text"
              name="class"
              placeholder="Class"
              value={formData.class}
              onChange={handleChange}
              error={errors.class}
              required
            />
          </div>

          <FormInput
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
          />

          <FormInput
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            required
            minLength={6}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold transition-all duration-200 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-200">
          Already have an account?{" "}
          <Link
            href="/student-login"
            className="font-medium text-blue-300 hover:text-blue-400"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
