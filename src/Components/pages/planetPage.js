import React  from 'react';
import ItemInfo from '../itemInfo';

function PlanetPage({match}) {
    const {id} = match.params;
    return (
        <ItemInfo id={id} />
    )
}

export default PlanetPage;