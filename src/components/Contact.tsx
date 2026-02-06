import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { SOCIAL_LINKS, PERSONAL_INFO } from "../constants";

const Contact = () => {
  return (
    <section id="contact" className="section-container bg-card/30">
      <div className="max-w-2xl mx-auto text-center glass-card p-8 md:p-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          <span className="text-gradient">Get In Touch</span>
        </h2>
        
        <p className="text-muted-foreground text-lg mb-8">
          I'm currently looking for new opportunities and my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>


        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-mono glow flex items-center gap-2"
          >
            <Mail size={18} />
            Say Hello
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-primary" />
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="hover:text-primary transition-colors">
              {SOCIAL_LINKS.email}
            </a>
          </div>
          
          <div className="flex items-center gap-2">
            <Phone size={18} className="text-primary" />
            <span>{PERSONAL_INFO.phone}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-primary" />
            <span>{PERSONAL_INFO.location}</span>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-8">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-secondary rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
          >
            <Github size={24} />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-secondary rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={SOCIAL_LINKS.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-secondary rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
          >
            <Twitter size={24} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
