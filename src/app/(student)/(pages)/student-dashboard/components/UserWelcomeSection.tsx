import React from "react";
import Image from "next/image";
import { STYLE_CLASSES } from "../constants/styles";
import type { User } from "../types/dashboard.types";
import login from "../../../../../../public/assets/login.png";

interface UserWelcomeSectionProps {
  user: User | null;
}

export const UserWelcomeSection: React.FC<UserWelcomeSectionProps> = ({
  user,
}) => (
  <div className="flex justify-between items-center mb-8">
    <h2 className={STYLE_CLASSES.welcomeHeader}>
      Welcome back, <br />
      <span className={STYLE_CLASSES.welcomeName}>
        {user?.firstName || "Guest"} 👋
      </span>
    </h2>
    <div className={STYLE_CLASSES.userInfo}>
      <Image
        src={login}
        className={STYLE_CLASSES.avatar}
        width={75}
        height={75}
        alt="User Avatar"
        priority
      />
      <span className={STYLE_CLASSES.userName}>
        {user?.firstName} {user?.lastName}
      </span>
    </div>
  </div>
);
