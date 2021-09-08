const initialState = {
    residents: [],
    filter: 'all',
    loading: true,
    planet: [],
    planets: [],
    planetId: null
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
            };
        case 'GET_PLANET':
            return {
                ...state,
                planet: action.payload
            };
        case 'GET_PLANET_ID':
            return {
              ...state,
              planetId: action.payload  
            };
        case 'GET_PLANET_RESIDENTS':
            
            return {
                ...state,
                residents: action.payload
            }
        default:
            return state;
    }

}

export default reducer;