"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SidebarComponent from "@/component/sidebar/teacherSidebar";
import login from "../../../../public/assets/login.png";
import {
  Book,
  Presentation,
  Users,
  GraduationCap,
  FileText,
  Microscope,
  X,
} from "lucide-react";
import { useState } from "react";

// Updated Data for Teacher Dashboard
const teacherProgressData = [
  { subject: "English", hoursTeaching: 12 },
  { subject: "Physics", hoursTeaching: 8 },
  { subject: "Mathematics", hoursTeaching: 10 },
  { subject: "Chemistry", hoursTeaching: 6 },
];

const assignedClasses = [
  { name: "Advanced Physics", students: 45, progress: "75%" },
  { name: "Organic Chemistry", students: 38, progress: "60%" },
  { name: "Calculus", students: 52, progress: "85%" },
  { name: "Biology Research", students: 30, progress: "50%" },
];

const recommendedResources = [
  {
    name: "Advanced Teaching Strategies",
    description: "Modern pedagogical approaches for STEM education.",
    completionRate: "30%",
  },
  {
    name: "Curriculum Development",
    description: "Innovative methods for designing engaging course content.",
    completionRate: "45%",
  },
  {
    name: "Educational Technology",
    description: "Integrating digital tools in classroom learning.",
    completionRate: "55%",
  },
];

const TeacherIntegratedDashboard: React.FC = () => {
  const teacherName = useSelector((state: RootState) => state.teacher.teacher);
  console.log(teacherName);

  // State for modal and form
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

  // Classroom Configuration
  const classRooms = [
    {
      name: "English Class",
      roomID: "english",
      icon: <Book className="w-6 h-6 mr-2" />,
    },
    {
      name: "Physics Class",
      roomID: "phy",
      icon: <Microscope className="w-6 h-6 mr-2" />,
    },
    {
      name: "Mathematics Class",
      roomID: "math",
      icon: <GraduationCap className="w-6 h-6 mr-2" />,
    },
    {
      name: "Chemistry Class",
      roomID: "chem",
      icon: <Presentation className="w-6 h-6 mr-2" />,
    },
  ];

  // Open modal when class button is clicked
  const handleClassClick = (roomID: string, name: string) => {
    setSelectedRoom({ name, roomID });
    setFormData({
      title: name,
      date: new Date().toISOString().slice(0, 16),
    });
    setIsModalOpen(true);
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleStartClass = async () => {
    if (!selectedRoom || !teacherName) return;

    setIsSubmitting(true);

    // Save class data in background (don't wait for response)
    const response = await fetch("/api/teacher-classes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: formData.title,
        roomID: selectedRoom.roomID,
        teacher: `${teacherName.firstName} ${teacherName.lastName}`,
        date: formData.date,
        AudioURL: "",
        NotesURL: "",
      }),
    }).catch((error) => {
      console.error("Error creating class:", error);
    });

    const classResponse = await response!.json();

    const responseId = classResponse.class._id;
    console.log(responseId);
    // Immediately redirect to class without waiting
    setIsModalOpen(false);
    window.open(
      `${process.env.NEXT_PUBLIC_LOCAL}/?role=teacher&roomID=${selectedRoom.roomID}&userID=${teacherName.firstName}&classID=${responseId}`
    );
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRoom(null);
  };

  return (
    <div className="flex h-screen bg-white dark:bg-black">
      <SidebarComponent />
      <div className="flex-1 p-10 overflow-y-auto bg-white dark:bg-black">
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

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {[
            {
              icon: <Users className="w-8 h-8 text-blue-400" />,
              label: "Total Students",
              value: 150,
            },
            {
              icon: <FileText className="w-8 h-8 text-green-400" />,
              label: "Courses",
              value: 6,
            },
            {
              icon: <Presentation className="w-8 h-8 text-purple-400" />,
              label: "Active Classes",
              value: 4,
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-blue-200 dark:bg-neutral-700 shadow-md rounded-lg p-6 flex items-center"
            >
              <span className="mr-4">{stat.icon}</span>
              <div>
                <p className="text-3xl font-bold text-[#12284b] dark:text-[#e2f4fd]">
                  {stat.value}
                </p>
                <p className="text-[#12284b] dark:text-[#e2f4fd]">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Improved Classroom Buttons Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#12284b] dark:text-[#e2f4fd] mb-4">
            Start Your Classes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {classRooms.map((classroom) => (
              <button
                key={classroom.roomID}
                onClick={() =>
                  handleClassClick(classroom.roomID, classroom.name)
                }
                className="
                                    flex items-center justify-center 
                                    px-4 py-3 
                                    bg-gradient-to-r 
                                    from-blue-500 to-blue-600 
                                    text-white 
                                    rounded-lg 
                                    shadow-md 
                                    hover:from-blue-600 hover:to-blue-700 
                                    transition-all 
                                    duration-300 
                                    transform 
                                    hover:scale-105
                                    focus:outline-none 
                                    focus:ring-2 
                                    focus:ring-blue-400
                                "
              >
                {classroom.icon}
                {classroom.name}
              </button>
            ))}
          </div>
        </div>

        {/* Assigned Classes Section */}
        <div className="bg-[#e2f4fd] dark:bg-neutral-700 shadow-md rounded-lg mb-8">
          <div className="p-6 border-b border-blue-300 dark:border-neutral-600">
            <h3 className="text-xl font-semibold text-blue-900 dark:text-white">
              Assigned Classes
            </h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {assignedClasses.map((cls, index) => (
                <div
                  key={index}
                  className="
                                        p-4 
                                        border border-blue-300 dark:border-neutral-600 
                                        rounded-lg 
                                        shadow-md 
                                        bg-blue-300 dark:bg-neutral-600 
                                        transition-all 
                                        duration-300 
                                        hover:scale-105
                                    "
                >
                  <h4 className="text-lg font-semibold text-blue-900 dark:text-white">
                    {cls.name}
                  </h4>
                  <div className="mt-2 text-blue-700 dark:text-gray-300">
                    <p>Students: {cls.students}</p>
                    <p>Progress: {cls.progress}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recommended Resources Section */}
        <div className="bg-[#e2f4fd] dark:bg-neutral-700 shadow-md rounded-lg">
          <div className="p-6 border-b border-blue-300 dark:border-neutral-600">
            <h3 className="text-3xl font-semibold text-blue-900 dark:text-white">
              Professional Development
            </h3>
          </div>
          <div className="p-6 space-y-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recommendedResources.map((resource, index) => (
              <div
                key={index}
                className="
                                    p-4 
                                    border border-blue-300 dark:border-neutral-600 
                                    rounded-lg 
                                    shadow-md 
                                    bg-blue-300 dark:bg-neutral-600 
                                    transition-all 
                                    duration-300 
                                    hover:scale-105
                                "
              >
                <h4 className="text-lg font-semibold text-blue-900 dark:text-white">
                  {resource.name}
                </h4>
                <p className="text-blue-700 dark:text-gray-300 mt-2">
                  {resource.description}
                </p>
                <div className="mt-4">
                  <span className="text-blue-800 dark:text-blue-400 font-semibold">
                    Completion: {resource.completionRate}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Class Details */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-neutral-800 rounded-lg p-8 max-w-md w-full mx-4 shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-[#12284b] dark:text-white">
                  Start {selectedRoom?.name}
                </h3>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-[#12284b] dark:hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-[#12284b] dark:text-gray-300 mb-2">
                    Class Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-blue-50 dark:bg-gray-700 text-[#12284b] dark:text-white rounded-lg border border-blue-300 dark:border-gray-600 focus:outline-none focus:border-blue-500"
                    placeholder="Enter class title"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#12284b] dark:text-gray-300 mb-2">
                    Date & Time <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="datetime-local"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-blue-50 dark:bg-gray-700 text-[#12284b] dark:text-white rounded-lg border border-blue-300 dark:border-gray-600 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div className="flex gap-4 mt-6">
                  <button
                    onClick={handleCloseModal}
                    className="flex-1 px-4 py-2 bg-blue-200 dark:bg-gray-600 text-[#12284b] dark:text-white rounded-lg hover:bg-blue-300 dark:hover:bg-gray-700 transition-colors"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleStartClass}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
                    disabled={isSubmitting || !formData.title || !formData.date}
                  >
                    {isSubmitting ? "Starting..." : "Start Class"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherIntegratedDashboard;
