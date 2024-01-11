// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

import {IDataTypes} from "../interfaces/IDataTypes.sol";

library ReturnComplexUnorderedExtLib {

  function returnStruct() external pure returns (IDataTypes.ComplexUnordered memory dest) {
    return dest;
  }

}