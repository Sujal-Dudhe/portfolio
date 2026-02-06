import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { SOCIAL_LINKS } from "../constants";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background" />

      <div className="section-container relative z-10 text-center md:text-left pt-24">
        <div className="max-w-4xl glass-panel p-8 md:p-12 lg:p-14 animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-mono text-primary mb-6 animate-fade-up">
            Open to internships & full-time roles
          </span>

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
            I&apos;m a <span className="text-primary">Full-Stack MERN Developer</span> specializing in building exceptional digital
            experiences. Currently pursuing my B.E. in Computer Science while continuously improving through project-based
            learning.
          </p>

          <div className="flex flex-col md:flex-row md:items-center gap-6 animate-fade-up animation-delay-400">
            <a
              href="#projects"
              className="px-8 py-4 bg-transparent border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-mono glow"
            >
              Check out my work!
            </a>

            <div className="flex items-center gap-6 md:pl-1">
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

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
