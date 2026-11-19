
import { useEffect, useState } from "react";
import {
  Code2,
  BriefcaseBusiness,
  Mail,
  Download,
  ArrowDown
} from "lucide-react";

function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="hero section-container" id="home">

      <div className="hero-content">

        <p className="hero-greeting">
          HELLO, I'M
        </p>

        <h1>
          Priyanshu <span>Jas</span>
        </h1>

        <h2>
          Aspiring Software Engineer
        </h2>

        <p className="hero-description">
          Engineering graduate passionate about software development,
          problem solving and building scalable full-stack applications.
          I enjoy turning ideas into practical software solutions.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="btn btn-primary">
            Explore My Work
          </a>

          <a
            href="/Priyanshu_Jas_Resume.pdf"
            download
            className="btn btn-outline"
          >
            <Download size={18} />
            Download Resume
          </a>

        </div>

        <div className="social-links">

          <a
            href="https://github.com/priyanshu27102002"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Code2 />
          </a>

          <a
            href="https://linkedin.com/in/priyanshu-jas/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <BriefcaseBusiness />
          </a>

          <a
            href="mailto:babanjas2002@gmail.com"
            aria-label="Email"
          >
            <Mail />
          </a>

        </div>

      </div>

      <div className="hero-image">
        <div className="image-glow"></div>
        <img src="/profile.png" alt="Priyanshu Jas" />
      </div>

      <a
        href="#about"
        className={`scroll-indicator ${isScrolled ? "hidden" : ""}`}
      >
        <ArrowDown size={20} />
        Scroll to explore
      </a>

    </section>
  );
}

export default Hero;
