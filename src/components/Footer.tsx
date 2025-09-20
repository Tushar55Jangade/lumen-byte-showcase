import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/alexjohnson",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/alexjohnson",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:alex.johnson@example.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Logo/Name */}
          <div className="text-center md:text-left">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity duration-200"
            >
              Alex Johnson
            </button>
            <p className="text-muted-foreground mt-2">
              Senior Full-stack Developer
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 hover:scale-110"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Right - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground flex items-center justify-center md:justify-end gap-2">
              © {currentYear} Made with 
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              by Alex Johnson
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Designed and developed with modern technologies. 
            <span className="gradient-text font-medium"> Always learning, always growing.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;