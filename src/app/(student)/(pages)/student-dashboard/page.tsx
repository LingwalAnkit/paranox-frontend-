"use client";

import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../redux/store";
import SidebarComponent from "../../components/sidebar";
import { UserWelcomeSection } from "./components/UserWelcomeSection";
import { StatsSection } from "./components/StatsSection";
import { ClassroomSection } from "./components/ClassroomSection";
import { ContinueLearningSection } from "./components/ContinueLearningSection";
import { RecommendedCoursesSection } from "./components/RecommendedCoursesSection";
import { generateClassroomUrl } from "./utils/classroom.utils";
import { STYLE_CLASSES } from "./constants/styles";

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
