import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ArrowRight, Delete, Edit } from '@material-ui/icons';

const Story = props => {
    const { push } = useHistory();
    const params = useParams();

    useEffect(() => {
        props.fetchStory(params.id)
    }, [params.id])

    return(
        <div className = "story">
            <h2>{props.storie.title}</h2>
            <div className = "img-container">
                <img src = {props.storie.coverImage} alt = "filler image" />
            </div>
            <p><ArrowRight />{props.storie.description}</p>
            <div className = "edit-delete-btns">
                <Edit onClick = {() => push(`/editStory/${props.storie.id}`)} className = "btn" />
                <Delete onClick = {() => props.deleteStory(props.storie.id)} className = "btn" />
            </div>
        </div>
    );
}

export default Story;