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
import PhotoDetails from "./components/PhotoDetails";
import Logout from "./components/Logout";
import EditPhoto from "./components/EditPhoto";
import ErrorPage from "./components/ErrorPage";

const initialAuth = {
    email: "",
    username: "",
    _createdOn: "",
    _id: "",
    accessToken: ""
};

function App() {
    const [user, setUser] = useState(initialAuth);

    const login = (authData) => {
        setUser(authData);
    };

    const register = (authData) => {
        setUser(authData);
    };

    const logout = () => {
        setUser(initialAuth);
    }

    return (
        <AuthContext.Provider value={{user, login, register, logout}} >
            <div>
                <Nav />

                <div className="root">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/details/:photoId/edit" element={<EditPhoto />} />
                        <Route path="/details/:photoId" element={<PhotoDetails />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/add" element={<AddPhoto />} />
                        <Route path="/my-profile" element={<MyProfile />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </div>

                <footer>All rights reserved &copy;</footer>
            </div>
        </AuthContext.Provider>
    );
}

export default App;