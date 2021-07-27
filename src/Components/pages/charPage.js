import React, { useState } from 'react';
import ItemList from '../itemList/itemList';
import SwService from '../../Service/swService';

function CharPage() {
    const swService = new SwService();

    const [id, updateId] = useState(1);
    
    useState(() => {
        getId();
    }, [id])

    function getId(id) {
        updateId(id)
    }

    return (
        <ItemList 
        getData={swService.getResidents}
        getId={getId}
        id={id} />
    )
}

export default CharPage;