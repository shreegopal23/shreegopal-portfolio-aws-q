import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { blogPosts } from "@/lib/blog-posts"
import { RedisClusterAwsSetupContent } from "@/components/blog-posts/redis-cluster-aws-setup"

const blogComponents: Record<string, () => JSX.Element> = {
  "redis-cluster-aws-setup": RedisClusterAwsSetupContent,
}

interface BlogPageProps {
  params: {
    slug: string
  }
}

export default function BlogPage({ params }: BlogPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  
  if (!post) {
    notFound()
  }

  const BlogContent = blogComponents[params.slug]
  
  if (!BlogContent) {
    notFound()
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : `https://yoursite.com/blogs/${params.slug}`

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <article className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link
            href="/blogs"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6 md:mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Blogs
          </Link>

          {/* Article header */}
          <header className="mb-8 md:mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 md:mb-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary w-fit">
                {post.category}
              </Badge>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 flex-shrink-0" />
                  <span className="whitespace-nowrap">
                    {new Date(post.publishDate).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <span className="whitespace-nowrap">{post.readTime}</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-6 text-balance leading-tight">
              {post.title}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 text-balance leading-relaxed">
              {post.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-primary">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-medium">{post.author}</p>
                  <p className="text-sm text-muted-foreground">DevOps Engineer</p>
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="w-fit">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </header>

          {/* Article content */}
          <div className="mb-8 md:mb-12">
            <BlogContent />
          </div>

          {/* Article footer */}
          <footer className="border-t pt-6 md:pt-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <div>
                <p className="font-medium mb-1">Found this helpful?</p>
                <p className="text-sm text-muted-foreground">
                  Share it with others who might benefit from this guide.
                </p>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial"
                >
                  <Button variant="outline" size="sm" className="w-full sm:w-auto">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share on LinkedIn
                  </Button>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </article>

      <Footer />
    </main>
  )
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}
