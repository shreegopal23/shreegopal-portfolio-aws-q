import type React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Cloud, Container, GitBranch, Monitor, Database, Shield, Code, Settings } from "lucide-react"

interface Skill {
  name: string
  level: number
  description?: string
}

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: Skill[]
  color: string
}

const skillCategories: SkillCategory[] = [
  {
    title: "Cloud Platforms",
    icon: <Cloud className="w-6 h-6" />,
    color: "bg-muted/60 text-foreground border-border/40",
    skills: [
      { name: "AWS", level: 95, description: "EC2, S3, RDS, Lambda, EKS" },
      { name: "Azure", level: 85, description: "AKS, App Service, Storage" },
      { name: "Google Cloud", level: 75, description: "GKE, Cloud Run, BigQuery" },
      { name: "DigitalOcean", level: 80, description: "Droplets, Kubernetes" },
    ],
  },
  {
    title: "Containerization",
    icon: <Container className="w-6 h-6" />,
    color: "bg-muted/60 text-foreground border-border/40",
    skills: [
      { name: "Docker", level: 95, description: "Multi-stage builds, optimization" },
      { name: "Kubernetes", level: 90, description: "Deployments, Services, Ingress" },
      { name: "Helm", level: 85, description: "Chart development, templating" },
      { name: "Podman", level: 70, description: "Rootless containers" },
    ],
  },
  {
    title: "CI/CD & Automation",
    icon: <GitBranch className="w-6 h-6" />,
    color: "bg-muted/60 text-foreground border-border/40",
    skills: [
      { name: "Jenkins", level: 90, description: "Pipeline as Code, Blue Ocean" },
      { name: "GitLab CI", level: 85, description: "Auto DevOps, Runners" },
      { name: "GitHub Actions", level: 88, description: "Workflows, Marketplace" },
      { name: "CircleCI", level: 80, description: "Orbs, Parallelism" },
    ],
  },
  {
    title: "Infrastructure as Code",
    icon: <Code className="w-6 h-6" />,
    color: "bg-muted/60 text-foreground border-border/40",
    skills: [
      { name: "Terraform", level: 92, description: "Modules, State management" },
      { name: "Ansible", level: 85, description: "Playbooks, Roles, Vault" },
      { name: "CloudFormation", level: 80, description: "Templates, Stack sets" },
      { name: "Pulumi", level: 70, description: "TypeScript, Python" },
    ],
  },
  {
    title: "Monitoring & Observability",
    icon: <Monitor className="w-6 h-6" />,
    color: "bg-muted/60 text-foreground border-border/40",
    skills: [
      { name: "Prometheus", level: 88, description: "Metrics, AlertManager" },
      { name: "Grafana", level: 90, description: "Dashboards, Alerting" },
      { name: "ELK Stack", level: 85, description: "Elasticsearch, Logstash, Kibana" },
      { name: "Datadog", level: 80, description: "APM, Infrastructure monitoring" },
    ],
  },
  {
    title: "Databases & Storage",
    icon: <Database className="w-6 h-6" />,
    color: "bg-muted/60 text-foreground border-border/40",
    skills: [
      { name: "PostgreSQL", level: 85, description: "Performance tuning, Replication" },
      { name: "Redis", level: 80, description: "Caching, Pub/Sub" },
      { name: "MongoDB", level: 75, description: "Sharding, Replica sets" },
      { name: "MySQL", level: 82, description: "Optimization, Backup strategies" },
    ],
  },
  {
    title: "Security & Compliance",
    icon: <Shield className="w-6 h-6" />,
    color: "bg-muted/60 text-foreground border-border/40",
    skills: [
      { name: "HashiCorp Vault", level: 80, description: "Secrets management" },
      { name: "OWASP", level: 85, description: "Security best practices" },
      { name: "SOC 2", level: 78, description: "Compliance frameworks" },
      { name: "SSL/TLS", level: 88, description: "Certificate management" },
    ],
  },
  {
    title: "Scripting & Programming",
    icon: <Settings className="w-6 h-6" />,
    color: "bg-muted/60 text-foreground border-border/40",
    skills: [
      { name: "Python", level: 88, description: "Automation, APIs" },
      { name: "Bash", level: 92, description: "System administration" },
      { name: "Go", level: 75, description: "CLI tools, Microservices" },
      { name: "YAML", level: 95, description: "Configuration management" },
    ],
  },
]

function SkillLevelBadge({ level }: { level: number }) {
  let levelText = "Beginner"
  let levelColor = "bg-muted/40 text-muted-foreground border-border/30"

  if (level >= 90) {
    levelText = "Expert"
    levelColor = "bg-primary/10 text-primary border-primary/20"
  } else if (level >= 80) {
    levelText = "Advanced"
    levelColor = "bg-muted/60 text-foreground border-border/40"
  } else if (level >= 70) {
    levelText = "Intermediate"
    levelColor = "bg-muted/40 text-muted-foreground border-border/30"
  }

  return (
    <Badge variant="secondary" className={`text-xs px-2 py-1 ${levelColor}`}>
      {levelText}
    </Badge>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Comprehensive skill set spanning cloud infrastructure, automation, and modern DevOps practices
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-border/50 bg-card/60 backdrop-blur-sm hover:bg-card/80"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className={`p-2 rounded-lg ${category.color}`}>{category.icon}</div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <SkillLevelBadge level={skill.level} />
                    </div>
                    <Progress value={skill.level} className="h-2 bg-muted/40" />
                    {skill.description && (
                      <p className="text-xs text-muted-foreground leading-relaxed">{skill.description}</p>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Certifications & Learning</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "AWS Solutions Architect",
              "Kubernetes Administrator (CKA)",
              "Docker Certified Associate",
              "Terraform Associate",
              "Azure DevOps Engineer",
            ].map((cert, index) => (
              <Badge
                key={cert}
                variant="outline"
                className="px-4 py-2 text-sm font-medium border-border/40 text-foreground/80 hover:bg-muted/40 transition-colors duration-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {cert}
              </Badge>
            ))}
          </div>
          <p className="text-muted-foreground mt-6 text-sm">
            Continuously learning and staying updated with the latest DevOps trends and technologies
          </p>
        </div>
      </div>
    </section>
  )
}
