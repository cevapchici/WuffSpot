import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  createdAt?: SortOrder;
  dogParkId?: SortOrder;
  id?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
