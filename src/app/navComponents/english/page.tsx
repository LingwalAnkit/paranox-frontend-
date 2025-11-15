"use client";
import React from "react";
import Link from "next/link";
import { BookOpen, Clock, ArrowLeft, Languages } from "lucide-react";

interface Course {
  title: string;
  description: string;
  duration: string;
  level: string;
  topics: string[];
  icon: string;
}

const courses: Course[] = [
  {
    title: "English Grammar Basics",
    description: "Master fundamental grammar rules, sentence structure, tenses, and parts of speech for strong foundation.",
    duration: "3 months",
    level: "Beginner",
    topics: ["Parts of Speech", "Tenses", "Sentence Structure", "Punctuation"],
    icon: "📚",
  },
  {
    title: "English for Rural Areas",
    description: "Specially designed English course focusing on practical communication skills for rural communities.",
    duration: "4 months",
    level: "Beginner",
    topics: ["Daily Conversations", "Basic Vocabulary", "Pronunciation", "Listening Skills"],
    icon: "🗣️",
  },
  {
    title: "Reading & Comprehension",
    description: "Improve reading speed, comprehension skills, and ability to understand different types of texts.",
    duration: "3 months",
    level: "Intermediate",
    topics: ["Reading Strategies", "Comprehension", "Vocabulary Building", "Text Analysis"],
    icon: "📖",
  },
  {
    title: "English Writing Skills",
    description: "Learn essay writing, formal letters, creative writing, and effective communication through writing.",
    duration: "4 months",
    level: "Intermediate",
    topics: ["Essay Writing", "Formal Letters", "Creative Writing", "Paragraph Structure"],
    icon: "✍️",
  },
  {
    title: "Spoken English & Communication",
    description: "Build confidence in speaking English with focus on pronunciation, fluency, and conversational skills.",
    duration: "5 months",
    level: "Intermediate",
    topics: ["Pronunciation", "Fluency", "Public Speaking", "Conversation Practice"],
    icon: "🎤",
  },
  {
    title: "Advanced English & Literature",
    description: "Explore English literature, advanced grammar, critical analysis, and sophisticated writing techniques.",
    duration: "6 months",
    level: "Advanced",
    topics: ["Literary Analysis", "Poetry", "Advanced Grammar", "Critical Thinking"],
    icon: "📜",
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Beginner":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "Intermediate":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "Advanced":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  }
};

export default function EnglishCoursesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-10 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-500">
              English Courses
            </h1>
            <div className="w-24"></div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Languages className="w-16 h-16 text-blue-600 dark:text-blue-500" />
          </div>
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Master English Language
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Learn Better English - Especially Designed For Rural Areas. From basics
            to advanced communication skills.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500"
            >
              {/* Card Header with Icon */}
              <div className="bg-blue-600 dark:bg-blue-700 p-6 text-white">
                <div className="text-5xl mb-3">{course.icon}</div>
                <h3 className="text-2xl font-bold">{course.title}</h3>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {course.description}
                </p>

                {/* Topics */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Key Topics:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{course.duration}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-blue-600 dark:bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
