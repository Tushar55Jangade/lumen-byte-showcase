import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text">Alex Johnson</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
            Senior Full-stack Developer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with modern technologies. 
            Passionate about building scalable solutions that make a difference.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={() => scrollToSection("#contact")}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary px-8 py-3 text-lg font-semibold"
          >
            Get in Touch
          </Button>
          <Button 
            onClick={() => scrollToSection("#projects")}
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg"
          >
            View My Work
          </Button>
        </div>

        <div className="flex justify-center space-x-6 pt-8">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 hover:scale-110 transform"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 hover:scale-110 transform"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="mailto:alex@example.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 hover:scale-110 transform"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <button 
          onClick={() => scrollToSection("#about")}
          className="text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;