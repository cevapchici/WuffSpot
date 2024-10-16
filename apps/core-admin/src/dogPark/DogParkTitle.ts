import { DogPark as TDogPark } from "../api/dogPark/DogPark";

export const DOGPARK_TITLE_FIELD = "name";

export const DogParkTitle = (record: TDogPark): string => {
  return record.name?.toString() || String(record.id);
};
