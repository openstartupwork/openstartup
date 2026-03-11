export async function component_spec(input: Record<string, any>): Promise<Record<string, any>> {
  const prompt = `Task: component-spec | Agent: design-review | Payload: ${JSON.stringify(input, null, 2)}`

  const output = {
    taskType: 'component-spec',
    agent: 'design-review',
    prompt,
    summary: `Processed component-spec for agent design-review`,
    details: { received: input, recommendation: 'Apply Openstartup structured prompt logic' }
  }

  return output
}
