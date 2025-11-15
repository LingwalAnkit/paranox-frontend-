import React from "react";

interface Course {
  title: string;
  description: string;
  duration: string; // e.g., "3 months"
  level: string; // e.g., "Beginner", "Intermediate", "Advanced"
}

const courses: Course[] = [
  {
    title: "Introduction to Graphic Design",
    description: "Learn the fundamentals of graphic design, including typography, color theory, and design principles using tools like Adobe Photoshop.",
    duration: "3 months",
    level: "Beginner",
  },
  {
    title: "UI/UX Design Basics",
    description: "Understand the principles of user interface and user experience design, focusing on usability, wireframing, and prototyping.",
    duration: "4 months",
    level: "Intermediate",
  },
  {
    title: "Web Design and Responsive Layouts",
    description: "Build modern websites with responsive design, focusing on HTML, CSS, and layout techniques for different screen sizes.",
    duration: "3 months",
    level: "Intermediate",
  },
  {
    title: "Advanced Adobe Illustrator Techniques",
    description: "Master Adobe Illustrator to create vector-based designs, including logos, illustrations, and complex graphics.",
    duration: "4 months",
    level: "Advanced",
  },
  {
    title: "UX/UI Design for Mobile Apps",
    description: "Learn how to design user-friendly and aesthetically pleasing mobile applications, focusing on app layout, navigation, and user testing.",
    duration: "5 months",
    level: "Advanced",
  },
];

const DesigningCourses: React.FC = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#f39c12" }}>Designing Courses</h1>
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
            <h2 style={{ color: "#e67e22" }}>{course.title}</h2>
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

export default DesigningCourses;