import { Create, Datagrid, EmailField, Edit, List, SimpleForm, TextField, TextInput } from "react-admin";

export const UserList = (data) => (
    <List>
        <Datagrid data={data.data} rowClick="edit">
            <TextField source="id"/>
            <TextField source="name"/>
            <EmailField source="email"/>
            <TextField source="password" type="password"/>
        </Datagrid>
    </List>
);

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput source="email"/>
            <TextInput source="password" type="password"/>
        </SimpleForm>
    </Edit>
);

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput source="email"/>
            <TextInput source="password" type="password"/>
        </SimpleForm>
    </Create>
);