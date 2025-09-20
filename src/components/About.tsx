import { Code, Coffee, Users, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "5+ Years Experience",
      description: "Building scalable web applications"
    },
    {
      icon: Zap,
      title: "50+ Projects",
      description: "Successfully delivered solutions"
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
                I'm a passionate full-stack developer with over 5 years of experience 
                creating innovative digital solutions. My journey in technology started 
                with a curiosity about how things work, and it has evolved into a career 
                dedicated to building exceptional user experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in modern web technologies and love tackling complex 
                problems that require creative solutions. When I'm not coding, you'll 
                find me exploring new technologies, contributing to open-source projects, 
                or mentoring fellow developers.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">What drives me:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Creating impactful digital experiences</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Continuous learning and growth</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>Collaborating with talented teams</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Mentoring and knowledge sharing</span>
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