import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

function TimelineItem({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={
        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }
      }
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative"
    >
      <div
        className={`flex items-center gap-8 ${
          isEven ? "flex-row" : "flex-row-reverse"
        }`}
      >
        {/* Content Card */}
        <div className="flex-1">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
          </div>
        </div>

        {/* Timeline Dot */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="w-4 h-4 bg-blue-600 dark:bg-blue-500 rounded-full z-10"
          />
        </div>

        {/* Empty space for alternating layout */}
        <div className="flex-1" />
      </div>
    </motion.div>
  );
}

export function CardHoverEffectDemo() {
  const currentLanguage = useSelector(
    (state: RootState) => state.translation.currentLanguage
  );

  return (
    <div className="bg-white dark:bg-black py-12">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-7xl font-bold text-center mb-16 text-blue-900 dark:text-white"
        >
          Our Features
        </motion.h2>
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-700" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <TimelineItem key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const projects = [
  {
    title: "Access Educational Content",
    description:
      "Explore a wide range of educational materials designed for students in rural areas. Content is aligned with the curriculum and is available in multiple languages for easy understanding.",
  },
  {
    title: "Interactive Lessons",
    description:
      "Engage in interactive, easy-to-understand lessons that make learning fun and effective. These lessons are designed to cater to different learning styles and help students grasp concepts quickly.",
  },
  {
    title: "Doubt-Solving Section",
    description:
      "Have your questions answered in real time through our dedicated doubt-solving section. Experts and peers collaborate to clarify any uncertainties and enhance your learning experience.",
  },
  {
    title: "Track Performance and Progress",
    description:
      "Monitor your academic progress with detailed reports that show your strengths and areas for improvement. This feature helps you stay on track with your learning goals.",
  },
  {
    title: "Access Educational Content Offline",
    description:
      "Download and access educational content even without an internet connection. This feature ensures uninterrupted learning in areas with limited or no connectivity.",
  },
  {
    title: "AI-Personalized Recommendations",
    description:
      "Receive personalized content recommendations powered by AI. Our system adapts to your learning style and preferences to suggest relevant lessons and activities.",
  },
  {
    title: "Feedback and Complaint System",
    description:
      "Provide feedback on the platform and raise any issues through our feedback and complaint system. We value your input and strive to improve the platform continuously based on your experience.",
  },
  {
    title: "Student and Teacher Community for Discussions and Meetups",
    description:
      "Join a vibrant community where students and teachers can engage in discussions, exchange ideas, and participate in virtual meetups. Strengthen your learning through collaboration and shared knowledge.",
  },
  {
    title: "AI-Based Attendance System",
    description:
      "Leverage our AI-powered attendance system that can be easily integrated into school infrastructure. Track student attendance efficiently, ensuring accuracy and minimizing manual effort.",
  },
];
