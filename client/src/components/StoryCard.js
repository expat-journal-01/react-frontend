import React from 'react';
import { ArrowRight } from '@material-ui/icons';

const StoryCard = props => {

    return (
        <div>
            <h2>{props.storie.title}</h2>
            <div className = "img-container">
                <img src = {props.storie.coverImage} alt = "filler image" />
            </div>
            <p><ArrowRight />{props.storie.description}</p>
        </div>
    );
}

export default StoryCard;