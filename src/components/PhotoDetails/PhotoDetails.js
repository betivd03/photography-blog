import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.js";

import * as photosService from "../../services/photosService.js";
import * as likesService from "../../services/likesService.js";

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

    const [likes, setLikes] = useState([]);

    useEffect(() => {
        likesService.getLikesPerPhoto(photoId)
            .then(res => {
                setLikes(res);
            });
    }, []);

    const onDeleteClickHandler = (e) => {
        e.preventDefault();

        photosService.del(photoId, user.accessToken)
            .then(() => {
                navigate('/');
            });
    };

    const onLikeClickHandler = (e) => {
        e.preventDefault();

        likesService.likePhoto(photoId, user.accessToken)
            .then(() => {
                navigate('/');
            });
    };

    let ownerButtons = (
        <div className="owner">
            <Link to={`/details/${photoId}/edit`}>Edit</Link>
            <a href="#" onClick={onDeleteClickHandler}>Delete</a>
        </div>
    );

    let userButtons = (
        <div className="user">
            <a href="#" onClick={onLikeClickHandler}>Like</a>
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
                            <span>Liked by: {likes} people</span>
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