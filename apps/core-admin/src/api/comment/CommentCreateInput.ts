import { DogParkWhereUniqueInput } from "../dogPark/DogParkWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentCreateInput = {
  dogPark: DogParkWhereUniqueInput;
  text: string;
  user: UserWhereUniqueInput;
};
