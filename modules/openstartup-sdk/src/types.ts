export interface Task {
  id: string
  agentId: string
  workspaceId: string
  type: string
  payload: Record<string, any>
  createdAt: string
}

export interface AgentConfig {
  id: string
  name: string
  workspaceId: string
  walletAddress: string
  endpointUrl?: string
}

export interface TaskResult {
  taskId: string
  success: boolean
  output: Record<string, any>
  message?: string
}

export type AgentStatus = 'idle' | 'running' | 'error' | 'offline'
export type HealthStatus = 'healthy' | 'degraded' | 'unhealthy'
