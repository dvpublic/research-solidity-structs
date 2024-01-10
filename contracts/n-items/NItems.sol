// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

import {IDataTypes} from "../interfaces/IDataTypes.sol";
import "../libs/PassLib.sol";
import "../libs/NItemsLib.sol";

/// @notice Try to use N items as a 1) struct 2) pure vars 3) static array 4) dynamic array
contract NItems {
  uint public gasUsed;

  //region Struct
  function createStruct(uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.Ten memory t = IDataTypes.Ten({a0: 0, a1: 1, a2: 2, a3: 3, a4: 4, a5: 5, a6: 6, a7: 7, a8: 8, a9: 9});
      t; // hide warning
    }
    gasUsed = gas0 - gasleft();
  }

  function createStructCalcInternal(uint count) external returns (uint dest) {
    dest = 0;
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.Ten memory t = IDataTypes.Ten({a0: 0, a1: 1, a2: 2, a3: 3, a4: 4, a5: 5, a6: 6, a7: 7, a8: 8, a9: 9});
      dest = calcStruct(t);
    }
    gasUsed = gas0 - gasleft();
  }

  function createStructCalcLibInternal(uint count) external returns (uint dest) {
    dest = 0;
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.Ten memory t = IDataTypes.Ten({a0: 0, a1: 1, a2: 2, a3: 3, a4: 4, a5: 5, a6: 6, a7: 7, a8: 8, a9: 9});
      dest = NItemsLib._calcStruct(t);
    }
    gasUsed = gas0 - gasleft();
  }

  function createStructCalcLibMemoryExt(uint count) external returns (uint dest) {
    dest = 0;
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.Ten memory t = IDataTypes.Ten({a0: 0, a1: 1, a2: 2, a3: 3, a4: 4, a5: 5, a6: 6, a7: 7, a8: 8, a9: 9});
      dest = NItemsLib.calcStructMemory(t);
    }
    gasUsed = gas0 - gasleft();
  }

  function createStructCalcLibCalldataExt(uint count) external returns (uint dest) {
    dest = 0;
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      IDataTypes.Ten memory t = IDataTypes.Ten({a0: 0, a1: 1, a2: 2, a3: 3, a4: 4, a5: 5, a6: 6, a7: 7, a8: 8, a9: 9});
      dest = NItemsLib.calcStructCalldata(t);
    }
    gasUsed = gas0 - gasleft();
  }

  function calcStruct(IDataTypes.Ten memory t) internal pure returns (uint dest) {
    return t.a0 + t.a1 + t.a2 + t.a3 + t.a4 + t.a5 + t.a6 + t.a7 + t.a8 + t.a9;
  }
  //endregion Struct

  //region Pure vars
  function createPureVars(uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      uint a0 = 0; uint a1 = 1; uint a2 = 2; uint a3 = 3; uint a4 = 4;
      uint a5 = 5; uint a6 = 6; uint a7 = 7; uint a8 = 8; uint a9 = 9;
      a0; a1; a2; a3; a4; a5; a6; a7; a8; a9; // hide warnings
    }
    gasUsed = gas0 - gasleft();
  }

  function createPureVarsCalcInternal(uint count) external returns (uint dest) {
    dest = 0;
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      uint a0 = 0; uint a1 = 1; uint a2 = 2; uint a3 = 3; uint a4 = 4;
      uint a5 = 5; uint a6 = 6; uint a7 = 7; uint a8 = 8; uint a9 = 9;
      dest = calcPureVars(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
    }
    gasUsed = gas0 - gasleft();
  }

  function createPureVarsCalcLibInternal(uint count) external returns (uint dest) {
    dest = 0;
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      uint a0 = 0; uint a1 = 1; uint a2 = 2; uint a3 = 3; uint a4 = 4;
      uint a5 = 5; uint a6 = 6; uint a7 = 7; uint a8 = 8; uint a9 = 9;
      dest = NItemsLib._calcPureVars(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
    }
    gasUsed = gas0 - gasleft();
  }

  function createPureVarsCalcLibExt(uint count) external returns (uint dest) {
    dest = 0;
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      uint a0 = 0; uint a1 = 1; uint a2 = 2; uint a3 = 3; uint a4 = 4;
      uint a5 = 5; uint a6 = 6; uint a7 = 7; uint a8 = 8; uint a9 = 9;
      dest = NItemsLib.calcPureVars(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
    }
    gasUsed = gas0 - gasleft();
  }

  function calcPureVars(uint a0, uint a1, uint a2, uint a3, uint a4, uint a5, uint a6, uint a7, uint a8, uint a9) internal pure returns (uint) {
    return (a0 + a1) + (a2 + a3) + (a4 + a5) + (a6 + a7) + (a8 + a9);
  }
  //endregion Pure vars


  //region Static array
  function createArray(uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      uint[10] memory t;
      t[0] = 0; t[1] = 1; t[2] = 2; t[3] = 3; t[4] = 4;
      t[5] = 5; t[6] = 6; t[7] = 7; t[8] = 8; t[9] = 9;
      t; // hide warnings
    }
    gasUsed = gas0 - gasleft();
  }

  function createArrayCalcInternal(uint count) external returns (uint dest) {
    dest = 0;
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      uint[10] memory t;
      t[0] = 0; t[1] = 1; t[2] = 2; t[3] = 3; t[4] = 4;
      t[5] = 5; t[6] = 6; t[7] = 7; t[8] = 8; t[9] = 9;
      dest = calcArray(t);
    }
    gasUsed = gas0 - gasleft();
  }

  function createArrayCalcLibInternal(uint count) external returns (uint dest) {
    dest = 0;
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      uint[10] memory t;
      t[0] = 0; t[1] = 1; t[2] = 2; t[3] = 3; t[4] = 4;
      t[5] = 5; t[6] = 6; t[7] = 7; t[8] = 8; t[9] = 9;
      dest = NItemsLib._calcArray(t);
    }
    gasUsed = gas0 - gasleft();
  }

  function createArrayCalcLibMemoryExt(uint count) external returns (uint dest) {
    dest = 0;
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      uint[10] memory t;
      t[0] = 0; t[1] = 1; t[2] = 2; t[3] = 3; t[4] = 4;
      t[5] = 5; t[6] = 6; t[7] = 7; t[8] = 8; t[9] = 9;
      dest = NItemsLib.calcArrayMemory(t);
    }
    gasUsed = gas0 - gasleft();
  }

  function createArrayCalcLiCalldataExt(uint count) external returns (uint dest) {
    dest = 0;
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      uint[10] memory t;
      t[0] = 0; t[1] = 1; t[2] = 2; t[3] = 3; t[4] = 4;
      t[5] = 5; t[6] = 6; t[7] = 7; t[8] = 8; t[9] = 9;
      dest = NItemsLib.calcArrayCalldata(t);
    }
    gasUsed = gas0 - gasleft();
  }

  function calcArray(uint[10] memory t) internal pure returns (uint dest) {
    return t[0] + t[1] + t[2] + t[3] + t[4] + t[5] + t[6] + t[7] + t[8] + t[9];
  }
  //endregion Static array

  //region Dynamic array
  function createDynArray(uint count) external {
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      uint[] memory t = new uint[](10);
      t[0] = 0; t[1] = 1; t[2] = 2; t[3] = 3; t[4] = 4;
      t[5] = 5; t[6] = 6; t[7] = 7; t[8] = 8; t[9] = 9;
      t; // hide warnings
    }
    gasUsed = gas0 - gasleft();
  }

  function createDynArrayCalcInternal(uint count) external returns (uint dest) {
    dest = 0;
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      uint[] memory t = new uint[](10);
      t[0] = 0; t[1] = 1; t[2] = 2; t[3] = 3; t[4] = 4;
      t[5] = 5; t[6] = 6; t[7] = 7; t[8] = 8; t[9] = 9;
      dest = calcDynArray(t);
    }
    gasUsed = gas0 - gasleft();
  }

  function createDynArrayCalcLibInternal(uint count) external returns (uint dest) {
    dest = 0;
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      uint[] memory t = new uint[](10);
      t[0] = 0; t[1] = 1; t[2] = 2; t[3] = 3; t[4] = 4;
      t[5] = 5; t[6] = 6; t[7] = 7; t[8] = 8; t[9] = 9;
      dest = NItemsLib._calcDynArray(t);
    }
    gasUsed = gas0 - gasleft();
  }

  function createDynArrayCalcLibMemoryExt(uint count) external returns (uint dest) {
    dest = 0;
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      uint[] memory t = new uint[](10);
      t[0] = 0; t[1] = 1; t[2] = 2; t[3] = 3; t[4] = 4;
      t[5] = 5; t[6] = 6; t[7] = 7; t[8] = 8; t[9] = 9;
      dest = NItemsLib.calcDynArrayMemory(t);
    }
    gasUsed = gas0 - gasleft();
  }

  function createDynArrayCalcLibCalldataExt(uint count) external returns (uint dest) {
    dest = 0;
    uint gas0 = gasleft();
    for (uint i = 0; i < count; ++i) {
      uint[] memory t = new uint[](10);
      t[0] = 0; t[1] = 1; t[2] = 2; t[3] = 3; t[4] = 4;
      t[5] = 5; t[6] = 6; t[7] = 7; t[8] = 8; t[9] = 9;
      dest = NItemsLib.calcDynArrayCalldata(t);
    }
    gasUsed = gas0 - gasleft();
  }

  function calcDynArray(uint[] memory t) internal pure returns (uint dest) {
    return t[0] + t[1] + t[2] + t[3] + t[4] + t[5] + t[6] + t[7] + t[8] + t[9];
  }
  //endregion Dynamic array

}