import React  from 'react';
import SwService from '../../Service/swService';
import ItemList from '../itemList/itemList';

function PlanetPage() {
    const swService = new SwService();
    
    return (
        <ItemList 
            className="item-list list-group"
            getData={swService.getAllPlanets}
            onItemSelected={1} />
    )
}

export default PlanetPage;