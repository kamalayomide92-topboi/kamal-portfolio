
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

function Navbar() {
  // State controls whether the mobile menu is open.
  const [menuOpen, setMenuOpen] = useState(false);

  // Navigation links stored as an array of objects.
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar">

      {/* Website logo */}
      <a href="#home" className="logo">
        kamal<span>.</span>
      </a>

      {/* Navigation links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Contact button */}
      <a href="#contact" className="nav-cta">
        Let's talk <ArrowUpRight size={16} />
      </a>

      {/* Mobile menu button */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

    </nav>
  );
}

export default Navbar;
