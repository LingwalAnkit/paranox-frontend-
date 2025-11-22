import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconPencil,
  IconTrophy,
  IconBook,
  IconUsersGroup,
  IconMessageCircle,
} from "@tabler/icons-react";
import { PiStudentBold } from "react-icons/pi";

export interface SidebarLinkConfig {
  label: string;
  href: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export const getCommonLinks = (handleFeedbackClick: () => void) => ({
  community: {
    label: "Community",
    href: "https://nav-shiksha-chat-isox.vercel.app/",
    icon: (
      <IconUsersGroup className="text-blue-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0 ml-1" />
    ),
  },
  feedback: {
    label: "FeedBack And Complaints",
    href: "#",
    icon: (
      <IconMessageCircle className="text-blue-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0 ml-1" />
    ),
    onClick: handleFeedbackClick,
  },
  settings: {
    label: "Settings",
    href: "/setting",
    icon: (
      <IconSettings className="text-blue-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0 ml-1" />
    ),
  },
});

export const getStudentLinks = (
  handleFeedbackClick: () => void
): SidebarLinkConfig[] => {
  const common = getCommonLinks(handleFeedbackClick);

  return [
    {
      label: "Home",
      href: "/student-home",
      icon: (
        <IconBrandTabler className="text-blue-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0 ml-1" />
      ),
    },
    {
      label: "Dashboard",
      href: "/student-dashboard",
      icon: (
        <IconPencil className="text-blue-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0 ml-1" />
      ),
    },
    {
      label: "Past Classes",
      href: "/student-classes",
      icon: (
        <PiStudentBold className="text-blue-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0 ml-1" />
      ),
    },
    {
      label: "LeaderBoard",
      href: "#",
      icon: (
        <IconTrophy className="text-blue-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0 ml-1" />
      ),
    },
    {
      label: "Doubt-Section",
      href: "/doubt",
      icon: (
        <IconBook className="text-blue-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0 ml-1" />
      ),
    },
    common.community,
    common.feedback,
    common.settings,
    {
      label: "Logout",
      href: "/student-login",
      icon: (
        <IconArrowLeft className="text-blue-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0 ml-1" />
      ),
    },
  ];
};

export const getTeacherLinks = (
  handleFeedbackClick: () => void
): SidebarLinkConfig[] => {
  const common = getCommonLinks(handleFeedbackClick);

  return [
    {
      label: "Dashboard",
      href: "/teacher-dashboard",
      icon: (
        <IconPencil className="text-blue-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0 ml-1" />
      ),
    },
    {
      label: "Attendance",
      href: "/attendance",
      icon: (
        <IconBrandTabler className="text-blue-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0 ml-1" />
      ),
    },
    common.community,
    common.feedback,
    common.settings,
    {
      label: "Logout",
      href: "/parent-login",
      icon: (
        <IconArrowLeft className="text-blue-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0 ml-1" />
      ),
    },
  ];
};
