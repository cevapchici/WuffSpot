import { DogPark } from "../dogPark/DogPark";
import { User } from "../user/User";

export type Review = {
  createdAt: Date;
  description: string;
  dogPark?: DogPark;
  id: number;
  rating: number;
  updatedAt: Date;
  user?: User;
};
