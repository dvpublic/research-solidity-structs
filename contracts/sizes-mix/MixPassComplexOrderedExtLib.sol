// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

import {IDataTypes} from "../interfaces/IDataTypes.sol";

library MixPassComplexOrderedExtLib {

  function acceptStruct(IDataTypes.ComplexOrdered memory) external pure returns (IDataTypes.ComplexOrdered memory d) {
    return d;
  }

}