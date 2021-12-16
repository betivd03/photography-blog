import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.js";

import * as photosService from "../../services/photosService.js";

const AddPhoto = () => {
    const { user } = useContext(AuthContext); 
    
    const navigate = useNavigate();

    const onAddSubmitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { title, category, description, location, imageUrl } = Object.fromEntries(formData);

        photosService.create({
            title,
            category,
            description,
            location,
            imageUrl
        }, user.accessToken, user.username)
            .then(() => {
                navigate('/');
            });
    };

    return (
        <section id="add-photo-page">
            <form action="" method="POST" className="addPhotoForm" onSubmit={onAddSubmitHandler}>
                <h1 className="formTitle">Add Photo</h1>
                <ul id="form">
                    <li>
                        <input type="text" id="title" name="title" placeholder="Title" />
                    </li>
                    <li>
                        <input type="text" id="category" name="category" placeholder="Category" />
                    </li>
                    <li>
                        <input type="text" id="description" name="description" placeholder="Description" />
                    </li>
                    <li>
                        <input type="text" id="location" name="location" placeholder="Location" />
                    </li>
                    <li>
                        <input type="text" id="imageUrl" name="imageUrl" placeholder="Image URL" />
                    </li>
                    <li>
                        <button id="addPhotoBtn">Add</button>
                    </li>
                </ul>
            </form>
        </section>
    );
};

export default AddPhoto;