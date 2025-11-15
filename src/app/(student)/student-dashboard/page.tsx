"use client";

import React from "react";
import Image from "next/image";
import { Book, GraduationCap, Award, Share2 } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import SidebarComponent from "@/component/sidebar/sidebar";
import login from "../../../../public/assets/login.png";

// Type Definitions
interface ProgressData {
  day: string;
  hours: number;
}

interface Subject {
  name: string;
  progress: string;
}

interface RecommendedSubject {
  name: string;
  description: string;
  progress: string;
}

interface Classroom {
  name: string;
  roomID: string;
  icon: React.ReactElement;
}

interface StatItem {
  icon: string;
  label: string;
  value: number;
}

interface User {
  firstName?: string;
  lastName?: string;
}

const SUBJECTS: Subject[] = [
  { name: "Physics", progress: "75%" },
  { name: "Chemistry", progress: "60%" },
  { name: "Mathematics", progress: "85%" },
  { name: "Biology", progress: "50%" },
  { name: "Computer Science", progress: "70%" },
  { name: "English", progress: "100%" },
];

const RECOMMENDED_SUBJECTS: RecommendedSubject[] = [
  {
    name: "Astronomy",
    description: "Explore the universe and the celestial bodies.",
    progress: "30%",
  },
  {
    name: "Geography",
    description:
      "Understand the physical features of the Earth and its atmosphere.",
    progress: "45%",
  },
  {
    name: "Economics",
    description:
      "Study the production, distribution, and consumption of goods and services.",
    progress: "55%",
  },
  {
    name: "Psychology",
    description: "Delve into the science of behavior and mental processes.",
    progress: "40%",
  },
  {
    name: "Art History",
    description: "Discover the evolution of art and its impact on culture.",
    progress: "65%",
  },
];

const STAT_ITEMS: StatItem[] = [
  { icon: "🎓", label: "Enrolled Course", value: 24 },
  { icon: "📚", label: "Lesson", value: 56 },
  { icon: "🏅", label: "Certificates", value: 17 },
];

const CLASSROOMS: Classroom[] = [
  {
    name: "English Class",
    roomID: "english",
    icon: <Book className="w-6 h-6 mr-2" />,
  },
  {
    name: "Physics Class",
    roomID: "phy",
    icon: <Share2 className="w-6 h-6 mr-2" />,
  },
  {
    name: "Chemistry Class",
    roomID: "chem",
    icon: <GraduationCap className="w-6 h-6 mr-2" />,
  },
  {
    name: "Mathematics Class",
    roomID: "math",
    icon: <Award className="w-6 h-6 mr-2" />,
  },
];

// Style Constants
const STYLE_CLASSES = {
  container: "flex h-screen bg-white dark:bg-black",
  mainContent: "flex-1 p-10 overflow-y-auto bg-white dark:bg-black",
  welcomeHeader: "text-2xl font-semibold text-[#12284b] dark:text-[#e2f4fd]",
  welcomeName: "text-4xl",
  userInfo: "flex items-center text-[#12284b] dark:text-[#e2f4fd]",
  userName: "text-2xl",
  avatar: "flex-shrink-0 rounded-full mr-4",
  statCard:
    "bg-blue-200 dark:bg-neutral-700 shadow-md rounded-lg p-6 flex items-center",
  statIcon: "text-3xl mr-4",
  statValue: "text-3xl font-bold text-[#12284b] dark:text-[#e2f4fd]",
  statLabel: "text-[#12284b] dark:dark:text-[#e2f4fd]",
  sectionTitle: "text-xl font-semibold text-[#12284b] dark:text-[#e2f4fd] mb-4",
  classroomButton: `
    flex items-center justify-center 
    px-4 py-3 
    bg-gradient-to-r 
    from-blue-500 to-blue-600 
    text-white 
    rounded-lg 
    shadow-md 
    hover:from-blue-600 hover:to-blue-700 
    transition-all 
    duration-300 
    transform 
    hover:scale-105
    focus:outline-none 
    focus:ring-2 
    focus:ring-blue-400
  `,
  sectionCard: "bg-[#e2f4fd] dark:bg-neutral-700 shadow-md rounded-lg mb-8",
  sectionHeader: "p-6 border-b border-blue-300 dark:border-neutral-600",
  sectionHeaderTitle: "text-xl font-semibold text-blue-900 dark:text-white",
  sectionContent: "p-6",
  subjectCard:
    "flex flex-col justify-between items-start p-4 border border-blue-300 dark:border-neutral-600 rounded-lg shadow-md bg-blue-300 dark:bg-neutral-600",
  subjectName: "text-lg font-semibold text-blue-900 dark:text-white",
  subjectProgress: "text-blue-700 dark:text-gray-300",
  progressBar: "bg-blue-600 text-white text-center rounded-lg",
  progressLabel: "text-center text-xs mt-1 text-blue-700 dark:text-gray-300",
  recommendedCard: `
    p-4 
    border border-blue-300 
    dark:border-neutral-600 
    rounded-lg 
    shadow-md 
    bg-blue-300 
    dark:bg-neutral-600 
    transition-all 
    duration-300 
    hover:scale-105
  `,
  recommendedTitle: "text-lg font-semibold text-blue-900 dark:text-white",
  recommendedDescription: "text-blue-700 dark:text-gray-300 mt-2",
  recommendedProgress: "text-blue-800 dark:text-blue-400 font-semibold",
} as const;

// Utility Functions
const generateClassroomUrl = (
  roomID: string,
  userFirstName?: string
): string => {
  const baseUrl = process.env.NEXT_PUBLIC_LOCAL;
  return `${baseUrl}/?role=student&roomID=${roomID}&userID=${userFirstName}`;
};

// Component Functions
const UserWelcomeSection: React.FC<{ user: User | null }> = ({ user }) => (
  <div className="flex justify-between items-center mb-8">
    <h2 className={STYLE_CLASSES.welcomeHeader}>
      Welcome back, <br />
      <span className={STYLE_CLASSES.welcomeName}>
        {user?.firstName || "Guest"} 👋
      </span>
    </h2>
    <div className={STYLE_CLASSES.userInfo}>
      <Image
        src={login}
        className={STYLE_CLASSES.avatar}
        width={75}
        height={75}
        alt="User Avatar"
        priority
      />
      <span className={STYLE_CLASSES.userName}>
        {user?.firstName} {user?.lastName}
      </span>
    </div>
  </div>
);

const StatsSection: React.FC = () => (
  <div className="grid grid-cols-3 gap-6 mb-8">
    {STAT_ITEMS.map((stat, index) => (
      <div key={`stat-${index}`} className={STYLE_CLASSES.statCard}>
        <span className={STYLE_CLASSES.statIcon}>{stat.icon}</span>
        <div>
          <p className={STYLE_CLASSES.statValue}>{stat.value}</p>
          <p className={STYLE_CLASSES.statLabel}>{stat.label}</p>
        </div>
      </div>
    ))}
  </div>
);

const ClassroomSection: React.FC<{ onJoinClass: (roomID: string) => void }> = ({
  onJoinClass,
}) => (
  <div className="mb-8">
    <h3 className={STYLE_CLASSES.sectionTitle}>Join Your Classrooms</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {CLASSROOMS.map((classroom) => (
        <button
          key={classroom.roomID}
          onClick={() => onJoinClass(classroom.roomID)}
          className={STYLE_CLASSES.classroomButton}
          type="button"
          aria-label={`Join ${classroom.name}`}
        >
          {classroom.icon}
          {classroom.name}
        </button>
      ))}
    </div>
  </div>
);

const ContinueLearningSection: React.FC = () => (
  <div className={STYLE_CLASSES.sectionCard}>
    <div className={STYLE_CLASSES.sectionHeader}>
      <h3 className={STYLE_CLASSES.sectionHeaderTitle}>Continue Learning</h3>
    </div>
    <div className={STYLE_CLASSES.sectionContent}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SUBJECTS.map((subject, index) => (
          <div key={`subject-${index}`} className={STYLE_CLASSES.subjectCard}>
            <div className={STYLE_CLASSES.subjectName}>{subject.name}</div>
            <div className={STYLE_CLASSES.subjectProgress}>
              {subject.progress} completed
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const RecommendedCoursesSection: React.FC = () => (
  <div className={STYLE_CLASSES.sectionCard}>
    <div className={STYLE_CLASSES.sectionHeader}>
      <h3 className={STYLE_CLASSES.sectionHeaderTitle}>Recommended for you</h3>
    </div>
    <div className="p-6 space-y-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {RECOMMENDED_SUBJECTS.map((subject, index) => (
        <div
          key={`recommended-${index}`}
          className={STYLE_CLASSES.recommendedCard}
        >
          <h4 className={STYLE_CLASSES.recommendedTitle}>{subject.name}</h4>
          <p className={STYLE_CLASSES.recommendedDescription}>
            {subject.description}
          </p>
          <div className="mt-4">
            <span className={STYLE_CLASSES.recommendedProgress}>
              Progress: {subject.progress}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Main Component
const IntegratedDashboard: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.user);

  const handleJoinClass = (roomID: string): void => {
    const redirectUrl = generateClassroomUrl(roomID, user?.firstName);
    console.log("Redirecting to:", process.env.NEXT_PUBLIC_LOCAL);
    window.location.replace(redirectUrl);
  };

  return (
    <div className={STYLE_CLASSES.container}>
      <SidebarComponent />

      <div className={STYLE_CLASSES.mainContent}>
        <UserWelcomeSection user={user} />
        <StatsSection />
        <ClassroomSection onJoinClass={handleJoinClass} />
        <ContinueLearningSection />
        <RecommendedCoursesSection />
      </div>
    </div>
  );
};

export default IntegratedDashboard;
