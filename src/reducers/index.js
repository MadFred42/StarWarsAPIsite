const initialState = {
    planets: [],
    characters: [],
    filter: 'all',
    loading: true
};

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'PLANET_LOADED':
            return {
                ...state,
                planets: action.payload,
                loading: false
            };
        case 'FILTER_ITEMS':
            return {
                ...state,
                filter: action.payload
            }
        default:
            return state;
    }

}

export default reducer;