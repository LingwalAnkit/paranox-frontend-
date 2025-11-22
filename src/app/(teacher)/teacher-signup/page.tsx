"use client";
import Link from "next/link";
import Image from "next/image";
import bgImage from "../../../../public/logo/teacherAuthImage.jpg";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    email: "",
    password: "",
    age: "",
    class: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    email: "",
    password: "",
    age: "",
    class: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "firstName":
      case "lastName":
        // Name cannot contain numbers
        if (/\d/.test(value)) {
          return `${
            name.charAt(0).toUpperCase() + name.slice(1)
          } cannot contain numbers`;
        }
        // Name should be at least 2 characters
        if (value.trim().length < 2) {
          return `${
            name.charAt(0).toUpperCase() + name.slice(1)
          } must be at least 2 characters`;
        }
        return "";

      case "subject":
        // Subject cannot be empty and cannot contain numbers
        if (/\d/.test(value)) {
          return "Subject cannot contain numbers";
        }
        if (value.trim().length < 2) {
          return "Subject must be at least 2 characters";
        }
        return "";

      case "email":
        // Email validation with specific domains
        const emailRegex = /^[^\s@]+@[^\s@]+\.(com|yahoo|in)$/i;
        if (!emailRegex.test(value)) {
          return "Email must end with .com, .yahoo, or .in";
        }
        return "";

      case "password":
        // Password must be at least 6 characters
        if (value.length < 6) {
          return "Password must be at least 6 characters long";
        }
        return "";

      case "age":
        // Age validation
        const ageNum = parseInt(value, 10);
        if (isNaN(ageNum)) {
          return "Age must be a number";
        }
        if (ageNum > 100) {
          return "Age cannot exceed 100";
        }
        if (ageNum < 0) {
          return "Age cannot be negative";
        }
        return "";

      case "class":
        // Class validation
        const classNum = parseInt(value, 10);
        if (isNaN(classNum)) {
          return "Class must be a number";
        }
        if (classNum > 12) {
          return "Class cannot exceed 12";
        }
        if (classNum < 1) {
          return "Class must be between 1 and 12";
        }
        return "";

      default:
        return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Update form data
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate the field
    const fieldError = validateField(name, value);

    // Update errors
    setErrors((prev) => ({
      ...prev,
      [name]: fieldError,
    }));
  };

  const validateForm = () => {
    const newErrors = {
      firstName: validateField("firstName", formData.firstName),
      lastName: validateField("lastName", formData.lastName),
      subject: validateField("subject", formData.subject),
      email: validateField("email", formData.email),
      password: validateField("password", formData.password),
      age: validateField("age", formData.age),
      class: validateField("class", formData.class),
    };

    setErrors(newErrors);

    // Check if any errors exist
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate the entire form
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("/api/auth/teacher/signup", {
        ...formData,
        age: parseInt(formData.age),
      });

      if (response.status === 201) {
        router.push("/teacher-login");
      }
    } catch (error: any) {
      setError(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex items-center justify-center p-4"
    >
      <Image
        src={bgImage}
        alt="Background"
        fill
        priority
        className="object-cover"
      />
      <div className="relative w-full max-w-md p-8 rounded-2xl bg-white/20 backdrop-blur-lg shadow-xl border border-white/30">
        <div className="flex flex-col gap-6 w-full max-w-md">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">
            Create Account
          </h1>
          {error && (
            <div className="bg-red-100 text-red-600 p-3 rounded-lg text-center">
              {error}
            </div>
          )}
          <div className="flex gap-4">
            <div className="w-full">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 text-black rounded-lg border ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 hover:bg-gray-100`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>
            <div className="w-full">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 text-black rounded-lg border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 hover:bg-gray-100`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 text-black rounded-lg border ${
                errors.subject ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 hover:bg-gray-100`}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
            )}
          </div>
          <div className="flex gap-4">
            <div className="w-full">
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                required
                min="0"
                className={`w-full px-4 py-3 text-black rounded-lg border ${
                  errors.age ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 hover:bg-gray-100`}
              />
              {errors.age && (
                <p className="text-red-500 text-sm mt-1">{errors.age}</p>
              )}
            </div>
            <div className="w-full">
              <input
                type="text"
                name="class"
                placeholder="Class"
                value={formData.class}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 text-black rounded-lg border ${
                  errors.class ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 hover:bg-gray-100`}
              />
              {errors.class && (
                <p className="text-red-500 text-sm mt-1">{errors.class}</p>
              )}
            </div>
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 text-black rounded-lg border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 hover:bg-gray-100`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
              className={`w-full px-4 py-3 text-black rounded-lg border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 hover:bg-gray-100`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold transition-all duration-200 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
          <Link href="/teacher-login" className="w-full">
            <button
              type="button"
              className="w-full py-3 rounded-lg bg-gray-100 text-gray-700 font-semibold transition-all duration-200 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            >
              Already have an account? Log In
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
}
