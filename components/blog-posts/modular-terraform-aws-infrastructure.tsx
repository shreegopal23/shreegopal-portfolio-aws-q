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

export function ModularTerraformAWSInfrastructureContent() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:scroll-mt-20">
      <div className="mb-8 p-6 bg-muted/50 rounded-lg border">
        <p className="text-lg leading-relaxed mb-0">
          Managing AWS infrastructure should not mean choosing between simplicity and scalability. 
          This modular Terraform stack lets you deploy anything from a static website to a full 
          production environment with ECS, RDS, CloudFront, and WAF--all from the same codebase.
        </p>
      </div>
      
      <p className="text-lg">
        In this comprehensive guide, we will explore how a modular Terraform architecture can transform your infrastructure management, enabling you to scale from simple static sites to complex production environments without rewriting code.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-6">The Problem with Traditional Infrastructure Code</h2>
      <p className="mb-6">
        Most infrastructure-as-code projects fall into two camps:
      </p>
      <ul className="space-y-2 mb-8">
        <li><strong>Monolithic stacks</strong> that deploy everything or nothing</li>
        <li><strong>Scattered scripts</strong> that require manual coordination</li>
      </ul>
      <p className="mb-6">
        What if you need a simple static site today but a full production stack tomorrow? 
        Rewriting infrastructure code for each project wastes time and introduces errors.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-6">The Solution: Modular Architecture</h2>
      <p className="mb-6">
        This Terraform stack uses a modular design where each component is independent but works together seamlessly.
      </p>
    </div>
  )
}
