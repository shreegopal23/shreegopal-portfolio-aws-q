import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

interface BlogPost {
  id: string
  title: string
  description: string
  thumbnail: string
  category: string
  readTime: string
  publishDate: string
  slug: string
  featured?: boolean
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Resilient Kubernetes Clusters: A Production Guide",
    description:
      "Learn how to design and implement highly available Kubernetes clusters that can withstand failures and scale seamlessly in production environments.",
    thumbnail: "/placeholder.svg?height=240&width=400&text=Kubernetes+Architecture",
    category: "Kubernetes",
    readTime: "8 min read",
    publishDate: "2024-01-15",
    slug: "resilient-kubernetes-clusters",
    featured: true,
  },
  {
    id: "2",
    title: "Infrastructure as Code: Terraform Best Practices",
    description:
      "Discover advanced Terraform patterns, state management strategies, and modular design principles for scalable infrastructure automation.",
    thumbnail: "/placeholder.svg?height=240&width=400&text=Terraform+Code",
    category: "Infrastructure",
    readTime: "6 min read",
    publishDate: "2024-01-08",
    slug: "terraform-best-practices",
  },
  {
    id: "3",
    title: "Monitoring Microservices: From Metrics to Insights",
    description:
      "A comprehensive guide to implementing observability in microservices architectures using Prometheus, Grafana, and distributed tracing.",
    thumbnail: "/placeholder.svg?height=240&width=400&text=Monitoring+Dashboard",
    category: "Monitoring",
    readTime: "10 min read",
    publishDate: "2024-01-02",
    slug: "monitoring-microservices",
  },
  {
    id: "4",
    title: "CI/CD Pipeline Security: Protecting Your Deployments",
    description:
      "Essential security practices for CI/CD pipelines, including secret management, vulnerability scanning, and secure deployment strategies.",
    thumbnail: "/placeholder.svg?height=240&width=400&text=Security+Pipeline",
    category: "Security",
    readTime: "7 min read",
    publishDate: "2023-12-28",
    slug: "cicd-security",
  },
  {
    id: "5",
    title: "Docker Multi-Stage Builds: Optimizing Container Images",
    description:
      "Master Docker multi-stage builds to create smaller, more secure container images while maintaining development flexibility.",
    thumbnail: "/placeholder.svg?height=240&width=400&text=Docker+Optimization",
    category: "Docker",
    readTime: "5 min read",
    publishDate: "2023-12-20",
    slug: "docker-multi-stage-builds",
  },
  {
    id: "6",
    title: "AWS Cost Optimization: Strategies That Actually Work",
    description:
      "Practical approaches to reducing AWS costs without compromising performance, including rightsizing, reserved instances, and automation.",
    thumbnail: "/placeholder.svg?height=240&width=400&text=AWS+Cost+Optimization",
    category: "Cloud",
    readTime: "9 min read",
    publishDate: "2023-12-15",
    slug: "aws-cost-optimization",
  },
]

const categories = ["All", "Kubernetes", "Infrastructure", "Monitoring", "Security", "Docker", "Cloud"]

export function BlogsSection() {
  return (
    <section id="blogs" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Latest Insights</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Sharing knowledge and experiences from the trenches of DevOps, cloud infrastructure, and automation
          </p>
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

        {/* Featured post */}
        {blogPosts.find((post) => post.featured) && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 text-center">Featured Article</h3>
            {(() => {
              const featuredPost = blogPosts.find((post) => post.featured)!
              return (
                <Link href={`/blogs/${featuredPost.slug}`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-primary/20 cursor-pointer">
                    <div className="md:flex">
                      <div className="md:w-1/2">
                        <img
                          src={featuredPost.thumbnail || "/placeholder.svg"}
                          alt={featuredPost.title}
                          className="w-full h-64 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                        />
                      </div>
                      <div className="md:w-1/2 p-8">
                        <div className="flex items-center gap-4 mb-4">
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            {featuredPost.category}
                          </Badge>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(featuredPost.publishDate).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {featuredPost.readTime}
                            </div>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                          {featuredPost.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{featuredPost.description}</p>
                        <div className="flex items-center text-primary font-medium">
                          Read Full Article
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              )
            })()}
          </div>
        )}

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts
            .filter((post) => !post.featured)
            .map((post, index) => (
              <Link key={post.id} href={`/blogs/${post.slug}`}>
                <Card
                  className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full"
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
                        <Badge variant="secondary" className="bg-background/90 text-foreground">
                          {post.category}
                        </Badge>
                      </div>
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
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-sm font-medium text-primary group-hover:underline">Read More</span>
                      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
        </div>

        {/* Load more section */}
        <div className="text-center mt-12">
          <Link href="/blogs">
            <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
              <ExternalLink className="w-4 h-4 mr-2" />
              Show All Blogs
            </Button>
          </Link>
          <p className="text-muted-foreground mt-4 text-sm">More DevOps insights and tutorials</p>
        </div>
      </div>
    </section>
  )
}
