import React, { useState } from "react";
import "./styles.css";

const emojiObject = {
  "😊": "Happy",
  "😔": "Sad",
  "😒": "Annoyed",
  "😡": "Angry",
  "💖": "Love",
  "🎁": "Giftbox",
  "🍟": "French Fries",
  "☕": "Coffee"
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
      meaning = "Oops!🥴 Failure to recognise this emoji";
    }

    // console.log(meaning);
    setMeaning(meaning); //react call to show output❤❤
  }

  return (
    <div className="App">
      <h1 id="headText">Inside Outtt!</h1>
      <input
        onChange={emojiInputHandler}
        placeholder={"Choose an emoji to know the meaning👇"}
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
