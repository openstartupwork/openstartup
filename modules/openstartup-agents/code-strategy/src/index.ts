import { OpenstartupAgent, Task, TaskResult, AgentConfig } from '../../sdk/src'
import { apiDesign } from './handlers/api-design'
import { architectureDoc } from './handlers/architecture-doc'
import { techSpec } from './handlers/tech-spec'
import { systemDesign } from './handlers/system-design'
const handlerMap: Record<string, (payload: any) => Promise<any>> = {
  'api-design': apiDesign,
  'architecture-doc': architectureDoc,
  'tech-spec': techSpec,
  'system-design': systemDesign,
}

export default class CodeStrategyAgent extends OpenstartupAgent {
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
