import React, { ChangeEvent, FormEvent } from "react";

interface FeedbackForm {
  feedback: string;
  name: string;
  email: string;
  saveInfo: boolean;
}

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  feedbackForm: FeedbackForm;
  onInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({
  isOpen,
  onClose,
  feedbackForm,
  onInputChange,
  onSubmit,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blue-900/75 dark:bg-gray-800/75 z-50">
      <div className="bg-blue-100 dark:bg-neutral-900 p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-xl font-semibold text-blue-900 dark:text-white mb-4">
          Feedback Form
        </h3>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label
              htmlFor="feedback"
              className="block text-blue-800 dark:text-gray-200"
            >
              Feedback
            </label>
            <textarea
              id="feedback"
              name="feedback"
              rows={4}
              className="w-full p-2 mt-1 bg-blue-50 dark:bg-neutral-800 text-blue-900 dark:text-white border border-blue-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-neutral-400"
              required
              value={feedbackForm.feedback}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-blue-800 dark:text-gray-200"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full p-2 mt-1 bg-blue-50 dark:bg-neutral-800 text-blue-900 dark:text-white border border-blue-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-neutral-400"
              required
              value={feedbackForm.name}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-blue-800 dark:text-gray-200"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full p-2 mt-1 bg-blue-50 dark:bg-neutral-800 text-blue-900 dark:text-white border border-blue-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-neutral-400"
              required
              value={feedbackForm.email}
              onChange={onInputChange}
            />
          </div>
          <div className="flex items-center mb-4">
            <input
              id="saveInfo"
              name="saveInfo"
              type="checkbox"
              className="mr-2 text-blue-600 dark:text-neutral-400"
              checked={feedbackForm.saveInfo}
              onChange={onInputChange}
            />
            <label
              htmlFor="saveInfo"
              className="text-blue-800 dark:text-gray-200"
            >
              Save my name and email
            </label>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-blue-200 dark:bg-neutral-700 text-blue-900 dark:text-white px-4 py-2 rounded-lg mr-2 hover:bg-blue-300 dark:hover:bg-neutral-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
