import { CommentCreateNestedManyWithoutDogParksInput } from "./CommentCreateNestedManyWithoutDogParksInput";
import { ReviewCreateNestedManyWithoutDogParksInput } from "./ReviewCreateNestedManyWithoutDogParksInput";

export type DogParkCreateInput = {
  comments?: CommentCreateNestedManyWithoutDogParksInput;
  description: string;
  lat: number;
  lng: number;
  name: string;
  reviews?: ReviewCreateNestedManyWithoutDogParksInput;
  size: string;
};
