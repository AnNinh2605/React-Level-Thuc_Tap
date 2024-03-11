import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
// import { toast } from 'react-toastify';


const ModalEditUser = (props) => {
    const { show, handleClose, userEditData } = props;
    const [email, setEmail] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');

    // button create user = close + create
    const handleSaveEditButton = async () => {

        handleClose();
    }
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                                value={userEditData.email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Your first name"
                                autoFocus
                                value={userEditData.first_name}
                                onChange={(event) => setfirstName(event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Your last name"
                                autoFocus
                                value={userEditData.last_name}
                                onChange={(event) => setlastName(event.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSaveEditButton()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default ModalEditUser;