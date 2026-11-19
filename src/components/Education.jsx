
import { GraduationCap, School } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    level: "Bachelor of Technology",
    institution: "Maulana Abdul Kalam Azad University Of Technology",
    details: "CGPA: 7.59 | 2025"
  },
  {
    icon: School,
    level: "Higher Secondary",
    institution: "CBSE",
    details: "76.2% | 2021"
  },
  {
    icon: School,
    level: "Secondary Education",
    institution: "ICSE",
    details: "85.6% | 2019"
  }
];

function Education() {
  return (
    <section className="section-container" id="education">

      <div className="section-heading">
        <p>MY ACADEMIC BACKGROUND</p>
        <h2>My <span>Education</span></h2>
      </div>

      <div className="timeline">

        {education.map((item, index) => {
          const Icon = item.icon;

          return (
            <div className="timeline-item" key={index}>

              <div className="timeline-icon">
                <Icon size={22} />
              </div>

              <div className="timeline-content">
                <h3>{item.level}</h3>
                <h4>{item.institution}</h4>
                <p>{item.details}</p>
              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
}

export default Education;
