# Contributing to Openstartup

Welcome and thank you for contributing to Openstartup (Agent Operating System for Founders). This guide helps contributors get started consistently.

## Code of Conduct
- Be respectful.
- Keep discussions constructive.
- Report issues with reproducible steps.

## Getting started
1. Fork the repository and clone it.
2. Create a branch: `git checkout -b feature/your-feature`.
3. Install dependencies where needed (each module):
   - `cd modules/openstartup-sdk && pnpm install`
   - `cd modules/openstartup-agents && pnpm install`
   - `cd modules/openstartup-docs && pnpm install`
   - `cd modules/openstartup-solana && pnpm install`
   - `cd modules/openstartup-marketing && pnpm install`
4. Run tests locally before pushing.

## Commit message format
Use clear, simple messages:
- `feat: add new agent handler`
- `fix: correct task status transition`
- `docs: add API reference docs`

## Pull requests
- Link to issue (if available).
- Describe what changed and why.
- Mention test steps you used.

## Directory conventions
- `modules/openstartup-sdk` - core SDK package
- `modules/openstartup-agents` - agent package implementations
- `modules/openstartup-docs` - docs site
- `modules/openstartup-solana` - Anchor program
- `modules/openstartup-marketing` - marketing landing page

## Communication
- Open issues for bugs or feature requests.
- Join discussion in repository threads.
