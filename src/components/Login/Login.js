import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { AuthContext } from "../../contexts/AuthContext.js";

import * as authService from "../../services/authService.js";

const Login = () => {
    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const [error, setError] = useState([]);

    const onLoginSubmitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { email, password } = Object.fromEntries(formData);
        
        if (email === '' || password === '') {
            return setError('All fields are required!');
        } else if (email.length < 5) {
            return setError('Email must be at least 5 characters long!');
        } else if (password.length < 5) {
            return setError('Password must be at least 5 characters long!');
        } 

        authService.login(email, password)
            .then(res => {
                login(res);
                navigate('/');
            })
            .catch(error => {
                setError(error)
            })
    };

    return (
        <section id="login-page">
            {error.length === 0 
                ? <div className="hidden"></div>
                : <div className="error-div"><p>{error}</p></div>}

            <form action="" method="POST" className="loginForm" onSubmit={onLoginSubmitHandler}>
                <h1 className="formTitle">Login</h1>
                <ul id="form">
                    <li>
                        <input type="text" id="email" name="email" placeholder="Email" />
                    </li>
                    <li>
                        <input type="password" id="password" name="password" placeholder="Password" />
                    </li>
                    <li>
                        <button id="loginBtn">Login</button>
                    </li>
                    <li>
                        <p id="register">Don't have an account yet? <Link to="/register">Sign up</Link></p>
                    </li>
                </ul>
            </form>
        </section>
    );
};

export default Login;