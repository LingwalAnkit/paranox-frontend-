"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Heart, DollarSign, Gift, Target } from "lucide-react";

export default function DonationCampsPage() {
  const [donationType, setDonationType] = useState<"monetary" | "resource">("monetary");

  const impactAreas = [
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Learning Resources",
      description: "Books, laptops, tablets, and educational materials for students",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Infrastructure",
      description: "Classrooms, libraries, computer labs, and internet connectivity",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Scholarships",
      description: "Financial aid for deserving students from rural backgrounds",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Teacher Training",
      description: "Professional development programs for rural educators",
      color: "from-orange-500 to-amber-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/navComponents/contribute"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Contribute
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Donation Camps
            </h1>
            <div className="w-32"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mb-6">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Give the Gift of Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your generous donations help provide essential resources and opportunities
            to students in rural communities.
          </p>
        </div>

        {/* Impact Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${area.color} rounded-full mb-4 text-white`}>
                {area.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {area.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Donation Options */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            How Would You Like to Contribute?
          </h3>
          
          {/* Toggle Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setDonationType("monetary")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                donationType === "monetary"
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              <DollarSign className="w-5 h-5 inline mr-2" />
              Monetary Donation
            </button>
            <button
              onClick={() => setDonationType("resource")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                donationType === "resource"
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              <Gift className="w-5 h-5 inline mr-2" />
              Resource Donation
            </button>
          </div>

          {/* Monetary Donation Section */}
          {donationType === "monetary" && (
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Choose a donation amount or enter a custom amount
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {["₹500", "₹1,000", "₹2,500", "₹5,000"].map((amount) => (
                    <button
                      key={amount}
                      className="py-4 px-6 bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-lg font-semibold text-gray-900 dark:text-white transition-colors"
                    >
                      {amount}
                    </button>
                  ))}
                </div>
                <div className="max-w-md mx-auto mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Custom Amount (₹)
                  </label>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Proceed to Payment
              </button>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                All donations are tax-deductible under Section 80G
              </p>
            </div>
          )}

          {/* Resource Donation Section */}
          {donationType === "resource" && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <p className="text-gray-600 dark:text-gray-300">
                  Fill out the form below to donate educational resources
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Resource Type *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select type</option>
                    <option value="books">Books</option>
                    <option value="electronics">Electronics (Laptops/Tablets)</option>
                    <option value="stationery">Stationery</option>
                    <option value="furniture">Furniture</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Description of Resources *
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please describe the resources you'd like to donate..."
                />
              </div>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Submit Donation Request
              </button>
            </div>
          )}
        </div>

        {/* Impact Statistics */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">Your Impact So Far</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-bold mb-2">₹15L+</div>
              <div className="text-blue-100">Total Donations Received</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Schools Supported</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100">Students Benefited</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
