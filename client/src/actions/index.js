import { axiosAuth } from '../utils/axiosAuth';
import { useEffect } from 'react';

export const FETCHING_REQUEST = "FETCHING_REQUEST";
export const FETCHING_DATA = "FETCHING_DATA";
export const RECIEVED_REQUEST = "RECIEVED_REQUEST";
export const STORY_REQUEST_SUCCESS = "STORY_REQUEST_SUCCESS";
export const STORY_DELETED = "STORY_DELETED";

export const fetchStoryData = () => {
    return dispatch => {
        dispatch({ type: FETCHING_REQUEST });
        axiosAuth().get(`http://157.245.163.179:8000/api/stories`)
            .then(response => {
                dispatch({ type: FETCHING_DATA, payload: response.data });
                console.log(response);
            })
            .catch(error => {
                console.log(error.response);
            })
    }
}

export const fetchStory = data => {
    return dispatch => {

    }
}

export const uploadNewStory = data => {
    return dispatch => {
        dispatch({ type: RECIEVED_REQUEST });
        axiosAuth().post(`http://157.245.163.179:8000/api/stories`, data)
            .then(response => {
                console.log(response);
                dispatch({ type: STORY_REQUEST_SUCCESS, payload: response.data });
            })
            .catch(error => {
                console.log(error.response);
            });
    }
}

export const editStory = data => {
    return dispatch => {
        dispatch({ type: RECIEVED_REQUEST });
    }
}

export const deleteStory = data => {
    return dispatch => {
        axiosAuth().delete(`http://157.245.163.179:8000/api/stories/${data}`)
            .then(response => {
                console.log(response);
                dispatch({ type: STORY_DELETED })
            })
            .catch(error => {
                console.log(error.response);
            })
    }
}
