import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { AuthContext } from "./contexts/AuthContext.js";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import AddPhoto from "./components/AddPhoto";
import MyProfile from "./components/MyProfile";
import PhotoDetails from "./components/PhotoDetails/PhotoDetails.js";

function App() {
    const [user, setUser] = useState({});

    const login = (authData) => {
        setUser(authData);
    };

    const register = (authData) => {
        setUser(authData);
    };

    return (
        <AuthContext.Provider value={{user, login, register}} >
            <div>
                <Nav />

                <div className="root">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/details/:photoId" element={<PhotoDetails />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/add" element={<AddPhoto />} />
                        <Route path="/my-profile" element={<MyProfile />} />
                    </Routes>
                </div>

                <footer>All rights reserved &copy;</footer>
            </div>
        </AuthContext.Provider>
    );
}

export default App;