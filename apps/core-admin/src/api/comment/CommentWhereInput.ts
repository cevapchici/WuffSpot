import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DogParkWhereUniqueInput } from "../dogPark/DogParkWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentWhereInput = {
  createdAt?: DateTimeFilter;
  dogPark?: DogParkWhereUniqueInput;
  id?: IntFilter;
  text?: StringFilter;
  updatedAt?: DateTimeFilter;
  user?: UserWhereUniqueInput;
};
