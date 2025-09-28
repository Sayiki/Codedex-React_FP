import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>What element are you?</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/quiz">Take Quiz</Link>
      </nav>
    </header>
  );
}
