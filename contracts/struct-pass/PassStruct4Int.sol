// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

import {IDataTypes} from "../interfaces/IDataTypes.sol";
import "../libs/PassLib.sol";

contract PassStruct4Int {
  uint public gasUsed;

  function callMemoryToMemoryInternal(IDataTypes.Struct4Int memory data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsMemoryInternal(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToMemoryPublic(IDataTypes.Struct4Int memory data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsMemoryPublic(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function callCalldataToCalldataInternal(IDataTypes.Struct4Int calldata data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsCalldataInternal(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function callCalldataToCalldataPublic(IDataTypes.Struct4Int calldata data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsCalldataPublic(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function callCalldataToMemoryInternal(IDataTypes.Struct4Int calldata data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsMemoryInternal(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function callCalldataToMemoryPublic(IDataTypes.Struct4Int calldata data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsMemoryPublic(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToMemoryLibExt(IDataTypes.Struct4Int memory data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      PassLib.useStruct4IntMemory(data, int32(int(i)));
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToCalldataLibExt(IDataTypes.Struct4Int memory data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      PassLib.useStruct4IntCalldata(data, int32(int(i)));
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToMemoryLibInt(IDataTypes.Struct4Int memory data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      PassLib._useStruct4IntMemory(data, int32(int(i)));
    }
    gasUsed = gas0 - gasleft();
  }

  function receiveAsMemoryInternal(IDataTypes.Struct4Int memory m) internal pure returns (int32) {
    m; // hide warning
    return 0;
  }
  function receiveAsMemoryPublic(IDataTypes.Struct4Int memory m) public pure returns (int32) {
    m; // hide warning
    return 0;
  }
  function receiveAsCalldataInternal(IDataTypes.Struct4Int calldata m) internal pure returns (int32) {
    m; // hide warning
    return 0;
  }
  function receiveAsCalldataPublic(IDataTypes.Struct4Int calldata m) public pure returns (int32) {
    m; // hide warning
    return 0;
  }
}