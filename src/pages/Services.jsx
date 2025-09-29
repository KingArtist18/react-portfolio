// Services page component listing four service offerings
import React from "react";

function Services() {
  // Array of service objects
  const servicesOffered = [
    { title: "Web Development", icon: "💻", description: "I build responsive websites..." },
    { title: "Database Design", icon: "🗄️", description: "I design secure and efficient SQL databases..." },
    { title: "Creative Writing & Design", icon: "✒️", description: "I craft sci-fi narratives..." },
    { title: "Content Creation", icon: "📹", description: "I manage and produce YouTube content..." },
  ];

  return (
    <section style={{ padding: "2rem", textAlign: "center" }}>
      <h2 style={{ marginBottom: "2rem" }}>My Services</h2>

      {/* Service cards container */}
      <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
        {servicesOffered.map((service, index) => (
          <div
            key={index}
            style={{
              width: "250px",
              background: "#1e1e1e",
              padding: "1.5rem",
              borderRadius: "10px",
              color: "#fff",
              boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{service.icon}</div>
            <h3 style={{ marginBottom: "1rem" }}>{service.title}</h3>
            <p style={{ fontSize: "0.9rem", lineHeight: "1.4" }}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;