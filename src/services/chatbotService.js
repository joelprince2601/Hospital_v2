// src/services/chatbotService.js
export const fetchChatbotResponse = async (message) => {
    try {
      const response = await fetch("http://localhost:5000/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
  
      if (!response.ok) {
        // Handle HTTP errors (like 404 or 500)
        console.error("HTTP error:", response.status, response.statusText);
        return "Sorry, there was an error processing your message.";
      }
  
      const data = await response.json();
  
      if (!data.response) {
        // If the response doesn't contain the expected field
        console.error("Unexpected API response:", data);
        return "Sorry, I didn't understand that.";
      }
  
      return data.response;
  
    } catch (error) {
      console.error("Network or server error:", error);
      return "Sorry, there was an error processing your message.";
    }
  };
  