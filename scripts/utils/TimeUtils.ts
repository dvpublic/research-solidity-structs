import { ethers } from 'hardhat';
import { Misc } from './Misc';

export class TimeUtils {

  public static async advanceBlocksOnTs(add: number) {
    const start = Date.now();
    // const block = await TimeUtils.currentBlock();
    await ethers.provider.send('evm_increaseTime', [add]);
    await ethers.provider.send('evm_mine', []);
    // await TimeUtils.mineAndCheck();
    Misc.printDuration('advanceBlocksOnTs ' + add + ' completed', start);
  }

  public static async advanceNBlocks(n: number) {

    // todo test BalancerComposableStableDepositorFacadeTest, depositorClaimRewards, Withdraw full - doesn't work rewards don't appear...
    // await ethers.provider.send("hardhat_mine", ['0x' + n.toString(16), '0x' + (n * 2.35).toFixed(0).toString(16)]);
    // await mine(n, {interval: 1});

    // todo test BalancerComposableStableDepositorFacadeTest, depositorClaimRewards, Withdraw full - doesn't work rewards don't appear...
    // await ethers.provider.send("hardhat_mine", ['0x' + n.toString(16), '0x' + Number(1).toString(16)]);

    // todo AAVE3 Break vars.totalAToken > vars.totalStableDebt + vars.totalVariableDebt in AAVE3 USDT, see issue230310
    // await mine(n, {interval: n*2.35});

    const start = Date.now();
    await ethers.provider.send('evm_increaseTime', [+(n * 2.35).toFixed(0)]);

    for (let i = 0; i < n; i++) {
      await ethers.provider.send('evm_mine', []);
    }
    Misc.printDuration('advanceNBlocks ' + n + ' completed', start);
  }

  public static async mineAndCheck() {
    const start = ethers.provider.blockNumber;
    while (true) {
      await ethers.provider.send('evm_mine', []);
      if (ethers.provider.blockNumber > start) {
        break;
      }
      if (Misc.isRealNetwork()) {
        console.log('waite mine 10sec');
        await Misc.delay(10000);
      }
    }
  }

  public static async setBlock(blockNumber: number) {
    await ethers.provider.send('evm_setNextBlockTimestamp', [blockNumber]);
  }

  public static async setNextBlockTime(ts: number) {
    await ethers.provider.send('evm_setNextBlockTimestamp', [ts]);
    await ethers.provider.send('evm_mine', []);
  }

  public static async snapshot() {
    const id = await ethers.provider.send('evm_snapshot', []);
    console.log('made snapshot', id);
    return id;
  }

  public static async rollback(id: string) {
    console.log('restore snapshot', id);
    return ethers.provider.send('evm_revert', [id]);
  }

}
