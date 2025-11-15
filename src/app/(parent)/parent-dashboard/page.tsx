'use client'
import React, { useState } from "react";

// Dummy data for 10 students with Indian names
const studentsData = [
  {
    id: 1,
    name: "Aarav Sharma",
    pastPerformance: [
      { subject: "Math", score: 85, date: "2024-08-01" },
      { subject: "Science", score: 78, date: "2024-08-05" },
      { subject: "English", score: 92, date: "2024-08-10" },
    ],
    dailyLearningRecords: [
      { date: "2024-12-10", subject: "Math", hours: 2 },
      { date: "2024-12-11", subject: "Science", hours: 1.5 },
    ],
  },
  {
    id: 2,
    name: "Isha Gupta",
    pastPerformance: [
      { subject: "Math", score: 90, date: "2024-07-15" },
      { subject: "Science", score: 85, date: "2024-07-20" },
      { subject: "English", score: 88, date: "2024-07-25" },
    ],
    dailyLearningRecords: [
      { date: "2024-12-10", subject: "Math", hours: 1 },
      { date: "2024-12-11", subject: "English", hours: 1.5 },
    ],
  },
  {
    id: 3,
    name: "Ravi Patel",
    pastPerformance: [
      { subject: "Math", score: 75, date: "2024-09-01" },
      { subject: "Science", score: 82, date: "2024-09-05" },
      { subject: "English", score: 78, date: "2024-09-10" },
    ],
    dailyLearningRecords: [
      { date: "2024-12-10", subject: "Science", hours: 2 },
      { date: "2024-12-11", subject: "Math", hours: 1 },
    ],
  },
  {
    id: 4,
    name: "Priya Singh",
    pastPerformance: [
      { subject: "Math", score: 88, date: "2024-10-01" },
      { subject: "Science", score: 95, date: "2024-10-05" },
      { subject: "English", score: 90, date: "2024-10-10" },
    ],
    dailyLearningRecords: [
      { date: "2024-12-10", subject: "Math", hours: 3 },
      { date: "2024-12-11", subject: "Science", hours: 1.5 },
    ],
  },
  {
    id: 5,
    name: "Arjun Verma",
    pastPerformance: [
      { subject: "Math", score: 80, date: "2024-06-10" },
      { subject: "Science", score: 72, date: "2024-06-15" },
      { subject: "English", score: 85, date: "2024-06-20" },
    ],
    dailyLearningRecords: [
      { date: "2024-12-10", subject: "English", hours: 2 },
      { date: "2024-12-11", subject: "Math", hours: 1 },
    ],
  },
  {
    id: 6,
    name: "Neha Reddy",
    pastPerformance: [
      { subject: "Math", score: 91, date: "2024-07-12" },
      { subject: "Science", score: 93, date: "2024-07-15" },
      { subject: "English", score: 89, date: "2024-07-20" },
    ],
    dailyLearningRecords: [
      { date: "2024-12-10", subject: "Math", hours: 2.5 },
      { date: "2024-12-11", subject: "English", hours: 1 },
    ],
  },
  {
    id: 7,
    name: "Vikram Joshi",
    pastPerformance: [
      { subject: "Math", score: 85, date: "2024-08-11" },
      { subject: "Science", score: 76, date: "2024-08-15" },
      { subject: "English", score: 90, date: "2024-08-20" },
    ],
    dailyLearningRecords: [
      { date: "2024-12-10", subject: "Math", hours: 1.5 },
      { date: "2024-12-11", subject: "Science", hours: 2 },
    ],
  },
  {
    id: 8,
    name: "Sanya Mehta",
    pastPerformance: [
      { subject: "Math", score: 78, date: "2024-07-30" },
      { subject: "Science", score: 82, date: "2024-08-03" },
      { subject: "English", score: 88, date: "2024-08-07" },
    ],
    dailyLearningRecords: [
      { date: "2024-12-10", subject: "Science", hours: 2 },
      { date: "2024-12-11", subject: "Math", hours: 1.5 },
    ],
  },
  {
    id: 9,
    name: "Amit Sharma",
    pastPerformance: [
      { subject: "Math", score: 92, date: "2024-09-10" },
      { subject: "Science", score: 84, date: "2024-09-15" },
      { subject: "English", score: 87, date: "2024-09-20" },
    ],
    dailyLearningRecords: [
      { date: "2024-12-10", subject: "Math", hours: 1.5 },
      { date: "2024-12-11", subject: "English", hours: 2 },
    ],
  },
  {
    id: 10,
    name: "Maya Patel",
    pastPerformance: [
      { subject: "Math", score: 88, date: "2024-10-01" },
      { subject: "Science", score: 85, date: "2024-10-03" },
      { subject: "English", score: 80, date: "2024-10-05" },
    ],
    dailyLearningRecords: [
      { date: "2024-12-10", subject: "Math", hours: 2 },
      { date: "2024-12-11", subject: "Science", hours: 1 },
    ],
  },
];

// Parent Dashboard Component
const ParentDashboard: React.FC = () => {
  // Randomly pick one student from the list
  const [selectedStudent] = useState(
    studentsData[Math.floor(Math.random() * studentsData.length)]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
          Parent Dashboard
        </h1>
        
        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          <div className="bg-blue-600 text-white p-4">
            <h2 className="text-2xl font-semibold">
              {selectedStudent.name} Learning Journey
            </h2>
          </div>
          
          <div className="p-6">
            {/* Past Performance Section */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-blue-700 mb-4 border-b pb-2">
                Past Performance
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-blue-100 text-blue-800">
                      <th className="p-3 text-left">Subject</th>
                      <th className="p-3 text-center">Score</th>
                      <th className="p-3 text-right">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedStudent.pastPerformance.map((performance, index) => (
                      <tr 
                        key={index} 
                        className={`hover:bg-blue-50 ${index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}`}
                      >
                        <td className="p-3 font-medium">{performance.subject}</td>
                        <td className="p-3 text-center">
                          <span className={`
                            px-3 py-1 rounded-full text-xs font-bold
                            ${performance.score >= 90 ? 'bg-green-200 text-green-800' :
                              performance.score >= 80 ? 'bg-blue-200 text-blue-800' :
                              'bg-yellow-200 text-yellow-800'}
                          `}>
                            {performance.score}
                          </span>
                        </td>
                        <td className="p-3 text-right text-gray-600">{performance.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Daily Learning Records Section */}
            <section>
              <h2 className="text-xl font-semibold text-blue-700 mb-4 border-b pb-2">
                Daily Learning Records
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-blue-100 text-blue-800">
                      <th className="p-3 text-left">Date</th>
                      <th className="p-3 text-center">Subject</th>
                      <th className="p-3 text-right">Study Hours</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedStudent.dailyLearningRecords.map((record, index) => (
                      <tr 
                        key={index} 
                        className={`hover:bg-blue-50 ${index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}`}
                      >
                        <td className="p-3 font-medium">{record.date}</td>
                        <td className="p-3 text-center">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">
                            {record.subject}
                          </span>
                        </td>
                        <td className="p-3 text-right">
                          <span className={`
                            px-3 py-1 rounded-full text-xs font-bold
                            ${record.hours >= 2 ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}
                          `}>
                            {record.hours} hours
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;