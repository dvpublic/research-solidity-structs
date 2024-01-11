// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

import {IDataTypes} from "../interfaces/IDataTypes.sol";
import "../libs/CreateLib.sol";
import "../libs/PassLib.sol";

contract PassDynArrayUint {
  uint public gasUsed;

  function callMemoryToMemoryInternal(uint[] memory data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsMemoryInternal(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToMemoryPublic(uint[] memory data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsMemoryPublic(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function callCalldataToCalldataInternal(uint[] calldata data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsCalldataInternal(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function callCalldataToCalldataPublic(uint[] calldata data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsCalldataPublic(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function callCalldataToMemoryInternal(uint[] calldata data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsMemoryInternal(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function callCalldataToMemoryPublic(uint[] calldata data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsMemoryPublic(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToMemoryLibExt(uint[] memory data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      PassLib.useDynArrayUIntMemory(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToCalldataLibExt(uint[] memory data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      PassLib.useDynArrayUIntCalldata(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToMemoryLibInt(uint[] memory data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      PassLib._useDynArrayUIntMemory(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function receiveAsMemoryInternal(uint[] memory m, uint value) internal pure returns (uint) {
    m; // hide warning
    return value;
  }
  function receiveAsMemoryPublic(uint[] memory m, uint value) public pure returns (uint) {
    m; // hide warning
    return value;
  }
  function receiveAsCalldataInternal(uint[] calldata m, uint value) internal pure returns (uint) {
    m; // hide warning
    return value;
  }
  function receiveAsCalldataPublic(uint[] calldata m, uint value) public pure returns (uint) {
    m; // hide warning
    return value;
  }
}