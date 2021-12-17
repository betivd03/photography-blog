import { Link } from "react-router-dom";

import "./PhotoCard.css";

const PhotoCard = ({
    photo
}) => {
    return (
        <div className="photo-card">
            <h3>{photo.title}</h3>
            <div className="image">
                <img src={photo.imageUrl} alt={photo.title} />
            </div>
            <Link to={`/details/${photo._id}`}>Details</Link>
        </div>
    );
};

export default PhotoCard;