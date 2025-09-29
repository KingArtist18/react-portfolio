// About page component with bio, image, and resume link
import React from "react";

function About() {
  return (
    <section style={{ textAlign: "center", marginTop: "3rem" }}>
      <h2>About Me</h2>
      <h3>Arsal Shaheryar</h3>

      {/* Profile image */}
      <img
        src="/assets/Arsal.S Portfolio Image.jpg"
        alt="Arsal Shaheryar"
        style={{ width: "200px", borderRadius: "50%", margin: "1rem 0" }}
      />

      {/* Bio paragraph */}
      <p>
        I’m a passionate web developer based in Oshawa, Ontario...
      </p>

      {/* Resume download link */}
      <a
        href="/assets/Arsal Shaheryar job resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "inline-block", marginTop: "1rem", textDecoration: "none", color: "#007bff" }}
      >
        Download My Resume
      </a>
    </section>
  );
}

export default About;
