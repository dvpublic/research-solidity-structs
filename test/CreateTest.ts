import {DeployerUtils} from "../scripts/utils/DeployerUtils";
import {
  CreateComplexOrdered,
  CreateComplexUnordered,
  CreateStruct10UInt,
  CreateStruct4Int
} from "../typechain";
import {ethers} from "hardhat";
import {SignerWithAddress} from "@nomiclabs/hardhat-ethers/signers";
import {TimeUtils} from "../scripts/utils/TimeUtils";
import {SaveToCsv} from "../scripts/utils/SaveToCsv";

describe("CreateTest", () => {
  const COUNT_ITEMS = 1;

  let signer: SignerWithAddress;
  let ut4: CreateStruct4Int;
  let ut10: CreateStruct10UInt;
  let utC1: CreateComplexOrdered;
  let utCU: CreateComplexUnordered;
  let snapshot: string;

  interface IResults {
    createEmpty?: number;
    createUsingArrayEmpty?: number;
    createManualAssigningHalf?: number;
    createManualAssigningFull?: number;
    createUsingArrayManualAssigningFull?: number;
    createConstructor?: number;
    createConstructorNamedFields?: number;
    createEmptyInitLibInt?: number;
    createEmptyInitLibExt?: number;
    createCopy?: number;
  }

  before(async function () {
    [signer] = await ethers.getSigners();

    ut10 = (await DeployerUtils.deployContract(signer, 'CreateStruct10UInt',)) as CreateStruct10UInt;
    ut4 = (await DeployerUtils.deployContract(signer, 'CreateStruct4Int',)) as CreateStruct4Int;
    utC1 = (await DeployerUtils.deployContract(signer, 'CreateComplexOrdered',)) as CreateComplexOrdered;
    utCU = (await DeployerUtils.deployContract(signer, 'CreateComplexUnordered',)) as CreateComplexUnordered;
  })

  after(async function () {

  });

  beforeEach(async function () {
    snapshot = await TimeUtils.snapshot();
  })

  afterEach(async function () {
    await TimeUtils.rollback(snapshot);
  });

  async function createAll(
    ut: CreateStruct4Int | CreateStruct10UInt | CreateComplexOrdered | CreateComplexUnordered
  ): Promise<IResults> {
    let r: IResults = {};
    await ut.createEmpty(COUNT_ITEMS);
    r.createEmpty = (await ut.gasUsed()).toNumber();

    await ut.createManualAssigningHalf(COUNT_ITEMS);
    r.createManualAssigningHalf = (await ut.gasUsed()).toNumber();

    await ut.createManualAssigningFull(COUNT_ITEMS);
    r.createManualAssigningFull = (await ut.gasUsed()).toNumber();

    await ut.createConstructor(COUNT_ITEMS);
    r.createConstructor = (await ut.gasUsed()).toNumber();

    await ut.createConstructorNamedFields(COUNT_ITEMS);
    r.createConstructorNamedFields = (await ut.gasUsed()).toNumber();

    await ut.createUsingArrayEmpty(COUNT_ITEMS);
    r.createUsingArrayEmpty = (await ut.gasUsed()).toNumber();

    await ut.createUsingArrayManualAssigningFull(COUNT_ITEMS);
    r.createUsingArrayManualAssigningFull = (await ut.gasUsed()).toNumber();

    await ut.createEmptyInitLibInt(COUNT_ITEMS);
    r.createEmptyInitLibInt = (await ut.gasUsed()).toNumber();

    await ut.createEmptyInitLibExt(COUNT_ITEMS);
    r.createEmptyInitLibExt = (await ut.gasUsed()).toNumber();

    await ut.createCopy(COUNT_ITEMS);
    r.createCopy = (await ut.gasUsed()).toNumber();

    return r;
  }

  describe("CreateStruct10UInt", () => {
    it("createEmpty", async () => {
      await ut10.createEmpty(COUNT_ITEMS);
      console.log("create empty, don't assign any fields", await ut10.gasUsed());
    });

    it("createManualAssigningHalf", async () => {
      await ut10.createManualAssigningHalf(COUNT_ITEMS);
      console.log("create empty, manual assign half fields", await ut10.gasUsed());
    });

    it("createManualAssigningFull", async () => {
      await ut10.createManualAssigningFull(COUNT_ITEMS);
      console.log("create empty, manual assign all fields", await ut10.gasUsed());
    });

    it("createConstructor", async () => {
      await ut10.createConstructor(COUNT_ITEMS);
      console.log("create constructor", await ut10.gasUsed());
    });

    it("createConstructorNamedFields", async () => {
      await ut10.createConstructorNamedFields(COUNT_ITEMS);
      console.log("create constructor named fields", await ut10.gasUsed());
    });

    it("createUsingArrayEmpty", async () => {
      await ut10.createUsingArrayEmpty(COUNT_ITEMS);
      console.log("create empty using array", await ut10.gasUsed());
    });

    it("createUsingArrayManualAssigningFull", async () => {
      await ut10.createUsingArrayManualAssigningFull(COUNT_ITEMS);
      console.log("create empty using array, manually assing all fields", await ut10.gasUsed());
    });

    it("createEmptyInitLibInt", async () => {
      await ut10.createEmptyInitLibInt(COUNT_ITEMS);
      console.log("create empty using array, use internal init func in lib", await ut10.gasUsed());
    });

    it("createEmptyInitLibExt", async () => {
      await ut10.createEmptyInitLibExt(COUNT_ITEMS);
      console.log("create empty using array, use external init func in lib", await ut10.gasUsed());
    });

    it("createCopy", async () => {
      await ut10.createCopy(COUNT_ITEMS);
      console.log("create through copy", await ut10.gasUsed());
    });

    it("createAll", async () => {
      const r: IResults = await createAll(ut10);
      console.log(r);
    });
  });
  describe("CreateStruct4Int", () => {
    it("createEmpty", async () => {
      await ut4.createEmpty(COUNT_ITEMS);
      console.log("create empty, don't assign any fields", await ut4.gasUsed());
    });

    it("createManualAssigningHalf", async () => {
      await ut4.createManualAssigningHalf(COUNT_ITEMS);
      console.log("create empty, manual assign half fields", await ut4.gasUsed());
    });

    it("createManualAssigningFull", async () => {
      await ut4.createManualAssigningFull(COUNT_ITEMS);
      console.log("create empty, manual assign all fields", await ut4.gasUsed());
    });

    it("createConstructor", async () => {
      await ut4.createConstructor(COUNT_ITEMS);
      console.log("create constructor", await ut4.gasUsed());
    });

    it("createConstructorNamedFields", async () => {
      await ut4.createConstructorNamedFields(COUNT_ITEMS);
      console.log("create constructor named fields", await ut4.gasUsed());
    });

    it("createUsingArrayEmpty", async () => {
      await ut4.createUsingArrayEmpty(COUNT_ITEMS);
      console.log("create empty using array", await ut4.gasUsed());
    });

    it("createUsingArrayManualAssigningFull", async () => {
      await ut4.createUsingArrayManualAssigningFull(COUNT_ITEMS);
      console.log("create empty using array, manually assing all fields", await ut4.gasUsed());
    });

    it("createEmptyInitLibInt", async () => {
      await ut4.createEmptyInitLibInt(COUNT_ITEMS);
      console.log("create empty using array, use internal init func in lib", await ut4.gasUsed());
    });

    it("createEmptyInitLibExt", async () => {
      await ut4.createEmptyInitLibExt(COUNT_ITEMS);
      console.log("create empty using array, use external init func in lib", await ut4.gasUsed());
    });

    it("createCopy", async () => {
      await ut4.createCopy(COUNT_ITEMS);
      console.log("create through copy", await ut4.gasUsed());
    });


    it("createAll", async () => {
      const r: IResults = await createAll(ut4);
      console.log(r);
    });
  });
  describe("CreateComplexOrdered", () => {
    it("createEmpty", async () => {
      await utC1.createEmpty(COUNT_ITEMS);
      console.log("create empty, don't assign any fields", await utC1.gasUsed());
    });

    it("createManualAssigningHalf", async () => {
      await utC1.createManualAssigningHalf(COUNT_ITEMS);
      console.log("create empty, manual assign half fields", await utC1.gasUsed());
    });

    it("createManualAssigningFull", async () => {
      await utC1.createManualAssigningFull(COUNT_ITEMS);
      console.log("create empty, manual assign all fields", await utC1.gasUsed());
    });

    it("createConstructor", async () => {
      await utC1.createConstructor(COUNT_ITEMS);
      console.log("create constructor", await utC1.gasUsed());
    });

    it("createConstructorNamedFields", async () => {
      await utC1.createConstructorNamedFields(COUNT_ITEMS);
      console.log("create constructor named fields", await utC1.gasUsed());
    });

    it("createUsingArrayEmpty", async () => {
      await utC1.createUsingArrayEmpty(COUNT_ITEMS);
      console.log("create empty using array", await utC1.gasUsed());
    });

    it("createUsingArrayManualAssigningFull", async () => {
      await utC1.createUsingArrayManualAssigningFull(COUNT_ITEMS);
      console.log("create empty using array, manually assing all fields", await utC1.gasUsed());
    });

    it("createEmptyInitLibInt", async () => {
      await utC1.createEmptyInitLibInt(COUNT_ITEMS);
      console.log("create empty using array, use internal init func in lib", await utC1.gasUsed());
    });

    it("createEmptyInitLibExt", async () => {
      await utC1.createEmptyInitLibExt(COUNT_ITEMS);
      console.log("create empty using array, use external init func in lib", await utC1.gasUsed());
    });

    it("createCopy", async () => {
      await utC1.createCopy(COUNT_ITEMS);
      console.log("create through copy", await utC1.gasUsed());
    });

    it("createAll", async () => {
      const r: IResults = await createAll(utC1);
      console.log(r);
    });
  });
  describe("CreateComplexUnordered", () => {
    it("createEmpty", async () => {
      await utCU.createEmpty(COUNT_ITEMS);
      console.log("create empty, don't assign any fields", await utCU.gasUsed());
    });

    it("createManualAssigningHalf", async () => {
      await utCU.createManualAssigningHalf(COUNT_ITEMS);
      console.log("create empty, manual assign half fields", await utCU.gasUsed());
    });

    it("createManualAssigningFull", async () => {
      await utCU.createManualAssigningFull(COUNT_ITEMS);
      console.log("create empty, manual assign all fields", await utCU.gasUsed());
    });

    it("createConstructor", async () => {
      await utCU.createConstructor(COUNT_ITEMS);
      console.log("create constructor", await utCU.gasUsed());
    });

    it("createConstructorNamedFields", async () => {
      await utCU.createConstructorNamedFields(COUNT_ITEMS);
      console.log("create constructor named fields", await utCU.gasUsed());
    });

    it("createUsingArrayEmpty", async () => {
      await utCU.createUsingArrayEmpty(COUNT_ITEMS);
      console.log("create empty using array", await utCU.gasUsed());
    });

    it("createUsingArrayManualAssigningFull", async () => {
      await utCU.createUsingArrayManualAssigningFull(COUNT_ITEMS);
      console.log("create empty using array, manually assing all fields", await utCU.gasUsed());
    });

    it("createEmptyInitLibInt", async () => {
      await utCU.createEmptyInitLibInt(COUNT_ITEMS);
      console.log("create empty using array, use internal init func in lib", await utCU.gasUsed());
    });

    it("createEmptyInitLibExt", async () => {
      await utCU.createEmptyInitLibExt(COUNT_ITEMS);
      console.log("create empty using array, use external init func in lib", await utCU.gasUsed());
    });

    it("createCopy", async () => {
      await utCU.createCopy(COUNT_ITEMS);
      console.log("create through copy", await utCU.gasUsed());
    });

    it("createAll", async () => {
      const r: IResults = await createAll(utCU);
      console.log(r);
    });
  });

  describe("save to csv", () => {
    it("save", async () => {
      const rStruct4Int = await createAll(ut4);
      const rStruct10UInt = await createAll(ut10);
      const rComplexOrdered = await createAll(utC1);
      const rComplexUnordered = await createAll(utCU);

      SaveToCsv.save("./tmp/CreateTest.csv", [
        {title: "Struct4Int", obj: rStruct4Int},
        {title: "Struct10UInt", obj: rStruct10UInt},
        {title: "rComplexOrdered", obj: rComplexOrdered},
        {title: "rComplexUnordered", obj: rComplexUnordered},
      ]);
    });
  });

});