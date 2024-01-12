// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

import {IDataTypes} from "../interfaces/IDataTypes.sol";

library MixPassStructExtLib {

  function acceptStruct(IDataTypes.Struct10UInt memory d) external pure returns (IDataTypes.Struct10UInt memory){
    return d;
  }
}