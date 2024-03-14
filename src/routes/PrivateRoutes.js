import { Routes } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../context/UserContext'
import Alert from 'react-bootstrap/Alert';

const PrivateRoutes = (props) => {
    const { user } = useContext(UserContext);

    if (user && !user.auth) {
        return (
            <>
                <Alert variant="danger" className="mt-3">
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>
                        You don't have permission to access this resources!
                    </p>
                </Alert>
            </>
        )
    }
    return (
        <>
            <Routes>
                {props.children}
            </Routes>
        </>
    )
}
export default PrivateRoutes;