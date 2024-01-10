// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

import {IDataTypes} from "../interfaces/IDataTypes.sol";

library PassLib {
  function _useStruct4IntMemory(IDataTypes.Struct4Int memory dest, int32 value) internal pure returns (int) {
    return dest.a + dest.b + dest.c + dest.d + value;
  }
  function useStruct4IntMemory(IDataTypes.Struct4Int memory dest, int32 value) external pure returns (int) {
    return dest.a + dest.b + dest.c + dest.d + value;
  }
  function useStruct4IntCalldata(IDataTypes.Struct4Int calldata dest, int32 value) external pure returns (int) {
    return dest.a + dest.b + dest.c + dest.d + value;
  }

  function _useStruct10UIntMemory(IDataTypes.Struct10UInt memory dest, uint value) internal pure returns (uint) {
    return dest.a + dest.b + dest.c + dest.d + value;
  }
  function useStruct10UIntMemory(IDataTypes.Struct10UInt memory dest, uint value) external pure returns (uint) {
    return dest.a + dest.b + dest.c + dest.d + value;
  }
  function useStruct10UIntCalldata(IDataTypes.Struct10UInt calldata dest, uint value) external pure returns (uint) {
    return dest.a + dest.b + dest.c + dest.d + value;
  }

  function _useComplex1Memory(IDataTypes.Complex1 memory dest, uint value) internal pure returns (uint) {
    return dest.a + dest.b + dest.c + dest.d + value;
  }
  function useComplex1Memory(IDataTypes.Complex1 memory dest, uint value) external pure returns (uint) {
    return dest.a + dest.b + dest.c + dest.d + value;
  }
  function useComplex1Calldata(IDataTypes.Complex1 calldata dest, uint value) external pure returns (uint) {
    return dest.a + dest.b + dest.c + dest.d + value;
  }
}