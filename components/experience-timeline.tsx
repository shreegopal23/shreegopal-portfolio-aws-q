import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, ExternalLink } from "lucide-react"

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
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Building robust infrastructure and enabling teams to deliver software faster and more reliably
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 md:transform md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:items-center`}
              >
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg ring-2 ring-primary/20 md:transform md:-translate-x-2 z-10" />

                {/* Content card */}
                <div className={`w-full md:w-1/2 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-border/60 bg-card/80 backdrop-blur-sm hover:bg-card/90">
                    <CardContent className="p-6">
                      {/* Company header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center">
                          <div className="w-6 h-6 rounded bg-primary/20" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                            {experience.role}
                          </h3>
                          <p className="text-lg font-medium text-primary">{experience.company}</p>
                          <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {experience.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {experience.location}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4 leading-relaxed">{experience.description}</p>

                      {/* Key achievements */}
                      <div className="mb-4">
                        <h4 className="font-medium mb-3 text-foreground">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="text-sm text-muted-foreground flex items-start gap-3">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs px-3 py-1 bg-muted/60 text-foreground/80 border-border/40 hover:bg-muted/80 transition-colors"
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
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Want to learn more about my experience?</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            Download Full Resume
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
