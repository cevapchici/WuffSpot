import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  dogParkId?: SortOrder;
  id?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
