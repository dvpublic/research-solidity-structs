// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

import {IDataTypes} from "../interfaces/IDataTypes.sol";

library ReturnStructIntLib {

  function returnStruct() internal pure returns (IDataTypes.Struct10UInt memory dest) {
    return dest;
  }

}