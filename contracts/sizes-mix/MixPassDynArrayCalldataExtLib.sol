// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

import {IDataTypes} from "../interfaces/IDataTypes.sol";

library MixPassDynArrayCalldataExtLib {

  function acceptStruct(uint[] calldata d) external pure returns (uint[] calldata){
    return d;
  }
}