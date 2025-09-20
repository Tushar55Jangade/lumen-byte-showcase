import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive dashboard for managing e-commerce operations with real-time analytics, inventory management, and sales tracking. Built with React, TypeScript, and modern UI components.",
      image: project1,
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
      role: "Full-stack Developer",
      problem: "Small businesses needed an affordable, feature-rich e-commerce management solution",
      result: "Increased operational efficiency by 40% for 200+ businesses",
      liveUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example/ecommerce-dashboard"
    },
    {
      title: "FinTech Mobile App",
      description: "A modern banking application with advanced security features, real-time transactions, and intuitive user experience. Developed for both iOS and Android platforms.",
      image: project2,
      technologies: ["React Native", "Node.js", "MongoDB", "JWT", "Plaid API"],
      role: "Lead Mobile Developer",
      problem: "Traditional banking apps lacked modern UX and advanced features",
      result: "Achieved 4.8/5 app store rating with 50k+ downloads",
      liveUrl: "https://app.example.com",
      githubUrl: "https://github.com/example/fintech-app"
    },
    {
      title: "AI Task Management",
      description: "An intelligent task management platform that uses AI to prioritize tasks, suggest optimizations, and automate workflow processes for increased productivity.",
      image: project3,
      technologies: ["Next.js", "Python", "OpenAI", "PostgreSQL", "Docker"],
      role: "Full-stack Developer",
      problem: "Teams struggled with task prioritization and workflow optimization",
      result: "Improved team productivity by 35% across 100+ organizations",
      liveUrl: "https://tasks.example.com",
      githubUrl: "https://github.com/example/ai-tasks"
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