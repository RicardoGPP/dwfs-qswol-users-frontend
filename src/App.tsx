import { Admin, Resource, ShowGuesser } from 'react-admin';
import { UserList, UserCreate, UserEdit } from './components';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://localhost:3000');

export const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource
            name="users"
            list={UserList}
            edit={UserEdit}
            create={UserCreate}
            show={ShowGuesser}
        />
    </Admin>
);