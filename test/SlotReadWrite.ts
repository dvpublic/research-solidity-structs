import {DeployerUtils} from "../scripts/utils/DeployerUtils";
import {
  CreateComplexOrdered,
  CreateComplexUnordered, CreateStruct10Int32,
  CreateStruct10UInt, CreateStruct10UInt8,
  CreateStruct4Int, CreateStruct5UInt, SlotReadWrite
} from "../typechain";
import {ethers} from "hardhat";
import {SignerWithAddress} from "@nomiclabs/hardhat-ethers/signers";
import {TimeUtils} from "../scripts/utils/TimeUtils";
import {SaveToCsv} from "../scripts/utils/SaveToCsv";
import {Misc} from "../scripts/utils/Misc";
import {parseUnits} from "ethers/lib/utils";

describe("SlotReadWrite", () => {
  let signer: SignerWithAddress;
  let ut: SlotReadWrite;
  let snapshot: string;

  interface IResults {
    uint?: number;
    uint8?: number;
    uint16?: number;
    uint32?: number;
    uint64?: number;
    uint64int?: number;
    uint128?: number;
    uint128int?: number;
  }

  before(async function () {
    [signer] = await ethers.getSigners();

    ut = (await DeployerUtils.deployContract(signer, 'SlotReadWrite',)) as SlotReadWrite;
  })

  after(async function () {

  });

  beforeEach(async function () {
    snapshot = await TimeUtils.snapshot();
  })

  afterEach(async function () {
    await TimeUtils.rollback(snapshot);
  });

  describe("Write", () => {
    it("writeUint256", async () => {
      await ut.writeUint(Misc.MAX_UINT);
      console.log("writeUint", (await ut.gasUsed()).toNumber());
    });

    it("writeT8", async () => {
      await ut.writeT8({
        a1: 7,
        a2: 7,
        a3: 7,
        a4: 7,
        a5: 7,
        a6: 7,
        a7: 7,
        a8: 7,
        a9: 7,
        a10: 7,
        a11: 7,
        a12: 7,
        a13: 7,
        a14: 7,
        a15: 7,
        a16: 7,
        a17: 7,
        a18: 7,
        a19: 7,
        a20: 7,
        a21: 7,
        a22: 7,
        a23: 7,
        a24: 7,
        a25: 7,
        a26: 7,
        a27: 7,
        a28: 7,
        a29: 7,
        a30: 7,
        a31: 7,
        a32: 7,
      });
      console.log("writeT8", (await ut.gasUsed()).toNumber());
    });

    it("writeT16", async () => {
      await ut.writeT16({
        a1: 7,
        a2: 7,
        a3: 7,
        a4: 7,
        a5: 7,
        a6: 7,
        a7: 7,
        a8: 7,
        a9: 7,
        a10: 7,
        a11: 7,
        a12: 7,
        a13: 7,
        a14: 7,
        a15: 7,
        a16: 7,
      });
      console.log("writeT16", (await ut.gasUsed()).toNumber());
    });

    it("writeT32", async () => {
      await ut.writeT32({
        a1: 7,
        a2: 7,
        a3: 7,
        a4: 7,
        a5: 7,
        a6: 7,
        a7: 7,
        a8: 7,
      });
      console.log("writeT32", (await ut.gasUsed()).toNumber());
    });

    it("writeT64", async () => {
      await ut.writeT64({
        a1: parseUnits("1", 16),
        a2: parseUnits("1", 16),
        a3: parseUnits("1", 16),
        a4: parseUnits("1", 16),
      });
      console.log("writeT64", (await ut.gasUsed()).toNumber());
    });

    it("writeT64int", async () => {
      await ut.writeT64int({
        a1: parseUnits("1", 16),
        a2: parseUnits("1", 16),
        a3: parseUnits("1", 16),
        a4: parseUnits("1", 16),
      });
      console.log("writeT64int", (await ut.gasUsed()).toNumber());
    });

    it("writeT128", async () => {
      await ut.writeT128({
        a1: parseUnits("1", 16),
        a2: parseUnits("1", 16),
      });
      console.log("writeT128", (await ut.gasUsed()).toNumber());
    });

    it("writeT128int", async () => {
      await ut.writeT128int({
        a1: parseUnits("1", 16),
        a2: parseUnits("1", 16),
      });
      console.log("writeT128int", (await ut.gasUsed()).toNumber());
    });

    it("save all", async () => {
      await ut.writeUint(Misc.MAX_UINT);
      const writeUint = await ut.gasUsed();

      await ut.writeT8({
        a1: 7,
        a2: 7,
        a3: 7,
        a4: 7,
        a5: 7,
        a6: 7,
        a7: 7,
        a8: 7,
        a9: 7,
        a10: 7,
        a11: 7,
        a12: 7,
        a13: 7,
        a14: 7,
        a15: 7,
        a16: 7,
        a17: 7,
        a18: 7,
        a19: 7,
        a20: 7,
        a21: 7,
        a22: 7,
        a23: 7,
        a24: 7,
        a25: 7,
        a26: 7,
        a27: 7,
        a28: 7,
        a29: 7,
        a30: 7,
        a31: 7,
        a32: 7,
      });
      const writeT8 = await ut.gasUsed();

      await ut.writeT16({
        a1: 7,
        a2: 7,
        a3: 7,
        a4: 7,
        a5: 7,
        a6: 7,
        a7: 7,
        a8: 7,
        a9: 7,
        a10: 7,
        a11: 7,
        a12: 7,
        a13: 7,
        a14: 7,
        a15: 7,
        a16: 7,
      });
      const writeT16 = await ut.gasUsed();

      await ut.writeT32({
        a1: 7,
        a2: 7,
        a3: 7,
        a4: 7,
        a5: 7,
        a6: 7,
        a7: 7,
        a8: 7,
      });
      const writeT32 = await ut.gasUsed();

      await ut.writeT64({
        a1: parseUnits("1", 16),
        a2: parseUnits("1", 16),
        a3: parseUnits("1", 16),
        a4: parseUnits("1", 16),
      });
      const writeT64 = await ut.gasUsed();

      await ut.writeT64int({
        a1: parseUnits("1", 16),
        a2: parseUnits("1", 16),
        a3: parseUnits("1", 16),
        a4: parseUnits("1", 16),
      });
      const writeT64int = await ut.gasUsed();

      await ut.writeT128({
        a1: parseUnits("1", 16),
        a2: parseUnits("1", 16),
      });
      const writeT128 = await ut.gasUsed();

      await ut.writeT128int({
        a1: parseUnits("1", 16),
        a2: parseUnits("1", 16),
      });
      const writeT128int = await ut.gasUsed();

      const r: IResults = {
        uint: writeUint.toNumber(),
        uint8: writeT8.toNumber(),
        uint16: writeT16.toNumber(),
        uint32: writeT32.toNumber(),
        uint64: writeT64.toNumber(),
        uint64int: writeT64int.toNumber(),
        uint128: writeT128.toNumber(),
        uint128int: writeT128int.toNumber()
      }

      SaveToCsv.save("./tmp/WriteToSlot.csv", [
        {title: "WriteToSlot", obj: r},
      ]);
    })
  });

  describe("Read", () => {
    it("readUint256", async () => {
      await ut.readUint();
      console.log("readUint", (await ut.gasUsed()).toNumber());
    });

    it("readT8", async () => {
      await ut.readT8();
      console.log("readT8", (await ut.gasUsed()).toNumber());
    });

    it("readT16", async () => {
      await ut.readT16();
      console.log("readT16", (await ut.gasUsed()).toNumber());
    });

    it("readT32", async () => {
      await ut.readT32();
      console.log("readT32", (await ut.gasUsed()).toNumber());
    });

    it("readT64", async () => {
      await ut.readT64();
      console.log("readT64", (await ut.gasUsed()).toNumber());
    });

    it("readT64int", async () => {
      await ut.readT64int();
      console.log("readT64int", (await ut.gasUsed()).toNumber());
    });

    it("readT128", async () => {
      await ut.readT128();
      console.log("readT128", (await ut.gasUsed()).toNumber());
    });

    it("readT128int", async () => {
      await ut.readT128int();
      console.log("readT128int", (await ut.gasUsed()).toNumber());
    });

    it("save all", async () => {
      await ut.readUint();
      const readUint = await ut.gasUsed();

      await ut.readT8();
      const readT8 = await ut.gasUsed();

      await ut.readT16();
      const readT16 = await ut.gasUsed();

      await ut.readT32();
      const readT32 = await ut.gasUsed();

      await ut.readT64();
      const readT64 = await ut.gasUsed();

      await ut.readT64int();
      const readT64int = await ut.gasUsed();

      await ut.readT128();
      const readT128 = await ut.gasUsed();

      await ut.readT128int();
      const readT128int = await ut.gasUsed();

      const r: IResults = {
        uint: readUint.toNumber(),
        uint8: readT8.toNumber(),
        uint16: readT16.toNumber(),
        uint32: readT32.toNumber(),
        uint64: readT64.toNumber(),
        uint64int: readT64int.toNumber(),
        uint128: readT128.toNumber(),
        uint128int: readT128int.toNumber()
      }

      SaveToCsv.save("./tmp/ReadFromSlot.csv", [
        {title: "ReadFromSlot", obj: r},
      ]);
    })
  });
});