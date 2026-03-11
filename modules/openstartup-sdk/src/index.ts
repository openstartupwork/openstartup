import { Task, TaskResult, AgentConfig, AgentStatus, HealthStatus } from './types'
import { OpenstartupClient } from './client'

export abstract class OpenstartupAgent {
  config: AgentConfig
  status: AgentStatus = 'idle'
  health: HealthStatus = 'healthy'
  client: OpenstartupClient

  constructor(config: AgentConfig) {
    this.config = config
    this.client = new OpenstartupClient(config.endpointUrl || '')
  }

  async initialize(): Promise<void> {
    this.status = 'running'
    await this.client.updateStatus(this.config.id, 'running')
  }

  abstract handleTask(task: Task): Promise<TaskResult>

  async reportResult(taskId: string, result: TaskResult): Promise<void> {
    await this.client.submitResult(taskId, result)
  }

  async ping(): Promise<void> {
    this.health = 'healthy'
    await this.client.updateStatus(this.config.id, 'running')
  }

  getWallet(): string {
    return this.config.walletAddress
  }
}

export * from './types'
