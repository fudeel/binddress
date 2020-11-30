export class Item {
  itemId: string;
  fkCurrentOwnerUuid: string;
  category: "shoes" | "coats-and-jackets" | "jeans" | "pants" | "sweatshirts" | "vests" | "shirts" | "t-shirts" | "bags";
  itemName: string;
  itemRarity: "grey" | "white" | "green" | "blue" | "purple" | "orange";
  isBound: boolean;
  previousOwners: string[]
  condition: "new" | "used";
  productionYear: string
}
