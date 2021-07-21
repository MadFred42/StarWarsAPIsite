import React, { useEffect, useState } from 'react';
import ItemInfo, { Field } from '../ItemInfo/itemInfo';
import SwService from '../../Service/swService';

function PlanetInfo({ planetId }) {
    const swService = new SwService();
    const [id, updateId] = useState(Number);
    console.log(planetId);
    useEffect(() => {
        updateId(planetId);
    }, []);
    
    return (
        <ItemInfo
        itemId={id}
        getData={swService.getPlanet}>
            <Field field='name' label='Name' />
            <Field field='diameter' label='Diameter' />
            <Field field='gravity' label='Gravity' />
            <Field field='population' label='Population' />
            <Field field='climate' label='Climate' />
        </ItemInfo>
    )
}

export default PlanetInfo;