import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import { TextField, Button } from '@material-ui/core'
import { FilterHdrOutlined, CodeSharp, StoreMallDirectory } from '@material-ui/icons'

import { axiosAuth } from '../utils/axiosAuth';

const initalValues = {
    title: "",
    description: "",
    coverImage: ""
}

const EditStory = props => {
    const params = useParams();
    const { push } = useHistory();
    const [story, setStory] = useState(initalValues);

    useEffect(() => {

    }, [params.id])

    const onChange = evt => {
        evt.preventDefault();
        setStory({
            ...story,
            [evt.target.name]: evt.target.value
        })
    }

    const onSubmit = evt => {
        evt.preventDefault();
        axiosAuth().put(`http://157.245.163.179:8000/api/stories/${params.id}`, story)
            .then(response => {
                console.log(response);
                props.getStories();
                push(`/`)
            })
            .catch(error => {
                console.log(error.response);
            })
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
                    value = {story.title}
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
                    value = {story.description}
                    onChange = {onChange}
                />
                <TextField
                className = "text-field"
                fullWidth
                multiline
                label = "Image Url"
                variant = "outlined"
                name = "coverImage"
                value = {story.coverImage}
                onChange = {onChange}
            />
                <Button onClick = {onSubmit} variant = "contained">Apply</Button>
            </form>
        </div>
    );
}

export default EditStory;