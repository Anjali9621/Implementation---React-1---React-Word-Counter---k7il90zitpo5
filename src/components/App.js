import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  const [text, settext] = useState("");
  const [max, setmax] = useState(84);

  return (
    <div id="main">
      <textarea
        maxlength={max}
        onChange={(e) => settext(e.target.value)}
      ></textarea>
      <div className="word-counter">
        <p>Total number of words written {text.split(" ").length}</p>
      </div>
      <div id="char-counter">
        <p>Total number of charters used {text.length}</p>
      </div>
      <br />
      <h3>Word Limit Input</h3>
      <input
        type="number"
        value={max}
        onChange={(e) => e.target.value}
        id="char-limit-input"
      />
      <br />
      <h3>Font Size Picker</h3>
      <input type="range" max="32px" min="16" />
    </div>
  );
};

export default App;
