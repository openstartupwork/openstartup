import { OpenstartupAgent, Task, TaskResult, AgentConfig } from '../../sdk/src'
import { prReview } from './handlers/pr-review'
import { bugDetection } from './handlers/bug-detection'
import { codeQuality } from './handlers/code-quality'
import { bestPractices } from './handlers/best-practices'
const handlerMap: Record<string, (payload: any) => Promise<any>> = {
  'pr-review': prReview,
  'bug-detection': bugDetection,
  'code-quality': codeQuality,
  'best-practices': bestPractices,
}

export default class CodeReviewAgent extends OpenstartupAgent {
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
