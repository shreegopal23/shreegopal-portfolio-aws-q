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
    company: "Logicwind Technologies",
    role: "DevOps Engineer",
    duration: "september 2024 - Present",
    location: "Surat, India",
    description:
      "Designing, deploying, and managing scalable, secure, and fault-tolerant cloud infrastructure for high-traffic applications with 10M+ active users.",
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
    company: "Toshal Infotech",
    role: "DevOps Intern",
    duration: "2023 - 2024",
    location: "Surat, India",
    description:
      "Built cloud-native applications using AWS, Docker, and Kubernetes, showcasing expertise in containerization and orchestration.",
    achievements: [
      "Built AWS-Powered Two-Tier Application with containerized architecture",
      "Containerized Backend and database components using Docker",
      "Orchestrated deployment via Kubernetes for scalability",
      "Demonstrated cloud-native expertise for production-ready solutions",
      "Implemented AWS-Powered Failover System using elastic load balancers",
      "Designed resilient infrastructure maintaining uninterrupted service availability",
      "Seamlessly transferred traffic from primary to backup systems during failures",
      "Enhanced system reliability ensuring continuous service operation",
    ],
    technologies: ["AWS", "ELB", "EC2", "CloudWatch", "Terraform", "Docker", "Kubernetes", "Git", "Linux", "Bash"],
    logo: "/cloud-company-logo.png",
  },
  // {
  //   company: "Toshal Infotech",
  //   role: "DevOps Intern",
  //   duration: "2023",
  //   location: "Surat, India",
  //   description:
  //     "Implemented resilient AWS infrastructure solutions focusing on high availability and failover systems.",
  //   achievements: [
  //     "Implemented AWS-Powered Failover System using elastic load balancers",
  //     "Designed resilient infrastructure maintaining uninterrupted service availability",
  //     "Seamlessly transferred traffic from primary to backup systems during failures",
  //     "Enhanced system reliability ensuring continuous service operation",
  //   ],
  //   technologies: ["AWS", "ELB", "EC2", "CloudWatch", "Terraform", "Docker"],
  //   logo: "/startup-logo.png",
  // },
]

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-16 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="max-w-4xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Building2 className="w-4 h-4" />
            Professional Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building robust infrastructure and enabling teams to deliver software faster and more reliably
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-primary/60 to-primary/30 transform -translate-x-px" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative">
                {/* Timeline dot - only visible on desktop */}
                <div className="hidden md:block absolute left-1/2 top-8 w-6 h-6 bg-gradient-to-r from-primary to-primary/80 rounded-full border-4 border-background shadow-lg ring-4 ring-primary/20 transform -translate-x-3 z-10 group-hover:ring-primary/40 transition-all duration-300">
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                </div>

                {/* Content card - full width on mobile, alternating on desktop */}
                <div className={`w-full ${index % 2 === 0 ? "md:w-1/2 md:pr-8" : "md:w-1/2 md:ml-auto md:pl-8"}`}>
                  <Card className="group/card hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-border/40 bg-card/90 backdrop-blur-md hover:bg-card relative overflow-hidden">
                    {/* Card gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                    
                    <CardContent className="p-4 md:p-6 relative">
                      {/* Company header */}
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center group-hover/card:scale-110 transition-transform duration-300 flex-shrink-0">
                          <Building2 className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg md:text-xl font-bold text-foreground group-hover/card:text-primary transition-colors duration-300 leading-tight">
                            {experience.role}
                          </h3>
                          <p className="text-base md:text-lg font-semibold text-primary/90 mb-2 leading-tight">{experience.company}</p>
                          <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2 bg-muted/50 px-2 py-1 rounded-full">
                              <Calendar className="w-3 h-3 flex-shrink-0" />
                              <span className="whitespace-nowrap">{experience.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-muted/50 px-2 py-1 rounded-full">
                              <MapPin className="w-3 h-3 flex-shrink-0" />
                              <span className="whitespace-nowrap">{experience.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm md:text-base">{experience.description}</p>

                      {/* Key achievements - show only first 2 */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Trophy className="w-4 h-4 text-primary flex-shrink-0" />
                          <h4 className="font-semibold text-foreground text-sm">Key Achievements</h4>
                        </div>
                        <ul className="space-y-2">
                          {experience.achievements.slice(0, 2).map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="text-muted-foreground flex items-start gap-2 group/item text-sm">
                              <span className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-primary/80 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200" />
                              <span className="leading-relaxed group-hover/item:text-foreground transition-colors duration-200">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="px-2 py-1 text-xs bg-gradient-to-r from-muted/80 to-muted/60 text-foreground/90 border-border/50 hover:bg-gradient-to-r hover:from-primary/20 hover:to-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 hover:scale-105"
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
        <div className="text-center mt-12">
          <div className="inline-flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br from-card/80 to-card/60 border border-border/50 backdrop-blur-sm">
            <p className="text-muted-foreground">Want to learn more about my experience?</p>
            <a
              href="/Shreegopal_resume.pdf"
              download="Shreegopal_resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium text-sm"
            >
              Download Full Resume
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
