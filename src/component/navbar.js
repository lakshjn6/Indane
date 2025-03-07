import React from "react";
import { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <img src="Screenshot 2025-02-20 162727.png" alt="LOGO" className="logo"></img>
      
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"} {/* Toggle between ☰ and ✖ */}
      </div>
      
      <ul className={`menu ${menuOpen ? "show" : ""}`}>
        <li>About</li>
        <li>Contact</li>
        <li>Booking</li>
        <li>Product</li>
      </ul>
    </nav>
  );
}
