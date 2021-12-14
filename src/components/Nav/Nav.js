import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.js";

const Nav = () => {
    const { user } = useContext(AuthContext);

    let userNav = (
        <div className="logged">
            <Link to="/add">Add Photo</Link>
            <Link to="/my-profile">My Profile</Link>
            <Link to="/logout">Logout</Link>
            <p id="welcome">Welcome, {user.username}</p>
        </div>
    );

    let guestNav = (
        <div className="guest">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    );

    return (
        <nav>
            <div className="nav-image">
                <Link to="/"><img src="/images/photograhy_blog_logo.png" alt="Logo" /></Link>
            </div>
            <div className="navbar">
                <Link to="/gallery">Gallery</Link>
                <Link to="/about">About</Link>
                
                {user.username 
                    ? userNav
                    : guestNav}
                
            </div>
        </nav>
    );
};

export default Nav;