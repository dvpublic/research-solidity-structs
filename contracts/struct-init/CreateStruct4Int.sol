// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

import "../data-types/IItemMetaDataType.sol";

contract CreateStruct4IntTest {
  uint public gasUsed;
  IItemMetaDataType.Struct4Int[] public destData;

  constructor() {
    IItemMetaDataType.Struct4Int memory firstItem;
    destData.push(firstItem);
  }

  function createEmpty(uint count) external  {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IItemMetaDataType.Struct4Int memory data;
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createManualAssigningHalf(uint count) external  {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IItemMetaDataType.Struct4Int memory data;
      data.a = 1; data.b = 2;
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createManualAssigningFull(uint count) external  {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IItemMetaDataType.Struct4Int memory data;
      data.a = 1; data.b = 2; data.c = 3; data.d = 4;
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createConstructor(uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IItemMetaDataType.Struct4Int memory data = IItemMetaDataType.Struct4Int(1, 2, 3, 4);
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createConstructorNamedFields(uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IItemMetaDataType.Struct4Int memory data = IItemMetaDataType.Struct4Int({
        a: 1, b: 2, c: 3, d: 4
      });
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createUsingArrayEmpty(uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IItemMetaDataType.Struct4Int memory data = (new IItemMetaDataType.Struct4Int[](1))[0];
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function createUsingArrayManualAssigningFull(uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IItemMetaDataType.Struct4Int memory data = (new IItemMetaDataType.Struct4Int[](1))[0];
      data.a = 1; data.b = 2; data.c = 3; data.d = 4;
      destData.push(data);
    }
    gasUsed = gas0 - gasleft();
  }

}