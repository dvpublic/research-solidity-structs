// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

import {IDataTypes} from "../interfaces/IDataTypes.sol";

library MixPassDynArrayExtLib {

  function acceptStruct(uint[] memory d) external pure returns (uint[] memory){
    return d;
  }
}