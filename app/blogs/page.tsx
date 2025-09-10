import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, ArrowLeft } from "lucide-react"
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

const allBlogPosts: BlogPost[] = [
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
    title: "Redis Clustering for High Availability: Complete Setup Guide",
    description:
      "Master Redis clustering with sentinel configuration, failover strategies, and performance optimization for production workloads.",
    thumbnail: "/placeholder.svg?height=240&width=400&text=Redis+Cluster",
    category: "Database",
    readTime: "12 min read",
    publishDate: "2024-01-12",
    slug: "redis-clustering-guide",
  },
  {
    id: "3",
    title: "AWS RDS Multi-AZ vs Read Replicas: When to Use What",
    description:
      "Deep dive into AWS RDS deployment options, comparing Multi-AZ deployments and Read Replicas for different use cases and performance requirements.",
    thumbnail: "/placeholder.svg?height=240&width=400&text=AWS+RDS+Architecture",
    category: "AWS",
    readTime: "10 min read",
    publishDate: "2024-01-10",
    slug: "aws-rds-deployment-strategies",
  },
  {
    id: "4",
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
    id: "5",
    title: "PostgreSQL Performance Tuning: From Basics to Advanced",
    description:
      "Comprehensive guide to optimizing PostgreSQL performance including indexing strategies, query optimization, and configuration tuning.",
    thumbnail: "/placeholder.svg?height=240&width=400&text=PostgreSQL+Performance",
    category: "Database",
    readTime: "15 min read",
    publishDate: "2024-01-05",
    slug: "postgresql-performance-tuning",
  },
  {
    id: "6",
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
    id: "7",
    title: "AWS Lambda Cold Starts: Optimization Strategies",
    description:
      "Learn how to minimize AWS Lambda cold start times with provisioned concurrency, runtime optimization, and architectural patterns.",
    thumbnail: "/placeholder.svg?height=240&width=400&text=AWS+Lambda+Performance",
    category: "AWS",
    readTime: "8 min read",
    publishDate: "2023-12-30",
    slug: "aws-lambda-cold-start-optimization",
  },
  {
    id: "8",
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
    id: "9",
    title: "Docker Multi-Stage Builds: Optimizing Container Images",
    description:
      "Master Docker multi-stage builds to create smaller, more secure container images while maintaining development flexibility.",
    thumbnail: "/placeholder.svg?height=240&width=400&text=Docker+Optimization",
    category: "Docker",
    readTime: "5 min read",
    publishDate: "2023-12-20",
    slug: "docker-multi-stage-builds",
  },
]

const categories = ["All", "Kubernetes", "Database", "AWS", "Infrastructure", "Monitoring", "Security", "Docker"]

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
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">All Blog Posts</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Deep dives into DevOps, cloud infrastructure, databases, and automation
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

          {/* Blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBlogPosts.map((post, index) => (
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
                      <span className="text-sm font-medium text-primary group-hover:underline">Read Article</span>
                      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
