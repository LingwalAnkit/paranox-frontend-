import React from "react";

interface Course {
  title: string;
  description: string;
  duration: string; // e.g., "3 months"
  level: string; // e.g., "Beginner", "Intermediate", "Advanced"
}

const courses: Course[] = [
  {
    title: "Introduction to Classical Mechanics",
    description: "Learn Newton's laws, motion, energy, and the principles of classical physics.",
    duration: "3 months",
    level: "Beginner",
  },
  {
    title: "Electromagnetism and Circuit Theory",
    description: "Explore electric fields, magnetic fields, and their applications in modern circuits.",
    duration: "4 months",
    level: "Intermediate",
  },
  {
    title: "Thermodynamics and Statistical Mechanics",
    description: "Understand heat, work, entropy, and the statistical basis of thermodynamic laws.",
    duration: "5 months",
    level: "Intermediate",
  },
  {
    title: "Quantum Mechanics: Theory and Applications",
    description: "Study wave-particle duality, quantum states, and foundational principles of quantum theory.",
    duration: "6 months",
    level: "Advanced",
  },
  {
    title: "Relativity and Cosmology",
    description: "Discover Einstein's theories of special and general relativity and their implications for the universe.",
    duration: "5 months",
    level: "Advanced",
  },
];

const PhysicsCourses: React.FC = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#2c3e50" }}>Theoretical Physics Courses</h1>
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
            <h2 style={{ color: "#34495e" }}>{course.title}</h2>
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

export default PhysicsCourses;