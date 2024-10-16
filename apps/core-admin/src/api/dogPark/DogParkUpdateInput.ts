import { CommentUpdateManyWithoutDogParksInput } from "./CommentUpdateManyWithoutDogParksInput";
import { ReviewUpdateManyWithoutDogParksInput } from "./ReviewUpdateManyWithoutDogParksInput";

export type DogParkUpdateInput = {
  comments?: CommentUpdateManyWithoutDogParksInput;
  description?: string;
  lat?: number;
  lng?: number;
  name?: string;
  reviews?: ReviewUpdateManyWithoutDogParksInput;
  size?: string;
};
