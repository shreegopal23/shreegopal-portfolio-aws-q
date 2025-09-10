import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

interface BlogPost {
  id: string
  title: string
  description: string
  content: string
  thumbnail: string
  category: string
  readTime: string
  publishDate: string
  slug: string
  author: string
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Resilient Kubernetes Clusters: A Production Guide",
    description:
      "Learn how to design and implement highly available Kubernetes clusters that can withstand failures and scale seamlessly in production environments.",
    content: `
      <h2>Introduction</h2>
      <p>Building resilient Kubernetes clusters is crucial for production workloads. In this comprehensive guide, we'll explore the key strategies and best practices for creating highly available clusters that can withstand failures and scale seamlessly.</p>
      
      <h2>High Availability Architecture</h2>
      <p>A resilient Kubernetes cluster starts with proper architecture. Here are the key components:</p>
      <ul>
        <li><strong>Multiple Master Nodes:</strong> Deploy at least 3 master nodes across different availability zones</li>
        <li><strong>External etcd Cluster:</strong> Use a separate, highly available etcd cluster</li>
        <li><strong>Load Balancer:</strong> Implement a load balancer for API server access</li>
        <li><strong>Network Redundancy:</strong> Ensure network paths have redundancy</li>
      </ul>
      
      <h2>Node Management</h2>
      <p>Proper node management is essential for cluster resilience:</p>
      <ul>
        <li>Use node pools with different instance types</li>
        <li>Implement proper resource requests and limits</li>
        <li>Configure pod disruption budgets</li>
        <li>Use taints and tolerations for workload isolation</li>
      </ul>
      
      <h2>Monitoring and Alerting</h2>
      <p>Implement comprehensive monitoring to detect issues early:</p>
      <ul>
        <li>Cluster-level metrics with Prometheus</li>
        <li>Application performance monitoring</li>
        <li>Log aggregation with ELK stack</li>
        <li>Custom alerts for critical components</li>
      </ul>
      
      <h2>Backup and Disaster Recovery</h2>
      <p>Prepare for the worst-case scenarios:</p>
      <ul>
        <li>Regular etcd backups</li>
        <li>Application data backup strategies</li>
        <li>Disaster recovery procedures</li>
        <li>Regular recovery testing</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Building resilient Kubernetes clusters requires careful planning and implementation of multiple layers of redundancy. By following these best practices, you can ensure your production workloads remain available even during failures.</p>
    `,
    thumbnail: "/placeholder.svg?height=400&width=800&text=Kubernetes+Architecture",
    category: "Kubernetes",
    readTime: "8 min read",
    publishDate: "2024-01-15",
    slug: "resilient-kubernetes-clusters",
    author: "Shreegopal Dadhiich",
  },
  {
    id: "2",
    title: "Redis Clustering for High Availability: Complete Setup Guide",
    description:
      "Master Redis clustering with sentinel configuration, failover strategies, and performance optimization for production workloads.",
    content: `
      <h2>Introduction to Redis Clustering</h2>
      <p>Redis clustering is essential for achieving high availability and horizontal scaling in production environments. This guide covers everything you need to know about setting up and managing Redis clusters.</p>
      
      <h2>Redis Cluster vs Redis Sentinel</h2>
      <p>Understanding the difference between Redis Cluster and Redis Sentinel is crucial:</p>
      <ul>
        <li><strong>Redis Cluster:</strong> Provides automatic sharding and high availability</li>
        <li><strong>Redis Sentinel:</strong> Provides monitoring and automatic failover for master-slave setups</li>
      </ul>
      
      <h2>Setting Up Redis Cluster</h2>
      <p>Here's how to set up a Redis cluster with 6 nodes (3 masters, 3 slaves):</p>
      <pre><code># Create cluster configuration
redis-cli --cluster create 127.0.0.1:7000 127.0.0.1:7001 127.0.0.1:7002 127.0.0.1:7003 127.0.0.1:7004 127.0.0.1:7005 --cluster-replicas 1</code></pre>
      
      <h2>Configuration Best Practices</h2>
      <ul>
        <li>Enable cluster mode in redis.conf</li>
        <li>Set appropriate timeout values</li>
        <li>Configure memory policies</li>
        <li>Enable persistence with AOF and RDB</li>
      </ul>
      
      <h2>Monitoring and Maintenance</h2>
      <p>Regular monitoring and maintenance are crucial:</p>
      <ul>
        <li>Monitor cluster health with CLUSTER INFO</li>
        <li>Track memory usage and performance metrics</li>
        <li>Implement automated backup strategies</li>
        <li>Plan for node replacement procedures</li>
      </ul>
      
      <h2>Performance Optimization</h2>
      <p>Optimize your Redis cluster for maximum performance:</p>
      <ul>
        <li>Use pipelining for bulk operations</li>
        <li>Implement proper key distribution</li>
        <li>Monitor and optimize network latency</li>
        <li>Use appropriate data structures</li>
      </ul>
    `,
    thumbnail: "/placeholder.svg?height=400&width=800&text=Redis+Cluster",
    category: "Database",
    readTime: "12 min read",
    publishDate: "2024-01-12",
    slug: "redis-clustering-guide",
    author: "Shreegopal Dadhiich",
  },
  {
    id: "3",
    title: "AWS RDS Multi-AZ vs Read Replicas: When to Use What",
    description:
      "Deep dive into AWS RDS deployment options, comparing Multi-AZ deployments and Read Replicas for different use cases and performance requirements.",
    content: `
      <h2>Understanding AWS RDS Deployment Options</h2>
      <p>AWS RDS offers several deployment options to meet different availability and performance requirements. Understanding when to use Multi-AZ deployments versus Read Replicas is crucial for optimal database architecture.</p>
      
      <h2>Multi-AZ Deployments</h2>
      <p>Multi-AZ deployments provide high availability and automatic failover:</p>
      <ul>
        <li><strong>Synchronous replication:</strong> Data is synchronously replicated to a standby instance</li>
        <li><strong>Automatic failover:</strong> Failover occurs automatically during planned maintenance or unplanned outages</li>
        <li><strong>Same endpoint:</strong> Applications connect to the same endpoint before and after failover</li>
        <li><strong>No performance benefit:</strong> Standby instance cannot be used for read operations</li>
      </ul>
      
      <h2>Read Replicas</h2>
      <p>Read Replicas help scale read operations and improve performance:</p>
      <ul>
        <li><strong>Asynchronous replication:</strong> Data is asynchronously replicated to read replicas</li>
        <li><strong>Read scaling:</strong> Distribute read traffic across multiple replicas</li>
        <li><strong>Cross-region support:</strong> Create replicas in different AWS regions</li>
        <li><strong>Manual promotion:</strong> Can be promoted to standalone instances</li>
      </ul>
      
      <h2>When to Use Multi-AZ</h2>
      <p>Choose Multi-AZ deployments when:</p>
      <ul>
        <li>High availability is critical</li>
        <li>You need automatic failover</li>
        <li>Compliance requires synchronous replication</li>
        <li>You want to minimize application changes</li>
      </ul>
      
      <h2>When to Use Read Replicas</h2>
      <p>Choose Read Replicas when:</p>
      <ul>
        <li>You need to scale read operations</li>
        <li>Analytics workloads require separate instances</li>
        <li>Cross-region disaster recovery is needed</li>
        <li>You want to offload reporting queries</li>
      </ul>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Use both Multi-AZ and Read Replicas for comprehensive coverage</li>
        <li>Monitor replication lag for Read Replicas</li>
        <li>Implement proper connection pooling</li>
        <li>Test failover procedures regularly</li>
      </ul>
    `,
    thumbnail: "/placeholder.svg?height=400&width=800&text=AWS+RDS+Architecture",
    category: "AWS",
    readTime: "10 min read",
    publishDate: "2024-01-10",
    slug: "aws-rds-deployment-strategies",
    author: "Shreegopal Dadhiich",
  },
]

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

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <article className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/blogs"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Posts
            </Link>

            <div className="space-y-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {post.category}
              </Badge>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance leading-tight">{post.title}</h1>

              <p className="text-xl text-muted-foreground leading-relaxed">{post.description}</p>

              <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4 border-t">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-xs">SD</span>
                  </div>
                  <span>By {post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.publishDate).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
                <Button variant="ghost" size="sm" className="ml-auto">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>

          {/* Featured image */}
          <div className="mb-12">
            <img
              src={post.thumbnail || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground prose-code:text-primary prose-pre:bg-muted prose-pre:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Footer */}
          <div className="mt-16 pt-8 border-t">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">SD</span>
                </div>
                <div>
                  <p className="font-semibold">{post.author}</p>
                  <p className="text-sm text-muted-foreground">DevOps Engineer & Cloud Architect</p>
                </div>
              </div>
              <Link href="/blogs">
                <Button variant="outline">View All Posts</Button>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
