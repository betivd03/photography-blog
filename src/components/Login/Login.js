import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.js";

import * as authService from "../../services/authService.js";

const Login = () => {
    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const onLoginSubmitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { email, password } = Object.fromEntries(formData);

        authService.login(email, password)
            .then(res => {
                login(res);
                navigate('/');
            });
    };

    return (
        <section id="login-page">
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