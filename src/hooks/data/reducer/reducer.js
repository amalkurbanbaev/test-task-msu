const reducer = (state, action) => {
    switch (action.type) {
        case 'movies':
            return {
                ...state,
                movies: action.payload,
            }
        case 'movie':
            return {
                ...state,
                movie: action.payload,
            }
        default:
            return state
    }
}

export default reducer
