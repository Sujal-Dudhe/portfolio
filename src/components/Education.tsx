import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Prof. Ram Meghe Institute of Technology and Research, Badnera",
    period: "2022 – 2026",
    grade: "CGPA: 7.92",
    coursework: ["Data Structures & Algorithms", "Operating Systems", "DBMS", "Computer Networks"],
  },
  {
    degree: "12th Grade (HSC)",
    institution: "The English Junior College, Ner-Parsopant",
    period: "2022",
    grade: "Percentage: 85.17%",
  },
  {
    degree: "10th Grade (SSC)",
    institution: "The English High School, Ner-Parsopant",
    period: "2020",
    grade: "Percentage: 94.20%",
  },
];

const Education = () => {
  return (
    <section id="education" className="section-container bg-card/30">
      <h2 className="text-2xl md:text-3xl font-bold mb-12">
        <span className="text-gradient">Education</span>
      </h2>

      <div className="max-w-3xl">
        {education.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot" />
            
            <div className="pb-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <GraduationCap className="text-primary" size={20} />
                  {edu.degree}
                </h3>
                <span className="text-primary font-mono text-sm">{edu.period}</span>
              </div>
              
              <p className="text-muted-foreground mb-1">{edu.institution}</p>
              <p className="text-primary font-semibold text-sm">{edu.grade}</p>
              
              {edu.coursework && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span key={course} className="skill-tag text-xs">
                      {course}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
