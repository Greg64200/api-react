import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import QuoteCard from "./Components/QuoteCard";
import { useState } from "react";
import React from "react";

const sampleSimpson = {
  quote:
    "And this is the snack holder where I can put my beverage or, if you will, cupcake.",
  character: "Homer Simpson",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  characterDirection: "Right",
};

// Send the request

function App() {
  const [simpson, setSimpson] = useState(sampleSimpson);

  const getSimpson = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setSimpson(data[0]);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <QuoteCard simpson={simpson} />

        <button onClick={getSimpson}> Change character</button>
      </header>
    </div>
  );
}

export default App;
