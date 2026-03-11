export async function burn_rate(input: Record<string, any>): Promise<Record<string, any>> {
  const prompt = `Task: burn-rate | Agent: finance-recap | Payload: ${JSON.stringify(input, null, 2)}`

  const output = {
    taskType: 'burn-rate',
    agent: 'finance-recap',
    prompt,
    summary: `Processed burn-rate for agent finance-recap`,
    details: { received: input, recommendation: 'Apply Openstartup structured prompt logic' }
  }

  return output
}
