// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.4;

interface IItemMetaDataType {
  struct ItemMeta {
    uint8 itemMetaType;
    uint8 itemLevel;
    uint8 itemType;
    uint16 baseDurability;
    uint8 defaultRarity;
    uint32 manaCost;

    // it doesn't include positions with 100% chance
    uint8 minRandomAttributes;
    uint8 maxRandomAttributes;

    Struct4Int requirements;
  }

  struct Struct4Int {
    int32 a;
    int32 b;
    int32 c;
    int32 d;
  }

  struct Struct10Int {
    uint32 a;
    uint32 b;
    uint32 c;
    uint32 d;
    uint32 e;
    uint32 f;
    uint32 g;
    uint32 h;
    uint32 i;
    uint32 j;
  }
}