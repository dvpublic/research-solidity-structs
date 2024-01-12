// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

import {IDataTypes} from "../interfaces/IDataTypes.sol";

library MixPassComplexUnorderedExtLib {

  function acceptStruct(IDataTypes.ComplexUnordered memory) external pure returns (IDataTypes.ComplexUnordered memory d){
    return d;
  }
}