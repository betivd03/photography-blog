import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { AuthContext } from "../../contexts/AuthContext.js";

import * as authService from "../../services/authService.js";

const Register = () => {
    const navigate = useNavigate();

    const { register } = useContext(AuthContext);

    const [error, setError] = useState([]);

    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { email, username, password, rePassword } = Object.fromEntries(formData);

        if (email === '' || username === '' || password === '' || rePassword === '') {
            return setError('All fields are required!');
        } else if (password !== rePassword) {
            return setError('Passwords must match!');
        } else if (email.length < 5) {
            return setError('Email must be at least 5 characters long!');
        } else if (username.length < 5) {
            return setError('Username must be at least 5 characters long!');
        } else if (password.length < 5) {
            return setError('Password must be at least 5 characters long!');
        } else if (rePassword.length < 5) {
            return setError('Repeat password must be at least 5 characters long!');
        } 

        if (password === rePassword) {
            authService.register(email, username, password)
                .then(res => {
                    register(res);
                    navigate('/');
                });
        }
    };

    return (
        <section id="register-page">
            {error.length === 0 
                ? <div className="hidden"></div>
                : <div className="error-div"><p>{error}</p></div>}

            <form action="" method="POST" className="registerForm" onSubmit={onRegisterSubmitHandler}>
                <h1 className="formTitle">Register</h1>
                <ul id="form">
                    <li>
                        <input type="text" id="email" name="email" placeholder="Email" />
                    </li>
                    <li>
                        <input type="text" id="username" name="username" placeholder="Username" />
                    </li>
                    <li>
                        <input type="password" id="password" name="password" placeholder="Password" />
                    </li>
                    <li>
                        <input type="password" id="rePassword" name="rePassword" placeholder="Repeat Password" />
                    </li>        
                    <li>
                        <button id="registerBtn">Register</button>
                    </li>
                    <li>
                        <p id="login">Already have an account? <Link to="/login">Sign in</Link></p>
                    </li>
                </ul>
            </form>
        </section>
    );
};

export default Register;