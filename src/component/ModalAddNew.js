import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { createUser } from '../service/userService';
import { toast } from 'react-toastify';


const ModalAddNew = (props) => {
    const { show, handleClose } = props;
    const [email, setEmail] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');

    // button create user = close + create
    const handleCreateButton = async () => {
        let results = await createUser(email, firstName, lastName);
        if (results && results.id) {
            toast.success("Create user successful");
            setEmail('');
            setfirstName('');
            setlastName('');
        }
        else {
            toast.success("Create error");
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
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Your first name"
                                autoFocus
                                onChange={(event) => setfirstName(event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Your last name"
                                autoFocus
                                onChange={(event) => setlastName(event.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleCreateButton()}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default ModalAddNew;