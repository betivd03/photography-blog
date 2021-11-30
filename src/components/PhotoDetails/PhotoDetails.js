const PhotoDetails = () => {
    return (
        <section id="photo-details-page">
            <h1>Photo Details</h1>
            <div className="details">
                <div className="photo-details">
                    <ul>
                        <li>Title: <span>Ocean</span></li>
                        <li>Category: <span>Nature</span></li>
                        <li>Description: <span>This is a photo of Atlantic Ocean</span></li>
                        <li>Location: <span>USA</span></li>
                        <li>Created By: <span>@username</span></li>
                    </ul>
                    <div className="owner">
                        <a href="/details/photoId">Edit</a>
                        <a href="/details/photoId">Delete</a>
                    </div>
                    <div className="user">
                        <a href="/details/photoId">Like</a>
                        <span>Liked</span>
                        <span>Liked by: 3 people</span>
                    </div>
                </div>
                <div className="photo-image">
                    <img src="/images/ocean.jpg" alt="Ocean" />
                </div>
            </div>
        </section>
    );
};

export default PhotoDetails;