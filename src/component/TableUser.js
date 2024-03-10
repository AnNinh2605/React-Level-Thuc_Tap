import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../service/userService';

const TableUser = () => {
    const [listUser, setListUser] = useState('');
    useEffect(() => {
        //call api
        getAlluser();
    }, [])
    const getAlluser = async () => {
        let results = await fetchAllUser();
        if (results && results.data) {
            setListUser(results.data)
        }
    }
    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser && listUser.length > 0 ?
                        listUser.map((item, index) => {
                            return (
                                <tr key={`userList-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.email}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                </tr>
                            )
                        }) : null
                    }
                </tbody>
            </Table>
        </Container>
    )
}
export default TableUser;