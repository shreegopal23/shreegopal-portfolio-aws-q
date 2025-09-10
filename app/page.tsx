"use client"

import { Navigation } from "@/components/navigation"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { SkillsSection } from "@/components/skills-section"
import { BlogsSection } from "@/components/blogs-section"
import { ConnectSection } from "@/components/connect-section"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react"
import { useEffect, useState } from "react"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20 pointer-events-none" />

        <div
          className="absolute top-20 left-10 w-2 h-2 bg-primary/20 rounded-full animate-pulse"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute bottom-40 right-20 w-1.5 h-1.5 bg-primary/25 rounded-full animate-pulse"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        />

        <div
          className={`relative max-w-5xl mx-auto text-center space-y-8 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Main heading */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg md:text-xl text-muted-foreground font-medium tracking-wide">Hello, I'm</p>
              <div className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
                <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Shreegopal Dadhiich
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mt-4">DevOps Engineer</h2>
            </div>

            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
              Architecting scalable cloud infrastructure, automating CI/CD pipelines, and enabling teams to deploy with
              confidence
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {["AWS", "Kubernetes", "Docker", "Terraform", "Jenkins", "Monitoring"].map((tech, index) => (
              <Badge
                key={tech}
                variant="outline"
                className="px-3 py-1 text-sm font-medium border-primary/30 text-primary/80 hover:bg-primary/10 transition-all duration-200 hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`,
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.5s ease-out ${index * 100}ms`,
                }}
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              asChild
              size="lg"
              className="px-8 py-3 text-base font-medium bg-primary hover:bg-primary/90 transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-primary/50"
            >
              <a href="#experience">View My Work</a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="px-8 py-3 text-base font-medium border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-200 bg-transparent focus:ring-2 focus:ring-primary/50"
            >
              <a href="#connect">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-6 pt-8">
            {[
              { href: "#", icon: Github, label: "GitHub" },
              { href: "#", icon: Linkedin, label: "LinkedIn" },
              { href: "#", icon: Download, label: "Download Resume" },
            ].map(({ href, icon: Icon, label }, index) => (
              <a
                key={label}
                href={href}
                className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110 transform focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-sm p-1"
                aria-label={label}
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.5s ease-out ${(index + 6) * 100}ms`,
                }}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10"
            style={{ animationDuration: "2s" }}
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </div>
        </div>
      </section>

      <ExperienceTimeline />
      <SkillsSection />
      <BlogsSection />
      <ConnectSection />
      <Footer />
    </main>
  )
}
