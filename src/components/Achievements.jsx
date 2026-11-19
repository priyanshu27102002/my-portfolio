
import { Cloud, Code2 } from "lucide-react";

const achievements = [
  {
    icon: Cloud,
    title: "AWS Certified Cloud Practitioner",
    description:
      "Earned AWS Certified Cloud Practitioner certification.",
    certificate: "/certificates/aws-cloud-practitioner.pdf",
    linkText: "View Certificate"
  },
  {
    icon: Code2,
    title: "LeetCode Problem Solving",
    description:
      "Solved 190+ programming problems, strengthening data structures and algorithmic problem-solving skills.",
    link: "https://leetcode.com/u/Priyanshu_jas750/",
    linkText: "View LeetCode Profile"
  }
];

function Achievements() {
  return (
    <section className="section-container" id="achievements">

      <div className="section-heading">
        <p>BEYOND THE CLASSROOM</p>
        <h2>
          Certifications & <span>Achievements</span>
        </h2>
      </div>

      <div className="achievement-grid">

        {achievements.map((item) => {
          const Icon = item.icon;
          const destination = item.certificate || item.link;

          return (
            <a
              className="achievement-card"
              key={item.title}
              href={destination}
              target="_blank"
              rel="noopener noreferrer"
            >

              <div className="achievement-icon">
                <Icon size={25} />
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <span className="certificate-link">
                {item.linkText} ↗
              </span>

            </a>
          );
        })}

      </div>
    </section>
  );
}

export default Achievements;
