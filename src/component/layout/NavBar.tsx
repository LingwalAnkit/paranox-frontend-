// NavbarDemo.tsx
"use client";
import { RootState } from "@/redux/store";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaRobot } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import ThemeToggle from "../../section/ThemeToggle";

export default function NavbarDemo({ onLoginClick }: { onLoginClick: any }) {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar onLoginClick={onLoginClick} className="" />
    </div>
  );
}

function Navbar({
  className,
  onLoginClick,
}: {
  className?: string;
  onLoginClick: any;
}) {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState<string | null>(null);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state: RootState) => state.translation.currentLanguage
  );

  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "हिन्दी" },
    { code: "pa", name: "ਪੰਜਾਬੀ" },
    { code: "bn", name: "বাংলা" },
    { code: "mr", name: "मराठी" },
    { code: "kn", name: "ಕನ್ನಡ" },
  ];

  return (
    <div className="fixed top-3 inset-x-0 mx-auto z-50 max-w-4xl px-0 py-2 rounded-full bg-white/60 dark:bg-black/70 shadow-md backdrop-blur-md border border-gray-200 dark:border-white/[0.2]  items-center justify-center flex">
      <Menu setActive={setActive}>
        <div className="flex items-center gap-16 text-lg font-bold">
          <Link href="#login-section">
            <MenuItem setActive={setActive} active={active} item="Login">
              <HoveredLink href="#login-section" onClick={onLoginClick}>
                Join Us Now
              </HoveredLink>
            </MenuItem>
          </Link>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Theoritical Courses"
          >
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Mathematics"
                href="/maths"
                src="/assets/mathsnav.jpeg"
                description="Prepare for world of maths from class 1st to class 12th and Higher"
              />
              <ProductItem
                title="Chemistry"
                href="/chemistry"
                src="/assets/physicsnav.jpeg"
                description="Chemistry for elementry and higher levels"
              />
              <ProductItem
                title="Physics"
                href="/physics"
                src="/assets/chemnav.jpeg"
                description="Never learn complex physics with our teachers who makes physics understandable and easy"
              />
              <ProductItem
                title="English"
                href="/english"
                src="/assets/englishnav.jpeg"
                description="Learn Better English Especially Designed For Rural Areas"
              />
            </div>
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Technical Courses"
          >
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/comingSoon">Web Development</HoveredLink>
              <HoveredLink href="/comingSoon">Designing</HoveredLink>
              <HoveredLink href="/comingSoon">
                Artificial Intellegence Machine Learning
              </HoveredLink>
              <HoveredLink href="/comingSoon">Branding</HoveredLink>
              <HoveredLink href="/comingSoon">Teaching</HoveredLink>
            </div>
          </MenuItem>
          {/* Mocker AI Link */}
          <MenuItem setActive={setActive} active={active} item="AI">
            <div className="flex flex-col space-y-2 text-sm">
              <HoveredLink
                href="https://newmock-turab031s-projects.vercel.app/"
                target="_blank"
              >
                <FaRobot className="h-4 w-4 inline-block mr-1 text-blue-500" />
                Visit Mocker AI
              </HoveredLink>
              <p className="text-xs text-muted-foreground">
                Generate mock interview questions powered by AI
              </p>
            </div>
          </MenuItem>
          {/* Contribute Link */}
          <li className="relative flex items-center">
            <HoveredLink href="/contribute">Contribute</HoveredLink>
          </li>
          {/* Chatbot */}
          {/* <a
            href="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/12/12/07/20241212073353-5PAOC6G6.json"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <FaRobot className="h-6 w-6 text-green-500 hover:text-green-700" />
            <span className="text-green-500 hover:text-green-700">Chatbot</span>
          </a> */}
          <ThemeToggle className="ml-2" />
        </div>
      </Menu>
    </div>
  );
}
