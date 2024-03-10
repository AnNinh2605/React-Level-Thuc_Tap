import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../service/userService';
import ReactPaginate from 'react-paginate';

const TableUser = () => {
    const [listUser, setListUser] = useState('');
    const [pageCount, setPageCount] = useState(0); // state to save total page
    useEffect(() => {
        //call api
        getAlluser(1);  // 1 is default page to display
    }, [])
    const getAlluser = async (page) => {
        let results = await fetchAllUser(page);
        if (results && results.data) {
            setListUser(results.data)
            setPageCount(results.total_pages);
        }
    }
    const handlePageClick = (event) => {
        getAlluser(+event.selected + 1);
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
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </Container>
    )
}
export default TableUser;