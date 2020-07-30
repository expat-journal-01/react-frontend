import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Delete, Edit } from '@material-ui/icons';

import StoryCard from './StoryCard';
import { axiosAuth } from '../utils/axiosAuth';

const Story = props => {
    const [story, setStory] = useState([]);
    const { push } = useHistory();
    const params = useParams();

    useEffect(() => {
        fetchStory(params.id);
    }, [params.id])

    const fetchStory = id => {
        axiosAuth().get(`https://157.245.163.179:8000/api/stories/${id}`)
            .then(response => {
                setStory(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error.response);
            })
    }

    const deleteStory = id => {
        axiosAuth().delete(`https://157.245.163.179:8000/api/stories/${id}`)
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
        <div>
            {
                story.map((stor) => {
                    return(
                        <div key = {stor.id} className = "story">
                            <StoryCard storie = {stor} />
                            <div className = "edit-delete-btns">
                                <Edit onClick = {() => push(`/editStory/${stor.id}`)} className = "btn" />
                                <Delete onClick = {() => deleteStory(stor.id)} className = "btn" />
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Story;