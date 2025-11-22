import type { Subject, RecommendedSubject } from "../types/dashboard.types";

export const SUBJECTS: Subject[] = [
  { name: "Physics", progress: "75%" },
  { name: "Chemistry", progress: "60%" },
  { name: "Mathematics", progress: "85%" },
  { name: "Biology", progress: "50%" },
  { name: "Computer Science", progress: "70%" },
  { name: "English", progress: "100%" },
];

export const RECOMMENDED_SUBJECTS: RecommendedSubject[] = [
  {
    name: "Astronomy",
    description: "Explore the universe and the celestial bodies.",
    progress: "30%",
  },
  {
    name: "Geography",
    description:
      "Understand the physical features of the Earth and its atmosphere.",
    progress: "45%",
  },
  {
    name: "Economics",
    description:
      "Study the production, distribution, and consumption of goods and services.",
    progress: "55%",
  },
  {
    name: "Psychology",
    description: "Delve into the science of behavior and mental processes.",
    progress: "40%",
  },
  {
    name: "Art History",
    description: "Discover the evolution of art and its impact on culture.",
    progress: "65%",
  },
];
