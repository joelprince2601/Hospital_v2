// src/components/ChatbotPopover.js
import React, { useState } from "react";
import { fetchChatbotResponse } from "../services/chatbotService";
import "./ChatbotPopover.css";

function ChatbotPopover() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: "bot", text: "Hello! How can I assist you today?" }]);
  const [input, setInput] = useState("");

  const togglePopover = () => setIsOpen(!isOpen);

  const handleSend = async () => {
    if (!input) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const botResponse = await fetchChatbotResponse(input);
    const botMessage = { sender: "bot", text: botResponse };
    setMessages((prev) => [...prev, botMessage]);
    setInput("");
  };

  return (
    <div className="chatbot-popover">
      <button onClick={togglePopover} className="chatbot-toggle-btn">Chat</button>

      {isOpen && (
        <div className="chatbot-content">
          <h4>AI Chatbot</h4>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type a message..."
          />
          <button onClick={handleSend} className="send-btn">Send</button>
        </div>
      )}
    </div>
  );
}

export default ChatbotPopover;
