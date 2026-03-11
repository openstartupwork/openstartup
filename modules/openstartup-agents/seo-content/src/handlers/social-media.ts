export async function social_media(input: Record<string, any>): Promise<Record<string, any>> {
  const prompt = `Task: social-media | Agent: seo-content | Payload: ${JSON.stringify(input, null, 2)}`

  const output = {
    taskType: 'social-media',
    agent: 'seo-content',
    prompt,
    summary: `Processed social-media for agent seo-content`,
    details: { received: input, recommendation: 'Apply Openstartup structured prompt logic' }
  }

  return output
}
