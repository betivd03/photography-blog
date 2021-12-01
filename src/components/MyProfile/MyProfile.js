import { useState, useEffect } from "react";

import MyPhotoCard from "./MyPhotoCard";

import * as photoService from "../../services/photoService.js";

const MyProfile = () => {
    const [myPhotos, setMyPhotos] = useState([]);

    useEffect(() => {
        photoService.getAll()
            .then(result => {
                setMyPhotos(result);
            })
    }, []);

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

            {myPhotos.length > 0
                ? (
                    <div className="my-photos">
                        {myPhotos.map(x => <MyPhotoCard key={x._id} photo={x} />)}
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

export default MyProfile;