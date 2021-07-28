import React from 'react';
import ItemList from '../itemList/itemList';
import SwService from '../../Service/swService';
import { withRouter } from 'react-router-dom';

function CharPage({match}) {
    const swService = new SwService();
    
    const {planetId} = match.params;
    return (
        <ItemList
            getData={swService.getResidents}
            onItemSelected={planetId} />
    )
}

export default withRouter(CharPage);