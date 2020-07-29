import { FETCHING_REQUEST, FETCHING_DATA, RECIEVED_REQUEST, STORY_DELETED } from '../actions/index';

const initalState = {
    username: "",
    posts: [],
    isLoading: false,
    submitLoading: false,
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
            return{
                ...state,
                isLoading: false,
                posts: action.payload
            }
        case RECIEVED_REQUEST:
            return{
                ...state,
                submitLoading: true,
                posts: [...state.posts, action.payload]
            }
        default: 
        return state;
    }
}