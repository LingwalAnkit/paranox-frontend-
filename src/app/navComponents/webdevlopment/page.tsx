import React from "react";

interface Course {
  title: string;
  description: string;
  duration: string; // e.g., "3 months"
  level: string; // e.g., "Beginner", "Intermediate", "Advanced"
}

const courses: Course[] = [
  {
    title: "Introduction to HTML and CSS",
    description: "Learn the basics of building web pages using HTML and CSS, including layouts, styling, and responsive design.",
    duration: "2 months",
    level: "Beginner",
  },
  {
    title: "JavaScript for Web Development",
    description: "Master the core concepts of JavaScript, including DOM manipulation, events, and ES6+ features.",
    duration: "3 months",
    level: "Intermediate",
  },
  {
    title: "Frontend Frameworks: React Basics",
    description: "Build dynamic user interfaces using React, including component-based architecture and state management.",
    duration: "4 months",
    level: "Intermediate",
  },
  {
    title: "Backend Development with Node.js and Express",
    description: "Learn to build server-side applications with Node.js and Express, including RESTful APIs and database integration.",
    duration: "4 months",
    level: "Advanced",
  },
  {
    title: "Full-Stack Web Development",
    description: "Combine frontend and backend development skills to create full-stack web applications.",
    duration: "6 months",
    level: "Advanced",
  },
];

const WebDevelopmentCourses: React.FC = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#3498db" }}>Technical Courses: Web Development</h1>
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
            <h2 style={{ color: "#2980b9" }}>{course.title}</h2>
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

export default WebDevelopmentCourses;