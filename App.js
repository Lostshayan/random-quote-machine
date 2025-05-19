import React, { useEffect, useState } from "react";
import "./App.css";

const quotes = [
  {
    text: "Life isn’t about getting and having, it’s about giving and being.",
    author: "Kevin Kruse"
  },
  {
    text: "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill"
  },
  {
    text: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein"
  }
  // Add more quotes if you like
];

function App() {
  const [quote, setQuote] = useState({ text: "", author: "" });

  const getRandomQuote = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  };

  useEffect(() => {
    getRandomQuote(); // Show one quote on load
  }, []);

  return (
    <div className="App">
      <div id="quote-box">
        <p id="text">"{quote.text}"</p>
        <p id="author">- {quote.author}</p>

        <div>
          <button id="new-quote" onClick={getRandomQuote}>
            New Quote
          </button>
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `"${quote.text}" - ${quote.author}`
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            Tweet
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;