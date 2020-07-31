import React from 'react';
import { ArrowRight } from '@material-ui/icons';

const StoryCard = props => {

    if(props.storie.coverImage === "" || props.storie.coverImage === null) {
        props.storie.coverImage = "https://images.unsplash.com/photo-1572965933956-65d960e6b11b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80";
    }
    else {
        props.storie.coverImage = props.storie.coverImage;
    }

    return (
        <div className = "story">
            <h2>{props.storie.title}</h2>
            <div className = "img-container">
                <img src = {`${props.storie.coverImage}`} alt = "story img" />
            </div>
            <p><ArrowRight />{props.storie.description}</p>
        </div>
    );
}

export default StoryCard;