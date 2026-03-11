import { OpenstartupAgent, Task, TaskResult, AgentConfig } from '../../sdk/src'
import { gtmStrategy } from './handlers/gtm-strategy'
import { contentCalendar } from './handlers/content-calendar'
import { competitorAnalysis } from './handlers/competitor-analysis'
import { launchPlan } from './handlers/launch-plan'
const handlerMap: Record<string, (payload: any) => Promise<any>> = {
  'gtm-strategy': gtmStrategy,
  'content-calendar': contentCalendar,
  'competitor-analysis': competitorAnalysis,
  'launch-plan': launchPlan,
}

export default class MarketingStrategistAgent extends OpenstartupAgent {
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
