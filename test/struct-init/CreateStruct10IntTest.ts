import {DeployerUtils} from "../../scripts/utils/DeployerUtils";
import {CreateStruct10IntTest} from "../../typechain";
import {ethers} from "hardhat";
import {SignerWithAddress} from "@nomiclabs/hardhat-ethers/signers";
import {TimeUtils} from "../../scripts/utils/TimeUtils";

describe("CreateStruct10IntTest", () => {
  const COUNT_ITEMS = 10;

  let signer: SignerWithAddress;
  let ut: CreateStruct10IntTest;
  let snapshot: string;

  interface IResults {
    createEmpty?: number;
    createManualAssigningHalf?: number;
    createManualAssigningFull?: number;
    createConstructor?: number;
    createConstructorNamedFields?: number;
    createUsingArrayEmpty?: number;
    createUsingArrayManualAssigningFull?: number;
  }

  before(async function () {
    [signer] = await ethers.getSigners();

    ut = (await DeployerUtils.deployContract(signer, 'CreateStruct10IntTest',)) as CreateStruct10IntTest;
  })

  after(async function () {

  });

  beforeEach(async function () {
    snapshot = await TimeUtils.snapshot();
  })

  afterEach(async function () {
    await TimeUtils.rollback(snapshot);
  });

  it("createEmpty", async () => {
    await ut.createEmpty(COUNT_ITEMS);
    console.log("create empty, don't assign any fields", await ut.gasUsed());
  });

  it("createManualAssigningHalf", async () => {
    await ut.createManualAssigningHalf(COUNT_ITEMS);
    console.log("create empty, manual assign half fields", await ut.gasUsed());
  });

  it("createManualAssigningFull", async () => {
    await ut.createManualAssigningFull(COUNT_ITEMS);
    console.log("create empty, manual assign all fields", await ut.gasUsed());
  });

  it("createConstructor", async () => {
    await ut.createConstructor(COUNT_ITEMS);
    console.log("create constructor", await ut.gasUsed());
  });

  it("createConstructorNamedFields", async () => {
    await ut.createConstructorNamedFields(COUNT_ITEMS);
    console.log("create constructor named fields", await ut.gasUsed());
  });

  it("createUsingArrayEmpty", async () => {
    await ut.createUsingArrayEmpty(COUNT_ITEMS);
    console.log("create empty using array", await ut.gasUsed());
  });

  it("createUsingArrayManualAssigningFull", async () => {
    await ut.createUsingArrayManualAssigningFull(COUNT_ITEMS);
    console.log("create empty using array, manually assing all fields", await ut.gasUsed());
  });

  it("createAll", async () => {
    let r: IResults = {}

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

    console.log(r);
  });

});