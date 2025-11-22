import React from "react";
import FocusCardsDemo from "../ui/FocusCards";

const LoginSection = ({ loginRef }: { loginRef: any }) => {
  return (
    <div
      id="login-section"
      className="bg-white dark:bg-black  w-screen h-screen"
    >
      <h2 className="text-center text-7xl font-extrabold text-blue-900 mb-8">
        Login Here
      </h2>
      <FocusCardsDemo />
    </div>
  );
};

export default LoginSection;
