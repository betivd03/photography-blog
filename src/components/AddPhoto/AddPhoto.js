import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.js";

import * as photosService from "../../services/photosService.js";

const AddPhoto = () => {
    const { user } = useContext(AuthContext); 
    
    const navigate = useNavigate();

    const [error, setError] = useState([]);

    const onAddSubmitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { title, category, description, location, imageUrl } = Object.fromEntries(formData);
        
        if (title === '' || category === '' || description === '' || location === '' || imageUrl === '') {
            return setError('All fields are required!');
        } else if (title.length < 3) {
            return setError('Title must be at least 3 characters long!');
        } else if (category.length < 3) {
            return setError('Category must be at least 3 characters long!');
        } else if (description.length < 3) {
            return setError('Description must be at least 3 characters long!');
        } else if (location.length < 3) {
            return setError('Location must be at least 3 characters long!');
        }

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
            {error.length === 0 
                ? <div className="hidden"></div>
                : <div className="error-div"><p>{error}</p></div>}

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