import { useEffect, useState } from 'react';
import { loginApi } from '../service/userService'
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import '../App.scss'

// useContext
// import { useContext } from 'react';
// import { UserContext } from '../context/UserContext'

// redux
import { handleLoginRedux } from '../redux/actions/userAction'
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const isLoading = useSelector(state => state.user.isLoading);
    const account = useSelector(state => state.user.account);

    // useContext
    // const { loginContext } = useContext(UserContext);

    // redux
    const dispatch = useDispatch();

    const handleLoginButton = async () => {
        // setLoadingLoginButton(true);
        if (!email || !password) {
            toast.error("Missing email or password");
        }
        else {
            // useContext
            // let results = await loginApi(email.trim(), password);
            // if (results && results.token) {
            //     loginContext(email, results.token)
            //     navigate('/');
            //     toast.success("Login successful")
            // }
            // else {
            //     //error
            //     if (results && results.status === 400) {
            //         toast.error(results.data.error);
            //     }
            // }

            // redux
            dispatch(handleLoginRedux(email, password));
        }
        // setLoadingLoginButton(false);
    }
    const handleLoginEnter = (event) => {
        if (event && +event.keyCode === 13) {
            handleLoginButton();
        }
    }
    const handleGoBack = () => {
        navigate('/');
    }
    useEffect(() => {
        if (account && account.auth === true) {
            navigate('/')
        }
    }, [account])
    return (
        <div className="login-container">
            <div className="m-auto col-10 col-sm-3 d-flex flex-column gap-2">
                <h4 className="text-center mt-4">Log in</h4>
                <h6>Email or Username</h6>
                <input type="text" placeholder="Email or Username"
                    className="form-control"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                ></input>
                <div className='input-password'>
                    <input type={isShowPassword ? "text" : "password"} placeholder="Password"
                        className="form-control"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        onKeyDown={(event) => handleLoginEnter(event)}
                    ></input>
                    <i className={isShowPassword ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"}
                        onClick={() => setIsShowPassword(!isShowPassword)}
                    ></i>
                </div>
                <button className="btn btn-primary mt-2"
                    disabled={email && password ? false : true}
                    onClick={() => handleLoginButton()}
                >
                    {isLoading && <i className="fas fa-sync fa-spin"></i>}
                    &nbsp;Login</button>
                <div className='text-center'>
                    <i className="fa-solid fa-angles-left" role='button'></i>
                    <span role='button' onClick={() => handleGoBack()}> Go back</span>
                </div>
            </div>
        </div>
    )
}
export default Login;