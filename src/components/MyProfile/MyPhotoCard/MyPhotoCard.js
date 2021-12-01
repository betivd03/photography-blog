import { Link } from "react-router-dom";

const MyPhotoCard = ({
    photo
}) => {
    return (
        <div className="my-photo-card">
            <h3>Ocean</h3>
            <div className="image">
                <img src="/images/ocean.jpg" alt="Ocean" />
            </div>
            <Link to={`/details/postId`}>Details</Link>
        </div>
    );
};

export default MyPhotoCard;