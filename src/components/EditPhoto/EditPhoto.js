const EditPhoto = () => {
    return (
        <section id="edit-photo-page">
            <form action="" method="POST" className="editPhotoForm">
                <h1 className="formTitle">Edit Photo</h1>
                <ul id="form">
                    <li>
                        <input type="text" id="title" name="title" placeholder="Title" />
                    </li>
                    <li>
                        <input type="text" id="category" name="category" placeholder="Category" />
                    </li>
                    <li>
                        <input type="text" id="description" name="description" placeholder="Description" />
                    </li>
                    <li>
                        <input type="text" id="location" name="location" placeholder="Location" />
                    </li>
                    <li>
                        <input type="text" id="imageUrl" name="imageUrl" placeholder="Image URL" />
                    </li>
                    <li>
                        <button id="editPhotoBtn">Edit</button>
                    </li>
                </ul>
            </form>
        </section>
    );
};

export default EditPhoto;