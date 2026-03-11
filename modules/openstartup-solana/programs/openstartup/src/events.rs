use anchor_lang::prelude::*;

#[event]
pub struct AgentRegistered {
    pub workspace: Pubkey,
    pub agent: Pubkey,
    pub wallet: Pubkey,
    pub registered_at: i64,
}

#[event]
pub struct TaskCreated {
    pub workspace: Pubkey,
    pub agent: Pubkey,
    pub task: Pubkey,
    pub title: String,
    pub created_at: i64,
}

#[event]
pub struct TaskCompleted {
    pub task: Pubkey,
    pub agent: Pubkey,
    pub result_hash: String,
    pub completed_at: i64,
}

#[event]
pub struct RewardTransferred {
    pub agent: Pubkey,
    pub amount: u64,
    pub transferred_at: i64,
}
