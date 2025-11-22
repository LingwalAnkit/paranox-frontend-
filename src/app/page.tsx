"use client";
import { Feature } from "@/component/layout/Feature";
import { Footer } from "@/component/layout/Footer";
import LoginSection from "@/component/layout/LoginSection";
import { useRef } from "react";
import Background from "../component/layout/BackGround";
import NavBar from "../component/layout/NavBar";

// import { LanguageSwitcher } from "@/section/languageSwitcher";

export default function Home() {
  // const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const loginRef = useRef<HTMLDivElement | null>(null);
  const scrollToLogin = () => {
    if (loginRef.current) {
      setTimeout(() => {
        loginRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      console.log("loginRef.current is null");
    }
  };
  return (
    <>
      {/* <LanguageSwitcher></LanguageSwitcher> */}
      <NavBar onLoginClick={scrollToLogin} />
      <Background />
      <Feature />
      {/* <ProductShowcase/> */}
      <LoginSection loginRef={loginRef} />
      <Footer />
    </>
  );
}
