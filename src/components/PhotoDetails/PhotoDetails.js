import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.js";

import * as photosService from "../../services/photosService.js";

const PhotoDetails = () => {
    const navigate = useNavigate();

    const [details, setDetails] = useState([]);

    const { user } = useContext(AuthContext);

    const { photoId } = useParams();

    useEffect(() => {
        photosService.getOne(photoId)
            .then(result => {
                setDetails(result);
            });
        }, []);

    let ownerButtons = (
        <div className="owner">
            <Link to="/details/photoId">Edit</Link>
            <Link to="/details/photoId">Delete</Link>
        </div>
    );

    let userButtons = (
        <div className="user">
            <Link to="/details/photoId">Like</Link>
            <span>Liked</span>
        </div>
    );

    return (
        <section id="photo-details-page">
            <h1>Photo Details</h1>
            <div className="details">
                <div className="photo-details">
                    <ul>
                        <li>Title: <span>{details.title}</span></li>
                        <li>Category: <span>{details.category}</span></li>
                        <li>Description: <span>{details.description}</span></li>
                        <li>Location: <span>{details.location}</span></li>
                        <li>Created By: <span>{details.owner}</span></li>
                    </ul>

                    <div className="buttons">
                        {user._id && (user._id === details._ownerId
                            ? ownerButtons
                            : userButtons
                        )}

                        <div className="likes">
                            <span>Liked by: 3 people</span>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="photo-image">
                    <img src={details.imageUrl} alt={details.title} />
                </div>
            </div>
        </section>
    );
};

export default PhotoDetails;