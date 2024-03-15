// import { useContext } from 'react';
// import { UserContext } from '../context/UserContext'
import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';

const PrivateRoutes = (props) => {
    // useContext
    // const { user } = useContext(UserContext);

    const user = useSelector(state => state.user.account);
    if (user && !user.auth) {
        return (
            <>
                <Alert variant="danger" className="mt-3 container">
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
            {props.children}
        </>
    )
}
export default PrivateRoutes;