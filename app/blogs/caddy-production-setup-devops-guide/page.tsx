import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CaddyProductionSetupDevopsGuideContent } from "@/components/blog-posts/caddy-production-setup-devops-guide"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CaddyProductionSetupDevopsGuidePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <article className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link
            href="/blogs"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          {/* Article header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                DevOps
              </Badge>
              <Badge className="bg-primary text-primary-foreground">
                Featured
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
              Why Caddy is Your Production Setup's Best Friend: A DevOps Engineer's Perspective
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>September 22, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>10 min read</span>
              </div>
              <div>
                <span>By Shreegopal Dadhich</span>
              </div>
            </div>
          </header>

          {/* Article content */}
          <CaddyProductionSetupDevopsGuideContent />
        </div>
      </article>

      <Footer />
    </main>
  )
}
