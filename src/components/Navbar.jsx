
import { Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    "About",
    "Skills",
    "Projects",
    "Education",
    "Achievements",
    "Contact"
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">



        {/* Navigation Links */}
        <div
          className={`nav-links ${menuOpen ? "active" : ""}`}
          id="navigation-menu"
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={closeMenu}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Navbar Actions */}
        <div className="nav-actions">

          {/* Theme Toggle */}
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            title="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="navigation-menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
