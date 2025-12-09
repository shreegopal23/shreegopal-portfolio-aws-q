'use client'

import React, { useState } from 'react'
import { Copy, Check, Server, Network, Shield, CheckCircle2 } from 'lucide-react'

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

export function KubernetesSingleNodeClusterSetupContent() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:scroll-mt-20">
      <div className="mb-8 p-6 bg-muted/50 rounded-lg border">
        <p className="text-lg leading-relaxed mb-0">
          Setting up a Kubernetes cluster can seem daunting, but with the right guidance, you can have a fully functional single-node cluster running in under an hour. This comprehensive guide walks you through every step of installing and configuring Kubernetes using kubeadm, kubelet, and kubectl on Ubuntu Server.
        </p>
      </div>

      <p className="text-lg">
        Whether you're learning Kubernetes for the first time or setting up a development environment, this guide provides detailed explanations of each component and step, ensuring you understand not just what to do, but why you're doing it.
      </p>

      <div className="my-8 text-center">
        <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-4xl h-auto mx-auto">
          <defs>
            <linearGradient id="k8sGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#326CE5", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#1E4B9C", stopOpacity:1}} />
            </linearGradient>
            <linearGradient id="controlPlaneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#10B981", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#059669", stopOpacity:1}} />
            </linearGradient>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6"/>
            </marker>
          </defs>

          <rect width="800" height="500" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" rx="10"/>

          <text x="400" y="30" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#1e293b">Kubernetes Single-Node Cluster Architecture</text>

          <rect x="50" y="60" width="700" height="420" fill="none" stroke="#326CE5" strokeWidth="2" strokeDasharray="5,5" rx="15"/>
          <text x="70" y="85" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#326CE5">Single Node Cluster</text>

          <rect x="80" y="100" width="640" height="150" fill="url(#controlPlaneGradient)" stroke="#10B981" strokeWidth="2" rx="10"/>
          <text x="400" y="125" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white">Control Plane Components</text>

          <rect x="110" y="140" width="140" height="80" fill="white" stroke="#326CE5" strokeWidth="2" rx="8"/>
          <text x="180" y="165" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#1e293b">API Server</text>
          <text x="180" y="185" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#64748b">Frontend for K8s</text>
          <text x="180" y="200" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#64748b">control plane</text>

          <rect x="270" y="140" width="120" height="80" fill="white" stroke="#326CE5" strokeWidth="2" rx="8"/>
          <text x="330" y="165" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#1e293b">etcd</text>
          <text x="330" y="185" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#64748b">Key-value store</text>
          <text x="330" y="200" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#64748b">for cluster state</text>

          <rect x="410" y="140" width="140" height="80" fill="white" stroke="#326CE5" strokeWidth="2" rx="8"/>
          <text x="480" y="160" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#1e293b">Controller</text>
          <text x="480" y="175" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#1e293b">Manager</text>
          <text x="480" y="195" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#64748b">Manages cluster</text>
          <text x="480" y="210" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#64748b">controllers</text>

          <rect x="570" y="140" width="120" height="80" fill="white" stroke="#326CE5" strokeWidth="2" rx="8"/>
          <text x="630" y="165" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#1e293b">Scheduler</text>
          <text x="630" y="185" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#64748b">Assigns pods</text>
          <text x="630" y="200" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#64748b">to nodes</text>

          <rect x="80" y="270" width="640" height="130" fill="#e0f2fe" stroke="#0369a1" strokeWidth="2" rx="10"/>
          <text x="400" y="295" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#0c4a6e">Node Components</text>

          <rect x="110" y="310" width="150" height="70" fill="white" stroke="#0369a1" strokeWidth="2" rx="8"/>
          <text x="185" y="335" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#1e293b">kubelet</text>
          <text x="185" y="355" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#64748b">Manages pods</text>
          <text x="185" y="370" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#64748b">on the node</text>

          <rect x="280" y="310" width="150" height="70" fill="white" stroke="#0369a1" strokeWidth="2" rx="8"/>
          <text x="355" y="335" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#1e293b">kube-proxy</text>
          <text x="355" y="355" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#64748b">Network proxy</text>
          <text x="355" y="370" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#64748b">for services</text>

          <rect x="450" y="310" width="150" height="70" fill="white" stroke="#0369a1" strokeWidth="2" rx="8"/>
          <text x="525" y="335" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#1e293b">containerd</text>
          <text x="525" y="355" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#64748b">Container runtime</text>
          <text x="525" y="370" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#64748b">runs containers</text>

          <rect x="80" y="420" width="640" height="50" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" rx="5"/>
          <text x="400" y="440" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#92400e">Networking: CNI Plugins + Flannel</text>
          <text x="400" y="457" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#92400e">Provides pod-to-pod communication</text>
        </svg>
        <p className="text-sm text-muted-foreground mt-2">Kubernetes single-node cluster architecture overview</p>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Prerequisites</h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-muted">
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold">Requirement</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold">Minimum</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3">CPU</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">2 cores</td>
            </tr>
            <tr className="bg-muted/50">
              <td className="border border-gray-300 dark:border-gray-600 p-3">RAM</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">2 GB</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3">OS</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">Ubuntu 20.04 / 22.04 / 24.04</td>
            </tr>
            <tr className="bg-muted/50">
              <td className="border border-gray-300 dark:border-gray-600 p-3">Network</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">Unique hostname, MAC address</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3">Access</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">Root or sudo privileges</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Understanding the Components</h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-muted">
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold">Component</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">kubeadm</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">Bootstrap and initialize the cluster</td>
            </tr>
            <tr className="bg-muted/50">
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">kubelet</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">Agent that runs on each node, manages pods</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">kubectl</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">CLI tool to interact with the cluster</td>
            </tr>
            <tr className="bg-muted/50">
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">containerd</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">Container runtime (runs containers)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">CNI Plugins</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">Provides networking capabilities for pods</td>
            </tr>
            <tr className="bg-muted/50">
              <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Flannel</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">Overlay network for pod-to-pod communication</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 1: Disable Swap</h2>

      <p className="mb-4">
        Kubernetes requires swap to be disabled for proper memory management. When swap is enabled, Kubernetes cannot accurately track resource usage, which can lead to performance issues and unpredictable behavior.
      </p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-4"><code>{`# Disable swap immediately
sudo swapoff -a

# Disable swap permanently (survives reboot)
sudo sed -i '/ swap / s/^\\(.*\\)$/#\\1/g' /etc/fstab`}</code></pre>
        <CopyButton text={`# Disable swap immediately
sudo swapoff -a

# Disable swap permanently (survives reboot)
sudo sed -i '/ swap / s/^\\(.*\\)$/#\\1/g' /etc/fstab`} />
      </div>

      <p className="mb-4"><strong>Verify:</strong></p>
      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-8"><code>free -h  # Swap should show 0</code></pre>
        <CopyButton text="free -h  # Swap should show 0" />
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 2: Load Kernel Modules</h2>

      <p className="mb-4">
        These kernel modules are essential for Kubernetes networking. The <code>overlay</code> module enables overlay filesystems for container layers, while <code>br_netfilter</code> allows iptables to see bridged traffic.
      </p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-4"><code>{`# Create config file for persistent loading
cat <<EOF | sudo tee /etc/modules-load.d/k8s.conf
overlay
br_netfilter
EOF

# Load modules immediately
sudo modprobe overlay
sudo modprobe br_netfilter`}</code></pre>
        <CopyButton text={`# Create config file for persistent loading
cat <<EOF | sudo tee /etc/modules-load.d/k8s.conf
overlay
br_netfilter
EOF

# Load modules immediately
sudo modprobe overlay
sudo modprobe br_netfilter`} />
      </div>

      <div className="bg-muted/50 rounded-lg p-4 mb-8 border">
        <h4 className="font-semibold mb-2">What they do:</h4>
        <ul className="text-sm space-y-1">
          <li><code>overlay</code> - Required for overlay filesystem (container layers)</li>
          <li><code>br_netfilter</code> - Enables iptables to see bridged traffic</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 3: Configure Sysctl Parameters</h2>

      <p className="mb-4">
        These system parameters enable IP forwarding and bridge networking, which are essential for Kubernetes networking to function properly.
      </p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-4"><code>{`cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-iptables  = 1
net.bridge.bridge-nf-call-ip6tables = 1
net.ipv4.ip_forward                 = 1
EOF

# Apply immediately
sudo sysctl --system`}</code></pre>
        <CopyButton text={`cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-iptables  = 1
net.bridge.bridge-nf-call-ip6tables = 1
net.ipv4.ip_forward                 = 1
EOF

# Apply immediately
sudo sysctl --system`} />
      </div>

      <div className="bg-muted/50 rounded-lg p-4 mb-8 border">
        <h4 className="font-semibold mb-2">What they do:</h4>
        <ul className="text-sm space-y-1">
          <li><code>bridge-nf-call-iptables</code> - Allows iptables to process bridged IPv4 traffic</li>
          <li><code>bridge-nf-call-ip6tables</code> - Same for IPv6</li>
          <li><code>ip_forward</code> - Enables routing between network interfaces</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 4: Install Container Runtime (containerd)</h2>

      <p className="mb-4">
        Kubernetes needs a container runtime to actually run containers. We'll use containerd, which is the industry-standard container runtime that provides reliability and performance.
      </p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-4"><code>{`# Install dependencies
sudo apt-get update
sudo apt-get install -y ca-certificates curl gnupg

# Add Docker's official GPG key
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# Add Docker repository
echo \\
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \\
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \\
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install containerd
sudo apt-get update
sudo apt-get install -y containerd.io

# Generate default configuration
sudo mkdir -p /etc/containerd
containerd config default | sudo tee /etc/containerd/config.toml

# Enable SystemdCgroup (required for kubelet)
sudo sed -i 's/SystemdCgroup = false/SystemdCgroup = true/g' /etc/containerd/config.toml

# Restart and enable containerd
sudo systemctl restart containerd
sudo systemctl enable containerd`}</code></pre>
        <CopyButton text={`# Install dependencies
sudo apt-get update
sudo apt-get install -y ca-certificates curl gnupg

# Add Docker's official GPG key
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# Add Docker repository
echo \\
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \\
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \\
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install containerd
sudo apt-get update
sudo apt-get install -y containerd.io

# Generate default configuration
sudo mkdir -p /etc/containerd
containerd config default | sudo tee /etc/containerd/config.toml

# Enable SystemdCgroup (required for kubelet)
sudo sed -i 's/SystemdCgroup = false/SystemdCgroup = true/g' /etc/containerd/config.toml

# Restart and enable containerd
sudo systemctl restart containerd
sudo systemctl enable containerd`} />
      </div>

      <p className="mb-4"><strong>Verify:</strong></p>
      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-8"><code>sudo systemctl status containerd</code></pre>
        <CopyButton text="sudo systemctl status containerd" />
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 5: Install CNI Plugins</h2>

      <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4">
        <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">
          ⚠️ This step is CRITICAL and often missed! Without CNI plugins, pods will remain stuck in ContainerCreating status.
        </p>
      </div>

      <p className="mb-4">
        CNI (Container Network Interface) plugins provide the networking capabilities that allow pods to communicate with each other and the outside world.
      </p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-4"><code>{`# Create CNI bin directory
sudo mkdir -p /opt/cni/bin

# Download CNI plugins (check https://github.com/containernetworking/plugins/releases for latest)
CNI_VERSION="v1.5.1"
wget https://github.com/containernetworking/plugins/releases/download/\${CNI_VERSION}/cni-plugins-linux-amd64-\${CNI_VERSION}.tgz -O /tmp/cni-plugins.tgz

# Extract plugins
sudo tar -xzf /tmp/cni-plugins.tgz -C /opt/cni/bin/

# Cleanup
rm /tmp/cni-plugins.tgz`}</code></pre>
        <CopyButton text={`# Create CNI bin directory
sudo mkdir -p /opt/cni/bin

# Download CNI plugins (check https://github.com/containernetworking/plugins/releases for latest)
CNI_VERSION="v1.5.1"
wget https://github.com/containernetworking/plugins/releases/download/\${CNI_VERSION}/cni-plugins-linux-amd64-\${CNI_VERSION}.tgz -O /tmp/cni-plugins.tgz

# Extract plugins
sudo tar -xzf /tmp/cni-plugins.tgz -C /opt/cni/bin/

# Cleanup
rm /tmp/cni-plugins.tgz`} />
      </div>

      <p className="mb-4"><strong>Verify:</strong></p>
      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-8"><code>{`ls /opt/cni/bin/
# Should show: bridge, flannel, host-local, loopback, portmap, etc.`}</code></pre>
        <CopyButton text="ls /opt/cni/bin/" />
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 6: Install kubeadm, kubelet, kubectl</h2>

      <p className="mb-4">
        Now we'll install the core Kubernetes components that will bootstrap and manage our cluster.
      </p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-4"><code>{`# Install dependencies
sudo apt-get update
sudo apt-get install -y apt-transport-https ca-certificates curl gpg

# Add Kubernetes GPG key
curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.31/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg

# Add Kubernetes repository
echo 'deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.31/deb/ /' | sudo tee /etc/apt/sources.list.d/kubernetes.list

# Install packages
sudo apt-get update
sudo apt-get install -y kubelet kubeadm kubectl

# Prevent automatic updates (version consistency)
sudo apt-mark hold kubelet kubeadm kubectl

# Enable kubelet
sudo systemctl enable kubelet`}</code></pre>
        <CopyButton text={`# Install dependencies
sudo apt-get update
sudo apt-get install -y apt-transport-https ca-certificates curl gpg

# Add Kubernetes GPG key
curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.31/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg

# Add Kubernetes repository
echo 'deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.31/deb/ /' | sudo tee /etc/apt/sources.list.d/kubernetes.list

# Install packages
sudo apt-get update
sudo apt-get install -y kubelet kubeadm kubectl

# Prevent automatic updates (version consistency)
sudo apt-mark hold kubelet kubeadm kubectl

# Enable kubelet
sudo systemctl enable kubelet`} />
      </div>

      <p className="mb-4"><strong>Verify:</strong></p>
      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-8"><code>{`kubeadm version
kubelet --version
kubectl version --client`}</code></pre>
        <CopyButton text={`kubeadm version
kubelet --version
kubectl version --client`} />
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 7: Initialize the Cluster</h2>

      <p className="mb-4">
        This is where the magic happens! The <code>kubeadm init</code> command bootstraps the control plane components and creates the cluster.
      </p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-4"><code>sudo kubeadm init --pod-network-cidr=10.244.0.0/16</code></pre>
        <CopyButton text="sudo kubeadm init --pod-network-cidr=10.244.0.0/16" />
      </div>

      <div className="bg-muted/50 rounded-lg p-4 mb-4 border">
        <p className="text-sm">
          <strong>Parameters:</strong> <code>--pod-network-cidr=10.244.0.0/16</code> is required for Flannel CNI to assign IP addresses to pods.
        </p>
      </div>

      <p className="mb-4"><strong>After successful initialization, configure kubectl:</strong></p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-4"><code>{`mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config`}</code></pre>
        <CopyButton text={`mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config`} />
      </div>

      <p className="mb-4"><strong>Verify:</strong></p>
      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-8"><code>kubectl cluster-info</code></pre>
        <CopyButton text="kubectl cluster-info" />
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 8: Remove Control-Plane Taint</h2>

      <p className="mb-4">
        By default, Kubernetes won't schedule workloads on control-plane nodes. For a single-node cluster, we need to remove this restriction so pods can run on our only node.
      </p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-8"><code>kubectl taint nodes --all node-role.kubernetes.io/control-plane-</code></pre>
        <CopyButton text="kubectl taint nodes --all node-role.kubernetes.io/control-plane-" />
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 9: Install Pod Network (Flannel)</h2>

      <p className="mb-4">
        Flannel provides the overlay network that enables pod-to-pod communication across the cluster. Without this, pods won't be able to communicate with each other.
      </p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-8"><code>kubectl apply -f https://github.com/flannel-io/flannel/releases/latest/download/kube-flannel.yml</code></pre>
        <CopyButton text="kubectl apply -f https://github.com/flannel-io/flannel/releases/latest/download/kube-flannel.yml" />
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Step 10: Verify Installation</h2>

      <p className="mb-4">
        Let's verify that everything is working correctly:
      </p>

      <div className="space-y-6 mb-8">
        <div>
          <p className="mb-2"><strong>Check node status (should be Ready):</strong></p>
          <div className="relative">
            <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto"><code>kubectl get nodes</code></pre>
            <CopyButton text="kubectl get nodes" />
          </div>
        </div>

        <div>
          <p className="mb-2"><strong>Check all system pods (all should be Running):</strong></p>
          <div className="relative">
            <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto"><code>kubectl get pods -A</code></pre>
            <CopyButton text="kubectl get pods -A" />
          </div>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-8">
        <h4 className="font-semibold mb-2">Expected output:</h4>
        <pre className="text-sm overflow-x-auto"><code>{`NAME                 STATUS   ROLES           AGE   VERSION
your-hostname        Ready    control-plane   5m    v1.31.x`}</code></pre>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Quick Test</h2>

      <p className="mb-4">
        Deploy a test nginx pod to verify everything is working:
      </p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-8"><code>{`# Create pod
kubectl run nginx-test --image=nginx

# Check pod status
kubectl get pods

# Expose as service
kubectl expose pod nginx-test --port=80 --type=NodePort

# Get service details
kubectl get svc nginx-test

# Test connectivity (replace PORT with NodePort from above)
curl http://localhost:<NodePort>

# Cleanup
kubectl delete pod nginx-test
kubectl delete svc nginx-test`}</code></pre>
        <CopyButton text={`# Create pod
kubectl run nginx-test --image=nginx

# Check pod status
kubectl get pods

# Expose as service
kubectl expose pod nginx-test --port=80 --type=NodePort

# Get service details
kubectl get svc nginx-test

# Test connectivity (replace PORT with NodePort from above)
curl http://localhost:<NodePort>

# Cleanup
kubectl delete pod nginx-test
kubectl delete svc nginx-test`} />
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Troubleshooting</h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-muted">
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold">Issue</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold">Diagnosis</th>
              <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold">Solution</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3">Pods stuck in ContainerCreating</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3"><code>kubectl describe pod &lt;pod&gt;</code></td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">Install CNI plugins (Step 5)</td>
            </tr>
            <tr className="bg-muted/50">
              <td className="border border-gray-300 dark:border-gray-600 p-3">Node NotReady</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3"><code>kubectl describe node</code></td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">Check kubelet: <code>journalctl -xeu kubelet</code></td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-3">API server unreachable</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3"><code>systemctl status kubelet</code></td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">Check containerd and restart kubelet</td>
            </tr>
            <tr className="bg-muted/50">
              <td className="border border-gray-300 dark:border-gray-600 p-3">Image pull errors</td>
              <td className="border border-gray-300 dark:border-gray-600 p-3"><code>kubectl describe pod &lt;pod&gt;</code></td>
              <td className="border border-gray-300 dark:border-gray-600 p-3">Check internet connectivity</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4">Useful Commands</h3>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-8"><code>{`# View kubelet logs
journalctl -xeu kubelet

# View containerd logs
journalctl -xeu containerd

# Check pod events
kubectl describe pod <pod-name> -n <namespace>

# Check node conditions
kubectl describe node <node-name>

# Reset cluster (start over)
sudo kubeadm reset -f
sudo rm -rf /etc/cni/net.d/*
sudo rm -rf $HOME/.kube`}</code></pre>
        <CopyButton text={`# View kubelet logs
journalctl -xeu kubelet

# View containerd logs
journalctl -xeu containerd

# Check pod events
kubectl describe pod <pod-name> -n <namespace>

# Check node conditions
kubectl describe node <node-name>

# Reset cluster (start over)
sudo kubeadm reset -f
sudo rm -rf /etc/cni/net.d/*
sudo rm -rf $HOME/.kube`} />
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Summary Checklist</h2>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span>Swap disabled</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span>Kernel modules loaded</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span>Sysctl parameters configured</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span>containerd installed and configured</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span>CNI plugins installed</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span>kubeadm, kubelet, kubectl installed</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span>Cluster initialized with kubeadm</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span>kubectl configured</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span>Control-plane taint removed</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span>Flannel CNI deployed</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span>All pods running</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span>Test deployment successful</span>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Quick Install Script</h2>

      <p className="mb-4">
        For subsequent installations, here's a consolidated script that automates the entire process:
      </p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-8"><code>{`#!/bin/bash
set -e

echo "=== Disabling Swap ==="
sudo swapoff -a
sudo sed -i '/ swap / s/^\\(.*\\)$/#\\1/g' /etc/fstab

echo "=== Loading Kernel Modules ==="
cat <<EOF | sudo tee /etc/modules-load.d/k8s.conf
overlay
br_netfilter
EOF
sudo modprobe overlay
sudo modprobe br_netfilter

echo "=== Configuring Sysctl ==="
cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-iptables  = 1
net.bridge.bridge-nf-call-ip6tables = 1
net.ipv4.ip_forward                 = 1
EOF
sudo sysctl --system

echo "=== Installing containerd ==="
sudo apt-get update
sudo apt-get install -y ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install -y containerd.io
sudo mkdir -p /etc/containerd
containerd config default | sudo tee /etc/containerd/config.toml
sudo sed -i 's/SystemdCgroup = false/SystemdCgroup = true/g' /etc/containerd/config.toml
sudo systemctl restart containerd
sudo systemctl enable containerd

echo "=== Installing CNI Plugins ==="
sudo mkdir -p /opt/cni/bin
CNI_VERSION="v1.5.1"
wget https://github.com/containernetworking/plugins/releases/download/\${CNI_VERSION}/cni-plugins-linux-amd64-\${CNI_VERSION}.tgz -O /tmp/cni-plugins.tgz
sudo tar -xzf /tmp/cni-plugins.tgz -C /opt/cni/bin/
rm /tmp/cni-plugins.tgz

echo "=== Installing Kubernetes Components ==="
sudo apt-get install -y apt-transport-https ca-certificates curl gpg
curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.31/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg
echo 'deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.31/deb/ /' | sudo tee /etc/apt/sources.list.d/kubernetes.list
sudo apt-get update
sudo apt-get install -y kubelet kubeadm kubectl
sudo apt-mark hold kubelet kubeadm kubectl
sudo systemctl enable kubelet

echo "=== Initializing Cluster ==="
sudo kubeadm init --pod-network-cidr=10.244.0.0/16

echo "=== Configuring kubectl ==="
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config

echo "=== Removing Control-Plane Taint ==="
kubectl taint nodes --all node-role.kubernetes.io/control-plane-

echo "=== Installing Flannel ==="
kubectl apply -f https://github.com/flannel-io/flannel/releases/latest/download/kube-flannel.yml

echo "=== Done! Checking status ==="
kubectl get nodes
kubectl get pods -A`}</code></pre>
        <CopyButton text={`#!/bin/bash
set -e

echo "=== Disabling Swap ==="
sudo swapoff -a
sudo sed -i '/ swap / s/^\\(.*\\)$/#\\1/g' /etc/fstab

echo "=== Loading Kernel Modules ==="
cat <<EOF | sudo tee /etc/modules-load.d/k8s.conf
overlay
br_netfilter
EOF
sudo modprobe overlay
sudo modprobe br_netfilter

echo "=== Configuring Sysctl ==="
cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-iptables  = 1
net.bridge.bridge-nf-call-ip6tables = 1
net.ipv4.ip_forward                 = 1
EOF
sudo sysctl --system

echo "=== Installing containerd ==="
sudo apt-get update
sudo apt-get install -y ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install -y containerd.io
sudo mkdir -p /etc/containerd
containerd config default | sudo tee /etc/containerd/config.toml
sudo sed -i 's/SystemdCgroup = false/SystemdCgroup = true/g' /etc/containerd/config.toml
sudo systemctl restart containerd
sudo systemctl enable containerd

echo "=== Installing CNI Plugins ==="
sudo mkdir -p /opt/cni/bin
CNI_VERSION="v1.5.1"
wget https://github.com/containernetworking/plugins/releases/download/\${CNI_VERSION}/cni-plugins-linux-amd64-\${CNI_VERSION}.tgz -O /tmp/cni-plugins.tgz
sudo tar -xzf /tmp/cni-plugins.tgz -C /opt/cni/bin/
rm /tmp/cni-plugins.tgz

echo "=== Installing Kubernetes Components ==="
sudo apt-get install -y apt-transport-https ca-certificates curl gpg
curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.31/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg
echo 'deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.31/deb/ /' | sudo tee /etc/apt/sources.list.d/kubernetes.list
sudo apt-get update
sudo apt-get install -y kubelet kubeadm kubectl
sudo apt-mark hold kubelet kubeadm kubectl
sudo systemctl enable kubelet

echo "=== Initializing Cluster ==="
sudo kubeadm init --pod-network-cidr=10.244.0.0/16

echo "=== Configuring kubectl ==="
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config

echo "=== Removing Control-Plane Taint ==="
kubectl taint nodes --all node-role.kubernetes.io/control-plane-

echo "=== Installing Flannel ==="
kubectl apply -f https://github.com/flannel-io/flannel/releases/latest/download/kube-flannel.yml

echo "=== Done! Checking status ==="
kubectl get nodes
kubectl get pods -A`} />
      </div>

      <p className="mb-8">
        Save as <code>install-k8s.sh</code> and run with <code>bash install-k8s.sh</code>
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-6">Conclusion</h2>

      <div className="bg-muted/50 rounded-lg p-8 mb-8 border">
        <p className="text-lg mb-4">
          You now have a fully functional single-node Kubernetes cluster! This setup is perfect for:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>Learning Kubernetes concepts</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>Local development and testing</span>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>CI/CD pipeline testing</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>Application prototyping</span>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-lg">
        This guide walked you through each step with detailed explanations of what each component does and why it's necessary. With this foundation, you're ready to start deploying applications and exploring more advanced Kubernetes features.
      </p>

      <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <p className="text-sm">
          <strong>Document created:</strong> December 2025<br />
          <strong>Kubernetes version:</strong> v1.31<br />
          <strong>Tested on:</strong> Ubuntu 24.04 LTS
        </p>
      </div>
    </div>
  )
}
