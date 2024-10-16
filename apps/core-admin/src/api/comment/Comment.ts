import { DogPark } from "../dogPark/DogPark";
import { User } from "../user/User";

export type Comment = {
  createdAt: Date;
  dogPark?: DogPark;
  id: number;
  text: string;
  updatedAt: Date;
  user?: User;
};
