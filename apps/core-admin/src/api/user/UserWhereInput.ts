import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type UserWhereInput = {
  comments?: CommentListRelationFilter;
  createdAt?: DateTimeFilter;
  email?: StringFilter;
  id?: IntFilter;
  name?: StringFilter;
  reviews?: ReviewListRelationFilter;
  updatedAt?: DateTimeFilter;
};
