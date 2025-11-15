"use client";
import login from "../../../public/assets/login.png";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../../component/ui/sidebar";
import {
    IconArrowLeft,
    IconBrandTabler,
    IconSettings,
    IconUserBolt,
    IconPencil,
    IconTrophy,
    IconBook,
    IconUsersGroup,
    IconMessageCircle
} from "@tabler/icons-react";
import Image from "next/image";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

interface FeedbackForm {
    feedback: string;
    name: string;
    email: string;
    saveInfo: boolean;
}

const Logo = () => (
    <div className="text-blue-900 dark:text-white text-2xl font-bold">Nav Shiksha</div>
);
const LogoIcon = () => (
    <div className="text-blue-900 dark:text-white text-2xl font-bold">N</div>
);
const SidebarComponent = (components:any) => {
    const [open, setOpen] = useState<boolean>(false);
    const [isFeedbackFormOpen, setIsFeedbackFormOpen] = useState<boolean>(false);
    const [feedbackForm, setFeedbackForm] = useState<FeedbackForm>({
        feedback: '',
        name: '',
        email: '',
        saveInfo: false
    });

    const handleFeedbackClick = (): void => {
      setIsFeedbackFormOpen(true);
  };

  const handleCloseFeedbackForm = (): void => {
      setIsFeedbackFormOpen(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      const { name, value, type } = e.target;
      setFeedbackForm(prev => ({
          ...prev,
          [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
      }));
  };

  const handleSubmitFeedback = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackForm),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        setIsFeedbackFormOpen(false);
        setFeedbackForm({
          feedback: '',
          name: '',
          email: '',
          saveInfo: false
        });
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Failed to submit feedback. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('An error occurred. Please try again.');
    }
  };
  const communityUrl = process.env.COMMUNITY_URL
  communityUrl?.toString()
  const links = [
        { label: "Home", href: "/parent-home", icon: <IconBrandTabler className="text-blue-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" /> },
        { label: "Dashboard", href: "/parent-dashboard", icon: <IconPencil className="text-blue-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" /> },
        {
            label: "Community",
            href: "https://nav-shiksha-chat-isox.vercel.app/",
            icon: <IconUsersGroup className="text-blue-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
        },
        { label: "FeedBack And Complaints", href: "#", icon: <IconMessageCircle className="text-blue-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />, onClick: handleFeedbackClick },
        { label: "Settings", href: "/setting", icon: <IconSettings className="text-blue-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" /> },
        { label: "Logout", href: "/student-login", icon: <IconArrowLeft className="text-blue-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" /> },
    ];
    return (
        <>
            <Sidebar open={open} setOpen={setOpen} >
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
                                label: "Student",
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
            {isFeedbackFormOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-blue-900/75 dark:bg-gray-800/75 z-50">
                    <div className="bg-blue-100 dark:bg-neutral-900 p-6 rounded-lg shadow-lg w-96">
                        <h3 className="text-xl font-semibold text-blue-900 dark:text-white mb-4">Feedback Form</h3>
                        <form onSubmit={handleSubmitFeedback}>
                            <div className="mb-4">
                                <label htmlFor="feedback" className="block text-blue-800 dark:text-gray-200">Feedback</label>
                                <textarea 
                                    id="feedback" 
                                    name="feedback" 
                                    rows={4} 
                                    className="w-full p-2 mt-1 bg-blue-50 dark:bg-neutral-800 text-blue-900 dark:text-white border border-blue-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-neutral-400" 
                                    required
                                    value={feedbackForm.feedback}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-blue-800 dark:text-gray-200">Name</label>
                                <input 
                                    id="name" 
                                    name="name" 
                                    type="text" 
                                    className="w-full p-2 mt-1 bg-blue-50 dark:bg-neutral-800 text-blue-900 dark:text-white border border-blue-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-neutral-400" 
                                    required
                                    value={feedbackForm.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-blue-800 dark:text-gray-200">Email</label>
                                <input 
                                    id="email" 
                                    name="email" 
                                    type="email" 
                                    className="w-full p-2 mt-1 bg-blue-50 dark:bg-neutral-800 text-blue-900 dark:text-white border border-blue-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-neutral-400" 
                                    required
                                    value={feedbackForm.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex items-center mb-4">
                                <input 
                                    id="saveInfo" 
                                    name="saveInfo" 
                                    type="checkbox" 
                                    className="mr-2 text-blue-600 dark:text-neutral-400"
                                    checked={feedbackForm.saveInfo}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="saveInfo" className="text-blue-800 dark:text-gray-200">Save my name and email</label>
                            </div>
                            <div className="flex justify-end">
                                <button 
                                    type="button" 
                                    onClick={handleCloseFeedbackForm} 
                                    className="bg-blue-200 dark:bg-neutral-700 text-blue-900 dark:text-white px-4 py-2 rounded-lg mr-2 hover:bg-blue-300 dark:hover:bg-neutral-600"
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit" 
                                    className="bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default SidebarComponent;