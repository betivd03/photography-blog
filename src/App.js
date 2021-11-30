function App() {
    return (
        <div>
            <nav>
                <div className="nav-image">
                <a href="/"><img src="/images/photograhy_blog_logo.png" alt="Logo" /></a>
            </div>
            <div className="navbar">
                <a href="/gallery">Gallery</a>
                <a href="/about">About</a>
                <div className="logged">
                    <a href="/add">Add Photo</a>
                    <a href="/my-profile">My Profile</a>
                    <a href="/logout">Logout</a>
                    <p id="welcome">Welcome, @username</p>
                </div>
                <div className="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
            </div>
            </nav>

            <main>
                <div className="root">
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
                    <section id="about-page">
                        <div className="aboutBlog">
                            <h1 id="about-blog-header">About Blog</h1>
                            <div className="centerInfo">
                                <img src="/images/camera_logo.png" alt="Photography Blog's logo" />
                                <h2>Photography Blog</h2>
                                <p>Blog for sharing professional photos</p>
                            </div>
                        </div>
                        <div className="aboutUs">
                            <h1 id="about-us-header">About Us</h1>
                            <div className="centerInfo">
                                <img src="/images/me.jpg" alt="Beatris M. Borislavova" />
                                <h2>Beatris M. Borislavova</h2>
                                <p>Creator and owner of the blog</p>
                            </div>
                        </div>
                    </section>
                    <section id="login-page">
                        <form action="" method="POST" className="loginForm">
                            <h1 className="formTitle">Login</h1>
                            <ul id="form">
                                <li>
                                    <input type="text" id="username" name="username" placeholder="Username" />
                                </li>
                                <li>
                                    <input type="password" id="password" name="password" placeholder="Password" />
                                </li>
                                <li>
                                    <button id="loginBtn">Login</button>
                                </li>
                                <li>
                                    <p id="register">Don't have an account yet? <a href="/register">Sign up</a></p>
                                </li>
                            </ul>
                        </form>
                    </section>
                    <section id="register-page">
                        <form action="" method="POST" className="registerForm">
                            <h1 className="formTitle">Register</h1>
                            <ul id="form">
                                <li>
                                    <input type="text" id="email" name="email" placeholder="Email" />
                                </li>
                                <li>
                                    <input type="text" id="username" name="username" placeholder="Username" />
                                </li>
                                <li>
                                    <input type="password" id="password" name="password" placeholder="Password" />
                                </li>
                                <li>
                                    <input type="password" id="rePassword" name="rePassword" placeholder="Repeat Password" />
                                </li>        
                                <li>
                                    <button id="registerBtn">Register</button>
                                </li>
                                <li>
                                    <p id="login">Already have an account? <a href="/login">Sign in</a></p>
                                </li>
                            </ul>
                        </form>
                    </section>
                    <section id="add-photo-page">
                        <form action="" method="POST" className="addPhotoForm">
                            <h1 className="formTitle">Add Photo</h1>
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
                                    <button id="addPhotoBtn">Add</button>
                                </li>
                            </ul>
                        </form>
                    </section>
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
                </div>
            </main>
            <footer>All rights reserved &copy;</footer>
        </div>
    );
}

export default App;