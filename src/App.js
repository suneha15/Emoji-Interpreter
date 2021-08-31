import React, { useState } from "react";
import "./styles.css";

var headText = "Emoji Interpreter";
var textColor = "#DB2777";
var username = "Suneha";

export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);

  function likeClickHandler() {
    var newlikeCounter = likeCounter + 1;
    setLikeCounter(newlikeCounter);
  }

  console.log("likeCounter", likeCounter);

  return (
    <div className="App">
      <h1 id="headtext" style={{ color: textColor }}>
        {headText}
      </h1>
      <h1>
        Welcome <span style={{ backgroundColor: textColor }}>{username}</span>
      </h1>
      <button id="btn" onClick={likeClickHandler}>
        Like Me!
      </button>{" "}
      {likeCounter}
    </div>
  );
}
