import { ExternalLink, Github, MessageCircle, ShoppingBag, Languages } from "lucide-react";

const projects = [
  {
    title: "Realtime Chat Application",
    description:
      "A real-time chat application with event-driven communication using Socket.IO. Features JWT-based authentication, one-to-one messaging, online/offline presence, and message persistence.",
    tech: ["Node.js", "Express", "MongoDB", "React", "Tailwind CSS", "Socket.IO", "JWT"],
    github: "https://github.com/Sujal-Dudhe/Realtime-Chat-app",
    live: "https://realtime-chat-app-cs5m.onrender.com",
    icon: MessageCircle,
    featured: true,
  },
  {
    title: "Product Store",
    description:
      "A full-stack product management system with complete CRUD functionality. Includes REST APIs with backend validation, MongoDB integration, responsive UI with Chakra UI, and global state management using Zustand.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Chakra UI", "Zustand"],
    github: "https://github.com/Sujal-Dudhe/mern-product-store",
    live: "https://mern-product-store-mgzv.onrender.com/",
    icon: ShoppingBag,
    featured: true,
  },
  {
    title: "Language Translator",
    description:
      "A client-side language translation application using React and Google Gemini API. Features dynamic language selection and real-time text translation with a responsive interface.",
    tech: ["React", "Tailwind CSS", "Google Gemini API"],
    github: "https://github.com/Sujal-Dudhe/React-Language-Translator",
    icon: Languages,
    featured: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <h2 className="text-2xl md:text-3xl font-bold mb-12">
        <span className="text-gradient">Things I've Built</span>
      </h2>

      <div className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`project-card group ${
              project.featured ? "md:flex md:gap-8" : ""
            }`}
          >
            <div
              className={`${
                project.featured ? "md:w-16 flex-shrink-0" : "mb-4"
              }`}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <project.icon className="text-primary" size={24} />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 flex-shrink-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-primary/80 bg-primary/5 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
