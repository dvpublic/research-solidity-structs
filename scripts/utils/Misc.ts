import hre, { ethers } from 'hardhat';
import { Logger } from 'tslog';
import Common from 'ethereumjs-common';
import logSettings from '../../log_settings';
import { DeployerUtils } from './DeployerUtils';
import { BigNumber } from 'ethers';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';

const log: Logger<undefined> = new Logger(logSettings);

const MATIC_CHAIN = Common.forCustomChain(
  'mainnet', {
    name: 'matic',
    networkId: 137,
    chainId: 137,
  },
  'petersburg',
);

const FANTOM_CHAIN = Common.forCustomChain(
  'mainnet', {
    name: 'fantom',
    networkId: 250,
    chainId: 250,
  },
  'petersburg',
);

export class Misc {
  public static readonly SECONDS_OF_DAY = 60 * 60 * 24;
  public static readonly SECONDS_OF_YEAR = Misc.SECONDS_OF_DAY * 365;
  public static readonly ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
  public static readonly MAX_UINT = '115792089237316195423570985008687907853269984665640564039457584007913129639935';
  public static readonly MAX_UINT_MINUS_ONE = '115792089237316195423570985008687907853269984665640564039457584007913129639934';

  /** 1e18 */
  public static readonly ONE18 = BigNumber.from('1000000000000000000');
  /** 1e36 */
  public static readonly WEI_DOUBLE = BigNumber.from('1000000000000000000000000000000000000');
  /** 1e27 */
  public static readonly RAYS = BigNumber.from('1000000000000000000000000000');

  public static printDuration(text: string, start: number) {
    log.info('>>>' + text, ((Date.now() - start) / 1000).toFixed(1), 'sec');
  }

  public static getChainId() {
    return hre.network.config.chainId ?? 0;
  }

  public static getChainName() {
    return hre.network.name;
  }

  public static isRealNetwork() {
    return hre.network.name !== 'hardhat'
      && hre.network.name !== 'anvil'
      && hre.network.name !== 'foundry';
  }


  public static async getChainConfig() {
    const chainId = Misc.getChainId();
    switch (chainId) {
      case 137:
        return MATIC_CHAIN;
      case 250:
        return FANTOM_CHAIN;
      default:
        throw new Error('Unknown net ' + chainId);
    }
  }

  // ************** ADDRESSES **********************

  public static async impersonate(address: string) {
    await hre.network.provider.request({
      method: 'hardhat_impersonateAccount',
      params: [address],
    });

    await hre.network.provider.request({
      method: 'hardhat_setBalance',
      params: [address, '0x1431E0FAE6D7217CAA0000000'],
    });
    console.log('address impersonated', address);
    return ethers.getSigner(address);
  }

  public static async getStorageAt(address: string, index: string) {
    return ethers.provider.getStorageAt(address, index);
  }

  public static async setStorageAt(address: string, index: string, value: string) {
    await ethers.provider.send('hardhat_setStorageAt', [address, index, value]);
    await ethers.provider.send('evm_mine', []); // Just mines to the next block
  }

  // ****************** WAIT ******************

  public static async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  public static async wait(blocks: number) {
    if (!Misc.isRealNetwork()) {
      return;
    }
    const start = ethers.provider.blockNumber;
    while (true) {
      if (Misc.isRealNetwork()) {
        log.info('wait 10sec');
        await Misc.delay(10000);
      }
      if (ethers.provider.blockNumber >= start + blocks) {
        break;
      }
    }
  }
}


