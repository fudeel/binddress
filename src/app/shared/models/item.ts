import {User} from "./user";

export class Item {
  itemId: string;
  fkCurrentOwnerUuid: any;
  ownerInfo: User;
  category: "shoes" | "coats-and-jackets" | "jeans" | "pants" | "sweatshirts" | "vests" | "shirts" | "t-shirts" | "bags";
  itemName: string;
  itemRarity: "grey" | "white" | "green" | "blue" | "purple" | "orange";
  isBound: boolean;
  previousOwners: string[]
  condition: "new" | "used";
  productionYear: string
}
