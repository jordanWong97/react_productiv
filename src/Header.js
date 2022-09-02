import React, { useState } from "react";
import Quote from "./Quote";

function Header() {

  return (

      <div className="container">
        <h1>Prøductïv</h1>
        <p className="lead">The best name in todo list management.</p>
        <Quote />
      </div>

  )
}