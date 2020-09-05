import React from 'react';
import './Project.css'


const Projects = () => {
    return (
        <div>
            <h1>Projects</h1>
            <p>Here you can find some of the project I've done at school</p>
            <div>
                <h4>Music from my year</h4>
                <p>Music app that uses Spotify API. School project by 3 students. Amount of time spent on the project: 3,5 weeks. </p>
                <a href="http://lauratellervo.fi/mymusic/#" target="_blank" rel="noopener noreferrer">Link to app</a>
                <a href="https://github.com/ellu-laitinen/music-app" target="_blank" rel="noopener noreferrer">Source code</a>
                <div>
                    <img className="musicApp" src="./images/my-music1.png" alt="App front page" />
                    <img className="musicApp" src="./images/my-music2.png" alt="App search page" />
                    <img className="musicApp" src="./images/my-music3.png" alt="App results example page" />
                </div>
            </div>
        </div>
    );
}

export default Projects;
