use anchor_lang::prelude::*;

#[account]
pub struct WorkspaceAccount {
    pub authority: Pubkey,
    pub name: String,
    pub agent_count: u64,
    pub task_count: u64,
    pub created_at: i64,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, PartialEq, Eq)]
pub enum AgentStatus {
    Active,
    Disabled,
}

#[account]
pub struct AgentAccount {
    pub workspace: Pubkey,
    pub authority: Pubkey,
    pub wallet: Pubkey,
    pub name: String,
    pub category: String,
    pub status: AgentStatus,
    pub total_tasks: u64,
    pub total_rewards: u64,
    pub registered_at: i64,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, PartialEq, Eq)]
pub enum TaskStatus {
    Pending,
    InProgress,
    Done,
    Failed,
}

#[account]
pub struct TaskRecord {
    pub workspace: Pubkey,
    pub agent: Pubkey,
    pub creator: Pubkey,
    pub title: String,
    pub status: TaskStatus,
    pub result_hash: Option<String>,
    pub reward_amount: u64,
    pub created_at: i64,
    pub completed_at: Option<i64>,
}
