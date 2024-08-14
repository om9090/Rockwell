import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import IntialChatToDisplay from "./components/IntialChatToDisplay";
import ChatResponse from "./components/ChatResponse";
import axios from "axios";
import Tooltip from "../../utils/Tooltip";

const HomePage = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(() => {
    // Retrieve messages from localStorage on initial load
    const savedMessages = localStorage.getItem("messages");
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  useEffect(() => {
    // Save messages to localStorage whenever they change
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, user: "user" }];

    setMessages(newMessages);

    try {
      const response = await axios.post(
        "https://rockwell-project.onrender.com/api/postquery",
        { query: input },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const botMessage =
        response.status === 200 && response.data
          ? response.data.newQuery.queryResponse
          : "Sorry, I am not able to understand you.";

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botMessage, user: "bot" },
      ]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Sorry, something went wrong.", user: "bot" },
      ]);
    } finally {
      setInput("");
    }
  };

  return (
    <div className="container w-full">
      <div className="px-4 pt-4 rounded-lg h-full overflow-y-auto flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          {messages.length === 0 ? (
            <div className="text-center text-gray-400">
              <IntialChatToDisplay />
            </div>
          ) : (
            messages.map((msg, index) => (
              <ChatResponse key={index} message={msg} />
            ))
          )}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="mt-4 flex items-center">
        <>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="p-2 w-full border border-gray-300 rounded-md focus:outline-none"
          />
          <Tooltip content="Send">
            <button
              type="submit"
              className="ml-2 p-2 text-blue-500 focus:outline-none"
            >
              <Icon icon="fluent:send-28-filled" height="24" />
            </button>
          </Tooltip>
        </>
      </form>
    </div>
  );
};

export default HomePage;
