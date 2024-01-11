// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

import {IDataTypes} from "../interfaces/IDataTypes.sol";

library CreateLib {
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

//region ComplexUnordered
  function _initComplexUnordered(IDataTypes.ComplexUnordered memory dest, uint value) internal pure {
    dest.b1 = 1;
    dest.b2 = 2;
    dest.s1 = 3;
    dest.s2 = 4;
    dest.a1 = address(0);
    dest.a2 = address(0);
    dest.t1 = 9;
    dest.t2 = 10;
    dest.u1 = 11;
    dest.u2 = 12;
    dest.s4 = IDataTypes.Struct4Int({a: 1, b: 2, c: 3, d: 4});
    dest.aa1 = new uint[](value);
    dest.aa2 = new uint[](value);
  }

  function initComplexUnordered(uint value) external pure returns (IDataTypes.ComplexUnordered memory) {
    IDataTypes.ComplexUnordered memory dest;
    dest.b1 = 1;
    dest.b2 = 2;
    dest.s1 = 3;
    dest.s2 = 4;
    dest.a1 = address(0);
    dest.a2 = address(0);
    dest.t1 = 9;
    dest.t2 = 10;
    dest.u1 = 11;
    dest.u2 = 12;
    dest.s4 = IDataTypes.Struct4Int({a: 1, b: 2, c: 3, d: 4});
    dest.aa1 = new uint[](value);
    dest.aa2 = new uint[](value);
    return dest;
  }
//endregion ComplexUnordered

//region ComplexOrdered
  function _initComplexOrdered(IDataTypes.ComplexOrdered memory dest, uint value) internal pure {
    dest.b1 = 1;
    dest.b2 = 2;
    dest.s1 = 3;
    dest.s2 = 4;
    dest.a1 = address(0);
    dest.a2 = address(0);
    dest.t1 = 9;
    dest.t2 = 10;
    dest.u1 = 11;
    dest.u2 = 12;
    dest.s4 = IDataTypes.Struct4Int({a: 1, b: 2, c: 3, d: 4});
    dest.aa1 = new uint[](value);
    dest.aa2 = new uint[](value);
  }

  function initComplexOrdered(uint value) external pure returns (IDataTypes.ComplexOrdered memory) {
    IDataTypes.ComplexOrdered memory dest;
    dest.b1 = 1;
    dest.b2 = 2;
    dest.s1 = 3;
    dest.s2 = 4;
    dest.a1 = address(0);
    dest.a2 = address(0);
    dest.t1 = 9;
    dest.t2 = 10;
    dest.u1 = 11;
    dest.u2 = 12;
    dest.s4 = IDataTypes.Struct4Int({a: 1, b: 2, c: 3, d: 4});
    dest.aa1 = new uint[](value);
    dest.aa2 = new uint[](value);
    return dest;
  }
//endregion ComplexOrdered
}