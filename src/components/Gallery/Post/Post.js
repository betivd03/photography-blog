import { Link } from "react-router-dom";

const Post = ({
    post
}) => {
    return (
        <div className="post">
            <h3>Ocean</h3>
            <Link to={`/details/postId`}>Details</Link>
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

export default Post;