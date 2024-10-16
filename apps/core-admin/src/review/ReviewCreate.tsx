import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { DogParkTitle } from "../dogPark/DogParkTitle";
import { UserTitle } from "../user/UserTitle";

export const ReviewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" source="description" />
        <ReferenceInput
          source="dogPark.id"
          reference="DogPark"
          label="Dog Park"
        >
          <SelectInput optionText={DogParkTitle} />
        </ReferenceInput>
        <NumberInput label="Rating" source="rating" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
