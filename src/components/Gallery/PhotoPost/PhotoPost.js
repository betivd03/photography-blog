import { Link } from "react-router-dom";

const PhotoPost = ({
    photo
}) => {
    return (
        <div className="post">
            <h3>Ocean</h3>
            <Link to={`/details/photoId`}>Details</Link>
            <div className="creator">
                <img src="/images/profile-photo.jpg" alt="Profile" />
                <p>@username</p>
            </div>
            <div className="photo">
                <img src="/images/ocean.jpg" alt="Ocean" />
            </div>
        </div>
    );
};

export default PhotoPost;