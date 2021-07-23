import React from 'react';
import ItemList from '../itemList/itemList';
import SwService from '../../Service/swService';

function CharPage() {
    const swService = new SwService();

    return (
        <ItemList 
        getData={swService.getResidents} />
    )
}

export default CharPage;