// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

import "../interfaces/IDataTypes.sol";
import "../libs/CreateLib.sol";
import "hardhat/console.sol";

contract CreateComplexOrdered {
  uint public gasUsed;
  IDataTypes.ComplexOrdered[] public destData;

  constructor() {
    IDataTypes.ComplexOrdered memory firstItem;
    destData.push(firstItem);
  }

  function createEmpty(uint count) external  {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.ComplexOrdered memory data;
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createManualAssigningHalf(uint count) external  {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.ComplexOrdered memory data;
      data.b1 = 1; data.b2 = 2; data.s1 = 7; data.s2 = 8; data.a1 = address(0); data.a2 = address(0); data.t1 = 11;
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createManualAssigningFull(uint count) external  {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.ComplexOrdered memory data;
      data.b1 = 1;
      data.b2 = 2;
      data.s1 = 7;
      data.s2 = 8;
      data.a1 = address(0);
      data.a2 = address(0);
      data.t1 = 9;
      data.t2 = 10;
      data.u1 = 11;
      data.u2 = 12;
      data.s4 = IDataTypes.Struct4Int({a: 1, b: 2, c: 3, d: 4});
      data.aa1 = new uint[](i);
      data.aa2 = new uint[](i);
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createConstructor(uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.ComplexOrdered memory data = IDataTypes.ComplexOrdered(
        1, 2,
        3, 4,
        address(0), address(0),
        9, 10, 11, 12,
        IDataTypes.Struct4Int(1, 2, 3, 4),
        new uint[](i), new uint[](i)
      );
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createConstructorNamedFields(uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.ComplexOrdered memory data = IDataTypes.ComplexOrdered({
        b1 : 1, b2 : 2,
        s1: 3, s2: 4,
        a1: address(0), a2: address(0),
        t1: 9, t2: 10, u1: 11, u2: 12,
        s4: IDataTypes.Struct4Int({a: 1, b: 2, c: 3, d: 4}),
        aa1: new uint[](i),
        aa2: new uint[](i)
      });
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createUsingArrayEmpty(uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.ComplexOrdered memory data = (new IDataTypes.ComplexOrdered[](1))[0];
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createUsingArrayManualAssigningFull(uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.ComplexOrdered memory data = (new IDataTypes.ComplexOrdered[](1))[0];
      data.b1 = 1;
      data.b2 = 2;
      data.s1 = 3;
      data.s2 = 4;
      data.a1 = address(0);
      data.a2 = address(0);
      data.t1 = 9;
      data.t2 = 10;
      data.u1 = 11;
      data.u2 = 12;
      data.s4 = IDataTypes.Struct4Int({a: 1, b: 2, c: 3, d: 4});
      data.aa1 = new uint[](i);
      data.aa2 = new uint[](i);
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createEmptyInitLibInt(uint count) external  {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.ComplexOrdered memory data;
      CreateLib._initComplexOrdered(data, count);
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createEmptyInitLibExt(uint count) external  {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.ComplexOrdered memory data = CreateLib.initComplexOrdered(count);
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createCopy(uint count) external  {
    IDataTypes.ComplexOrdered[] memory cache = new IDataTypes.ComplexOrdered[](count);
    for (uint i = 0; i < count; ++i) {
      CreateLib._initComplexOrdered(cache[i], count);
    }

    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.ComplexOrdered memory data = cache[i];
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }
}