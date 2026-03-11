import { OpenstartupAgent, Task, TaskResult, AgentConfig } from '../../sdk/src'
import { sopGenerator } from './handlers/sop-generator'
import { okrPlanner } from './handlers/okr-planner'
import { hiringPlan } from './handlers/hiring-plan'
import { checklist } from './handlers/checklist'

const handlerMap: Record<string, (payload: any) => Promise<any>> = {
  'sop-generator': sopGenerator,
  'okr-planner': okrPlanner,
  'hiring-plan': hiringPlan,
  'checklist': checklist,
}

export default class AdminOpsAgent extends OpenstartupAgent {
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
