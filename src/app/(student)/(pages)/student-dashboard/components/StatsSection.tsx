import React from "react";
import { STAT_ITEMS } from "../constants/stats";
import { STYLE_CLASSES } from "../constants/styles";

export const StatsSection: React.FC = () => (
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
