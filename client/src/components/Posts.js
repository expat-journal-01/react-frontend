import React from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, InputAdornment } from '@material-ui/core'
import { Launch, FilterHdrOutlined } from '@material-ui/icons'

const Post = () => {
    const { push } = useHistory();
    
    return(
        <div className = "stories-container">
            <div className = "new-story-btn">
                <FilterHdrOutlined className = "icon" fontSize = "large" />
                <TextField
                    onClick = {() => push('/newPost')}
                    fullWidth
                    variant = "outlined"
                    label = "New Post"
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
        </div>
    );
}

export default Post;