import React from "react";
import { SUBJECTS } from "../constants/subjects";
import { STYLE_CLASSES } from "../constants/styles";

export const ContinueLearningSection: React.FC = () => (
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
