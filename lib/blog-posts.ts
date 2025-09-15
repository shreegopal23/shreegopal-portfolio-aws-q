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
      "Redis is one of the most popular in-memory data structures, widely used for caching, session management, and real-time applications. Learn how to set up a Redis cluster on AWS EC2 using Docker Compose for horizontal scaling and high availability.",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop&crop=entropy&auto=format&q=80",
    category: "Database",
    readTime: "15 min read",
    publishDate: "2025-01-15",
    slug: "redis-cluster-aws-setup",
    author: "Shreegopal Dadhich",
    featured: true,
  },
]
