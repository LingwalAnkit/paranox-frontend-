export interface ProgressData {
  day: string;
  hours: number;
}

export interface Subject {
  name: string;
  progress: string;
}

export interface RecommendedSubject {
  name: string;
  description: string;
  progress: string;
}

export interface Classroom {
  name: string;
  roomID: string;
  icon: React.ReactElement;
}

export interface StatItem {
  icon: string;
  label: string;
  value: number;
}

export interface User {
  firstName?: string;
  lastName?: string;
}
