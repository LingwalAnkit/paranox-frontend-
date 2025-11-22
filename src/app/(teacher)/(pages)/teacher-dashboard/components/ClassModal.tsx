import { X } from "lucide-react";

interface ClassModalProps {
  isOpen: boolean;
  selectedRoom: { name: string; roomID: string } | null;
  formData: { title: string; date: string };
  isSubmitting: boolean;
  onClose: () => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const ClassModal: React.FC<ClassModalProps> = ({
  isOpen,
  selectedRoom,
  formData,
  isSubmitting,
  onClose,
  onInputChange,
  onSubmit,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-neutral-800 rounded-lg p-8 max-w-md w-full mx-4 shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold text-[#12284b] dark:text-white">
            Start {selectedRoom?.name}
          </h3>
          <button
            onClick={onClose}
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
              onChange={onInputChange}
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
              onChange={onInputChange}
              className="w-full px-4 py-2 bg-blue-50 dark:bg-gray-700 text-[#12284b] dark:text-white rounded-lg border border-blue-300 dark:border-gray-600 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-blue-200 dark:bg-gray-600 text-[#12284b] dark:text-white rounded-lg hover:bg-blue-300 dark:hover:bg-gray-700 transition-colors"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              onClick={onSubmit}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
              disabled={isSubmitting || !formData.title || !formData.date}
            >
              {isSubmitting ? "Starting..." : "Start Class"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassModal;
