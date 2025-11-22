import { SubjectSelector } from "./SubjectSelector";
import { QuestionInput } from "./QuestionInput";
import { SubmitButton } from "./SubmitButton";
import { ErrorMessage } from "./ErrorMessage";
import { ResponseSection } from "./ResponseSection";

interface DoubtSolverFormProps {
  question: string;
  setQuestion: (q: string) => void;
  subject: string;
  setSubject: (s: string) => void;
  response: string;
  error: string;
  loading: boolean;
  selectedFiles: File[];
  useGemini: boolean;
  setUseGemini: (use: boolean) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  subjects: string[];
}

export function DoubtSolverForm({
  question,
  setQuestion,
  subject,
  setSubject,
  response,
  error,
  loading,
  selectedFiles,
  useGemini,
  setUseGemini,
  handleFileChange,
  handleSubmit,
  subjects,
}: DoubtSolverFormProps) {
  return (
    <div className="bg-white shadow-2xl rounded-b-xl overflow-hidden">
      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        <SubjectSelector
          subject={subject}
          onSubjectChange={setSubject}
          subjects={subjects}
        />

        <QuestionInput
          question={question}
          onQuestionChange={setQuestion}
          onFileChange={handleFileChange}
          selectedFiles={selectedFiles}
        />

        <SubmitButton loading={loading} />

        {error && <ErrorMessage error={error} />}
        {response && <ResponseSection response={response} />}
      </form>
    </div>
  );
}
