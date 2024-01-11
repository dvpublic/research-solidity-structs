// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

import {IDataTypes} from "../interfaces/IDataTypes.sol";

library PassLib {
  function _useStruct4IntMemory(IDataTypes.Struct4Int memory dest, int32 value) internal pure returns (int) {
    dest; // hide warning
    return value;
  }
  function useStruct4IntMemory(IDataTypes.Struct4Int memory dest, int32 value) external pure returns (int) {
    dest; // hide warning
    return value;
  }
  function useStruct4IntCalldata(IDataTypes.Struct4Int calldata dest, int32 value) external pure returns (int) {
    dest; // hide warning
    return value;
  }


  function _useStruct10UIntMemory(IDataTypes.Struct10UInt memory dest, uint value) internal pure returns (uint) {
    dest; // hide warning
    return value;
  }
  function useStruct10UIntMemory(IDataTypes.Struct10UInt memory dest, uint value) external pure returns (uint) {
    dest; // hide warning
    return value;
  }
  function useStruct10UIntCalldata(IDataTypes.Struct10UInt calldata dest, uint value) external pure returns (uint) {
    dest; // hide warning
    return value;
  }

  function _useStruct20UIntMemory(IDataTypes.Struct20UInt memory dest, uint value) internal pure returns (uint) {
    dest; // hide warning
    return value;
  }
  function useStruct20UIntMemory(IDataTypes.Struct20UInt memory dest, uint value) external pure returns (uint) {
    dest; // hide warning
    return value;
  }
  function useStruct20UIntCalldata(IDataTypes.Struct20UInt calldata dest, uint value) external pure returns (uint) {
    dest; // hide warning
    return value;
  }


  function _useStruct30UIntMemory(IDataTypes.Struct30UInt memory dest, uint value) internal pure returns (uint) {
    dest; // hide warning
    return value;
  }
  function useStruct30UIntMemory(IDataTypes.Struct30UInt memory dest, uint value) external pure returns (uint) {
    dest; // hide warning
    return value;
  }
  function useStruct30UIntCalldata(IDataTypes.Struct30UInt calldata dest, uint value) external pure returns (uint) {
    dest; // hide warning
    return value;
  }


  function _useComplexOrderedMemory(IDataTypes.ComplexOrdered memory dest, uint value) internal pure returns (uint) {
    dest; // hide warning
    return value;
  }
  function useComplexOrderedMemory(IDataTypes.ComplexOrdered memory dest, uint value) external pure returns (uint) {
    dest; // hide warning
    return value;
  }
  function useComplexOrderedCalldata(IDataTypes.ComplexOrdered calldata dest, uint value) external pure returns (uint) {
    dest; // hide warning
    return value;
  }


  function _useComplexUnorderedMemory(IDataTypes.ComplexUnordered memory dest, uint value) internal pure returns (uint) {
    dest; // hide warning
    return value;
  }
  function useComplexUnorderedMemory(IDataTypes.ComplexUnordered memory dest, uint value) external pure returns (uint) {
    dest; // hide warning
    return value;
  }
  function useComplexUnorderedCalldata(IDataTypes.ComplexUnordered calldata dest, uint value) external pure returns (uint) {
    dest; // hide warning
    return value;
  }


  function _usePureVars10UIntMemory(uint, uint, uint, uint, uint, uint, uint, uint, uint, uint, uint value) internal pure returns (uint) {
    return value;
  }
  function usePureVars10UIntMemory(uint, uint, uint, uint, uint, uint, uint, uint, uint, uint, uint value) external pure returns (uint) {
    return value;
  }


  function _useDynArrayUIntMemory(uint[] memory dest, uint value) internal pure returns (uint) {
    dest; // hide warning
    return value;
  }
  function useDynArrayUIntMemory(uint[] memory dest, uint value) external pure returns (uint) {
    dest; // hide warning
    return value;
  }
  function useDynArrayUIntCalldata(uint[] calldata dest, uint value) external pure returns (uint) {
    dest; // hide warning
    return value;
  }


  function _useStatArray10UIntMemory(uint[10] memory dest, uint value) internal pure returns (uint) {
    dest; // hide warning
    return value;
  }
  function useStatArray10UIntMemory(uint[10] memory dest, uint value) external pure returns (uint) {
    dest; // hide warning
    return value;
  }
  function useStatArray10UIntCalldata(uint[10] calldata dest, uint value) external pure returns (uint) {
    dest; // hide warning
    return value;
  }



  function _useStruct10UInt8Memory(IDataTypes.Struct10UInt8 memory dest, uint value) internal pure returns (uint) {
    dest; // hide warning
    return value;
  }
  function useStruct10UInt8Memory(IDataTypes.Struct10UInt8 memory dest, uint value) external pure returns (uint) {
    dest; // hide warning
    return value;
  }
  function useStruct10UInt8Calldata(IDataTypes.Struct10UInt8 calldata dest, uint value) external pure returns (uint) {
    dest; // hide warning
    return value;
  }


  function _usePureVars10UInt8Memory(uint8, uint8, uint8, uint8, uint8, uint8, uint8, uint8, uint8, uint8, uint value) internal pure returns (uint) {
    return value;
  }
  function usePureVars10UInt8Memory(uint8, uint8, uint8, uint8, uint8, uint8, uint8, uint8, uint8, uint8, uint value) external pure returns (uint) {
    return value;
  }


  function _useDynArrayUInt8Memory(uint8[] memory dest, uint value) internal pure returns (uint) {
    dest; // hide warning
    return value;
  }
  function useDynArrayUInt8Memory(uint8[] memory dest, uint value) external pure returns (uint) {
    dest; // hide warning
    return value;
  }
  function useDynArrayUInt8Calldata(uint8[] calldata dest, uint value) external pure returns (uint) {
    dest; // hide warning
    return value;
  }


  function _useStatArray10UInt8Memory(uint8[10] memory dest, uint value) internal pure returns (uint) {
    dest; // hide warning
    return value;
  }
  function useStatArray10UInt8Memory(uint8[10] memory dest, uint value) external pure returns (uint) {
    dest; // hide warning
    return value;
  }
  function useStatArray10UInt8Calldata(uint8[10] calldata dest, uint value) external pure returns (uint) {
    dest; // hide warning
    return value;
  }
}