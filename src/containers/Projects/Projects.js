import React from 'react';
import './Project.css'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import projectsdb from '../../projectsdb'
import ProjectCard from './ProjectCard'


const Projects = () => {
    const projects = projectsdb;

    const projectsList = projects.map((p) => {
        return (
            <ProjectCard
                key={p.id}
                name={p.name}
                desc={p.desc}
                img={p.img}
                alt={p.alt}
                link={p.link}
                code={p.code}
            />




        )

    })
    return (

        <div className="project-container">
            <div>
                <h1>Projects</h1>
                <p className="project-p">Here you can find some of the projects I've done at school. All of my project codes can be found in <a className="extLink" href="http://www.github.com/ellu-laitinen">GitHub.</a> </p>
                {projectsList}
            </div>

        </div>

    );
}

export default Projects;
