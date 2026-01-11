'use client'

import React, { useState } from 'react'
import { Copy, Check, Database, Network, BarChart3, CheckCircle2, AlertTriangle } from 'lucide-react'
import Image from 'next/image'

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

export function EfkStackCentralizedLoggingDockerContent() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:scroll-mt-20">
      <div className="mb-8 p-6 bg-muted/50 rounded-lg border">
        <p className="text-lg leading-relaxed mb-0">
          Managing logs across multiple Docker containers is challenging. Debugging production issues means SSH-ing into servers, running docker logs, and manually correlating events across services. The EFK Stack (Elasticsearch, Fluent Bit, Kibana) solves this by providing a centralized logging system that collects, stores, and visualizes logs from all your containers in one powerful dashboard.
        </p>
      </div>

      <p className="text-lg">
        In this comprehensive guide, you'll learn how to set up a production-ready EFK Stack using Docker Compose. By the end, you'll have a fully functional centralized logging system that automatically collects logs from all your Docker containers, stores them in Elasticsearch, and provides beautiful visualizations through Kibana.
      </p>

      <div className="my-8 text-center">
        <svg viewBox="0 0 900 550" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-5xl h-auto mx-auto">
          <defs>
            <linearGradient id="efkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#F04E98", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#FDB30C", stopOpacity:1}} />
            </linearGradient>
            <linearGradient id="elasticGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#00BFB3", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#0077CC", stopOpacity:1}} />
            </linearGradient>
            <linearGradient id="kibanaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#E8478D", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#F04E98", stopOpacity:1}} />
            </linearGradient>
            <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6"/>
            </marker>
          </defs>

          <rect width="900" height="550" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" rx="10"/>
          <text x="450" y="35" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" fill="#1e293b">EFK Stack Architecture</text>

          <rect x="50" y="70" width="180" height="140" fill="#e0f2fe" stroke="#0369a1" strokeWidth="2" rx="10"/>
          <text x="140" y="95" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#0c4a6e">Docker Containers</text>

          <rect x="70" y="110" width="140" height="35" fill="white" stroke="#0369a1" strokeWidth="1.5" rx="5"/>
          <text x="140" y="133" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fill="#1e293b">App Container 1</text>

          <rect x="70" y="150" width="140" height="35" fill="white" stroke="#0369a1" strokeWidth="1.5" rx="5"/>
          <text x="140" y="173" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fill="#1e293b">App Container 2</text>

          <rect x="70" y="190" width="140" height="35" fill="white" stroke="#0369a1" strokeWidth="1.5" rx="5"/>
          <text x="140" y="213" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fill="#1e293b">App Container N</text>

          <line x1="230" y1="140" x2="290" y2="140" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead2)"/>
          <text x="260" y="130" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#1e293b">Logs</text>

          <rect x="290" y="60" width="200" height="180" fill="url(#efkGradient)" stroke="#F04E98" strokeWidth="2" rx="10"/>
          <text x="390" y="85" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white">Fluent Bit</text>
          <text x="390" y="105" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fill="white">Log Processor & Forwarder</text>

          <rect x="310" y="120" width="160" height="30" fill="rgba(255,255,255,0.9)" stroke="#F04E98" strokeWidth="1" rx="5"/>
          <text x="390" y="140" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#1e293b">Collect logs (port 24224)</text>

          <rect x="310" y="155" width="160" height="30" fill="rgba(255,255,255,0.9)" stroke="#F04E98" strokeWidth="1" rx="5"/>
          <text x="390" y="175" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#1e293b">Parse & Filter</text>

          <rect x="310" y="190" width="160" height="30" fill="rgba(255,255,255,0.9)" stroke="#F04E98" strokeWidth="1" rx="5"/>
          <text x="390" y="210" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#1e293b">Forward to Elasticsearch</text>

          <line x1="490" y1="150" x2="550" y2="150" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead2)"/>
          <text x="520" y="140" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#1e293b">Indexed Logs</text>

          <rect x="550" y="60" width="200" height="180" fill="url(#elasticGradient)" stroke="#00BFB3" strokeWidth="2" rx="10"/>
          <text x="650" y="85" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white">Elasticsearch</text>
          <text x="650" y="105" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fill="white">Search & Analytics Engine</text>

          <rect x="570" y="120" width="160" height="30" fill="rgba(255,255,255,0.9)" stroke="#00BFB3" strokeWidth="1" rx="5"/>
          <text x="650" y="140" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#1e293b">Store logs (port 9200)</text>

          <rect x="570" y="155" width="160" height="30" fill="rgba(255,255,255,0.9)" stroke="#00BFB3" strokeWidth="1" rx="5"/>
          <text x="650" y="175" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#1e293b">Index & Search</text>

          <rect x="570" y="190" width="160" height="30" fill="rgba(255,255,255,0.9)" stroke="#00BFB3" strokeWidth="1" rx="5"/>
          <text x="650" y="210" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#1e293b">Real-time Aggregations</text>

          <line x1="650" y1="240" x2="650" y2="290" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead2)"/>
          <text x="680" y="270" textAnchor="start" fontFamily="Arial, sans-serif" fontSize="10" fill="#1e293b">Query API</text>

          <rect x="500" y="290" width="300" height="220" fill="url(#kibanaGradient)" stroke="#E8478D" strokeWidth="2" rx="10"/>
          <text x="650" y="315" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white">Kibana</text>
          <text x="650" y="335" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fill="white">Visualization Platform (port 5601)</text>

          <rect x="520" y="350" width="260" height="35" fill="rgba(255,255,255,0.9)" stroke="#E8478D" strokeWidth="1" rx="5"/>
          <text x="650" y="373" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#1e293b">Discover - Search & Filter Logs</text>

          <rect x="520" y="390" width="260" height="35" fill="rgba(255,255,255,0.9)" stroke="#E8478D" strokeWidth="1" rx="5"/>
          <text x="650" y="413" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#1e293b">Dashboard - Visualize Metrics</text>

          <rect x="520" y="430" width="260" height="35" fill="rgba(255,255,255,0.9)" stroke="#E8478D" strokeWidth="1" rx="5"/>
          <text x="650" y="453" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#1e293b">Alerts - Monitor & Notify</text>

          <rect x="520" y="470" width="260" height="30" fill="rgba(255,255,255,0.9)" stroke="#E8478D" strokeWidth="1" rx="5"/>
          <text x="650" y="490" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#1e293b">Canvas - Create Reports</text>

          <ellipse cx="200" cy="450" rx="120" ry="60" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"/>
          <text x="200" y="440" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#92400e">DevOps Engineer</text>
          <text x="200" y="460" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#92400e">Access Kibana UI</text>
          <text x="200" y="475" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#92400e">in Web Browser</text>

          <path d="M 320 450 Q 410 450 500 400" stroke="#3b82f6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead2)" strokeDasharray="5,5"/>
          <text x="390" y="430" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#1e293b">HTTPS</text>
        </svg>
        <p className="text-sm text-muted-foreground mt-2">EFK Stack data flow: Logs are collected by Fluent Bit, indexed in Elasticsearch, and visualized through Kibana</p>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">What is the EFK Stack?</h2>

      <p className="mb-4">
        The EFK Stack is a powerful log management solution consisting of three open-source components:
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-muted">
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold">Component</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold">Purpose</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold">Port</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Elasticsearch</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">Distributed search and analytics engine that stores and indexes logs</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">9200, 9300</td>
            </tr>
            <tr className="bg-muted/50">
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Fluent Bit</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">Lightweight log processor and forwarder that collects logs from Docker containers</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">24224, 2020</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Kibana</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">Visualization platform that provides a web interface to explore and analyze logs</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">5601</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
        <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">Why EFK instead of ELK?</h4>
        <p className="text-sm text-blue-800 dark:text-blue-200 mb-0">
          While the ELK Stack uses Logstash, we use Fluent Bit because it's significantly lighter (uses ~650KB memory vs Logstash's ~500MB), faster, and purpose-built for containerized environments. Fluent Bit is perfect for Docker and Kubernetes deployments where resource efficiency matters.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Prerequisites</h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-muted">
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold">Requirement</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold">Minimum Version</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3">Docker</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">20.10 or higher</td>
            </tr>
            <tr className="bg-muted/50">
              <td className="border border-gray-300 dark:border-gray-600 p-3">Docker Compose</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">1.29 or higher</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3">RAM</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">4 GB available</td>
            </tr>
            <tr className="bg-muted/50">
              <td className="border border-gray-300 dark:border-gray-600 p-3">Disk Space</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">10 GB free</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Project Structure</h2>

      <div className="relative">
        <pre className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 p-4 rounded-lg overflow-x-auto mb-8"><code>{`.
├── docker-compose.yml          # Main Docker Compose configuration
├── .env                        # Environment variables (passwords)
├── setup-passwords.sh          # Script to configure Elasticsearch passwords
├── fluent-bit/
│   ├── fluent-bit.conf        # Fluent Bit main configuration
│   ├── parsers.conf           # Log parsers (JSON, nginx, apache, etc.)
│   └── extract_container.lua  # Lua script for container metadata
└── esdata/                     # Elasticsearch data directory (auto-created)`}</code></pre>
        <CopyButton text={`.
├── docker-compose.yml
├── .env
├── setup-passwords.sh
├── fluent-bit/
│   ├── fluent-bit.conf
│   ├── parsers.conf
│   └── extract_container.lua
└── esdata/`} />
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 1: Create Docker Network</h2>

      <p className="mb-4">
        First, create an external Docker network that will be shared by all services. This network enables communication between the EFK stack and your application containers.
      </p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-8"><code>docker network create traefik-net</code></pre>
        <CopyButton text="docker network create traefik-net" />
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 2: Configure Environment Variables</h2>

      <p className="mb-4">
        Create a <code>.env</code> file to store sensitive passwords. This file should never be committed to version control.
      </p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-4"><code>{`# .env file
ELASTIC_PASSWORD=your_secure_password_here
KIBANA_PASSWORD=your_secure_password_here`}</code></pre>
        <CopyButton text={`# .env file
ELASTIC_PASSWORD=your_secure_password_here
KIBANA_PASSWORD=your_secure_password_here`} />
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-8">
        <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-200 mb-0">
          Security Note: Use strong, unique passwords for production environments. Consider using a password manager to generate secure passwords.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 3: Create Docker Compose Configuration</h2>

      <p className="mb-4">
        Create a <code>docker-compose.yml</code> file with the complete EFK Stack configuration:
      </p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-4"><code>{`version: "3.8"
services:
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:8.15.3
    container_name: elasticsearch
    ports:
      - "9200:9200"
      - "9300:9300"
    environment:
      - node.name=elasticsearch
      - cluster.name=efk-cluster
      - discovery.type=single-node
      - bootstrap.memory_lock=true
      - ES_JAVA_OPTS=-Xms2g -Xmx2g
      - xpack.security.enabled=true
      - xpack.security.authc.api_key.enabled=true
      - xpack.security.http.ssl.enabled=false
      - xpack.security.transport.ssl.enabled=false
      - ELASTIC_PASSWORD=\${ELASTIC_PASSWORD}
    ulimits:
      memlock:
        soft: -1
        hard: -1
      nofile:
        soft: 65536
        hard: 65536
    volumes:
      - ./esdata:/usr/share/elasticsearch/data
    networks:
      - traefik-net
    restart: unless-stopped

  setup:
    image: docker.elastic.co/elasticsearch/elasticsearch:8.15.3
    container_name: es-setup
    volumes:
      - ./setup-passwords.sh:/setup-passwords.sh
    environment:
      - ELASTIC_PASSWORD=\${ELASTIC_PASSWORD}
      - KIBANA_PASSWORD=\${KIBANA_PASSWORD}
    command: ["/bin/bash", "/setup-passwords.sh"]
    networks:
      - traefik-net
    restart: "no"

  kibana:
    image: docker.elastic.co/kibana/kibana:8.15.3
    container_name: kibana
    ports:
      - "5601:5601"
    environment:
      - SERVERNAME=kibana
      - ELASTICSEARCH_HOSTS=http://elasticsearch:9200
      - ELASTICSEARCH_USERNAME=kibana_system
      - ELASTICSEARCH_PASSWORD=\${KIBANA_PASSWORD}
      - xpack.security.enabled=true
    networks:
      - traefik-net
    restart: unless-stopped

  fluent-bit:
    image: fluent/fluent-bit:3.2.2
    container_name: fluent-bit
    ports:
      - "24224:24224"
      - "24224:24224/udp"
      - "2020:2020"
    environment:
      - FLB_ES_HOST=elasticsearch
      - FLB_ES_PORT=9200
      - FLB_ES_USER=elastic
      - FLB_ES_PASSWORD=\${ELASTIC_PASSWORD}
    volumes:
      - ./fluent-bit/fluent-bit.conf:/fluent-bit/etc/fluent-bit.conf
      - ./fluent-bit/parsers.conf:/fluent-bit/etc/parsers.conf
      - ./fluent-bit/extract_container.lua:/fluent-bit/etc/extract_container.lua
    networks:
      - traefik-net
    restart: unless-stopped

networks:
  traefik-net:
    external: true`}</code></pre>
        <CopyButton text={`version: "3.8"
services:
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:8.15.3
    container_name: elasticsearch
    ports:
      - "9200:9200"
      - "9300:9300"
    environment:
      - node.name=elasticsearch
      - cluster.name=efk-cluster
      - discovery.type=single-node
      - bootstrap.memory_lock=true
      - ES_JAVA_OPTS=-Xms2g -Xmx2g
      - xpack.security.enabled=true
      - xpack.security.authc.api_key.enabled=true
      - xpack.security.http.ssl.enabled=false
      - xpack.security.transport.ssl.enabled=false
      - ELASTIC_PASSWORD=\${ELASTIC_PASSWORD}
    ulimits:
      memlock:
        soft: -1
        hard: -1
      nofile:
        soft: 65536
        hard: 65536
    volumes:
      - ./esdata:/usr/share/elasticsearch/data
    networks:
      - traefik-net
    restart: unless-stopped

  setup:
    image: docker.elastic.co/elasticsearch/elasticsearch:8.15.3
    container_name: es-setup
    volumes:
      - ./setup-passwords.sh:/setup-passwords.sh
    environment:
      - ELASTIC_PASSWORD=\${ELASTIC_PASSWORD}
      - KIBANA_PASSWORD=\${KIBANA_PASSWORD}
    command: ["/bin/bash", "/setup-passwords.sh"]
    networks:
      - traefik-net
    restart: "no"

  kibana:
    image: docker.elastic.co/kibana/kibana:8.15.3
    container_name: kibana
    ports:
      - "5601:5601"
    environment:
      - SERVERNAME=kibana
      - ELASTICSEARCH_HOSTS=http://elasticsearch:9200
      - ELASTICSEARCH_USERNAME=kibana_system
      - ELASTICSEARCH_PASSWORD=\${KIBANA_PASSWORD}
      - xpack.security.enabled=true
    networks:
      - traefik-net
    restart: unless-stopped

  fluent-bit:
    image: fluent/fluent-bit:3.2.2
    container_name: fluent-bit
    ports:
      - "24224:24224"
      - "24224:24224/udp"
      - "2020:2020"
    environment:
      - FLB_ES_HOST=elasticsearch
      - FLB_ES_PORT=9200
      - FLB_ES_USER=elastic
      - FLB_ES_PASSWORD=\${ELASTIC_PASSWORD}
    volumes:
      - ./fluent-bit/fluent-bit.conf:/fluent-bit/etc/fluent-bit.conf
      - ./fluent-bit/parsers.conf:/fluent-bit/etc/parsers.conf
      - ./fluent-bit/extract_container.lua:/fluent-bit/etc/extract_container.lua
    networks:
      - traefik-net
    restart: unless-stopped

networks:
  traefik-net:
    external: true`} />
      </div>

      <div className="bg-muted/50 rounded-lg p-4 mb-8 border">
        <h4 className="font-semibold mb-2">Configuration Highlights:</h4>
        <ul className="text-sm space-y-1">
          <li><strong>Elasticsearch:</strong> Allocated 2GB heap memory, security enabled with password authentication</li>
          <li><strong>Setup Container:</strong> One-time container that configures user passwords</li>
          <li><strong>Kibana:</strong> Connected to Elasticsearch with dedicated kibana_system user</li>
          <li><strong>Fluent Bit:</strong> Receives logs on port 24224, forwards to Elasticsearch</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 4: Create Password Setup Script</h2>

      <p className="mb-4">
        Create a <code>setup-passwords.sh</code> script that automatically configures Elasticsearch user passwords:
      </p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-8"><code>{`#!/bin/bash
set -e

echo "Waiting for Elasticsearch to be ready..."
until curl -s http://elasticsearch:9200 >/dev/null; do
    sleep 5
done

echo "Setting up kibana_system password..."
curl -s -X POST -u "elastic:\${ELASTIC_PASSWORD}" \\
  -H "Content-Type: application/json" \\
  http://elasticsearch:9200/_security/user/kibana_system/_password \\
  -d "{\\"password\\": \\"\${KIBANA_PASSWORD}\\"}"

echo ""
echo "✓ Passwords configured successfully!"
exit 0`}</code></pre>
        <CopyButton text={`#!/bin/bash
set -e

echo "Waiting for Elasticsearch to be ready..."
until curl -s http://elasticsearch:9200 >/dev/null; do
    sleep 5
done

echo "Setting up kibana_system password..."
curl -s -X POST -u "elastic:\${ELASTIC_PASSWORD}" \\
  -H "Content-Type: application/json" \\
  http://elasticsearch:9200/_security/user/kibana_system/_password \\
  -d "{\\"password\\": \\"\${KIBANA_PASSWORD}\\"}"

echo ""
echo "✓ Passwords configured successfully!"
exit 0`} />
      </div>

      <p className="mb-8">Make the script executable:</p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-8"><code>chmod +x setup-passwords.sh</code></pre>
        <CopyButton text="chmod +x setup-passwords.sh" />
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 5: Configure Fluent Bit</h2>

      <p className="mb-4">
        Create the Fluent Bit configuration directory and files:
      </p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-4"><code>mkdir -p fluent-bit</code></pre>
        <CopyButton text="mkdir -p fluent-bit" />
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4">fluent-bit.conf</h3>

      <p className="mb-4">
        Create <code>fluent-bit/fluent-bit.conf</code> with the main configuration:
      </p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-8"><code>{`[SERVICE]
    Flush        5
    Daemon       Off
    Log_Level    info
    Parsers_File parsers.conf
    HTTP_Server  On
    HTTP_Listen  0.0.0.0
    HTTP_Port    2020
    storage.path /tmp/fluent-bit/storage
    storage.sync normal
    storage.checksum off
    storage.max_chunks_up 128
    storage.backlog.mem_limit 5M

[INPUT]
    Name              forward
    Listen            0.0.0.0
    Port              24224
    Buffer_Chunk_Size 1M
    Buffer_Max_Size   6M
    storage.type      filesystem

[FILTER]
    Name    lua
    Match   *
    script  /fluent-bit/etc/extract_container.lua
    call    extract_container_metadata

[OUTPUT]
    Name            es
    Match           *
    Host            \${FLB_ES_HOST}
    Port            \${FLB_ES_PORT}
    HTTP_User       \${FLB_ES_USER}
    HTTP_Passwd     \${FLB_ES_PASSWORD}
    Index           fluentbit-docker
    Type            _doc
    Logstash_Format On
    Logstash_Prefix fluentbit-docker
    Retry_Limit     5
    storage.total_limit_size 10M`}</code></pre>
        <CopyButton text={`[SERVICE]
    Flush        5
    Daemon       Off
    Log_Level    info
    Parsers_File parsers.conf
    HTTP_Server  On
    HTTP_Listen  0.0.0.0
    HTTP_Port    2020
    storage.path /tmp/fluent-bit/storage
    storage.sync normal
    storage.checksum off
    storage.max_chunks_up 128
    storage.backlog.mem_limit 5M

[INPUT]
    Name              forward
    Listen            0.0.0.0
    Port              24224
    Buffer_Chunk_Size 1M
    Buffer_Max_Size   6M
    storage.type      filesystem

[FILTER]
    Name    lua
    Match   *
    script  /fluent-bit/etc/extract_container.lua
    call    extract_container_metadata

[OUTPUT]
    Name            es
    Match           *
    Host            \${FLB_ES_HOST}
    Port            \${FLB_ES_PORT}
    HTTP_User       \${FLB_ES_USER}
    HTTP_Passwd     \${FLB_ES_PASSWORD}
    Index           fluentbit-docker
    Type            _doc
    Logstash_Format On
    Logstash_Prefix fluentbit-docker
    Retry_Limit     5
    storage.total_limit_size 10M`} />
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4">parsers.conf</h3>

      <p className="mb-4">
        Create <code>fluent-bit/parsers.conf</code> for log parsing:
      </p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-8"><code>{`[PARSER]
    Name        docker
    Format      json
    Time_Key    time
    Time_Format %Y-%m-%dT%H:%M:%S.%L%z

[PARSER]
    Name        json
    Format      json
    Time_Key    time
    Time_Format %Y-%m-%dT%H:%M:%S.%L%z`}</code></pre>
        <CopyButton text={`[PARSER]
    Name        docker
    Format      json
    Time_Key    time
    Time_Format %Y-%m-%dT%H:%M:%S.%L%z

[PARSER]
    Name        json
    Format      json
    Time_Key    time
    Time_Format %Y-%m-%dT%H:%M:%S.%L%z`} />
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4">extract_container.lua</h3>

      <p className="mb-4">
        Create <code>fluent-bit/extract_container.lua</code> to extract container metadata:
      </p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-8"><code>{`function extract_container_metadata(tag, timestamp, record)
    local container_name = record["container_name"]
    if container_name then
        record["container_name"] = container_name:gsub("^/", "")
    end
    return 2, timestamp, record
end`}</code></pre>
        <CopyButton text={`function extract_container_metadata(tag, timestamp, record)
    local container_name = record["container_name"]
    if container_name then
        record["container_name"] = container_name:gsub("^/", "")
    end
    return 2, timestamp, record
end`} />
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 6: Start the EFK Stack</h2>

      <p className="mb-4">
        Now that all configurations are in place, start the services in the correct order:
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Start Elasticsearch</h3>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-4"><code>docker-compose up -d elasticsearch</code></pre>
        <CopyButton text="docker-compose up -d elasticsearch" />
      </div>

      <p className="mb-4">Wait 30-60 seconds for Elasticsearch to be ready. Check the logs:</p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-8"><code>docker-compose logs -f elasticsearch</code></pre>
        <CopyButton text="docker-compose logs -f elasticsearch" />
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4">Run Setup Container</h3>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-8"><code>docker-compose up setup</code></pre>
        <CopyButton text="docker-compose up setup" />
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4">Start Remaining Services</h3>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-4"><code>{`docker-compose up -d kibana fluent-bit`}</code></pre>
        <CopyButton text="docker-compose up -d kibana fluent-bit" />
      </div>

      <p className="mb-4">Verify all services are running:</p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-8"><code>docker-compose ps</code></pre>
        <CopyButton text="docker-compose ps" />
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 7: Access Kibana</h2>

      <p className="mb-4">
        Open your browser and navigate to <code>http://localhost:5601</code>
      </p>

      <div className="my-8 border rounded-lg overflow-hidden">
        <Image
          src="/images/kibana-login.png"
          alt="Kibana login page showing username and password fields"
          width={1200}
          height={600}
          className="w-full h-auto"
        />
        <p className="text-sm text-muted-foreground text-center py-2 bg-muted/50">Kibana login page - Use username "elastic" with your ELASTIC_PASSWORD</p>
      </div>

      <p className="mb-4">
        Login with:
      </p>

      <ul className="list-disc list-inside mb-8 space-y-2">
        <li><strong>Username:</strong> elastic</li>
        <li><strong>Password:</strong> Your ELASTIC_PASSWORD from .env file</li>
      </ul>

      <div className="my-8 border rounded-lg overflow-hidden">
        <Image
          src="/images/kibana-home.png"
          alt="Kibana home page showing various options including Search, Observability, Security, and Analytics"
          width={1200}
          height={600}
          className="w-full h-auto"
        />
        <p className="text-sm text-muted-foreground text-center py-2 bg-muted/50">Kibana home page after successful login</p>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 8: Configure Docker Containers to Send Logs</h2>

      <p className="mb-4">
        Now configure your application containers to send logs to Fluent Bit using the Fluentd logging driver:
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Docker Run Example</h3>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-8"><code>{`docker run -d \\
  --log-driver=fluentd \\
  --log-opt fluentd-address=localhost:24224 \\
  --log-opt tag=docker.{{.Name}} \\
  --network traefik-net \\
  nginx:latest`}</code></pre>
        <CopyButton text={`docker run -d \\
  --log-driver=fluentd \\
  --log-opt fluentd-address=localhost:24224 \\
  --log-opt tag=docker.{{.Name}} \\
  --network traefik-net \\
  nginx:latest`} />
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4">Docker Compose Example</h3>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-8"><code>{`services:
  your-app:
    image: your-app:latest
    logging:
      driver: fluentd
      options:
        fluentd-address: localhost:24224
        tag: docker.your-app
    networks:
      - traefik-net

networks:
  traefik-net:
    external: true`}</code></pre>
        <CopyButton text={`services:
  your-app:
    image: your-app:latest
    logging:
      driver: fluentd
      options:
        fluentd-address: localhost:24224
        tag: docker.your-app
    networks:
      - traefik-net

networks:
  traefik-net:
    external: true`} />
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 9: Create Data View in Kibana</h2>

      <p className="mb-4">
        Before you can view logs, you need to create a data view (formerly called index pattern) in Kibana:
      </p>

      <ol className="list-decimal list-inside mb-8 space-y-4">
        <li>Navigate to <strong>Analytics → Discover</strong> in the sidebar</li>
      </ol>

      <div className="my-8 border rounded-lg overflow-hidden">
        <Image
          src="/images/kibana-discover.png"
          alt="Kibana showing Analytics section with Discover option highlighted"
          width={1200}
          height={600}
          className="w-full h-auto"
        />
        <p className="text-sm text-muted-foreground text-center py-2 bg-muted/50">Navigate to Discover from the Analytics section</p>
      </div>

      <ol start={2} className="list-decimal list-inside mb-8 space-y-4">
        <li>Click <strong>"Create data view"</strong></li>
      </ol>

      <div className="my-8 border rounded-lg overflow-hidden">
        <Image
          src="/images/kibana-create-dataview.png"
          alt="Kibana showing Create data view dialog with index pattern field"
          width={1200}
          height={600}
          className="w-full h-auto"
        />
        <p className="text-sm text-muted-foreground text-center py-2 bg-muted/50">Create data view dialog to specify the index pattern</p>
      </div>

      <ol start={3} className="list-decimal list-inside mb-8 space-y-4">
        <li>Enter the index pattern: <code>fluentbit-docker-*</code></li>
        <li>Select <code>@timestamp</code> as the time field (if available)</li>
        <li>Click <strong>"Save data view to Kibana"</strong></li>
      </ol>

      <div className="my-8 border rounded-lg overflow-hidden">
        <Image
          src="/images/kibana-select-index.png"
          alt="Kibana showing index pattern selection with fluentbit-docker-* pattern and matching sources"
          width={1200}
          height={600}
          className="w-full h-auto"
        />
        <p className="text-sm text-muted-foreground text-center py-2 bg-muted/50">Select the index pattern and verify it matches your log sources</p>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 10: View Your Logs</h2>

      <p className="mb-4">
        Once the data view is created, you'll see logs from all your Docker containers:
      </p>

      <div className="my-8 border rounded-lg overflow-hidden">
        <Image
          src="/images/kibana-logs.png"
          alt="Kibana Discover view showing real-time logs from Docker containers with timestamps and log content"
          width={1200}
          height={600}
          className="w-full h-auto"
        />
        <p className="text-sm text-muted-foreground text-center py-2 bg-muted/50">Kibana Discover view showing real-time logs from your Docker containers</p>
      </div>

      <div className="bg-muted/50 rounded-lg p-4 mb-8 border">
        <h4 className="font-semibold mb-2">Useful Kibana Features:</h4>
        <ul className="text-sm space-y-2">
          <li><strong>Search Bar:</strong> Use KQL (Kibana Query Language) to filter logs - e.g., <code>container_name: "nginx"</code></li>
          <li><strong>Time Picker:</strong> Adjust the time range in the top-right corner</li>
          <li><strong>Fields Panel:</strong> Add/remove fields from the left sidebar</li>
          <li><strong>Auto-Refresh:</strong> Enable automatic log refresh for real-time monitoring</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Common Search Queries</h2>

      <p className="mb-4">
        Here are some useful KQL queries for filtering logs:
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-muted">
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold">Query</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3"><code>container_name: "app"</code></td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">Logs from specific container</td>
            </tr>
            <tr className="bg-muted/50">
              <td className="border border-gray-300 dark:border-gray-600 p-3"><code>log: *error*</code></td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">Logs containing "error"</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3"><code>log: *exception* or log: *error*</code></td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">Logs with exception or error</td>
            </tr>
            <tr className="bg-muted/50">
              <td className="border border-gray-300 dark:border-gray-600 p-3"><code>not log: *debug*</code></td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">Exclude debug logs</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Troubleshooting</h2>

      <div className="space-y-6 mb-8">
        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Elasticsearch Won't Start</h3>
          <p className="text-sm mb-2"><strong>Issue:</strong> Container exits with memory errors</p>
          <p className="text-sm mb-2"><strong>Solution:</strong></p>
          <div className="relative">
            <pre className="bg-gray-50 dark:bg-gray-900 border p-3 rounded text-sm overflow-x-auto"><code>{`# Check current value
sysctl vm.max_map_count

# Set temporarily
sudo sysctl -w vm.max_map_count=262144

# Set permanently (Linux)
echo "vm.max_map_count=262144" | sudo tee -a /etc/sysctl.conf
sudo sysctl -p`}</code></pre>
            <CopyButton text={`sysctl vm.max_map_count
sudo sysctl -w vm.max_map_count=262144
echo "vm.max_map_count=262144" | sudo tee -a /etc/sysctl.conf
sudo sysctl -p`} />
          </div>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Kibana Can't Connect to Elasticsearch</h3>
          <p className="text-sm mb-2"><strong>Issue:</strong> Kibana shows "Unable to retrieve version information"</p>
          <p className="text-sm mb-2"><strong>Solution:</strong></p>
          <ul className="text-sm list-disc list-inside space-y-1">
            <li>Check if Elasticsearch is running: <code>docker-compose ps elasticsearch</code></li>
            <li>Verify passwords match in .env file</li>
            <li>Check Kibana logs: <code>docker-compose logs kibana</code></li>
            <li>Ensure setup container ran successfully</li>
          </ul>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">No Logs Appearing in Kibana</h3>
          <p className="text-sm mb-2"><strong>Issue:</strong> Fluent Bit is running but no logs in Elasticsearch</p>
          <p className="text-sm mb-2"><strong>Solution:</strong></p>
          <ul className="text-sm list-disc list-inside space-y-1">
            <li>Check Fluent Bit logs: <code>docker-compose logs fluent-bit</code></li>
            <li>Verify your application is using the fluentd logging driver</li>
            <li>Check Fluent Bit health: <code>curl http://localhost:2020</code></li>
            <li>Verify Elasticsearch indices: <code>curl -u elastic:password http://localhost:9200/_cat/indices</code></li>
          </ul>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Container Can't Send Logs to Fluent Bit</h3>
          <p className="text-sm mb-2"><strong>Issue:</strong> Error: "Failed to initialize logging driver"</p>
          <p className="text-sm mb-2"><strong>Solution:</strong></p>
          <ul className="text-sm list-disc list-inside space-y-1">
            <li>Ensure Fluent Bit is running: <code>docker ps | grep fluent-bit</code></li>
            <li>Check that both containers are on the same network</li>
            <li>Verify port 24224 is accessible: <code>telnet localhost 24224</code></li>
            <li>Check firewall rules aren't blocking the port</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Performance Tuning</h2>

      <h3 className="text-xl font-semibold mt-8 mb-4">Elasticsearch Optimization</h3>

      <div className="bg-muted/50 rounded-lg p-4 mb-6 border">
        <ul className="text-sm space-y-2">
          <li><strong>Heap Size:</strong> Set to 50% of available RAM, max 32GB - configured via <code>ES_JAVA_OPTS</code></li>
          <li><strong>Shard Strategy:</strong> For small deployments, use 1 primary shard per index</li>
          <li><strong>Refresh Interval:</strong> Increase from default 1s to 30s for better indexing performance</li>
          <li><strong>Index Lifecycle Management:</strong> Set up ILM policies to automatically delete old logs</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4">Fluent Bit Optimization</h3>

      <div className="bg-muted/50 rounded-lg p-4 mb-8 border">
        <ul className="text-sm space-y-2">
          <li><strong>Buffer Settings:</strong> Adjust <code>Buffer_Chunk_Size</code> and <code>Buffer_Max_Size</code> for high-volume logging</li>
          <li><strong>Storage:</strong> Use filesystem storage for reliability during network issues</li>
          <li><strong>Flush Interval:</strong> Default 5 seconds - increase for less network traffic, decrease for lower latency</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Maintenance</h2>

      <h3 className="text-xl font-semibold mt-8 mb-4">Clean Up Old Indices</h3>

      <p className="mb-4">
        Elasticsearch indices grow over time. Set up Index Lifecycle Management (ILM) to automatically manage old indices:
      </p>

      <ol className="list-decimal list-inside mb-8 space-y-2">
        <li>In Kibana, go to <strong>Management → Stack Management → Index Lifecycle Policies</strong></li>
        <li>Create a policy to delete indices older than 30 days</li>
        <li>Apply the policy to your index template</li>
      </ol>

      <h3 className="text-xl font-semibold mt-8 mb-4">Backup Elasticsearch Data</h3>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-8"><code>{`# Stop Elasticsearch
docker-compose stop elasticsearch

# Backup data
tar -czf esdata-backup-$(date +%Y%m%d).tar.gz esdata/

# Restart Elasticsearch
docker-compose start elasticsearch`}</code></pre>
        <CopyButton text={`docker-compose stop elasticsearch
tar -czf esdata-backup-$(date +%Y%m%d).tar.gz esdata/
docker-compose start elasticsearch`} />
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Production Considerations</h2>

      <div className="space-y-4 mb-8">
        <div className="border-l-4 border-blue-500 pl-4 py-2">
          <h4 className="font-semibold mb-1">Enable SSL/TLS</h4>
          <p className="text-sm">For production, enable SSL for Elasticsearch and Kibana. Use Let's Encrypt certificates with a reverse proxy like Traefik or Caddy.</p>
        </div>

        <div className="border-l-4 border-green-500 pl-4 py-2">
          <h4 className="font-semibold mb-1">Use Strong Passwords</h4>
          <p className="text-sm">Generate strong, unique passwords using a password manager. Never use default or simple passwords in production.</p>
        </div>

        <div className="border-l-4 border-yellow-500 pl-4 py-2">
          <h4 className="font-semibold mb-1">Monitor Resource Usage</h4>
          <p className="text-sm">Set up monitoring for CPU, memory, and disk usage. Elasticsearch can be resource-intensive under heavy load.</p>
        </div>

        <div className="border-l-4 border-purple-500 pl-4 py-2">
          <h4 className="font-semibold mb-1">Implement Backup Strategy</h4>
          <p className="text-sm">Use Elasticsearch snapshots for automated backups. Store backups in a separate location (S3, NFS, etc.).</p>
        </div>

        <div className="border-l-4 border-red-500 pl-4 py-2">
          <h4 className="font-semibold mb-1">Restrict Network Access</h4>
          <p className="text-sm">Use firewall rules to restrict access to ports 9200, 5601, and 24224. Only expose Kibana to the public internet (behind authentication).</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Summary Checklist</h2>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span>Docker network created</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span>Environment variables configured</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span>Docker Compose file created</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span>Password setup script configured</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span>Fluent Bit configuration files created</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span>All services started successfully</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span>Kibana accessible at localhost:5601</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span>Application containers configured</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span>Data view created in Kibana</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span>Logs visible in Discover</span>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Conclusion</h2>

      <div className="bg-muted/50 rounded-lg p-8 mb-8 border">
        <p className="text-lg mb-4">
          You now have a fully functional EFK Stack for centralized logging! This setup provides:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>Real-time log aggregation from all containers</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>Powerful search and filtering capabilities</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>Beautiful visualizations and dashboards</span>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>Scalable architecture for growing systems</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>Security with authentication</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>Production-ready monitoring solution</span>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-lg mb-8">
        The EFK Stack transforms how you debug and monitor your Docker applications. No more SSH-ing into servers or running docker logs on individual containers. Everything is centralized, searchable, and visualized in one powerful interface. This setup is production-ready and scales with your infrastructure as it grows.
      </p>

      <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <p className="text-sm">
          <strong>Document created:</strong> January 2026<br />
          <strong>EFK Stack versions:</strong> Elasticsearch 8.15.3, Fluent Bit 3.2.2, Kibana 8.15.3<br />
          <strong>Tested on:</strong> Docker 24.0+, Docker Compose 2.20+
        </p>
      </div>
    </div>
  )
}
