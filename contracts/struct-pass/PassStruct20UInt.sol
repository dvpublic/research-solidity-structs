// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

import {IDataTypes} from "../interfaces/IDataTypes.sol";
import "../libs/CreateLib.sol";
import "../libs/PassLib.sol";

contract PassStruct20UInt {
  uint public gasUsed;

  function callMemoryToMemoryInternal(IDataTypes.Struct20UInt memory data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsMemoryInternal(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToMemoryPublic(IDataTypes.Struct20UInt memory data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsMemoryPublic(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function callCalldataToCalldataInternal(IDataTypes.Struct20UInt calldata data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsCalldataInternal(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function callCalldataToCalldataPublic(IDataTypes.Struct20UInt calldata data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsCalldataPublic(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function callCalldataToMemoryInternal(IDataTypes.Struct20UInt calldata data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsMemoryInternal(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function callCalldataToMemoryPublic(IDataTypes.Struct20UInt calldata data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsMemoryPublic(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToMemoryLibExt(IDataTypes.Struct20UInt memory data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      PassLib.useStruct20UIntMemory(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToCalldataLibExt(IDataTypes.Struct20UInt memory data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      PassLib.useStruct20UIntCalldata(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToMemoryLibInt(IDataTypes.Struct20UInt memory data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      PassLib._useStruct20UIntMemory(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function receiveAsMemoryInternal(IDataTypes.Struct20UInt memory m, uint value) internal pure returns (uint) {
    m; // hide warning
    return value;
  }
  function receiveAsMemoryPublic(IDataTypes.Struct20UInt memory m, uint value) public pure returns (uint) {
    m; // hide warning
    return value;
  }
  function receiveAsCalldataInternal(IDataTypes.Struct20UInt calldata m, uint value) internal pure returns (uint) {
    m; // hide warning
    return value;
  }
  function receiveAsCalldataPublic(IDataTypes.Struct20UInt calldata m, uint value) public pure returns (uint) {
    m; // hide warning
    return value;
  }
}