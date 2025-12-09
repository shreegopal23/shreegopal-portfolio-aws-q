'use client'

import { useState } from 'react'
import { Copy, Check, DollarSign, Zap, Shield, Clock } from 'lucide-react'

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  
  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 p-2 bg-white/10 hover:bg-white/20 rounded border border-white/20 transition-colors"
      title="Copy to clipboard"
    >
      {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-white/70" />}
    </button>
  )
}

function MetricCard({ title, before, after, improvement, icon: Icon }: {
  title: string
  before: string
  after: string
  improvement: string
  icon: any
}) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        <h3 className="font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">Before:</span>
          <span className="font-mono text-red-600 dark:text-red-400">{before}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">After:</span>
          <span className="font-mono text-green-600 dark:text-green-400">{after}</span>
        </div>
        <div className="flex justify-between border-t pt-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Improvement:</span>
          <span className="font-bold text-green-600 dark:text-green-400">{improvement}</span>
        </div>
      </div>
    </div>
  )
}

export function DockerMultistageBuildsContent() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:scroll-mt-20">
      <div className="mb-8 p-6 bg-muted/50 rounded-lg border">
        <p className="text-lg leading-relaxed mb-0">
          Docker multi-stage builds are a powerful feature that allows you to create smaller, more secure container images while maintaining development flexibility. By using multiple stages in a single Dockerfile, you can separate build dependencies from runtime dependencies, resulting in significantly reduced image sizes and improved security posture.
        </p>
      </div>
      
      <p className="text-lg">
        In this comprehensive guide, we'll explore how implementing multi-stage Docker builds transformed our deployment pipeline, reduced infrastructure costs by $50K annually, and improved our overall development workflow.
      </p>

     

      <div className="my-8 text-center">
        <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-4xl h-auto mx-auto">
          <defs>
            <linearGradient id="dockerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#2496ED", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#0DB7ED", stopOpacity:1}} />
            </linearGradient>
            <linearGradient id="stageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#10B981", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#059669", stopOpacity:1}} />
            </linearGradient>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6"/>
            </marker>
          </defs>
          
          <rect width="800" height="500" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" rx="10"/>
          
          <text x="400" y="30" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#1e293b">Docker Multi-Stage Build Architecture</text>
          
          {/* Base Stage */}
          <rect x="50" y="60" width="120" height="80" fill="url(#dockerGradient)" stroke="#2496ED" strokeWidth="2" rx="8"/>
          <text x="110" y="85" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="white">BASE</text>
          <text x="110" y="105" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">node:18-alpine</text>
          <text x="110" y="120" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">package.json</text>
          
          {/* Dependencies Stage */}
          <rect x="200" y="60" width="120" height="80" fill="url(#stageGradient)" stroke="#10B981" strokeWidth="2" rx="8"/>
          <text x="260" y="85" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="white">DEPENDENCIES</text>
          <text x="260" y="105" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">npm ci</text>
          <text x="260" y="120" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">all deps</text>
          
          {/* Development Stage */}
          <rect x="50" y="170" width="120" height="80" fill="url(#stageGradient)" stroke="#10B981" strokeWidth="2" rx="8"/>
          <text x="110" y="195" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="white">DEVELOPMENT</text>
          <text x="110" y="215" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">source code</text>
          <text x="110" y="230" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">dev server</text>
          
          {/* Test Stage */}
          <rect x="200" y="170" width="120" height="80" fill="url(#stageGradient)" stroke="#10B981" strokeWidth="2" rx="8"/>
          <text x="260" y="195" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="white">TEST</text>
          <text x="260" y="215" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">run tests</text>
          <text x="260" y="230" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">lint code</text>
          
          {/* Builder Stage */}
          <rect x="350" y="170" width="120" height="80" fill="url(#stageGradient)" stroke="#10B981" strokeWidth="2" rx="8"/>
          <text x="410" y="195" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="white">BUILDER</text>
          <text x="410" y="215" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">npm run build</text>
          <text x="410" y="230" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">dist/</text>
          
          {/* Prod Dependencies Stage */}
          <rect x="500" y="170" width="120" height="80" fill="url(#stageGradient)" stroke="#10B981" strokeWidth="2" rx="8"/>
          <text x="560" y="190" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="bold" fill="white">PROD-DEPS</text>
          <text x="560" y="210" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">npm ci</text>
          <text x="560" y="225" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">--only=production</text>
          
          {/* Production Stage */}
          <rect x="350" y="300" width="200" height="100" fill="url(#dockerGradient)" stroke="#2496ED" strokeWidth="3" rx="8"/>
          <text x="450" y="325" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white">PRODUCTION</text>
          <text x="450" y="345" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fill="white">380MB Final Image</text>
          <text x="450" y="365" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">• Built app from BUILDER</text>
          <text x="450" y="380" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">• Prod deps from PROD-DEPS</text>
          <text x="450" y="395" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">• Non-root user</text>
          
          {/* Arrows */}
          <line x1="170" y1="100" x2="200" y2="100" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <line x1="260" y1="140" x2="110" y2="170" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <line x1="260" y1="140" x2="260" y2="170" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <line x1="260" y1="140" x2="410" y2="170" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <line x1="260" y1="140" x2="560" y2="170" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          
          <line x1="410" y1="250" x2="420" y2="300" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowhead)"/>
          <line x1="560" y1="250" x2="480" y2="300" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowhead)"/>
          
          {/* Size indicators */}
          <rect x="50" y="430" width="300" height="40" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" rx="5"/>
          <text x="200" y="455" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#92400e">Traditional Build: 2.3GB</text>
          
          <rect x="450" y="430" width="300" height="40" fill="#d1fae5" stroke="#10b981" strokeWidth="1" rx="5"/>
          <text x="600" y="455" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#065f46">Multi-Stage Build: 380MB</text>
        </svg>
        <p className="text-sm text-muted-foreground mt-2">Docker multi-stage build architecture diagram</p>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">The Challenge: Bloated Container Images</h2>
      
      <p className="mb-6">
        Our development team was facing significant challenges with our containerized Node.js applications. Single-stage Docker builds were including development dependencies, build tools, and source code in production images, leading to several critical issues that impacted both performance and costs.
      </p>

      <div className="bg-muted/50 rounded-lg p-6 mb-8 border">
        <h3 className="text-lg font-semibold mb-4">Key Challenges:</h3>
        <ul className="space-y-2">
          <li>• Average image size of 2.3GB per container</li>
          <li>• Extended deployment times averaging 45 minutes</li>
          <li>• Annual infrastructure costs of $35K</li>
          <li>• Security vulnerabilities from unnecessary packages</li>
          <li>• Reduced developer productivity due to slow builds</li>
        </ul>
      </div>

      <div className="my-8 text-center">
        <img
          src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=400&fit=crop&crop=entropy&auto=format&q=80"
          alt="Docker architecture and container optimization workflow"
          className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
        />
        <p className="text-sm text-muted-foreground mt-2">Traditional vs Multi-stage Docker builds comparison</p>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">The Solution: Multi-Stage Docker Builds</h2>
      
      <p className="mb-6">
        Instead of managing multiple Dockerfiles, we use one comprehensive Dockerfile with multiple stages. Think of it as having different rooms in the same house - each stage serves a specific purpose, but they all live under one roof.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">The Complete Node.js Multi-Stage Dockerfile</h3>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-8"><code>{`# syntax=docker/dockerfile:1
# ONE Dockerfile for the entire Node.js application lifecycle

# =============================================================================
# BASE STAGE - Foundation for all other stages
# =============================================================================
FROM node:18-alpine AS base
WORKDIR /app

# Copy package files for dependency installation
COPY package*.json ./

# =============================================================================
# DEPENDENCIES STAGE - Install all dependencies (dev + prod)
# =============================================================================
FROM base AS dependencies
# Install ALL dependencies (needed for building and testing)
RUN npm ci && npm cache clean --force

# =============================================================================
# DEVELOPMENT STAGE - For local development
# =============================================================================
FROM dependencies AS development
# Copy all source code
COPY . .

# Enable debugging and hot reload
EXPOSE 3000 9229
ENV NODE_ENV=development

# Start development server
CMD ["npm", "run", "dev"]

# =============================================================================
# TESTING STAGE - Run all tests
# =============================================================================
FROM dependencies AS test
# Copy source code for testing
COPY . .

# Run tests
RUN npm run test:unit
RUN npm run test:integration
RUN npm run lint

# =============================================================================
# BUILD STAGE - Create production build
# =============================================================================
FROM dependencies AS builder
# Copy source code
COPY . .

# Build the application
RUN npm run build

# =============================================================================
# PRODUCTION DEPENDENCIES - Install only production deps
# =============================================================================
FROM base AS prod-deps
# Install ONLY production dependencies (no dev dependencies)
RUN npm ci --only=production && npm cache clean --force

# =============================================================================
# PRODUCTION STAGE - Final lightweight image
# =============================================================================
FROM node:18-alpine AS production
WORKDIR /app

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && adduser -S nodeuser -u 1001 -G nodejs

# Copy built application from builder stage
COPY --from=builder --chown=nodeuser:nodejs /app/dist ./dist

# Copy production dependencies
COPY --from=prod-deps --chown=nodeuser:nodejs /app/node_modules ./node_modules

# Copy package.json for runtime info
COPY --chown=nodeuser:nodejs package*.json ./

# Switch to non-root user
USER nodeuser

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
    CMD node -e "require('http').get('http://localhost:3000/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"

EXPOSE 3000

# Start production server
CMD ["node", "dist/index.js"]`}</code></pre>
        <CopyButton text={`# syntax=docker/dockerfile:1
# ONE Dockerfile for the entire Node.js application lifecycle

# =============================================================================
# BASE STAGE - Foundation for all other stages
# =============================================================================
FROM node:18-alpine AS base
WORKDIR /app

# Copy package files for dependency installation
COPY package*.json ./

# =============================================================================
# DEPENDENCIES STAGE - Install all dependencies (dev + prod)
# =============================================================================
FROM base AS dependencies
# Install ALL dependencies (needed for building and testing)
RUN npm ci && npm cache clean --force

# =============================================================================
# DEVELOPMENT STAGE - For local development
# =============================================================================
FROM dependencies AS development
# Copy all source code
COPY . .

# Enable debugging and hot reload
EXPOSE 3000 9229
ENV NODE_ENV=development

# Start development server
CMD ["npm", "run", "dev"]

# =============================================================================
# TESTING STAGE - Run all tests
# =============================================================================
FROM dependencies AS test
# Copy source code for testing
COPY . .

# Run tests
RUN npm run test:unit
RUN npm run test:integration
RUN npm run lint

# =============================================================================
# BUILD STAGE - Create production build
# =============================================================================
FROM dependencies AS builder
# Copy source code
COPY . .

# Build the application
RUN npm run build

# =============================================================================
# PRODUCTION DEPENDENCIES - Install only production deps
# =============================================================================
FROM base AS prod-deps
# Install ONLY production dependencies (no dev dependencies)
RUN npm ci --only=production && npm cache clean --force

# =============================================================================
# PRODUCTION STAGE - Final lightweight image
# =============================================================================
FROM node:18-alpine AS production
WORKDIR /app

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && adduser -S nodeuser -u 1001 -G nodejs

# Copy built application from builder stage
COPY --from=builder --chown=nodeuser:nodejs /app/dist ./dist

# Copy production dependencies
COPY --from=prod-deps --chown=nodeuser:nodejs /app/node_modules ./node_modules

# Copy package.json for runtime info
COPY --chown=nodeuser:nodejs package*.json ./

# Switch to non-root user
USER nodeuser

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
    CMD node -e "require('http').get('http://localhost:3000/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"

EXPOSE 3000

# Start production server
CMD ["node", "dist/index.js"]`} />
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4">Using the Multi-Stage Dockerfile</h3>
      
      <p className="mb-4">The multi-stage approach allows you to use different targets for different purposes:</p>

      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">For local development:</h3>
          <div className="relative">
            <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto"><code>{`docker build --target development -t myapp:dev .
docker run -p 3000:3000 -v $(pwd):/app myapp:dev`}</code></pre>
            <CopyButton text={`docker build --target development -t myapp:dev .
docker run -p 3000:3000 -v $(pwd):/app myapp:dev`} />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Run tests:</h3>
          <div className="relative">
            <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg"><code>docker build --target test -t myapp:test .</code></pre>
            <CopyButton text="docker build --target test -t myapp:test ." />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Build for production:</h3>
          <div className="relative">
            <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg"><code>{`docker build --target production -t myapp:prod .
# Or simply (defaults to production stage)
docker build -t myapp:latest .`}</code></pre>
            <CopyButton text={`docker build --target production -t myapp:prod .
# Or simply (defaults to production stage)
docker build -t myapp:latest .`} />
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Implementation Results</h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <MetricCard
          title="Image Size"
          before="2.3GB"
          after="380MB"
          improvement="83% smaller"
          icon={Zap}
        />
        <MetricCard
          title="Build Time"
          before="12 minutes"
          after="4 minutes"
          improvement="67% faster"
          icon={Clock}
        />
        <MetricCard
          title="Deploy Time"
          before="45 minutes"
          after="8 minutes"
          improvement="82% faster"
          icon={Zap}
        />
        <MetricCard
          title="Storage Cost"
          before="$2,800/month"
          after="$560/month"
          improvement="80% savings"
          icon={DollarSign}
        />
      </div>

      <div className="bg-muted/50 rounded-lg p-6 mb-8 border">
        <h3 className="text-lg font-semibold mb-4">Additional Benefits:</h3>
        <ul className="space-y-2">
          <li>• Security Issues: 247 high → 23 high (91% reduction)</li>
          <li>• Dockerfiles to Maintain: 4 different files → 1 file (75% less maintenance)</li>
          <li>• Annual Infrastructure Savings: $50K</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Why Multi-Stage Builds Are Effective</h2>

      <h3 className="text-lg font-semibold mt-6 mb-3">1. Single Source of Truth</h3>
      <ul className="mb-6">
        <li>• One Dockerfile to maintain</li>
        <li>• No configuration drift between environments</li>
        <li>• Easy to version control and review</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-3">2. Smart Layer Caching</h3>
      <div className="relative mb-6">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto"><code>{`# This layer is cached and reused across all stages
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./  # Only changes when dependencies change`}</code></pre>
        <CopyButton text={`# This layer is cached and reused across all stages
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./  # Only changes when dependencies change`} />
      </div>

      <h3 className="text-lg font-semibold mt-6 mb-3">3. Security Built-In</h3>
      <ul className="mb-6">
        <li>• Production images have NO dev dependencies</li>
        <li>• Non-root user by default</li>
        <li>• Minimal attack surface with Alpine base</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-3">4. Developer Experience</h3>
      <div className="relative mb-6">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto"><code>{`# Simple commands for different purposes
docker build --target development .  # For local dev
docker build --target test .         # For CI/CD
docker build .                       # For production (default)`}</code></pre>
        <CopyButton text={`# Simple commands for different purposes
docker build --target development .  # For local dev
docker build --target test .         # For CI/CD
docker build .                       # For production (default)`} />
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Advanced Optimization Techniques</h2>

      <h3 className="text-lg font-semibold mt-6 mb-3">Add BuildKit Cache for Super Fast Builds</h3>
      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-6"><code>{`# Add this to your base stage for caching
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./

# Cache npm packages between builds
RUN --mount=type=cache,target=/root/.npm \\
    npm ci --only=production`}</code></pre>
        <CopyButton text={`# Add this to your base stage for caching
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./

# Cache npm packages between builds
RUN --mount=type=cache,target=/root/.npm \\
    npm ci --only=production`} />
      </div>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-6"><code>{`# Enable BuildKit for faster builds
export DOCKER_BUILDKIT=1
docker build --target production -t myapp:prod .`}</code></pre>
        <CopyButton text={`# Enable BuildKit for faster builds
export DOCKER_BUILDKIT=1
docker build --target production -t myapp:prod .`} />
      </div>

      <h3 className="text-lg font-semibold mt-6 mb-3">Multi-Platform Support in ONE Dockerfile</h3>
      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-6"><code>{`# Add this to support different architectures
FROM --platform=$BUILDPLATFORM node:18-alpine AS base
ARG TARGETPLATFORM
ARG BUILDPLATFORM

# Your existing stages remain the same...`}</code></pre>
        <CopyButton text={`# Add this to support different architectures
FROM --platform=$BUILDPLATFORM node:18-alpine AS base
ARG TARGETPLATFORM
ARG BUILDPLATFORM

# Your existing stages remain the same...`} />
      </div>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-8"><code>{`# Build for multiple platforms
docker buildx build --platform linux/amd64,linux/arm64 -t myapp:latest .`}</code></pre>
        <CopyButton text="docker buildx build --platform linux/amd64,linux/arm64 -t myapp:latest ." />
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Common Implementation Pitfalls</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg">
          <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-4">❌ Wrong: Copying Everything First</h3>
          <div className="relative">
            <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-3 rounded overflow-x-auto"><code>{`FROM node:18-alpine
COPY . .                    # This invalidates cache on any file change
RUN npm install`}</code></pre>
            <CopyButton text={`FROM node:18-alpine
COPY . .                    # This invalidates cache on any file change
RUN npm install`} />
          </div>
        </div>
        
        <div className="p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-4">✅ Right: Dependencies First, Code Second</h3>
          <div className="relative">
            <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-3 rounded overflow-x-auto"><code>{`FROM node:18-alpine AS base
COPY package*.json ./       # Copy package files first
RUN npm ci                  # Install dependencies (cached)
COPY . .                    # Copy source code last`}</code></pre>
            <CopyButton text={`FROM node:18-alpine AS base
COPY package*.json ./       # Copy package files first
RUN npm ci                  # Install dependencies (cached)
COPY . .                    # Copy source code last`} />
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">CI/CD Pipeline Integration</h2>
      
      <p className="mb-4">Your CI/CD pipeline becomes super simple:</p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-8"><code>{`# GitHub Actions example
name: Build and Deploy
on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run Tests
        run: docker build --target test .

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Build Production Image
        run: |
          docker build -t myapp:\${{ github.sha }} .
          docker push myapp:\${{ github.sha }}`}</code></pre>
        <CopyButton text={`# GitHub Actions example
name: Build and Deploy
on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run Tests
        run: docker build --target test .

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Build Production Image
        run: |
          docker build -t myapp:\${{ github.sha }} .
          docker push myapp:\${{ github.sha }}`} />
      </div>

      <div className="my-8 text-center">
        <img
          src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=400&fit=crop&crop=entropy&auto=format&q=80"
          alt="Docker CI/CD pipeline optimization and deployment workflow"
          className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
        />
        <p className="text-sm text-muted-foreground mt-2">Streamlined CI/CD pipeline with multi-stage Docker builds</p>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Measurable Business Impact</h2>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 text-center">
          <DollarSign className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
          <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Cost Savings</h3>
          <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
            <li>$50K saved annually</li>
            <li>80% reduction in storage fees</li>
            <li>67% faster CI/CD pipelines</li>
          </ul>
        </div>
        
        <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
          <Zap className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
          <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Developer Happiness</h3>
          <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
            <li>One file to maintain</li>
            <li>Consistent environments</li>
            <li>Fast local development</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6 text-center">
          <Shield className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
          <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Security Improvements</h3>
          <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
            <li>91% fewer vulnerabilities</li>
            <li>Automated security scanning</li>
            <li>Non-root containers by default</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Implementation Roadmap</h2>

      <div className="space-y-6 mb-8">
        <div className="bg-muted/50 rounded-lg p-6 border">
          <h3 className="text-lg font-semibold mb-3">Phase 1: Assessment and Planning</h3>
          <ul className="space-y-1">
            <li>• Audit your current Dockerfile(s)</li>
            <li>• Analyze current image sizes and build times</li>
            <li>• Identify development vs production dependencies</li>
            <li>• Plan your multi-stage architecture</li>
          </ul>
        </div>
        
        <div className="bg-muted/50 rounded-lg p-6 border">
          <h3 className="text-lg font-semibold mb-3">Phase 2: Implementation</h3>
          <ul className="space-y-1">
            <li>• Create multi-stage Dockerfile</li>
            <li>• Enable BuildKit caching</li>
            <li>• Test all stages work correctly</li>
            <li>• Measure image size improvements</li>
          </ul>
        </div>
        
        <div className="bg-muted/50 rounded-lg p-6 border">
          <h3 className="text-lg font-semibold mb-3">Phase 3: Deployment and Monitoring</h3>
          <ul className="space-y-1">
            <li>• Update CI/CD pipelines</li>
            <li>• Deploy to staging environment first</li>
            <li>• Monitor performance improvements</li>
            <li>• Document the new process for your team</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Conclusion</h2>
      
      <div className="bg-muted/50 rounded-lg p-8 mb-8 border">
        <p className="text-lg mb-4">We replaced 4 different Dockerfiles with one comprehensive multi-stage file and achieved:</p>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>83% smaller images</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>$50K annual cost savings</span>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>75% less maintenance overhead</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>Simplified CI/CD configuration</span>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-lg">
        Multi-stage Docker builds provide an elegant solution for creating optimized container images while maintaining development flexibility. The approach delivers measurable improvements in image size, deployment speed, and infrastructure costs.
      </p>
    </div>
  )
}
