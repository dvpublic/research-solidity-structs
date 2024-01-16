// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

import {IDataTypes} from "../interfaces/IDataTypes.sol";

/**
TODO:

struct S {
uint8 v1;
uint8 v2;
uint8 v3;
uint8 v4;
}

VS

bytes32 packed uint8
*/

library PassLib {
  function _useStruct4IntMemory(IDataTypes.Struct4Int memory dest) internal pure returns (int) {
    dest; // hide warning
    return 0;
  }
  function useStruct4IntMemory(IDataTypes.Struct4Int memory dest) external pure returns (int) {
    dest; // hide warning
    return 0;
  }
  function useStruct4IntCalldata(IDataTypes.Struct4Int calldata dest) external pure returns (int) {
    dest; // hide warning
    return 0;
  }


  function _useStruct10UIntMemory(IDataTypes.Struct10UInt memory dest) internal pure returns (uint) {
    dest; // hide warning
    return 0;
  }
  function useStruct10UIntMemory(IDataTypes.Struct10UInt memory dest) external pure returns (uint) {
    dest; // hide warning
    return 0;
  }
  function useStruct10UIntCalldata(IDataTypes.Struct10UInt calldata dest) external pure returns (uint) {
    dest; // hide warning
    return 0;
  }


  function _useStruct5UIntMemory(IDataTypes.Struct5UInt memory dest) internal pure returns (uint) {
    dest; // hide warning
    return 0;
  }
  function useStruct5UIntMemory(IDataTypes.Struct5UInt memory dest) external pure returns (uint) {
    dest; // hide warning
    return 0;
  }
  function useStruct5UIntCalldata(IDataTypes.Struct5UInt calldata dest) external pure returns (uint) {
    dest; // hide warning
    return 0;
  }


  function _useStruct20UIntMemory(IDataTypes.Struct20UInt memory dest) internal pure returns (uint) {
    dest; // hide warning
    return 0;
  }
  function useStruct20UIntMemory(IDataTypes.Struct20UInt memory dest) external pure returns (uint) {
    dest; // hide warning
    return 0;
  }
  function useStruct20UIntCalldata(IDataTypes.Struct20UInt calldata dest) external pure returns (uint) {
    dest; // hide warning
    return 0;
  }


  function _useStruct30UIntMemory(IDataTypes.Struct30UInt memory dest) internal pure returns (uint) {
    dest; // hide warning
    return 0;
  }
  function useStruct30UIntMemory(IDataTypes.Struct30UInt memory dest) external pure returns (uint) {
    dest; // hide warning
    return 0;
  }
  function useStruct30UIntCalldata(IDataTypes.Struct30UInt calldata dest) external pure returns (uint) {
    dest; // hide warning
    return 0;
  }


  function _useComplexOrderedMemory(IDataTypes.ComplexOrdered memory dest) internal pure returns (uint) {
    dest; // hide warning
    return 0;
  }
  function useComplexOrderedMemory(IDataTypes.ComplexOrdered memory dest) external pure returns (uint) {
    dest; // hide warning
    return 0;
  }
  function useComplexOrderedCalldata(IDataTypes.ComplexOrdered calldata dest) external pure returns (uint) {
    dest; // hide warning
    return 0;
  }


  function _useComplexUnorderedMemory(IDataTypes.ComplexUnordered memory dest) internal pure returns (uint) {
    dest; // hide warning
    return 0;
  }
  function useComplexUnorderedMemory(IDataTypes.ComplexUnordered memory dest) external pure returns (uint) {
    dest; // hide warning
    return 0;
  }
  function useComplexUnorderedCalldata(IDataTypes.ComplexUnordered calldata dest) external pure returns (uint) {
    dest; // hide warning
    return 0;
  }


  function _usePureVars10UIntMemory(uint, uint, uint, uint, uint, uint, uint, uint, uint, uint) internal pure returns (uint) {
    return 0;
  }
  function usePureVars10UIntMemory(uint, uint, uint, uint, uint, uint, uint, uint, uint, uint) external pure returns (uint) {
    return 0;
  }


  function _usePureVars5UIntMemory(uint, uint, uint, uint, uint) internal pure returns (uint) {
    return 0;
  }
  function usePureVars5UIntMemory(uint, uint, uint, uint, uint) external pure returns (uint) {
    return 0;
  }


  function _useDynArrayUIntMemory(uint[] memory dest) internal pure returns (uint) {
    dest; // hide warning
    return 0;
  }
  function useDynArrayUIntMemory(uint[] memory dest) external pure returns (uint) {
    dest; // hide warning
    return 0;
  }
  function useDynArrayUIntCalldata(uint[] calldata dest) external pure returns (uint) {
    dest; // hide warning
    return 0;
  }


  function _useStatArray10UIntMemory(uint[10] memory dest) internal pure returns (uint) {
    dest; // hide warning
    return 0;
  }
  function useStatArray10UIntMemory(uint[10] memory dest) external pure returns (uint) {
    dest; // hide warning
    return 0;
  }
  function useStatArray10UIntCalldata(uint[10] calldata dest) external pure returns (uint) {
    dest; // hide warning
    return 0;
  }



  function _useStatArray5UIntMemory(uint[5] memory dest) internal pure returns (uint) {
    dest; // hide warning
    return 0;
  }
  function useStatArray5UIntMemory(uint[5] memory dest) external pure returns (uint) {
    dest; // hide warning
    return 0;
  }
  function useStatArray5UIntCalldata(uint[5] calldata dest) external pure returns (uint) {
    dest; // hide warning
    return 0;
  }


  function _useStruct10UInt8Memory(IDataTypes.Struct10UInt8 memory dest) internal pure returns (uint) {
    dest; // hide warning
    return 0;
  }
  function useStruct10UInt8Memory(IDataTypes.Struct10UInt8 memory dest) external pure returns (uint) {
    dest; // hide warning
    return 0;
  }
  function useStruct10UInt8Calldata(IDataTypes.Struct10UInt8 calldata dest) external pure returns (uint) {
    dest; // hide warning
    return 0;
  }


  function _usePureVars10UInt8Memory(uint8, uint8, uint8, uint8, uint8, uint8, uint8, uint8, uint8, uint8) internal pure returns (uint) {
    return 0;
  }
  function usePureVars10UInt8Memory(uint8, uint8, uint8, uint8, uint8, uint8, uint8, uint8, uint8, uint8) external pure returns (uint) {
    return 0;
  }


  function _useDynArrayUInt8Memory(uint8[] memory dest) internal pure returns (uint) {
    dest; // hide warning
    return 0;
  }
  function useDynArrayUInt8Memory(uint8[] memory dest) external pure returns (uint) {
    dest; // hide warning
    return 0;
  }
  function useDynArrayUInt8Calldata(uint8[] calldata dest) external pure returns (uint) {
    dest; // hide warning
    return 0;
  }


  function _useStatArray10UInt8Memory(uint8[10] memory dest) internal pure returns (uint) {
    dest; // hide warning
    return 0;
  }
  function useStatArray10UInt8Memory(uint8[10] memory dest) external pure returns (uint) {
    dest; // hide warning
    return 0;
  }
  function useStatArray10UInt8Calldata(uint8[10] calldata dest) external pure returns (uint) {
    dest; // hide warning
    return 0;
  }


  function _useStruct10Int32Memory(IDataTypes.Struct10Int32 memory dest) internal pure returns (uint) {
    dest; // hide warning
    return 0;
  }
  function useStruct10Int32Memory(IDataTypes.Struct10Int32 memory dest) external pure returns (uint) {
    dest; // hide warning
    return 0;
  }
  function useStruct10Int32Calldata(IDataTypes.Struct10Int32 calldata dest) external pure returns (uint) {
    dest; // hide warning
    return 0;
  }


  function _usePureVars10Int32Memory(int32, int32, int32, int32, int32, int32, int32, int32, int32, int32) internal pure returns (uint) {
    return 0;
  }
  function usePureVars10Int32Memory(int32, int32, int32, int32, int32, int32, int32, int32, int32, int32) external pure returns (uint) {
    return 0;
  }

  function _useDynArrayInt32Memory(int32[] memory dest) internal pure returns (uint) {
    dest; // hide warning
    return 0;
  }
  function useDynArrayInt32Memory(int32[] memory dest) external pure returns (uint) {
    dest; // hide warning
    return 0;
  }
  function useDynArrayInt32Calldata(int32[] calldata dest) external pure returns (uint) {
    dest; // hide warning
    return 0;
  }

  function _useStatArray10Int32Memory(int32[10] memory dest) internal pure returns (uint) {
    dest; // hide warning
    return 0;
  }
  function useStatArray10Int32Memory(int32[10] memory dest) external pure returns (uint) {
    dest; // hide warning
    return 0;
  }
  function useStatArray10Int32Calldata(int32[10] calldata dest) external pure returns (uint) {
    dest; // hide warning
    return 0;
  }


  function _usePureVarsEmpty() internal pure returns (uint) {
    return 0;
  }
  function usePureVarsEmpty() external pure returns (uint) {
    return 0;
  }

  function _useStruct1UIntMemory(IDataTypes.Struct1UInt memory dest) internal pure returns (uint) {
    dest; // hide warning
    return 0;
  }
  function useStruct1UIntMemory(IDataTypes.Struct1UInt memory dest) external pure returns (uint) {
    dest; // hide warning
    return 0;
  }
  function useStruct1UIntCalldata(IDataTypes.Struct1UInt calldata dest) external pure returns (uint) {
    dest; // hide warning
    return 0;
  }
}
