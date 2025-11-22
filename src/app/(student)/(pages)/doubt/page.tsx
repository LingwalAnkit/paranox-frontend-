"use client";

import SideBarComponent from "../../components/sidebar";
import { useDoubtSolver } from "./hooks/useDoubtSolver";
import { FormHeader } from "./components/FormHeader";
import { DoubtSolverForm } from "./components/DoubtSolverForm";

const SUBJECTS = [
  "Mathematics",
  "Science",
  "History",
  "Geography",
  "English",
  "Computer Science",
];

export default function QuestionForm() {
  const {
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
  } = useDoubtSolver();

  return (
    <div className="flex h-screen bg-gray-900">
      <SideBarComponent />
      <div className="flex-1 overflow-y-auto dark:bg-neutral-800">
        <div className="min-h-screen bg-gray-300 flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-2xl">
            <FormHeader />
            <DoubtSolverForm
              question={question}
              setQuestion={setQuestion}
              subject={subject}
              setSubject={setSubject}
              response={response}
              error={error}
              loading={loading}
              selectedFiles={selectedFiles}
              useGemini={useGemini}
              setUseGemini={setUseGemini}
              handleFileChange={handleFileChange}
              handleSubmit={handleSubmit}
              subjects={SUBJECTS}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
