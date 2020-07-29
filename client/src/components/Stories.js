import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, InputAdornment } from '@material-ui/core'
import { Launch, FilterHdrOutlined } from '@material-ui/icons'
import './Story.css'

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
            {props.stories.length > 0 && props.stories.map((storie, index) => {
                return(<div key = {index}>
                    <h2 onClick = {() => push(`/story/${storie.id}`)}>{storie.title}</h2>
                </div>)
            })}
        </div>
    )
}
{/* <Story key = {index} post = {post} deleteStory = {props.deleteStory} /> */}

export default Stories;