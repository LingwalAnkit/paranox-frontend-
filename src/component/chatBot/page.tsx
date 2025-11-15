'use client'

import { useState } from 'react';

export default function Chatbot() {
  const [messages, setMessages] = useState<{ content: string; sender: string }[]>([]);
  const [input, setInput] = useState<string>('');

  const addMessage = (content: string, sender: string) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { content, sender },
    ]);
  };

  const sendMessage = async () => {
    const question = input.trim();
    if (!question) {
      alert("Please enter a question.");
      return;
    }

    // Add the user's message to the chat
    addMessage(question, 'user');
    setInput('');

    // Add a "thinking..." message
    addMessage("Thinking...", 'bot');

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();
      const answer = data.answer || data.error;

      // Replace the "thinking..." message with the actual answer
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        updatedMessages[updatedMessages.length - 1] = {
          content: answer,
          sender: 'bot',
        };
        return updatedMessages;
      });
    } catch (error) {
      // In case of error, display an error message
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        updatedMessages[updatedMessages.length - 1] = {
          content: "Error: Unable to get response from chatbot.",
          sender: 'bot',
        };
        return updatedMessages;
      });
    }
  };

  return (
    <div className="text-center p-4">
      <h1 className="text-xl font-bold mb-4">Chatbot</h1>
      <div
        id="chatbox"
        className="w-full max-w-lg mx-auto text-left mb-4"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender} my-2 ${message.sender === 'user' ? 'text-blue-600 text-right' : 'text-green-600'}`}
          >
            {message.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask your question..."
        className="p-2 w-4/5 mb-4 border border-gray-300 rounded-lg"
      />
      <button
        onClick={sendMessage}
        className="p-2 px-4 bg-blue-500 text-white rounded-lg"
      >
        Send
      </button>
    </div>
  );
}
