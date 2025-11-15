import React from "react";

interface Course {
  title: string;
  description: string;
  duration: string; // e.g., "3 months"
  level: string; // e.g., "Beginner", "Intermediate", "Advanced"
}

const courses: Course[] = [
  {
    title: "Introduction to Physical Chemistry",
    description: "Learn the fundamentals of thermodynamics, kinetics, and quantum mechanics as they apply to chemical systems.",
    duration: "3 months",
    level: "Beginner",
  },
  {
    title: "Organic Chemistry: Structure and Function",
    description: "Explore the structure, reactivity, and mechanisms of organic compounds, including key functional groups.",
    duration: "4 months",
    level: "Intermediate",
  },
  {
    title: "Inorganic Chemistry: Periodicity and Bonding",
    description: "Understand the periodic table, chemical bonding, and coordination chemistry of transition metals.",
    duration: "5 months",
    level: "Intermediate",
  },
  {
    title: "Analytical Chemistry and Instrumentation",
    description: "Dive into quantitative analysis, spectroscopy, chromatography, and other modern analytical techniques.",
    duration: "4 months",
    level: "Advanced",
  },
  {
    title: "Theoretical Chemistry and Computational Methods",
    description: "Study molecular modeling, quantum chemistry, and computational tools used to simulate chemical systems.",
    duration: "6 months",
    level: "Advanced",
  },
];

const ChemistryCourses: React.FC = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#004d40" }}>Theoretical Chemistry Courses</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {courses.map((course, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              width: "300px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2 style={{ color: "#00796b" }}>{course.title}</h2>
            <p>{course.description}</p>
            <p>
              <strong>Duration:</strong> {course.duration}
            </p>
            <p>
              <strong>Level:</strong> {course.level}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChemistryCourses;