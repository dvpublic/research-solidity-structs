// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

import {IDataTypes} from "../interfaces/IDataTypes.sol";
import "../libs/CreateLib.sol";
import "../libs/PassLib.sol";

contract PassComplexUnordered {
  uint public gasUsed;

  function callMemoryToMemoryInternal(IDataTypes.ComplexUnordered memory data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsMemoryInternal(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToMemoryPublic(IDataTypes.ComplexUnordered memory data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsMemoryPublic(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function callCalldataToCalldataInternal(IDataTypes.ComplexUnordered calldata data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsCalldataInternal(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function callCalldataToCalldataPublic(IDataTypes.ComplexUnordered calldata data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsCalldataPublic(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function callCalldataToMemoryInternal(IDataTypes.ComplexUnordered calldata data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsMemoryInternal(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function callCalldataToMemoryPublic(IDataTypes.ComplexUnordered calldata data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      receiveAsMemoryPublic(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToMemoryLibExt(IDataTypes.ComplexUnordered memory data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      PassLib.useComplexUnorderedMemory(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToCalldataLibExt(IDataTypes.ComplexUnordered memory data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      PassLib.useComplexUnorderedCalldata(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function callMemoryToMemoryLibInt(IDataTypes.ComplexUnordered memory data, uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      PassLib._useComplexUnorderedMemory(data, i);
    }
    gasUsed = gas0 - gasleft();
  }

  function receiveAsMemoryInternal(IDataTypes.ComplexUnordered memory m, uint value) internal pure returns (uint) {
    m; // hide warning
    return value;
  }
  function receiveAsMemoryPublic(IDataTypes.ComplexUnordered memory m, uint value) public pure returns (uint) {
    m; // hide warning
    return value;
  }
  function receiveAsCalldataInternal(IDataTypes.ComplexUnordered calldata m, uint value) internal pure returns (uint) {
    m; // hide warning
    return value;
  }
  function receiveAsCalldataPublic(IDataTypes.ComplexUnordered calldata m, uint value) public pure returns (uint) {
    m; // hide warning
    return value;
  }
}