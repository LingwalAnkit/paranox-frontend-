// Doubt/AI API Service
import axios from "axios";
import type { ApiResponse } from "./types";
import { handleApiError } from "./utils";

export interface DoubtQuestion {
  question: string;
  subject: string;
  files?: File[];
}

export interface AIResponse {
  response: string;
}

// Get API keys from environment
const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
const LOCAL_API_URL =
  process.env.NEXT_PUBLIC_LOCAL_API_URL || "http://localhost:5001";

export const doubtApi = {
  askGemini: async (data: DoubtQuestion): Promise<ApiResponse<AIResponse>> => {
    try {
      // Construct the prompt with the subject for context
      const prompt = `Can you please answer the question from Subject: ${data.subject}\n and Question: ${data.question} be precise, clear and concise. Also if the question is not from the subject then please inform that the question is not from the subject and it belongs to other subject.`;

      const response = await axios.post(
        `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
        {
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Extract the response text
      const generatedText = response.data.candidates[0].content.parts[0].text;

      return {
        success: true,
        data: { response: generatedText },
        message: "Answer generated successfully",
      };
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      const apiError = handleApiError(error);
      if (error.response) {
        apiError.message = `Gemini API Error: ${
          error.response.data.error?.message || apiError.message
        }`;
      }
      throw apiError;
    }
  },

  askLocal: async (data: DoubtQuestion): Promise<ApiResponse<AIResponse>> => {
    try {
      const response = await axios.post(`${LOCAL_API_URL}/ask`, {
        question: data.question,
        subject: data.subject,
      });

      return {
        success: true,
        data: { response: response.data.response },
        message: "Answer retrieved successfully",
      };
    } catch (error) {
      const apiError = handleApiError(error);
      throw apiError;
    }
  },

  ask: async (
    data: DoubtQuestion,
    useGemini: boolean = true
  ): Promise<ApiResponse<AIResponse>> => {
    if (useGemini) {
      return doubtApi.askGemini(data);
    } else {
      return doubtApi.askLocal(data);
    }
  },

  isGeminiConfigured: (): boolean => {
    return !!GEMINI_API_KEY;
  },

  isLocalApiConfigured: (): boolean => {
    return !!LOCAL_API_URL;
  },
};
