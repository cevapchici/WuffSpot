import { DogParkWhereUniqueInput } from "../dogPark/DogParkWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentUpdateInput = {
  dogPark?: DogParkWhereUniqueInput;
  text?: string;
  user?: UserWhereUniqueInput;
};
