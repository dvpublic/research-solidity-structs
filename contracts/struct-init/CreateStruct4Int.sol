// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

import "../interfaces/IDataTypes.sol";
import "../libs/CreateLib.sol";

contract CreateStruct4Int {
  uint public gasUsed;
  IDataTypes.Struct4Int[] public destData;

  constructor() {
    IDataTypes.Struct4Int memory firstItem;
    destData.push(firstItem);
  }

  function createEmpty(uint count) external  {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.Struct4Int memory data;
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createManualAssigningHalf(uint count) external  {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.Struct4Int memory data;
      data.a = 1; data.b = 2;
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createManualAssigningFull(uint count) external  {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.Struct4Int memory data;
      data.a = 1; data.b = 2; data.c = 3; data.d = 4;
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createConstructor(uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.Struct4Int memory data = IDataTypes.Struct4Int(1, 2, 3, 4);
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createConstructorNamedFields(uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.Struct4Int memory data = IDataTypes.Struct4Int({
        a: 1, b: 2, c: 3, d: 4
      });
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createUsingArrayEmpty(uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.Struct4Int memory data = (new IDataTypes.Struct4Int[](1))[0];
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createUsingArrayManualAssigningFull(uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.Struct4Int memory data = (new IDataTypes.Struct4Int[](1))[0];
      data.a = 1; data.b = 2; data.c = 3; data.d = 4;
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createEmptyInitLibInt(uint count) external  {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.Struct4Int memory data;
      CreateLib._initStruct4Int(data);
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createEmptyInitLibExt(uint count) external  {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.Struct4Int memory data = CreateLib.initStruct4Int();
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createCopy(uint count) external  {
    IDataTypes.Struct4Int[] memory cache = new IDataTypes.Struct4Int[](count);
    for (uint i = 0; i < count; ++i) {
      CreateLib._initStruct4Int(cache[i]);
    }

    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.Struct4Int memory data = cache[i];
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }
}