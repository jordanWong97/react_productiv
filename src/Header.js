import React, { useState } from "react";
import Quote from "./Quote";
import axios from 'axios';

const QUOTES_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

function Header() {

  const [quote, setQuote] = useState({
    text: '',
    author: ''
  });

  async function getQuote() {

    const result = await axios.get(QUOTES_URL);
    setQuote(result.data.quote);
  }

  return (

    <div className="container">
      <h1>Prøductïv</h1>
      <p className="lead">The best name in todo list management.</p>
      <Quote quote={quote} getQuote={getQuote} />
    </div>

  );
}

export default Header;