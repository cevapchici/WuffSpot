import { SortOrder } from "../../util/SortOrder";

export type DogParkOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  lat?: SortOrder;
  lng?: SortOrder;
  name?: SortOrder;
  size?: SortOrder;
  updatedAt?: SortOrder;
};
