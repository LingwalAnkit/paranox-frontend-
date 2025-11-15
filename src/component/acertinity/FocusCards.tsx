import { FocusCards } from "../ui/focus-cards";

export default function FocusCardsDemo() {
  const cards = [
    {
      title: "Teacher Login",
      src: "/assets/teacher-login-image-png.png",
      link: "/teacher-signup",
    },
    {
      title: "Student Login",
      src: "/assets/student-login.jpeg",
      link: "/student-signup",
    },
    {
      title: "Parents Login",
      src: "/assets/parent-login.jpeg",
      link: "/parent-signup",
    },
  ];

  return <FocusCards cards={cards} />;
}
