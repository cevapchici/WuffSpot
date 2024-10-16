import { DogParkWhereUniqueInput } from "../dogPark/DogParkWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewCreateInput = {
  description: string;
  dogPark: DogParkWhereUniqueInput;
  rating: number;
  user: UserWhereUniqueInput;
};
