// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

import {IDataTypes} from "../interfaces/IDataTypes.sol";
import "../libs/CreateLib.sol";
import "../libs/PassLib.sol";

contract PassPureVarsEmpty {
  uint public gasUsed;

  function callMemoryToMemoryInternal(uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsMemoryInternal();
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToMemoryPublic(uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsMemoryPublic();
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToMemoryLibExt(uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      PassLib.usePureVarsEmpty();
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToMemoryLibInt(uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      PassLib._usePureVarsEmpty();
    }
    gasUsed = gas0 - gasleft();
  }

  function receiveAsMemoryInternal() internal pure returns (uint) {
    return 0;
  }
  function receiveAsMemoryPublic() public pure returns (uint) {
    return 0;
  }
}