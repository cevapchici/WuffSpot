import { CommentCreateNestedManyWithoutUsersInput } from "./CommentCreateNestedManyWithoutUsersInput";
import { ReviewCreateNestedManyWithoutUsersInput } from "./ReviewCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  comments?: CommentCreateNestedManyWithoutUsersInput;
  email: string;
  name: string;
  reviews?: ReviewCreateNestedManyWithoutUsersInput;
};
