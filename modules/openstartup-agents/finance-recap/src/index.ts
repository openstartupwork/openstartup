import { OpenstartupAgent, Task, TaskResult, AgentConfig } from '../../sdk/src'
import { budgetSummary } from './handlers/budget-summary'
import { burnRate } from './handlers/burn-rate'
import { expenseReport } from './handlers/expense-report'
import { forecast } from './handlers/forecast'
const handlerMap: Record<string, (payload: any) => Promise<any>> = {
  'budget-summary': budgetSummary,
  'burn-rate': burnRate,
  'expense-report': expenseReport,
  'forecast': forecast,
}

export default class FinanceRecapAgent extends OpenstartupAgent {
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
