import React from 'react';
import { useHistory } from 'react-router-dom';
import { ArrowRight, Delete, Edit } from '@material-ui/icons';

const Story = props => {
    const { push } = useHistory();

    return(
        <div className = "story">
            <h2>{props.post.title}</h2>
            <div className = "img-container">
                <img src = {props.post.coverImage} alt = "filler image" />
            </div>
            <p><ArrowRight />{props.post.description}</p>
            <div className = "edit-delete-btns">
                <Edit onClick = {() => push(`/editStory/${props.post.id}`)} className = "btn" />
                <Delete onClick = {props.deleteStory(props.post.id)} className = "btn" />
            </div>
        </div>
    );
}

export default Story;