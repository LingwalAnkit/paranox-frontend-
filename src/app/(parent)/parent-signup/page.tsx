"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import {
  UserIcon,
  EnvelopeIcon,
  LockClosedIcon,
  CalendarDaysIcon,
  AcademicCapIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";

export default function Signup() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: "",
    class: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
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
        if (/\d/.test(value)) {
          return `${
            name.charAt(0).toUpperCase() + name.slice(1)
          } cannot contain numbers`;
        }
        if (!/^[A-Za-z\s]+$/.test(value)) {
          return `${
            name.charAt(0).toUpperCase() + name.slice(1)
          } must contain only letters`;
        }
        if (value.trim().length < 2) {
          return `${
            name.charAt(0).toUpperCase() + name.slice(1)
          } must be at least 2 characters`;
        }
        return "";

      case "email":
        const emailRegex =
          /^[^\s@]+@(gmail\.com|yahoo\.com|yahoo\.in|[^\s@]+\.in)$/i;
        if (!emailRegex.test(value)) {
          return "Please enter a valid email address";
        }
        return "";

      case "password":
        if (value.length < 6) {
          return "Password must be at least 6 characters long";
        }
        if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/.test(value)) {
          return "Password must include uppercase, lowercase, and number";
        }
        return "";

      case "age":
        const ageNum = parseInt(value, 10);
        if (isNaN(ageNum) || ageNum < 1 || ageNum > 100) {
          return "Please enter a valid age (1-100)";
        }
        return "";

      case "class":
        const classNum = parseInt(value, 10);
        if (isNaN(classNum) || classNum < 1 || classNum > 12) {
          return "Please enter a valid class (1-12)";
        }
        return "";

      default:
        return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const fieldError = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: fieldError,
    }));
  };

  const validateForm = () => {
    const newErrors = {
      firstName: validateField("firstName", formData.firstName),
      lastName: validateField("lastName", formData.lastName),
      email: validateField("email", formData.email),
      password: validateField("password", formData.password),
      age: validateField("age", formData.age),
      class: validateField("class", formData.class),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("/api/parent-signup", {
        ...formData,
        age: parseInt(formData.age),
      });

      if (response.status === 201) {
        router.push("/parent-login");
      }
    } catch (error: any) {
      setError(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const InputField = ({
    icon: Icon,
    type = "text",
    name,
    placeholder,
    value,
    error,
    showPasswordToggle = false,
  }: {
    icon: any;
    type?: string;
    name: string;
    placeholder: string;
    value: string;
    error: string;
    showPasswordToggle?: boolean;
  }) => (
    <div className="space-y-1">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type={
            showPasswordToggle ? (showPassword ? "text" : "password") : type
          }
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required
          className={`block w-full pl-10 pr-3 py-3 border ${
            error
              ? "border-red-300 focus:border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          } rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors duration-200 bg-white`}
        />
        {showPasswordToggle && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            ) : (
              <EyeIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            )}
          </button>
        )}
      </div>
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Join us today and get started
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="bg-white py-8 px-4 shadow-sm sm:rounded-lg sm:px-10 border border-gray-200">
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                icon={UserIcon}
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                error={errors.firstName}
              />
              <InputField
                icon={UserIcon}
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                error={errors.lastName}
              />
            </div>

            <InputField
              icon={EnvelopeIcon}
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              error={errors.email}
            />

            <InputField
              icon={LockClosedIcon}
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              error={errors.password}
              showPasswordToggle={true}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                icon={CalendarDaysIcon}
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                error={errors.age}
              />
              <InputField
                icon={AcademicCapIcon}
                name="class"
                placeholder="Class (1-12)"
                value={formData.class}
                error={errors.class}
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {loading ? (
                  <div className="flex items-center">
                    <div className="animate-spin -ml-1 mr-3 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                    Creating account...
                  </div>
                ) : (
                  "Create account"
                )}
              </button>
            </div>

            <div className="text-center">
              <span className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/parent-login"
                  className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200"
                >
                  Sign in
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
