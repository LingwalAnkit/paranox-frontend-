"use client";

import { useState } from "react";
import axios from "axios";
import SideBarComponent from "@/component/sidebar/sidebar";
import { Camera, FileUp } from "lucide-react";

const SUBJECTS = [
  "Mathematics",
  "Science",
  "History",
  "Geography",
  "English",
  "Computer Science",
];

// Store API key in environment variable or in a secure way
// Don't hardcode the API key in your frontend code
const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

export default function QuestionForm() {
  const [question, setQuestion] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [useGemini, setUseGemini] = useState<boolean>(true); // Toggle between API options

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResponse("");

    try {
      if (useGemini) {
        // Use Gemini API directly
        await callGeminiAPI();
      } else {
        // Use your existing backend
        const res = await axios.post("http://localhost:5001/ask", {
          question,
          subject,
        });
        setResponse(res.data.response);
      }
    } catch (err: any) {
      console.error("Error:", err);
      setError(err.response?.data?.error || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const callGeminiAPI = async () => {
    try {
      // Construct the prompt with the subject for context
      const prompt = ` Can you please answer the question from Subject: ${subject}\n and Question: ${question} be precise, clear and concise. Also if the question is not from the subject then please inform that the question is not from the subject and it belong to other subject.`;

      // Call Gemini API
      const response = await axios.post(
        `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
        {
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Extract the response text
      const generatedText = response.data.candidates[0].content.parts[0].text;
      setResponse(generatedText);
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      if (error.response) {
        setError(
          `Gemini API Error: ${
            error.response.data.error?.message || "Unknown error"
          }`
        );
      } else {
        setError("Failed to connect to Gemini API");
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setSelectedFiles(files);
    }
  };

  return (
    <div className="flex h-screen bg-gray-900">
      <SideBarComponent />
      <div className="flex-1 overflow-y-auto dark:bg-neutral-800">
        <div className="min-h-screen bg-gray-300 flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-2xl">
            {/* Header */}
            <div className="bg-white shadow-lg rounded-t-xl p-6 border-b border-gray-200">
              <h1 className="text-3xl font-bold text-gray-800 text-center">
                Doubt Solver
              </h1>
              <p className="text-center text-gray-500 mt-2">
                Get comprehensive answers across various subjects
              </p>
            </div>

            {/* Main Form Container */}
            <div className="bg-white shadow-2xl rounded-b-xl overflow-hidden">
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                {/* API Toggle */}
                <div className="flex items-center justify-end">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={useGemini}
                      onChange={() => setUseGemini(!useGemini)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-700">
                      {useGemini ? "Using Gemini API" : "Using Local API"}
                    </span>
                  </label>
                </div>

                {/* Subject Selector */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Select Subject
                  </label>
                  <div className="relative">
                    <select
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      className="w-full appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="">Choose a subject</option>
                      {SUBJECTS.map((subj) => (
                        <option key={subj} value={subj}>
                          {subj}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Question Input */}
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="question"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Question
                    </label>
                    <div className="relative">
                      <textarea
                        id="question"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        required
                        rows={4}
                        className="w-full border border-gray-300 rounded-md p-3 pr-24 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
                        placeholder="Type your detailed question here..."
                      />
                      <div className="absolute right-2 top-2 flex space-x-2">
                        <label
                          htmlFor="photo-upload"
                          className="cursor-pointer hover:bg-gray-100 p-2 rounded-full"
                          title="Add Photo"
                        >
                          <Camera size={20} className="text-gray-600" />
                          <input
                            type="file"
                            id="photo-upload"
                            accept="image/*"
                            className="hidden"
                            onChange={handleFileChange}
                          />
                        </label>
                        <label
                          htmlFor="file-upload"
                          className="cursor-pointer hover:bg-gray-100 p-2 rounded-full"
                          title="Add File"
                        >
                          <FileUp size={20} className="text-gray-600" />
                          <input
                            type="file"
                            id="file-upload"
                            multiple
                            className="hidden"
                            onChange={handleFileChange}
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  {selectedFiles.length > 0 && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-600">
                        Selected files:{" "}
                        {selectedFiles.map((file) => file.name).join(", ")}
                      </p>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 flex items-center justify-center"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Get Answer"
                    )}
                  </button>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 border border-red-300 text-red-800 px-4 py-3 rounded-md">
                    <p className="text-sm">{error}</p>
                  </div>
                )}

                {/* Response Section */}
                {response && (
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      Answer
                    </h3>
                    <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {response}
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
