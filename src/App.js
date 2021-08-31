import React, { useState } from "react";
import "./styles.css";

var headText = "Emoji Interpreter";
var textColor = "#DB2777";
var username = "Suneha";

export default function App() {
  var [userInput, setuserInput] = useState("");

  function changeEventHandler(event) {
    console.log(event.target.value);
    setuserInput(event.target.value);
  }

  return (
    <div className="App">
      <h1 id="headtext" style={{ color: textColor }}>
        {headText}
      </h1>
      <h1>
        Welcome <span style={{ backgroundColor: textColor }}>{username}</span>
      </h1>
      <input onChange={changeEventHandler}></input>
      <div>Welcome {userInput}</div>
    </div>
  );
}
