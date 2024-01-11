// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

import {IDataTypes} from "../interfaces/IDataTypes.sol";
import "../libs/CreateLib.sol";
import "../libs/PassLib.sol";

contract PassPureVars10Int32 {
  uint public gasUsed;

  function callMemoryToMemoryInternal(int32 a0, int32 a1, int32 a2, int32 a3, int32 a4, int32 a5, int32 a6, int32 a7, int32 a8, int32 a9, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsMemoryInternal(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToMemoryPublic(int32 a0, int32 a1, int32 a2, int32 a3, int32 a4, int32 a5, int32 a6, int32 a7, int32 a8, int32 a9, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsMemoryPublic(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToMemoryLibExt(int32 a0, int32 a1, int32 a2, int32 a3, int32 a4, int32 a5, int32 a6, int32 a7, int32 a8, int32 a9, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      PassLib.usePureVars10Int32Memory(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToMemoryLibInt(int32 a0, int32 a1, int32 a2, int32 a3, int32 a4, int32 a5, int32 a6, int32 a7, int32 a8, int32 a9, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      PassLib._usePureVars10Int32Memory(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
    }
    gasUsed = gas0 - gasleft();
  }

  function receiveAsMemoryInternal(int32, int32, int32, int32, int32, int32, int32, int32, int32, int32) internal pure returns (uint) {
    return 0;
  }
  function receiveAsMemoryPublic(int32, int32, int32, int32, int32, int32, int32, int32, int32, int32) public pure returns (uint) {
    return 0;
  }
}