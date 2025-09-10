import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-transparent to-primary/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary-foreground text-sm font-medium">
            <Award className="w-4 h-4" />
            Certifications & Learning
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Professional Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Continuously learning and staying updated with the latest DevOps trends and technologies
          </p>
        </div>

        {/* Certifications grid */}
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
          <p className="text-muted-foreground leading-relaxed text-center">
            Always exploring new tools and methodologies to improve efficiency and reliability.
          </p>
        </div>
      </div>
    </section>
  )
}
