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

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiObject[userInput];

    if (meaning === undefined) {
      meaning = "Oops!🥴 Failure to recognise this emoji";
    }

    // console.log(meaning);
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 id="headText">Inside Outtt!</h1>
      <input
        onChange={emojiInputHandler}
        placeholder={"Choose an emoji to know the meaning👇"}
      />
      <div id="emoji">{meaning}</div>
    </div>
  );
}
