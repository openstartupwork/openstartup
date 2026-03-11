export async function ui_review(input: Record<string, any>): Promise<Record<string, any>> {
  const prompt = `Task: ui-review | Agent: design-review | Payload: ${JSON.stringify(input, null, 2)}`

  const output = {
    taskType: 'ui-review',
    agent: 'design-review',
    prompt,
    summary: `Processed ui-review for agent design-review`,
    details: { received: input, recommendation: 'Apply Openstartup structured prompt logic' }
  }

  return output
}
