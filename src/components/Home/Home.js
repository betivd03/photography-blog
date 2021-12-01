import { useState, useEffect } from "react";

import PhotoCard from "./PhotoCard";

import * as photosService from "../../services/photosService.js";

const Home = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        photosService.getAll()
            .then(result => {
                setPhotos(result);
            })
    }, []);

    return (
        <section id="home-page">
            <header>
                <h1 id="home-blog-header">Welcome to Photography Blog!</h1>
                <p>The best blog for sharing professional photos!</p>
            </header>

            {photos.length > 0
                ? (
                    <div className="photos">
                        {photos.map(x => <PhotoCard key={x._id} photo={x} />)}
                    </div>
                )
                : (
                    <div className="no-photos">
                        <p>No Photos Yet!</p>
                    </div>
                )
            }
            
        </section>
    );
};

export default Home;