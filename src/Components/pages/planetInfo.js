import React from 'react';
import ItemInfo, { Field } from '../ItemInfo/itemInfo';
import { Link } from 'react-router-dom';
import SwService from '../../Service/swService';

function PlanetInfo({ planetId }) {
    const swService = new SwService();
    console.log(planetId);
    return (
        <ItemInfo
            itemId={planetId}
            getData={swService.getPlanet}>
                <Field field='name' label='Name' />
                <Field field='diameter' label='Diameter' />
                <Field field='gravity' label='Gravity' />
                <Field field='population' label='Population' />
                <Field field='climate' label='Climate' />
                <Link to='/'></Link>
        </ItemInfo>
    )
}

export default PlanetInfo;