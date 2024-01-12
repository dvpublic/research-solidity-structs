// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

import "../interfaces/IDataTypes.sol";
import "../libs/CreateLib.sol";
import "hardhat/console.sol";

contract CreateComplexUnordered {
  uint public gasUsed;
  IDataTypes.ComplexUnordered[] public destData;

  constructor() {
    IDataTypes.ComplexUnordered memory firstItem;
    destData.push(firstItem);
  }

  function createEmpty(uint count) external  {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.ComplexUnordered memory data;
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createManualAssigningHalf(uint count) external  {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.ComplexUnordered memory data;
      data.b1 = 1; data.b2 = 2; data.s1 = 7; data.s2 = 8; data.a1 = address(0); data.a2 = address(0); data.t1 = 11;
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createManualAssigningFull(uint count) external  {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.ComplexUnordered memory data;
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
      IDataTypes.ComplexUnordered memory data = IDataTypes.ComplexUnordered(
        1, 11, 2, 3, 9, 12, address(0), 4,
        IDataTypes.Struct4Int(1, 2, 3, 4),
        10, new uint[](i),
        address(0),
        new uint[](i)
      );
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createConstructorNamedFields(uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.ComplexUnordered memory data = IDataTypes.ComplexUnordered({
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
      IDataTypes.ComplexUnordered memory data = (new IDataTypes.ComplexUnordered[](1))[0];
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createUsingArrayManualAssigningFull(uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.ComplexUnordered memory data = (new IDataTypes.ComplexUnordered[](1))[0];
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
      IDataTypes.ComplexUnordered memory data;
      CreateLib._initComplexUnordered(data, count);
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createEmptyInitLibExt(uint count) external  {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.ComplexUnordered memory data = CreateLib.initComplexUnordered(count);
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createCopy(uint count) external  {
    IDataTypes.ComplexUnordered[] memory cache = new IDataTypes.ComplexUnordered[](count);
    for (uint i = 0; i < count; ++i) {
      CreateLib._initComplexUnordered(cache[i], count);
    }

    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.ComplexUnordered memory data = cache[i];
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }
}