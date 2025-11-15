"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Lightbulb, Award, Users, Calendar, MapPin, Send } from "lucide-react";

export default function TechFairPage() {
  const [participationType, setParticipationType] = useState<"exhibit" | "attend">("exhibit");

  const fairCategories = [
    {
      icon: "💻",
      title: "Technology",
      description: "Web apps, mobile apps, IoT projects, AI/ML solutions",
    },
    {
      icon: "🎨",
      title: "Design & Arts",
      description: "Graphic design, digital art, UI/UX portfolios",
    },
    {
      icon: "🔬",
      title: "Science Innovations",
      description: "Physics models, chemistry experiments, biology projects",
    },
    {
      icon: "🌱",
      title: "Social Impact",
      description: "Community solutions, sustainable projects, rural innovations",
    },
  ];

  const benefits = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Win Prizes",
      description: "Cash prizes, certificates, and recognition for top projects",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Network",
      description: "Connect with mentors, industry experts, and fellow innovators",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Get Feedback",
      description: "Receive valuable insights from experienced professionals",
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
              Tech Fair
            </h1>
            <div className="w-32"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-6">
            <Lightbulb className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Showcase Your Innovation
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join our community fair to display technical and non-technical innovations,
            connect with experts, and win exciting prizes!
          </p>
        </div>

        {/* Event Details */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white mb-12 shadow-2xl">
          <h3 className="text-3xl font-bold mb-8 text-center">Upcoming Tech Fair 2025</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <div className="w-14 h-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                <Calendar className="w-7 h-7" />
              </div>
              <div>
                <div className="text-sm opacity-90">Date</div>
                <div className="text-xl font-bold">December 15-16, 2025</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-14 h-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                <MapPin className="w-7 h-7" />
              </div>
              <div>
                <div className="text-sm opacity-90">Location</div>
                <div className="text-xl font-bold">Multiple Rural Centers</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-14 h-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                <Award className="w-7 h-7" />
              </div>
              <div>
                <div className="text-sm opacity-90">Prize Pool</div>
                <div className="text-xl font-bold">₹2,00,000+</div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Fair Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fairCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-105"
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {category.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-12 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Why Participate?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 text-white">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Register Now
          </h3>

          {/* Toggle Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setParticipationType("exhibit")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                participationType === "exhibit"
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              <Lightbulb className="w-5 h-5 inline mr-2" />
              Exhibit Project
            </button>
            <button
              onClick={() => setParticipationType("attend")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                participationType === "attend"
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              <Users className="w-5 h-5 inline mr-2" />
              Attend as Visitor
            </button>
          </div>

          {/* Exhibit Form */}
          {participationType === "exhibit" && (
            <form className="space-y-6">
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    Project Category *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select category</option>
                    <option value="technology">Technology</option>
                    <option value="design">Design & Arts</option>
                    <option value="science">Science Innovations</option>
                    <option value="social">Social Impact</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Title *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your project title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Description *
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe your project, its purpose, and impact..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5 mr-2" />
                Submit Project Registration
              </button>
            </form>
          )}

          {/* Visitor Form */}
          {participationType === "attend" && (
            <form className="space-y-6">
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    Number of Attendees
                  </label>
                  <input
                    type="number"
                    min="1"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="1"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Preferred Location
                </label>
                <select
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select location</option>
                  <option value="center1">Community Center 1</option>
                  <option value="center2">Community Center 2</option>
                  <option value="center3">Community Center 3</option>
                  <option value="any">Any Location</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5 mr-2" />
                Register as Visitor
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
