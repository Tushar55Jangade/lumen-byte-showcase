import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full-stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading development of scalable web applications serving 100k+ users. Architecting microservices infrastructure and mentoring junior developers.",
      achievements: [
        "Reduced application load time by 60% through optimization",
        "Led a team of 5 developers on critical projects",
        "Implemented CI/CD pipeline reducing deployment time by 80%",
        "Architected scalable microservices handling 1M+ requests/day"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"]
    },
    {
      title: "Full-stack Developer",
      company: "StartupHub Inc",
      location: "Austin, TX",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client-facing applications. Collaborated with design and product teams to deliver exceptional user experiences.",
      achievements: [
        "Built 10+ production applications from scratch",
        "Improved code coverage from 40% to 95%",
        "Reduced bug reports by 70% through automated testing",
        "Mentored 3 junior developers and interns"
      ],
      technologies: ["Vue.js", "Python", "MongoDB", "Git", "Figma"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "Remote",
      period: "2019 - 2020",
      description: "Specialized in creating responsive and interactive user interfaces for various clients across different industries.",
      achievements: [
        "Delivered 20+ responsive websites ahead of schedule",
        "Increased client satisfaction scores by 40%",
        "Implemented modern design systems and components",
        "Collaborated with international teams across 5 time zones"
      ],
      technologies: ["JavaScript", "CSS", "React", "Sass", "Webpack"]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the impact I've made along the way
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 items-start ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 glow-primary"></div>

                {/* Content */}
                <div 
                  className={`flex-1 ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'
                  }`}
                >
                  <div 
                    className="gradient-card p-8 rounded-xl shadow-card hover-lift animate-fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-foreground">
                          {experience.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row gap-2 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Building className="h-4 w-4 text-primary" />
                            <span className="font-medium">{experience.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-accent" />
                            <span>{experience.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-success" />
                            <span>{experience.period}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {experience.description}
                      </p>

                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-primary">KEY ACHIEVEMENTS</h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achIndex) => (
                            <li 
                              key={achIndex}
                              className="flex items-start gap-2 text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-primary">TECHNOLOGIES</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span key={tech} className="tech-badge text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;