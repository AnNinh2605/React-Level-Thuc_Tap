import { Button, Modal } from 'react-bootstrap';
import { deleteUser } from '../service/userService'
import { toast } from 'react-toastify';

const ModalDeleteUser = (props) => {
    const { show, handleClose, userDeleteData, showDeleteToView } = props;

    const handleDeleteButton = async () => {
        let results = await deleteUser(userDeleteData.id);
        if (results && results.statusCode === 204) {
            toast.success('Delete user successful');
            showDeleteToView(userDeleteData);
        }
        else {
            toast.error("Delete error");
        }
        handleClose();
    }
    return (
        <div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Are you sure to delete user with email: <b>{userDeleteData.email}</b></h5>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleDeleteButton()}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default ModalDeleteUser;