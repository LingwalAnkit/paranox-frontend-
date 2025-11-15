import { Providers } from "@/redux/provider";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { twMerge } from "tailwind-merge";
import ThemeWrapper from "../redux/themeWrapper";
import "./global.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rural Learn",
  description: "Rural Learn: Empowering Rural Education Through Innovative Solutions",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <head>
        <link rel="icon" href="/logo/Logo-Text-0.png" className="dark:hidden" />
        <link rel="icon" href="/logo/Logo-Text-0.png" className="hidden dark:block" />
      </head>
      <body className={twMerge(
        dmSans.className,
        "antialiased transition-colors duration-200",
        "bg-white text-black dark:bg-gray-900 dark:text-white"
      )}>
        <Providers>
          <ThemeWrapper>
            {children}
          </ThemeWrapper>
        </Providers>
      </body>
    </html>
  );
}
