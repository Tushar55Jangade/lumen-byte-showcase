import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import tradingPlatform from "@/assets/trading-platform.jpg";
import b2bCommerce from "@/assets/b2b-commerce.jpg";
import satelliteSystem from "@/assets/satellite-system.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Trading Platform Infrastructure",
      description: "Critical trading platform infrastructure at Charles Schwab serving 1K+ daily active users with 99.9% uptime SLA. Built 12 Spring Boot microservices and React frontend components with real-time monitoring dashboard.",
      image: tradingPlatform,
      technologies: ["Spring Boot", "React", "TypeScript", "Java", "Microservices"],
      role: "Lead Engineer",
      problem: "Need for robust, real-time trading infrastructure with high availability",
      result: "Achieved 99.9% uptime SLA serving 1K+ daily users with automated monitoring",
      liveUrl: "https://schwab.com",
      githubUrl: "https://github.com/tusharjangade"
    },
    {
      title: "B2B Commerce Platform",
      description: "Scalable B2B commerce platform at Anheuser-Busch processing 50K+ transactions daily. Developed 8 Java REST APIs using Spring Boot with 200ms average response time and comprehensive logging.",
      image: b2bCommerce,
      technologies: ["Java", "Spring Boot", "Oracle", "REST APIs", "Azure DevOps"],
      role: "Technology Analyst",
      problem: "High-volume B2B transactions required fast, reliable processing system",
      result: "Successfully processes 50K+ daily transactions with 200ms response time",
      liveUrl: "https://anheuser-busch.com",
      githubUrl: "https://github.com/tusharjangade"
    },
    {
      title: "Satellite Data Management System",
      description: "Advanced satellite data management system at ISRO processing 500GB of satellite imagery daily. Built with Java and Hibernate, featuring responsive UI and optimized geospatial data storage.",
      image: satelliteSystem,
      technologies: ["Java", "Hibernate", "JSP", "Bootstrap", "Database Design"],
      role: "Software Developer Intern",
      problem: "Efficient processing and visualization of massive satellite imagery datasets",
      result: "Successfully processes 500GB daily with optimized data visualization features",
      liveUrl: "https://isro.gov.in",
      githubUrl: "https://github.com/tusharjangade"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and the impact they've made
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div 
                className={`animate-fade-in ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative group overflow-hidden rounded-xl shadow-card hover-lift">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Project Details */}
              <div 
                className={`space-y-6 animate-slide-in-right ${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}
                style={{ animationDelay: `${index * 0.2 + 0.1}s` }}
              >
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">ROLE</h4>
                    <p className="text-muted-foreground">{project.role}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">PROBLEM</h4>
                    <p className="text-muted-foreground">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">RESULT</h4>
                    <p className="text-success">{project.result}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-primary">TECHNOLOGIES</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button 
                    asChild
                    className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    variant="outline"
                    asChild
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;