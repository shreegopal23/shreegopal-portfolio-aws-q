import type React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Cloud, Container, GitBranch, Monitor, Database, Shield, Code, Settings, Star, Award, Zap, ChevronDown } from "lucide-react"
import { useState } from "react"

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
      { name: "AWS", level: 95, description: "EC2, S3, RDS, ECS, CloudFront, Route 53, IAM, CloudWatch" },
      { name: "Microsoft Azure", level: 80, description: "Cloud Services & Infrastructure" },
    ],
  },
  {
    title: "Containerization",
    icon: <Container className="w-6 h-6" />,
    color: "bg-muted/60 text-foreground border-border/40",
    skills: [
      { name: "Docker", level: 95, description: "Multi-stage builds, optimization" },
      { name: "Docker Compose", level: 90, description: "Multi-container applications" },
    ],
  },
  {
    title: "Operating Systems",
    icon: <Monitor className="w-6 h-6" />,
    color: "bg-muted/60 text-foreground border-border/40",
    skills: [
      { name: "Linux (Ubuntu)", level: 95, description: "System administration, scripting" },
      { name: "Linux (CentOS)", level: 90, description: "Enterprise environments" },
    ],
  },
  {
    title: "Orchestration",
    icon: <Settings className="w-6 h-6" />,
    color: "bg-muted/60 text-foreground border-border/40",
    skills: [
      { name: "Kubernetes", level: 90, description: "Deployments, Services, Ingress" },
    ],
  },
  {
    title: "Version Control",
    icon: <GitBranch className="w-6 h-6" />,
    color: "bg-muted/60 text-foreground border-border/40",
    skills: [
      { name: "Git", level: 95, description: "Version control, branching strategies" },
      { name: "GitHub", level: 90, description: "Collaboration, Actions" },
      { name: "GitLab", level: 88, description: "CI/CD, Runners" },
      { name: "Bitbucket", level: 85, description: "Atlassian integration" },
    ],
  },
  {
    title: "Programming Languages",
    icon: <Code className="w-6 h-6" />,
    color: "bg-muted/60 text-foreground border-border/40",
    skills: [
      { name: "Bash", level: 95, description: "System administration, scripting" },
      { name: "Python", level: 90, description: "Automation, APIs" },
    ],
  },
  {
    title: "CI/CD Tools",
    icon: <GitBranch className="w-6 h-6" />,
    color: "bg-muted/60 text-foreground border-border/40",
    skills: [
      { name: "GitLab CI/CD", level: 95, description: "Auto DevOps, Runners, Pipelines" },
      { name: "GitHub Actions", level: 88, description: "Workflows, Marketplace" },
      { name: "Jenkins", level: 90, description: "Pipeline as Code, Blue Ocean" },
    ],
  },
  {
    title: "Infrastructure as Code (IaC)",
    icon: <Database className="w-6 h-6" />,
    color: "bg-muted/60 text-foreground border-border/40",
    skills: [
      { name: "Terraform", level: 95, description: "Modules, State management" },
      { name: "AWS CloudFormation", level: 90, description: "Templates, Stack sets" },
    ],
  },
  {
    title: "Security & Compliance",
    icon: <Shield className="w-6 h-6" />,
    color: "bg-muted/60 text-foreground border-border/40",
    skills: [
      { name: "SOC 2 Compliance", level: 78, description: "Compliance frameworks" },
      { name: "IAM", level: 88, description: "Identity & Access Management" },
    ],
  },
]

function SkillLevelBadge({ level }: { level: number }) {
  let levelText = "Beginner"
  let levelColor = "bg-muted/40 text-muted-foreground border-border/30"
  let icon = null

  if (level >= 90) {
    levelText = "Expert"
    levelColor = "bg-gradient-to-r from-primary/20 to-primary/10 text-primary border-primary/30"
    icon = <Star className="w-3 h-3" />
  } else if (level >= 80) {
    levelText = "Advanced"
    levelColor = "bg-gradient-to-r from-secondary/20 to-secondary/10 text-secondary-foreground border-secondary/30"
    icon = <Award className="w-3 h-3" />
  } else if (level >= 70) {
    levelText = "Intermediate"
    levelColor = "bg-muted/60 text-foreground border-border/40"
    icon = <Zap className="w-3 h-3" />
  }

  return (
    <Badge variant="secondary" className={`text-xs px-2 py-1 flex items-center gap-1 ${levelColor} hover:scale-105 transition-transform duration-200`}>
      {icon}
      {levelText}
    </Badge>
  )
}

function SkillCard({ category, categoryIndex }: { category: SkillCategory; categoryIndex: number }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const displaySkills = category.skills.slice(0, 2)
  const additionalSkills = category.skills.slice(2)
  const hasMoreSkills = additionalSkills.length > 0

  return (
    <Card
      className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.05] border-border/40 bg-card/80 backdrop-blur-md hover:bg-card/95 relative overflow-hidden h-fit"
      style={{ animationDelay: `${categoryIndex * 100}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardHeader className="pb-4 relative">
        <CardTitle className="flex items-center gap-3 text-lg group-hover:text-primary transition-colors duration-300">
          <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            {category.icon}
          </div>
          <span className="font-semibold">{category.title}</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4 relative">
        {/* Display first 2 skills */}
        {displaySkills.map((skill) => (
          <div key={skill.name} className="space-y-2 group/skill">
            <div className="flex items-center justify-between">
              <span className="font-medium text-sm group-hover/skill:text-primary transition-colors duration-200">{skill.name}</span>
              <SkillLevelBadge level={skill.level} />
            </div>
            <div className="relative">
              <Progress 
                value={skill.level} 
                className="h-2.5 bg-muted/40 group-hover/skill:bg-muted/60 transition-colors duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" />
            </div>
            {skill.description && (
              <p className="text-xs text-muted-foreground leading-relaxed group-hover/skill:text-foreground/80 transition-colors duration-200 bg-muted/30 p-2 rounded-lg">
                {skill.description}
              </p>
            )}
          </div>
        ))}

        {/* Dropdown for additional skills */}
        {hasMoreSkills && (
          <div className="border-t border-border/30 pt-3">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center justify-between w-full text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <span>{additionalSkills.length} more skill{additionalSkills.length > 1 ? 's' : ''}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
            
            {isExpanded && (
              <div className="mt-3 space-y-3 animate-in slide-in-from-top-2 duration-200">
                {additionalSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2 group/skill">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm group-hover/skill:text-primary transition-colors duration-200">{skill.name}</span>
                      <SkillLevelBadge level={skill.level} />
                    </div>
                    <div className="relative">
                      <Progress 
                        value={skill.level} 
                        className="h-2.5 bg-muted/40 group-hover/skill:bg-muted/60 transition-colors duration-300" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" />
                    </div>
                    {skill.description && (
                      <p className="text-xs text-muted-foreground leading-relaxed group-hover/skill:text-foreground/80 transition-colors duration-200 bg-muted/30 p-2 rounded-lg">
                        {skill.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-transparent to-primary/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Code className="w-4 h-4" />
            Technical Skills
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
            Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive skill set spanning cloud infrastructure, automation, and modern DevOps practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <SkillCard key={category.title} category={category} categoryIndex={categoryIndex} />
          ))}
        </div>

        {/* <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary-foreground text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Certifications & Learning
          </div>
          <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Professional Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            <div className="group/cert">
              <Badge
                variant="outline"
                className="px-5 py-2 text-sm font-medium border-border/50 text-foreground/90 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:border-primary/30 hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer"
              >
                <Award className="w-4 h-4 mr-2 group-hover/cert:text-primary transition-colors duration-200" />
                AWS Cloud Practitioner
              </Badge>
            </div>
            <div className="group/cert">
              <Badge
                variant="outline"
                className="px-5 py-2 text-sm font-medium border-border/50 text-muted-foreground/60 border-dashed cursor-default"
              >
                <Award className="w-4 h-4 mr-2" />
                AWS Solutions Architect (In Progress)
              </Badge>
            </div>
          </div>
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-card/80 to-card/60 border border-border/50 backdrop-blur-sm max-w-2xl mx-auto">
            <p className="text-muted-foreground leading-relaxed">
              Continuously learning and staying updated with the latest DevOps trends and technologies. 
              Always exploring new tools and methodologies to improve efficiency and reliability.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  )
}
