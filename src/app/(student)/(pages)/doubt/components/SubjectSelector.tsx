interface SubjectSelectorProps {
  subject: string;
  onSubjectChange: (subject: string) => void;
  subjects: string[];
}

export function SubjectSelector({
  subject,
  onSubjectChange,
  subjects,
}: SubjectSelectorProps) {
  return (
    <div>
      <label
        htmlFor="subject"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Select Subject
      </label>
      <div className="relative">
        <select
          id="subject"
          value={subject}
          onChange={(e) => onSubjectChange(e.target.value)}
          required
          className="w-full appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Choose a subject</option>
          {subjects.map((subj) => (
            <option key={subj} value={subj}>
              {subj}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
