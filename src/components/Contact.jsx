
import { Mail, Code2, BriefcaseBusiness, MapPin, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
function Contact() {
  return (
    <section className="section-container" id="contact">

      <div className="section-heading">
        <p>LET'S CONNECT</p>
        <h2>Get In <span>Touch</span></h2>
      </div>

      <div className="contact-content">

        <h3>Have an opportunity or project in mind?</h3>

        <p>
          I'm interested in software engineering opportunities
          and connecting with people in the technology community.
        </p>

        <a
          href="mailto:babanjas2002@gmail.com"
          className="btn btn-primary"
        >
          <Send size={18} />
          Say Hello
        </a>

        <div className="contact-details">

          <div>
            <MapPin />
            <span>Durgapur, West Bengal, India</span>
          </div>

          <div>
            <Mail />
            <a href="mailto:babanjas2002@gmail.com">
              babanjas2002@gmail.com
            </a>
          </div>
          <div>
          <FaWhatsapp size={22} />
          <a
            href="https://wa.me/917501540980"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
        >
       
        +91 7501-540-980

        </a>
          </div>

        </div>

        <div className="social-links contact-socials">

          <a href="https://github.com/priyanshu27102002"
             target="_blank" rel="noreferrer">
            <Code2 />
          </a>

          <a href="https://linkedin.com/in/priyanshu-jas/"
             target="_blank" rel="noreferrer">
            <BriefcaseBusiness />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;
