import React from "react";

interface Course {
  title: string;
  description: string;
  duration: string; // e.g., "3 months"
  level: string; // e.g., "Beginner", "Intermediate", "Advanced"
}

const courses: Course[] = [
  {
    title: "Introduction to Artificial Intelligence",
    description: "Learn the basic concepts of AI, including search algorithms, game theory, and problem-solving techniques.",
    duration: "3 months",
    level: "Beginner",
  },
  {
    title: "Python for Data Science and AI",
    description: "Learn Python programming with a focus on AI, using libraries like NumPy, pandas, and scikit-learn for data analysis.",
    duration: "3 months",
    level: "Beginner",
  },
  {
    title: "Supervised Learning and Regression Models",
    description: "Dive into supervised learning algorithms, focusing on regression models and their applications in prediction tasks.",
    duration: "4 months",
    level: "Intermediate",
  },
  {
    title: "Deep Learning with TensorFlow and Keras",
    description: "Master deep learning techniques and tools like TensorFlow and Keras to build powerful neural networks.",
    duration: "5 months",
    level: "Advanced",
  },
  {
    title: "Reinforcement Learning and Neural Networks",
    description: "Explore the concepts of reinforcement learning, neural networks, and their applications in decision-making tasks.",
    duration: "6 months",
    level: "Advanced",
  },
  {
    title: "Natural Language Processing (NLP)",
    description: "Learn how to process and analyze textual data using NLP techniques like sentiment analysis, language modeling, and machine translation.",
    duration: "4 months",
    level: "Advanced",
  },
  {
    title: "AI for Computer Vision",
    description: "Understand how to build AI models that analyze and interpret visual data, including object detection and image classification.",
    duration: "5 months",
    level: "Advanced",
  },
];

const AIMLCourses: React.FC = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#2ecc71" }}>Artificial Intelligence and Machine Learning Courses</h1>
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
            <h2 style={{ color: "#27ae60" }}>{course.title}</h2>
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

export default AIMLCourses;