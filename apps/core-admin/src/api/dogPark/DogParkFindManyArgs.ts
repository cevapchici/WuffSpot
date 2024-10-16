import { DogParkWhereInput } from "./DogParkWhereInput";
import { DogParkOrderByInput } from "./DogParkOrderByInput";

export type DogParkFindManyArgs = {
  where?: DogParkWhereInput;
  orderBy?: Array<DogParkOrderByInput>;
  skip?: number;
  take?: number;
};
