import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DogParkList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"DogParks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Lat" source="lat" />
        <TextField label="Lng" source="lng" />
        <TextField label="Name" source="name" />
        <TextField label="Size" source="size" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
