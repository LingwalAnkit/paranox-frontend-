const AssignedClasses: React.FC = () => {
  const assignedClasses = [
    { name: "Advanced Physics", students: 45, progress: "75%" },
    { name: "Organic Chemistry", students: 38, progress: "60%" },
    { name: "Calculus", students: 52, progress: "85%" },
    { name: "Biology Research", students: 30, progress: "50%" },
  ];

  return (
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
              className="p-4 border border-blue-300 dark:border-neutral-600 rounded-lg shadow-md bg-blue-300 dark:bg-neutral-600 transition-all duration-300 hover:scale-105"
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
  );
};

export default AssignedClasses;
