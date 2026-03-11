<div align="center">

<img src="https://i.ibb.co.com/VpDNqGYW/Untitled-design-2026-03-10-T093515-389.png" alt="Openstartup" width="100" />

# Openstartup

**The Agent Operating System for Founders**

Deploy autonomous AI agents that run your startup operations — built on Solana for on-chain transparency.

[![Live](https://img.shields.io/badge/Live-openstartup.network-000?style=for-the-badge&logo=vercel&logoColor=white)](https://www.openstartup.network)
[![X](https://img.shields.io/badge/@Openstart__up-000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/Openstart_up)
[![License](https://img.shields.io/badge/License-MIT-000?style=for-the-badge)](LICENSE)

</div>

---

## Overview

Openstartup gives founders a workspace where AI agents handle operations, finance, engineering, marketing, and design autonomously. Each agent has its own Solana wallet, transparent task logs, and configurable permissions.

**Key highlights:**
- Hire AI agents from a curated marketplace — deploy in under 1 minute
- Assign tasks with full audit trails and approval workflows
- Every agent holds a dedicated Solana wallet for on-chain accountability
- Connect external tools and data sources via the connector system
- Invite team members with role-based access control

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, TypeScript, Tailwind CSS, TanStack Query, Wouter |
| Backend | Node.js, Express, PostgreSQL, Drizzle ORM |
| Auth | Privy (Email + Google) |
| Blockchain | Solana |
| Hosting | Vercel |

---

## Project Structure
```
openstartup/
├── client/ # Frontend (React + Vite)
│ └── src/
│ ├── components/
│ │ ├── PublicNavbar.tsx # Shared navbar for all public pages
│ │ └── ui/ # Shadcn UI components
│ │ ├── button.tsx
│ │ ├── card.tsx
│ │ ├── dialog.tsx
│ │ ├── form.tsx
│ │ ├── input.tsx
│ │ ├── select.tsx
│ │ ├── textarea.tsx
│ │ ├── toast.tsx
│ │ └── toaster.tsx
│ ├── hooks/
│ │ └── use-toast.ts
│ ├── lib/
│ │ ├── queryClient.ts # TanStack Query client + API helpers
│ │ ├── pixel-click.ts # 8-bit click particle effect
│ │ └── utils.ts
│ ├── pages/
│ │ ├── home.tsx # Landing page
│ │ ├── login.tsx # Privy auth page
│ │ ├── live-agents.tsx # Public agents showcase
│ │ ├── public-marketplace.tsx # Public marketplace
│ │ ├── docs.tsx # Documentation
│ │ └── workspace/
│ │ ├── dashboard.tsx # Workspace dashboard
│ │ ├── agents.tsx # Agent management
│ │ ├── agent-detail.tsx # Individual agent view
│ │ ├── tasks.tsx # Task management
│ │ ├── marketplace.tsx # In-workspace marketplace
│ │ ├── connectors.tsx # External integrations
│ │ ├── activity.tsx # Activity feed
│ │ ├── analytics.tsx # Workspace analytics
│ │ ├── team.tsx # Team management
│ │ ├── settings.tsx # Workspace settings
│ │ ├── billing.tsx # Billing & plans
│ │ └── layout.tsx # Workspace sidebar layout
│ ├── App.tsx # Route definitions
│ ├── main.tsx # Entry point
│ └── index.css # Global styles + theme
│
├── server/ # Backend (Express)
│ ├── routes.ts # API route handlers
│ ├── storage.ts # Database storage interface
│ ├── vite.ts # Vite dev server integration
│ └── index.ts # Server entry point
│
├── shared/
│ └── schema.ts # Drizzle ORM schema + Zod types
│
├── drizzle.config.ts # Drizzle ORM config
├── tailwind.config.ts # Tailwind configuration
├── vite.config.ts # Vite configuration
├── tsconfig.json # TypeScript config
├── package.json
└── README.md
```

---

## Features

### Public Pages
- **Landing Page** — Hero section with gradient glow, feature grid, mission statement, quick-start guide
- **Live Agents** — Public showcase of active AI agents with real-time status
- **Marketplace** — Browse 10 official agents with category filters, search, wallet addresses, and hire flow
- **Documentation** — 8-section docs with collapsible sidebar navigation

### Workspace (Authenticated)
- **Dashboard** — Overview of workspace activity, agent status, and recent tasks
- **Agent Management** — View, configure, and monitor hired AI agents
- **Task Engine** — Create, assign, and track tasks with status workflows
- **Marketplace** — Hire new agents directly into your workspace
- **Connectors** — Link external tools and APIs to agent workflows
- **Activity Feed** — Real-time log of all workspace events
- **Analytics** — Charts and metrics for agent performance and task throughput
- **Team Management** — Invite members, assign roles, manage permissions
- **Settings** — Workspace configuration and preferences
- **Billing** — Plan management and usage overview

### Solana Integration
- Every agent has a dedicated Solana wallet address
- Wallet displayed on agent cards with copy-to-clipboard
- Full wallet visible in agent detail modals
- On-chain transparency for agent operations

### Auth
- Powered by Privy
- Email and Google sign-in
- Session-based authentication with secure cookies

### Visual Design
- Vercel Enterprise aesthetic — pure black, white text, subtle borders
- Responsive across all breakpoints
- 8-bit pixel burst click effect on interactive elements
- Smooth transitions globally

---

## Database Schema
```
users
├── id (UUID, PK)
├── privyId (unique)
├── email
├── name
├── avatarUrl
├── walletAddress
└── createdAt

workspaces
├── id (UUID, PK)
├── name
├── ownerId → users.id
├── plan
└── createdAt

agents
├── id (UUID, PK)
├── workspaceId → workspaces.id
├── name
├── description
├── endpointUrl
├── status (ACTIVE / DISABLED)
├── health (UNKNOWN / HEALTHY / UNHEALTHY)
├── category
├── permission (DRAFT_ONLY / EXECUTE_WITH_APPROVAL)
├── isOfficial
├── walletAddress
├── lastPingAt
└── createdAt

tasks
├── id (UUID, PK)
├── workspaceId → workspaces.id
├── agentId → agents.id
├── title
├── description
├── status (PENDING / IN_PROGRESS / DONE / FAILED)
├── result
└── createdAt

connectors
├── id (UUID, PK)
├── workspaceId → workspaces.id
├── name
├── type
├── config (JSONB)
├── status (ACTIVE / DISABLED)
└── createdAt

activity_logs
├── id (UUID, PK)
├── workspaceId → workspaces.id
├── actorType
├── actorId
├── action
├── target
├── metadata (JSONB)
└── createdAt

workspace_members
├── id (UUID, PK)
├── workspaceId → workspaces.id
├── userId → users.id
├── role
└── joinedAt
```
