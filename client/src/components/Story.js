import React from 'react';
import { ArrowRight, Delete, Edit } from '@material-ui/icons';

const Story = props => {
    return(
        <div className = "story">
            <h2>{props.post.title}</h2>
            <div className = "img-container">
                <img src = "https://images.unsplash.com/flagged/photo-1570817203372-4ed3a000e551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=452&q=80" alt = "filler image" />
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