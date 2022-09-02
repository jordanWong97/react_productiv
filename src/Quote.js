import React, { useState } from "react";


function Quote({ quote, getQuote }) {

  return (
    <div>
      {!quote.text &&
        <button onClick={getQuote}>Click here for an inspirational quote.</button>}

      {quote.text &&
        <div>
          <small>{quote.text} -{quote.author}</small>
          <br />
          <button onClick={getQuote}>New quote.</button>
        </div>
      }

    </div>
  );

}

export default Quote;