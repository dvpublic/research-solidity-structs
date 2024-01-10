import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { Contract, ContractFactory } from 'ethers';
import { Logger } from 'tslog';
import {deployContract, deployContractSilently} from '../deploy/DeployContract';
import { ethers } from 'hardhat';
import logSettings from "../../log_settings";

// tslint:disable-next-line:no-var-requires
const hre = require("hardhat");
const log: Logger<undefined> = new Logger(logSettings);


export class DeployerUtils {

  // ************ CONTRACT DEPLOY **************************

  public static async deployContractSilent<T extends ContractFactory>(
    signer: SignerWithAddress,
    name: string,
    // tslint:disable-next-line:no-any
    ...args: any[]
  ) {
    return deployContractSilently(hre, signer, name, ...args);
  }

  public static async deployContract<T extends ContractFactory>(
    signer: SignerWithAddress,
    name: string,
    // tslint:disable-next-line:no-any
    ...args: any[]
  ) {
    return deployContract(hre, signer, name, ...args);
  }
}
