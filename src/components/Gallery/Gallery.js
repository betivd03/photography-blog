import { useState, useEffect } from "react";

import Post from "./Post";

import * as photoService from "../../services/photoService.js";

const Gallery = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        photoService.getAll()
            .then(result => {
                setPosts(result);
            })
    }, []);

    return (
        <section id="gallery-page">
            <h1>Our Gallery</h1>

            {posts.length > 0 
                ? (
                    <div className="posts">
                        {posts.map(x => <Post key={x._id} post={x} />)}
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

export default Gallery;