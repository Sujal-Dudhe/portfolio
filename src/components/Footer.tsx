import { PERSONAL_INFO } from "../constants";

const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-border">
      <p className="text-muted-foreground text-sm font-mono">
        Designed & Built by{" "}
        <span className="text-primary">{PERSONAL_INFO.name}</span>
      </p>
      <p className="text-muted-foreground/60 text-xs mt-2">
        Built with React & Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
