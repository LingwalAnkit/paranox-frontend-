// Hook for Doubt Solver functionality
import { useState } from "react";
import { doubtApi, type DoubtQuestion } from "../../../services";

export const useDoubtSolver = () => {
  const [question, setQuestion] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [useGemini, setUseGemini] = useState<boolean>(true);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setSelectedFiles(files);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResponse("");

    try {
      const questionData: DoubtQuestion = {
        question,
        subject,
        files: selectedFiles.length > 0 ? selectedFiles : undefined,
      };

      const result = await doubtApi.ask(questionData, useGemini);
      setResponse(result.data?.response || "No response received");
    } catch (err: any) {
      console.error("Error:", err);
      setError(err.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const clearForm = () => {
    setQuestion("");
    setSubject("");
    setResponse("");
    setError("");
    setSelectedFiles([]);
  };

  return {
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
    clearForm,
  };
};
