'use client'

import Image from 'next/image'

export function RedisClusterAwsSetupContent() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <div className="mb-8">
        <Image
          src="/images/redis-cluster-architecture.svg"
          alt="Redis Cluster Architecture on AWS"
          width={800}
          height={400}
          className="rounded-lg shadow-lg border"
        />
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500 mb-8">
        <p className="text-lg text-blue-800 dark:text-blue-200 m-0">
          Redis is one of the most popular in-memory data structures, widely used for caching, session management, and real-time applications. While a single Redis instance works great for small applications, scaling Redis for production workloads requires a different approach. This is where Redis Cluster comes into play.
        </p>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">What is Redis Cluster?</h2>
        <p className="mb-4">
          Redis Cluster is Redis's built-in solution for horizontal scaling and high availability. It automatically partitions data across multiple Redis nodes and provides automatic failover capabilities. Unlike Redis Sentinel (which provides high availability for single master setups), Redis Cluster offers both high availability and horizontal scaling out of the box.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">✅ Advantages</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Horizontal Scaling:</strong> Scale beyond single server memory limits</li>
              <li>• <strong>High Availability:</strong> Automatic failover with minimal downtime</li>
              <li>• <strong>Performance:</strong> Distribute operations across multiple nodes</li>
              <li>• <strong>Fault Tolerance:</strong> Continues operating with node failures</li>
              <li>• <strong>No Proxy Overhead:</strong> Direct client-to-node connections</li>
              <li>• <strong>Built-in Solution:</strong> No external sharding logic needed</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-3">❌ Considerations</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Complexity:</strong> More complex setup than single instance</li>
              <li>• <strong>Multi-key Operations:</strong> Limited cross-key operation support</li>
              <li>• <strong>Client Support:</strong> Requires cluster-aware Redis clients</li>
              <li>• <strong>Minimum Nodes:</strong> Needs at least 3 master nodes for production</li>
              <li>• <strong>Network Overhead:</strong> Additional inter-node communication</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-yellow-800 dark:text-yellow-200">Prerequisites</h2>
        <p className="mb-4 text-yellow-800 dark:text-yellow-200">
          Before we begin, ensure you have the following requirements ready:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-2 text-yellow-800 dark:text-yellow-200">
            <li>• AWS account with EC2 access</li>
            <li>• Basic understanding of Docker and Docker Compose</li>
          </ul>
          <ul className="space-y-2 text-yellow-800 dark:text-yellow-200">
            <li>• SSH key pair for EC2 access</li>
            <li>• Security group configured for Redis ports</li>
          </ul>
        </div>
      </div>

      <div className="space-y-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border shadow-sm">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
            Launch and Configure EC2 Instance
          </h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Launch EC2 Instance</h3>
            <p className="mb-4">Follow these steps to create your EC2 instance for Redis cluster:</p>
            <ol className="space-y-2 ml-4">
              <li><strong>1.</strong> Login to AWS Console and navigate to EC2 dashboard</li>
              <li><strong>2.</strong> Click "Launch Instance"</li>
              <li><strong>3.</strong> Choose AMI: Select "Amazon Linux 2023" (free tier eligible)</li>
              <li><strong>4.</strong> Instance Type: Choose <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">t3.medium</code> or higher</li>
              <li><strong>5.</strong> Key Pair: Select your existing key pair or create new one</li>
              <li><strong>6.</strong> Security Group: Create/select security group with required ports</li>
            </ol>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Security Group Configuration</h3>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Type</th>
                    <th className="text-left p-2">Port Range</th>
                    <th className="text-left p-2">Source</th>
                    <th className="text-left p-2">Description</th>
                  </tr>
                </thead>
                <tbody className="space-y-1">
                  <tr><td className="p-2">SSH</td><td className="p-2">22</td><td className="p-2">Your IP</td><td className="p-2">SSH access</td></tr>
                  <tr><td className="p-2">Custom TCP</td><td className="p-2">6379</td><td className="p-2">0.0.0.0/0</td><td className="p-2">Redis Master</td></tr>
                  <tr><td className="p-2">Custom TCP</td><td className="p-2">7001-7002</td><td className="p-2">0.0.0.0/0</td><td className="p-2">Redis Slaves</td></tr>
                  <tr><td className="p-2">Custom TCP</td><td className="p-2">17000-17002</td><td className="p-2">0.0.0.0/0</td><td className="p-2">Cluster Bus</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Connect to Instance</h3>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm relative group">
              <button 
                className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => navigator.clipboard.writeText('ssh -i your-key.pem ec2-user@your-instance-public-ip')}
              >
                Copy
              </button>
              <code>ssh -i your-key.pem ec2-user@your-instance-public-ip</code>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border shadow-sm">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
            Install Docker and Docker Compose
          </h2>
          
          <p className="mb-4">
            Run the following installation script to set up Docker and Docker Compose on your EC2 instance:
          </p>

          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm relative group mb-4">
            <button 
              className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => navigator.clipboard.writeText(`#!/bin/bash

# Update system packages
sudo yum update -y

# Install Docker
sudo yum install -y docker
sudo systemctl start docker
sudo systemctl enable docker

# Add ec2-user to docker group
sudo usermod -a -G docker ec2-user

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Create symbolic link
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

echo "Docker and Docker Compose installation completed!"

# Logout and login again to apply group changes
echo "Please logout and login again to apply docker group changes"`)}
            >
              Copy
            </button>
            <pre><code>{`#!/bin/bash

# Update system packages
sudo yum update -y

# Install Docker
sudo yum install -y docker
sudo systemctl start docker
sudo systemctl enable docker

# Add ec2-user to docker group
sudo usermod -a -G docker ec2-user

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Create symbolic link
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

echo "Docker and Docker Compose installation completed!"

# Logout and login again to apply group changes
echo "Please logout and login again to apply docker group changes"`}</code></pre>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="text-blue-800 dark:text-blue-200 m-0">
              <strong>Important:</strong> After running this script, logout and login again to your EC2 instance to apply the Docker group changes.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border shadow-sm">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
            Create Redis Cluster Configuration
          </h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Create Project Directory Structure</h3>
            <p className="mb-4">First, create the directory structure for our Redis cluster setup:</p>
            
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm relative group mb-4">
              <button 
                className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => navigator.clipboard.writeText(`mkdir -p redis-cluster-setup
cd redis-cluster-setup
mkdir -p redis-cluster/{master,slave1,slave2}/data`)}
              >
                Copy
              </button>
              <pre><code>{`mkdir -p redis-cluster-setup
cd redis-cluster-setup
mkdir -p redis-cluster/{master,slave1,slave2}/data`}</code></pre>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Master Configuration</h3>
              <p className="mb-3">Create <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">redis-cluster/master/redis.conf</code>:</p>
              
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm relative group">
                <button 
                  className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => navigator.clipboard.writeText(`port 6379
cluster-enabled yes
cluster-config-file nodes-6379.conf
cluster-node-timeout 15000
appendonly yes
appendfsync everysec
cluster-announce-ip 0.0.0.0
cluster-announce-port 6379
cluster-announce-bus-port 17000
bind 0.0.0.0
protected-mode no
maxmemory 256mb
maxmemory-policy allkeys-lru`)}
                >
                  Copy
                </button>
                <pre><code>{`port 6379
cluster-enabled yes
cluster-config-file nodes-6379.conf
cluster-node-timeout 15000
appendonly yes
appendfsync everysec
cluster-announce-ip 0.0.0.0
cluster-announce-port 6379
cluster-announce-bus-port 17000
bind 0.0.0.0
protected-mode no
maxmemory 256mb
maxmemory-policy allkeys-lru`}</code></pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Slave 1 Configuration</h3>
              <p className="mb-3">Create <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">redis-cluster/slave1/redis.conf</code>:</p>
              
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm relative group">
                <button 
                  className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => navigator.clipboard.writeText(`port 6379
cluster-enabled yes
cluster-config-file nodes-6379.conf
cluster-node-timeout 15000
appendonly yes
appendfsync everysec
cluster-announce-ip 0.0.0.0
cluster-announce-port 7001
cluster-announce-bus-port 17001
bind 0.0.0.0
protected-mode no
maxmemory 256mb
maxmemory-policy allkeys-lru`)}
                >
                  Copy
                </button>
                <pre><code>{`port 6379
cluster-enabled yes
cluster-config-file nodes-6379.conf
cluster-node-timeout 15000
appendonly yes
appendfsync everysec
cluster-announce-ip 0.0.0.0
cluster-announce-port 7001
cluster-announce-bus-port 17001
bind 0.0.0.0
protected-mode no
maxmemory 256mb
maxmemory-policy allkeys-lru`}</code></pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Slave 2 Configuration</h3>
              <p className="mb-3">Create <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">redis-cluster/slave2/redis.conf</code>:</p>
              
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm relative group">
                <button 
                  className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => navigator.clipboard.writeText(`port 6379
cluster-enabled yes
cluster-config-file nodes-6379.conf
cluster-node-timeout 15000
appendonly yes
appendfsync everysec
cluster-announce-ip 0.0.0.0
cluster-announce-port 7002
cluster-announce-bus-port 17002
bind 0.0.0.0
protected-mode no
maxmemory 256mb
maxmemory-policy allkeys-lru`)}
                >
                  Copy
                </button>
                <pre><code>{`port 6379
cluster-enabled yes
cluster-config-file nodes-6379.conf
cluster-node-timeout 15000
appendonly yes
appendfsync everysec
cluster-announce-ip 0.0.0.0
cluster-announce-port 7002
cluster-announce-bus-port 17002
bind 0.0.0.0
protected-mode no
maxmemory 256mb
maxmemory-policy allkeys-lru`}</code></pre>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border shadow-sm">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
            Docker Compose Configuration
          </h2>
          
          <p className="mb-4">
            Create a <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">docker-compose.yml</code> file in your project root directory:
          </p>

          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm relative group">
            <button 
              className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => navigator.clipboard.writeText(`version: '3.8'

services:
  redis-master:
    image: redis:7.2-alpine
    container_name: redis-master
    command: ["redis-server", "/usr/local/etc/redis/redis.conf"]
    volumes:
      - ./redis-cluster/master/redis.conf:/usr/local/etc/redis/redis.conf
      - ./redis-cluster/master/data:/data
    ports:
      - "6379:6379"
      - "17000:17000"
    networks:
      - redis-cluster-net
    restart: unless-stopped

  redis-slave1:
    image: redis:7.2-alpine
    container_name: redis-slave1
    command: ["redis-server", "/usr/local/etc/redis/redis.conf"]
    volumes:
      - ./redis-cluster/slave1/redis.conf:/usr/local/etc/redis/redis.conf
      - ./redis-cluster/slave1/data:/data
    ports:
      - "7001:6379"
      - "17001:17001"
    networks:
      - redis-cluster-net
    restart: unless-stopped

  redis-slave2:
    image: redis:7.2-alpine
    container_name: redis-slave2
    command: ["redis-server", "/usr/local/etc/redis/redis.conf"]
    volumes:
      - ./redis-cluster/slave2/redis.conf:/usr/local/etc/redis/redis.conf
      - ./redis-cluster/slave2/data:/data
    ports:
      - "7002:6379"
      - "17002:17002"
    networks:
      - redis-cluster-net
    restart: unless-stopped

networks:
  redis-cluster-net:
    driver: bridge
    ipam:
      config:
        - subnet: 172.20.0.0/16`)}
            >
              Copy
            </button>
            <pre><code>{`version: '3.8'

services:
  redis-master:
    image: redis:7.2-alpine
    container_name: redis-master
    command: ["redis-server", "/usr/local/etc/redis/redis.conf"]
    volumes:
      - ./redis-cluster/master/redis.conf:/usr/local/etc/redis/redis.conf
      - ./redis-cluster/master/data:/data
    ports:
      - "6379:6379"
      - "17000:17000"
    networks:
      - redis-cluster-net
    restart: unless-stopped

  redis-slave1:
    image: redis:7.2-alpine
    container_name: redis-slave1
    command: ["redis-server", "/usr/local/etc/redis/redis.conf"]
    volumes:
      - ./redis-cluster/slave1/redis.conf:/usr/local/etc/redis/redis.conf
      - ./redis-cluster/slave1/data:/data
    ports:
      - "7001:6379"
      - "17001:17001"
    networks:
      - redis-cluster-net
    restart: unless-stopped

  redis-slave2:
    image: redis:7.2-alpine
    container_name: redis-slave2
    command: ["redis-server", "/usr/local/etc/redis/redis.conf"]
    volumes:
      - ./redis-cluster/slave2/redis.conf:/usr/local/etc/redis/redis.conf
      - ./redis-cluster/slave2/data:/data
    ports:
      - "7002:6379"
      - "17002:17002"
    networks:
      - redis-cluster-net
    restart: unless-stopped

networks:
  redis-cluster-net:
    driver: bridge
    ipam:
      config:
        - subnet: 172.20.0.0/16`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border shadow-sm">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">5</span>
            Initialize Redis Cluster
          </h2>
          
          <p className="mb-4">
            Now let's start the containers and initialize the Redis cluster:
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Start the Cluster</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm relative group">
                <button 
                  className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => navigator.clipboard.writeText(`# Start all containers
docker-compose up -d

# Wait for containers to be ready
sleep 10

# Get your EC2 instance private IP
PRIVATE_IP=$(curl -s http://169.254.169.254/latest/meta-data/local-ipv4)

# Create cluster with 3 master nodes (no replicas for simplicity)
docker exec -it redis-master redis-cli --cluster create \\
  \${PRIVATE_IP}:6379 \\
  \${PRIVATE_IP}:7001 \\
  \${PRIVATE_IP}:7002 \\
  --cluster-replicas 0 --cluster-yes

# Verify cluster status
docker exec -it redis-master redis-cli cluster nodes`)}
                >
                  Copy
                </button>
                <pre><code>{`# Start all containers
docker-compose up -d

# Wait for containers to be ready
sleep 10

# Get your EC2 instance private IP
PRIVATE_IP=$(curl -s http://169.254.169.254/latest/meta-data/local-ipv4)

# Create cluster with 3 master nodes (no replicas for simplicity)
docker exec -it redis-master redis-cli --cluster create \\
  \${PRIVATE_IP}:6379 \\
  \${PRIVATE_IP}:7001 \\
  \${PRIVATE_IP}:7002 \\
  --cluster-replicas 0 --cluster-yes

# Verify cluster status
docker exec -it redis-master redis-cli cluster nodes`}</code></pre>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
              <p className="text-green-800 dark:text-green-200 m-0">
                <strong>Success Indicator:</strong> You should see output showing 3 nodes with different hash slot ranges (0-5460, 5461-10922, 10923-16383).
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border shadow-sm">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">6</span>
            Testing Your Redis Cluster
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Basic Cluster Operations</h3>
              <p className="mb-3">Test your cluster with these commands:</p>
              
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm relative group">
                <button 
                  className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => navigator.clipboard.writeText(`# Connect to cluster (note the -c flag for cluster mode)
docker exec -it redis-master redis-cli -c

# Test basic operations
> SET user:1000 "John Doe"
-> Redirected to slot [1000] located at 172.20.0.2:6379
OK

> GET user:1000
"John Doe"

> SET user:1001 "Jane Smith"
-> Redirected to slot [1001] located at 172.20.0.3:6379
OK

> GET user:1001
"Jane Smith"

# Check cluster information
> CLUSTER INFO
cluster_state:ok
cluster_slots_assigned:16384
cluster_slots_ok:16384
cluster_slots_pfail:0
cluster_slots_fail:0
cluster_known_nodes:3
cluster_size:3

# View all nodes in cluster
> CLUSTER NODES
a1b2c3d4... 172.20.0.2:6379@17000 master - 0 1234567890 1 connected 0-5460
e5f6g7h8... 172.20.0.3:6379@17001 master - 0 1234567890 2 connected 5461-10922
i9j0k1l2... 172.20.0.4:6379@17002 master - 0 1234567890 3 connected 10923-16383

> exit`)}
                >
                  Copy
                </button>
                <pre><code>{`# Connect to cluster (note the -c flag for cluster mode)
docker exec -it redis-master redis-cli -c

# Test basic operations
> SET user:1000 "John Doe"
-> Redirected to slot [1000] located at 172.20.0.2:6379
OK

> GET user:1000
"John Doe"

> SET user:1001 "Jane Smith"
-> Redirected to slot [1001] located at 172.20.0.3:6379
OK

> GET user:1001
"Jane Smith"

# Check cluster information
> CLUSTER INFO
cluster_state:ok
cluster_slots_assigned:16384
cluster_slots_ok:16384
cluster_slots_pfail:0
cluster_slots_fail:0
cluster_known_nodes:3
cluster_size:3

# View all nodes in cluster
> CLUSTER NODES
a1b2c3d4... 172.20.0.2:6379@17000 master - 0 1234567890 1 connected 0-5460
e5f6g7h8... 172.20.0.3:6379@17001 master - 0 1234567890 2 connected 5461-10922
i9j0k1l2... 172.20.0.4:6379@17002 master - 0 1234567890 3 connected 10923-16383

> exit`}</code></pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Performance Testing</h3>
              <p className="mb-3">Benchmark your cluster performance:</p>
              
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm relative group">
                <button 
                  className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => navigator.clipboard.writeText(`# Benchmark cluster performance
docker exec -it redis-master redis-benchmark -c 50 -n 10000 -t set,get

# Test with cluster-aware benchmark
docker exec -it redis-master redis-benchmark -c 50 -n 10000 -t set,get --cluster`)}
                >
                  Copy
                </button>
                <pre><code>{`# Benchmark cluster performance
docker exec -it redis-master redis-benchmark -c 50 -n 10000 -t set,get

# Test with cluster-aware benchmark
docker exec -it redis-master redis-benchmark -c 50 -n 10000 -t set,get --cluster`}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-lg border mb-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Production Considerations</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-red-600 dark:text-red-400">🔒 Security</h3>
            <ul className="space-y-2 text-sm">
              <li>• Use Redis AUTH for password protection</li>
              <li>• Configure proper firewall rules</li>
              <li>• Use TLS/SSL for client connections</li>
              <li>• Regular security updates</li>
              <li>• Restrict network access to trusted sources</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">⚡ Performance</h3>
            <ul className="space-y-2 text-sm">
              <li>• Monitor memory usage and set limits</li>
              <li>• Configure proper persistence settings</li>
              <li>• Use Redis modules for advanced features</li>
              <li>• Set up monitoring with Redis Insight</li>
              <li>• Implement connection pooling</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">📊 Monitoring</h3>
            <ul className="space-y-2 text-sm">
              <li>• Set up CloudWatch metrics</li>
              <li>• Configure alerts for cluster health</li>
              <li>• Monitor slot distribution</li>
              <li>• Track memory usage per node</li>
              <li>• Monitor network latency</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-purple-600 dark:text-purple-400">💾 Backup</h3>
            <ul className="space-y-2 text-sm">
              <li>• Implement automated backups</li>
              <li>• Test backup restoration procedures</li>
              <li>• Use RDB and AOF persistence</li>
              <li>• Store backups in S3</li>
              <li>• Document recovery procedures</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-200">🎉 Conclusion</h2>
        <p className="mb-4 text-green-800 dark:text-green-200">
          Congratulations! You now have a fully functional Redis cluster running on AWS EC2 with Docker Compose. This setup provides:
        </p>
        <div className="grid md:grid-cols-2 gap-4 text-green-800 dark:text-green-200">
          <ul className="space-y-2">
            <li>✅ High availability with automatic failover</li>
            <li>✅ Horizontal scaling capabilities</li>
            <li>✅ Data distribution across multiple nodes</li>
          </ul>
          <ul className="space-y-2">
            <li>✅ Fault tolerance for node failures</li>
            <li>✅ Better performance through load distribution</li>
            <li>✅ Production-ready configuration</li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-200">🚀 Next Steps</h2>
        <div className="grid md:grid-cols-2 gap-6 text-blue-800 dark:text-blue-200">
          <div>
            <h3 className="font-semibold mb-2">Immediate Actions:</h3>
            <ul className="space-y-1 text-sm">
              <li>• Set up monitoring with Redis Insight</li>
              <li>• Implement automated backups</li>
              <li>• Configure alerts for cluster health</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Future Enhancements:</h3>
            <ul className="space-y-1 text-sm">
              <li>• Add more nodes for increased capacity</li>
              <li>• Implement client-side connection pooling</li>
              <li>• Set up SSL/TLS encryption</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
