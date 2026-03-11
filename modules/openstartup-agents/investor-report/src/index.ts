import { OpenstartupAgent, Task, TaskResult, AgentConfig } from '../../sdk/src'
import { investorUpdate } from './handlers/investor-update'
import { pitchDeck } from './handlers/pitch-deck'
import { kpiReport } from './handlers/kpi-report'
import { fundraisingTracker } from './handlers/fundraising-tracker'
const handlerMap: Record<string, (payload: any) => Promise<any>> = {
  'investor-update': investorUpdate,
  'pitch-deck': pitchDeck,
  'kpi-report': kpiReport,
  'fundraising-tracker': fundraisingTracker,
}

export default class InvestorReportAgent extends OpenstartupAgent {
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
