const Home = () => {
    return (
        <section id="home-page">
            <header>
                <h1 id="home-blog-header">Welcome to Photography Blog!</h1>
                <p>The best blog for sharing professional photos!</p>
            </header>
            <div className="photos">
                <div className="photo-card">
                    <h3>Ocean</h3>
                    <div className="image">
                        <img src="/images/ocean.jpg" alt="Ocean" />
                    </div>
                    <a href="/details/photoId">Details</a>
                </div>
                <div className="photo-card">
                    <h3>Is</h3>
                    <div className="image">
                        <img src="/images/ocean.jpg" alt="Is" />
                    </div>
                    <a href="/details/photoId">Details</a>
                </div>
                <div className="photo-card">
                    <h3>Blue</h3>
                    <div className="image">
                        <img src="/images/ocean.jpg" alt="Blue" />
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

export default Home;