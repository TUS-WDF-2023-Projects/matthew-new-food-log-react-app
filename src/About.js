import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div class="about-container">
            <h2>Welcome to my food log!</h2><br /><br />

            <p>FAQ's<br /><br />

                1. What is My Food Log?<br />

                My Food log is a mobile application that helps users keep track of their daily meals.<br /><br />

                2. How does it work?<br />

                The app allows users to keep track of their daily meals using table formats. Users can update, delete and add new meal enteries. <br /><br />

                3. Is it free to download?<br />

                Yes, my food log is completly free for users to download.<br /><br />

            </p>
            <Link to="/"><button id="home-button">Home</button></Link>
        </div>
    )
}

export default About