const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "Tailwind CSS", "React"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "Postman"],
  },
  {
    title: "Core Concepts",
    skills: ["DSA", "OOP", "DBMS", "OS", "Computer Networks"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-container bg-card/30">
      <h2 className="text-2xl md:text-3xl font-bold mb-12">
        <span className="text-gradient">Skills & Technologies</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div key={category.title} className="p-6 bg-card border border-border rounded-xl">
            <h3 className="text-lg font-semibold text-primary mb-4 font-mono">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
