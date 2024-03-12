import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../service/userService';
import ReactPaginate from 'react-paginate';
import ModalAddNew from './ModalAddNew';
import ModalEditUser from './ModalEditUser';
import ModalDeleteUser from './ModalDeleteUser';
import _ from 'lodash'

const TableUser = () => {
    const [listUser, setListUser] = useState([]);
    const [pageCount, setPageCount] = useState(0); // state to save total page
    const [showModalAddNew, setShowModalAddNew] = useState(false) // state to set show/close modal add new
    const [showModalEditUser, setShowModalEditUser] = useState(false) // state to set show/close modal edit user
    const [showModalDeleteUser, setshowModalDeleteUser] = useState(false) // state to set show/close modal delete user
    const [userEditData, setUserEditData] = useState(''); // state save data user pass to edit modal
    const [userDeleteData, setUserDeleteData] = useState(''); // state save data user pass to delete modal

    const [sortBy, setSortBy] = useState('asc'); // default sort ASCending
    const [sortField, setSortField] = useState(''); // state to save field sort
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
    const handleAddNewButton = () => {
        setShowModalAddNew(true);
    }
    // handel close modal add new user
    const handleClose = () => {
        setShowModalAddNew(false);
        setShowModalEditUser(false);
        setshowModalDeleteUser(false);
    }
    const handleEditButton = (item) => {
        setShowModalEditUser(true);
        setUserEditData(item);
    }
    const handleDeleteButton = (item) => {
        setshowModalDeleteUser(true);
        setUserDeleteData(item)
    }

    const handleSort = (Field, By) => {
        setSortBy(By);
        setSortField(Field);

        let cloneListUser = _.cloneDeep(listUser);
        cloneListUser = _.orderBy(cloneListUser, [Field], [By]);
        setListUser(cloneListUser);
    }

    return (
        <Container>
            <div className='add-new my-2 d-flex justify-content-between'>
                <b>List Users</b>
                <button className='btn btn-success'
                    onClick={() => handleAddNewButton()}
                >Add new user</button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className='d-flex d-flex justify-content-between'>
                            <span>Id</span>
                            <div role='button'>
                                <i className="pe-2 fa-solid fa-arrow-up-long"
                                    onClick={() => handleSort('id', 'asc')}
                                ></i>
                                <i className="fa-solid fa-arrow-down-long"
                                    onClick={() => handleSort('id', 'desc')}
                                ></i>
                            </div>
                        </th>
                        <th>Email</th>
                        <th className='d-flex d-flex justify-content-between'>
                            <span>First Name</span>
                            <div role='button'>
                                <i className="pe-2 fa-solid fa-arrow-up-long"
                                    onClick={() => handleSort('first_name', 'asc')}></i>
                                <i className="fa-solid fa-arrow-down-long"
                                    onClick={() => handleSort('first_name', 'desc')}
                                ></i>
                            </div>
                        </th>
                        <th>Last Name</th>
                        <th>Actions</th>
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
                                    <td>
                                        <button className='btn btn-warning me-2'
                                            onClick={() => handleEditButton(item)}
                                        >Edit</button>
                                        <button
                                            className='btn btn-danger'
                                            onClick={() => handleDeleteButton(item)}
                                        >Delete</button>
                                    </td>
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
            <ModalAddNew handleClose={handleClose} show={showModalAddNew} />
            <ModalEditUser handleClose={handleClose} show={showModalEditUser} userEditData={userEditData} />
            <ModalDeleteUser handleClose={handleClose} show={showModalDeleteUser} userDeleteData={userDeleteData} />
        </Container>
    )
}
export default TableUser;