// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

import {IDataTypes} from "../interfaces/IDataTypes.sol";

library TwoReturnStructExtLib {

  function returnStruct() external pure returns (IDataTypes.Struct10UInt memory dest) {
    return dest;
  }

  function returnStructTwo() external pure returns (IDataTypes.Struct10UInt memory dest) {
    return dest;
  }
}