// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

import {IDataTypes} from "../interfaces/IDataTypes.sol";
import "../libs/CreateLib.sol";
import "../libs/PassLib.sol";

contract PassPureVars10Uint8 {
  uint public gasUsed;

  function callMemoryToMemoryInternal(uint8 a0, uint8 a1, uint8 a2, uint8 a3, uint8 a4, uint8 a5, uint8 a6, uint8 a7, uint8 a8, uint8 a9, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsMemoryInternal(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToMemoryPublic(uint8 a0, uint8 a1, uint8 a2, uint8 a3, uint8 a4, uint8 a5, uint8 a6, uint8 a7, uint8 a8, uint8 a9, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsMemoryPublic(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToMemoryLibExt(uint8 a0, uint8 a1, uint8 a2, uint8 a3, uint8 a4, uint8 a5, uint8 a6, uint8 a7, uint8 a8, uint8 a9, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      PassLib.usePureVars10UInt8Memory(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToMemoryLibInt(uint8 a0, uint8 a1, uint8 a2, uint8 a3, uint8 a4, uint8 a5, uint8 a6, uint8 a7, uint8 a8, uint8 a9, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      PassLib._usePureVars10UInt8Memory(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
    }
    gasUsed = gas0 - gasleft();
  }

  function receiveAsMemoryInternal(uint8, uint8, uint8, uint8, uint8, uint8, uint8, uint8, uint8, uint8) internal pure returns (uint) {
    return 0;
  }
  function receiveAsMemoryPublic(uint8, uint8, uint8, uint8, uint8, uint8, uint8, uint8, uint8, uint8) public pure returns (uint) {
    return 0;
  }
}