import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core'
import { FilterHdrOutlined } from '@material-ui/icons'

import { axiosAuth } from '../utils/axiosAuth';

const initalValues = {
    title: "",
    description: "",
    coverImage: ""
}

const NewStory = props => {
    const { push } = useHistory();
    const [newStory, setNewStory] = useState(initalValues);

    const createNewStory = story => {
        axiosAuth().post(`https://www.expat-journal.online/api/stories`, story)
            .then(response => {
                console.log(response);
                props.getStories();
                push(`/`);
            })
            .catch(error => {
                console.log(error);
            });
        
    }

    const onChange = evt => {
        setNewStory({
            ...newStory,
            [evt.target.name]: evt.target.value
        })
    }

    const onSubmit = evt => {
        evt.preventDefault();
        createNewStory(newStory);
    }

    return(
        <div className = "newStory-form">
            <FilterHdrOutlined />
            <hr />
            <h2>Tells us about your newest adventure!</h2>
            <form onSubmit = {onSubmit}>
                <TextField
                    className = "text-field"
                    label = "Title"
                    variant = "outlined"
                    name = "title"
                    value = {newStory.title}
                    onChange = {onChange}
                />
                <TextField
                    className = "text-field"
                    fullWidth
                    multiline
                    label = "Description"
                    variant = "outlined"
                    rows = {5}
                    name = "description"
                    value = {newStory.description}
                    onChange = {onChange}
                />
                <TextField
                className = "text-field"
                fullWidth
                multiline
                label = "Image Url"
                variant = "outlined"
                name = "coverImage"
                value = {newStory.coverImage}
                onChange = {onChange}
            />
                <Button onClick = {onSubmit} variant = "contained">Add Story</Button>
            </form>
        </div>
    );
}

export default NewStory;