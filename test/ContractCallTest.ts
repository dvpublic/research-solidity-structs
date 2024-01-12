import {SignerWithAddress} from "@nomiclabs/hardhat-ethers/signers";
import {ContractCall, SlotReadWrite} from "../typechain";
import {ethers} from "hardhat";
import {DeployerUtils} from "../scripts/utils/DeployerUtils";
import {TimeUtils} from "../scripts/utils/TimeUtils";
import {SaveToCsv} from "../scripts/utils/SaveToCsv";
import {IDataTypes} from "../typechain/libs/PassLib";

describe("ContractCallTest", () => {
  let signer: SignerWithAddress;
  let ut: ContractCall;
  let snapshot: string;

  interface IResults {
    dynArrayUint256Memory?: number;
    dynArrayUint256Calldata?: number;
    dynArrayUint8Memory?: number;
    dynArrayUint8Calldata?: number;
    dynArrayInt32Memory?: number;
    dynArrayInt32Calldata?: number;
    dynArrayUint32Memory?: number;
    dynArrayUint16Memory?: number;
    dynArrayUint64Memory?: number;
    dynArrayUint32Calldata?: number;
    dynArrayUint16Calldata?: number;
    dynArrayUint64Calldata?: number;

    statArray10Uint256Memory?: number;
    statArray10Uint256Calldata?: number;
    statArray10Uint8Memory?: number;
    statArray10Uint8Calldata?: number;
    statArray10Int32Memory?: number;
    statArray10Int32Calldata?: number;
    statArray10Uint32Memory?: number;
    statArray10Uint16Memory?: number;
    statArray10Uint64Memory?: number;
    statArray10Uint32Calldata?: number;
    statArray10Uint16Calldata?: number;
    statArray10Uint64Calldata?: number;

    struct10Uint256Memory?: number;
    struct10Uint256Calldata?: number;
    struct10Uint8Memory?: number;
    struct10Uint8Calldata?: number;
    struct10Int32Memory?: number;
    struct10Int32Calldata?: number;
    struct10Uint32Memory?: number;
    struct10Uint16Memory?: number;
    struct10Uint64Memory?: number;
    struct10Uint32Calldata?: number;
    struct10Uint16Calldata?: number;
    struct10Uint64Calldata?: number;

    pureVars10Uint256?: number;
    pureVars10Uint8?: number;
    pureVars10Int32?: number;
    pureVars10Uint32?: number;
    pureVars10Uint16?: number;
    pureVars10Uint64?: number;

    structComplexOrderedMemory: number;
    structComplexOrderedCalldata: number;
    structComplexUnorderedMemory: number;
    structComplexUnorderedCalldata: number;
  }

  before(async function () {
    [signer] = await ethers.getSigners();

    ut = (await DeployerUtils.deployContract(signer, 'ContractCall',)) as ContractCall;
  })

  after(async function () {

  });

  beforeEach(async function () {
    snapshot = await TimeUtils.snapshot();
  })

  afterEach(async function () {
    await TimeUtils.rollback(snapshot);
  });

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

  it("save all", async () => {
    const r: IResults = {
      dynArrayUint256Memory: (await ut.estimateGas.dynArrayUint256Memory([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toNumber(),
      dynArrayUint256Calldata:  (await ut.estimateGas.dynArrayUint256Calldata([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toNumber(),
      dynArrayUint8Memory:  (await ut.estimateGas.dynArrayUint8Memory([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toNumber(),
      dynArrayUint8Calldata:  (await ut.estimateGas.dynArrayUint8Calldata([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toNumber(),
      dynArrayInt32Memory:  (await ut.estimateGas.dynArrayInt32Memory([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toNumber(),
      dynArrayInt32Calldata:  (await ut.estimateGas.dynArrayInt32Calldata([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toNumber(),
      dynArrayUint32Memory:  (await ut.estimateGas.dynArrayUint32Memory([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toNumber(),
      dynArrayUint16Memory:  (await ut.estimateGas.dynArrayUint16Memory([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toNumber(),
      dynArrayUint64Memory:  (await ut.estimateGas.dynArrayUint64Memory([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toNumber(),
      dynArrayUint32Calldata:  (await ut.estimateGas.dynArrayUint32Calldata([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toNumber(),
      dynArrayUint16Calldata:  (await ut.estimateGas.dynArrayUint16Calldata([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toNumber(),
      dynArrayUint64Calldata:  (await ut.estimateGas.dynArrayUint64Calldata([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toNumber(),

      statArray10Uint256Memory:  (await ut.estimateGas.statArray10Uint256Memory([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toNumber(),
      statArray10Uint256Calldata:  (await ut.estimateGas.statArray10Uint256Calldata([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toNumber(),
      statArray10Uint8Memory:  (await ut.estimateGas.statArray10Uint8Memory([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toNumber(),
      statArray10Uint8Calldata:  (await ut.estimateGas.statArray10Uint8Calldata([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toNumber(),
      statArray10Int32Memory:  (await ut.estimateGas.statArray10Int32Memory([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toNumber(),
      statArray10Int32Calldata:  (await ut.estimateGas.statArray10Int32Calldata([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toNumber(),
      statArray10Uint32Memory:  (await ut.estimateGas.statArray10Uint32Memory([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toNumber(),
      statArray10Uint16Memory:  (await ut.estimateGas.statArray10Uint16Memory([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toNumber(),
      statArray10Uint64Memory:  (await ut.estimateGas.statArray10Uint64Memory([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toNumber(),
      statArray10Uint32Calldata:  (await ut.estimateGas.statArray10Uint32Calldata([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toNumber(),
      statArray10Uint16Calldata:  (await ut.estimateGas.statArray10Uint16Calldata([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toNumber(),
      statArray10Uint64Calldata:  (await ut.estimateGas.statArray10Uint64Calldata([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toNumber(),

      struct10Uint256Memory:  (await ut.estimateGas.struct10Uint256Memory({a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9})).toNumber(),
      struct10Uint256Calldata:  (await ut.estimateGas.struct10Uint256Calldata({a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9})).toNumber(),
      struct10Uint8Memory:  (await ut.estimateGas.struct10Uint8Memory({a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9})).toNumber(),
      struct10Uint8Calldata:  (await ut.estimateGas.struct10Uint8Calldata({a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9})).toNumber(),
      struct10Int32Memory:  (await ut.estimateGas.struct10Int32Memory({a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9})).toNumber(),
      struct10Int32Calldata:  (await ut.estimateGas.struct10Int32Calldata({a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9})).toNumber(),
      struct10Uint32Memory:  (await ut.estimateGas.struct10Uint32Memory({a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9})).toNumber(),
      struct10Uint16Memory:  (await ut.estimateGas.struct10Uint16Memory({a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9})).toNumber(),
      struct10Uint64Memory:  (await ut.estimateGas.struct10Uint64Memory({a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9})).toNumber(),
      struct10Uint32Calldata:  (await ut.estimateGas.struct10Uint32Calldata({a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9})).toNumber(),
      struct10Uint16Calldata:  (await ut.estimateGas.struct10Uint16Calldata({a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9})).toNumber(),
      struct10Uint64Calldata:  (await ut.estimateGas.struct10Uint64Calldata({a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9})).toNumber(),

      pureVars10Uint256:  (await ut.estimateGas.pureVars10Uint256(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)).toNumber(),
      pureVars10Uint8:  (await ut.estimateGas.pureVars10Uint8(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)).toNumber(),
      pureVars10Int32:  (await ut.estimateGas.pureVars10Int32(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)).toNumber(),
      pureVars10Uint32:  (await ut.estimateGas.pureVars10Uint32(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)).toNumber(),
      pureVars10Uint16:  (await ut.estimateGas.pureVars10Uint16(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)).toNumber(),
      pureVars10Uint64:  (await ut.estimateGas.pureVars10Uint64(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)).toNumber(),

      structComplexOrderedMemory: (await ut.estimateGas.structComplexOrderedMemory(getComplexStructSample(10))).toNumber(),
      structComplexOrderedCalldata: (await ut.estimateGas.structComplexOrderedCalldata(getComplexStructSample(10))).toNumber(),
      structComplexUnorderedMemory: (await ut.estimateGas.structComplexUnorderedMemory(getComplexStructSample(10))).toNumber(),
      structComplexUnorderedCalldata: (await ut.estimateGas.structComplexUnorderedCalldata(getComplexStructSample(10))).toNumber(),
    }

    SaveToCsv.save("./tmp/ContractCallTest.csv", [
      {title: "ContractCallTest", obj: r},
    ]);

  });
});