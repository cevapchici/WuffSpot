import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type DogParkWhereInput = {
  comments?: CommentListRelationFilter;
  createdAt?: DateTimeFilter;
  description?: StringFilter;
  id?: IntFilter;
  lat?: FloatFilter;
  lng?: FloatFilter;
  name?: StringFilter;
  reviews?: ReviewListRelationFilter;
  size?: StringFilter;
  updatedAt?: DateTimeFilter;
};
