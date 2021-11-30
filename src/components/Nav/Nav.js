const Nav = () => {
    return (
        <nav>
            <div className="nav-image">
                <a href="/"><img src="/images/photograhy_blog_logo.png" alt="Logo" /></a>
            </div>
            <div className="navbar">
                <a href="/gallery">Gallery</a>
                <a href="/about">About</a>
                <div className="logged">
                    <a href="/add">Add Photo</a>
                    <a href="/my-profile">My Profile</a>
                    <a href="/logout">Logout</a>
                    <p id="welcome">Welcome, @username</p>
                </div>
                <div className="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;