import React from 'react';
import './ProjectCard.css'

const ProjectCard = ({ name, desc, img, alt, link, code }) => {
    return (
        <div className="projectcard">
            <h3>{name}</h3>
            <p >{desc}</p>
            <img className="project-image" src={img} alt={alt} />
            <br></br>

            <a className="extLink" href={link} target="_blank" rel="noopener noreferrer">Link to app</a>
            <br></br>
            <a className="extLink" href={code} target="_blank" rel="noopener noreferrer">Link to source code</a>
        </div>
    );
}

export default ProjectCard;
