const MyProfile = () => {
    return (
        <section id="my-profile-page">
            <div className="profile-info">
                <div className="profile-photo">
                    <img src="/images/profile-photo.jpg" alt="Profile" />
                </div>
                <div className="user-info">
                    <p>@username</p>
                </div>
            </div>
            <hr />
            <div className="my-photos">
                <div className="my-photo-card">
                    <h3>Ocean</h3>
                    <div className="image">
                        <img src="/images/ocean.jpg" alt="Ocean" />
                    </div>
                    <a href="/details/photoId">Details</a>
                </div>
                <div className="my-photo-card">
                    <h3>Is</h3>
                    <div className="image">
                        <img src="/images/ocean.jpg" alt="Ocean" />
                    </div>
                    <a href="/details/photoId">Details</a>
                </div>
                <div className="my-photo-card">
                    <h3>Blue</h3>
                    <div className="image">
                        <img src="/images/ocean.jpg" alt="Ocean" />
                    </div>
                    <a href="/details/photoId">Details</a>
                </div>
            </div>
            <div className="no-photos">
                <p>No Photos Yet!</p>
            </div>
        </section>
    );
};

export default MyProfile;