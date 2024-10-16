import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { DogParkTitle } from "../dogPark/DogParkTitle";
import { UserTitle } from "../user/UserTitle";

export const CommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
