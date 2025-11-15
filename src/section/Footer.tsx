"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export const Footer = () => {
  const { translations } = useSelector((state: RootState) => state.translation);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              NavShiksha
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {translations["footer_description"] ||
                "Bridging the educational divide in rural communities through innovative technology and accessible learning solutions."}
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:contact@rurallearn.com"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  contact@rurallearn.com
                </a>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium">Partnership:</span> UCER || GGSIPU
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {translations["quick_links"] || "Quick Links"}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {translations["about"] || "About"}
                </a>
              </li>
              <li>
                <a
                  href="/courses"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {translations["courses"] || "Courses"}
                </a>
              </li>
              <li>
                <a
                  href="/resources"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {translations["resources"] || "Resources"}
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {translations["contact"] || "Contact"}
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {translations["support"] || "Support"}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/help"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {translations["help_center"] || "Help Center"}
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {translations["faq"] || "FAQ"}
                </a>
              </li>
              <li>
                <a
                  href="/community"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {translations["community"] || "Community"}
                </a>
              </li>
              <li>
                <a
                  href="/feedback"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {translations["feedback"] || "Feedback"}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} NavShiksha.{" "}
              {translations["all_rights_reserved"] || "All rights reserved."}
            </p>
            <div className="flex space-x-6">
              <a
                href="/privacy"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {translations["privacy_policy"] || "Privacy Policy"}
              </a>
              <a
                href="/terms"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {translations["terms_of_service"] || "Terms of Service"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
