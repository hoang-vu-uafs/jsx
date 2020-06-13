import React from "react";
import Hello from "./Components/Hello";
import "./App.css";
import randomizer from "randomizer-js";

function App() {
  let rand = randomizer();
  return (
    <div>
      <Hello message={rand.randomSentence()} />
      <Hello hello="My Name is Tom" />
      <Hello>Today is a beautiful day</Hello>
    </div>
  );
}

export default App;
