export class Item {
  pkItemUuid: string;
  itemId: string;
  fkCurrentOwnerUuid: string;
  fkCategoryUuid: string;
  itemName: string;
  itemRarity: "gray" | "white" | "green" | "blue" | "purple" | "orange";
  isBound: boolean;
  allOwnersUuidAndBindTime: any
}
