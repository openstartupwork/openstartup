import { OpenstartupAgent, Task, TaskResult, AgentConfig } from '../../sdk/src'
import { seoContent } from './handlers/seo-content'
import { blogPost } from './handlers/blog-post'
import { socialMedia } from './handlers/social-media'
import { emailCampaign } from './handlers/email-campaign'
const handlerMap: Record<string, (payload: any) => Promise<any>> = {
  'seo-content': seoContent,
  'blog-post': blogPost,
  'social-media': socialMedia,
  'email-campaign': emailCampaign,
}

export default class SeoContentAgent extends OpenstartupAgent {
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
