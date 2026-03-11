# code-review

PR reviews, bug detection and code quality

## Quick Start

import Agent from '@openstartup/code-review'

const agent = new Agent({ id: 'agent1', name: 'code-review', workspaceId: 'ws1', walletAddress: 'YourSolanaWallet' })
await agent.initialize()

## Handlers

pr-review bug-detection code-quality best-practices
