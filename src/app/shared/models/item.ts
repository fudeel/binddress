export class Item {
  itemId: string;
  fkCurrentOwnerUuid: string;
  category: string;
  itemName: string;
  itemRarity: "grey" | "white" | "green" | "blue" | "purple" | "orange";
  isBound: boolean;
  previousOwners: [{userId: string}];
}
