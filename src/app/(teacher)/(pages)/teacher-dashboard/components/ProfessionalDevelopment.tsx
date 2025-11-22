const ProfessionalDevelopment: React.FC = () => {
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

  return (
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
            className="p-4 border border-blue-300 dark:border-neutral-600 rounded-lg shadow-md bg-blue-300 dark:bg-neutral-600 transition-all duration-300 hover:scale-105"
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
  );
};

export default ProfessionalDevelopment;
