import { OpenstartupAgent, Task, TaskResult, AgentConfig } from '../../sdk/src'
import { onboardingDoc } from './handlers/onboarding-doc'
import { trainingGuide } from './handlers/training-guide'
import { teamWiki } from './handlers/team-wiki'
import { processDoc } from './handlers/process-doc'
const handlerMap: Record<string, (payload: any) => Promise<any>> = {
  'onboarding-doc': onboardingDoc,
  'training-guide': trainingGuide,
  'team-wiki': teamWiki,
  'process-doc': processDoc,
}

export default class TeamOnboardingAgent extends OpenstartupAgent {
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
