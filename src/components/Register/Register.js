import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.js";

import * as authService from "../../services/authService.js";

const Register = () => {
    const navigate = useNavigate();

    const { register } = useContext(AuthContext);

    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { email, username, password, rePassword } = Object.fromEntries(formData);

        if (password === rePassword) {
            authService.register(email, username, password)
                .then(res => {
                    console.log('register');
                    console.log(res);
                    register(res);
                    navigate('/');
                });
        }
    };

    return (
        <section id="register-page">
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
                        <p id="login">Already have an account? <a href="/login">Sign in</a></p>
                    </li>
                </ul>
            </form>
        </section>
    );
};

export default Register;