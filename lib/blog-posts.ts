export interface BlogPost {
  id: string
  title: string
  description: string
  thumbnail: string
  category: string
  readTime: string
  publishDate: string
  slug: string
  author: string
  featured?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Setting Up Redis Cluster on AWS EC2 with Docker Compose: A Complete Guide",
    description:
      "Learn how to set up a highly available Redis cluster on AWS EC2 using Docker Compose. Complete with configuration files, security setup, and production considerations.",
    thumbnail: "/placeholder.svg?height=240&width=400&text=Redis+Cluster+AWS",
    category: "Database",
    readTime: "15 min read",
    publishDate: "2024-09-15",
    slug: "redis-cluster-aws-setup",
    author: "Shreegopal Dadhich",
    featured: true,
  },
  {
    id: "2",
    title: "Building Resilient Kubernetes Clusters: A Production Guide",
    description:
      "Learn how to design and implement highly available Kubernetes clusters that can withstand failures and scale seamlessly in production environments.",
    thumbnail: "/placeholder.svg?height=240&width=400&text=Kubernetes+Architecture",
    category: "Kubernetes",
    readTime: "8 min read",
    publishDate: "2024-01-15",
    slug: "resilient-kubernetes-clusters",
    author: "Shreegopal Dadhich",
  },
  {
    id: "3",
    title: "Infrastructure as Code: Terraform Best Practices",
    description:
      "Discover advanced Terraform patterns, state management strategies, and modular design principles for scalable infrastructure automation.",
    thumbnail: "/placeholder.svg?height=240&width=400&text=Terraform+Code",
    category: "Infrastructure",
    readTime: "6 min read",
    publishDate: "2024-01-08",
    slug: "terraform-best-practices",
    author: "Shreegopal Dadhich",
  },
]
