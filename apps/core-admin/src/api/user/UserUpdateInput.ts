import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";
import { ReviewUpdateManyWithoutUsersInput } from "./ReviewUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  comments?: CommentUpdateManyWithoutUsersInput;
  email?: string;
  name?: string;
  reviews?: ReviewUpdateManyWithoutUsersInput;
};
