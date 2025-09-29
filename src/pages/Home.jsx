// Home page component displaying welcome message and mission statement
import React from "react";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>Welcome to Arsal Shaheryar&apos;s Portfolio</h1>
      <p>
        Mission Statement: Building creative and functional web applications
        with passion and dedication.
      </p>

      {/* Button linking to About page */}
      <Link to="/about">
        <button style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>
          Learn More About Me
        </button>
      </Link>
    </section>
  );
}

export default Home;