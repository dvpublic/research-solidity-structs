// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

import {IDataTypes} from "../interfaces/IDataTypes.sol";

library TwoReturnStatArrayExtLib {

  function returnStruct() external pure returns (uint[10] memory dest) {
    return dest;
  }

  function returnStructTwo() external pure returns (uint[10] memory dest) {
    return dest;
  }
}