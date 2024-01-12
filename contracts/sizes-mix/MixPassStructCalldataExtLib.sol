// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

import {IDataTypes} from "../interfaces/IDataTypes.sol";

library MixPassStructCalldataExtLib {

  function acceptStruct(IDataTypes.Struct10UInt calldata d) external pure returns (IDataTypes.Struct10UInt calldata){
    return d;
  }
}