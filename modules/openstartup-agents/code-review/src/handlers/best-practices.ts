export async function best_practices(input: Record<string, any>): Promise<Record<string, any>> {
  const prompt = `Task: best-practices | Agent: code-review | Payload: ${JSON.stringify(input, null, 2)}`

  const output = {
    taskType: 'best-practices',
    agent: 'code-review',
    prompt,
    summary: `Processed best-practices for agent code-review`,
    details: { received: input, recommendation: 'Apply Openstartup structured prompt logic' }
  }

  return output
}
