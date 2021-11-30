const Gallery = () => {
    return (
        <section id="gallery-page">
            <h1>Our Gallery</h1>
            <div className="posts">
                <div className="post">
                    <h3>Ocean</h3>
                    <a href="/details/photoId">Details</a>
                    <div className="creator">
                        <img src="/images/profile-photo.jpg" alt="Profile" />
                        <p>@username</p>
                    </div>
                    <div className="photo">
                        <img src="/images/ocean.jpg" alt="Ocean" />
                    </div>
                </div>
                <div className="post">
                    <h3>Is</h3>
                    <a href="/details/photoId">Details</a>
                    <div className="creator">
                        <img src="/images/profile-photo.jpg" alt="Profile" />
                        <p>@username</p>
                    </div>
                    <div className="photo">
                        <img src="/images/ocean.jpg" alt="Ocean" />
                    </div>
                </div>
                <div className="post">
                    <h3>Blue</h3>
                    <a href="/details/photoId">Details</a>
                    <div className="creator">
                        <img src="/images/profile-photo.jpg" alt="Profile" />
                        <p>@username</p>
                    </div>
                    <div className="photo">
                        <img src="/images/ocean.jpg" alt="Ocean" />
                    </div>
                </div>
            </div>
            <div className="no-photos">
                <p>No Photos Yet!</p>
            </div>
        </section>
    );
};

export default Gallery;