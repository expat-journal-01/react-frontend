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

const NewPost = props => {
    const { push } = useHistory();
    const [post, setPost] = useState(initalValues);

    
    const createNewPost = setNewPost => {
        axiosAuth().post(`http://157.245.163.179:8000/api/posts`, setNewPost)
            .then(response => {
                console.log(response);
                props.getPosts();
                push(`/posts`);
            })
            .catch(error => {
                console.log(error);
            });
        
    }

    const onChange = evt => {
        setPost({
            ...post,
            [evt.target.name]: evt.target.value
        })
    }

    const onSubmit = evt => {
        evt.preventDefault();
        createNewPost(post);
    }

    return(
        <div>
            <FilterHdrOutlined />
            <hr />
            <h2>Share with the world</h2>
            <form>
                <TextField
                    className = "text-field"
                    label = "Title"
                    variant = "outlined"
                    name = "title"
                    value = {post.title}
                />
                <TextField
                    className = "text-field"
                    fullWidth
                    multiline
                    label = "Description"
                    variant = "outlined"
                    rows = {5}
                    name = "description"
                    value = {post.description}
                />
                <TextField
                className = "text-field"
                fullWidth
                multiline
                label = "Image Url"
                variant = "outlined"
                name = "coverImage"
                value = {post.coverImage}
            />
                <Button variant = "contained">Add Story</Button>
            </form>
        </div>
    );
}

export default NewPost;