import { useEffect, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { updateUser } from '../service/userService'
import { toast } from 'react-toastify';

const ModalEditUser = (props) => {
    const { show, handleClose, userEditData } = props;
    const [name, setName] = useState('');
    const [job, setJob] = useState('');

    const handleSaveEditButton = async () => {
        let results = await updateUser(name, job);
        if (results && results.updatedAt) {
            toast.success("Update successful");
            setJob('');
        }
        else {
            toast.error("Update fail");
        }
        handleClose();
    }
    useEffect(() => {
        if (show) {
            setName(userEditData.first_name);
        }
    }, [userEditData])
    return (
        <div>
            <Modal 
            show={show} 
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Your name"
                            value={name}
                            onChange={event => setName(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Job</Form.Label>
                        <Form.Control
                            className='form-control'
                            type="email"
                            placeholder="Your job"
                            value={job}
                            onChange={event => setJob(event.target.value)}
                        />
                    </Form.Group>
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