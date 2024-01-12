// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

import {IDataTypes} from "../../interfaces/IDataTypes.sol";
import "../../libs/CreateLib.sol";
import "../../libs/PassLib.sol";

contract PassStatArray5Uint {
  uint public gasUsed;

  function callMemoryToMemoryInternal(uint[5] memory data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsMemoryInternal(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToMemoryPublic(uint[5] memory data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsMemoryPublic(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function callCalldataToCalldataInternal(uint[5] calldata data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsCalldataInternal(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function callCalldataToCalldataPublic(uint[5] calldata data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsCalldataPublic(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function callCalldataToMemoryInternal(uint[5] calldata data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsMemoryInternal(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function callCalldataToMemoryPublic(uint[5] calldata data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsMemoryPublic(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToMemoryLibExt(uint[5] memory data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      PassLib.useStatArray5UIntMemory(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToCalldataLibExt(uint[5] memory data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      PassLib.useStatArray5UIntCalldata(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToMemoryLibInt(uint[5] memory data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      PassLib._useStatArray5UIntMemory(data);
    }
    gasUsed = gas0 - gasleft();
  }

  function receiveAsMemoryInternal(uint[5] memory m) internal pure returns (uint) {
    m; // hide warning
    return 0;
  }
  function receiveAsMemoryPublic(uint[5] memory m) public pure returns (uint) {
    m; // hide warning
    return 0;
  }
  function receiveAsCalldataInternal(uint[5] calldata m) internal pure returns (uint) {
    m; // hide warning
    return 0;
  }
  function receiveAsCalldataPublic(uint[5] calldata m) public pure returns (uint) {
    m; // hide warning
    return 0;
  }
}