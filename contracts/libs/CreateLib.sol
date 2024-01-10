// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

import {IDataTypes} from "../interfaces/IDataTypes.sol";

library CreateLib{
//region Struct4Int
  function _initStruct4Int(IDataTypes.Struct4Int memory dest, int32 value) internal pure {
    dest.a = 1;
    dest.b = 2;
    dest.c = 3;
    dest.d = value;
  }

  function initStruct4Int(int32 value) external pure returns (IDataTypes.Struct4Int memory) {
    IDataTypes.Struct4Int memory dest;
    dest.a = 1;
    dest.b = 2;
    dest.c = 3;
    dest.d = value;
    return dest;
  }
//endregion Struct4Int

//region Struct10UInt
  function _initStruct10UInt(IDataTypes.Struct10UInt memory dest, uint value) internal pure {
    dest.a = 1;
    dest.b = 2;
    dest.c = 3;
    dest.d = 4;
    dest.e = 5;
    dest.f = 6;
    dest.g = 7;
    dest.h = 8;
    dest.i = 9;
    dest.j = value;
  }

  function initStruct10UInt(uint value) external pure returns (IDataTypes.Struct10UInt memory) {
    IDataTypes.Struct10UInt memory dest;
    dest.a = 1;
    dest.b = 2;
    dest.c = 3;
    dest.d = 4;
    dest.e = 5;
    dest.f = 6;
    dest.g = 7;
    dest.h = 8;
    dest.i = 9;
    dest.j = value;
    return dest;
  }
//endregion Struct10UInt

//region Complex1
  function _initComplex1(IDataTypes.Complex1 memory dest, int32 value) internal pure {
    dest.a = 1;
    dest.b = 2;
    dest.c = 3;
    dest.d = 4;
    dest.e = 5;
    dest.f = 6;
    dest.g = 7;
    dest.h = 8;
    dest.s4.a = 1;
    dest.s4.b = 2;
    dest.s4.c = 3;
    dest.s4.d = value;
  }

  function initComplex1(int32 value) external pure returns (IDataTypes.Complex1 memory) {
    IDataTypes.Complex1 memory dest;
    dest.a = 1;
    dest.b = 2;
    dest.c = 3;
    dest.d = 4;
    dest.e = 5;
    dest.f = 6;
    dest.g = 7;
    dest.h = 8;
    dest.s4.a = 1;
    dest.s4.b = 2;
    dest.s4.c = 3;
    dest.s4.d = value;
    return dest;
  }
//endregion Complex1
}