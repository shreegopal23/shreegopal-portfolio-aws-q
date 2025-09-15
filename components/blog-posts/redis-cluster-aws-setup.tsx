'use client'

import { useState } from 'react'
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
      className="absolute top-2 right-2 p-2 bg-white/10 hover:bg-white/20 rounded border border-white/20 transition-colors"
      title="Copy to clipboard"
    >
      {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-white/70" />}
    </button>
  )
}

export function RedisClusterAwsSetupContent() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:scroll-mt-20">
      <div className="mb-8 p-6 bg-muted/50 rounded-lg border">
        <p className="text-lg leading-relaxed mb-0">
          Redis is one of the most popular in-memory data structures, widely used for caching, session management, and real-time applications. While a single Redis instance works great for small applications, scaling Redis for production workloads requires a different approach. This is where Redis Cluster comes into play.
        </p>
      </div>
      
      <p className="text-lg">
        In this comprehensive guide, we'll walk through setting up a Redis cluster on AWS EC2 using Docker Compose in just a few easy steps.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-6">What is Redis Cluster?</h2>
      
      <p className="mb-6">
        Redis Cluster is Redis's built-in solution for horizontal scaling and high availability. It automatically partitions data across multiple Redis nodes and provides automatic failover capabilities. Unlike Redis Sentinel (which provides high availability for single master setups), Redis Cluster offers both high availability and horizontal scaling out of the box.
      </p>

      <div className="my-8 text-center">
        <svg width="800" height="400" xmlns="http://www.w3.org/2000/svg" className="max-w-full h-auto mx-auto">
          <defs>
            <linearGradient id="awsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#FF9900", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#FF6600", stopOpacity:1}} />
            </linearGradient>
            <linearGradient id="redisGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#DC382D", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#B91C1C", stopOpacity:1}} />
            </linearGradient>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6"/>
            </marker>
          </defs>
          
          <rect width="800" height="400" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" rx="10"/>
          
          <text x="400" y="30" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#1e293b">Redis Cluster on AWS EC2</text>
          
          <rect x="50" y="60" width="700" height="320" fill="none" stroke="#FF9900" strokeWidth="2" strokeDasharray="5,5" rx="15"/>
          <text x="70" y="85" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#FF9900">AWS Cloud</text>
          
          <rect x="100" y="110" width="600" height="250" fill="#fff" stroke="#3b82f6" strokeWidth="2" rx="10"/>
          <text x="120" y="135" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#3b82f6">EC2 Instance (t3.medium)</text>
          
          <rect x="130" y="150" width="540" height="190" fill="#f1f5f9" stroke="#64748b" strokeWidth="1" rx="8"/>
          <text x="150" y="175" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#64748b">Docker Compose Environment</text>
          
          <rect x="160" y="190" width="140" height="80" fill="url(#redisGradient)" stroke="#DC382D" strokeWidth="2" rx="8"/>
          <text x="230" y="215" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="white">Redis Master</text>
          <text x="230" y="235" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">Port: 6379</text>
          <text x="230" y="250" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">Cluster Bus: 17000</text>
          <text x="230" y="265" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">Hash Slots: 0-5460</text>
          
          <rect x="330" y="190" width="140" height="80" fill="url(#redisGradient)" stroke="#DC382D" strokeWidth="2" rx="8"/>
          <text x="400" y="215" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="white">Redis Slave 1</text>
          <text x="400" y="235" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">Port: 7001</text>
          <text x="400" y="250" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">Cluster Bus: 17001</text>
          <text x="400" y="265" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">Hash Slots: 5461-10922</text>
          
          <rect x="500" y="190" width="140" height="80" fill="url(#redisGradient)" stroke="#DC382D" strokeWidth="2" rx="8"/>
          <text x="570" y="215" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="white">Redis Slave 2</text>
          <text x="570" y="235" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">Port: 7002</text>
          <text x="570" y="250" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">Cluster Bus: 17002</text>
          <text x="570" y="265" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">Hash Slots: 10923-16383</text>
          
          <line x1="300" y1="230" x2="330" y2="230" stroke="#10b981" strokeWidth="2"/>
          <line x1="470" y1="230" x2="500" y2="230" stroke="#10b981" strokeWidth="2"/>
          <line x1="230" y1="270" x2="400" y2="190" stroke="#10b981" strokeWidth="1" strokeDasharray="3,3"/>
          <line x1="400" y1="270" x2="570" y2="190" stroke="#10b981" strokeWidth="1" strokeDasharray="3,3"/>
          <line x1="570" y1="270" x2="230" y2="190" stroke="#10b981" strokeWidth="1" strokeDasharray="3,3"/>
          
          <rect x="160" y="290" width="480" height="30" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" rx="5"/>
          <text x="400" y="310" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fill="#92400e">Persistent Data Storage (Docker Volumes)</text>
          
          <circle cx="50" cy="200" r="20" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2"/>
          <text x="50" y="207" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold" fill="white">Client</text>
          <line x1="70" y1="200" x2="160" y2="230" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          
          <rect x="20" y="350" width="200" height="40" fill="white" stroke="#e5e7eb" strokeWidth="1" rx="5"/>
          <text x="30" y="370" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold" fill="#374151">Legend:</text>
          <line x1="30" y1="380" x2="50" y2="380" stroke="#10b981" strokeWidth="2"/>
          <text x="55" y="385" fontFamily="Arial, sans-serif" fontSize="9" fill="#374151">Cluster Communication</text>
          <line x1="130" y1="380" x2="150" y2="380" stroke="#3b82f6" strokeWidth="2"/>
          <text x="155" y="385" fontFamily="Arial, sans-serif" fontSize="9" fill="#374151">Client Connection</text>
        </svg>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Features of Redis Cluster:</h3>
      <ul className="space-y-2 mb-8">
        <li><strong>Automatic Sharding</strong>: Data is automatically distributed across multiple nodes</li>
        <li><strong>High Availability</strong>: Automatic failover when master nodes fail</li>
        <li><strong>Horizontal Scaling</strong>: Add or remove nodes dynamically</li>
        <li><strong>No Single Point of Failure</strong>: Distributed architecture with no central coordinator</li>
        <li><strong>Linear Scaling</strong>: Performance scales linearly with the number of nodes</li>
      </ul>

      <h2 className="text-2xl font-bold mt-12 mb-6">Why Use Redis Cluster?</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="p-6 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
          <h3 className="text-lg font-semibold mb-4 text-green-800 dark:text-green-200">Pros:</h3>
          <ul className="space-y-2 text-sm">
            <li>✅ <strong>Horizontal Scaling</strong>: Scale beyond single server limits</li>
            <li>✅ <strong>High Availability</strong>: Automatic failover ensures minimal downtime</li>
            <li>✅ <strong>Performance</strong>: Distribute operations across multiple nodes</li>
            <li>✅ <strong>Fault Tolerance</strong>: Continues operating if some nodes fail</li>
            <li>✅ <strong>No Proxy Overhead</strong>: Direct client connections</li>
            <li>✅ <strong>Built-in Solution</strong>: No external sharding logic needed</li>
          </ul>
        </div>

        <div className="p-6 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
          <h3 className="text-lg font-semibold mb-4 text-red-800 dark:text-red-200">Cons:</h3>
          <ul className="space-y-2 text-sm">
            <li>❌ <strong>Complexity</strong>: More complex setup and management</li>
            <li>❌ <strong>Multi-key Operations</strong>: Limited cross-key operations</li>
            <li>❌ <strong>Client Support</strong>: Requires cluster-aware clients</li>
            <li>❌ <strong>Minimum Nodes</strong>: Needs at least 3 master nodes</li>
            <li>❌ <strong>Network Overhead</strong>: Additional inter-node communication</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Prerequisites</h2>
      
      <div className="p-6 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 mb-8">
        <p className="mb-4 font-medium">Before we begin, ensure you have:</p>
        <ul className="space-y-2">
          <li>• AWS account with EC2 access</li>
          <li>• Basic understanding of Docker and Docker Compose</li>
          <li>• SSH key pair for EC2 access</li>
          <li>• Security group configured for Redis ports</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 1: Launch and Configure EC2 Instance</h2>

      <h3 className="text-xl font-semibold mt-8 mb-4">Launch EC2 Instance:</h3>
      <ol className="space-y-3 mb-6">
        <li><strong>Login to AWS Console</strong> and navigate to EC2 dashboard</li>
        <li><strong>Click "Launch Instance"</strong></li>
        <li><strong>Choose AMI</strong>: Select "Ubuntu Server 22.04 LTS" (free tier eligible)</li>
        <li><strong>Instance Type</strong>: Choose <code className="px-2 py-1 bg-muted rounded">t3.medium</code> or higher</li>
        <li><strong>Key Pair</strong>: Select your existing key pair or create new one</li>
        <li><strong>Security Group</strong>: Create/select security group with following rules:</li>
      </ol>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse border border-border rounded-lg">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border p-3 text-left">Type</th>
              <th className="border border-border p-3 text-left">Port Range</th>
              <th className="border border-border p-3 text-left">Source</th>
              <th className="border border-border p-3 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-border p-3">SSH</td><td className="border border-border p-3">22</td><td className="border border-border p-3">Your IP</td><td className="border border-border p-3">SSH access</td></tr>
            <tr><td className="border border-border p-3">Custom TCP</td><td className="border border-border p-3">6379</td><td className="border border-border p-3">0.0.0.0/0</td><td className="border border-border p-3">Redis Master</td></tr>
            <tr><td className="border border-border p-3">Custom TCP</td><td className="border border-border p-3">7001-7002</td><td className="border border-border p-3">0.0.0.0/0</td><td className="border border-border p-3">Redis Slaves</td></tr>
            <tr><td className="border border-border p-3">Custom TCP</td><td className="border border-border p-3">17000-17002</td><td className="border border-border p-3">0.0.0.0/0</td><td className="border border-border p-3">Redis Cluster Bus</td></tr>
          </tbody>
        </table>
      </div>

      <ol start={7} className="space-y-2 mb-6">
        <li><strong>Storage</strong>: 20GB GP3 (sufficient for this setup)</li>
        <li><strong>Launch Instance</strong></li>
      </ol>

      <h3 className="text-xl font-semibold mt-8 mb-4">Connect to Instance:</h3>
      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-8"><code>ssh -i your-key.pem ubuntu@your-instance-public-ip</code></pre>
        <CopyButton text="ssh -i your-key.pem ubuntu@your-instance-public-ip" />
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 2: Install Docker and Docker Compose</h2>

      <p className="mb-4">Run this automated installation script:</p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-6"><code>{`#!/bin/bash

# Update system packages
sudo apt update -y
sudo apt upgrade -y

# Install required packages
sudo apt install -y apt-transport-https ca-certificates curl gnupg lsb-release

# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Add Docker repository
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Update package index
sudo apt update -y

# Install Docker
sudo apt install -y docker-ce docker-ce-cli containerd.io

# Start and enable Docker
sudo systemctl start docker
sudo systemctl enable docker

# Add ubuntu user to docker group
sudo usermod -aG docker ubuntu

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Create symbolic link
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

echo "Docker and Docker Compose installation completed!"
echo "Please logout and login again to apply group changes"

# Verify installations
docker --version
docker-compose --version`}</code></pre>
        <CopyButton text={`#!/bin/bash

# Update system packages
sudo apt update -y
sudo apt upgrade -y

# Install required packages
sudo apt install -y apt-transport-https ca-certificates curl gnupg lsb-release

# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Add Docker repository
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Update package index
sudo apt update -y

# Install Docker
sudo apt install -y docker-ce docker-ce-cli containerd.io

# Start and enable Docker
sudo systemctl start docker
sudo systemctl enable docker

# Add ubuntu user to docker group
sudo usermod -aG docker ubuntu

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Create symbolic link
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

echo "Docker and Docker Compose installation completed!"
echo "Please logout and login again to apply group changes"

# Verify installations
docker --version
docker-compose --version`} />
      </div>

      <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg mb-6">
        <p className="font-medium mb-2">Save this as <code>install-docker.sh</code> and run:</p>
        <div className="relative">
          <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg"><code>{`chmod +x install-docker.sh
./install-docker.sh`}</code></pre>
          <CopyButton text={`chmod +x install-docker.sh
./install-docker.sh`} />
        </div>
      </div>

      <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg mb-8">
        <p className="font-medium mb-2">Important: Logout and login again to apply group changes:</p>
        <div className="relative">
          <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg"><code>{`exit
ssh -i your-key.pem ubuntu@your-instance-public-ip`}</code></pre>
          <CopyButton text={`exit
ssh -i your-key.pem ubuntu@your-instance-public-ip`} />
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 3: Create Redis Cluster Configuration</h2>

      <h3 className="text-xl font-semibold mt-8 mb-4">Create Project Directory Structure:</h3>
      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-6"><code>{`mkdir -p redis-cluster-setup
cd redis-cluster-setup
mkdir -p redis-cluster/{master,slave1,slave2}/{data,}`}</code></pre>
        <CopyButton text={`mkdir -p redis-cluster-setup
cd redis-cluster-setup
mkdir -p redis-cluster/{master,slave1,slave2}/{data,}`} />
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4">Create Configuration Files:</h3>
      <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-8"><code>{`# Create master Redis configuration
cat > redis-cluster/master/redis.conf << EOF
port 6379
cluster-enabled yes
cluster-config-file nodes.conf
cluster-node-timeout 5000
appendonly yes
protected-mode no
bind 0.0.0.0
requirepass 
masterauth 
EOF

# Create slave1 Redis configuration
cat > redis-cluster/slave1/redis.conf << EOF
port 6379
cluster-enabled yes
cluster-config-file nodes.conf
cluster-node-timeout 5000
appendonly yes
protected-mode no
bind 0.0.0.0
requirepass 
masterauth
EOF

# Create slave2 Redis configuration
cat > redis-cluster/slave2/redis.conf << EOF
port 6379
cluster-enabled yes
cluster-config-file nodes.conf
cluster-node-timeout 5000
appendonly yes
protected-mode no
bind 0.0.0.0
requirepass 
masterauth
EOF`}</code></pre>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 4: Docker Compose Configuration</h2>

      <p className="mb-4">Create <code>docker-compose.yml</code>:</p>

      <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-8"><code>{`version: '3.8'

services:
  redis-master:
    image: redis:7.2
    container_name: redis-master
    command: ["redis-server", "/usr/local/etc/redis/redis.conf"]
    volumes:
      - ./redis-cluster/master/redis.conf:/usr/local/etc/redis/redis.conf
      - ./redis-cluster/master/data:/data
    ports:
      - "6379:6379"
      - "17000:17000"
    networks:
      - traefik-net

  redis-slave1:
    image: redis:7.2
    container_name: redis-slave1
    command: ["redis-server", "/usr/local/etc/redis/redis.conf"]
    volumes:
      - ./redis-cluster/slave1/redis.conf:/usr/local/etc/redis/redis.conf
      - ./redis-cluster/slave1/data:/data
    ports:
      - "7001:6379"
      - "17001:17001"
    networks:
      - traefik-net

  redis-slave2:
    image: redis:7.2
    container_name: redis-slave2
    command: ["redis-server", "/usr/local/etc/redis/redis.conf"]
    volumes:
      - ./redis-cluster/slave2/redis.conf:/usr/local/etc/redis/redis.conf
      - ./redis-cluster/slave2/data:/data
    ports:
      - "7002:6379"
      - "17002:17002"
    networks:
      - traefik-net

networks:
  traefik-net:
    external: true`}</code></pre>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 5: Network Setup and Deployment</h2>

      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">Create Docker Network:</h3>
          <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg"><code>docker network create traefik-net</code></pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Start Redis Containers:</h3>
          <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg"><code>docker-compose up -d</code></pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Verify Containers are Running:</h3>
          <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg"><code>docker-compose ps</code></pre>
        </div>
      </div>

      <div className="p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg mb-8">
        <p className="font-medium mb-2">Expected output:</p>
        <pre className="bg-muted p-3 rounded text-sm overflow-x-auto"><code>{`    Name              Command               State                    Ports
redis-master    redis-server /usr/local/ ...   Up      0.0.0.0:17000->17000/tcp, 0.0.0.0:6379->6379/tcp
redis-slave1    redis-server /usr/local/ ...   Up      0.0.0.0:17001->17001/tcp, 0.0.0.0:7001->6379/tcp
redis-slave2    redis-server /usr/local/ ...   Up      0.0.0.0:17002->17002/tcp, 0.0.0.0:7002->6379/tcp`}</code></pre>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 6: Initialize Redis Cluster</h2>

      <h3 className="text-xl font-semibold mt-8 mb-4">Create the Cluster:</h3>
      <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-6"><code>{`# Get your EC2 instance private IP
PRIVATE_IP=$(curl -s http://169.254.169.254/latest/meta-data/local-ipv4)

# Create cluster
docker exec -it redis-master redis-cli --cluster create \\
  \${PRIVATE_IP}:6379 \\
  \${PRIVATE_IP}:7001 \\
  \${PRIVATE_IP}:7002 \\
  --cluster-replicas 0`}</code></pre>

      <p className="mb-6">Type <code className="px-2 py-1 bg-muted rounded">yes</code> when prompted to accept the configuration.</p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Verify Cluster Status:</h3>
      <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-8"><code>{`docker exec -it redis-master redis-cli cluster nodes
docker exec -it redis-master redis-cli cluster info`}</code></pre>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 7: Testing Your Redis Cluster</h2>

      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">Test Basic Operations:</h3>
          <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto"><code>{`# Connect to cluster
docker exec -it redis-master redis-cli -c

# Test commands
> SET user:1000 "John Doe"
> GET user:1000
> SET user:1001 "Jane Smith" 
> GET user:1001
> CLUSTER NODES
> exit`}</code></pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Test Failover (Optional):</h3>
          <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto"><code>{`# Stop one node
docker stop redis-slave1

# Verify cluster still works
docker exec -it redis-master redis-cli -c
> GET user:1000
> SET test:key "failover test"
> exit

# Restart the node
docker start redis-slave1`}</code></pre>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 8: Monitoring and Maintenance</h2>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-3">View Logs:</h3>
          <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto"><code>{`docker-compose logs -f redis-master
docker-compose logs -f redis-slave1
docker-compose logs -f redis-slave2`}</code></pre>
        </div>

        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-3">Check Resource Usage:</h3>
          <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg"><code>docker stats</code></pre>
        </div>

        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-3">Backup Data:</h3>
          <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto"><code>{`mkdir -p backups
sudo cp -r redis-cluster/master/data backups/master-$(date +%Y%m%d)`}</code></pre>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Production Considerations</h2>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 border rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">Security</h3>
          <ul className="space-y-2 text-sm">
            <li>• Add passwords to configuration</li>
            <li>• Configure proper firewall rules</li>
            <li>• Use TLS/SSL for connections</li>
            <li>• Regular security updates</li>
          </ul>
        </div>

        <div className="p-6 border rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-green-600 dark:text-green-400">Performance</h3>
          <ul className="space-y-2 text-sm">
            <li>• Monitor memory usage</li>
            <li>• Configure persistence settings</li>
            <li>• Use Redis modules</li>
            <li>• Set up monitoring tools</li>
          </ul>
        </div>

        <div className="p-6 border rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-purple-600 dark:text-purple-400">High Availability</h3>
          <ul className="space-y-2 text-sm">
            <li>• Deploy across multiple AZs</li>
            <li>• Use Application Load Balancer</li>
            <li>• Implement backup strategies</li>
            <li>• Monitor cluster health</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Troubleshooting Common Issues</h2>

      <div className="space-y-4 mb-8">
        <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-950/20">
          <h3 className="font-semibold mb-2">Cluster Creation Fails:</h3>
          <ul className="text-sm space-y-1">
            <li>• Verify all nodes are running and accessible</li>
            <li>• Check security group rules for all required ports</li>
            <li>• Ensure configuration files are correct</li>
          </ul>
        </div>

        <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20">
          <h3 className="font-semibold mb-2">Connection Issues:</h3>
          <ul className="text-sm space-y-1">
            <li>• Verify client is cluster-aware</li>
            <li>• Check network connectivity between nodes</li>
            <li>• Ensure proper port mapping in Docker Compose</li>
          </ul>
        </div>

        <div className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/20">
          <h3 className="font-semibold mb-2">Performance Issues:</h3>
          <ul className="text-sm space-y-1">
            <li>• Monitor memory usage and swapping</li>
            <li>• Check network latency between nodes</li>
            <li>• Review Redis configuration parameters</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Conclusion</h2>

      <div className="p-6 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 rounded-lg border mb-8">
        <p className="text-lg mb-4">
          You now have a fully functional Redis cluster running on AWS EC2 with Docker Compose! This setup provides high availability, automatic failover, and horizontal scaling capabilities.
        </p>

        <p className="mb-4">
          The cluster can handle node failures gracefully and distribute your data across multiple nodes for better performance and reliability. As your application grows, you can easily add more nodes to scale horizontally.
        </p>

        <p>
          Remember to implement proper monitoring, backup strategies, and security measures for production deployments. Redis Cluster is a powerful solution for scaling Redis, but it requires proper planning and maintenance to achieve optimal performance.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Next Steps</h2>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
          <h3 className="font-semibold mb-2">🔍 Monitoring</h3>
          <p className="text-sm text-muted-foreground">Set up monitoring with Redis Insight or Prometheus</p>
        </div>
        <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
          <h3 className="font-semibold mb-2">💾 Backups</h3>
          <p className="text-sm text-muted-foreground">Implement automated backup strategies</p>
        </div>
        <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
          <h3 className="font-semibold mb-2">🚨 Alerts</h3>
          <p className="text-sm text-muted-foreground">Configure alerts for cluster health monitoring</p>
        </div>
        <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
          <h3 className="font-semibold mb-2">📈 Scaling</h3>
          <p className="text-sm text-muted-foreground">Add more nodes for increased capacity</p>
        </div>
      </div>

      <div className="text-center p-6 bg-primary/5 rounded-lg border">
        <p className="text-lg font-medium">Happy clustering! 🚀</p>
      </div>
    </div>
  )
}
