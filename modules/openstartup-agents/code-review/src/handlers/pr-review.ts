export async function pr_review(input: Record<string, any>): Promise<Record<string, any>> {
  const prompt = `Task: pr-review | Agent: code-review | Payload: ${JSON.stringify(input, null, 2)}`

  const output = {
    taskType: 'pr-review',
    agent: 'code-review',
    prompt,
    summary: `Processed pr-review for agent code-review`,
    details: { received: input, recommendation: 'Apply Openstartup structured prompt logic' }
  }

  return output
}
