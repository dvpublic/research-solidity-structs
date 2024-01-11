// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

import {IDataTypes} from "../interfaces/IDataTypes.sol";
import "../libs/CreateLib.sol";
import "../libs/PassLib.sol";

contract PassStatArray10Uint {
  uint public gasUsed;

  function callMemoryToMemoryInternal(uint[10] memory data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsMemoryInternal(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToMemoryPublic(uint[10] memory data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsMemoryPublic(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function callCalldataToCalldataInternal(uint[10] calldata data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsCalldataInternal(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function callCalldataToCalldataPublic(uint[10] calldata data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsCalldataPublic(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function callCalldataToMemoryInternal(uint[10] calldata data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsMemoryInternal(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function callCalldataToMemoryPublic(uint[10] calldata data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsMemoryPublic(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToMemoryLibExt(uint[10] memory data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      PassLib.useStatArray10UIntMemory(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToCalldataLibExt(uint[10] memory data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      PassLib.useStatArray10UIntCalldata(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToMemoryLibInt(uint[10] memory data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      PassLib._useStatArray10UIntMemory(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function receiveAsMemoryInternal(uint[10] memory m, uint value) internal pure returns (uint) {
    m; // hide warning
    return value;
  }
  function receiveAsMemoryPublic(uint[10] memory m, uint value) public pure returns (uint) {
    m; // hide warning
    return value;
  }
  function receiveAsCalldataInternal(uint[10] calldata m, uint value) internal pure returns (uint) {
    m; // hide warning
    return value;
  }
  function receiveAsCalldataPublic(uint[10] calldata m, uint value) public pure returns (uint) {
    m; // hide warning
    return value;
  }
}