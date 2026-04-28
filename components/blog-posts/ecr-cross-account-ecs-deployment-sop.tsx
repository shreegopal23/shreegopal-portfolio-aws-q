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

export function EcrCrossAccountEcsDeploymentSopContent() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:scroll-mt-20">
      <div className="mb-8 p-6 bg-muted/50 rounded-lg border">
        <p className="text-lg leading-relaxed mb-0">
          Sharing Docker images across AWS accounts is a common requirement once your environments are split for security or billing. The setup is straightforward in concept — push to ECR in one account, pull from ECS in another — but the configuration touches three different policy surfaces, and a small mismatch in any of them surfaces as the same generic <code className="text-sm">CannotPullContainerError: 403 Forbidden</code>.
        </p>
      </div>

      <p className="text-lg">
        This guide walks through the full setup in the order it needs to be done. We'll use <strong>Account A</strong> for the ECR owner (where the image lives) and <strong>Account B</strong> for the ECS consumer (where the service runs). The single most important thing to internalise upfront: the repository policy on the ECR repo and the IAM policy on the task execution role are two different things, and the pull only succeeds when both grant the action.
      </p>

      <div className="my-8 text-center">
        <svg viewBox="0 0 900 480" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-5xl h-auto mx-auto">
          <defs>
            <linearGradient id="ecrGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#FF9900', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#EC7211', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="ecsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#1D4ED8', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="iamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#10B981', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#059669', stopOpacity: 1 }} />
            </linearGradient>
            <marker id="arrowAccA" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#EC7211" />
            </marker>
            <marker id="arrowAccB" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#1D4ED8" />
            </marker>
          </defs>

          <rect width="900" height="480" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" rx="10" />
          <text x="450" y="35" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" fill="#1e293b">
            Cross-Account ECR → ECS Image Pull
          </text>

          {/* Account A box */}
          <rect x="40" y="70" width="380" height="370" fill="none" stroke="#EC7211" strokeWidth="2" strokeDasharray="6,4" rx="12" />
          <text x="60" y="95" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#EC7211">
            AWS Account A — ECR Owner
          </text>

          <rect x="80" y="120" width="300" height="80" fill="url(#ecrGradient)" stroke="#EC7211" strokeWidth="2" rx="8" />
          <text x="230" y="148" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white">ECR Repository</text>
          <text x="230" y="170" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fill="white">appsonair/your-repo-name</text>
          <text x="230" y="188" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fill="white">Image tag: latest</text>

          <rect x="80" y="220" width="300" height="100" fill="white" stroke="#EC7211" strokeWidth="1.5" rx="8" />
          <text x="230" y="245" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#1e293b">Repository Policy (Resource-Based)</text>
          <text x="230" y="268" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#475569">Principal: Account B root</text>
          <text x="230" y="285" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#475569">ecr:GetDownloadUrlForLayer</text>
          <text x="230" y="302" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#475569">ecr:BatchGetImage</text>

          <rect x="80" y="340" width="300" height="80" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" rx="8" />
          <text x="230" y="365" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#92400e">DevOps pushes image</text>
          <text x="230" y="385" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#92400e">aws ecr get-login-password</text>
          <text x="230" y="402" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#92400e">docker build / tag / push</text>

          {/* Account B box */}
          <rect x="480" y="70" width="380" height="370" fill="none" stroke="#1D4ED8" strokeWidth="2" strokeDasharray="6,4" rx="12" />
          <text x="500" y="95" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#1D4ED8">
            AWS Account B — ECS Consumer
          </text>

          <rect x="520" y="120" width="300" height="80" fill="url(#iamGradient)" stroke="#059669" strokeWidth="2" rx="8" />
          <text x="670" y="148" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white">Task Execution Role</text>
          <text x="670" y="170" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fill="white">ecr:GetAuthorizationToken</text>
          <text x="670" y="188" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fill="white">ecr:BatchGetImage / Layer</text>

          <rect x="520" y="220" width="300" height="100" fill="url(#ecsGradient)" stroke="#1D4ED8" strokeWidth="2" rx="8" />
          <text x="670" y="245" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white">ECS Task Definition</text>
          <text x="670" y="268" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">image: ACCT-A.dkr.ecr...</text>
          <text x="670" y="285" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">logDriver: awslogs</text>
          <text x="670" y="302" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">no repositoryCredentials</text>

          <rect x="520" y="340" width="300" height="80" fill="white" stroke="#1D4ED8" strokeWidth="1.5" rx="8" />
          <text x="670" y="365" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#1e293b">ECS Service</text>
          <text x="670" y="385" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#475569">Cluster + running task</text>
          <text x="670" y="402" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#475569">CloudWatch Logs: /ecs/&lt;svc&gt;</text>

          {/* Pull arrow */}
          <line x1="380" y1="160" x2="520" y2="260" stroke="#1D4ED8" strokeWidth="2.5" markerEnd="url(#arrowAccB)" />
          <text x="450" y="200" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="bold" fill="#1D4ED8">Pull image (HTTPS)</text>
          <text x="450" y="216" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#1D4ED8">via ECR endpoint</text>
        </svg>
        <p className="text-sm text-muted-foreground mt-2">High-level flow: Account A owns the repo and grants Account B permission. Account B's execution role does the actual pull at task start.</p>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Why two policies, and not one?</h2>

      <p className="mb-4">
        AWS evaluates two layers when a task in Account B tries to pull from Account A:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>
          <strong>The ECR repository policy</strong> in Account A — this is a <em>resource-based</em> policy, attached directly to the repo. It says "Account B is allowed to call these ECR APIs against me."
        </li>
        <li>
          <strong>The task execution role policy</strong> in Account B — this is an <em>identity-based</em> policy on the IAM role ECS assumes. It says "this role is allowed to make ECR calls in general."
        </li>
      </ul>

      <p className="mb-6">
        Both have to grant the action for the pull to succeed. Miss either one and AWS returns the same 403, with no indication of which side is wrong. Keep that mental model and the rest of the setup is mechanical.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-6">Section 1 — Account A: build and push the image</h2>

      <p className="mb-4">
        Run everything in this section against Account A. Make sure your CLI is configured with credentials for Account A before you start.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">1. Authenticate Docker to ECR</h3>

      <p className="mb-4">
        ECR auth tokens are valid for 12 hours. If a push fails with <code>denied: requested access to the resource is denied</code>, the token has likely expired. Re-run the command below to refresh it:
      </p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-6"><code>{`aws ecr get-login-password --region ap-south-1 | \\
  docker login --username AWS --password-stdin \\
  <ACCOUNT-A-ID>.dkr.ecr.ap-south-1.amazonaws.com`}</code></pre>
        <CopyButton text={`aws ecr get-login-password --region ap-south-1 | \\
  docker login --username AWS --password-stdin \\
  <ACCOUNT-A-ID>.dkr.ecr.ap-south-1.amazonaws.com`} />
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4">2. Create the repository (first time only)</h3>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-4"><code>{`aws ecr create-repository \\
  --repository-name appsonair/<your-repo-name> \\
  --region ap-south-1`}</code></pre>
        <CopyButton text={`aws ecr create-repository \\
  --repository-name appsonair/<your-repo-name> \\
  --region ap-south-1`} />
      </div>

      <p className="mb-6 text-sm text-muted-foreground">
        If the repo already exists, skip this and verify with <code>aws ecr describe-repositories --region ap-south-1</code>.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">3. Build, tag and push</h3>

      <p className="mb-4">
        Three commands. The tag step is the one most often skipped — Docker's local <code>your-repo-name:latest</code> doesn't carry any reference to ECR until you tag it explicitly.
      </p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-6"><code>{`docker build -t <your-repo-name> .

docker tag <your-repo-name>:latest \\
  <ACCOUNT-A-ID>.dkr.ecr.ap-south-1.amazonaws.com/appsonair/<your-repo-name>:latest

docker push \\
  <ACCOUNT-A-ID>.dkr.ecr.ap-south-1.amazonaws.com/appsonair/<your-repo-name>:latest`}</code></pre>
        <CopyButton text={`docker build -t <your-repo-name> .

docker tag <your-repo-name>:latest \\
  <ACCOUNT-A-ID>.dkr.ecr.ap-south-1.amazonaws.com/appsonair/<your-repo-name>:latest

docker push \\
  <ACCOUNT-A-ID>.dkr.ecr.ap-south-1.amazonaws.com/appsonair/<your-repo-name>:latest`} />
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4">4. Verify the image landed</h3>

      <p className="mb-4">
        Before moving on, confirm the image and tag are in the registry:
      </p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-6"><code>{`aws ecr list-images \\
  --repository-name appsonair/<your-repo-name> \\
  --region ap-south-1`}</code></pre>
        <CopyButton text={`aws ecr list-images \\
  --repository-name appsonair/<your-repo-name> \\
  --region ap-south-1`} />
      </div>

      <p className="mb-6">
        If the <code>latest</code> tag isn't in the output, re-push before continuing.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-6">Section 2 — Account A: set the ECR repository policy</h2>

      <p className="mb-4">
        Each ECR repository carries its own permissions policy. There is no global "trust this account" toggle, so this step is required once per repository. If you manage many repos, automate it with Terraform or a small script.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">5. Open repository permissions</h3>

      <p className="mb-6">
        In the AWS Console, go to <strong>ECR → Repositories → &lt;your-repo-name&gt; → Permissions tab → Edit policy JSON</strong>. The JSON editor lives inside the repository view — that's the correct place to edit a resource-based policy.
      </p>

      <div className="my-6 p-5 border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-950/30 rounded-r-lg">
        <p className="font-semibold text-amber-900 dark:text-amber-200 mb-2">⚠ This is a Resource-Based Policy</p>
        <p className="text-sm text-amber-900 dark:text-amber-200 mb-0">
          The policy is attached directly to the ECR repository. Do not paste it into <strong>IAM → Policies</strong>. IAM identity policies do not accept a <code>Principal</code> field and the console will reject it.
        </p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4">6. Paste the cross-account policy</h3>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-6"><code>{`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "CrossAccountECSPull",
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::<ACCOUNT-B-ID>:root"
      },
      "Action": [
        "ecr:GetDownloadUrlForLayer",
        "ecr:BatchGetImage",
        "ecr:BatchCheckLayerAvailability"
      ]
    }
  ]
}`}</code></pre>
        <CopyButton text={`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "CrossAccountECSPull",
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::<ACCOUNT-B-ID>:root"
      },
      "Action": [
        "ecr:GetDownloadUrlForLayer",
        "ecr:BatchGetImage",
        "ecr:BatchCheckLayerAvailability"
      ]
    }
  ]
}`} />
      </div>

      <p className="mb-4">
        Two notes on this policy:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>
          Replace <code>&lt;ACCOUNT-B-ID&gt;</code> with the real 12-digit account ID. Run <code>aws sts get-caller-identity</code> in Account B and copy the <code>Account</code> value exactly. ECR validates the syntax of the ARN but not its content, so a typo here saves successfully and then denies every pull at runtime.
        </li>
        <li>
          Do not add a <code>Resource</code> field. ECR repository policies are implicitly scoped to the repository they're attached to — <code>"Resource": "*"</code> will be rejected and the repo ARN is redundant.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-12 mb-6">Section 3 — Account B: configure the ECS task execution role</h2>

      <p className="mb-4">
        The role to update is the one ECS assumes to pull images and write logs — typically named <code>ecsTaskExecutionRole</code>, or whatever convention your team uses. This is the execution role, not the application's task role; the two are different and easy to confuse.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">7. Locate the role</h3>

      <p className="mb-6">
        In Account B's IAM console, find the role referenced by <code>executionRoleArn</code> in your task definition. If you're not sure which one is attached, open the task definition in the ECS console — the execution role is listed at the top.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">8. Verify (or attach) the ECR pull policy</h3>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-6"><code>{`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ecr:GetAuthorizationToken",
        "ecr:BatchCheckLayerAvailability",
        "ecr:GetDownloadUrlForLayer",
        "ecr:BatchGetImage"
      ],
      "Resource": ["*"]
    }
  ]
}`}</code></pre>
        <CopyButton text={`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ecr:GetAuthorizationToken",
        "ecr:BatchCheckLayerAvailability",
        "ecr:GetDownloadUrlForLayer",
        "ecr:BatchGetImage"
      ],
      "Resource": ["*"]
    }
  ]
}`} />
      </div>

      <div className="my-6 p-5 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/30 rounded-r-lg">
        <p className="font-semibold text-blue-900 dark:text-blue-200 mb-2">Why <code>Resource: "*"</code> here?</p>
        <p className="text-sm text-blue-900 dark:text-blue-200 mb-0">
          <code>ecr:GetAuthorizationToken</code> is account-wide and cannot be scoped to a single repository. The cross-account boundary is enforced by the repository policy in Account A from step 6. The IAM role grants the right to ask; the ECR repo policy grants the right to receive.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Section 4 — Account B: write the task definition</h2>

      <h3 className="text-xl font-semibold mt-8 mb-4">9. Use the full cross-account image URI</h3>

      <p className="mb-4">
        The image URI in the container definition must be the full Account A ECR path:
      </p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-6"><code>{`<ACCOUNT-A-ID>.dkr.ecr.ap-south-1.amazonaws.com/appsonair/<your-repo-name>:latest`}</code></pre>
        <CopyButton text={`<ACCOUNT-A-ID>.dkr.ecr.ap-south-1.amazonaws.com/appsonair/<your-repo-name>:latest`} />
      </div>

      <p className="mb-6">
        Do not use a Docker Hub-style short name (<code>logicwind/myimage:tag</code>) for an ECR image. ECS does not infer the registry from context — the URI must be fully qualified.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">10. Remove <code>repositoryCredentials</code></h3>

      <p className="mb-4">
        Task definitions migrated from Docker Hub or other private registries usually contain a <code>repositoryCredentials</code> block pointing at Secrets Manager. ECR does not use this — authentication is handled by the execution role. Leaving the block in place causes ECS to attempt a secret lookup and fail before reaching ECR.
      </p>

      <div className="relative">
        <pre className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 p-4 rounded-lg overflow-x-auto mb-6"><code>{`// REMOVE this block when switching to ECR
"repositoryCredentials": {
  "credentialsParameter": "arn:aws:secretsmanager:..."
}`}</code></pre>
        <CopyButton text={`// REMOVE this block when switching to ECR
"repositoryCredentials": {
  "credentialsParameter": "arn:aws:secretsmanager:..."
}`} />
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4">11. Use the awslogs driver</h3>

      <p className="mb-4">
        If your previous setup used <code>awsfirelens</code> with a sidecar log_router container and you don't need FireLens-specific features, switch to <code>awslogs</code> for a simpler configuration:
      </p>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-6"><code>{`"logConfiguration": {
  "logDriver": "awslogs",
  "options": {
    "awslogs-group": "/ecs/<your-service-name>",
    "mode": "non-blocking",
    "awslogs-create-group": "true",
    "max-buffer-size": "25m",
    "awslogs-region": "ap-south-1",
    "awslogs-stream-prefix": "ecs"
  }
}`}</code></pre>
        <CopyButton text={`"logConfiguration": {
  "logDriver": "awslogs",
  "options": {
    "awslogs-group": "/ecs/<your-service-name>",
    "mode": "non-blocking",
    "awslogs-create-group": "true",
    "max-buffer-size": "25m",
    "awslogs-region": "ap-south-1",
    "awslogs-stream-prefix": "ecs"
  }
}`} />
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4">12. Register the task definition</h3>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-6"><code>{`aws ecs register-task-definition \\
  --cli-input-json file://task-definition.json \\
  --region ap-south-1`}</code></pre>
        <CopyButton text={`aws ecs register-task-definition \\
  --cli-input-json file://task-definition.json \\
  --region ap-south-1`} />
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Section 5 — Deploy and verify</h2>

      <h3 className="text-xl font-semibold mt-8 mb-4">13. Force a new deployment</h3>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-6"><code>{`aws ecs update-service \\
  --cluster <cluster-name> \\
  --service <service-name> \\
  --task-definition <task-definition-family> \\
  --force-new-deployment \\
  --region ap-south-1`}</code></pre>
        <CopyButton text={`aws ecs update-service \\
  --cluster <cluster-name> \\
  --service <service-name> \\
  --task-definition <task-definition-family> \\
  --force-new-deployment \\
  --region ap-south-1`} />
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4">14. Confirm tasks are running</h3>

      <div className="relative">
        <pre className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg overflow-x-auto mb-6"><code>{`aws ecs list-tasks \\
  --cluster <cluster-name> \\
  --service-name <service-name> \\
  --region ap-south-1`}</code></pre>
        <CopyButton text={`aws ecs list-tasks \\
  --cluster <cluster-name> \\
  --service-name <service-name> \\
  --region ap-south-1`} />
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4">15. Check CloudWatch</h3>

      <p className="mb-6">
        Open <strong>CloudWatch → Log Groups → /ecs/&lt;your-service-name&gt;</strong>. If the container started cleanly, the application's startup logs will appear here. If the task keeps stopping, check the <strong>Events</strong> tab on the ECS service — that's where the actual pull error message is recorded.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-6">Section 6 — Troubleshooting <code>403 Forbidden / CannotPullContainerError</code></h2>

      <p className="mb-6">
        Almost every cross-account 403 maps to one of the causes below. Work through them in order:
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border p-3 text-left">Cause</th>
              <th className="border border-border p-3 text-left">Fix</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border p-3">Wrong image URI in task definition</td>
              <td className="border border-border p-3">Verify the exact repo name in the ECR console. Cross-check with <code>aws ecr list-images</code>.</td>
            </tr>
            <tr>
              <td className="border border-border p-3">Repository policy missing or applied to the wrong repo</td>
              <td className="border border-border p-3">Each repo needs its own. Re-apply via Permissions tab on the specific repo.</td>
            </tr>
            <tr>
              <td className="border border-border p-3">Wrong Account B ID inside the repo policy ARN</td>
              <td className="border border-border p-3">Run <code>aws sts get-caller-identity</code> in Account B; paste the 12-digit value.</td>
            </tr>
            <tr>
              <td className="border border-border p-3">Execution role missing ECR permissions</td>
              <td className="border border-border p-3">Attach <code>ecr:GetAuthorizationToken</code> + <code>BatchGetImage</code> to the execution role.</td>
            </tr>
            <tr>
              <td className="border border-border p-3">Image tag does not exist</td>
              <td className="border border-border p-3">Confirm the tag was actually pushed: <code>aws ecr list-images --repository-name ...</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Common configuration mistakes</h2>

      <p className="mb-4">
        Watch out for these when reviewing the setup:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-3">
        <li>
          Pasting the ECR repo policy into <strong>IAM → Policies</strong>. The <code>Principal</code> field is rejected there — the policy belongs in <strong>ECR → Permissions</strong>.
        </li>
        <li>
          Using a company name instead of the 12-digit account ID inside the <code>arn:aws:iam::&lt;account&gt;:root</code> string. The policy saves successfully but denies all pulls.
        </li>
        <li>
          Adding <code>"Resource": "*"</code> to the ECR repo policy. The repository is the implicit resource — the field should be omitted.
        </li>
        <li>
          Forgetting to apply the policy to a new repository. The policy is scoped per-repo, not account-wide.
        </li>
        <li>
          Leaving <code>repositoryCredentials</code> in the container definition after switching from Docker Hub to ECR.
        </li>
        <li>
          Deploying with a tag that hasn't been pushed. Always confirm the tag exists with <code>aws ecr list-images</code> first.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-12 mb-6">Quick-reference checklist</h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border p-3 text-left">Step</th>
              <th className="border border-border p-3 text-left">Account</th>
              <th className="border border-border p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border p-3">1. Build &amp; push image</td>
              <td className="border border-border p-3">A</td>
              <td className="border border-border p-3"><code>docker build → tag → push</code></td>
            </tr>
            <tr>
              <td className="border border-border p-3">2. Verify image tag</td>
              <td className="border border-border p-3">A</td>
              <td className="border border-border p-3"><code>aws ecr list-images</code> shows <code>latest</code></td>
            </tr>
            <tr>
              <td className="border border-border p-3">3. Set repo policy</td>
              <td className="border border-border p-3">A</td>
              <td className="border border-border p-3">ECR → Permissions → cross-account JSON</td>
            </tr>
            <tr>
              <td className="border border-border p-3">4. Verify execution role</td>
              <td className="border border-border p-3">B</td>
              <td className="border border-border p-3">IAM has <code>GetAuthorizationToken</code> + pull actions</td>
            </tr>
            <tr>
              <td className="border border-border p-3">5. Update task definition</td>
              <td className="border border-border p-3">B</td>
              <td className="border border-border p-3">Full ECR URI, drop <code>repositoryCredentials</code></td>
            </tr>
            <tr>
              <td className="border border-border p-3">6. Deploy</td>
              <td className="border border-border p-3">B</td>
              <td className="border border-border p-3"><code>update-service --force-new-deployment</code></td>
            </tr>
            <tr>
              <td className="border border-border p-3">7. Check logs</td>
              <td className="border border-border p-3">B</td>
              <td className="border border-border p-3">CloudWatch <code>/ecs/&lt;service&gt;</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-8 p-5 border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-950/30 rounded-r-lg">
        <p className="font-semibold text-amber-900 dark:text-amber-200 mb-2">⚠ Repeat for every new repository</p>
        <p className="text-sm text-amber-900 dark:text-amber-200 mb-0">
          Steps 1, 2, 3 and 5 are per-repository. Each new ECR repo shared across accounts needs its own policy and its own URI in the task definition.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6">Conclusion</h2>

      <p className="mb-6">
        Cross-account ECR with ECS is straightforward once the two-policy model is clear: a resource policy on the repository in Account A, and an identity policy on the execution role in Account B. Both must grant the action, and both are required for every repository shared across accounts.
      </p>

      <p className="mb-6">
        Use the checklist above as a runbook the next time a new service needs cross-account ECR access. Following the steps in order takes a few minutes; debugging a 403 without the order takes considerably longer.
      </p>
    </div>
  )
}
