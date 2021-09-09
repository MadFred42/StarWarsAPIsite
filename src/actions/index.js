const planetLoaded = (data) => {
    return {
        type: 'PLANET_LOADED',
        payload: data
    }
}

const filterItems = (filter) => {
    return {
        type: 'FILTER_ITEMS',
        payload: filter
    }
}

const getPlanet = (data) => {
    return {
        type: 'GET_PLANET',
        payload: data
    }
}

const getPlanetResidents = (data) => {
    return {
        type: 'GET_PLANET_RESIDENTS',
        payload: data
    }
}

export {
    planetLoaded,
    filterItems,
    getPlanet,
    getPlanetResidents
}