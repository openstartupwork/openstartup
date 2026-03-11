use anchor_lang::prelude::*;

#[error_code]
pub enum OpenstartupError {
    #[msg("Invalid agent account")]
    InvalidAgent,
    #[msg("Unauthorized action")]
    Unauthorized,
    #[msg("Task already completed")]
    TaskAlreadyCompleted,
    #[msg("Insufficient funds for reward transfer")]
    InsufficientFunds,
    #[msg("Agent already registered")]
    DuplicateAgent,
}
