"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SidebarComponent from "../../components/teacherSidebar";
import login from "../../../../../public/assets/login.png";
import { useState } from "react";
import { createClass } from "../../services";
import StatsSection from "./components/StatsSection";
import ClassroomButtons from "./components/ClassroomButtons";
import AssignedClasses from "./components/AssignedClasses";
import ProfessionalDevelopment from "./components/ProfessionalDevelopment";
import ClassModal from "./components/ClassModal";

const TeacherIntegratedDashboard: React.FC = () => {
  const teacherName = useSelector((state: RootState) => state.teacher.teacher);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<{
    name: string;
    roomID: string;
  } | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClassClick = (roomID: string, name: string) => {
    setSelectedRoom({ name, roomID });
    setFormData({
      title: name,
      date: new Date().toISOString().slice(0, 16),
    });
    setIsModalOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleStartClass = async () => {
    if (!selectedRoom || !teacherName) return;

    setIsSubmitting(true);

    try {
      const classResponse = await createClass({
        title: formData.title,
        roomID: selectedRoom.roomID,
        teacher: `${teacherName.firstName} ${teacherName.lastName}`,
        date: formData.date,
        AudioURL: "",
        NotesURL: "",
      });

      const responseId = classResponse.class._id;
      setIsModalOpen(false);
      window.open(
        `${process.env.NEXT_PUBLIC_LOCAL}/?role=teacher&roomID=${selectedRoom.roomID}&userID=${teacherName.firstName}&classID=${responseId}`
      );
    } catch (error) {
      console.error("Error creating class:", error);
      alert("Failed to create class. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRoom(null);
  };

  return (
    <div className="flex h-screen bg-white dark:bg-black">
      <SidebarComponent />
      <div className="flex-1 p-10 overflow-y-auto bg-white dark:bg-black">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-[#12284b] dark:text-[#e2f4fd]">
            Welcome back, <br />
            <span className="text-4xl">
              {teacherName?.firstName || "Teacher"} 👋
            </span>
          </h2>
          <div className="flex items-center text-[#12284b] dark:text-[#e2f4fd]">
            <Image
              src={login}
              className="flex-shrink-0 rounded-full mr-4"
              width={75}
              height={75}
              alt="Avatar"
            />
            <span className="text-2xl">
              {teacherName?.firstName || "Teacher"}{" "}
              {teacherName?.lastName || ""}
            </span>
          </div>
        </div>

        <StatsSection />
        <ClassroomButtons onClassClick={handleClassClick} />
        <AssignedClasses />
        <ProfessionalDevelopment />

        <ClassModal
          isOpen={isModalOpen}
          selectedRoom={selectedRoom}
          formData={formData}
          isSubmitting={isSubmitting}
          onClose={handleCloseModal}
          onInputChange={handleInputChange}
          onSubmit={handleStartClass}
        />
      </div>
    </div>
  );
};

export default TeacherIntegratedDashboard;
