import { FETCHING_REQUEST, FETCHING_DATA } from '../actions/index';

const initalState = {
    username: "",
    posts: [],
    isLoading: false,
    error: ""
}

export const reducer = (state = initalState, action) => {
    switch(action.type) {
        case FETCHING_REQUEST:
            return{
                ...state,
                isLoading: true
            }
        case FETCHING_DATA:
            // return{
            //     ...state,
            //     isLoading: false
            // }
        default: 
        return state;
    }
}