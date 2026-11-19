
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) =>
      current === "dark" ? "light" : "dark"
    );
  };

  return (
    <div className="app-container">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>

      <footer className="footer">
        <p>
          Designed & Built by <span>Priyanshu Jas</span>
        </p>
        <p>© {new Date().getFullYear()} All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
