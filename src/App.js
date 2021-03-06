import React, { useState } from "react";
import "./styles.css";

const emojiObject = {
  "π": "Happy",
  "π": "Sad",
  "π": "Annoyed",
  "π‘": "Angry",
  "π": "Love",
  "π": "Giftbox",
  "π": "French Fries",
  "β": "Coffee"
};

var emojisWeKnow = Object.keys(emojiObject);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiClickHandler(emoji) {
    // console.log(emoji);
    var meaning = emojiObject[emoji];

    setMeaning(meaning); //react call to show output
  }

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiObject[userInput];

    if (meaning === undefined) {
      meaning = "Oops!π₯΄ Failure to recognise this emoji";
    }

    // console.log(meaning);
    setMeaning(meaning); //react call to show outputβ€β€
  }

  return (
    <div className="App">
      <h1 id="headText">Inside Outtt!</h1>
      <input
        onChange={emojiInputHandler}
        placeholder={"Choose an emoji to know the meaningπ"}
      />
      <div id="emojis">
        {meaning}
        {/* {actual output set by react setState} */}
      </div>
      <h2>Emojis we know</h2>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.4rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
