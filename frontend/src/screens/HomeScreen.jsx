import React, { useState } from "react";

function HomeScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    
    const newMessage = { id: Date.now(), text: input, sender: "user" };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setLoading(true);

    try {
      
      const res = await fetch("http://127.0.0.1:8000/api/chat/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setResponse(data.reply || "No response");
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: data.reply || "No response",
          sender: "bot",
        },
      ]);
    } catch (err) {
      setResponse(`Error: ${err.message}`);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: `Error: ${err.message}`, sender: "bot" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatgpt-shell">
      <aside className="chatgpt-sidebar">
        <div className="brand-row">New chat</div>
        <nav className="chat-history"></nav>
      </aside>

      <main className="chatgpt-main">
        {messages.length === 0 ? (
          <>
            <h1>What&apos;s on your mind today?</h1>
          </>
        ) : (
          <div className="messages-container">
            {messages.map((msg) => (
              <div key={msg.id} className={`message ${msg.sender}`}>
                <strong>{msg.sender === "user" ? "You" : "Bot"}:</strong>
                <p>{msg.text}</p>
              </div>
            ))}
            {loading && <div className="message bot"><p>Typing...</p></div>}
          </div>
        )}

        <form className="prompt-form" onSubmit={handleSubmit}>
          <button type="button" className="icon-btn" aria-label="Add">
            +
          </button>
          <input
            type="text"
            placeholder="Ask anything"
            value={input}
            onChange={handleInputChange}
          />
          <button type="submit" className="send-btn" aria-label="Send" disabled={loading}>
            {loading ? "..." : "Yurr"}
          </button>
        </form>
      </main>
    </div>
  );
}

export default HomeScreen;
