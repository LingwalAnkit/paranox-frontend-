"use client";

import React, { useEffect, useState } from "react";
import SidebarComponent from "../../components/sidebar";
import { classesApi, type ClassData } from "../../services";
import { ClassCard } from "./components/ClassCard";

const StudentClassesPage: React.FC = () => {
  const [classes, setClasses] = useState<ClassData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await classesApi.getClasses();
        setClasses(response.data || []);
      } catch (err: any) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen bg-white dark:bg-black">
        <SidebarComponent />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-xl text-gray-600 dark:text-gray-300">
            Loading classes...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen bg-white dark:bg-black">
        <SidebarComponent />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-xl text-red-600 dark:text-red-400">
            Error: {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-white dark:bg-black">
      <SidebarComponent />
      <div className="flex-1 p-10 overflow-y-auto bg-white dark:bg-black">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#12284b] dark:text-[#e2f4fd] mb-2">
            Previous Classes
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            View all recorded classes with notes and audio
          </p>
        </div>

        {/* Classes Grid */}
        {classes.length === 0 ? (
          <div className="flex items-center justify-center h-64">
            <p className="text-xl text-gray-500 dark:text-gray-400">
              No classes available yet
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((classItem) => (
              <ClassCard key={classItem._id} classItem={classItem} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentClassesPage;
