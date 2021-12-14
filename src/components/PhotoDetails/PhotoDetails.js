import { useState, useEffect } from "react";

import { useNavigate, useParams, Link } from "react-router-dom";

import * as photosService from "../../services/photosService.js";

const PhotoDetails = () => {
    const navigate = useNavigate();

    const [details, setDetails] = useState([]);

    const { photoId } = useParams();

    useEffect(() => {
        photosService.getOne(photoId)
            .then(result => {
                setDetails(result)
            })
    }, []);

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
                        <li>Created By: <span>@username</span></li>
                    </ul>
                    <div className="owner">
                        <Link to="/details/photoId">Edit</Link>
                        <Link to="/details/photoId">Delete</Link>
                    </div>
                    <div className="user">
                        <Link to="/details/photoId">Like</Link>
                        <span>Liked</span>
                        <span>Liked by: 3 people</span>
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