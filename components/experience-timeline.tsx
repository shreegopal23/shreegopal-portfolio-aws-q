import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, ExternalLink, Building2, Trophy } from "lucide-react"

interface ExperienceItem {
  company: string
  role: string
  duration: string
  location: string
  description: string
  achievements: string[]
  technologies: string[]
  logo: string
}

const experiences: ExperienceItem[] = [
  {
    company: "TechCorp Solutions",
    role: "Senior DevOps Engineer",
    duration: "2022 - Present",
    location: "San Francisco, CA",
    description:
      "Leading infrastructure automation and cloud migration initiatives for a high-growth SaaS platform serving 100K+ users.",
    achievements: [
      "Reduced deployment time by 75% through CI/CD pipeline optimization",
      "Architected multi-region AWS infrastructure supporting 99.9% uptime",
      "Led migration from monolith to microservices, improving scalability by 300%",
      "Implemented comprehensive monitoring reducing MTTR by 60%",
    ],
    technologies: ["AWS", "Kubernetes", "Terraform", "Jenkins", "Docker", "Prometheus"],
    logo: "/abstract-tech-logo.png",
  },
  {
    company: "CloudScale Inc",
    role: "DevOps Engineer",
    duration: "2020 - 2022",
    location: "Austin, TX",
    description:
      "Designed and maintained cloud infrastructure for e-commerce platform processing $50M+ in annual transactions.",
    achievements: [
      "Built automated deployment pipeline reducing manual errors by 90%",
      "Optimized cloud costs saving $200K annually through resource rightsizing",
      "Implemented blue-green deployments enabling zero-downtime releases",
      "Established disaster recovery procedures with 4-hour RTO",
    ],
    technologies: ["Azure", "Docker", "Ansible", "GitLab CI", "Grafana", "ELK Stack"],
    logo: "/cloud-company-logo.png",
  },
  {
    company: "StartupFlow",
    role: "Infrastructure Engineer",
    duration: "2018 - 2020",
    location: "Remote",
    description:
      "Built foundational infrastructure for early-stage fintech startup, establishing DevOps practices from ground up.",
    achievements: [
      "Designed secure, compliant infrastructure meeting SOC 2 requirements",
      "Automated infrastructure provisioning reducing setup time from days to hours",
      "Implemented comprehensive backup and monitoring solutions",
      "Mentored development team on DevOps best practices and tooling",
    ],
    technologies: ["AWS", "Terraform", "CircleCI", "Docker", "PostgreSQL", "Redis"],
    logo: "/startup-logo.png",
  },
]

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="max-w-4xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Building2 className="w-4 h-4" />
            Professional Journey
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building robust infrastructure and enabling teams to deliver software faster and more reliably
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-primary/60 to-primary/30 md:transform md:-translate-x-px" />

          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:items-center group`}
              >
                {/* Timeline dot with pulse animation */}
                <div className="absolute left-6 md:left-1/2 w-6 h-6 bg-gradient-to-r from-primary to-primary/80 rounded-full border-4 border-background shadow-lg ring-4 ring-primary/20 md:transform md:-translate-x-3 z-10 group-hover:ring-primary/40 transition-all duration-300">
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                </div>

                {/* Content card */}
                <div className={`w-full md:w-1/2 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <Card className="group/card hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] border-border/40 bg-card/90 backdrop-blur-md hover:bg-card relative overflow-hidden">
                    {/* Card gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                    
                    <CardContent className="p-8 relative">
                      {/* Company header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center group-hover/card:scale-110 transition-transform duration-300">
                          <Building2 className="w-7 h-7 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-foreground group-hover/card:text-primary transition-colors duration-300">
                            {experience.role}
                          </h3>
                          <p className="text-xl font-semibold text-primary/90 mb-3">{experience.company}</p>
                          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-full">
                              <Calendar className="w-4 h-4" />
                              {experience.duration}
                            </div>
                            <div className="flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-full">
                              <MapPin className="w-4 h-4" />
                              {experience.location}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed text-lg">{experience.description}</p>

                      {/* Key achievements */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Trophy className="w-5 h-5 text-primary" />
                          <h4 className="font-semibold text-foreground">Key Achievements</h4>
                        </div>
                        <ul className="space-y-3">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="text-muted-foreground flex items-start gap-3 group/item">
                              <span className="w-2 h-2 bg-gradient-to-r from-primary to-primary/80 rounded-full mt-2.5 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200" />
                              <span className="leading-relaxed group-hover/item:text-foreground transition-colors duration-200">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="px-3 py-1.5 bg-gradient-to-r from-muted/80 to-muted/60 text-foreground/90 border-border/50 hover:bg-gradient-to-r hover:from-primary/20 hover:to-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 hover:scale-105"
                            style={{ animationDelay: `${techIndex * 50}ms` }}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-gradient-to-br from-card/80 to-card/60 border border-border/50 backdrop-blur-sm">
            <p className="text-muted-foreground text-lg">Want to learn more about my experience?</p>
            <a
              href="#"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
            >
              Download Full Resume
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
