const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "text-primary",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Vue.js", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "JavaScript", level: 95 }
      ]
    },
    {
      title: "Backend",
      color: "text-accent",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "GraphQL", level: 75 },
        { name: "Redis", level: 70 }
      ]
    },
    {
      title: "Tools & Others",
      color: "text-success",
      skills: [
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "Git", level: 95 },
        { name: "Figma", level: 75 },
        { name: "Jest", level: 85 },
        { name: "CI/CD", level: 80 }
      ]
    }
  ];

  const SkillBar = ({ skill, index }: { skill: { name: string; level: number }, index: number }) => (
    <div 
      className="space-y-2 animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex justify-between items-center">
        <span className="text-foreground font-medium">{skill.name}</span>
        <span className="text-muted-foreground text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: `${skill.level}%`,
            animation: "scale-in 1s ease-out forwards"
          }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="gradient-card p-8 rounded-xl shadow-card hover-lift"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className={`text-2xl font-bold mb-6 ${category.color}`}>
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill} 
                    index={categoryIndex * 6 + skillIndex} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-16 text-center animate-fade-in">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB",
              "AWS", "Docker", "Kubernetes", "GraphQL", "Redux", "Express.js",
              "Next.js", "Vue.js", "Tailwind CSS", "Material-UI", "Figma", "Git"
            ].map((tech, index) => (
              <span 
                key={tech}
                className="tech-badge"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;