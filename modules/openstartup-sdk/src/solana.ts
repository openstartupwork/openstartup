import { Keypair, Connection, LAMPORTS_PER_SOL, PublicKey, Transaction } from '@solana/web3.js'

export function generateKeypair() {
  const keypair = Keypair.generate()
  return { publicKey: keypair.publicKey.toBase58(), secretKey: Array.from(keypair.secretKey) }
}

export async function getBalance(address: string, clusterUrl = 'https://api.devnet.solana.com') {
  const connection = new Connection(clusterUrl, 'confirmed')
  const publicKey = new PublicKey(address)
  const balance = await connection.getBalance(publicKey)
  return balance / LAMPORTS_PER_SOL
}

export async function signMessage(message: string, secretKey: Uint8Array) {
  const keypair = Keypair.fromSecretKey(secretKey)
  const signature = await keypair.signMessage(Buffer.from(message))
  return signature.toString('base64')
}
