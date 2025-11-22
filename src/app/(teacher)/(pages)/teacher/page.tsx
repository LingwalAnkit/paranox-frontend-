"use client";
import React from "react";
import SidebarComponent from "../../components/teacherSidebar";
import { BentoGridDemo } from "../../components/WobbleCardTeacher";

const Home = () => {
  return (
    <div className="flex h-screen bg-white dark:bg-black">
      <SidebarComponent />
      <div className="flex-1 p-10 overflow-y-auto bg-white dark:bg-black">
        <div className="flex items-center justify-center">
          <BentoGridDemo />
        </div>
      </div>
    </div>
  );
};

export default Home;
