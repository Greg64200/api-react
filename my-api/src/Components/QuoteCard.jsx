import React from "react";

function QuoteCard({ simpson }) {
  return (
    simpson && (
      <div className="DisplayEmployee">
        <img src={simpson.image} alt={simpson.character} />
        <ul>
          <li>Name: {simpson.character}</li>

          <li>Quote: {simpson.quote}</li>
        </ul>
      </div>
    )
  );
}
export default QuoteCard;
