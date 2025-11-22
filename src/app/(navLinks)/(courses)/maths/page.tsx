import React from "react";

// Define the course interface
interface Course {
  title: string;
  description: string;
  duration: string; // e.g., "3 months"
  level: string; // e.g., "Beginner", "Intermediate", "Advanced"
}

// List of courses
const courses: Course[] = [
  {
    title: "Foundations of Mathematics",
    description: "Explore the basics of mathematical logic, set theory, and foundational concepts that underpin modern mathematics.",
    duration: "3 months",
    level: "Beginner",
  },
  {
    title: "Linear Algebra and Its Applications",
    description: "Understand vectors, matrices, determinants, eigenvalues, and their applications in various fields.",
    duration: "4 months",
    level: "Intermediate",
  },
  {
    title: "Abstract Algebra",
    description: "Dive into group theory, rings, fields, and their role in advanced mathematical structures.",
    duration: "5 months",
    level: "Advanced",
  },
  {
    title: "Real Analysis",
    description: "Study the rigorous theory of calculus, sequences, series, and continuity in the real number system.",
    duration: "6 months",
    level: "Advanced",
  },
  {
    title: "Differential Equations",
    description: "Learn about ordinary and partial differential equations and their use in modeling physical systems.",
    duration: "4 months",
    level: "Intermediate",
  },
];

// Main component
const MathematicsCourses: React.FC = () => {
  return (
    <div className="font-sans p-8">
      <h1 className="text-center text-4xl font-semibold text-blue-800 mb-8">Theoretical Mathematics Courses</h1>
      
      <div className="flex flex-wrap gap-6 justify-center">
        {courses.map((course, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-6 w-80 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl text-blue-600 font-bold">{course.title}</h2>
            <p className="text-gray-700 mt-2">{course.description}</p>
            <p className="mt-4 font-medium">
              <strong>Duration:</strong> {course.duration}
            </p>
            <p className="mt-2 font-medium">
              <strong>Level:</strong> {course.level}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MathematicsCourses;
