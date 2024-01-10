// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

import {IDataTypes} from "../interfaces/IDataTypes.sol";

library NItemsLib {
  struct Ten {
    uint a0;
    uint a1;
    uint a2;
    uint a3;
    uint a4;
    uint a5;
    uint a6;
    uint a7;
    uint a8;
    uint a9;
  }


  function _calcStruct(IDataTypes.Ten memory t) internal pure returns (uint dest) {
    return t.a0 + t.a1 + t.a2 + t.a3 + t.a4 + t.a5 + t.a6 + t.a7 + t.a8 + t.a9;
  }
  function calcStructMemory(IDataTypes.Ten memory t) external pure returns (uint dest) {
    return t.a0 + t.a1 + t.a2 + t.a3 + t.a4 + t.a5 + t.a6 + t.a7 + t.a8 + t.a9;
  }
  function calcStructCalldata(IDataTypes.Ten calldata t) external pure returns (uint dest) {
    return t.a0 + t.a1 + t.a2 + t.a3 + t.a4 + t.a5 + t.a6 + t.a7 + t.a8 + t.a9;
  }


  function _calcPureVars(uint a0, uint a1, uint a2, uint a3, uint a4, uint a5, uint a6, uint a7, uint a8, uint a9) internal pure returns (uint) {
    return (a0 + a1) + (a2 + a3) + (a4 + a5) + (a6 + a7) + (a8 + a9);
  }
  function calcPureVars(uint a0, uint a1, uint a2, uint a3, uint a4, uint a5, uint a6, uint a7, uint a8, uint a9) external pure returns (uint) {
    return (a0 + a1) + (a2 + a3) + (a4 + a5) + (a6 + a7) + (a8 + a9);
  }

  function _calcArray(uint[10] memory t) internal pure returns (uint dest) {
    return t[0] + t[1] + t[2] + t[3] + t[4] + t[5] + t[6] + t[7] + t[8] + t[9];
  }
  function calcArrayMemory(uint[10] memory t) external pure returns (uint dest) {
    return t[0] + t[1] + t[2] + t[3] + t[4] + t[5] + t[6] + t[7] + t[8] + t[9];
  }
  function calcArrayCalldata(uint[10] calldata t) external pure returns (uint dest) {
    return t[0] + t[1] + t[2] + t[3] + t[4] + t[5] + t[6] + t[7] + t[8] + t[9];
  }

  function _calcDynArray(uint[] memory t) internal pure returns (uint dest) {
    return t[0] + t[1] + t[2] + t[3] + t[4] + t[5] + t[6] + t[7] + t[8] + t[9];
  }
  function calcDynArrayMemory(uint[] memory t) external pure returns (uint dest) {
    return t[0] + t[1] + t[2] + t[3] + t[4] + t[5] + t[6] + t[7] + t[8] + t[9];
  }
  function calcDynArrayCalldata(uint[] calldata t) external pure returns (uint dest) {
    return t[0] + t[1] + t[2] + t[3] + t[4] + t[5] + t[6] + t[7] + t[8] + t[9];
  }


}