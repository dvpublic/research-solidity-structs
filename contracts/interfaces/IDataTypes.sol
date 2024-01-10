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

  struct Complex1 {
    uint8 a;
    uint8 b;
    uint8 c;
    uint16 d;
    uint8 e;
    uint32 f;
    uint8 g;
    uint8 h;
    Struct4Int s4;
  }

  struct Complex2 {
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