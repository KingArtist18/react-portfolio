// Projects page component displaying three project cards
import React from "react";

function Projects() {
  // Style for each project card
  const projectCardStyle = {
    width: "300px",
    background: "#1e1e1e",
    padding: "1.5rem",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    color: "#f0f0f0",
    textAlign: "center",
    transition: "transform 0.3s ease",
  };

  // Style for project images
  const projectImageStyle = {
    width: "80px",
    height: "80px",
    objectFit: "contain",
    marginBottom: "1rem",
  };

  // Hover effect handlers
  const hoverEffect = {
    onMouseEnter: (e) => (e.currentTarget.style.transform = "scale(1.03)"),
    onMouseLeave: (e) => (e.currentTarget.style.transform = "scale(1)"),
  };

  return (
    <section style={{ padding: "3rem 1rem", backgroundColor: "#121212", textAlign: "center" }}>
      <h2 style={{ color: "#ffffff", marginBottom: "2rem" }}>My Projects</h2>

      {/* Project cards container */}
      <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
        {/* Individual project cards */}
        <div style={projectCardStyle} {...hoverEffect}>
          <img src="/assets/Triggered_Dimensions_Cover.jpg" alt="Book Cover" style={projectImageStyle} />
          <h3 style={{ color: "#00ffff", marginBottom: "1rem" }}>Triggered Dimension</h3>
          <p>Triggered Dimension is a creative writing and design project...</p>
        </div>

        <div style={projectCardStyle} {...hoverEffect}>
          <img src="/assets/E-Commerce Platform.png" alt="E-Commerce Platform Logo" style={projectImageStyle} />
          <h3 style={{ color: "#00ffff", marginBottom: "1rem" }}>E-Commerce Platform</h3>
          <p>A full-stack web app simulating an online store...</p>
        </div>

        <div style={projectCardStyle} {...hoverEffect}>
          <img src="/assets/Arsal_YouTube.jpg" alt="YouTube Channel Screenshot" style={projectImageStyle} />
          <h3 style={{ color: "#00ffff", marginBottom: "1rem" }}>YouTube Channel</h3>
          <p>My YouTube channel is made to inspire and entertain...</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;