// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

import "../interfaces/IDataTypes.sol";
import "../libs/CreateLib.sol";
import "hardhat/console.sol";

contract CreateComplex1 {
  uint public gasUsed;
  IDataTypes.Complex1[] public destData;

  constructor() {
    IDataTypes.Complex1 memory firstItem;
    destData.push(firstItem);
  }

  function createEmpty(uint count) external  {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.Complex1 memory data;
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createManualAssigningHalf(uint count) external  {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.Complex1 memory data;
      data.a = 1; data.b = 2; data.c = 3; data.d = 4; data.e = 5;
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createManualAssigningFull(uint count) external  {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.Complex1 memory data;
      data.a = 1; data.b = 2; data.c = 3; data.d = 4; data.e = 5;
      data.f = 1; data.g = 2; data.h = 3;
      data.s4.a = 1; data.s4.b = 2; data.s4.c = 3; data.s4.d = 4;
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createConstructor(uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.Complex1 memory data = IDataTypes.Complex1(1, 2, 3, 4, 5, 6, 7, 8, IDataTypes.Struct4Int(1, 2, 3, 4));
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createConstructorNamedFields(uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.Complex1 memory data = IDataTypes.Complex1({
        a: 1, b: 2, c: 3, d: 4, e: 5,
        f: 6, g: 7, h: 8, s4: IDataTypes.Struct4Int({a: 1, b: 2, c: 3, d: 4})
      });
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createUsingArrayEmpty(uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.Complex1 memory data = (new IDataTypes.Complex1[](1))[0];
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createUsingArrayManualAssigningFull(uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.Complex1 memory data = (new IDataTypes.Complex1[](1))[0];
      data.a = 1; data.b = 2; data.c = 3; data.d = 4; data.e = 5;
      data.f = 1; data.g = 2; data.h = 3;
      data.s4.a = 1; data.s4.b = 2; data.s4.c = 3; data.s4.d = 4;
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createEmptyInitLibInt(uint count) external  {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.Complex1 memory data;
      CreateLib._initComplex1(data, int32(int256((i))));
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createEmptyInitLibExt(uint count) external  {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.Complex1 memory data = CreateLib.initComplex1(int32(int256((i))));
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createCopy(uint count) external  {
    IDataTypes.Complex1[] memory cache = new IDataTypes.Complex1[](count);
    for (uint i = 0; i < count; ++i) {
      CreateLib._initComplex1(cache[i], int32(int256((i))));
    }

    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.Complex1 memory data = cache[i];
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }
}