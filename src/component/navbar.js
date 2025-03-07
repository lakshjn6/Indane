import React, { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu on mobile after clicking
    }
  };

  return (
    <nav className="navbar">
      <img src="Screenshot 2025-02-20 162727.png" alt="LOGO" className="logo" />
      
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"} {/* Toggle between ☰ and ✖ */}
      </div>

      <ul className={`menu ${menuOpen ? "show" : ""}`}>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
        <li onClick={() => scrollToSection("booking")}>Booking</li>
        <li onClick={() => scrollToSection("product")}>Product</li>
      </ul>
    </nav>
  );
}

