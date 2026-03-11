import { OpenstartupAgent, Task, TaskResult, AgentConfig } from '../../sdk/src'
import { uiReview } from './handlers/ui-review'
import { accessibilityAudit } from './handlers/accessibility-audit'
import { designSystem } from './handlers/design-system'
import { componentSpec } from './handlers/component-spec'
const handlerMap: Record<string, (payload: any) => Promise<any>> = {
  'ui-review': uiReview,
  'accessibility-audit': accessibilityAudit,
  'design-system': designSystem,
  'component-spec': componentSpec,
}

export default class DesignReviewAgent extends OpenstartupAgent {
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
