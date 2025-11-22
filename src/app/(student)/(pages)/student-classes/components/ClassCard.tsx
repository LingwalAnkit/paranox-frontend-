import React from "react";
import { Calendar, Clock, User, FileText, Headphones } from "lucide-react";
import { ResourceLink } from "./ResourceLink";
import { formatDate, formatTime } from "../utils/formatters";
import { getRoomDisplayName } from "../constants/classrooms";
import type { ClassData } from "../../../services";

interface ClassCardProps {
  classItem: ClassData;
}

export const ClassCard: React.FC<ClassCardProps> = ({ classItem }) => {
  return (
    <div className="bg-[#e2f4fd] dark:bg-neutral-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-blue-200 dark:border-neutral-700">
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
            <p className="text-xs text-gray-500 dark:text-gray-400">Teacher</p>
            <p className="font-medium">{classItem.teacher}</p>
          </div>
        </div>

        {/* Date */}
        <div className="flex items-center text-gray-700 dark:text-gray-300">
          <Calendar className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400" />
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Date</p>
            <p className="font-medium">{formatDate(classItem.date)}</p>
          </div>
        </div>

        {/* Time */}
        <div className="flex items-center text-gray-700 dark:text-gray-300">
          <Clock className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400" />
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Time</p>
            <p className="font-medium">{formatTime(classItem.date)}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-300 dark:border-neutral-600 my-4"></div>

        {/* Resources Section */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Class Resources
          </p>

          <ResourceLink
            url={classItem.AudioURL}
            icon={Headphones}
            label="Download audio recording"
            availableText="Audio Recording"
            unavailableText="Audio not available"
          />

          <ResourceLink
            url={classItem.NotesURL}
            icon={FileText}
            label="Download class notes"
            availableText="Class Notes"
            unavailableText="Notes not available"
          />
        </div>
      </div>
    </div>
  );
};
