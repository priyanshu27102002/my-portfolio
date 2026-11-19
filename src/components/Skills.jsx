
const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "PHP", "Python", "SQL"]
    },
    {
      title: "Web Development",
      skills: ["React.js", "Laravel 11", "HTML", "CSS", "Tailwind CSS"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB"]
    },
    {
      title: "Tools & Cloud",
      skills: ["Git", "GitHub", "AWS", "UiPath", "Linux"]
    }
  ];
  
  function Skills() {
    return (
      <section id="skills" className="section">
        <div className="section-container">
          <p className="section-subtitle">WHAT I WORK WITH</p>
          <h2 className="section-title">Technical Skills</h2>
  
          <div className="skills-grid">
            {skillCategories.map((category) => (
              <div className="skill-card" key={category.title}>
                <h3>{category.title}</h3>
  
                <div className="skill-tags">
                     {category.skills.join(", ")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Skills;
  