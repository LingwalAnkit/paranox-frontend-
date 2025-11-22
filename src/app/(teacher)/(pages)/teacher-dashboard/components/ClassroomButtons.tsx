import { Book, Presentation, GraduationCap, Microscope } from "lucide-react";

interface ClassroomButtonsProps {
  onClassClick: (roomID: string, name: string) => void;
}

const ClassroomButtons: React.FC<ClassroomButtonsProps> = ({
  onClassClick,
}) => {
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

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-[#12284b] dark:text-[#e2f4fd] mb-4">
        Start Your Classes
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {classRooms.map((classroom) => (
          <button
            key={classroom.roomID}
            onClick={() => onClassClick(classroom.roomID, classroom.name)}
            className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {classroom.icon}
            {classroom.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ClassroomButtons;
