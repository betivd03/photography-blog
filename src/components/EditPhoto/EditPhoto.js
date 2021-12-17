import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.js";

import * as photosService from "../../services/photosService.js";

const EditPhoto = () => {
    const navigate = useNavigate();

    const { user } = useContext(AuthContext); 

    const { photoId } = useParams();

    const [photo, setPhoto] = useState([]);

    const [error, setError] = useState([]);

    useEffect(() => {
        photosService.getOne(photoId)
            .then(res => {
                setPhoto(res);
            })
    }, []);

    const onEditSubmitHandler = (e) => {
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

        photosService.edit({
            title,
            category,
            description,
            location,
            imageUrl
        }, photoId, user.accessToken)
            .then(() => {
                navigate(`/details/${photoId}`);
            });
    };

    return (
        <section id="edit-photo-page">
            {error.length === 0 
                ? <div className="hidden"></div>
                : <div className="error-div"><p>{error}</p></div>}
            
            <form action="" method="POST" className="editPhotoForm" onSubmit={onEditSubmitHandler}>
                <h1 className="formTitle">Edit Photo</h1>
                <ul id="form">
                    <li>
                        <input type="text" id="title" name="title" placeholder="Title" defaultValue={photo.title} />
                    </li>
                    <li>
                        <input type="text" id="category" name="category" placeholder="Category" defaultValue={photo.category} />
                    </li>
                    <li>
                        <input type="text" id="description" name="description" placeholder="Description" defaultValue={photo.description} />
                    </li>
                    <li>
                        <input type="text" id="location" name="location" placeholder="Location" defaultValue={photo.location} />
                    </li>
                    <li>
                        <input type="text" id="imageUrl" name="imageUrl" placeholder="Image URL" defaultValue={photo.imageUrl} />
                    </li>
                    <li>
                        <button id="editPhotoBtn">Edit</button>
                    </li>
                </ul>
            </form>
        </section>
    );
};

export default EditPhoto;