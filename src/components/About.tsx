import { Code, Coffee, Users, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "8+ Years Experience",
      description: "Building enterprise-grade applications"
    },
    {
      icon: Zap,
      title: "100+ APIs Built",
      description: "RESTful microservices at scale"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Leading cross-functional teams"
    },
    {
      icon: Coffee,
      title: "Problem Solver",
      description: "Turning ideas into reality"
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Senior Software Engineer with 8+ years of experience building scalable 
                Java/Spring Boot microservices and React applications. My expertise spans across 
                enterprise-grade solutions, cloud environments (AWS, Azure, PCF), and leading 
                high-performing development teams.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in automating operations, optimizing system performance, and delivering 
                high-uptime solutions. My passion lies in solving complex technical challenges and 
                mentoring fellow engineers to achieve their full potential.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">What drives me:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Leading teams to deliver enterprise solutions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Automating operations and optimizing performance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>Building scalable microservices architecture</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Mentoring and developing technical talent</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="gradient-card p-6 rounded-xl shadow-card hover-lift group"
              >
                <highlight.icon className="h-8 w-8 text-primary mb-4 group-hover:text-accent transition-colors duration-200" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;