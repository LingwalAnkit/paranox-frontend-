"use client";

import React, { useEffect, useState } from "react";
import {
  Calendar,
  Clock,
  User,
  FileText,
  Headphones,
  Download,
} from "lucide-react";
import SidebarComponent from "@/component/sidebar/sidebar";

interface ClassData {
  _id: string;
  title: string;
  roomID: string;
  teacher: string;
  date: string;
  AudioURL?: string;
  NotesURL?: string;
  createdAt: string;
}

const StudentClassesPage: React.FC = () => {
  const [classes, setClasses] = useState<ClassData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch("/api/teacher-classes");
        if (!response.ok) {
          throw new Error("Failed to fetch classes");
        }
        const data = await response.json();
        setClasses(data.classes);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getRoomDisplayName = (roomID: string) => {
    const roomMap: { [key: string]: string } = {
      english: "English Class",
      phy: "Physics Class",
      math: "Mathematics Class",
      chem: "Chemistry Class",
    };
    return roomMap[roomID] || roomID;
  };

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
              <div
                key={classItem._id}
                className="bg-[#e2f4fd] dark:bg-neutral-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-blue-200 dark:border-neutral-700"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-700 dark:to-blue-800 p-4">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {classItem.title}
                  </h3>
                  <p className="text-blue-100 text-sm">
                    {getRoomDisplayName(classItem.roomID)}
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-3">
                  {/* Teacher */}
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <User className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Teacher
                      </p>
                      <p className="font-medium">{classItem.teacher}</p>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <Calendar className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Date
                      </p>
                      <p className="font-medium">
                        {formatDate(classItem.date)}
                      </p>
                    </div>
                  </div>

                  {/* Time */}
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <Clock className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Time
                      </p>
                      <p className="font-medium">
                        {formatTime(classItem.date)}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-blue-300 dark:border-neutral-600 my-4"></div>

                  {/* Resources Section */}
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Class Resources
                    </p>

                    {/* Audio URL */}
                    {classItem.AudioURL ? (
                      <a
                        href={classItem.AudioURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 bg-blue-100 dark:bg-neutral-700 rounded-lg hover:bg-blue-200 dark:hover:bg-neutral-600 transition-colors"
                      >
                        <div className="flex items-center">
                          <Headphones className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                          <span className="text-sm font-medium text-blue-900 dark:text-blue-200">
                            Audio Recording
                          </span>
                        </div>
                        <Download className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </a>
                    ) : (
                      <div className="flex items-center p-3 bg-gray-100 dark:bg-neutral-700 rounded-lg opacity-60">
                        <Headphones className="w-4 h-4 mr-2 text-gray-400" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Audio not available
                        </span>
                      </div>
                    )}

                    {/* Notes URL */}
                    {classItem.NotesURL ? (
                      <a
                        href={classItem.NotesURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 bg-blue-100 dark:bg-neutral-700 rounded-lg hover:bg-blue-200 dark:hover:bg-neutral-600 transition-colors"
                      >
                        <div className="flex items-center">
                          <FileText className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                          <span className="text-sm font-medium text-blue-900 dark:text-blue-200">
                            Class Notes
                          </span>
                        </div>
                        <Download className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </a>
                    ) : (
                      <div className="flex items-center p-3 bg-gray-100 dark:bg-neutral-700 rounded-lg opacity-60">
                        <FileText className="w-4 h-4 mr-2 text-gray-400" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Notes not available
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentClassesPage;
