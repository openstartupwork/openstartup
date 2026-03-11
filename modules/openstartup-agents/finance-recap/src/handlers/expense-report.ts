export async function expense_report(input: Record<string, any>): Promise<Record<string, any>> {
  const prompt = `Task: expense-report | Agent: finance-recap | Payload: ${JSON.stringify(input, null, 2)}`

  const output = {
    taskType: 'expense-report',
    agent: 'finance-recap',
    prompt,
    summary: `Processed expense-report for agent finance-recap`,
    details: { received: input, recommendation: 'Apply Openstartup structured prompt logic' }
  }

  return output
}
