import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { SOCIAL_LINKS } from "../constants";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      {/* Floating orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      
      <div className="section-container text-center md:text-left relative z-10">
        <div className="max-w-3xl">
          <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-up">
            Hi, my name is
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 animate-fade-up animation-delay-100">
            Sujal Dudhe.
          </h1>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6 animate-fade-up animation-delay-200">
            I build things for the web.
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 animate-fade-up animation-delay-300">
            I'm a <span className="text-primary">Full-Stack Developer</span> specializing in building production-ready web applications using the <span className="text-primary">MERN</span> and <span className="text-primary">PERN</span> stacks, with strong problem-solving skills in <span className="text-primary">Data Structures & Algorithms</span>.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-6 animate-fade-up animation-delay-400">
            <a
              href="#projects"
              className="px-8 py-4 bg-transparent border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-mono glow"
            >
              Check out my work!
            </a>

            <div className="flex items-center gap-6">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Twitter size={24} />
              </a>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
