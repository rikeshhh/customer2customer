import React, { useEffect, useState } from "react";
import superHero from "../../assets/superhero.png";
// Component for displaying a preloader with random quotes
const Preloader = () => {
  // Array of quotes to display
  const quotes = [
    "The best way to predict the future is to invent it. - Alan Kay",
    "Simplicity is the soul of efficiency. - Austin Freeman",
    "Coding is today's literacy. - Tim Cook",
    "Success is not the key to happiness. - Albert Schweitzer",
  ];

  // State to store the random quote
  const [randomQuote, setRandomQuote] = useState("");

  // Effect to set a random quote when component mounts
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  }, []);

  // JSX to render the preloader with a random quote
  return (
    <div className="flex flex-col gap-12 justify-center items-center h-screen">
      <div className="flipping">
      <figure className="animate-bounce ">
          <img src={superHero} alt="" className="superhero"/>
        </figure>
      </div>

      <p className="text-3xl black max-sm:text-xl">{randomQuote}</p>
    </div>
  );
};

export default Preloader;
