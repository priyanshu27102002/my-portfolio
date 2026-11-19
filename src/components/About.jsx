
import {
    Code2,
    Target,
    Lightbulb,
    BrainCircuit
  } from "lucide-react";
  
  function About() {
    return (
      <section className="section-container" id="about">
  
        <div className="section-heading">
          <p>GET TO KNOW ME</p>
          <h2>About <span>Me</span></h2>
        </div>
  
        <div className="about-content">
  
          <div className="about-text">
  
            <h3>Engineering mindset. Developer passion.</h3>
  
            <p>
              I am an engineering graduate with a strong interest in
              software engineering and full-stack development.
              My technical experience includes Java, PHP, JavaScript,
              React.js, Laravel and database technologies.
            </p>
  
            <p>
              I enjoy solving programming challenges, developing
              practical applications and continuously improving
              my technical skills.
            </p>
  
            <p>
              Alongside software development, I am exploring
              Data Science using Python. I am learning libraries
              such as NumPy, Pandas and Matplotlib to work with
              datasets, perform data manipulation and analysis,
              and create meaningful visualizations.
            </p>
  
            <p>
              I am also expanding my knowledge of Artificial
              Intelligence and exploring how intelligent
              technologies can be integrated into practical
              software applications.
            </p>
  
            <p>
              Beyond technology, I practise Shotokan Karate,
              which has helped me develop discipline, consistency
              and perseverance.
            </p>
  
          </div>
  
          <div className="about-cards">
  
            <div className="info-card">
              <Code2 />
              <h3>Development</h3>
              <p>
                Building practical full-stack applications
                using modern technologies.
              </p>
            </div>
  
            <div className="info-card">
              <Target />
              <h3>Data Science</h3>
              <p>
                Exploring Python, NumPy, Pandas,
                data analysis and visualization.
              </p>
            </div>
  
            <div className="info-card">
              <BrainCircuit />
              <h3>AI & Innovation</h3>
              <p>
                Exploring Artificial Intelligence and
                its applications in software development.
              </p>
            </div>
  
            <div className="info-card">
              <Lightbulb />
              <h3>Continuous Learning</h3>
              <p>
                Strengthening problem-solving skills
                and exploring emerging technologies.
              </p>
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }
  
  export default About;
  