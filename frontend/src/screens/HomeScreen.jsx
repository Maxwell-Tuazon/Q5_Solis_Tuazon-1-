import React from "react";

function HomeScreen() {
  const chatHistory = [
   
  ];

  return (
    <div className="chatgpt-shell">
      <aside className="chatgpt-sidebar">
        <div className="brand-row">New chat</div>
        <nav className="chat-history">
          {chatHistory.map((item) => (
            <button key={item} className="history-item" type="button">
              {item}
            </button>
          ))}
        </nav>
      </aside>

      <main className="chatgpt-main">
        <h1>What&apos;s on your mind today?</h1>

        <div className="mobile-history" aria-label="Recent chats">
          {chatHistory.slice(0, 3).map((item) => (
            <button
              key={`mobile-${item}`}
              className="mobile-history-item"
              type="button"
            >
              {item}
            </button>
          ))}
        </div>

        <form className="prompt-form" onSubmit={(e) => e.preventDefault()}>
          <button type="button" className="icon-btn" aria-label="Add">
            +
          </button>
          <input type="text" placeholder="Ask anything" />
          <button type="submit" className="send-btn" aria-label="Send">
            go
          </button>
        </form>
      </main>
    </div>
  );
}

export default HomeScreen;
