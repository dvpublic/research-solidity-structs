import {DeployerUtils} from "../scripts/utils/DeployerUtils";
import {
  NItems,
  PassComplex1,
  PassStruct10Uint,
  PassStruct4Int
} from "../typechain";
import {ethers} from "hardhat";
import {SignerWithAddress} from "@nomiclabs/hardhat-ethers/signers";
import {TimeUtils} from "../scripts/utils/TimeUtils";
import {IDataTypes} from "../typechain/libs/CreateLib";
import {SaveToCsv} from "../scripts/utils/SaveToCsv";

describe("NItemsTest", () => {
  const COUNT_ITEMS = 10;

  let signer: SignerWithAddress;
  let ut: NItems;
  let snapshot: string;

  interface IResults {
    create?: number;
    calcInternal?: number;
    calcLibInternal?: number;
    calcLibMemoryExternal?: number;
    calcLibCalldataExternal?: number;
  }

  before(async function () {
    [signer] = await ethers.getSigners();

    ut = (await DeployerUtils.deployContract(signer, 'NItems',)) as NItems;
  })

  after(async function () {

  });

  beforeEach(async function () {
    snapshot = await TimeUtils.snapshot();
  })

  afterEach(async function () {
    await TimeUtils.rollback(snapshot);
  });

  async function createAllStruct(ut: NItems): Promise<IResults> {
    let r: IResults = {};
    await ut.createStruct(COUNT_ITEMS);
    r.create = (await ut.gasUsed()).toNumber();

    await ut.createStructCalcInternal(COUNT_ITEMS);
    r.calcInternal = (await ut.gasUsed()).toNumber();

    await ut.createStructCalcLibInternal(COUNT_ITEMS);
    r.calcLibInternal = (await ut.gasUsed()).toNumber();

    await ut.createStructCalcLibMemoryExt(COUNT_ITEMS);
    r.calcLibMemoryExternal = (await ut.gasUsed()).toNumber();

    await ut.createStructCalcLibCalldataExt(COUNT_ITEMS);
    r.calcLibCalldataExternal = (await ut.gasUsed()).toNumber();

    return r;
  }

  async function createAllPureVars(ut: NItems): Promise<IResults> {
    let r: IResults = {};
    await ut.createPureVars(COUNT_ITEMS);
    r.create = (await ut.gasUsed()).toNumber();

    await ut.createPureVarsCalcInternal(COUNT_ITEMS);
    r.calcInternal = (await ut.gasUsed()).toNumber();

    await ut.createPureVarsCalcLibInternal(COUNT_ITEMS);
    r.calcLibInternal = (await ut.gasUsed()).toNumber();

    await ut.createPureVarsCalcLibExt(COUNT_ITEMS);
    r.calcLibMemoryExternal = (await ut.gasUsed()).toNumber();

    return r;
  }

  async function createStaticArray(ut: NItems): Promise<IResults> {
    let r: IResults = {};
    await ut.createArray(COUNT_ITEMS);
    r.create = (await ut.gasUsed()).toNumber();

    await ut.createArrayCalcInternal(COUNT_ITEMS);
    r.calcInternal = (await ut.gasUsed()).toNumber();

    await ut.createArrayCalcLibInternal(COUNT_ITEMS);
    r.calcLibInternal = (await ut.gasUsed()).toNumber();

    await ut.createArrayCalcLibMemoryExt(COUNT_ITEMS);
    r.calcLibMemoryExternal = (await ut.gasUsed()).toNumber();

    await ut.createArrayCalcLiCalldataExt(COUNT_ITEMS);
    r.calcLibCalldataExternal = (await ut.gasUsed()).toNumber();

    return r;
  }

  async function createDynArray(ut: NItems): Promise<IResults> {
    let r: IResults = {};
    await ut.createDynArray(COUNT_ITEMS);
    r.create = (await ut.gasUsed()).toNumber();

    await ut.createDynArrayCalcInternal(COUNT_ITEMS);
    r.calcInternal = (await ut.gasUsed()).toNumber();

    await ut.createDynArrayCalcLibInternal(COUNT_ITEMS);
    r.calcLibInternal = (await ut.gasUsed()).toNumber();

    await ut.createDynArrayCalcLibMemoryExt(COUNT_ITEMS);
    r.calcLibMemoryExternal = (await ut.gasUsed()).toNumber();

    await ut.createDynArrayCalcLibCalldataExt(COUNT_ITEMS);
    r.calcLibCalldataExternal = (await ut.gasUsed()).toNumber();

    return r;
  }

  describe("Struct", () => {
    it("callMemoryToMemoryInternal", async () => {
      await ut.createStruct(COUNT_ITEMS);
      console.log("createStruct", await ut.gasUsed());
    });

    it("createStructCalcInternal", async () => {
      await ut.createStructCalcInternal(COUNT_ITEMS);
      console.log("createStructCalcInternal", await ut.gasUsed());
    });

    it("createStructCalcLibInternal", async () => {
      await ut.createStructCalcLibInternal(COUNT_ITEMS);
      console.log("createStructCalcLibInternal", await ut.gasUsed());
    });

    it("createStructCalcLibMemoryExt", async () => {
      await ut.createStructCalcLibMemoryExt(COUNT_ITEMS);
      console.log("createStructCalcLibMemoryExt", await ut.gasUsed());
    });

    it("createStructCalcLibCalldataExt", async () => {
      await ut.createStructCalcLibCalldataExt(COUNT_ITEMS);
      console.log("createStructCalcLibCalldataExt", await ut.gasUsed());
    });

    it("createAll", async () => {
      const r: IResults = await createAllStruct(ut);
      console.log(r);
    });
  });
  describe("Pure vars", () => {
    it("createPureVars", async () => {
      await ut.createStruct(COUNT_ITEMS);
      console.log("createStruct", await ut.gasUsed());
    });

    it("createPureVarsCalcInternal", async () => {
      await ut.createPureVarsCalcInternal(COUNT_ITEMS);
      console.log("createPureVarsCalcInternal", await ut.gasUsed());
    });

    it("createPureVarsCalcLibInternal", async () => {
      await ut.createPureVarsCalcLibInternal(COUNT_ITEMS);
      console.log("createPureVarsCalcLibInternal", await ut.gasUsed());
    });

    it("createPureVarsCalcLibExt", async () => {
      await ut.createPureVarsCalcLibExt(COUNT_ITEMS);
      console.log("createPureVarsCalcLibExt", await ut.gasUsed());
    });

    it("createAll", async () => {
      const r: IResults = await createAllPureVars(ut);
      console.log(r);
    });
  });
  describe("Static array", () => {
    it("createArray", async () => {
      await ut.createArray(COUNT_ITEMS);
      console.log("createArray", await ut.gasUsed());
    });

    it("createArrayCalcInternal", async () => {
      await ut.createArrayCalcInternal(COUNT_ITEMS);
      console.log("createArrayCalcInternal", await ut.gasUsed());
    });

    it("createArrayCalcLibInternal", async () => {
      await ut.createArrayCalcLibInternal(COUNT_ITEMS);
      console.log("createArrayCalcLibInternal", await ut.gasUsed());
    });

    it("createArrayCalcLibMemoryExt", async () => {
      await ut.createArrayCalcLibMemoryExt(COUNT_ITEMS);
      console.log("createArrayCalcLibMemoryExt", await ut.gasUsed());
    });

    it("createArrayCalcLiCalldataExt", async () => {
      await ut.createArrayCalcLiCalldataExt(COUNT_ITEMS);
      console.log("createArrayCalcLiCalldataExt", await ut.gasUsed());
    });

    it("createAll", async () => {
      const r: IResults = await createStaticArray(ut);
      console.log(r);
    });
  });
  describe("Dynamic array", () => {
    it("createDynArray", async () => {
      await ut.createDynArray(COUNT_ITEMS);
      console.log("createDynArray", await ut.gasUsed());
    });

    it("createDynArrayCalcInternal", async () => {
      await ut.createDynArrayCalcInternal(COUNT_ITEMS);
      console.log("createDynArrayCalcInternal", await ut.gasUsed());
    });

    it("createDynArrayCalcLibInternal", async () => {
      await ut.createDynArrayCalcLibInternal(COUNT_ITEMS);
      console.log("createDynArrayCalcLibInternal", await ut.gasUsed());
    });

    it("createDynArrayCalcLibMemoryExt", async () => {
      await ut.createDynArrayCalcLibMemoryExt(COUNT_ITEMS);
      console.log("createDynArrayCalcLibMemoryExt", await ut.gasUsed());
    });

    it("createDynArrayCalcLibCalldataExt", async () => {
      await ut.createDynArrayCalcLibCalldataExt(COUNT_ITEMS);
      console.log("createDynArrayCalcLibCalldataExt", await ut.gasUsed());
    });

    it("createAll", async () => {
      const r: IResults = await createDynArray(ut);
      console.log(r);
    });
  });

  describe("save to csv", () => {
    it("save", async () => {
      const rStruct = await createAllStruct(ut);
      const rPureVars = await createAllPureVars(ut);
      const rStaticArray = await createStaticArray(ut);
      const rDynArray = await createDynArray(ut);

      SaveToCsv.save("./tmp/NItems.csv", [
        {title: "struct", obj: rStruct},
        {title: "pure vars", obj: rPureVars},
        {title: "static array", obj: rStaticArray},
        {title: "dynamic array", obj: rDynArray},
      ]);
    });
  });
});