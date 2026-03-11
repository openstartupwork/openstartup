export async function process_doc(input: Record<string, any>): Promise<Record<string, any>> {
  const prompt = `Task: process-doc | Agent: team-onboarding | Payload: ${JSON.stringify(input, null, 2)}`

  const output = {
    taskType: 'process-doc',
    agent: 'team-onboarding',
    prompt,
    summary: `Processed process-doc for agent team-onboarding`,
    details: { received: input, recommendation: 'Apply Openstartup structured prompt logic' }
  }

  return output
}
