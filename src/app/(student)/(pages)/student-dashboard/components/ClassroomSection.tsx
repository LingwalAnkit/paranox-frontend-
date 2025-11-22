import React from "react";
import { CLASSROOMS } from "../constants/classrooms";
import { STYLE_CLASSES } from "../constants/styles";

interface ClassroomSectionProps {
  onJoinClass: (roomID: string) => void;
}

export const ClassroomSection: React.FC<ClassroomSectionProps> = ({
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
