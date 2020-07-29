import React from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, InputAdornment } from '@material-ui/core'
import { Launch, FilterHdrOutlined } from '@material-ui/icons'
import './Story.css'

import Story from './Story';

const Stories = props => {
    const { push } = useHistory();

    return ( 
        <div className = "stories-container">
            <div className = "new-story-btn">
                <FilterHdrOutlined className = "icon" fontSize = "large" />
                <TextField
                    onClick = {() => push('/newStory')}
                    fullWidth
                    variant = "outlined"
                    label = "Create Story"
                    size = "small"
                    InputProps = {{
                        endAdornment: (
                            <InputAdornment position = "end">
                                <Launch />
                            </InputAdornment>
                        )
                    }}
                />
            </div>
            {props.loading === true && <img src = 'https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif' alt = "loading img" />}
            {props.posts.length > 0 && props.posts.map((post, index) => {
                return(<Story key = {index} post = {post} deleteStory = {props.deleteStory} />)
            })}
        </div>
    )
}


export default Stories;