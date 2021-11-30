const Login = () => {
    return (
        <section id="login-page">
            <form action="" method="POST" className="loginForm">
                <h1 className="formTitle">Login</h1>
                <ul id="form">
                    <li>
                        <input type="text" id="username" name="username" placeholder="Username" />
                    </li>
                    <li>
                        <input type="password" id="password" name="password" placeholder="Password" />
                    </li>
                    <li>
                        <button id="loginBtn">Login</button>
                    </li>
                    <li>
                        <p id="register">Don't have an account yet? <a href="/register">Sign up</a></p>
                    </li>
                </ul>
            </form>
        </section>
    );
};

export default Login;