import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { DappStarter } from '../target/types/dapp_starter';

describe('dapp-starter', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.DappStarter as Program<DappStarter>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
