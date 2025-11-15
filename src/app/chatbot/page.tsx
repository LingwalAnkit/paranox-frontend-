"use client";
import React, { useState } from "react";
import { Send, MessageCircle } from "lucide-react";

const ChatbotInterface = () => {
  const [messages, setMessages] = useState([
    {
      id: 0,
      text: "Hi! I'm NavShiksha AI assistant. How can I help you today?",
      sender: "bot",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message to chat
    const newUserMessage = {
      id: messages.length,
      text: inputMessage,
      sender: "user",
    };
    setMessages((prev) => [...prev, newUserMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("query", inputMessage);

      const response = await fetch("/ask1", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      // Add bot response to chat
      const newBotMessage = {
        id: messages.length + 1,
        text: data.response,
        sender: "bot",
      };
      setMessages((prev) => [...prev, newBotMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = {
        id: messages.length + 1,
        text: "Sorry, something went wrong. Please try again.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto h-[600px] bg-white shadow-lg rounded-xl flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 rounded-t-xl flex items-center">
        <MessageCircle className="mr-2" />
        <h2 className="text-lg font-semibold">Rural Learn Chatbot</h2>
      </div>

      {/* Messages Container */}
      <div className="flex-grow overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-3 rounded-lg max-w-[80%] ${
              msg.sender === "user"
                ? "bg-blue-100 text-blue-800 self-end ml-auto"
                : "bg-gray-100 text-gray-800 self-start mr-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}

        {isLoading && (
          <div className="p-3 bg-gray-100 text-gray-800 rounded-lg self-start mr-auto">
            Typing...
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t flex items-center">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          placeholder="Ask me anything..."
          className="flex-grow mr-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSendMessage}
          disabled={isLoading}
          className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 disabled:opacity-50"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatbotInterface;
