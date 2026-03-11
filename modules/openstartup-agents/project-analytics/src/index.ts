import { OpenstartupAgent, Task, TaskResult, AgentConfig } from '../../sdk/src'
import { progressReport } from './handlers/progress-report'
import { velocityTracking } from './handlers/velocity-tracking'
import { milestoneAnalysis } from './handlers/milestone-analysis'
import { statusUpdate } from './handlers/status-update'
const handlerMap: Record<string, (payload: any) => Promise<any>> = {
  'progress-report': progressReport,
  'velocity-tracking': velocityTracking,
  'milestone-analysis': milestoneAnalysis,
  'status-update': statusUpdate,
}

export default class ProjectAnalyticsAgent extends OpenstartupAgent {
  constructor(config: AgentConfig) {
    super(config)
  }

  async handleTask(task: Task): Promise<TaskResult> {
    const handler = handlerMap[task.type]
    if (!handler) {
      return { taskId: task.id, success: false, output: { error: 'Unsupported task type: ' + task.type } }
    }
    const output = await handler(task.payload)
    return { taskId: task.id, success: true, output }
  }
}
