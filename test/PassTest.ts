import {DeployerUtils} from "../scripts/utils/DeployerUtils";
import {
  PassComplex1,
  PassStruct10Uint,
  PassStruct4Int
} from "../typechain";
import {ethers} from "hardhat";
import {SignerWithAddress} from "@nomiclabs/hardhat-ethers/signers";
import {TimeUtils} from "../scripts/utils/TimeUtils";
import {IDataTypes} from "../typechain/libs/CreateLib";
import {SaveToCsv} from "../scripts/utils/SaveToCsv";

describe("PassTest", () => {
  const COUNT_ITEMS = 10;

  let signer: SignerWithAddress;
  let ut4: PassStruct4Int;
  let ut10: PassStruct10Uint;
  let utC1: PassComplex1;
  let snapshot: string;

  interface IResults {
    callMemoryToMemoryInternal?: number;
    callMemoryToMemoryPublic?: number;
    callCalldataToCalldataInternal?: number;
    callCalldataToCalldataPublic?: number;
    callCalldataToMemoryInternal?: number;
    callCalldataToMemoryPublic?: number;
    callMemoryToMemoryInternalLibExt?: number;
    callMemoryToCalldataInternalLibExt?: number;
    callMemoryToMemoryLibExt?: number;
    callMemoryToCalldataLibExt?: number;
    callMemoryToMemoryLibInt?: number;
  }

  before(async function () {
    [signer] = await ethers.getSigners();

    ut4 = (await DeployerUtils.deployContract(signer, 'PassStruct4Int',)) as PassStruct4Int;
    ut10 = (await DeployerUtils.deployContract(signer, 'PassStruct10Uint',)) as PassStruct10Uint;
    utC1 = (await DeployerUtils.deployContract(signer, 'PassComplex1',)) as PassComplex1;
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
    await ut.callMemoryToMemoryInternal(data, COUNT_ITEMS);
    r.callMemoryToMemoryInternal = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryPublic(data, COUNT_ITEMS);
    r.callMemoryToMemoryPublic = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToCalldataInternal(data, COUNT_ITEMS);
    r.callCalldataToCalldataInternal = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToCalldataPublic(data, COUNT_ITEMS);
    r.callCalldataToCalldataPublic = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToMemoryInternal(data, COUNT_ITEMS);
    r.callCalldataToMemoryInternal = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToMemoryPublic(data, COUNT_ITEMS);
    r.callCalldataToMemoryPublic = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryLibExt(data, COUNT_ITEMS);
    r.callMemoryToMemoryLibExt = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToCalldataLibExt(data, COUNT_ITEMS);
    r.callMemoryToCalldataLibExt = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryLibInt(data, COUNT_ITEMS);
    r.callMemoryToMemoryLibInt = (await ut.gasUsed()).toNumber();

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
  async function createStruct10UIntAll(ut: PassStruct10Uint, data: IDataTypes.Struct10UIntStruct): Promise<IResults> {
    let r: IResults = {};
    await ut.callMemoryToMemoryInternal(data, COUNT_ITEMS);
    r.callMemoryToMemoryInternal = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryPublic(data, COUNT_ITEMS);
    r.callMemoryToMemoryPublic = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToCalldataInternal(data, COUNT_ITEMS);
    r.callCalldataToCalldataInternal = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToCalldataPublic(data, COUNT_ITEMS);
    r.callCalldataToCalldataPublic = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToMemoryInternal(data, COUNT_ITEMS);
    r.callCalldataToMemoryInternal = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToMemoryPublic(data, COUNT_ITEMS);
    r.callCalldataToMemoryPublic = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryLibExt(data, COUNT_ITEMS);
    r.callMemoryToMemoryLibExt = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToCalldataLibExt(data, COUNT_ITEMS);
    r.callMemoryToCalldataLibExt = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryLibInt(data, COUNT_ITEMS);
    r.callMemoryToMemoryLibInt = (await ut.gasUsed()).toNumber();

    return r;
  }

  function getComplex1StructSample(): IDataTypes.Complex1Struct {
    return {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
      g: 7,
      h: 8,
      s4: {
        a: 1,
        b: 2,
        c: 3,
        d: 4
      }
    }
  }
  async function createComplex1All(ut: PassComplex1, data: IDataTypes.Complex1Struct): Promise<IResults> {
    let r: IResults = {};
    await ut.callMemoryToMemoryInternal(data, COUNT_ITEMS);
    r.callMemoryToMemoryInternal = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryPublic(data, COUNT_ITEMS);
    r.callMemoryToMemoryPublic = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToCalldataInternal(data, COUNT_ITEMS);
    r.callCalldataToCalldataInternal = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToCalldataPublic(data, COUNT_ITEMS);
    r.callCalldataToCalldataPublic = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToMemoryInternal(data, COUNT_ITEMS);
    r.callCalldataToMemoryInternal = (await ut.gasUsed()).toNumber();

    await ut.callCalldataToMemoryPublic(data, COUNT_ITEMS);
    r.callCalldataToMemoryPublic = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryLibExt(data, COUNT_ITEMS);
    r.callMemoryToMemoryLibExt = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToCalldataLibExt(data, COUNT_ITEMS);
    r.callMemoryToCalldataLibExt = (await ut.gasUsed()).toNumber();

    await ut.callMemoryToMemoryLibInt(data, COUNT_ITEMS);
    r.callMemoryToMemoryLibInt = (await ut.gasUsed()).toNumber();

    return r;
  }

  describe("PassStruct4Int", () => {
    it("callMemoryToMemoryInternal", async () => {
      await ut4.callMemoryToMemoryInternal(getStruct4IntStructSample(), COUNT_ITEMS);
      console.log("callMemoryToMemoryInternal", await ut4.gasUsed());
    });

    it("callMemoryToMemoryPublic", async () => {
      await ut4.callMemoryToMemoryPublic(getStruct4IntStructSample(), COUNT_ITEMS);
      console.log("callMemoryToMemoryPublic", await ut4.gasUsed());
    });

    it("callCalldataToCalldataInternal", async () => {
      await ut4.callCalldataToCalldataInternal(getStruct4IntStructSample(), COUNT_ITEMS);
      console.log("callCalldataToCalldataInternal", await ut4.gasUsed());
    });

    it("callCalldataToCalldataPublic", async () => {
      await ut4.callCalldataToCalldataPublic(getStruct4IntStructSample(), COUNT_ITEMS);
      console.log("callCalldataToCalldataPublic", await ut4.gasUsed());
    });

    it("callCalldataToMemoryInternal", async () => {
      await ut4.callCalldataToMemoryInternal(getStruct4IntStructSample(), COUNT_ITEMS);
      console.log("callCalldataToMemoryInternal", await ut4.gasUsed());
    });

    it("callCalldataToMemoryPublic", async () => {
      await ut4.callCalldataToMemoryPublic(getStruct4IntStructSample(), COUNT_ITEMS);
      console.log("callCalldataToMemoryPublic", await ut4.gasUsed());
    });

    it("callMemoryToMemoryLibExt", async () => {
      await ut4.callMemoryToMemoryLibExt(getStruct4IntStructSample(), COUNT_ITEMS);
      console.log("callMemoryToMemoryLibExt", await ut4.gasUsed());
    });

    it("callMemoryToCalldataLibExt", async () => {
      await ut4.callMemoryToCalldataLibExt(getStruct4IntStructSample(), COUNT_ITEMS);
      console.log("callMemoryToCalldataLibExt", await ut4.gasUsed());
    });

    it("callMemoryToMemoryLibInt", async () => {
      await ut4.callMemoryToMemoryLibInt(getStruct4IntStructSample(), COUNT_ITEMS);
      console.log("callMemoryToMemoryLibInt", await ut4.gasUsed());
    });

    it("createAll", async () => {
      const r: IResults = await createStruct4IntAll(ut4, getStruct4IntStructSample());
      console.log(r);
    });
  });
  describe("PassStruct10Uint", () => {
    it("callMemoryToMemoryInternal", async () => {
      await ut10.callMemoryToMemoryInternal(getStruct10UIntStructSample(), COUNT_ITEMS);
      console.log("callMemoryToMemoryInternal", await ut10.gasUsed());
    });

    it("callMemoryToMemoryPublic", async () => {
      await ut10.callMemoryToMemoryPublic(getStruct10UIntStructSample(), COUNT_ITEMS);
      console.log("callMemoryToMemoryPublic", await ut10.gasUsed());
    });

    it("callCalldataToCalldataInternal", async () => {
      await ut10.callCalldataToCalldataInternal(getStruct10UIntStructSample(), COUNT_ITEMS);
      console.log("callCalldataToCalldataInternal", await ut10.gasUsed());
    });

    it("callCalldataToCalldataPublic", async () => {
      await ut10.callCalldataToCalldataPublic(getStruct10UIntStructSample(), COUNT_ITEMS);
      console.log("callCalldataToCalldataPublic", await ut10.gasUsed());
    });

    it("callCalldataToMemoryInternal", async () => {
      await ut10.callCalldataToMemoryInternal(getStruct10UIntStructSample(), COUNT_ITEMS);
      console.log("callCalldataToMemoryInternal", await ut10.gasUsed());
    });

    it("callCalldataToMemoryPublic", async () => {
      await ut10.callCalldataToMemoryPublic(getStruct10UIntStructSample(), COUNT_ITEMS);
      console.log("callCalldataToMemoryPublic", await ut10.gasUsed());
    });

    it("callMemoryToMemoryLibExt", async () => {
      await ut10.callMemoryToMemoryLibExt(getStruct10UIntStructSample(), COUNT_ITEMS);
      console.log("callMemoryToMemoryLibExt", await ut10.gasUsed());
    });

    it("callMemoryToCalldataLibExt", async () => {
      await ut10.callMemoryToCalldataLibExt(getStruct10UIntStructSample(), COUNT_ITEMS);
      console.log("callMemoryToCalldataLibExt", await ut10.gasUsed());
    });

    it("callMemoryToMemoryLibInt", async () => {
      await ut10.callMemoryToMemoryLibInt(getStruct10UIntStructSample(), COUNT_ITEMS);
      console.log("callMemoryToMemoryLibInt", await ut10.gasUsed());
    });

    it("createAll", async () => {
      const r: IResults = await createStruct10UIntAll(ut10, getStruct10UIntStructSample());
      console.log(r);
    });
  });
  describe("PassComplex1", () => {
    it("callMemoryToMemoryInternal", async () => {
      await utC1.callMemoryToMemoryInternal(getComplex1StructSample(), COUNT_ITEMS);
      console.log("callMemoryToMemoryInternal", await utC1.gasUsed());
    });

    it("callMemoryToMemoryPublic", async () => {
      await utC1.callMemoryToMemoryPublic(getComplex1StructSample(), COUNT_ITEMS);
      console.log("callMemoryToMemoryPublic", await utC1.gasUsed());
    });

    it("callCalldataToCalldataInternal", async () => {
      await utC1.callCalldataToCalldataInternal(getComplex1StructSample(), COUNT_ITEMS);
      console.log("callCalldataToCalldataInternal", await utC1.gasUsed());
    });

    it("callCalldataToCalldataPublic", async () => {
      await utC1.callCalldataToCalldataPublic(getComplex1StructSample(), COUNT_ITEMS);
      console.log("callCalldataToCalldataPublic", await utC1.gasUsed());
    });

    it("callCalldataToMemoryInternal", async () => {
      await utC1.callCalldataToMemoryInternal(getComplex1StructSample(), COUNT_ITEMS);
      console.log("callCalldataToMemoryInternal", await utC1.gasUsed());
    });

    it("callCalldataToMemoryPublic", async () => {
      await utC1.callCalldataToMemoryPublic(getComplex1StructSample(), COUNT_ITEMS);
      console.log("callCalldataToMemoryPublic", await utC1.gasUsed());
    });

    it("callMemoryToMemoryLibExt", async () => {
      await utC1.callMemoryToMemoryLibExt(getComplex1StructSample(), COUNT_ITEMS);
      console.log("callMemoryToMemoryLibExt", await utC1.gasUsed());
    });

    it("callMemoryToCalldataLibExt", async () => {
      await utC1.callMemoryToCalldataLibExt(getComplex1StructSample(), COUNT_ITEMS);
      console.log("callMemoryToCalldataLibExt", await utC1.gasUsed());
    });

    it("callMemoryToMemoryLibInt", async () => {
      await utC1.callMemoryToMemoryLibInt(getComplex1StructSample(), COUNT_ITEMS);
      console.log("callMemoryToMemoryLibInt", await utC1.gasUsed());
    });

    it("createAll", async () => {
      const r: IResults = await createComplex1All(utC1, getComplex1StructSample());
      console.log(r);
    });
  });

  describe("save to csv", () => {
    it("save", async () => {
      const rStruct4Int = await createStruct4IntAll(ut4, getStruct4IntStructSample());
      const rStruct10UInt = await createStruct10UIntAll(ut10, getStruct10UIntStructSample());
      const rComplex1 = await createComplex1All(utC1, getComplex1StructSample());

      SaveToCsv.save("./tmp/PassTest.csv", [
        {title: "Struct4Int", obj: rStruct4Int},
        {title: "Struct10UInt", obj: rStruct10UInt},
        {title: "Complex1", obj: rComplex1},
      ]);
    });
  });
});