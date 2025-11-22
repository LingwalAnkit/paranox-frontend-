import React from "react";
import { Book, GraduationCap, Award, Share2 } from "lucide-react";
import type { Classroom } from "../types/dashboard.types";

export const CLASSROOMS: Classroom[] = [
  {
    name: "English Class",
    roomID: "english",
    icon: <Book className="w-6 h-6 mr-2" />,
  },
  {
    name: "Physics Class",
    roomID: "phy",
    icon: <Share2 className="w-6 h-6 mr-2" />,
  },
  {
    name: "Chemistry Class",
    roomID: "chem",
    icon: <GraduationCap className="w-6 h-6 mr-2" />,
  },
  {
    name: "Mathematics Class",
    roomID: "math",
    icon: <Award className="w-6 h-6 mr-2" />,
  },
];
