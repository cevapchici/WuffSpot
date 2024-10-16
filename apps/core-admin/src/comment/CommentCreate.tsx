import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { DogParkTitle } from "../dogPark/DogParkTitle";
import { UserTitle } from "../user/UserTitle";

export const CommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="dogPark.id"
          reference="DogPark"
          label="Dog Park"
        >
          <SelectInput optionText={DogParkTitle} />
        </ReferenceInput>
        <TextInput label="Text" source="text" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
