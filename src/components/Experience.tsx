import { Building, Calendar, MapPin, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Charles Schwab",
      location: "Dallas, TX",
      period: "September 2022 – Present",
      description: "Leading team of 5 engineers in developing and maintaining critical trading platform infrastructure, conducting code reviews and monitoring and mentoring offshore teams and tasks effectively.",
      achievements: [
        "Automated stock market open/close notifications using Python and VMware Orchestrator, reducing manual monitoring effort by 90% and saving $20K annually",
        "Fine-tuned LLMs and built a custom RAG system for job automation monitoring, enabling faster issue detection and resolution",
        "Developed 12 Spring Boot microservices and React frontend components serving 1K+ daily active users with 99.9% uptime SLA",
        "Optimized legacy Java applications using SonarQube analysis, reducing code smells by 80%, improving execution time by 50%",
        "Streamlined CI/CD Pipelines for 20+ applications using Bitbucket, GitHub, and Bamboo, reducing deployment time from 3 hours to 30 minutes"
      ],
      technologies: ["Java", "Spring Boot", "React", "Python", "VMware", "LLMs"]
    },
    {
      title: "Technology Analyst",
      company: "Anheuser-Busch",
      location: "St. Louis, MO", 
      period: "December 2021 – August 2022",
      description: "Developed Java REST APIs using Spring Boot for B2B commerce platform processing high-volume transactions with comprehensive logging and testing.",
      achievements: [
        "Developed 8 Java REST APIs using Spring Boot for B2B commerce platform processing 50K+ transactions daily with 200ms average response time",
        "Achieved 95% code coverage through comprehensive JUnit testing, reducing production bugs by 70%",
        "Optimized 15 critical Oracle database queries, improving response time by 40% and reducing database CPU usage by 25%",
        "Implemented CI/CD pipelines using Azure DevOps for 3 applications, increasing deployment frequency from weekly to daily"
      ],
      technologies: ["Java", "Spring Boot", "Oracle", "JUnit", "Azure DevOps", "REST APIs"]
    },
    {
      title: "Technology Analyst", 
      company: "Apple Inc.",
      location: "Cupertino, CA",
      period: "May 2020 – November 2021",
      description: "Led Jive Software platform upgrade and maintained Spring Boot REST APIs for internal collaboration platform supporting thousands of users.",
      achievements: [
        "Led Jive Software platform upgrade from version 8.0 to 9.5 supporting 8K+ internal users, completing migration 3 weeks ahead of schedule with zero downtime",
        "Developed and maintained 15 Spring Boot REST APIs, resolving 85+ production bugs with 92% first-time fix rate",
        "Implemented comprehensive Swagger documentation for 15 APIs, reducing developer onboarding time from 2 weeks to 3 days",
        "Managed 12 production deployments across UAT and production environments, maintaining 99% deployment success rate",
        "Improved API response times by 35% through caching strategies and query optimization"
      ],
      technologies: ["Spring Boot", "Jive Software", "Swagger", "REST APIs", "Java"]
    },
    {
      title: "Full Stack Developer",
      company: "People Tech",
      location: "Redmond, WA",
      period: "September 2019 – April 2020", 
      description: "Built RESTful APIs and Angular frontend for Ohio Department of Education, serving students and educators with high performance web applications.",
      achievements: [
        "Built 10 RESTful APIs using .NET Core and Spring Boot for Ohio Department of Education serving 5K students and 100+ educators",
        "Developed Angular 8 frontend with 30+ components improving user task completion rate by 45% and reducing page load time by 60%",
        "Achieved 90% code coverage using MOQ framework across 200+ unit tests and 50+ integration tests"
      ],
      technologies: [".NET Core", "Spring Boot", "Angular 8", "MOQ", "REST APIs"]
    },
    {
      title: "Software Developer",
      company: "Bugfree Technologies Pvt. Ltd.",
      location: "India",
      period: "August 2016 – February 2017",
      description: "Developed cross-platform APIs for mobile applications and implemented real-time systems supporting thousands of users with high availability.",
      achievements: [
        "Developed 6 cross-platform APIs for Android and iOS applications supporting 25K+ mobile users with 99.8% availability", 
        "Implemented real-time push notification system delivering 2M+ notifications monthly with 50ms average latency",
        "Designed secure authentication system using bcrypt hashing and JWT tokens, protecting 25K+ user accounts with zero security breaches",
        "Built responsive web interfaces using AJAX and Bootstrap, improving mobile user engagement by 35%"
      ],
      technologies: ["Java", "Android", "iOS", "JWT", "Bootstrap", "AJAX"]
    },
    {
      title: "Software Developer Intern",
      company: "Space Applications Center ISRO",
      location: "India",
      period: "July 2015 – May 2016", 
      description: "Developed satellite data management system using Java and Hibernate processing massive amounts of satellite imagery with optimized storage and retrieval.",
      achievements: [
        "Developed satellite data management system using Java and Hibernate processing 500GB of satellite imagery daily",
        "Built responsive UI with 15 JSP pages and Bootstrap components supporting 50 concurrent users",
        "Designed normalized database schema with 20+ tables optimizing storage and retrieval of geospatial data",
        "Collaborated with a team of scientists to implement data visualization features for satellite imagery analysis"
      ],
      technologies: ["Java", "Hibernate", "JSP", "Bootstrap", "Database Design"]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Fontbonne University",
      location: "Saint Louis, MO",
      period: "Graduated: May 2019",
      description: "Advanced coursework in software engineering, algorithms, and system design."
    },
    {
      degree: "Bachelor of Engineering in Information Technology", 
      school: "Gujarat Technological University",
      location: "India",
      period: "Graduated: May 2016",
      description: "Foundation in computer science fundamentals and software development."
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background that shaped my expertise
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">Professional Experience</h3>
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

        {/* Education */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center text-foreground">Education</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="gradient-card p-6 rounded-xl shadow-card hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-foreground">{edu.degree}</h4>
                      <div className="space-y-1 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Building className="h-3 w-3 text-accent" />
                          <span className="font-medium">{edu.school}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3 w-3 text-success" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3 w-3 text-primary" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{edu.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;