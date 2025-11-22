import { FileUploadButtons } from "./FileUploadButtons";

interface QuestionInputProps {
  question: string;
  onQuestionChange: (question: string) => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedFiles: File[];
}

export function QuestionInput({
  question,
  onQuestionChange,
  onFileChange,
  selectedFiles,
}: QuestionInputProps) {
  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="question"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Your Question
        </label>
        <div className="relative">
          <textarea
            id="question"
            value={question}
            onChange={(e) => onQuestionChange(e.target.value)}
            required
            rows={4}
            className="w-full border border-gray-300 rounded-md p-3 pr-24 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
            placeholder="Type your detailed question here..."
          />
          <FileUploadButtons onFileChange={onFileChange} />
        </div>
      </div>

      {selectedFiles.length > 0 && (
        <div className="mt-2">
          <p className="text-sm text-gray-600">
            Selected files: {selectedFiles.map((file) => file.name).join(", ")}
          </p>
        </div>
      )}
    </div>
  );
}
