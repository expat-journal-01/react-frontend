import React from 'react';
import { TextField } from '@material-ui/core'
import { FilterHdrOutlined } from '@material-ui/icons'

const initalValues = {
    title: "",
    description: "",
    coverImage: null,
    id: ""
}

const NewStory = () => {
    return(
        <div className = "newStory-form">
            <FilterHdrOutlined fontSize = "large" />
            <hr />
            <h2>Tells us about your newest adventure!</h2>
            <form>
                <TextField
                    className = "text-field"
                    label = "Title"
                    variant = "outlined"
                />
                <TextField
                    className = "text-field"
                    fullWidth
                    multiline
                    label = "Description"
                    variant = "outlined"
                    rows = {5}
                />
            </form>
        </div>
    );
}

export default NewStory;