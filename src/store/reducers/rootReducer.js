
const initState = {
    cities:[],
}

export const rootReducer = (state = initState, action) => {
    const newState = {...state};
    if (action.type === 'GET_CITIES') {
        newState.cities = action.cities
    }
    return newState;
}
