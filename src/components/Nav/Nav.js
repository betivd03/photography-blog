import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext.js";

const Nav = () => {
    const { user } = useContext(AuthContext);

    let userNav = (
        <div className="logged">
            <a href="/add">Add Photo</a>
            <a href="/my-profile">My Profile</a>
            <a href="/logout">Logout</a>
            <p id="welcome">Welcome, {user.username}</p>
        </div>
    );

    let guestNav = (
        <div className="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>
    );

    return (
        <nav>
            <div className="nav-image">
                <a href="/"><img src="/images/photograhy_blog_logo.png" alt="Logo" /></a>
            </div>
            <div className="navbar">
                <a href="/gallery">Gallery</a>
                <a href="/about">About</a>
                
                {user.username 
                    ? userNav
                    : guestNav}
                
            </div>
        </nav>
    );
};

export default Nav;