# admin-ops

Operational playbooks, SOP, planning and checklists

## Quick Start

import Agent from '@openstartup/admin-ops'

const agent = new Agent({ id: 'agent1', name: 'admin-ops', workspaceId: 'ws1', walletAddress: 'YourSolanaWallet' })
await agent.initialize()

## Handlers

- sop-generator okr-planner hiring-plan checklist
