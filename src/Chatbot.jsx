import { useEffect, useState } from "react";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [options, setOptions] = useState([]);
  const [currentId, setCurrentId] = useState(null);
  const [input, setInput] = useState("");

  const fetchBotReply = async (id) => {
    const res = await fetch(`http://localhost:5000/chatbot/${id}`);
    const data = await res.json();

    setMessages((prev) => [
      ...prev,
      { sender: "bot", text: data.message }
    ]);

    setOptions(data.options);
    setCurrentId(id);
  };

  // User sends message
  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: input }
    ]);

    setInput("");
    fetchBotReply("start");
  };

  // User clicks option
  const handleOptionClick = (option) => {
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: option.text }
    ]);

    fetchBotReply(option.id);
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`message ${msg.sender === "user" ? "user" : "bot"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {options.length > 0 && (
        <div className="options">
          {options.map((opt) => (
            <button key={opt.id} onClick={() => handleOptionClick(opt)}>
              {opt.text}
            </button>
          ))}
        </div>
      )}

      <div className="input-area">
        <input
          placeholder="Type hi..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;

