import React, { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { TextField, InputAdornment } from '@material-ui/core'
import { Launch, FilterHdrOutlined } from '@material-ui/icons'
import './Story.css'

import StoryCard from './StoryCard';

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
            {
                props.stories.map((storie, index) => {
                    return(
                        <div className = "story" key = {index}>
                            <Link class = "story-link" to = {`/story/${storie.id}`}>
                                <StoryCard classname = "storyLink" storie = {storie} />
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default Stories;