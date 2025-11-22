import React from "react";
import { RECOMMENDED_SUBJECTS } from "../constants/subjects";
import { STYLE_CLASSES } from "../constants/styles";

export const RecommendedCoursesSection: React.FC = () => (
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
