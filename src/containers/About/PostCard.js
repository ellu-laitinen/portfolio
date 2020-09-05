import React from 'react';
import Card from 'react-bootstrap/Card'
import './PostCard.css'

const PostCard = ({ title, position, ward, duration }) => {
    return (
        <div className="postcard">
            <h3>{title}</h3>
            <p>{duration}</p>
            <p>{position}</p>
            <p>{ward}</p>

        </div>
    );
}

export default PostCard;
