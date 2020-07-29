import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { TextField, Button } from '@material-ui/core'
import { FilterHdrOutlined, Loop } from '@material-ui/icons'

const initalValues = {
    title: "",
    description: "",
    coverImage: ""
}

const NewStory = props => {
    const [newStory, setNewStory] = useState(initalValues);

    const onChange = evt => {
        setNewStory({
            ...newStory,
            [evt.target.name]: evt.target.value
        })
    }

    const onSubmit = evt => {
        evt.preventDefault();
        props.uploadNewStory(newStory);

    }

    return(
        <div className = "newStory-form">
            {props.loading === false && <FilterHdrOutlined fontSize = "large" />}
            {props.loading === true && <Loop fontSize = "large" />}
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
                <Button onClick = {onSubmit} variant = "contained">Add Story</Button>
            </form>
        </div>
    );
}

export default NewStory;