const initialState = {
    residents: [],
    filterActive: 'all',
    filteredResidents: [],
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
            const filteredByGender = state.residents.filter(item => item.gender === action.payload);
            console.log(action.payload);
            if (action.payload === 'all') {

                return {
                    ...state,
                    filterActive: action.payload,
                    filteredResidents: state.residents
                }
            }

            return {
                ...state,
                filterActive: action.payload,
                filteredResidents: filteredByGender
            };
        case 'GET_PLANET':
            console.log(state.filteredResidents);
            return {
                ...state,
                loading: true,
                planet: action.payload
            };
        case 'GET_PLANET_RESIDENTS':
            
            return {
                ...state,
                filteredResidents: action.payload,
                loading: false,
                residents: action.payload
            }
        case 'GO_BACK':
            const newArr = state.filteredResidents.slice(0, -0)
            console.log(state.filteredResidents);
            console.log(newArr);
            return {
                ...state,
                filterActive: 'all',
                filteredResidents: newArr
            }
        default:

            return state;
    }

}

export default reducer;