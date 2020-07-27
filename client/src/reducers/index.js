const initalState = {
    username: "",
    password: "",
    post: {
        title: "",
        description: "",
        coverImage: "",
        userId: "",
    },
    isLoading: false,
    error: ""
}

export const reducer = (state = initalState, action) => {
    switch(action.type) {
        default: 
        return state;
    }
}