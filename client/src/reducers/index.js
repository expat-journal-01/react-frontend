import { FETCHING_REQUEST, FETCHING_DATA, RECIEVED_REQUEST, STORY_REQUEST_SUCCESS, STORY_DELETED } from '../actions/index';

const initalState = {
    username: "",
    stories: [],
    story: [],
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
                stories: action.payload
            }
        case RECIEVED_REQUEST:
            return{
                ...state,
                submitLoading: true
            }
        case STORY_REQUEST_SUCCESS:
            return {
                ...state,
                stories: [...state.stories, action.payload]
            }
        default: 
        return state;
    }
}