import { Code2, Server, Database, GitBranch } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Frontend", desc: "React, TypeScript, CSS" },
  { icon: Server, label: "Backend", desc: "Node.js, Express, REST APIs" },
  { icon: Database, label: "Database / ORM", desc: "MongoDB, PostgreSQL, Prisma" },
  { icon: GitBranch, label: "Deployment", desc: "Vercel, Render, Git" },
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
            I'm Sujal, a <span className="text-primary">Full-Stack Developer</span> with experience building production-ready web applications using the <span className="text-primary">MERN</span> and <span className="text-primary">PERN</span> stacks. 
            I specialize in <span className="text-primary">React.js</span>, <span className="text-primary">Node.js</span>, <span className="text-primary">Express.js</span>, <span className="text-primary">TypeScript</span>, <span className="text-primary">PostgreSQL</span>, <span className="text-primary">MongoDB</span>, and REST API development.
          </p>
          
          <p className="text-muted-foreground text-lg leading-relaxed">
            I have hands-on experience implementing <span className="text-primary">JWT authentication</span>, utilizing <span className="text-primary">Prisma ORM</span>, and integrating third-party services like <span className="text-primary">Razorpay</span> and <span className="text-primary">Nodemailer</span>. I am also experienced in cloud deployment using platforms like <span className="text-primary">Vercel</span> and <span className="text-primary">Render</span>.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Proficient in <span className="text-primary">Data Structures and Algorithms</span>, I possess strong problem-solving skills with over <span className="text-primary">350+ solved problems</span>, dedicated to writing clean, optimized, and efficient code.
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
