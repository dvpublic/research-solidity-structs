// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

import "../data-types/IItemMetaDataType.sol";

contract CreateStruct10IntTest {
  uint public gasUsed;
  IItemMetaDataType.Struct10Int[] public destData;

  constructor() {
    IItemMetaDataType.Struct10Int memory firstItem;
    destData.push(firstItem);
  }

  function createEmpty(uint count) external  {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IItemMetaDataType.Struct10Int memory data;
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createManualAssigningHalf(uint count) external  {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IItemMetaDataType.Struct10Int memory data;
      data.a = 1; data.b = 2; data.c = 3; data.d = 4; data.e = 5;
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createManualAssigningFull(uint count) external  {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IItemMetaDataType.Struct10Int memory data;
      data.a = 1; data.b = 2; data.c = 3; data.d = 4; data.e = 5;
      data.f = 1; data.g = 2; data.h = 3; data.i = 4; data.j = 5;
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createConstructor(uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IItemMetaDataType.Struct10Int memory data = IItemMetaDataType.Struct10Int(1, 2, 3, 4, 5, 1, 2, 3, 4, 5);
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createConstructorNamedFields(uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IItemMetaDataType.Struct10Int memory data = IItemMetaDataType.Struct10Int({
        a: 1, b: 2, c: 3, d: 4, e: 5,
        f: 1, g: 2, h: 3, i: 4, j: 5
      });
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createUsingArrayEmpty(uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IItemMetaDataType.Struct10Int memory data = (new IItemMetaDataType.Struct10Int[](1))[0];
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createUsingArrayManualAssigningFull(uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IItemMetaDataType.Struct10Int memory data = (new IItemMetaDataType.Struct10Int[](1))[0];
      data.a = 1; data.b = 2; data.c = 3; data.d = 4; data.e = 5;
      data.f = 1; data.g = 2; data.h = 3; data.i = 4; data.j = 5;
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

}