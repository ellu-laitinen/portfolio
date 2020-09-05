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
        <Container>
            <h1>Education </h1>
            {schoolList}
            <h1>Work Experience </h1>
            {workList}

            {/*   <h2>Education</h2>
            <Col>
                <div className="cv-div">
                    <h5>Helsinki Business College</h5>
                    <p>05/2021</p>
                    <p>Full Stack Web Development program</p>
                    <p>Vocational qualification of information and communications technology</p>
                </div>
            </Col>

            <Col>
                <div className="cv-div">

                    <h5>Metropolia University of Applied Sciences</h5>
                    <p>12/2015</p>
                    <p>Nursing and Midwifery</p>
                </div>

            </Col>
            <Col>

                <h5>Vaskivuoro High School</h5>
                <p>2004</p>
                <p>YO-tutkinto in english</p>

            </Col>


            <h2>Work experience</h2>
            <Col>
                <h5>HUS Naistenklinikka</h5>
                <p>-7.1.2020</p>
                <p>Midwife</p>
                <p>Maternty ward</p>
                <p></p>
            </Col>

            <Col>

                <h5>HUS Naistenklinikka</h5>
                <p>12/2015</p>
                <p>Midwife</p>
                <p>Labor and delivery ward</p>

            </Col>
            <Col>

                <h5>HUS Naistenklinikka</h5>
                <p>2004</p>
                <p>Midwofe</p>
                <p>Maternity Ward</p>

            </Col> */}

        </Container>
    );
}

export default About;
