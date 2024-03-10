import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const ModalAddNew = (props) => {
    const { show, handleClose } = props;
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    // button create user = close + create
    const handleCreatButton = () => {
        console.log(email + name);
        handleClose();
    }
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
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
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your name"
                                autoFocus
                                onChange={(event) => setName(event.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleCreatButton()}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default ModalAddNew;