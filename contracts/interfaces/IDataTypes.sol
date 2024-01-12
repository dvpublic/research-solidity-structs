// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

interface IDataTypes {
  struct Struct4Uint8 {
    uint8 a;
    uint8 b;
    uint8 c;
    uint8 d;
  }

  struct Struct2Arrays {
    uint8[] aa;
    int32[] bb;
  }

  struct Struct4Int {
    int32 a;
    int32 b;
    int32 c;
    int32 d;
  }

  struct Struct10UInt {
    uint a;
    uint b;
    uint c;
    uint d;
    uint e;
    uint f;
    uint g;
    uint h;
    uint i;
    uint j;
  }

  struct Struct1UInt {
    uint a;
  }

  struct Struct10UInt8 {
    uint8 a;
    uint8 b;
    uint8 c;
    uint8 d;
    uint8 e;
    uint8 f;
    uint8 g;
    uint8 h;
    uint8 i;
    uint8 j;
  }

  struct Struct10Int32 {
    int32 a;
    int32 b;
    int32 c;
    int32 d;
    int32 e;
    int32 f;
    int32 g;
    int32 h;
    int32 i;
    int32 j;
  }

  struct Struct5UInt {
    uint a;
    uint b;
    uint c;
    uint d;
    uint e;
  }

  struct Struct20UInt {
    uint a;
    uint b;
    uint c;
    uint d;
    uint e;
    uint f;
    uint g;
    uint h;
    uint i;
    uint j;
    uint a2;
    uint b2;
    uint c2;
    uint d2;
    uint e2;
    uint f2;
    uint g2;
    uint h2;
    uint i2;
    uint j2;
  }

  struct Struct30UInt {
    uint a;
    uint b;
    uint c;
    uint d;
    uint e;
    uint f;
    uint g;
    uint h;
    uint i;
    uint j;
    uint a2;
    uint b2;
    uint c2;
    uint d2;
    uint e2;
    uint f2;
    uint g2;
    uint h2;
    uint i2;
    uint j2;
    uint a3;
    uint b3;
    uint c3;
    uint d3;
    uint e3;
    uint f3;
    uint g3;
    uint h3;
    uint i3;
    uint j3;
  }

  struct ComplexUnordered {
    uint8 b1;
    uint u1;
    uint8 b2;
    uint16 s1;
    uint32 t1;
    uint u2;
    address a1;
    uint16 s2;
    Struct4Int s4;
    uint32 t2;
    uint[] aa1;
    address a2;
    uint[] aa2;
  }

  struct ComplexOrdered {
    uint8 b1;
    uint8 b2;
    uint16 s1;
    uint16 s2;
    address a1;
    address a2;
    uint32 t1;
    uint32 t2;
    uint u1;
    uint u2;
    Struct4Int s4;
    uint[] aa1;
    uint[] aa2;
  }

  struct Complex21 {
    uint8 a;
    uint16 b;
    uint8 c;

    uint32 d;

    Struct2Arrays e;
    Struct2Arrays f;

    uint32 g;
    int32 h;
    int32 i;
    int32 j;
    int32 k;
    int32 m;

    address[] nn;
    uint32[] pp;
  }

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

}