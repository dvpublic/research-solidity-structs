// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

contract SlotReadWrite {
//region Data types
  struct T8 {
    uint8 a1;
    uint8 a2;
    uint8 a3;
    uint8 a4;
    uint8 a5;
    uint8 a6;
    uint8 a7;
    uint8 a8;
    uint8 a9;
    uint8 a10;
    uint8 a11;
    uint8 a12;
    uint8 a13;
    uint8 a14;
    uint8 a15;
    uint8 a16;
    uint8 a17;
    uint8 a18;
    uint8 a19;
    uint8 a20;
    uint8 a21;
    uint8 a22;
    uint8 a23;
    uint8 a24;
    uint8 a25;
    uint8 a26;
    uint8 a27;
    uint8 a28;
    uint8 a29;
    uint8 a30;
    uint8 a31;
    uint8 a32;
  }

  struct T16 {
    uint16 a1;
    uint16 a2;
    uint16 a3;
    uint16 a4;
    uint16 a5;
    uint16 a6;
    uint16 a7;
    uint16 a8;
    uint16 a9;
    uint16 a10;
    uint16 a11;
    uint16 a12;
    uint16 a13;
    uint16 a14;
    uint16 a15;
    uint16 a16;
  }

  struct T32 {
    uint32 a1;
    uint32 a2;
    uint32 a3;
    uint32 a4;
    uint32 a5;
    uint32 a6;
    uint32 a7;
    uint32 a8;
  }

  struct T64 {
    uint64 a1;
    uint64 a2;
    uint64 a3;
    uint64 a4;
  }

  struct T64int {
    int64 a1;
    int64 a2;
    int64 a3;
    int64 a4;
  }

  struct T128 {
    uint128 a1;
    uint128 a2;
  }

  struct T128int {
    int128 a1;
    int128 a2;
  }
//endregion Data types

  uint public gasUsed;
  uint[] private _tt256;
  T8[] private _tt8;
  T16[] private _tt16;
  T32[] private _tt32;
  T64[] private _tt64;
  T64int[] private _tt64int;
  T128[] private _tt128;
  T128int[] private _tt128int;

  constructor() {
    // warm up
    _tt256.push(0);

    T8 memory t8;
    _tt8.push(t8);

    T16 memory t16;
    _tt16.push(t16);

    T32 memory t32;
    _tt32.push(t32);

    T64 memory t64;
    _tt64.push(t64);

    T64int memory t64int;
    _tt64int.push(t64int);

    T128 memory t128;
    _tt128.push(t128);

    T128int memory t128int;
    _tt128int.push(t128int);
  }

//region Write
  function writeUint(uint value) external {
    uint gas0 = gasleft();
    _tt256.push(value);
    gasUsed = gas0 - gasleft();
  }

  function writeT8(T8 memory t8) external {
    uint gas0 = gasleft();
    _tt8.push(t8);
    gasUsed = gas0 - gasleft();
  }

  function writeT16(T16 memory t16) external {
    uint gas0 = gasleft();
    _tt16.push(t16);
    gasUsed = gas0 - gasleft();
  }

  function writeT32(T32 memory t32) external {
    uint gas0 = gasleft();
    _tt32.push(t32);
    gasUsed = gas0 - gasleft();
  }

  function writeT64(T64 memory t64) external {
    uint gas0 = gasleft();
    _tt64.push(t64);
    gasUsed = gas0 - gasleft();
  }

  function writeT64int(T64int memory t64int) external {
    uint gas0 = gasleft();
    _tt64int.push(t64int);
    gasUsed = gas0 - gasleft();
  }

  function writeT128(T128 memory t128) external {
    uint gas0 = gasleft();
    _tt128.push(t128);
    gasUsed = gas0 - gasleft();
  }

  function writeT128int(T128int memory t128int) external {
    uint gas0 = gasleft();
    _tt128int.push(t128int);
    gasUsed = gas0 - gasleft();
  }
//endregion Write

//region Read
  function readUint() external returns (uint value) {
    uint gas0 = gasleft();
    value = _tt256[0];
    gasUsed = gas0 - gasleft();
  }

  function readT8() external returns (T8 memory t8) {
    uint gas0 = gasleft();
    t8 = _tt8[0];
    gasUsed = gas0 - gasleft();
    return t8;
  }

  function readT16() external returns (T16 memory t16) {
    uint gas0 = gasleft();
    t16 = _tt16[0];
    gasUsed = gas0 - gasleft();
  }

  function readT32() external returns (T32 memory t32) {
    uint gas0 = gasleft();
    t32 = _tt32[0];
    gasUsed = gas0 - gasleft();
  }

  function readT64() external returns (T64 memory t64) {
    uint gas0 = gasleft();
    t64 = _tt64[0];
    gasUsed = gas0 - gasleft();
  }

  function readT64int() external returns (T64int memory t64int) {
    uint gas0 = gasleft();
    t64int = _tt64int[0];
    gasUsed = gas0 - gasleft();
  }

  function readT128() external returns (T128 memory t128) {
    uint gas0 = gasleft();
    t128 = _tt128[0];
    gasUsed = gas0 - gasleft();
  }

  function readT128int() external returns (T128int memory t128int) {
    uint gas0 = gasleft();
    t128int = _tt128int[0];
    gasUsed = gas0 - gasleft();
  }
//endregion Read
}