# Openstartup SDK

## Installation

pnpm add @openstartup/sdk

## Quick start

import { OpenstartupAgent, OpenstartupClient, generateKeypair } from '@openstartup/sdk'

class MyAgent extends OpenstartupAgent {
  async handleTask(task) {
    return { taskId: task.id, success: true, output: { result: 'done' } }
  }
}

## API reference

OpenstartupAgent
- initialize()
- handleTask(task)
- reportResult(taskId, result)
- ping()
- getWallet()

OpenstartupClient
- authenticate(token)
- fetchTasks(agentId)
- submitResult(taskId, result)
- updateStatus(agentId, status)

## Build custom agents
1. extends OpenstartupAgent
2. implement handleTask
3. use sdk client to fetch and report
