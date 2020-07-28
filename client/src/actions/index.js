import { axiosAuth } from '../utils/axiosAuth';

export const FETCHING_REQUEST = "FETCHING_REQUEST";
export const FETCHING_DATA = "FETCHING_DATA";

export const fetchStoryData = () => {
    return dispatch => {
        dispatch({ type: FETCHING_REQUEST });
        axiosAuth().get(`http://backend-expat-journal.herokuapp.com/api/stories`)
            .then(response => {
                dispatch({ type: FETCHING_DATA, payload: response.data });
                console.log(response);
            })
            .catch(error => {
                console.log(error.response);
            })
    }
}