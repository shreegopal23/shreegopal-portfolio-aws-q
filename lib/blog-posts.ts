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
    id: "4",
    title: "Kubernetes Single-Node Cluster Setup on Ubuntu: A Complete Guide",
    description:
      "A comprehensive step-by-step guide to install and configure a production-ready Kubernetes single-node cluster using kubeadm, kubelet, and kubectl on Ubuntu Server. Perfect for learning, development, and testing environments.",
    thumbnail: "/images/K8s-thumbnail.jpeg",
    category: "Kubernetes",
    readTime: "18 min read",
    publishDate: "2025-12-09",
    slug: "kubernetes-single-node-cluster-setup",
    author: "Shreegopal Dadhich",
    featured: true,
  },
  {
    id: "3",
    title: "Why Caddy is Your Production Setup's Best Friend: A DevOps Engineer's Perspective",
    description:
      "Discover how Caddy web server with automatic HTTPS, zero-downtime reloads, and Docker integration can transform your production infrastructure. From SSL nightmares to seamless deployments.",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop&crop=entropy&auto=format&q=80",
    category: "DevOps",
    readTime: "10 min read",
    publishDate: "2024-09-22",
    slug: "caddy-production-setup-devops-guide",
    author: "Shreegopal Dadhich",
  },
  {
    id: "2",
    title: "Docker Multi-Stage Builds: How We Cut Our Image Sizes by 80% and Saved $50K Annually",
    description:
      "From 2.3GB bloated containers to sleek 380MB production images - discover how ONE simple Dockerfile transformed our deployment pipeline and saved us $50K annually in infrastructure costs.",
    thumbnail: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?w=800&h=400&fit=crop&crop=entropy&auto=format&q=80",
    category: "DevOps",
    readTime: "12 min read",
    publishDate: "2024-09-22",
    slug: "docker-multistage-builds-cost-optimization",
    author: "Shreegopal Dadhich",
  },
  {
    id: "1",
    title: "Setting Up Redis Cluster on AWS EC2 with Docker Compose: A Complete Guide",
    description:
      "Redis is one of the most popular in-memory data structures, widely used for caching, session management, and real-time applications. Learn how to set up a Redis cluster on AWS EC2 using Docker Compose for horizontal scaling and high availability.",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop&crop=entropy&auto=format&q=80",
    category: "Database",
    readTime: "15 min read",
    publishDate: "2025-01-15",
    slug: "redis-cluster-aws-setup",
    author: "Shreegopal Dadhich",
  },
]
