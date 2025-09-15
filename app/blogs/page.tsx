import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { blogPosts } from "@/lib/blog-posts"
import { DevOpsLoader } from "@/components/devops-loader"

const categories = ["All", "Database", "DevOps", "Infrastructure", "AWS", "Docker", "Kubernetes"]

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Technical Blog</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              In-depth guides on DevOps, cloud infrastructure, and modern development practices
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mt-6">
              <span>{blogPosts.length} Article{blogPosts.length !== 1 ? 's' : ''}</span>
              <span>•</span>
              <span>Updated regularly</span>
            </div>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <Badge
                key={category}
                variant={index === 0 ? "default" : "outline"}
                className={`px-4 py-2 text-sm font-medium cursor-pointer transition-all duration-200 hover:scale-105 ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "border-primary/30 text-primary/80 hover:bg-primary/10"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link key={post.id} href={`/blogs/${post.slug}`}>
                <Card
                  className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full border-border/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={post.thumbnail || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-background/90 text-foreground shadow-sm">
                          {post.category}
                        </Badge>
                      </div>
                      {post.featured && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-primary text-primary-foreground shadow-sm">
                            Featured
                          </Badge>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.publishDate).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2 flex-grow">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3 flex-grow">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                      <span className="text-sm font-medium text-primary group-hover:underline">Read Article</span>
                      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Empty state for future blogs */}
          {blogPosts.length === 1 && (
            <div className="text-center mt-16 p-8 border border-dashed border-border rounded-lg">
              <DevOpsLoader />
              <p className="text-muted-foreground mb-2 mt-4">More articles coming soon!</p>
              <p className="text-sm text-muted-foreground">
                Stay tuned for more in-depth technical guides and tutorials.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
