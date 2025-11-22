import { useState, ChangeEvent, FormEvent } from "react";

interface FeedbackForm {
  feedback: string;
  name: string;
  email: string;
  saveInfo: boolean;
}

export const useFeedback = () => {
  const [isFeedbackFormOpen, setIsFeedbackFormOpen] = useState<boolean>(false);
  const [feedbackForm, setFeedbackForm] = useState<FeedbackForm>({
    feedback: "",
    name: "",
    email: "",
    saveInfo: false,
  });

  const handleFeedbackClick = (): void => {
    setIsFeedbackFormOpen(true);
  };

  const handleCloseFeedbackForm = (): void => {
    setIsFeedbackFormOpen(false);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value, type } = e.target;
    setFeedbackForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmitFeedback = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackForm),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        setIsFeedbackFormOpen(false);
        setFeedbackForm({
          feedback: "",
          name: "",
          email: "",
          saveInfo: false,
        });
      } else {
        const errorData = await response.json();
        alert(
          errorData.error || "Failed to submit feedback. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return {
    isFeedbackFormOpen,
    feedbackForm,
    handleFeedbackClick,
    handleCloseFeedbackForm,
    handleInputChange,
    handleSubmitFeedback,
  };
};
