import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DOGPARK_TITLE_FIELD } from "./DogParkTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const DogParkShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Lat" source="lat" />
        <TextField label="Lng" source="lng" />
        <TextField label="Name" source="name" />
        <TextField label="Size" source="size" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Comment"
          target="dogParkId"
          label="Comments"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Dog Park"
              source="dogpark.id"
              reference="DogPark"
            >
              <TextField source={DOGPARK_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Text" source="text" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Review"
          target="dogParkId"
          label="Reviews"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <ReferenceField
              label="Dog Park"
              source="dogpark.id"
              reference="DogPark"
            >
              <TextField source={DOGPARK_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Rating" source="rating" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
