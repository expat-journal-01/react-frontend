import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core'
import { FilterHdrOutlined, Loop } from '@material-ui/icons'

const initalValues = {
    title: "",
    description: "",
    coverImage: "",
    id: ""
}

const EditStory = props => {

    const onChange = evt => {
        evt.preventDefault();
    }

    const onSubmit = evt => {
        evt.preventDefault();

        props.editStory();
    }

    return(
        <div className = "newStory-form">
            <FilterHdrOutlined fontSize = "large" />
            <hr />
            <br />
            <form onSubmit = {onSubmit}>
                <TextField
                    className = "text-field"
                    label = "Title"
                    variant = "outlined"
                    name = "title"
                    
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
                    
                    onChange = {onChange}
                />
                <Button onClick = {onSubmit} variant = "contained">Apply</Button>
            </form>
        </div>
    );
}

export default EditStory;