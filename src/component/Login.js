import { useState } from 'react';
import { loginApi } from '../service/userService'
import { toast } from 'react-toastify';
import '../App.scss'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleLoginButton = async () => {
        if (!email || !password) {
            toast.error("Missing email or password");
        }
        else {
            let results = await loginApi(email, password);
            if (results && results.token) {
                localStorage.setItem("token", results.token);
                toast.success("Login successful")
            }
        }
    }
    return (
        <div className="login-container">
            <div className="m-auto col-10 col-sm-4 d-flex flex-column gap-2">
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
                    ></input>
                    <i className={isShowPassword ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"}
                        onClick={() => setIsShowPassword(!isShowPassword)}
                    ></i>
                </div>
                <button className="btn btn-primary mt-2"
                    disabled={email && password ? false : true}
                    onClick={() => handleLoginButton()}
                >Login</button>
                <div className='text-center'>
                    <i className="fa-solid fa-angles-left" role='button'></i>
                    <span role='button'> Go back</span>
                </div>
            </div>
        </div>
    )
}
export default Login;