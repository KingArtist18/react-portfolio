import { Link } from 'react-router-dom';

const NavBar = () => {
  const navStyle = {
    backgroundColor: "#121212",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #333",
  };

  const ulStyle = {
    listStyle: "none",
    display: "flex",
    gap: "2rem",
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    color: "#00ffff",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "bold",
    transition: "color 0.3s ease",
  };

  const linkHoverStyle = {
    color: "#ffffff",
  };

  return (
    <nav style={navStyle}>
      {/* Logo Section */}
      <img
        src="/assets/Custom Logo.png" // Make sure this matches your actual filename
        alt="Arsal Logo"
        style={{ height: "40px" }}
      />

      {/* Navigation Links */}
      <ul style={ulStyle}>
        {["Home", "About", "Projects", "Services", "Contacts"].map((label, index) => (
          <li key={index}>
            <Link
              to={label === "Home" ? "/" : `/${label.toLowerCase()}`}
              style={linkStyle}
              onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
              onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;