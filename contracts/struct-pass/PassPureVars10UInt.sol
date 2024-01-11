// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

import {IDataTypes} from "../interfaces/IDataTypes.sol";
import "../libs/CreateLib.sol";
import "../libs/PassLib.sol";

contract PassPureVars10Uint {
  uint public gasUsed;

  function callMemoryToMemoryInternal(uint a0, uint a1, uint a2, uint a3, uint a4, uint a5, uint a6, uint a7, uint a8, uint a9, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsMemoryInternal(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToMemoryPublic(uint a0, uint a1, uint a2, uint a3, uint a4, uint a5, uint a6, uint a7, uint a8, uint a9, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsMemoryPublic(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToMemoryLibExt(uint a0, uint a1, uint a2, uint a3, uint a4, uint a5, uint a6, uint a7, uint a8, uint a9, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      PassLib.usePureVars10UIntMemory(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToMemoryLibInt(uint a0, uint a1, uint a2, uint a3, uint a4, uint a5, uint a6, uint a7, uint a8, uint a9, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      PassLib._usePureVars10UIntMemory(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
    }
    gasUsed = gas0 - gasleft();
  }

  function receiveAsMemoryInternal(uint, uint, uint, uint, uint, uint, uint, uint, uint, uint) internal pure returns (uint) {
    return 0;
  }
  function receiveAsMemoryPublic(uint, uint, uint, uint, uint, uint, uint, uint, uint, uint) public pure returns (uint) {
    return 0;
  }
}