'use client'

import React, { useState } from 'react'
import { Copy, Check } from 'lucide-react'

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
      className="absolute top-2 right-2 p-2 bg-background/80 hover:bg-background border rounded-md transition-colors"
      title="Copy to clipboard"
    >
      {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
    </button>
  )
}

export function CaddyProductionSetupDevopsGuideContent() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:scroll-mt-20">
      <div className="mb-8 p-6 bg-muted/50 rounded-lg border">
        <p className="text-lg leading-relaxed mb-0">
          Managing web servers in production can be complex and error-prone, especially when dealing with SSL certificates, load balancing, and configuration management. Caddy is a modern web server that simplifies these tasks with automatic HTTPS, zero-downtime reloads, and intuitive configuration.
        </p>
      </div>
      
      <p className="text-lg">
        In this comprehensive guide, we'll explore how to set up Caddy with Docker for production environments, covering automatic SSL management, reverse proxy configuration, and best practices for DevOps teams.
      </p>

      <div className="my-8 text-center">
        <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-4xl h-auto mx-auto">
          <defs>
            <linearGradient id="caddyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#1F8B4C", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#0F5132", stopOpacity:1}} />
            </linearGradient>
            <linearGradient id="httpsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#10B981", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#059669", stopOpacity:1}} />
            </linearGradient>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6"/>
            </marker>
          </defs>
          
          <rect width="800" height="400" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" rx="10"/>
          
          <text x="400" y="30" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#1e293b">Caddy Production Architecture</text>
          
          <rect x="50" y="60" width="700" height="320" fill="none" stroke="#1F8B4C" strokeWidth="2" strokeDasharray="5,5" rx="15"/>
          <text x="70" y="85" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#1F8B4C">Docker Environment</text>
          
          <rect x="100" y="110" width="600" height="250" fill="#fff" stroke="#3b82f6" strokeWidth="2" rx="10"/>
          <text x="120" y="135" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#3b82f6">Caddy Container</text>
          
          <rect x="130" y="150" width="160" height="80" fill="url(#caddyGradient)" stroke="#1F8B4C" strokeWidth="2" rx="8"/>
          <text x="210" y="175" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="white">Caddy Server</text>
          <text x="210" y="195" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">Port: 80, 443</text>
          <text x="210" y="210" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">Auto HTTPS</text>
          <text x="210" y="225" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">Reverse Proxy</text>
          
          <rect x="320" y="150" width="140" height="80" fill="url(#httpsGradient)" stroke="#10B981" strokeWidth="2" rx="8"/>
          <text x="390" y="175" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="white">Backend App</text>
          <text x="390" y="195" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">Port: 3000</text>
          <text x="390" y="210" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">Node.js/API</text>
          
          <rect x="490" y="150" width="140" height="80" fill="url(#httpsGradient)" stroke="#10B981" strokeWidth="2" rx="8"/>
          <text x="560" y="175" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="white">Database</text>
          <text x="560" y="195" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">Port: 5432</text>
          <text x="560" y="210" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">PostgreSQL</text>
          
          <line x1="290" y1="190" x2="320" y2="190" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <line x1="460" y1="190" x2="490" y2="190" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          
          <rect x="130" y="250" width="500" height="80" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" rx="5"/>
          <text x="380" y="275" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#92400e">SSL Certificates (Let's Encrypt)</text>
          <text x="380" y="295" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#92400e">Automatic provisioning and renewal</text>
          <text x="380" y="310" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#92400e">DNS challenge support (Cloudflare, Route53)</text>
          
          <text x="50" y="370" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#059669">✓ Zero-downtime reloads</text>
          <text x="250" y="370" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#059669">✓ Automatic HTTPS</text>
          <text x="450" y="370" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#059669">✓ Built-in reverse proxy</text>
          <text x="650" y="370" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#059669">✓ Docker native</text>
        </svg>
        <p className="text-sm text-muted-foreground mt-2">Caddy production architecture with Docker</p>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">What is Caddy?</h2>
      
      <p className="mb-6">
        Caddy is a modern web server that prioritizes ease of use and security. Unlike traditional web servers that require complex configuration files and manual SSL certificate management, Caddy provides automatic HTTPS, intuitive configuration syntax, and zero-downtime reloads out of the box.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Understanding Web Server Architecture</h3>
      
      <p className="mb-4">
        Traditional web servers like Apache and Nginx follow a multi-process or multi-threaded architecture where each request is handled by a separate process or thread. This approach, while proven, requires careful tuning and configuration management.
      </p>

      <p className="mb-6">
        Caddy uses a different approach with Go's goroutines, providing excellent concurrency with lower memory overhead. Each connection is handled by a lightweight goroutine, allowing thousands of concurrent connections with minimal resource usage.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">HTTPS and TLS Fundamentals</h3>
      
      <p className="mb-4">
        HTTPS (HTTP Secure) is HTTP over TLS (Transport Layer Security). The TLS handshake process involves several steps:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2">
        <li><strong>Certificate Exchange:</strong> Server presents its SSL certificate to prove identity</li>
        <li><strong>Key Exchange:</strong> Client and server negotiate encryption keys</li>
        <li><strong>Cipher Suite Selection:</strong> Both parties agree on encryption algorithms</li>
        <li><strong>Secure Communication:</strong> All data is encrypted using agreed-upon methods</li>
      </ul>

      <p className="mb-6">
        Caddy automates this entire process by integrating with ACME (Automatic Certificate Management Environment) protocol, primarily through Let's Encrypt, but also supporting other Certificate Authorities.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Reverse Proxy Theory</h3>
      
      <p className="mb-4">
        A reverse proxy sits between clients and backend servers, acting as an intermediary. Unlike a forward proxy (which hides clients from servers), a reverse proxy hides servers from clients. Key benefits include:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2">
        <li><strong>Load Distribution:</strong> Distributes incoming requests across multiple backend servers</li>
        <li><strong>SSL Termination:</strong> Handles SSL/TLS encryption/decryption, reducing backend server load</li>
        <li><strong>Caching:</strong> Stores frequently requested content to reduce backend load</li>
        <li><strong>Security:</strong> Acts as a shield, hiding backend infrastructure details</li>
        <li><strong>Compression:</strong> Compresses responses to reduce bandwidth usage</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-4">DNS Challenge vs HTTP Challenge</h3>
      
      <p className="mb-4">
        ACME protocol supports two primary challenge types for domain validation:
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="p-4 bg-muted/50 rounded-lg border">
          <h4 className="font-semibold mb-2">HTTP Challenge</h4>
          <ul className="text-sm space-y-1">
            <li>• Requires port 80 to be accessible</li>
            <li>• Places verification file on web server</li>
            <li>• Simple but requires public accessibility</li>
            <li>• Cannot be used for wildcard certificates</li>
          </ul>
        </div>
        
        <div className="p-4 bg-muted/50 rounded-lg border">
          <h4 className="font-semibold mb-2">DNS Challenge</h4>
          <ul className="text-sm space-y-1">
            <li>• Uses DNS TXT records for validation</li>
            <li>• Works with internal/private services</li>
            <li>• Supports wildcard certificates</li>
            <li>• Requires DNS provider API access</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 1: Setting Up the Environment</h2>

      <p className="mb-4">First, create the project directory structure:</p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-6"><code>{`mkdir -p caddy-production
cd caddy-production
mkdir -p {caddy_data,caddy_config,site}`}</code></pre>
        <CopyButton text={`mkdir -p caddy-production
cd caddy-production
mkdir -p {caddy_data,caddy_config,site}`} />
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 2: Docker Compose Configuration</h2>

      <p className="mb-4">Create <code>docker-compose.yml</code>:</p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-8"><code>{`version: '3.8'

services:
  caddy:
    image: caddy:2.7-alpine
    container_name: caddy
    restart: unless-stopped
    environment:
      - CLOUDFLARE_API_TOKEN=\${CLOUDFLARE_API_TOKEN}
    ports:
      - "80:80"
      - "443:443"
      - "2019:2019"  # Admin API
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile
      - ./site:/srv
      - caddy_data:/data
      - caddy_config:/config
    networks:
      - caddy-net

  backend:
    image: node:18-alpine
    container_name: backend
    restart: unless-stopped
    working_dir: /app
    volumes:
      - ./app:/app
    command: npm start
    expose:
      - "3000"
    networks:
      - caddy-net

volumes:
  caddy_data:
  caddy_config:

networks:
  caddy-net:
    driver: bridge`}</code></pre>
        <CopyButton text={`version: '3.8'

services:
  caddy:
    image: caddy:2.7-alpine
    container_name: caddy
    restart: unless-stopped
    environment:
      - CLOUDFLARE_API_TOKEN=\${CLOUDFLARE_API_TOKEN}
    ports:
      - "80:80"
      - "443:443"
      - "2019:2019"  # Admin API
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile
      - ./site:/srv
      - caddy_data:/data
      - caddy_config:/config
    networks:
      - caddy-net

  backend:
    image: node:18-alpine
    container_name: backend
    restart: unless-stopped
    working_dir: /app
    volumes:
      - ./app:/app
    command: npm start
    expose:
      - "3000"
    networks:
      - caddy-net

volumes:
  caddy_data:
  caddy_config:

networks:
  caddy-net:
    driver: bridge`} />
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 3: Caddyfile Configuration</h2>

      <p className="mb-4">Create the <code>Caddyfile</code> with automatic HTTPS and reverse proxy:</p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-6"><code>{`# Main domain with automatic HTTPS
example.com {
    reverse_proxy backend:3000
    
    # Security headers
    header {
        Strict-Transport-Security "max-age=31536000; includeSubDomains"
        X-Content-Type-Options "nosniff"
        X-Frame-Options "DENY"
        X-XSS-Protection "1; mode=block"
    }
    
    # Logging
    log {
        output file /var/log/caddy/access.log
        format json
    }
}

# API subdomain
api.example.com {
    reverse_proxy backend:3000/api
    
    # CORS headers for API
    header {
        Access-Control-Allow-Origin "*"
        Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS"
        Access-Control-Allow-Headers "Content-Type, Authorization"
    }
}

# Static file server
static.example.com {
    file_server
    root * /srv/static
    
    # Cache static assets
    header /assets/* {
        Cache-Control "public, max-age=31536000"
    }
}

# Wildcard subdomain with DNS challenge
*.dev.example.com {
    tls {
        dns cloudflare {env.CLOUDFLARE_API_TOKEN}
    }
    reverse_proxy backend:3000
}`}</code></pre>
        <CopyButton text={`# Main domain with automatic HTTPS
example.com {
    reverse_proxy backend:3000
    
    # Security headers
    header {
        Strict-Transport-Security "max-age=31536000; includeSubDomains"
        X-Content-Type-Options "nosniff"
        X-Frame-Options "DENY"
        X-XSS-Protection "1; mode=block"
    }
    
    # Logging
    log {
        output file /var/log/caddy/access.log
        format json
    }
}

# API subdomain
api.example.com {
    reverse_proxy backend:3000/api
    
    # CORS headers for API
    header {
        Access-Control-Allow-Origin "*"
        Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS"
        Access-Control-Allow-Headers "Content-Type, Authorization"
    }
}

# Static file server
static.example.com {
    file_server
    root * /srv/static
    
    # Cache static assets
    header /assets/* {
        Cache-Control "public, max-age=31536000"
    }
}

# Wildcard subdomain with DNS challenge
*.dev.example.com {
    tls {
        dns cloudflare {env.CLOUDFLARE_API_TOKEN}
    }
    reverse_proxy backend:3000
}`} />
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 4: Environment Configuration</h2>

      <p className="mb-4">Create <code>.env</code> file for sensitive configuration:</p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-6"><code>{`# Cloudflare API token for DNS challenge
CLOUDFLARE_API_TOKEN=your_cloudflare_api_token_here

# Optional: Custom CA for internal certificates
# CADDY_CA=https://your-internal-ca.com/acme/directory`}</code></pre>
        <CopyButton text={`# Cloudflare API token for DNS challenge
CLOUDFLARE_API_TOKEN=your_cloudflare_api_token_here

# Optional: Custom CA for internal certificates
# CADDY_CA=https://your-internal-ca.com/acme/directory`} />
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 5: Deployment and Management</h2>

      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">Start the services:</h3>
          <div className="relative">
            <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto"><code>docker-compose up -d</code></pre>
            <CopyButton text="docker-compose up -d" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Check service status:</h3>
          <div className="relative">
            <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto"><code>docker-compose ps</code></pre>
            <CopyButton text="docker-compose ps" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Reload configuration without downtime:</h3>
          <div className="relative">
            <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto"><code>docker exec caddy caddy reload --config /etc/caddy/Caddyfile</code></pre>
            <CopyButton text="docker exec caddy caddy reload --config /etc/caddy/Caddyfile" />
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 6: Monitoring and Logging</h2>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-3">View Logs:</h3>
          <div className="relative">
            <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto"><code>{`docker-compose logs -f caddy`}</code></pre>
            <CopyButton text="docker-compose logs -f caddy" />
          </div>
        </div>

        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-3">Check Certificate Status:</h3>
          <div className="relative">
            <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto"><code>{`curl -s https://example.com | openssl x509 -noout -dates`}</code></pre>
            <CopyButton text="curl -s https://example.com | openssl x509 -noout -dates" />
          </div>
        </div>

        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-3">Admin API:</h3>
          <div className="relative">
            <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto"><code>{`curl http://localhost:2019/config/`}</code></pre>
            <CopyButton text="curl http://localhost:2019/config/" />
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Production Considerations</h2>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Security Best Practices</h3>
          <ul className="space-y-2 text-sm">
            <li>• Use DNS challenge for internal services</li>
            <li>• Implement proper CORS policies</li>
            <li>• Enable security headers</li>
            <li>• Regular security updates</li>
            <li>• Monitor certificate expiration</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Performance Optimization</h3>
          <ul className="space-y-2 text-sm">
            <li>• Enable HTTP/2 and HTTP/3</li>
            <li>• Configure proper caching headers</li>
            <li>• Use compression for static assets</li>
            <li>• Implement health checks</li>
            <li>• Monitor response times</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Caddy vs Nginx: Why Caddy Excels</h2>
      
      <p className="mb-6">
        While Nginx has been the go-to web server for many years, Caddy offers significant advantages for modern production environments. Here's a comprehensive comparison highlighting why Caddy is often the better choice:
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-muted">
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold">Feature</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold">Caddy</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold">Nginx</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">SSL Management</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600">✅ Automatic (Let's Encrypt, DNS challenge)</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-red-600">❌ Manual configuration required</td>
            </tr>
            <tr className="bg-muted/50">
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Configuration</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600">✅ Simple Caddyfile syntax</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-red-600">❌ Complex nginx.conf syntax</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Reload Method</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600">✅ Zero-downtime automatic reloads</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-yellow-600">⚠️ Requires service restart/reload</td>
            </tr>
            <tr className="bg-muted/50">
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Learning Curve</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600">✅ Gentle, intuitive</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-red-600">❌ Steep, requires expertise</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">HTTP/2 & HTTP/3</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600">✅ Automatic when HTTPS enabled</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-yellow-600">⚠️ Manual configuration needed</td>
            </tr>
            <tr className="bg-muted/50">
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Maintenance</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600">✅ Minimal ongoing maintenance</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-red-600">❌ Regular cert and config management</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Docker Integration</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600">✅ Native container networking</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-yellow-600">⚠️ Requires additional configuration</td>
            </tr>
            <tr className="bg-muted/50">
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Performance</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600">✅ Excellent for most use cases</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600">✅ Slightly better for extreme high-traffic</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4">When to Choose Caddy Over Nginx</h3>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
          <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">Choose Caddy When:</h4>
          <ul className="text-sm space-y-2">
            <li>• You want automatic SSL without headaches</li>
            <li>• Your team values simplicity and maintainability</li>
            <li>• You're building modern applications with frequent deployments</li>
            <li>• You need reliable reverse proxy with minimal configuration</li>
            <li>• You work with Docker/container environments</li>
            <li>• You want zero-downtime configuration changes</li>
          </ul>
        </div>
        
        <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
          <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-3">Stick with Nginx When:</h4>
          <ul className="text-sm space-y-2">
            <li>• You have extreme performance requirements (millions of requests)</li>
            <li>• Your team has deep nginx expertise</li>
            <li>• You need specific nginx modules unavailable in Caddy</li>
            <li>• You have complex legacy configurations</li>
            <li>• You require maximum fine-tuning control</li>
          </ul>
        </div>
      </div>

      <div className="bg-muted/50 rounded-lg p-6 mb-8 border">
        <h4 className="font-semibold mb-3">Real-World Impact</h4>
        <p className="text-sm mb-3">
          In production environments, Caddy's automatic certificate management alone saves approximately 2-4 hours per month of DevOps time. The simplified configuration reduces onboarding time for new team members from days to hours.
        </p>
        <p className="text-sm">
          For most modern web applications, Caddy's performance is indistinguishable from Nginx while providing significantly better developer experience and operational simplicity.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Troubleshooting Common Issues</h2>

      <div className="space-y-6 mb-8">
        <div className="p-4 bg-muted/50 rounded-lg border">
          <h3 className="font-semibold mb-2">Certificate Issues</h3>
          <p className="text-sm mb-2">If certificates fail to provision:</p>
          <div className="relative">
            <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-3 rounded overflow-x-auto"><code>{`# Check certificate status
docker exec caddy caddy list-certificates

# Force certificate renewal
docker exec caddy caddy reload --force`}</code></pre>
            <CopyButton text={`# Check certificate status
docker exec caddy caddy list-certificates

# Force certificate renewal
docker exec caddy caddy reload --force`} />
          </div>
        </div>

        <div className="p-4 bg-muted/50 rounded-lg border">
          <h3 className="font-semibold mb-2">Configuration Validation</h3>
          <p className="text-sm mb-2">Validate Caddyfile syntax:</p>
          <div className="relative">
            <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-3 rounded overflow-x-auto"><code>docker exec caddy caddy validate --config /etc/caddy/Caddyfile</code></pre>
            <CopyButton text="docker exec caddy caddy validate --config /etc/caddy/Caddyfile" />
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Conclusion</h2>
      
      <div className="bg-muted/50 rounded-lg p-8 mb-8 border">
        <p className="text-lg mb-4">Caddy with Docker provides a robust, maintainable solution for production web server management:</p>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>Automatic HTTPS with Let's Encrypt</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>Zero-downtime configuration reloads</span>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>Intuitive Caddyfile configuration</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>Built-in reverse proxy and load balancing</span>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-lg">
        Caddy's simplicity and powerful features make it an excellent choice for modern production environments. The combination of automatic certificate management, intuitive configuration, and Docker integration provides a reliable foundation for web applications and APIs.
      </p>
    </div>
  )
}
