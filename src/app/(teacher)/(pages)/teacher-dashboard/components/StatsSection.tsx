import { Users, FileText, Presentation } from "lucide-react";

const StatsSection: React.FC = () => {
  const stats = [
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
  ];

  return (
    <div className="grid grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-blue-200 dark:bg-neutral-700 shadow-md rounded-lg p-6 flex items-center"
        >
          <span className="mr-4">{stat.icon}</span>
          <div>
            <p className="text-3xl font-bold text-[#12284b] dark:text-[#e2f4fd]">
              {stat.value}
            </p>
            <p className="text-[#12284b] dark:text-[#e2f4fd]">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
