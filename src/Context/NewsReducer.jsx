const NewsReducer = (state, action) => {
    switch (action.type) {

        case "GET_NEWS":
            return{
                ...state,
                allnews:action.payload
            }
        default:
            return state
    }
}

export default NewsReducer