import React from 'react';
import { ArrowRight, Delete, Edit } from '@material-ui/icons';

const Story = props => {
    return(
        <div className = "story">
            <h2>{props.post.title}</h2>
            <div className = "img-container">
                <img src = {props.post.coverImage} alt = "filler image" />
            </div>
            <p><ArrowRight />{props.post.description}</p>
            <div className = "edit-delete-btns">
                <Edit className = "btn" />
                <Delete className = "btn" />
            </div>
        </div>
    );
}

export default Story;