import React from "react";
import { Download, LucideIcon } from "lucide-react";

interface ResourceLinkProps {
  url: string | null | undefined;
  icon: LucideIcon;
  label: string;
  availableText: string;
  unavailableText: string;
}

export const ResourceLink: React.FC<ResourceLinkProps> = ({
  url,
  icon: Icon,
  label,
  availableText,
  unavailableText,
}) => {
  if (!url) {
    return (
      <div className="flex items-center p-3 bg-gray-100 dark:bg-neutral-700 rounded-lg opacity-60">
        <Icon className="w-4 h-4 mr-2 text-gray-400" />
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {unavailableText}
        </span>
      </div>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between p-3 bg-blue-100 dark:bg-neutral-700 rounded-lg hover:bg-blue-200 dark:hover:bg-neutral-600 transition-colors"
      aria-label={label}
    >
      <div className="flex items-center">
        <Icon className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
        <span className="text-sm font-medium text-blue-900 dark:text-blue-200">
          {availableText}
        </span>
      </div>
      <Download className="w-4 h-4 text-blue-600 dark:text-blue-400" />
    </a>
  );
};
