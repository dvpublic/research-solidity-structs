import {DeployerUtils} from "../scripts/utils/DeployerUtils";
import {
  PassComplexOrdered, PassComplexUnordered, PassDynArrayInt32, PassDynArrayUint, PassDynArrayUint8, PassPureVars10Int32,
  PassPureVars10Uint,
  PassPureVars10Uint8, PassPureVars5Uint, PassPureVarsEmpty, PassStatArray10Int32,
  PassStatArray10Uint,
  PassStatArray10Uint8, PassStatArray5Uint, PassStruct10Int32,
  PassStruct10Uint, PassStruct10UInt8, PassStruct1UInt, PassStruct20UInt, PassStruct30UInt,
  PassStruct4Int, PassStruct5Uint
} from "../typechain";
import {ethers} from "hardhat";
import {SignerWithAddress} from "@nomiclabs/hardhat-ethers/signers";
import {TimeUtils} from "../scripts/utils/TimeUtils";
import {SaveToCsv} from "../scripts/utils/SaveToCsv";
import {IDataTypes} from "../typechain/libs/PassLib";

describe("PassToLibTest", () => {
  const COUNT_REPEAT = 1;

  let signer: SignerWithAddress;
  let ut4: PassStruct4Int;
  let utC1: PassComplexOrdered;
  let utCU: PassComplexUnordered;

  let utS1: PassStruct1UInt;
  let utPV0: PassPureVarsEmpty;

  let utS: PassStruct10Uint;
  let utPV: PassPureVars10Uint;
  let utDA: PassDynArrayUint;
  let utSA: PassStatArray10Uint;

  let utS5: PassStruct5Uint;
  let utPV5: PassPureVars5Uint;
  let utSA5: PassStatArray5Uint;

  let utS8: PassStruct10UInt8;
  let utPV8: PassPureVars10Uint8;
  let utDA8: PassDynArrayUint8;
  let utSA8: PassStatArray10Uint8;

  let utS20: PassStruct20UInt;
  let utS30: PassStruct30UInt;

  let utS32: PassStruct10Int32;
  let utPV32: PassPureVars10Int32;
  let utDA32: PassDynArrayInt32;
  let utSA32: PassStatArray10Int32;

  let snapshot: string;

  interface IResults {
    callM2MInternal?: number;
    callM2MPublic?: number;
    callC2CInternal?: number;
    callC2CPublic?: number;
    callC2MInternal?: number;
    callC2MPublic?: number;
    callM2MInternalLibExt?: number;
    callM2CInternalLibExt?: number;
    callM2MLibExt?: number;
    callM2CLibExt?: number;
    callM2MLibInt?: number;
  }

  before(async function () {
    [signer] = await ethers.getSigners();

    ut4 = (await DeployerUtils.deployContract(signer, 'PassStruct4Int',)) as PassStruct4Int;
    utC1 = (await DeployerUtils.deployContract(signer, 'PassComplexOrdered',)) as PassComplexOrdered;
    utCU = (await DeployerUtils.deployContract(signer, 'PassComplexUnordered',)) as PassComplexUnordered;

    utS1 = (await DeployerUtils.deployContract(signer, 'PassStruct1UInt',)) as PassStruct1UInt;
    utPV0 = (await DeployerUtils.deployContract(signer, 'PassPureVarsEmpty',)) as PassPureVarsEmpty;

    utS = (await DeployerUtils.deployContract(signer, 'PassStruct10Uint',)) as PassStruct10Uint;
    utPV = (await DeployerUtils.deployContract(signer, 'PassPureVars10Uint',)) as PassPureVars10Uint;
    utDA = (await DeployerUtils.deployContract(signer, 'PassDynArrayUint',)) as PassDynArrayUint;
    utSA = (await DeployerUtils.deployContract(signer, 'PassStatArray10Uint',)) as PassStatArray10Uint;

    utS5 = (await DeployerUtils.deployContract(signer, 'PassStruct5Uint',)) as PassStruct5Uint;
    utPV5 = (await DeployerUtils.deployContract(signer, 'PassPureVars5Uint',)) as PassPureVars5Uint;
    utSA5 = (await DeployerUtils.deployContract(signer, 'PassStatArray5Uint',)) as PassStatArray5Uint;

    utS8 = (await DeployerUtils.deployContract(signer, 'PassStruct10UInt8',)) as PassStruct10UInt8;
    utPV8 = (await DeployerUtils.deployContract(signer, 'PassPureVars10Uint8',)) as PassPureVars10Uint8;
    utDA8 = (await DeployerUtils.deployContract(signer, 'PassDynArrayUint8',)) as PassDynArrayUint8;
    utSA8 = (await DeployerUtils.deployContract(signer, 'PassStatArray10Uint8',)) as PassStatArray10Uint8;

    utS20 = (await DeployerUtils.deployContract(signer, 'PassStruct20UInt',)) as PassStruct20UInt;
    utS30 = (await DeployerUtils.deployContract(signer, 'PassStruct30UInt',)) as PassStruct30UInt;

    utS32 = (await DeployerUtils.deployContract(signer, 'PassStruct10Int32',)) as PassStruct10Int32;
    utPV32 = (await DeployerUtils.deployContract(signer, 'PassPureVars10Int32',)) as PassPureVars10Int32;
    utDA32 = (await DeployerUtils.deployContract(signer, 'PassDynArrayInt32',)) as PassDynArrayInt32;
    utSA32 = (await DeployerUtils.deployContract(signer, 'PassStatArray10Int32',)) as PassStatArray10Int32;

  })

  after(async function () {

  });

  beforeEach(async function () {
    snapshot = await TimeUtils.snapshot();
  })

  afterEach(async function () {
    await TimeUtils.rollback(snapshot);
  });

  function getStruct4IntStructSample(): IDataTypes.Struct4IntStruct {
    return {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    }
  }
  async function createStruct4IntAll(ut: PassStruct4Int, data: IDataTypes.Struct4IntStruct): Promise<IResults> {
    let r: IResults = {};
    await ut.callMemoryToMemoryInternal(data, COUNT_REPEAT);
    r.callM2MInternal = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryPublic(data, COUNT_REPEAT);
    r.callM2MPublic = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToCalldataInternal(data, COUNT_REPEAT);
    r.callC2CInternal = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToCalldataPublic(data, COUNT_REPEAT);
    r.callC2CPublic = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToMemoryInternal(data, COUNT_REPEAT);
    r.callC2MInternal = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToMemoryPublic(data, COUNT_REPEAT);
    r.callC2MPublic = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryLibExt(data, COUNT_REPEAT);
    r.callM2MLibExt = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToCalldataLibExt(data, COUNT_REPEAT);
    r.callM2CLibExt = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryLibInt(data, COUNT_REPEAT);
    r.callM2MLibInt = (await ut.gasUsed()).toNumber();

    return r;
  }

  function getComplexStructSample(size: number): IDataTypes.ComplexOrderedStruct {
    return {
      b1: 1,
      b2: 2,
      s1: 1,
      s2: 2,
      a1: ethers.Wallet.createRandom().address,
      a2: ethers.Wallet.createRandom().address,
      t1: 3,
      t2: 4,
      u1: 5,
      u2: 6,
      s4: {
        a: 1,
        b: 2,
        c: 3,
        d: 4
      },
      aa1: [...Array(size).keys()].map(x => x),
      aa2: [...Array(size).keys()].map(x => x),
    }
  }
  async function createComplexAll(ut: PassComplexOrdered | PassComplexUnordered, data: IDataTypes.ComplexOrderedStruct): Promise<IResults> {
    let r: IResults = {};
    await ut.callMemoryToMemoryInternal(data, COUNT_REPEAT);
    r.callM2MInternal = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryPublic(data, COUNT_REPEAT);
    r.callM2MPublic = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToCalldataInternal(data, COUNT_REPEAT);
    r.callC2CInternal = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToCalldataPublic(data, COUNT_REPEAT);
    r.callC2CPublic = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToMemoryInternal(data, COUNT_REPEAT);
    r.callC2MInternal = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToMemoryPublic(data, COUNT_REPEAT);
    r.callC2MPublic = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryLibExt(data, COUNT_REPEAT);
    r.callM2MLibExt = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToCalldataLibExt(data, COUNT_REPEAT);
    r.callM2CLibExt = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryLibInt(data, COUNT_REPEAT);
    r.callM2MLibInt = (await ut.gasUsed()).toNumber();

    return r;
  }


  function getStruct10UIntStructSample(): IDataTypes.Struct10UIntStruct {
    return {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
      g: 7,
      h: 8,
      i: 9,
      j: 10,
    }
  }
  async function createStruct10UIntAll(ut: PassStruct10Uint | PassStruct10UInt8 | PassStruct10Int32, data: IDataTypes.Struct10UIntStruct): Promise<IResults> {
    let r: IResults = {};
    await ut.callMemoryToMemoryInternal(data, COUNT_REPEAT);
    r.callM2MInternal = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryPublic(data, COUNT_REPEAT);
    r.callM2MPublic = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToCalldataInternal(data, COUNT_REPEAT);
    r.callC2CInternal = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToCalldataPublic(data, COUNT_REPEAT);
    r.callC2CPublic = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToMemoryInternal(data, COUNT_REPEAT);
    r.callC2MInternal = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToMemoryPublic(data, COUNT_REPEAT);
    r.callC2MPublic = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryLibExt(data, COUNT_REPEAT);
    r.callM2MLibExt = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToCalldataLibExt(data, COUNT_REPEAT);
    r.callM2CLibExt = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryLibInt(data, COUNT_REPEAT);
    r.callM2MLibInt = (await ut.gasUsed()).toNumber();

    return r;
  }
  async function createPureVars10UintAll(ut: PassPureVars10Uint | PassPureVars10Uint8 | PassPureVars10Int32): Promise<IResults> {
    let r: IResults = {};
    await ut.callMemoryToMemoryInternal(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, COUNT_REPEAT);
    r.callM2MInternal = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryPublic(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, COUNT_REPEAT);
    r.callM2MPublic = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryLibExt(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, COUNT_REPEAT);
    r.callM2MLibExt = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryLibInt(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, COUNT_REPEAT);
    r.callM2MLibInt = (await ut.gasUsed()).toNumber();

    return r;
  }
  function getStatArray10UIntStructSample(): number[] {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  }
  async function createStatArray10UIntAll(ut: PassStatArray10Uint | PassStatArray10Uint8 | PassStatArray10Int32, data: number[]): Promise<IResults> {
    let r: IResults = {};
    await ut.callMemoryToMemoryInternal(data, COUNT_REPEAT);
    r.callM2MInternal = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryPublic(data, COUNT_REPEAT);
    r.callM2MPublic = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToCalldataInternal(data, COUNT_REPEAT);
    r.callC2CInternal = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToCalldataPublic(data, COUNT_REPEAT);
    r.callC2CPublic = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToMemoryInternal(data, COUNT_REPEAT);
    r.callC2MInternal = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToMemoryPublic(data, COUNT_REPEAT);
    r.callC2MPublic = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryLibExt(data, COUNT_REPEAT);
    r.callM2MLibExt = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToCalldataLibExt(data, COUNT_REPEAT);
    r.callM2CLibExt = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryLibInt(data, COUNT_REPEAT);
    r.callM2MLibInt = (await ut.gasUsed()).toNumber();

    return r;
  }

  function getDynArrayUIntStructSample(size: number): number[] {
    return [...Array(size).keys()].map(x => x);
  }
  async function createDynArrayUIntAll(ut: PassDynArrayUint | PassDynArrayUint8 | PassDynArrayInt32, data: number[]): Promise<IResults> {
    let r: IResults = {};
    await ut.callMemoryToMemoryInternal(data, COUNT_REPEAT);
    r.callM2MInternal = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryPublic(data, COUNT_REPEAT);
    r.callM2MPublic = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToCalldataInternal(data, COUNT_REPEAT);
    r.callC2CInternal = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToCalldataPublic(data, COUNT_REPEAT);
    r.callC2CPublic = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToMemoryInternal(data, COUNT_REPEAT);
    r.callC2MInternal = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToMemoryPublic(data, COUNT_REPEAT);
    r.callC2MPublic = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryLibExt(data, COUNT_REPEAT);
    r.callM2MLibExt = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToCalldataLibExt(data, COUNT_REPEAT);
    r.callM2CLibExt = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryLibInt(data, COUNT_REPEAT);
    r.callM2MLibInt = (await ut.gasUsed()).toNumber();

    return r;
  }

  function getStruct20UIntStructSample(): IDataTypes.Struct20UIntStruct {
    return {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
      g: 7,
      h: 8,
      i: 9,
      j: 10,
      a2: 1,
      b2: 2,
      c2: 3,
      d2: 4,
      e2: 5,
      f2: 6,
      g2: 7,
      h2: 8,
      i2: 9,
      j2: 10,
    }
  }
  async function createStruct20UIntAll(ut: PassStruct20UInt, data: IDataTypes.Struct20UIntStruct): Promise<IResults> {
    let r: IResults = {};
    await ut.callMemoryToMemoryInternal(data, COUNT_REPEAT);
    r.callM2MInternal = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryPublic(data, COUNT_REPEAT);
    r.callM2MPublic = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToCalldataInternal(data, COUNT_REPEAT);
    r.callC2CInternal = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToCalldataPublic(data, COUNT_REPEAT);
    r.callC2CPublic = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToMemoryInternal(data, COUNT_REPEAT);
    r.callC2MInternal = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToMemoryPublic(data, COUNT_REPEAT);
    r.callC2MPublic = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryLibExt(data, COUNT_REPEAT);
    r.callM2MLibExt = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToCalldataLibExt(data, COUNT_REPEAT);
    r.callM2CLibExt = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryLibInt(data, COUNT_REPEAT);
    r.callM2MLibInt = (await ut.gasUsed()).toNumber();

    return r;
  }

  function getStruct30UIntStructSample(): IDataTypes.Struct30UIntStruct {
    return {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
      g: 7,
      h: 8,
      i: 9,
      j: 10,
      a2: 1,
      b2: 2,
      c2: 3,
      d2: 4,
      e2: 5,
      f2: 6,
      g2: 7,
      h2: 8,
      i2: 9,
      j2: 10,
      a3: 1,
      b3: 2,
      c3: 3,
      d3: 4,
      e3: 5,
      f3: 6,
      g3: 7,
      h3: 8,
      i3: 9,
      j3: 10,
    }
  }
  async function createStruct30UIntAll(ut: PassStruct30UInt, data: IDataTypes.Struct30UIntStruct): Promise<IResults> {
    let r: IResults = {};
    await ut.callMemoryToMemoryInternal(data, COUNT_REPEAT);
    r.callM2MInternal = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryPublic(data, COUNT_REPEAT);
    r.callM2MPublic = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToCalldataInternal(data, COUNT_REPEAT);
    r.callC2CInternal = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToCalldataPublic(data, COUNT_REPEAT);
    r.callC2CPublic = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToMemoryInternal(data, COUNT_REPEAT);
    r.callC2MInternal = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToMemoryPublic(data, COUNT_REPEAT);
    r.callC2MPublic = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryLibExt(data, COUNT_REPEAT);
    r.callM2MLibExt = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToCalldataLibExt(data, COUNT_REPEAT);
    r.callM2CLibExt = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryLibInt(data, COUNT_REPEAT);
    r.callM2MLibInt = (await ut.gasUsed()).toNumber();

    return r;
  }

  function getStruct1UIntStructSample(): IDataTypes.Struct1UIntStruct {
    return {a: 1,}
  }
  async function createStruct1UIntAll(ut: PassStruct1UInt, data: IDataTypes.Struct1UIntStruct): Promise<IResults> {
    let r: IResults = {};
    await ut.callMemoryToMemoryInternal(data, COUNT_REPEAT);
    r.callM2MInternal = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryPublic(data, COUNT_REPEAT);
    r.callM2MPublic = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToCalldataInternal(data, COUNT_REPEAT);
    r.callC2CInternal = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToCalldataPublic(data, COUNT_REPEAT);
    r.callC2CPublic = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToMemoryInternal(data, COUNT_REPEAT);
    r.callC2MInternal = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToMemoryPublic(data, COUNT_REPEAT);
    r.callC2MPublic = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryLibExt(data, COUNT_REPEAT);
    r.callM2MLibExt = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToCalldataLibExt(data, COUNT_REPEAT);
    r.callM2CLibExt = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryLibInt(data, COUNT_REPEAT);
    r.callM2MLibInt = (await ut.gasUsed()).toNumber();

    return r;
  }

  async function createPureVarsEmptyAll(ut: PassPureVarsEmpty): Promise<IResults> {
    let r: IResults = {};
    await ut.callMemoryToMemoryInternal(COUNT_REPEAT);
    r.callM2MInternal = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryPublic(COUNT_REPEAT);
    r.callM2MPublic = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryLibExt(COUNT_REPEAT);
    r.callM2MLibExt = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryLibInt(COUNT_REPEAT);
    r.callM2MLibInt = (await ut.gasUsed()).toNumber();

    return r;
  }

  function getStruct5UIntStructSample(): IDataTypes.Struct5UIntStruct {
    return {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
    }
  }
  async function createStruct5UIntAll(ut: PassStruct5Uint, data: IDataTypes.Struct5UIntStruct): Promise<IResults> {
    let r: IResults = {};
    await ut.callMemoryToMemoryInternal(data, COUNT_REPEAT);
    r.callM2MInternal = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryPublic(data, COUNT_REPEAT);
    r.callM2MPublic = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToCalldataInternal(data, COUNT_REPEAT);
    r.callC2CInternal = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToCalldataPublic(data, COUNT_REPEAT);
    r.callC2CPublic = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToMemoryInternal(data, COUNT_REPEAT);
    r.callC2MInternal = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToMemoryPublic(data, COUNT_REPEAT);
    r.callC2MPublic = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryLibExt(data, COUNT_REPEAT);
    r.callM2MLibExt = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToCalldataLibExt(data, COUNT_REPEAT);
    r.callM2CLibExt = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryLibInt(data, COUNT_REPEAT);
    r.callM2MLibInt = (await ut.gasUsed()).toNumber();

    return r;
  }
  async function createPureVars5UintAll(ut: PassPureVars5Uint): Promise<IResults> {
    let r: IResults = {};
    await ut.callMemoryToMemoryInternal(0, 1, 2, 3, 4, COUNT_REPEAT);
    r.callM2MInternal = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryPublic(0, 1, 2, 3, 4, COUNT_REPEAT);
    r.callM2MPublic = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryLibExt(0, 1, 2, 3, 4, COUNT_REPEAT);
    r.callM2MLibExt = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryLibInt(0, 1, 2, 3, 4, COUNT_REPEAT);
    r.callM2MLibInt = (await ut.gasUsed()).toNumber();

    return r;
  }
  function getStatArray5UIntStructSample(): number[] {
    return [0, 1, 2, 3, 4];
  }
  async function createStatArray5UIntAll(ut: PassStatArray5Uint, data: number[]): Promise<IResults> {
    let r: IResults = {};
    await ut.callMemoryToMemoryInternal([data[0], data[1], data[2], data[3], data[4]], COUNT_REPEAT);
    r.callM2MInternal = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryPublic([data[0], data[1], data[2], data[3], data[4]], COUNT_REPEAT);
    r.callM2MPublic = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToCalldataInternal([data[0], data[1], data[2], data[3], data[4]], COUNT_REPEAT);
    r.callC2CInternal = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToCalldataPublic([data[0], data[1], data[2], data[3], data[4]], COUNT_REPEAT);
    r.callC2CPublic = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToMemoryInternal([data[0], data[1], data[2], data[3], data[4]], COUNT_REPEAT);
    r.callC2MInternal = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToMemoryPublic([data[0], data[1], data[2], data[3], data[4]], COUNT_REPEAT);
    r.callC2MPublic = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryLibExt([data[0], data[1], data[2], data[3], data[4]], COUNT_REPEAT);
    r.callM2MLibExt = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToCalldataLibExt([data[0], data[1], data[2], data[3], data[4]], COUNT_REPEAT);
    r.callM2CLibExt = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryLibInt([data[0], data[1], data[2], data[3], data[4]], COUNT_REPEAT);
    r.callM2MLibInt = (await ut.gasUsed()).toNumber();

    return r;
  }

  describe("PassStruct4Int", () => {
    it("callMemoryToMemoryInternal", async () => {
      await ut4.callMemoryToMemoryInternal(getStruct4IntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryInternal", await ut4.gasUsed());
    });

    it("callMemoryToMemoryPublic", async () => {
      await ut4.callMemoryToMemoryPublic(getStruct4IntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryPublic", await ut4.gasUsed());
    });

    it("callCalldataToCalldataInternal", async () => {
      await ut4.callCalldataToCalldataInternal(getStruct4IntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToCalldataInternal", await ut4.gasUsed());
    });

    it("callCalldataToCalldataPublic", async () => {
      await ut4.callCalldataToCalldataPublic(getStruct4IntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToCalldataPublic", await ut4.gasUsed());
    });

    it("callCalldataToMemoryInternal", async () => {
      await ut4.callCalldataToMemoryInternal(getStruct4IntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToMemoryInternal", await ut4.gasUsed());
    });

    it("callCalldataToMemoryPublic", async () => {
      await ut4.callCalldataToMemoryPublic(getStruct4IntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToMemoryPublic", await ut4.gasUsed());
    });

    it("callMemoryToMemoryLibExt", async () => {
      await ut4.callMemoryToMemoryLibExt(getStruct4IntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryLibExt", await ut4.gasUsed());
    });

    it("callMemoryToCalldataLibExt", async () => {
      await ut4.callMemoryToCalldataLibExt(getStruct4IntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToCalldataLibExt", await ut4.gasUsed());
    });

    it("callMemoryToMemoryLibInt", async () => {
      await ut4.callMemoryToMemoryLibInt(getStruct4IntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryLibInt", await ut4.gasUsed());
    });

    it("createAll", async () => {
      const r: IResults = await createStruct4IntAll(ut4, getStruct4IntStructSample());
      console.log(r);
    });
  });
  describe("PassComplexOrdered - arrays have length 0", () => {
    it("callMemoryToMemoryInternal", async () => {
      await utC1.callMemoryToMemoryInternal(getComplexStructSample(0), COUNT_REPEAT);
      console.log("callMemoryToMemoryInternal", await utC1.gasUsed());
    });

    it("callMemoryToMemoryPublic", async () => {
      await utC1.callMemoryToMemoryPublic(getComplexStructSample(0), COUNT_REPEAT);
      console.log("callMemoryToMemoryPublic", await utC1.gasUsed());
    });

    it("callCalldataToCalldataInternal", async () => {
      await utC1.callCalldataToCalldataInternal(getComplexStructSample(0), COUNT_REPEAT);
      console.log("callCalldataToCalldataInternal", await utC1.gasUsed());
    });

    it("callCalldataToCalldataPublic", async () => {
      await utC1.callCalldataToCalldataPublic(getComplexStructSample(0), COUNT_REPEAT);
      console.log("callCalldataToCalldataPublic", await utC1.gasUsed());
    });

    it("callCalldataToMemoryInternal", async () => {
      await utC1.callCalldataToMemoryInternal(getComplexStructSample(0), COUNT_REPEAT);
      console.log("callCalldataToMemoryInternal", await utC1.gasUsed());
    });

    it("callCalldataToMemoryPublic", async () => {
      await utC1.callCalldataToMemoryPublic(getComplexStructSample(0), COUNT_REPEAT);
      console.log("callCalldataToMemoryPublic", await utC1.gasUsed());
    });

    it("callMemoryToMemoryLibExt", async () => {
      await utC1.callMemoryToMemoryLibExt(getComplexStructSample(0), COUNT_REPEAT);
      console.log("callMemoryToMemoryLibExt", await utC1.gasUsed());
    });

    it("callMemoryToCalldataLibExt", async () => {
      await utC1.callMemoryToCalldataLibExt(getComplexStructSample(0), COUNT_REPEAT);
      console.log("callMemoryToCalldataLibExt", await utC1.gasUsed());
    });

    it("callMemoryToMemoryLibInt", async () => {
      await utC1.callMemoryToMemoryLibInt(getComplexStructSample(0), COUNT_REPEAT);
      console.log("callMemoryToMemoryLibInt", await utC1.gasUsed());
    });

    it("createAll", async () => {
      const r: IResults = await createComplexAll(utC1, getComplexStructSample(0));
      console.log(r);
    });
  });

  describe("PassStruct10Uint", () => {
    it("callMemoryToMemoryInternal", async () => {
      await utS.callMemoryToMemoryInternal(getStruct10UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryInternal", await utS.gasUsed());
    });

    it("callMemoryToMemoryPublic", async () => {
      await utS.callMemoryToMemoryPublic(getStruct10UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryPublic", await utS.gasUsed());
    });

    it("callCalldataToCalldataInternal", async () => {
      await utS.callCalldataToCalldataInternal(getStruct10UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToCalldataInternal", await utS.gasUsed());
    });

    it("callCalldataToCalldataPublic", async () => {
      await utS.callCalldataToCalldataPublic(getStruct10UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToCalldataPublic", await utS.gasUsed());
    });

    it("callCalldataToMemoryInternal", async () => {
      await utS.callCalldataToMemoryInternal(getStruct10UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToMemoryInternal", await utS.gasUsed());
    });

    it("callCalldataToMemoryPublic", async () => {
      await utS.callCalldataToMemoryPublic(getStruct10UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToMemoryPublic", await utS.gasUsed());
    });

    it("callMemoryToMemoryLibExt", async () => {
      await utS.callMemoryToMemoryLibExt(getStruct10UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryLibExt", await utS.gasUsed());
    });

    it("callMemoryToCalldataLibExt", async () => {
      await utS.callMemoryToCalldataLibExt(getStruct10UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToCalldataLibExt", await utS.gasUsed());
    });

    it("callMemoryToMemoryLibInt", async () => {
      await utS.callMemoryToMemoryLibInt(getStruct10UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryLibInt", await utS.gasUsed());
    });

    it("createAll", async () => {
      const r: IResults = await createStruct10UIntAll(utS, getStruct10UIntStructSample());
      console.log(r);
    });
  });
  describe("PassPureVars10Uint", () => {
    it("callMemoryToMemoryInternal", async () => {
      await utPV.callMemoryToMemoryInternal(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, COUNT_REPEAT);
      console.log("callMemoryToMemoryInternal", await utPV.gasUsed());
    });

    it("callMemoryToMemoryPublic", async () => {
      await utPV.callMemoryToMemoryPublic(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, COUNT_REPEAT);
      console.log("callMemoryToMemoryPublic", await utPV.gasUsed());
    });

    it("callMemoryToMemoryLibExt", async () => {
      await utPV.callMemoryToMemoryLibExt(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, COUNT_REPEAT);
      console.log("callMemoryToMemoryLibExt", await utPV.gasUsed());
    });

    it("callMemoryToMemoryLibInt", async () => {
      await utPV.callMemoryToMemoryLibInt(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, COUNT_REPEAT);
      console.log("callMemoryToMemoryLibInt", await utPV.gasUsed());
    });

    it("createAll", async () => {
      const r: IResults = await createPureVars10UintAll(utPV);
      console.log(r);
    });
  });
  describe("PassDynArray10Uint", () => {
    it("callMemoryToMemoryInternal", async () => {
      await utDA.callMemoryToMemoryInternal(getDynArrayUIntStructSample(10), COUNT_REPEAT);
      console.log("callMemoryToMemoryInternal", await utDA.gasUsed());
    });

    it("callMemoryToMemoryPublic", async () => {
      await utDA.callMemoryToMemoryPublic(getDynArrayUIntStructSample(10), COUNT_REPEAT);
      console.log("callMemoryToMemoryPublic", await utDA.gasUsed());
    });

    it("callCalldataToCalldataInternal", async () => {
      await utDA.callCalldataToCalldataInternal(getDynArrayUIntStructSample(10), COUNT_REPEAT);
      console.log("callCalldataToCalldataInternal", await utDA.gasUsed());
    });

    it("callCalldataToCalldataPublic", async () => {
      await utDA.callCalldataToCalldataPublic(getDynArrayUIntStructSample(10), COUNT_REPEAT);
      console.log("callCalldataToCalldataPublic", await utDA.gasUsed());
    });

    it("callCalldataToMemoryInternal", async () => {
      await utDA.callCalldataToMemoryInternal(getDynArrayUIntStructSample(10), COUNT_REPEAT);
      console.log("callCalldataToMemoryInternal", await utDA.gasUsed());
    });

    it("callCalldataToMemoryPublic", async () => {
      await utDA.callCalldataToMemoryPublic(getDynArrayUIntStructSample(10), COUNT_REPEAT);
      console.log("callCalldataToMemoryPublic", await utDA.gasUsed());
    });

    it("callMemoryToMemoryLibExt", async () => {
      await utDA.callMemoryToMemoryLibExt(getDynArrayUIntStructSample(10), COUNT_REPEAT);
      console.log("callMemoryToMemoryLibExt", await utDA.gasUsed());
    });

    it("callMemoryToCalldataLibExt", async () => {
      await utDA.callMemoryToCalldataLibExt(getDynArrayUIntStructSample(10), COUNT_REPEAT);
      console.log("callMemoryToCalldataLibExt", await utDA.gasUsed());
    });

    it("callMemoryToMemoryLibInt", async () => {
      await utDA.callMemoryToMemoryLibInt(getDynArrayUIntStructSample(10), COUNT_REPEAT);
      console.log("callMemoryToMemoryLibInt", await utDA.gasUsed());
    });

    it("createAll", async () => {
      const r: IResults = await createDynArrayUIntAll(utDA, getDynArrayUIntStructSample(10));
      console.log(r);
    });
  });
  describe("PassStatArray10Uint", () => {
    it("callMemoryToMemoryInternal", async () => {
      await utSA.callMemoryToMemoryInternal(getStatArray10UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryInternal", await utSA.gasUsed());
    });

    it("callMemoryToMemoryPublic", async () => {
      await utSA.callMemoryToMemoryPublic(getStatArray10UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryPublic", await utSA.gasUsed());
    });

    it("callCalldataToCalldataInternal", async () => {
      await utSA.callCalldataToCalldataInternal(getStatArray10UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToCalldataInternal", await utSA.gasUsed());
    });

    it("callCalldataToCalldataPublic", async () => {
      await utSA.callCalldataToCalldataPublic(getStatArray10UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToCalldataPublic", await utSA.gasUsed());
    });

    it("callCalldataToMemoryInternal", async () => {
      await utSA.callCalldataToMemoryInternal(getStatArray10UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToMemoryInternal", await utSA.gasUsed());
    });

    it("callCalldataToMemoryPublic", async () => {
      await utSA.callCalldataToMemoryPublic(getStatArray10UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToMemoryPublic", await utSA.gasUsed());
    });

    it("callMemoryToMemoryLibExt", async () => {
      await utSA.callMemoryToMemoryLibExt(getStatArray10UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryLibExt", await utSA.gasUsed());
    });

    it("callMemoryToCalldataLibExt", async () => {
      await utSA.callMemoryToCalldataLibExt(getStatArray10UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToCalldataLibExt", await utSA.gasUsed());
    });

    it("callMemoryToMemoryLibInt", async () => {
      await utSA.callMemoryToMemoryLibInt(getStatArray10UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryLibInt", await utSA.gasUsed());
    });

    it("createAll", async () => {
      const r: IResults = await createStatArray10UIntAll(utSA, getStatArray10UIntStructSample());
      console.log(r);
    });
  });

  describe("PassStruct10Uint8", () => {
    it("callMemoryToMemoryInternal", async () => {
      await utS8.callMemoryToMemoryInternal(getStruct10UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryInternal", await utS8.gasUsed());
    });

    it("callMemoryToMemoryPublic", async () => {
      await utS8.callMemoryToMemoryPublic(getStruct10UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryPublic", await utS8.gasUsed());
    });

    it("callCalldataToCalldataInternal", async () => {
      await utS8.callCalldataToCalldataInternal(getStruct10UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToCalldataInternal", await utS8.gasUsed());
    });

    it("callCalldataToCalldataPublic", async () => {
      await utS8.callCalldataToCalldataPublic(getStruct10UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToCalldataPublic", await utS8.gasUsed());
    });

    it("callCalldataToMemoryInternal", async () => {
      await utS8.callCalldataToMemoryInternal(getStruct10UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToMemoryInternal", await utS8.gasUsed());
    });

    it("callCalldataToMemoryPublic", async () => {
      await utS8.callCalldataToMemoryPublic(getStruct10UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToMemoryPublic", await utS8.gasUsed());
    });

    it("callMemoryToMemoryLibExt", async () => {
      await utS8.callMemoryToMemoryLibExt(getStruct10UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryLibExt", await utS8.gasUsed());
    });

    it("callMemoryToCalldataLibExt", async () => {
      await utS8.callMemoryToCalldataLibExt(getStruct10UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToCalldataLibExt", await utS8.gasUsed());
    });

    it("callMemoryToMemoryLibInt", async () => {
      await utS8.callMemoryToMemoryLibInt(getStruct10UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryLibInt", await utS8.gasUsed());
    });

    it("createAll", async () => {
      const r: IResults = await createStruct10UIntAll(utS8, getStruct10UIntStructSample());
      console.log(r);
    });
  });
  describe("PassPureVars10Uint8", () => {
    it("callMemoryToMemoryInternal", async () => {
      await utPV8.callMemoryToMemoryInternal(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, COUNT_REPEAT);
      console.log("callMemoryToMemoryInternal", await utPV8.gasUsed());
    });

    it("callMemoryToMemoryPublic", async () => {
      await utPV8.callMemoryToMemoryPublic(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, COUNT_REPEAT);
      console.log("callMemoryToMemoryPublic", await utPV8.gasUsed());
    });

    it("callMemoryToMemoryLibExt", async () => {
      await utPV8.callMemoryToMemoryLibExt(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, COUNT_REPEAT);
      console.log("callMemoryToMemoryLibExt", await utPV8.gasUsed());
    });

    it("callMemoryToMemoryLibInt", async () => {
      await utPV8.callMemoryToMemoryLibInt(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, COUNT_REPEAT);
      console.log("callMemoryToMemoryLibInt", await utPV8.gasUsed());
    });

    it("createAll", async () => {
      const r: IResults = await createPureVars10UintAll(utPV8);
      console.log(r);
    });
  });
  describe("PassDynArray10Uint8", () => {
    it("callMemoryToMemoryInternal", async () => {
      await utDA8.callMemoryToMemoryInternal(getDynArrayUIntStructSample(10), COUNT_REPEAT);
      console.log("callMemoryToMemoryInternal", await utDA8.gasUsed());
    });

    it("callMemoryToMemoryPublic", async () => {
      await utDA8.callMemoryToMemoryPublic(getDynArrayUIntStructSample(10), COUNT_REPEAT);
      console.log("callMemoryToMemoryPublic", await utDA8.gasUsed());
    });

    it("callCalldataToCalldataInternal", async () => {
      await utDA8.callCalldataToCalldataInternal(getDynArrayUIntStructSample(10), COUNT_REPEAT);
      console.log("callCalldataToCalldataInternal", await utDA8.gasUsed());
    });

    it("callCalldataToCalldataPublic", async () => {
      await utDA8.callCalldataToCalldataPublic(getDynArrayUIntStructSample(10), COUNT_REPEAT);
      console.log("callCalldataToCalldataPublic", await utDA8.gasUsed());
    });

    it("callCalldataToMemoryInternal", async () => {
      await utDA8.callCalldataToMemoryInternal(getDynArrayUIntStructSample(10), COUNT_REPEAT);
      console.log("callCalldataToMemoryInternal", await utDA8.gasUsed());
    });

    it("callCalldataToMemoryPublic", async () => {
      await utDA8.callCalldataToMemoryPublic(getDynArrayUIntStructSample(10), COUNT_REPEAT);
      console.log("callCalldataToMemoryPublic", await utDA8.gasUsed());
    });

    it("callMemoryToMemoryLibExt", async () => {
      await utDA8.callMemoryToMemoryLibExt(getDynArrayUIntStructSample(10), COUNT_REPEAT);
      console.log("callMemoryToMemoryLibExt", await utDA8.gasUsed());
    });

    it("callMemoryToCalldataLibExt", async () => {
      await utDA8.callMemoryToCalldataLibExt(getDynArrayUIntStructSample(10), COUNT_REPEAT);
      console.log("callMemoryToCalldataLibExt", await utDA8.gasUsed());
    });

    it("callMemoryToMemoryLibInt", async () => {
      await utDA8.callMemoryToMemoryLibInt(getDynArrayUIntStructSample(10), COUNT_REPEAT);
      console.log("callMemoryToMemoryLibInt", await utDA8.gasUsed());
    });

    it("createAll", async () => {
      const r: IResults = await createDynArrayUIntAll(utDA8, getDynArrayUIntStructSample(10));
      console.log(r);
    });
  });
  describe("PassStatArray10Uint8", () => {
    it("callMemoryToMemoryInternal", async () => {
      await utSA8.callMemoryToMemoryInternal(getStatArray10UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryInternal", await utSA8.gasUsed());
    });

    it("callMemoryToMemoryPublic", async () => {
      await utSA8.callMemoryToMemoryPublic(getStatArray10UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryPublic", await utSA8.gasUsed());
    });

    it("callCalldataToCalldataInternal", async () => {
      await utSA8.callCalldataToCalldataInternal(getStatArray10UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToCalldataInternal", await utSA8.gasUsed());
    });

    it("callCalldataToCalldataPublic", async () => {
      await utSA8.callCalldataToCalldataPublic(getStatArray10UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToCalldataPublic", await utSA8.gasUsed());
    });

    it("callCalldataToMemoryInternal", async () => {
      await utSA8.callCalldataToMemoryInternal(getStatArray10UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToMemoryInternal", await utSA8.gasUsed());
    });

    it("callCalldataToMemoryPublic", async () => {
      await utSA8.callCalldataToMemoryPublic(getStatArray10UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToMemoryPublic", await utSA8.gasUsed());
    });

    it("callMemoryToMemoryLibExt", async () => {
      await utSA8.callMemoryToMemoryLibExt(getStatArray10UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryLibExt", await utSA8.gasUsed());
    });

    it("callMemoryToCalldataLibExt", async () => {
      await utSA8.callMemoryToCalldataLibExt(getStatArray10UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToCalldataLibExt", await utSA8.gasUsed());
    });

    it("callMemoryToMemoryLibInt", async () => {
      await utSA8.callMemoryToMemoryLibInt(getStatArray10UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryLibInt", await utSA8.gasUsed());
    });

    it("createAll", async () => {
      const r: IResults = await createStatArray10UIntAll(utSA8, getStatArray10UIntStructSample());
      console.log(r);
    });
  });

  describe("PassStruct20Uint", () => {
    it("callMemoryToMemoryInternal", async () => {
      await utS20.callMemoryToMemoryInternal(getStruct20UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryInternal", await utS20.gasUsed());
    });

    it("callMemoryToMemoryPublic", async () => {
      await utS20.callMemoryToMemoryPublic(getStruct20UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryPublic", await utS20.gasUsed());
    });

    it("callCalldataToCalldataInternal", async () => {
      await utS20.callCalldataToCalldataInternal(getStruct20UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToCalldataInternal", await utS20.gasUsed());
    });

    it("callCalldataToCalldataPublic", async () => {
      await utS20.callCalldataToCalldataPublic(getStruct20UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToCalldataPublic", await utS20.gasUsed());
    });

    it("callCalldataToMemoryInternal", async () => {
      await utS20.callCalldataToMemoryInternal(getStruct20UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToMemoryInternal", await utS20.gasUsed());
    });

    it("callCalldataToMemoryPublic", async () => {
      await utS20.callCalldataToMemoryPublic(getStruct20UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToMemoryPublic", await utS20.gasUsed());
    });

    it("callMemoryToMemoryLibExt", async () => {
      await utS20.callMemoryToMemoryLibExt(getStruct20UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryLibExt", await utS20.gasUsed());
    });

    it("callMemoryToCalldataLibExt", async () => {
      await utS20.callMemoryToCalldataLibExt(getStruct20UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToCalldataLibExt", await utS20.gasUsed());
    });

    it("callMemoryToMemoryLibInt", async () => {
      await utS20.callMemoryToMemoryLibInt(getStruct20UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryLibInt", await utS20.gasUsed());
    });

    it("createAll", async () => {
      const r: IResults = await createStruct20UIntAll(utS20, getStruct20UIntStructSample());
      console.log(r);
    });
  });
  describe("PassStruct30Uint", () => {
    it("callMemoryToMemoryInternal", async () => {
      await utS30.callMemoryToMemoryInternal(getStruct30UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryInternal", await utS30.gasUsed());
    });

    it("callMemoryToMemoryPublic", async () => {
      await utS30.callMemoryToMemoryPublic(getStruct30UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryPublic", await utS30.gasUsed());
    });

    it("callCalldataToCalldataInternal", async () => {
      await utS30.callCalldataToCalldataInternal(getStruct30UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToCalldataInternal", await utS30.gasUsed());
    });

    it("callCalldataToCalldataPublic", async () => {
      await utS30.callCalldataToCalldataPublic(getStruct30UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToCalldataPublic", await utS30.gasUsed());
    });

    it("callCalldataToMemoryInternal", async () => {
      await utS30.callCalldataToMemoryInternal(getStruct30UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToMemoryInternal", await utS30.gasUsed());
    });

    it("callCalldataToMemoryPublic", async () => {
      await utS30.callCalldataToMemoryPublic(getStruct30UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToMemoryPublic", await utS30.gasUsed());
    });

    it("callMemoryToMemoryLibExt", async () => {
      await utS30.callMemoryToMemoryLibExt(getStruct30UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryLibExt", await utS30.gasUsed());
    });

    it("callMemoryToCalldataLibExt", async () => {
      await utS30.callMemoryToCalldataLibExt(getStruct30UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToCalldataLibExt", await utS30.gasUsed());
    });

    it("callMemoryToMemoryLibInt", async () => {
      await utS30.callMemoryToMemoryLibInt(getStruct30UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryLibInt", await utS30.gasUsed());
    });

    it("createAll", async () => {
      const r: IResults = await createStruct30UIntAll(utS30, getStruct30UIntStructSample());
      console.log(r);
    });
  });

  describe("PassStruct10Int32", () => {
    it("callMemoryToMemoryInternal", async () => {
      await utS32.callMemoryToMemoryInternal(getStruct10UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryInternal", await utS32.gasUsed());
    });

    it("callMemoryToMemoryPublic", async () => {
      await utS32.callMemoryToMemoryPublic(getStruct10UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryPublic", await utS32.gasUsed());
    });

    it("callCalldataToCalldataInternal", async () => {
      await utS32.callCalldataToCalldataInternal(getStruct10UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToCalldataInternal", await utS32.gasUsed());
    });

    it("callCalldataToCalldataPublic", async () => {
      await utS32.callCalldataToCalldataPublic(getStruct10UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToCalldataPublic", await utS32.gasUsed());
    });

    it("callCalldataToMemoryInternal", async () => {
      await utS32.callCalldataToMemoryInternal(getStruct10UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToMemoryInternal", await utS32.gasUsed());
    });

    it("callCalldataToMemoryPublic", async () => {
      await utS32.callCalldataToMemoryPublic(getStruct10UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToMemoryPublic", await utS32.gasUsed());
    });

    it("callMemoryToMemoryLibExt", async () => {
      await utS32.callMemoryToMemoryLibExt(getStruct10UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryLibExt", await utS32.gasUsed());
    });

    it("callMemoryToCalldataLibExt", async () => {
      await utS32.callMemoryToCalldataLibExt(getStruct10UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToCalldataLibExt", await utS32.gasUsed());
    });

    it("callMemoryToMemoryLibInt", async () => {
      await utS32.callMemoryToMemoryLibInt(getStruct10UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryLibInt", await utS32.gasUsed());
    });

    it("createAll", async () => {
      const r: IResults = await createStruct10UIntAll(utS32, getStruct10UIntStructSample());
      console.log(r);
    });
  });
  describe("PassPureVars10Int32", () => {
    it("callMemoryToMemoryInternal", async () => {
      await utPV32.callMemoryToMemoryInternal(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, COUNT_REPEAT);
      console.log("callMemoryToMemoryInternal", await utPV32.gasUsed());
    });

    it("callMemoryToMemoryPublic", async () => {
      await utPV32.callMemoryToMemoryPublic(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, COUNT_REPEAT);
      console.log("callMemoryToMemoryPublic", await utPV32.gasUsed());
    });

    it("callMemoryToMemoryLibExt", async () => {
      await utPV32.callMemoryToMemoryLibExt(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, COUNT_REPEAT);
      console.log("callMemoryToMemoryLibExt", await utPV32.gasUsed());
    });

    it("callMemoryToMemoryLibInt", async () => {
      await utPV32.callMemoryToMemoryLibInt(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, COUNT_REPEAT);
      console.log("callMemoryToMemoryLibInt", await utPV32.gasUsed());
    });

    it("createAll", async () => {
      const r: IResults = await createPureVars10UintAll(utPV32);
      console.log(r);
    });
  });
  describe("PassDynArray10Int32", () => {
    it("callMemoryToMemoryInternal", async () => {
      await utDA32.callMemoryToMemoryInternal(getDynArrayUIntStructSample(10), COUNT_REPEAT);
      console.log("callMemoryToMemoryInternal", await utDA32.gasUsed());
    });

    it("callMemoryToMemoryPublic", async () => {
      await utDA32.callMemoryToMemoryPublic(getDynArrayUIntStructSample(10), COUNT_REPEAT);
      console.log("callMemoryToMemoryPublic", await utDA32.gasUsed());
    });

    it("callCalldataToCalldataInternal", async () => {
      await utDA32.callCalldataToCalldataInternal(getDynArrayUIntStructSample(10), COUNT_REPEAT);
      console.log("callCalldataToCalldataInternal", await utDA32.gasUsed());
    });

    it("callCalldataToCalldataPublic", async () => {
      await utDA32.callCalldataToCalldataPublic(getDynArrayUIntStructSample(10), COUNT_REPEAT);
      console.log("callCalldataToCalldataPublic", await utDA32.gasUsed());
    });

    it("callCalldataToMemoryInternal", async () => {
      await utDA32.callCalldataToMemoryInternal(getDynArrayUIntStructSample(10), COUNT_REPEAT);
      console.log("callCalldataToMemoryInternal", await utDA32.gasUsed());
    });

    it("callCalldataToMemoryPublic", async () => {
      await utDA32.callCalldataToMemoryPublic(getDynArrayUIntStructSample(10), COUNT_REPEAT);
      console.log("callCalldataToMemoryPublic", await utDA32.gasUsed());
    });

    it("callMemoryToMemoryLibExt", async () => {
      await utDA32.callMemoryToMemoryLibExt(getDynArrayUIntStructSample(10), COUNT_REPEAT);
      console.log("callMemoryToMemoryLibExt", await utDA32.gasUsed());
    });

    it("callMemoryToCalldataLibExt", async () => {
      await utDA32.callMemoryToCalldataLibExt(getDynArrayUIntStructSample(10), COUNT_REPEAT);
      console.log("callMemoryToCalldataLibExt", await utDA32.gasUsed());
    });

    it("callMemoryToMemoryLibInt", async () => {
      await utDA32.callMemoryToMemoryLibInt(getDynArrayUIntStructSample(10), COUNT_REPEAT);
      console.log("callMemoryToMemoryLibInt", await utDA32.gasUsed());
    });

    it("createAll", async () => {
      const r: IResults = await createDynArrayUIntAll(utDA32, getDynArrayUIntStructSample(10));
      console.log(r);
    });
  });
  describe("PassStatArray10Int32", () => {
    it("callMemoryToMemoryInternal", async () => {
      await utSA32.callMemoryToMemoryInternal(getStatArray10UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryInternal", await utSA32.gasUsed());
    });

    it("callMemoryToMemoryPublic", async () => {
      await utSA32.callMemoryToMemoryPublic(getStatArray10UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryPublic", await utSA32.gasUsed());
    });

    it("callCalldataToCalldataInternal", async () => {
      await utSA32.callCalldataToCalldataInternal(getStatArray10UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToCalldataInternal", await utSA32.gasUsed());
    });

    it("callCalldataToCalldataPublic", async () => {
      await utSA32.callCalldataToCalldataPublic(getStatArray10UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToCalldataPublic", await utSA32.gasUsed());
    });

    it("callCalldataToMemoryInternal", async () => {
      await utSA32.callCalldataToMemoryInternal(getStatArray10UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToMemoryInternal", await utSA32.gasUsed());
    });

    it("callCalldataToMemoryPublic", async () => {
      await utSA32.callCalldataToMemoryPublic(getStatArray10UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToMemoryPublic", await utSA32.gasUsed());
    });

    it("callMemoryToMemoryLibExt", async () => {
      await utSA32.callMemoryToMemoryLibExt(getStatArray10UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryLibExt", await utSA32.gasUsed());
    });

    it("callMemoryToCalldataLibExt", async () => {
      await utSA32.callMemoryToCalldataLibExt(getStatArray10UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToCalldataLibExt", await utSA32.gasUsed());
    });

    it("callMemoryToMemoryLibInt", async () => {
      await utSA32.callMemoryToMemoryLibInt(getStatArray10UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryLibInt", await utSA32.gasUsed());
    });

    it("createAll", async () => {
      const r: IResults = await createStatArray10UIntAll(utSA32, getStatArray10UIntStructSample());
      console.log(r);
    });
  });

  describe("PassStruct1Uint", () => {
    it("callMemoryToMemoryInternal", async () => {
      await utS1.callMemoryToMemoryInternal(getStruct1UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryInternal", await utS1.gasUsed());
    });

    it("callMemoryToMemoryPublic", async () => {
      await utS1.callMemoryToMemoryPublic(getStruct1UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryPublic", await utS1.gasUsed());
    });

    it("callCalldataToCalldataInternal", async () => {
      await utS1.callCalldataToCalldataInternal(getStruct1UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToCalldataInternal", await utS1.gasUsed());
    });

    it("callCalldataToCalldataPublic", async () => {
      await utS1.callCalldataToCalldataPublic(getStruct1UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToCalldataPublic", await utS1.gasUsed());
    });

    it("callCalldataToMemoryInternal", async () => {
      await utS1.callCalldataToMemoryInternal(getStruct1UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToMemoryInternal", await utS1.gasUsed());
    });

    it("callCalldataToMemoryPublic", async () => {
      await utS1.callCalldataToMemoryPublic(getStruct1UIntStructSample(), COUNT_REPEAT);
      console.log("callCalldataToMemoryPublic", await utS1.gasUsed());
    });

    it("callMemoryToMemoryLibExt", async () => {
      await utS1.callMemoryToMemoryLibExt(getStruct1UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryLibExt", await utS1.gasUsed());
    });

    it("callMemoryToCalldataLibExt", async () => {
      await utS1.callMemoryToCalldataLibExt(getStruct1UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToCalldataLibExt", await utS1.gasUsed());
    });

    it("callMemoryToMemoryLibInt", async () => {
      await utS1.callMemoryToMemoryLibInt(getStruct1UIntStructSample(), COUNT_REPEAT);
      console.log("callMemoryToMemoryLibInt", await utS1.gasUsed());
    });

    it("createAll", async () => {
      const r: IResults = await createStruct1UIntAll(utS1, getStruct1UIntStructSample());
      console.log(r);
    });
  });
  describe("PassPureVarsEmpty", () => {
    it("callMemoryToMemoryInternal", async () => {
      await utPV0.callMemoryToMemoryInternal(COUNT_REPEAT);
      console.log("callMemoryToMemoryInternal", await utPV0.gasUsed());
    });

    it("callMemoryToMemoryPublic", async () => {
      await utPV0.callMemoryToMemoryPublic(COUNT_REPEAT);
      console.log("callMemoryToMemoryPublic", await utPV0.gasUsed());
    });

    it("callMemoryToMemoryLibExt", async () => {
      await utPV0.callMemoryToMemoryLibExt(COUNT_REPEAT);
      console.log("callMemoryToMemoryLibExt", await utPV0.gasUsed());
    });

    it("callMemoryToMemoryLibInt", async () => {
      await utPV0.callMemoryToMemoryLibInt(COUNT_REPEAT);
      console.log("callMemoryToMemoryLibInt", await utPV0.gasUsed());
    });

    it("createAll", async () => {
      const r: IResults = await createPureVarsEmptyAll(utPV0);
      console.log(r);
    });
  });
  describe("PassDynArray0Uint", () => {
    it("callMemoryToMemoryInternal", async () => {
      await utDA.callMemoryToMemoryInternal(getDynArrayUIntStructSample(0), COUNT_REPEAT);
      console.log("callMemoryToMemoryInternal", await utDA.gasUsed());
    });

    it("callMemoryToMemoryPublic", async () => {
      await utDA.callMemoryToMemoryPublic(getDynArrayUIntStructSample(0), COUNT_REPEAT);
      console.log("callMemoryToMemoryPublic", await utDA.gasUsed());
    });

    it("callCalldataToCalldataInternal", async () => {
      await utDA.callCalldataToCalldataInternal(getDynArrayUIntStructSample(0), COUNT_REPEAT);
      console.log("callCalldataToCalldataInternal", await utDA.gasUsed());
    });

    it("callCalldataToCalldataPublic", async () => {
      await utDA.callCalldataToCalldataPublic(getDynArrayUIntStructSample(0), COUNT_REPEAT);
      console.log("callCalldataToCalldataPublic", await utDA.gasUsed());
    });

    it("callCalldataToMemoryInternal", async () => {
      await utDA.callCalldataToMemoryInternal(getDynArrayUIntStructSample(0), COUNT_REPEAT);
      console.log("callCalldataToMemoryInternal", await utDA.gasUsed());
    });

    it("callCalldataToMemoryPublic", async () => {
      await utDA.callCalldataToMemoryPublic(getDynArrayUIntStructSample(0), COUNT_REPEAT);
      console.log("callCalldataToMemoryPublic", await utDA.gasUsed());
    });

    it("callMemoryToMemoryLibExt", async () => {
      await utDA.callMemoryToMemoryLibExt(getDynArrayUIntStructSample(0), COUNT_REPEAT);
      console.log("callMemoryToMemoryLibExt", await utDA.gasUsed());
    });

    it("callMemoryToCalldataLibExt", async () => {
      await utDA.callMemoryToCalldataLibExt(getDynArrayUIntStructSample(0), COUNT_REPEAT);
      console.log("callMemoryToCalldataLibExt", await utDA.gasUsed());
    });

    it("callMemoryToMemoryLibInt", async () => {
      await utDA.callMemoryToMemoryLibInt(getDynArrayUIntStructSample(0), COUNT_REPEAT);
      console.log("callMemoryToMemoryLibInt", await utDA.gasUsed());
    });

    it("createAll", async () => {
      const r: IResults = await createDynArrayUIntAll(utDA, getDynArrayUIntStructSample(10));
      console.log(r);
    });
  });

  describe("save to csv", () => {
    it("save", async () => {
      const rStruct4Int = await createStruct4IntAll(ut4, getStruct4IntStructSample());
      const rComplexOrdered0 = await createComplexAll(utC1, getComplexStructSample(0));
      const rComplexOrdered100 = await createComplexAll(utC1, getComplexStructSample(100));
      const rComplexUnordered0 = await createComplexAll(utCU, getComplexStructSample(0));
      const rComplexUnordered100 = await createComplexAll(utCU, getComplexStructSample(100));

      const rStruct10UInt = await createStruct10UIntAll(utS, getStruct10UIntStructSample());
      const rStruct20UInt = await createStruct20UIntAll(utS20, getStruct20UIntStructSample());
      const rStruct30UInt = await createStruct30UIntAll(utS30, getStruct30UIntStructSample());

      const rPureVars10Uint = await await createPureVars10UintAll(utPV);
      const rStatArray10Uint = await createStatArray10UIntAll(utSA, getStatArray10UIntStructSample());
      const rDynArray10Uint = await createDynArrayUIntAll(utDA, getDynArrayUIntStructSample(10));
      const rDynArray20Uint = await createDynArrayUIntAll(utDA, getDynArrayUIntStructSample(20));

      const rStruct5UInt = await createStruct5UIntAll(utS5, getStruct5UIntStructSample());
      const rPureVars5Uint = await await createPureVars5UintAll(utPV5);
      const rStatArray5Uint = await createStatArray5UIntAll(utSA5, getStatArray5UIntStructSample());
      const rDynArray5Uint = await createDynArrayUIntAll(utDA, getDynArrayUIntStructSample(5));

      const rStruct10UInt8 = await createStruct10UIntAll(utS8, getStruct10UIntStructSample());
      const rPureVars8 = await await createPureVars10UintAll(utPV8);
      const rStatArray10Uint8 = await createStatArray10UIntAll(utSA8, getStatArray10UIntStructSample());
      const rDynArray10Uint8 = await createDynArrayUIntAll(utDA8, getDynArrayUIntStructSample(10));
      const rDynArray20Uint8 = await createDynArrayUIntAll(utDA8, getDynArrayUIntStructSample(20));

      const rStruct10Int32 = await createStruct10UIntAll(utS32, getStruct10UIntStructSample());
      const rPureVars32 = await await createPureVars10UintAll(utPV32);
      const rStatArray10Int32 = await createStatArray10UIntAll(utSA32, getStatArray10UIntStructSample());
      const rDynArray10Int32 = await createDynArrayUIntAll(utDA32, getDynArrayUIntStructSample(10));
      const rDynArray20Int32 = await createDynArrayUIntAll(utDA32, getDynArrayUIntStructSample(20));

      const rPureVarsEmpty = await createPureVarsEmptyAll(utPV0);
      const rStruct1UInt = await createStruct1UIntAll(utS1, getStruct1UIntStructSample());
      const rDynArray0Uint = await createDynArrayUIntAll(utDA, getDynArrayUIntStructSample(0));

      SaveToCsv.save("./tmp/PassTest.csv", [
        // {title: "Struct4Int", obj: rStruct4Int},
        {title: "ComplexOrdered 0-items", obj: rComplexOrdered0},
        {title: "ComplexOrdered 100-items", obj: rComplexOrdered100},
        {title: "ComplexUnordered 0-items", obj: rComplexUnordered0},
        {title: "ComplexUnordered 100-items", obj: rComplexUnordered100},

        {title: "Struct5UInt256", obj: rStruct5UInt},
        {title: "Struct10UInt256", obj: rStruct10UInt},
        {title: "Struct20UInt256", obj: rStruct20UInt},
        {title: "Struct30UInt256", obj: rStruct30UInt},

        {title: "PureVars5Uint256", obj: rPureVars5Uint},
        {title: "StatArray5Uint256", obj: rStatArray5Uint},
        {title: "DynArray5Uint256", obj: rDynArray5Uint},

        {title: "PureVars10Uint256", obj: rPureVars10Uint},
        {title: "StatArray10Uint256", obj: rStatArray10Uint},
        {title: "DynArray10Uint256", obj: rDynArray10Uint},
        {title: "DynArray20Uint256", obj: rDynArray20Uint},

        {title: "Struct10Uint8", obj: rStruct10UInt8},
        {title: "PureVars10Uint8", obj: rPureVars8},
        {title: "StatArray10Uint8", obj: rStatArray10Uint8},
        {title: "DynArray10Uint8", obj: rDynArray10Uint8},
        {title: "DynArray20Uint8", obj: rDynArray20Uint8},

        {title: "Struct10Int32", obj: rStruct10Int32},
        {title: "PureVars10Int32", obj: rPureVars32},
        {title: "StatArray10Int32", obj: rStatArray10Int32},
        {title: "DynArray10Int32", obj: rDynArray10Int32},
        {title: "DynArray20Int32", obj: rDynArray20Int32},

        {title: "PureVarsEmpty", obj: rPureVarsEmpty},
        {title: "Struct1UInt", obj: rStruct1UInt},
        {title: "DynArray0Uint", obj: rDynArray0Uint},

      ]);
    });
  });
});