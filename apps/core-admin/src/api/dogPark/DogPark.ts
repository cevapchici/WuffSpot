import { Comment } from "../comment/Comment";
import { Review } from "../review/Review";

export type DogPark = {
  comments?: Array<Comment>;
  createdAt: Date;
  description: string;
  id: number;
  lat: number;
  lng: number;
  name: string;
  reviews?: Array<Review>;
  size: string;
  updatedAt: Date;
};
