import { Code2, Server, Database, GitBranch } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Frontend", desc: "React, HTML, CSS" },
  { icon: Server, label: "Backend", desc: "Node.js, Express" },
  { icon: Database, label: "Database", desc: "MongoDB, MySQL" },
  { icon: GitBranch, label: "Version Control", desc: "Git, GitHub" },
];

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="text-2xl md:text-3xl font-bold mb-12">
        <span className="text-gradient">About Me</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          <p className="text-muted-foreground text-lg leading-relaxed">
            I'm Sujal, a Full-Stack MERN Developer and Computer Science student at <span className="text-primary">Prof. Ram Meghe Institute of Technology and Research</span>. 
            I specialize in building scalable web applications and have a strong command of <span className="text-primary">Java</span> and <span className="text-primary">Data Structures</span>.
          </p>
          
          <p className="text-muted-foreground text-lg leading-relaxed">
            Beyond development, I am an enthusiastic problem solver with over <span className="text-primary">350+ DSA problems</span> solved. 
            I'm dedicated to writing clean, efficient code and continuously learning new technologies to deliver exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 content-start">
          {highlights.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
            >
              <Icon className="text-primary mb-2 group-hover:scale-110 transition-transform" size={24} />
              <h3 className="font-semibold text-foreground text-sm">{label}</h3>
              <p className="text-muted-foreground text-xs">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
