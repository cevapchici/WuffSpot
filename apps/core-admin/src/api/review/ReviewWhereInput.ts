import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { DogParkWhereUniqueInput } from "../dogPark/DogParkWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewWhereInput = {
  createdAt?: DateTimeFilter;
  description?: StringFilter;
  dogPark?: DogParkWhereUniqueInput;
  id?: IntFilter;
  rating?: FloatFilter;
  updatedAt?: DateTimeFilter;
  user?: UserWhereUniqueInput;
};
