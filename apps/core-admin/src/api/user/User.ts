import { Comment } from "../comment/Comment";
import { Review } from "../review/Review";

export type User = {
  comments?: Array<Comment>;
  createdAt: Date;
  email: string;
  id: number;
  name: string;
  reviews?: Array<Review>;
  updatedAt: Date;
};
