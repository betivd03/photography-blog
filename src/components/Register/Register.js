const Register = () => {
    return (
        <section id="register-page">
            <form action="" method="POST" className="registerForm">
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