import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  const [text, settext] = useState("");
  const [max, setmax] = useState(50);

  return (
    <div id="main">
      <textarea
        maxlength={max}
        onChange={(e) => settext(e.target.value)}
      ></textarea>
      <div className="word-counter">{text.split(" ").length}</div>
      <div id="char-counter">{text.length}</div>
      <input
        type="number"
        value={max}
        onChange={(e) => e.target.value}
        id="char-limit-input"
      />
      <input type="range" max="32px" min="16" />
    </div>
  );
};

export default App;
