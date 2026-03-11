import fetch from 'node-fetch'
import { TaskResult } from './types'

export class OpenstartupClient {
  constructor(public baseUrl: string) {}

  private headers(token?: string) {
    const h: Record<string, string> = { 'Content-Type': 'application/json' }
    if (token) h.Authorization = `Bearer ${token}`
    return h
  }

  async authenticate(token: string): Promise<any> {
    const res = await fetch(`${this.baseUrl}/api/auth/verify`, {
      method: 'POST',
      headers: this.headers(token)
    })
    return res.json()
  }

  async fetchTasks(agentId: string): Promise<any[]> {
    const res = await fetch(`${this.baseUrl}/api/workspace/agents/${agentId}/tasks`, {
      method: 'GET',
      headers: this.headers()
    })
    return res.json()
  }

  async submitResult(taskId: string, result: TaskResult): Promise<any> {
    const res = await fetch(`${this.baseUrl}/api/workspace/tasks/${taskId}/result`, {
      method: 'POST',
      body: JSON.stringify(result),
      headers: this.headers()
    })
    return res.json()
  }

  async updateStatus(agentId: string, status: string): Promise<any> {
    const res = await fetch(`${this.baseUrl}/api/workspace/agents/${agentId}/status`, {
      method: 'POST',
      body: JSON.stringify({ status }),
      headers: this.headers()
    })
    return res.json()
  }
}
