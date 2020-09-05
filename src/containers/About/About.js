import React from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import './About.css'
import PostCard from './PostCard'
import education from '../../education';
import experience from '../../experience';

const About = () => {
    const schools = education;
    const work = experience;

    const schoolList = schools.map((p) => {
        return (
            <PostCard
                key={p.id}
                title={p.title}
                position={p.position}
                ward={p.ward}
                duration={p.duration}
            />

        );
    });
    const workList = work.map((p) => {
        return (
            <PostCard
                key={p.id}
                title={p.title}
                position={p.position}
                ward={p.ward}
                duration={p.duration}
            />

        );
    });
    return (

        <div className="cv-container">
            <div>
                <h1>Education </h1>
                {schoolList}
            </div>
            <div>
                <h1>Work Experience </h1>
                {workList}
            </div>
        </div>

    );
}

export default About;
