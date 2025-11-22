"use client";
import login from "../../../../public/assets/login.png";
import React, { useState } from "react";
import {
  Sidebar,
  SidebarBody,
  SidebarLink,
} from "../../../component/ui/sidebar";
import Image from "next/image";

// Import common components and utilities
import { Logo, LogoIcon } from "../../../component/layout/sidebar/Logo";
import { FeedbackModal } from "../../../component/layout/sidebar/FeedbackModal";
import { useFeedback } from "../../../hooks/useFeedback";
import { getTeacherLinks } from "../../../component/layout/sidebar/sidebarLinks";

const TeacherSidebar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const {
    isFeedbackFormOpen,
    feedbackForm,
    handleFeedbackClick,
    handleCloseFeedbackForm,
    handleInputChange,
    handleSubmitFeedback,
  } = useFeedback();

  const links = getTeacherLinks(handleFeedbackClick);

  return (
    <>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={link}
                  onClick={link.onClick}
                  className="hover:bg-blue-300 dark:hover:bg-neutral-700 text-blue-900 dark:text-white rounded-2xl"
                />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "teacher",
                href: "/dashboard",
                icon: (
                  <Image
                    src={login}
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
              className="hover:bg-blue-300 dark:hover:bg-neutral-700 text-blue-900 dark:text-white rounded-2xl"
            />
          </div>
        </SidebarBody>
      </Sidebar>

      <FeedbackModal
        isOpen={isFeedbackFormOpen}
        onClose={handleCloseFeedbackForm}
        feedbackForm={feedbackForm}
        onInputChange={handleInputChange}
        onSubmit={handleSubmitFeedback}
      />
    </>
  );
};

export default TeacherSidebar;
