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

export {
    planetLoaded,
    filterItems
}